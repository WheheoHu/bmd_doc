import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { buildSkill } from '../build-skill.mjs';

// NOTE: buildSkill() writes into the committed skill/ tree in place; run from repo root.

test('buildSkill produces a clean skill tree from the real docs', () => {
  const res = buildSkill();
  assert.ok(res.apiCount >= 13, 'has api files');
  assert.ok(res.settingsCount >= 15, 'has settings files');

  const root = 'skill/davinci-resolve-scripting';
  assert.ok(existsSync(`${root}/SKILL.md`));
  assert.ok(existsSync(`${root}/references/getting-started.md`));
  assert.ok(existsSync(`${root}/references/object-map.md`));
  assert.ok(existsSync(`${root}/references/deprecated.md`));
  assert.ok(existsSync(`${root}/references/api/Timeline.md`));
  assert.ok(existsSync(`${root}/references/settings/RenderSettings.md`));
  // space filename normalized:
  assert.ok(existsSync(`${root}/references/settings/TimelineItemProperties.md`));

  const timeline = readFileSync(`${root}/references/api/Timeline.md`, 'utf8');
  assert.doesNotMatch(timeline, /:::/, 'no admonitions left');
  assert.doesNotMatch(timeline, /displayed_sidebar/, 'no frontmatter left');
  assert.doesNotMatch(timeline, /\\\{/, 'no escaped braces left');

  const skill = readFileSync(`${root}/SKILL.md`, 'utf8');
  assert.doesNotMatch(skill, /\{\{/, 'all template vars injected');
});
