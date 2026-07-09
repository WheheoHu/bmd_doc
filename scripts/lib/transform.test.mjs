import { test } from 'node:test';
import assert from 'node:assert/strict';
import { unescapeBraces, convertAdmonitions, rewriteLinks, transformDoc } from './transform.mjs';

test('unescapeBraces restores MDX-escaped braces', () => {
  assert.equal(unescapeBraces('RemoveMotionBlur(\\{deblurOption\\})'), 'RemoveMotionBlur({deblurOption})');
});

test('convertAdmonitions turns :::warning/:::danger into blockquotes', () => {
  const warn = ':::warning\n\nChange at 19.1.0\n\n:::';
  assert.equal(convertAdmonitions(warn), '> ⚠️ Change at 19.1.0\n');

  const danger = ':::danger\n\nMove to [Graph](./Graph.md#x) since 19.1.0\n\n:::';
  assert.equal(convertAdmonitions(danger), '> ❗ Move to [Graph](./Graph.md#x) since 19.1.0\n');

  const note = ':::note\n\nHello world\n\n:::';
  assert.equal(convertAdmonitions(note), '> Hello world\n');
});

test('rewriteLinks remaps doc folders and the space filename', () => {
  assert.equal(
    rewriteLinks('see [X](../resolve_settings/RenderSettings.md#a)'),
    'see [X](../settings/RenderSettings.md#a)'
  );
  assert.equal(
    rewriteLinks('see [Y](../resolve_api/Graph.md#b)'),
    'see [Y](../api/Graph.md#b)'
  );
  assert.equal(
    rewriteLinks('[Z](../resolve_settings/TimelineItemPropertie s.md)'),
    '[Z](../settings/TimelineItemProperties.md)'
  );
  assert.equal(
    rewriteLinks('[D](../other/misc.md)'),
    '[D](../deprecated.md)'
  );
});

test('transformDoc handles an api file end to end', () => {
  const raw = [
    '---',
    'displayed_sidebar: apiSidebar',
    '---',
    '> New in 21.0.2',
    '',
    '### AddTrack(trackType, newTrackOptions)',
    '',
    'Optional newTrackOptions = \\{\'index\': 1\\}',
    '',
    ':::warning',
    '',
    'Change at 19.1.0',
    '',
    ':::',
    '',
    'See [Graph](./Graph.md#x) and [RS](../resolve_settings/RenderSettings.md#y).',
  ].join('\n');
  const out = transformDoc(raw, { kind: 'api', name: 'Timeline' });
  assert.match(out, /^# Timeline\n/);
  assert.match(out, /> New in 21\.0\.2/);            // version marker preserved
  assert.match(out, /newTrackOptions = \{'index': 1\}/); // braces unescaped
  assert.match(out, /> ⚠️ Change at 19\.1\.0/);       // admonition converted
  assert.match(out, /\(\.\.\/settings\/RenderSettings\.md#y\)/); // link rewritten
  assert.doesNotMatch(out, /displayed_sidebar/);
  assert.doesNotMatch(out, /:::/);
});

test('transformDoc uses frontmatter title for settings files', () => {
  const raw = '---\ntitle: Render Settings\ndisplayed_sidebar: apiSidebar\n---\n`MarkIn`: int\n';
  const out = transformDoc(raw, { kind: 'settings', name: 'RenderSettings' });
  assert.match(out, /^# Render Settings\n/);
});
