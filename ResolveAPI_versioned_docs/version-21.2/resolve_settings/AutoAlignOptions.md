---
title: Auto Align Options
displayed_sidebar: apiSidebar
---
This section covers the supported settings for the method [`Timeline:AutoAlignClips`](../resolve_api/Timeline.md#autoalignclipstimelineitems-autoalignoptions).

The autoAlignOptions setting is a dictionary containing the following keys:

`SyncUsing`: one of the sync constants below (default: `resolve.AUTO_ALIGN_CLIPS_USING_TIMECODE`)

`UseTrack`: int (audio track index used for waveform comparison, 1, 2, ... Default: 1) or one of the track constants below. Only used when `SyncUsing` is `resolve.AUTO_ALIGN_CLIPS_USING_WAVEFORM`

## Sync modes

`SyncUsing` can be one of the following constants:

```jsx
resolve.AUTO_ALIGN_CLIPS_USING_WAVEFORM
resolve.AUTO_ALIGN_CLIPS_USING_TIMECODE
```

## Waveform tracks

`UseTrack` can be an audio track index, or one of the following constants:

```jsx
resolve.AUTO_ALIGN_CLIPS_WAVEFORM_TRACK_MIX
resolve.AUTO_ALIGN_CLIPS_WAVEFORM_TRACK_AUTOMATIC
```
