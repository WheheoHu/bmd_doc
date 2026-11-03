---
title: Multicam Options
displayed_sidebar: apiSidebar
---
This section covers the supported settings for the method [`MediaPool:CreateMulticamClip`](../resolve_api/MediaPool.md#createmulticamclipclips-multicamoptions), and the grade option accepted by [`TimelineItem:FlattenMulticam`](../resolve_api/TimelineItem.md#flattenmulticamgradeoption).

The multicamOptions setting is a dictionary containing the following keys:

`name`: string (clip name. Auto-generated from the first clip when omitted)

`startTimecode`: string (default: "01:00:00:00")

`frameRate`: float (example: 23.976. Defaults to the project timeline frame rate)

`angleSyncMode`: one of the angle sync mode constants below (default: `resolve.MULTICAM_ANGLE_SYNC_TIMECODE`)

`channelConfig`: int (audio channel used for sync, 1 - 8) or one of the audio sync channel constants below. Only used when `angleSyncMode` is `resolve.MULTICAM_ANGLE_SYNC_AUDIO`

`multicamAudioMode`: one of the multicam audio mode constants below (default: `resolve.MULTICAM_AUDIO_SOURCE`)

`angleNameMode`: one of the angle name mode constants below (default: `resolve.MULTICAM_ANGLE_NAME_SEQUENTIAL`)

`splitAtGaps`: Bool (default: False). Only used when `angleSyncMode` is `resolve.MULTICAM_ANGLE_SYNC_AUDIO`

`useFullClipExtents`: Bool (default: False)

`createBinForSourceClips`: Bool (default: True)

`detectSameCameraClipsMode`: one of the camera detection constants below (default: `resolve.MULTICAM_DETECT_NONE`)

## Angle sync modes

`angleSyncMode` can be one of the following constants:

```jsx
resolve.MULTICAM_ANGLE_SYNC_IN
resolve.MULTICAM_ANGLE_SYNC_OUT
resolve.MULTICAM_ANGLE_SYNC_TIMECODE
resolve.MULTICAM_ANGLE_SYNC_AUDIO
resolve.MULTICAM_ANGLE_SYNC_MARKER
```

## Audio sync channels

`channelConfig` can be an audio channel number from 1 to 8, or one of the following constants:

```jsx
resolve.AUDIO_SYNC_CHANNEL_AUTOMATIC
resolve.AUDIO_SYNC_CHANNEL_MIX
```

## Multicam audio modes

`multicamAudioMode` can be one of the following constants:

```jsx
resolve.MULTICAM_AUDIO_ADAPTIVE
resolve.MULTICAM_AUDIO_SOURCE
resolve.MULTICAM_AUDIO_REFERENCE
resolve.MULTICAM_AUDIO_ALL
```

## Angle name modes

`angleNameMode` can be one of the following constants:

```jsx
resolve.MULTICAM_ANGLE_NAME_SEQUENTIAL
resolve.MULTICAM_ANGLE_NAME_ANGLE
resolve.MULTICAM_ANGLE_NAME_CAMERA
resolve.MULTICAM_ANGLE_NAME_CLIP
resolve.MULTICAM_ANGLE_NAME_FILE
```

## Same-camera detection modes

`detectSameCameraClipsMode` can be one of the following constants:

```jsx
resolve.MULTICAM_DETECT_BY_CAMERA_NUMBER
resolve.MULTICAM_DETECT_BY_ANGLE
resolve.MULTICAM_DETECT_BY_REEL_NUMBER
resolve.MULTICAM_DETECT_BY_REEL_NAME
resolve.MULTICAM_DETECT_BY_ROLL_CARD
resolve.MULTICAM_DETECT_NONE
```

## Flatten grade options

The `gradeOption` argument of [`TimelineItem:FlattenMulticam`](../resolve_api/TimelineItem.md#flattenmulticamgradeoption) can be one of the following constants:

```jsx
resolve.FLATTEN_MULTICAM_COPY_GRADE
resolve.FLATTEN_MULTICAM_RETAIN_GRADE_FROM_ANGLE
```
