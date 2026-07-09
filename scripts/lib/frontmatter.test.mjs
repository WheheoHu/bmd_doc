import { test } from 'node:test';
import assert from 'node:assert/strict';
import { stripFrontmatter } from './frontmatter.mjs';

test('parses title and strips block, tolerating blank lines', () => {
  const raw = '---\n\ntitle: Timeline Export Properties\ndisplayed_sidebar: apiSidebar\n\n---\nBody line 1\n';
  const { data, body } = stripFrontmatter(raw);
  assert.equal(data.title, 'Timeline Export Properties');
  assert.equal(data.displayed_sidebar, 'apiSidebar');
  assert.equal(body, 'Body line 1\n');
});

test('returns body unchanged when no frontmatter', () => {
  const { data, body } = stripFrontmatter('no frontmatter here');
  assert.deepEqual(data, {});
  assert.equal(body, 'no frontmatter here');
});
