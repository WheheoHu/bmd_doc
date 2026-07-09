import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { validateSkill } from '../validate-skill.mjs';

function scaffold(files) {
  const dir = mkdtempSync(path.join(tmpdir(), 'skill-'));
  for (const [rel, content] of Object.entries(files)) {
    const abs = path.join(dir, rel);
    mkdirSync(path.dirname(abs), { recursive: true });
    writeFileSync(abs, content);
  }
  return dir;
}

test('clean skill passes', () => {
  const dir = scaffold({
    'SKILL.md': '---\nname: x\n---\n# X\n[gs](references/getting-started.md)\n',
    'references/getting-started.md': '# GS\n[t](api/Timeline.md#addtrack)\n',
    'references/api/Timeline.md': '# Timeline\n### AddTrack\nbody\n',
  });
  assert.deepEqual(validateSkill(dir), []);
});

test('flags artifacts, broken links and broken anchors', () => {
  const dir = scaffold({
    'SKILL.md': '# X\n[bad](references/nope.md)\n[anchor](references/api/Timeline.md#missing)\n',
    'references/api/Timeline.md': '---\ndisplayed_sidebar: apiSidebar\n---\n# Timeline\n:::warning\nx\n:::\ncall \\{a\\}\n',
  });
  const problems = validateSkill(dir).join('\n');
  assert.match(problems, /displayed_sidebar/);
  assert.match(problems, /:::/);
  assert.match(problems, /escaped brace/);
  assert.match(problems, /nope\.md/);
  assert.match(problems, /#missing/);
});
