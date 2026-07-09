import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scanMoves, buildDeprecated } from './deprecated.mjs';

const API = [
  '### ApplyGradeFromDRX(path, gradeMode, [items])',
  '',
  ':::danger',
  '',
  'Move to [Graph](./Graph.md#applygradefromdrxpath-grademode) since 19.1.0',
  '',
  ':::',
].join('\n');

test('scanMoves captures method, target and version', () => {
  const moves = scanMoves(API, 'Timeline');
  assert.equal(moves.length, 1);
  assert.deepEqual(moves[0], {
    object: 'Timeline',
    method: 'ApplyGradeFromDRX(path, gradeMode, [items])',
    target: '[Graph](./Graph.md#applygradefromdrxpath-grademode)',
    since: '19.1.0',
  });
});

test('buildDeprecated assembles page with moved-methods section', () => {
  const misc = '---\ntitle: Deprecated API\ndisplayed_sidebar: apiSidebar\n---\n## Deprecated Resolve API Functions\n\nProjectManager\n';
  const out = buildDeprecated(misc, scanMoves(API, 'Timeline'));
  assert.match(out, /^# Deprecated API\n/);
  assert.match(out, /## Deprecated Resolve API Functions/);
  assert.match(out, /## Moved methods/);
  assert.match(out, /`Timeline\.ApplyGradeFromDRX\(path, gradeMode, \[items\]\)` → moved to \[Graph\]\(\.\/api\/Graph\.md#applygradefromdrxpath-grademode\) since 19\.1\.0/);
});
