---

title: Project and Clip Properties
displayed_sidebar: apiSidebar

---

This section covers additional notes for the functions [`Project:GetSettings`](../resolve_api/Project.md#getsettings), [`Project:SetSettings`](../resolve_api/Project.md#setsettingssettings), [`Timeline:GetSettings`](../resolve_api/Timeline.md#getsettings), [`Timeline:SetSettings`](../resolve_api/Timeline.md#setsettingssettings), [`MediaPoolItem:GetClipProperty`](../resolve_api/MediaPoolItem.md#getclippropertypropertynamenone) and [`MediaPoolItem:SetClipProperty`](../resolve_api/MediaPoolItem.md#setclippropertypropertyname-propertyvalue). These functions are used to get and set properties otherwise available to the user through the Project Settings and the Clip Attributes dialogs.

The single-key forms [`Project:GetSetting`](../resolve_api/Project.md#getsettingsettingname), [`Project:SetSetting`](../resolve_api/Project.md#setsettingsettingname-settingvalue), [`Timeline:GetSetting`](../resolve_api/Timeline.md#getsettingsettingname) and [`Timeline:SetSetting`](../resolve_api/Timeline.md#setsettingsettingname-settingvalue) accept the same keys, but are a [deprecated calling convention](../other/misc.md#deprecated-calling-conventions) since 21.1.0 — prefer the plural `GetSettings` / `SetSettings` forms.

The functions follow a key-value pair format, where each property is identified by a key (the `settingName` or `propertyName` parameter) and possesses a `value` (typically a text value). Keys and values are designed to be easily correlated with parameter names and values in the Resolve UI. [Explicitly enumerated values](#specifically-enumerated-values) for some parameters are listed below.

Some properties may be read only - these include intrinsic clip properties like date created or sample rate, and properties that can be disabled in specific application contexts (e.g. custom colorspaces in an ACES workflow, or output sizing parameters when behavior is set to match timeline)

## Getting values:
Invoke [`Project:GetSettings`](../resolve_api/Project.md#getsettings), [`Timeline:GetSettings`](../resolve_api/Timeline.md#getsettings) or [`MediaPoolItem:GetClipProperty`](../resolve_api/MediaPoolItem.md#getclippropertypropertynamenone) to get a snapshot of all queryable properties (keys and values). [`MediaPoolItem:GetClipProperty`](../resolve_api/MediaPoolItem.md#getclippropertypropertynamenone) can also be called with a single property key; querying an individual property this way will be faster, and getting a property using an invalid key will return a trivial result.

## Setting values:
Invoke [`Project:SetSettings`](../resolve_api/Project.md#setsettingssettings) or [`Timeline:SetSettings`](../resolve_api/Timeline.md#setsettingssettings) with a dict of property keys and valid values, or [`MediaPoolItem:SetClipProperty`](../resolve_api/MediaPoolItem.md#setclippropertypropertyname-propertyvalue) with a single property key and a valid value. 

When setting a parameter, please check the return value to ensure the success of the operation. You can troubleshoot the validity of keys and values by setting the desired result from the UI and checking property snapshots before and after the change.

------

> New in 21.1.0

## Project settings

[`Project:GetSettings`](../resolve_api/Project.md#getsettings) returns all of the keys below in a single dict, and [`Project:SetSettings`](../resolve_api/Project.md#setsettingssettings) accepts any subset of them. Keys marked read only are ignored when setting.

### Timeline format and sizing

`timelineResolutionWidth`: string (example: "1920")

`timelineResolutionHeight`: string (example: "1080")

`timelinePixelAspectRatio`: string ("square", "cinemascope", "16_9" or "4_3")

`timelineFrameRate`: float or string (returned as a number, example: 23.976. Set as a string, example: "23.976" or "29.97 DF")

`timelineDropFrameTimecode`: string ("0" or "1")

`timelineInterlaceProcessing`: string ("0" or "1")

`timelinePlaybackFrameRate`: string (read only, example: "24")

`timelineOutputResMatchTimelineRes`: string ("0" or "1")

`timelineOutputResolutionWidth`: string (example: "1920")

`timelineOutputResolutionHeight`: string (example: "1080")

`timelineOutputPixelAspectRatio`: string ("square", "cinemascope", "16_9" or "4_3")

`timelineInputResMismatchBehavior`: string ("centerCrop", "scaleToFit", "scaleToCrop" or "stretch")

`timelineOutputResMismatchBehavior`: string ("centerCrop", "scaleToFit", "scaleToCrop" or "stretch")

`timelineFrameRateMismatchBehavior`: string (example: "resolve")

`timelineInputResMismatchUseCustomPreset`: string ("0" or "1")

`timelineInputResMismatchCustomPreset`: string (input sizing preset name)

`timelineOutputResMismatchUseCustomPreset`: string ("0" or "1")

`timelineOutputResMismatchCustomPreset`: string (output sizing preset name)

`timelineSampleRate`: string (audio sample rate in Hz, example: "48000")

`timelineSaveThumbsInProject`: string ("0" or "1")

### Retime, motion estimation and scaling

`imageRetimeInterpolation`: string ("nearest", "frameBlend" or "opticalFlow")

`imageMotionEstimationMode`: string (example: "standardFaster")

`imageMotionEstimationRange`: string ("small", "medium" or "larger")

`imageResizeMode`: string (example: "sharper")

`imageDeinterlaceQuality`: string ("normal" or "high")

`imageEnableFieldProcessing`: string ("0" or "1")

### Optimized media and render cache

`perfCacheClipsLocation`: string (cache files directory path)

`perfOptimisedMediaOn`: string ("0" or "1")

`perfProxyMediaMode`: string ("0" disabled, "1" when available, "2" when source not available)

`perfRenderCacheMode`: string ("none", "smart" or "user")

`perfOptimizedResolutionRatio`: string (example: "auto", "original", "half" or "quarter")

`perfAutoRenderCacheEnable`: string ("0" or "1")

`perfAutoRenderCacheAfterTime`: string (idle time in seconds before caching starts, example: "5")

`perfAutoRenderCacheTransition`: string ("0" or "1")

`perfAutoRenderCacheComposite`: string ("0" or "1")

`perfAutoRenderCacheFuEffect`: string ("0" or "1")

`perfOptimisedCodec`: string (read only, optimized media codec name)

`perfProxyResolutionRatio`: string ("original", "half" or "quarter")

`perfRenderCacheCodec`: string (read only, render cache codec name)

### Color management

`isAutoColorManage`: string ("0" or "1")

`rcmPresetMode`: string ("SDR" or "HDR" when isAutoColorManage is "1", otherwise example: "SDR Rec.709" or "Custom")

`separateColorSpaceAndGamma`: string ("0" or "1")

`colorScienceMode`: string ("davinciYRGB", "davinciYRGBColorManaged", "davinciYRGBColorManagedv2", "acescc" or "acescct")

`colorSpaceTimeline`: string (timeline color space, example: "Rec.709")

`colorSpaceTimelineGamma`: string (timeline gamma, example: "Gamma 2.4")

`colorSpaceInput`: string (input color space)

`colorSpaceInputGamma`: string (input gamma)

`colorSpaceOutput`: string (output color space)

`colorSpaceOutputGamma`: string (output gamma)

`colorSpaceOutputToneMapping`: string ("None", "Simple", "Luminance Mapping", "DaVinci", "Saturation Preserving" or "RED IPP2")

`inputDRT`: string ("None", "Simple", "Luminance Mapping", "DaVinci", "Saturation Preserving" or "RED IPP2")

`outputDRT`: string ("None", "Simple", "Luminance Mapping", "DaVinci", "Saturation Preserving" or "RED IPP2")

`useInverseDRT`: string ("0" or "1")

`timelineWorkingLuminanceMode`: string (example: "SDR 100", "HDR 1000", "HDR ER 1000/4000" or "Custom")

`timelineWorkingLuminance`: string (working luminance in nits, example: "1000")

`inputDRTSatRolloffStart`: string (input saturation rolloff start in nits, example: "10000")

`inputDRTSatRolloffLimit`: string (input saturation rolloff limit in nits, example: "10000")

`outputDRTSatRolloffStart`: string (output saturation rolloff start in nits, example: "10000")

`outputDRTSatRolloffLimit`: string (output saturation rolloff limit in nits, example: "10000")

`colorSpaceOutputGamutMapping`: string ("None", "Saturation Mapping" or "RED IPP2 Gamut Mapping")

`imageResizingGamma`: string ("Timeline", "Log", "Linear", "Linear - Tone Mapped", "Gamma" or "Gamma - Tone Mapped")

`graphicsWhiteLevel`: string (graphics white level in nits, example: "200")

`useCATransform`: string ("0" or "1")

`disableFusionToneMapping`: string ("0" or "1")

`useColorSpaceAwareGradingTools`: string ("0" or "1")

### ACES

`colorAcesIDT`: string (ACES Input Device Transform)

`colorAcesGamutCompressType`: string (ACES gamut compression type)

`colorAcesODT`: string (ACES Output Device Transform)

`colorAcesNodeLUTProcessingSpace`: string ("projectSetting", "acesccAp1" or "acesAp0Linear")

### Grading behavior

`colorSpaceOutputToneLuminanceMax`: string (max output luminance in nits, example: "1000")

`colorSpaceOutputGamutSaturationKnee`: string (saturation knee, example: "0.9")

`colorSpaceOutputGamutSaturationMax`: string (saturation max, example: "1")

`colorKeyframeDynamicsStartProfile`: string (keyframe dynamics start profile, example: "1")

`colorKeyframeDynamicsEndProfile`: string (keyframe dynamics end profile, example: "1")

`colorLuminanceMixerDefaultZero`: string ("0" or "1")

`colorUseLegacyLogGrades`: string ("0", "1" or "2")

`colorUseContrastSCurve`: string ("0" or "1")

`colorUseStereoConvergenceForEffects`: string ("0" or "1")

`colorUseLocalVersionsAsDefault`: string ("0" or "1")

`colorUseBGRPixelOrderForDPX`: string ("0" or "1")

### Gallery stills

`colorGalleryStillsLocation`: string (gallery stills directory path)

`colorGalleryStillsNamingEnabled`: string ("0" or "1")

`colorGalleryStillsNamingPattern`: string (gallery stills naming pattern)

`colorGalleryStillsNamingCustomPattern`: string (gallery stills custom naming pattern)

`colorGalleryStillsNamingWithStillNumber`: string ("0" or "1")

### Color version names

`colorVersion1Name`: string (name of color version 1)

`colorVersion2Name`: string (name of color version 2)

`colorVersion3Name`: string (name of color version 3)

`colorVersion4Name`: string (name of color version 4)

`colorVersion5Name`: string (name of color version 5)

`colorVersion6Name`: string (name of color version 6)

`colorVersion7Name`: string (name of color version 7)

`colorVersion8Name`: string (name of color version 8)

`colorVersion9Name`: string (name of color version 9)

`colorVersion10Name`: string (name of color version 10)

### HDR mastering

`hdrMasteringOn`: string ("0" or "1")

`hdrMasteringLuminanceMax`: string (mastering luminance max in nits, example: "1000")

`hdrDolbyControlsOn`: string ("0" or "1")

`hdrDolbyVersion`: string ("2.9" or "4.0")

`hdrDolbyAnalysisTuning`: string ("Legacy", "Most Mapping", "More Mapping", "Balanced", "Less Mapping" or "Least Mapping")

`hdrDolbyMasterDisplay`: string (Dolby Vision master display name)

`hdr10PlusControlsOn`: string ("0" or "1")

### Video monitoring

`audioOutputHasTimecode`: string ("0" or "1")

`videoMonitorFormat`: string (example: "HD 1080i 50")

`videoMonitorUseStereoSDI`: string ("0" or "1")

`videoMonitorUse444SDI`: string ("0" or "1")

`videoMonitorSDIConfiguration`: string ("single_link", "dual_link" or "quad_link")

`videoDataLevels`: string ("Video" or "Full")

`videoDataLevelsRetainSubblockAndSuperWhiteData`: string ("0" or "1")

`videoMonitorBitDepth`: string (example: "10")

`videoMonitorScaling`: string ("basic" or "bilinear")

`videoMonitorUseHDROverHDMI`: string ("0" or "1")

`videoMonitorUseMatrixOverrideFor422SDI`: string ("0" or "1")

`videoMonitorMatrixOverrideFor422SDI`: string ("Rec.601", "Rec.709" or "Rec.2020")

### Video deck

`videoDeckFormat`: string (read only, example: "HD 1080i 50")

`videoDeckUseStereoSDI`: string ("0" or "1")

`videoMonitorUseLevelA`: string ("0" or "1")

`videoDeckUse444SDI`: string ("0" or "1")

`videoDeckSDIConfiguration`: string ("single_link", "dual_link" or "quad_link")

`videoDeckBitDepth`: string (example: "10")

`videoDeckUseAudoEdit`: string ("0" or "1")

`videoDeckNonAutoEditFrames`: string (number of frames, example: "30")

`videoDeckPrerollSec`: string (preroll in seconds, example: "5")

`videoDeckOutputSyncSource`: string (output sync source name)

`videoDeckAdd32Pulldown`: string ("0" or "1")

### Capture

`videoCaptureMode`: string (capture mode, example: "0")

`videoCaptureFormat`: string (read only, example: "HD 1080i 50")

`videoCaptureCodec`: string (read only, capture codec name)

`videoCaptureIngestHandles`: string (number of handle frames, example: "0")

`audioCaptureNumChannels`: string (number of audio channels, example: "2")

### Playout

`videoPlayoutMode`: string (playout mode, example: "0")

`videoPlayoutShowSourceTimecode`: string ("0" or "1")

`videoPlayoutShowLTC`: string ("0" or "1")

`videoPlayoutLTCFramesOffset`: string (LTC offset in frames, example: "0")

`videoPlayoutAudioFramesOffset`: string (audio offset in frames, example: "0")

`audioPlayoutNumChannels`: string (number of audio channels, example: "2")

`videoPlayoutBatchHeadDuration`: string (head duration in frames, example: "0")

`videoPlayoutBatchTailDuration`: string (tail duration in frames, example: "0")

### Broadcast safe, audio meters and subtitles

`limitBroadcastSafeOn`: string ("0" or "1")

`limitBroadcastSafeLevels`: string (broadcast safe levels, example: "-20 - 120")

`limitAudioMeterLUFS`: string (loudness standard, example: "-23")

`limitAudioMeterLoudnessScale`: string (loudness scale, example: "18_scale")

`limitAudioMeterAlignLevel`: string (align level in dB, example: "-20")

`limitAudioMeterHighLevel`: string (high level in dB, example: "-10")

`limitAudioMeterLowLevel`: string (low level in dB, example: "-30")

`limitAudioMeterDisplayMode`: string (audio meter display mode)

`limitSubtitleCPL`: string (max characters per line, example: "60")

`limitSubtitleCaptionDurationSec`: string (max caption duration in seconds, example: "3")

### Super Scale

`superScale`: int (0=Auto, 1=none, 2=2x, 3=3x, 4=4x)

`superScaleSharpness`: string ("0" or "1")

`superScaleNoiseReduction`: string ("0" or "1")

`superScaleSharpnessStrength`: string (read only, sharpness strength, example: "0.5")

`superScaleNoiseReductionStrength`: string (read only, noise reduction strength, example: "0.5")

### Transcription and media locations

`transcriptionLanguage`: string (language code, example: "en")

`speakerDetection`: string ("0" or "1")

`nodeStackLayers`: string (number of node stack layers, example: "1")

`cloudProjectMediaLocation`: string (cloud project media directory path)

`projectMediaLocation`: string (project media directory path)

------

## Timeline settings

[`Timeline:GetSettings`](../resolve_api/Timeline.md#getsettings) returns all of the keys below in a single dict, and [`Timeline:SetSettings`](../resolve_api/Timeline.md#setsettingssettings) accepts any subset of them.

:::note

`Timeline:GetSettings` returns the *project* settings instead when the timeline's `useCustomSettings` is `"0"`. Set `useCustomSettings` to `"1"` before overriding any other timeline setting.

:::

### Timeline format and sizing

`useCustomSettings`: string ("0" or "1")

`timelineResolutionWidth`: string (example: "1920")

`timelineResolutionHeight`: string (example: "1080")

`timelinePixelAspectRatio`: string (example: "square")

`timelineInputResMismatchBehavior`: string (example: "scaleToCrop")

`timelineFrameRate`: float or string (returned as a number, example: 23.976. Set as a string, example: "23.976" or "29.97 DF")

`timelineDropFrameTimecode`: string ("0" or "1")

`timelineInterlaceProcessing`: string ("0" or "1")

`timelineOutputResMatchTimelineRes`: string ("0" or "1")

`timelineOutputResolutionWidth`: string (example: "1920")

`timelineOutputResolutionHeight`: string (example: "1080")

`timelineOutputPixelAspectRatio`: string (example: "square")

`timelineOutputResMismatchBehavior`: string (example: "scaleToCrop")

`superScale`: int (0=Auto, 1=none, 2=2x, 3=3x, 4=4x)

### Video monitoring

`videoMonitorFormat`: string (example: "HD 1080i 50")

`videoMonitorUse444SDI`: string ("0" or "1")

`videoMonitorUseLevelA`: string ("0" or "1")

`videoMonitorUseStereoSDI`: string ("0" or "1")

`videoMonitorSDIConfiguration`: string (SDI config string)

`videoDataLevels`: string (example: "Auto")

`videoDataLevelsRetainSubblockAndSuperWhiteData`: string ("0" or "1")

`videoMonitorBitDepth`: string (example: "10")

`videoMonitorScaling`: string (example: "bilinear")

`videoMonitorUseHDROverHDMI`: string ("0" or "1")

`videoMonitorUseMatrixOverrideFor422SDI`: string ("0" or "1")

`videoMonitorMatrixOverrideFor422SDI`: string (matrix override value)

### Color management

`colorScienceMode`: string (example: "davinciYRGBColorManagedv2")

`acesVersion`: string (example: "aces_1.3")

`isAutoColorManage`: string ("0" or "1")

`rcmPresetMode`: string (preset mode string)

`separateColorSpaceAndGamma`: string ("0" or "1")

`colorSpaceTimeline`: string (example: "Rec.709")

`colorSpaceTimelineGamma`: string (example: "Gamma 2.4")

`colorAcesGamutCompressType`: string (gamut compress type)

`colorAcesODT`: string (ACES Output Device Transform)

`colorAcesMidGray`: string (mid gray value)

`colorSpaceOutput`: string (output color space)

`colorSpaceOutputGamma`: string (output gamma)

`use203NitsReference`: string ("0" or "1")

`colorSpaceOutputGamutLimit`: string (clipping color space)

`colorAcesNodeLUTProcessingSpace`: string (node LUT processing space)

### Output and tone mapping

`hdrMasteringOn`: string ("0" or "1")

`hdrMasteringLuminanceMax`: string (max luminance value)

`outputDRT`: string (output DRT string)

`colorSpaceOutputToneMapping`: string (tone mapping mode)

`colorSpaceOutputGamutMapping`: string (gamut mapping mode)

`colorSpaceOutputGamutSaturationKnee`: string (saturation knee value)

`colorSpaceOutputGamutSaturationMax`: string (saturation max value)

`useInverseDRT`: string ("0" or "1")

`colorSpaceOutputToneLuminanceMax`: string (tone luminance max)

`outputDRTSatRolloffStart`: string (saturation rolloff start)

`outputDRTSatRolloffLimit`: string (saturation rolloff limit)

`inputDRT`: string (input DRT string)

`inputDRTSatRolloffStart`: string (input saturation rolloff start)

`inputDRTSatRolloffLimit`: string (input saturation rolloff limit)

`useCATransform`: string ("0" or "1")

`useColorSpaceAwareGradingTools`: string ("0" or "1")

`imageResizingGamma`: string (image resizing gamma)

`graphicsWhiteLevel`: string (graphics white level)

`timelineWorkingLuminance`: string (working luminance value)

`timelineWorkingLuminanceMode`: string (working luminance mode)

### HDR mastering

`hdrDolbyControlsOn`: string ("0" or "1")

`hdrDolbyVersion`: string (Dolby Vision version)

`hdrDolbyMasterDisplay`: string (Dolby Vision master display)

`hdrDolbyUseExternalCMU`: string ("0" or "1")

`hdr10PlusControlsOn`: string ("0" or "1")

`hdrVividControlsOn`: string ("0" or "1")

`hdrVividMasterDisplay`: string (HDR Vivid master display)

`disableFusionToneMapping`: string ("0" or "1")

------

## Specifically enumerated values
### Project properties
#### "timelineFrameRate" 
the property value is one of the frame rates available to the user in project settings under "Timeline frame rate" option. Drop Frame can be configured for supported frame rates by appending the frame rate with "DF", e.g. "29.97 DF" will enable drop frame and "29.97" will disable drop frame

Affects:
• x = Project:GetSetting('timelineFrameRate') and Project:SetSetting('timelineFrameRate', x)
#### "superScale" 
the property value is an enumerated integer between 0 and 3 with these meanings: 0=Auto, 1=no scaling, and 2, 3 and 4 represent the Super Scale multipliers 2x, 3x and 4x. 
for super scale multiplier '2x Enhanced', exactly 4 arguments must be passed as outlined below. If less than 4 arguments are passed, it will default to 2x.

Affects:
-  x = Project:GetSetting('superScale') and Project:SetSetting('superScale', x)
-   for '2x Enhanced' --> [Project:SetSetting('superScale', 2, sharpnessValue, noiseReductionValue)](../resolve_api/Project.md#setsettingsettingname-settingvalue), where sharpnessValue is a `float` in the range [0.0, 1.0] and noiseReductionValue is a `float` in the range [0.0, 1.0]

### Clip properties
#### "superScale" 
the property value is an enumerated integer between 1 and 3 with these meanings: 1=no scaling, and 2, 3 and 4 represent the Super Scale multipliers 2x, 3x and 4x.

for super scale multiplier '2x Enhanced', exactly 4 arguments must be passed as outlined below. If less than 4 arguments are passed, it will default to 2x.

Affects:
-  x = MediaPoolItem:GetClipProperty('Super Scale') and MediaPoolItem:SetClipProperty('Super Scale', x)
-   for '2x Enhanced' --> MediaPoolItem:SetClipProperty('Super Scale', 2, sharpnessValue, noiseReductionValue), where sharpnessValue is a float in the range [0.0, 1.0] and noiseReductionValue is a float in the range [0.0, 1.0]

------
> New in 19.0.0

"Cloud Sync" = the property value is an enumerated integer that will correspond to one of the following enums:
```js
resolve.CLOUD_SYNC_DEFAULT                == -1
resolve.CLOUD_SYNC_DOWNLOAD_IN_QUEUE      == 0
resolve.CLOUD_SYNC_DOWNLOAD_IN_PROGRESS   == 1
resolve.CLOUD_SYNC_DOWNLOAD_SUCCESS       == 2
resolve.CLOUD_SYNC_DOWNLOAD_FAIL          == 3
resolve.CLOUD_SYNC_DOWNLOAD_NOT_FOUND     == 4
resolve.CLOUD_SYNC_UPLOAD_IN_QUEUE        == 5
resolve.CLOUD_SYNC_UPLOAD_IN_PROGRESS     == 6
resolve.CLOUD_SYNC_UPLOAD_SUCCESS         == 7
resolve.CLOUD_SYNC_UPLOAD_FAIL            == 8
resolve.CLOUD_SYNC_UPLOAD_NOT_FOUND       == 9
// New in 19.0.1
resolve.CLOUD_SYNC_SUCCESS                == 10
```