import { test } from 'node:test';
import assert from 'node:assert/strict';
import { injectVars, readVersion, readLastUpdated } from './templates.mjs';

test('injectVars replaces known keys, keeps unknown', () => {
  assert.equal(injectVars('v{{VERSION}} {{NOPE}}', { VERSION: '21.0.2' }), 'v21.0.2 {{NOPE}}');
});

test('readVersion returns first entry', () => {
  assert.equal(readVersion('[\n  "21.0.2",\n  "20.3.0"\n]'), '21.0.2');
});

test('readLastUpdated extracts the date', () => {
  assert.equal(readLastUpdated('# \n\n💡 Last Updated: 26 May 2026\n\n---'), '26 May 2026');
});
