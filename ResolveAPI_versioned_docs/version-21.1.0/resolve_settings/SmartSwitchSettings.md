---
title: Smart Switch Settings
displayed_sidebar: apiSidebar
---
This section covers the supported settings for the method [`TimelineItem:PerformMulticamSmartSwitch`](../resolve_api/TimelineItem.md#performmulticamsmartswitchsmartswitchsettings).

The smartSwitchSettings setting is a dictionary containing the following keys:

`minEditDuration`: float (minimum edit duration in seconds, 0.5 to 10.0. Default: 1.0)

`editChangeDelay`: float (edit change delay in seconds, 0.0 to 2.0. Default: 0.3)

`isAutoDetectWideAngle`: Bool (auto-detect the wide angle from analysis. Default: True)

`analysisMode`: one of the analysis mode constants below. Overrides `isAutoDetectWideAngle`

`wideAngleID`: string (wide angle name, or "None" to disable. Used when `isAutoDetectWideAngle` is False)

`wideAngleFrequency`: one of the wide angle frequency constants below (default: `resolve.SMART_SWITCH_WIDE_ANGLE_FREQ_MEDIUM`)

`isUseWideAngleForIntroOutro`: Bool (use the wide angle for intro and outro. Default: True)

`isUseWideAngleForSilence`: Bool (use the wide angle for silence. Default: True)

`switchOnVideoOnly`: Bool (default: False). Not supported in adaptive or source audio mode

`quality`: one of the quality constants below (default: `resolve.SMART_SWITCH_QUALITY_BETTER`)

## Analysis modes

`analysisMode` can be one of the following constants:

```jsx
resolve.SMART_SWITCH_ANALYSIS_MODE_NONE
resolve.SMART_SWITCH_ANALYSIS_MODE_DETECT_WIDE_ANGLE
resolve.SMART_SWITCH_ANALYSIS_MODE_AUDIO_ONLY
```

## Wide angle frequencies

`wideAngleFrequency` can be one of the following constants:

```jsx
resolve.SMART_SWITCH_WIDE_ANGLE_FREQ_LOW
resolve.SMART_SWITCH_WIDE_ANGLE_FREQ_MEDIUM
resolve.SMART_SWITCH_WIDE_ANGLE_FREQ_HIGH
```

## Quality

`quality` can be one of the following constants:

```jsx
resolve.SMART_SWITCH_QUALITY_FASTER
resolve.SMART_SWITCH_QUALITY_BETTER
```
