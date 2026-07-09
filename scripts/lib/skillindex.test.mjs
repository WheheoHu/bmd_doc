import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildIndex } from './skillindex.mjs';

test('buildIndex produces sorted api and settings lists', () => {
  const out = buildIndex({
    apiNames: ['Timeline', 'Project'],
    settings: [{ name: 'RenderSettings', title: 'Render Settings' }],
  });
  assert.match(out, /### API Objects/);
  assert.match(out, /- \[Project\]\(references\/api\/Project\.md\)/);
  assert.match(out, /- \[Timeline\]\(references\/api\/Timeline\.md\)/);
  assert.ok(out.indexOf('Project.md') < out.indexOf('Timeline.md'), 'api sorted');
  assert.match(out, /### Settings & Constants/);
  assert.match(out, /- \[Render Settings\]\(references\/settings\/RenderSettings\.md\)/);
});
