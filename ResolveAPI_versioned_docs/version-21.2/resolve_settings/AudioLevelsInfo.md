---
title: Audio Levels Info
displayed_sidebar: apiSidebar
---
This section covers the dictionary returned by [`TimelineItem:AnalyzeAudioLevels`](../resolve_api/TimelineItem.md#analyzeaudiolevelsstandard).

The audio levels dictionary contains the following keys:

`TruePeak`: float (true peak in dBFS, example: -4.5. -100.0 if no level was measured)

`Integrated`: float (integrated loudness in LUFS, example: -18.4. -100.0 if no level was measured)
