import { test } from 'node:test';
import assert from 'node:assert/strict';
import { unescapeBraces, convertAdmonitions } from './transform.mjs';

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
