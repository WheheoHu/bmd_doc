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

test('buildDeprecated dedups repeats, rewrites settings/api targets, and unescapes braces', () => {
  const moves = [
    { object: 'Timeline', method: 'ApplyGradeFromDRX(path, gradeMode, [items])', target: '[Graph](./Graph.md#applygradefromdrxpath-grademode)', since: '19.1.0' },
    { object: 'Timeline', method: 'ApplyGradeFromDRX(path, gradeMode, [items])', target: '[Graph](./Graph.md#applygradefromdrxpath-grademode)', since: '19.1.0' },
    { object: 'Folder', method: 'RemoveMotionBlur(\\{deblurOption\\})', target: '[Settings](../resolve_settings/MotionDeblurSettings.md)', since: '20.0.0' },
    { object: 'MediaPoolItem', method: 'Foo()', target: '[Bar](../resolve_api/Graph.md#bar)', since: '20.1.0' },
  ];
  const out = buildDeprecated('---\ntitle: Deprecated API\n---\nbody\n', moves);
  assert.equal((out.match(/ApplyGradeFromDRX/g) || []).length, 1);           // deduped
  assert.match(out, /\[Settings\]\(\.\/settings\/MotionDeblurSettings\.md\)/); // ../resolve_settings -> ./settings
  assert.match(out, /\[Bar\]\(\.\/api\/Graph\.md#bar\)/);                      // ../resolve_api -> ./api
  assert.match(out, /`Folder\.RemoveMotionBlur\(\{deblurOption\}\)`/);         // braces unescaped
  assert.doesNotMatch(out, /\\\{/);                                            // no escaped braces remain
});
