import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify, extractHeadingSlugs } from './slug.mjs';

test('slugify matches github-slugger for documented cases', () => {
  assert.equal(slugify('CreateSubtitlesFromAudio(autoCaptionSettings)'), 'createsubtitlesfromaudioautocaptionsettings');
  assert.equal(slugify('RemoveMotionBlur({deblurOption})'), 'removemotionblurdebluroption');
  assert.equal(slugify('GenerateSpeech({speechGenerationSettings}, timecode)'), 'generatespeechspeechgenerationsettings-timecode');
  assert.equal(slugify('TranscribeAudio(useSpeakerDetection=None)'), 'transcribeaudiousespeakerdetectionnone');
});

test('extractHeadingSlugs dedups and ignores fenced code', () => {
  const md = [
    '# Title',
    '### AddTrack(trackType)',
    '### AddTrack(trackType)',
    '```python',
    '# not a heading',
    '```',
  ].join('\n');
  assert.deepEqual(extractHeadingSlugs(md), ['title', 'addtracktracktype', 'addtracktracktype-1']);
});
