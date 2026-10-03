---
title: Normalize Audio Options
displayed_sidebar: apiSidebar
---
This section covers the supported settings for the method [`Timeline:NormalizeAudioLevel`](../resolve_api/Timeline.md#normalizeaudioleveltimelineitems-normalizeaudiooptions).

The normalizeAudioOptions setting is a dictionary containing the following keys:

`normalizationMode`: string (one of the mode names returned by [`Timeline:GetNormalizeAudioModes`](../resolve_api/Timeline.md#getnormalizeaudiomodes). Default: "Sample Peak Program")

`targetLevel`: float (target level in dBFS, example: -9.0)

`targetLoudness`: float (target loudness in LKFS, example: -24.0)

`setLevelMode`: one of the set level mode constants below (default: `resolve.NORMALIZE_AUDIO_SET_LEVEL_RELATIVE`)

## Set level modes

`setLevelMode` can be one of the following constants:

```jsx
resolve.NORMALIZE_AUDIO_SET_LEVEL_RELATIVE
resolve.NORMALIZE_AUDIO_SET_LEVEL_INDEPENDENT
```
