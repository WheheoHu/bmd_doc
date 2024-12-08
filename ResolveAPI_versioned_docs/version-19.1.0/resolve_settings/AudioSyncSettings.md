---

title: Audio Sync Settings
---


This section covers additional notes for the functions [MediaPool:AutoSyncAudio](../resolve_api/MediaPool.md#autosyncaudiomediapoolitems-audiosyncsettings).

AutoSyncAudio takes in a `{audioSyncSettings}` dict, that has the following keys:

```jsx
resolve.AUDIO_SYNC_MODE:                  audioSyncMode (see below),  [resolve.AUDIO_SYNC_TIMECODE by default]
resolve.AUDIO_SYNC_CHANNEL_NUMBER:        channelNumber (see below)   [1 by default]
resolve.AUDIO_SYNC_RETAIN_EMBEDDED_AUDIO: Bool,                       [False by default]
resolve.AUDIO_SYNC_RETAIN_VIDEO_METADATA: Bool,                       [False by default]
```

`audioSyncMode` can be one of the following:

```jsx
resolve.AUDIO_SYNC_WAVEFORM
resolve.AUDIO_SYNC_TIMECODE
```

With `AUDIO_SYNC_WAVEFORM` mode, `channelNumber` is used to determine channel offset for comparison.
`channelNumber` can be one of the following:

```jsx
resolve.AUDIO_SYNC_CHANNEL_AUTOMATIC = -1
resolve.AUDIO_SYNC_CHANNEL_MIX = -2
```
an actual channel offset from input media for waveform comparison.

 `1 <= channel offset <= channelMax`, where channelMax is the channel count of the audio clip in [MediaPoolItems] with the fewest channels.
