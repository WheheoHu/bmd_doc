## Cloud Projects Settings

This section covers additional notes for the functions:
[CreateCloudProject](https://www.notion.so/CreateCloudProject-cloudSettings-47ca8f799d5e46219ecb20c27fb12ed2?pvs=21)
[ImportCloudProject](https://www.notion.so/ImportCloudProject-filePath-cloudSettings-1ef1a2d76e3c4acc9ab067e12c2d502e?pvs=21) 
[RestoreCloudProject](https://www.notion.so/RestoreCloudProject-folderPath-cloudSettings-877bef1ebf8a4c8ea320b43c8f2cbb14?pvs=21)

All three functions take in a cloudSettings dict, that have the following keys:

```jsx
resolve.CLOUD_SETTING_PROJECT_NAME: String, ["" by default]
resolve.CLOUD_SETTING_PROJECT_MEDIA_PATH: String, ["" by default]
resolve.CLOUD_SETTING_IS_COLLAB: Bool, [False by default]
resolve.CLOUD_SETTING_SYNC_MODE: syncMode (see below), [resolve.CLOUD_SYNC_PROXY_ONLY by default]
resolve.CLOUD_SETTING_IS_CAMERA_ACCESS: Bool [False by default]
```

Where syncMode is one of the following values:

```jsx
resolve.CLOUD_SYNC_NONE
resolve.CLOUD_SYNC_PROXY_ONLY
resolve.CLOUD_SYNC_PROXY_AND_ORIG
```

<aside>
💡 [CreateCloudProject](https://www.notion.so/CreateCloudProject-cloudSettings-47ca8f799d5e46219ecb20c27fb12ed2?pvs=21),[ImportCloudProject](https://www.notion.so/ImportCloudProject-filePath-cloudSettings-1ef1a2d76e3c4acc9ab067e12c2d502e?pvs=21),[RestoreCloudProject](https://www.notion.so/RestoreCloudProject-folderPath-cloudSettings-877bef1ebf8a4c8ea320b43c8f2cbb14?pvs=21) require `resolve.PROJECT_MEDIA_PATH` to be defined.
[CreateCloudProject](https://www.notion.so/CreateCloudProject-cloudSettings-47ca8f799d5e46219ecb20c27fb12ed2?pvs=21) also requires `resolve.PROJECT_NAME` to be defined.

</aside>

## Auto Caption Settings

This section covers the supported settings for the method Timeline.CreateSubtitlesFromAudio(autoCaptionSettings)

The parameter setting is a dictionary containing the following keys:

```jsx
resolve.SUBTITLE_LANGUAGE: languageID (see below), [resolve.AUTO_CAPTION_AUTO by default]
resolve.SUBTITLE_CAPTION_PRESET: presetType (see below), [resolve.AUTO_CAPTION_SUBTITLE_DEFAULT by default]
resolve.SUBTITLE_CHARS_PER_LINE: Int Number between 1 and 60 inclusive [42 by default]
resolve.SUBTITLE_LINE_BREAK: lineBreakType (see below), [resolve.AUTO_CAPTION_LINE_SINGLE by default]
resolve.SUBTITLE_GAP: Int Number between 0 and 10 inclusive [0 by default]
```

languageIDs:

```jsx
resolve.AUTO_CAPTION_AUTO
resolve.AUTO_CAPTION_DANISH
resolve.AUTO_CAPTION_DUTCH
resolve.AUTO_CAPTION_ENGLISH
resolve.AUTO_CAPTION_FRENCH
resolve.AUTO_CAPTION_GERMAN
resolve.AUTO_CAPTION_ITALIAN
resolve.AUTO_CAPTION_JAPANESE
resolve.AUTO_CAPTION_KOREAN
resolve.AUTO_CAPTION_MANDARIN_SIMPLIFIED
resolve.AUTO_CAPTION_MANDARIN_TRADITIONAL
resolve.AUTO_CAPTION_NORWEGIAN
resolve.AUTO_CAPTION_PORTUGUESE
resolve.AUTO_CAPTION_RUSSIAN
resolve.AUTO_CAPTION_SPANISH
resolve.AUTO_CAPTION_SWEDISH
```

presetTypes:

```jsx
resolve.AUTO_CAPTION_SUBTITLE_DEFAULT
resolve.AUTO_CAPTION_TELETEXT
resolve.AUTO_CAPTION_NETFLIX
```

lineBreakTypes:

```jsx
resolve.AUTO_CAPTION_LINE_SINGLE
resolve.AUTO_CAPTION_LINE_DOUBLE
```

## Looking up Project and Clip properties

This section covers additional notes for the functions "[`Project:GetSetting`](https://www.notion.so/GetSetting-settingName-0318c9ff60804dcabee9d9ef0df4201b?pvs=21)", "[`Project:SetSetting`](https://www.notion.so/SetSetting-settingName-settingValue-cc09998823d24e7caa8ff77f47e5581e?pvs=21)", "[`Timeline:GetSetting`](https://www.notion.so/GetSetting-settingName-8995cb59faa140809a97af6790657fbf?pvs=21)", "[`Timeline:SetSetting`](https://www.notion.so/SetSetting-settingName-settingValue-e9984b80ac364af8ac126bbe9491c43b?pvs=21)", "[`MediaPoolItem:GetClipProperty`](https://www.notion.so/GetClipProperty-propertyName-None-451c17f64f2044cf9efa3647953b64fe?pvs=21)" and"[`MediaPoolItem:SetClipProperty`](https://www.notion.so/SetClipProperty-propertyName-propertyValue-92f7ef412b444578a70bd961b525a5fb?pvs=21)". These functions are used to get and set properties otherwise available to the user through the Project Settings and the Clip Attributes dialogs.

The functions follow a key-value pair format, where each property is identified by a key (the `settingName` or `propertyName` parameter) and possesses a `value` (typically a text value). Keys and values are designed to be easily correlated with parameter names and values in the Resolve UI. [Explicitly enumerated values](https://www.notion.so/DaVinci-Resolve-Python-API-7c4f1038a36f44818b631ec7e4a537fa?pvs=21) for some parameters are listed below.

Some properties may be read only - these include intrinsic clip properties like date created or sample rate, and properties that can be disabled in specific application contexts (e.g. custom colorspaces in an ACES workflow, or output sizing parameters when behavior is set to match timeline)

**Getting values:**
Invoke "[`Project:GetSetting`](https://www.notion.so/GetSetting-settingName-0318c9ff60804dcabee9d9ef0df4201b?pvs=21)", "[`Timeline:GetSetting`](https://www.notion.so/GetSetting-settingName-8995cb59faa140809a97af6790657fbf?pvs=21)" or "[`MediaPoolItem:GetClipProperty`](https://www.notion.so/GetClipProperty-propertyName-None-451c17f64f2044cf9efa3647953b64fe?pvs=21)" with the appropriate property key. 

To get a snapshot of all queryable properties (keys and values), you can call "[`Project:GetSetting`](https://www.notion.so/GetSetting-settingName-0318c9ff60804dcabee9d9ef0df4201b?pvs=21)", "[`Timeline:GetSetting`](https://www.notion.so/GetSetting-settingName-8995cb59faa140809a97af6790657fbf?pvs=21)" or "[`MediaPoolItem:GetClipProperty`](https://www.notion.so/GetClipProperty-propertyName-None-451c17f64f2044cf9efa3647953b64fe?pvs=21)" without parameters (or with a NoneType or a blank property key). 

Using specific keys to query individual properties will be faster. Note that getting a property using an invalid key will return a trivial result.

**Setting values:**
Invoke "[`Project:SetSetting`](https://www.notion.so/SetSetting-settingName-settingValue-cc09998823d24e7caa8ff77f47e5581e?pvs=21)", "[`Timeline:SetSetting`](https://www.notion.so/SetSetting-settingName-settingValue-e9984b80ac364af8ac126bbe9491c43b?pvs=21)" or "[`MediaPoolItem:SetClipProperty`](https://www.notion.so/SetClipProperty-propertyName-propertyValue-92f7ef412b444578a70bd961b525a5fb?pvs=21)" with the appropriate property key and a valid value. 

When setting a parameter, please check the return value to ensure the success of the operation. You can troubleshoot the validity of keys and values by setting the desired result from the UI and checking property snapshots before and after the change.

- The following Project properties have specifically enumerated values:
    - "timelineFrameRate" - the property value is one of the frame rates available to the user in project settings under "Timeline frame rate" option. Drop Frame can be configured for supported frame rates by appending the frame rate with "DF", e.g. "29.97 DF" will enable drop frame and "29.97" will disable drop frame
    Affects:
    • x = Project:GetSetting('timelineFrameRate') and Project:SetSetting('timelineFrameRate', x)
    - "superScale" - the property value is an enumerated integer between 0 and 3 with these meanings: 0=Auto, 1=no scaling, and 2, 3 and 4 represent the Super Scale multipliers 2x, 3x and 4x. 
    for super scale multiplier '2x Enhanced', exactly 4 arguments must be passed as outlined below. If less than 4 arguments are passed, it will default to 2x.
    Affects:
    • x = Project:GetSetting('superScale') and Project:SetSetting('superScale', x)
    • for '2x Enhanced' --> Project:SetSetting('superScale', 2, sharpnessValue, noiseReductionValue), where sharpnessValue is a float in the range [0.0, 1.0] and noiseReductionValue is a float in the range [0.0, 1.0]
- The following Clip properties have specifically enumerated values:
    - "superScale" - the property value is an enumerated integer between 1 and 3 with these meanings: 1=no scaling, and 2, 3 and 4 represent the Super Scale multipliers 2x, 3x and 4x.
    for super scale multiplier '2x Enhanced', exactly 4 arguments must be passed as outlined below. If less than 4 arguments are passed, it will default to 2x.
    Affects:
    • x = MediaPoolItem:GetClipProperty('Super Scale') and MediaPoolItem:SetClipProperty('Super Scale', x)
    • for '2x Enhanced' --> MediaPoolItem:SetClipProperty('Super Scale', 2, sharpnessValue, noiseReductionValue), where sharpnessValue is a float in the range [0.0, 1.0] and noiseReductionValue is a float in the range [0.0, 1.0]

## Looking up Render Settings

This section covers the supported settings for the method [SetRenderSettings](https://www.notion.so/SetRenderSettings-settings-fc22f5fc5d0f40de8b0dfd45dd8bdd4b?pvs=21)(settings)

The parameter setting is a dictionary containing the following keys:

"`SelectAllFrames`": Bool (when set True, the settings MarkIn and MarkOut are ignored)

"`MarkIn`": int

"`MarkOut`": int

"`TargetDir`": string

"`CustomName`": string

"`UniqueFilenameStyle`": 0 - Prefix, 1 - Suffix.

"`ExportVideo`": Bool

"`ExportAudio`": Bool

"`FormatWidth`": int

"`FormatHeight`": int

"`FrameRate`": float (examples: 23.976, 24)

"`PixelAspectRatio`": string (for SD resolution: "16_9" or "4_3") (other resolutions: "square" or "cinemascope")

"`VideoQuality`" possible values for current codec (if applicable):
    
     `0`(int) - will set quality to automatic
    
    `[1 -> MAX]` (int) - will set input bit rate
    
    `["Least", "Low", "Medium", "High", "Best"]` (String) - will set input quality level
    

"`AudioCodec`": string (example: "aac")

"`AudioBitDepth`": int

"`AudioSampleRate`": int

"`ColorSpaceTag`" : string (example: "Same as Project", "AstroDesign")

"`GammaTag`" : string (example: "Same as Project", "ACEScct")

"`ExportAlpha`": Bool

"`EncodingProfile`": string (example: "Main10"). Can only be set for H.264 and H.265.

"`MultiPassEncode`": Bool. Can only be set for H.264.

"`AlphaMode`": 0 - Premultipled, 1 - Straight. Can only be set if "ExportAlpha" is true.

"`NetworkOptimization`": Bool. Only supported by QuickTime and MP4 formats.

## Looking up timeline export properties

This section covers the parameters for the argument [Export](https://www.notion.so/Export-fileName-exportType-exportSubtype-3e82fbc068734c359cd37c4d5e784c2e?pvs=21)(fileName, exportType, exportSubtype).

exportType can be one of the following constants:

```jsx
resolve.EXPORT_AAF
resolve.EXPORT_DRT
resolve.EXPORT_EDL
resolve.EXPORT_FCP_7_XML
resolve.EXPORT_FCPXML_1_3
resolve.EXPORT_FCPXML_1_4
resolve.EXPORT_FCPXML_1_5
resolve.EXPORT_FCPXML_1_6
resolve.EXPORT_FCPXML_1_7
resolve.EXPORT_FCPXML_1_8
resolve.EXPORT_FCPXML_1_9
resolve.EXPORT_FCPXML_1_10
resolve.EXPORT_HDR_10_PROFILE_A
resolve.EXPORT_HDR_10_PROFILE_B
resolve.EXPORT_TEXT_CSV
resolve.EXPORT_TEXT_TAB
resolve.EXPORT_DOLBY_VISION_VER_2_9
resolve.EXPORT_DOLBY_VISION_VER_4_0
resolve.EXPORT_DOLBY_VISION_VER_5_1
resolve.EXPORT_OTIO
```

exportSubtype can be one of the following enums:

```jsx
resolve.EXPORT_NONE
resolve.EXPORT_AAF_NEW
resolve.EXPORT_AAF_EXISTING
resolve.EXPORT_CDL
resolve.EXPORT_SDL
resolve.EXPORT_MISSING_CLIPS
```

Please note that exportSubType is a required parameter for `resolve.EXPORT_AAF` and `resolve.EXPORT_EDL`. 

For rest of the exportType, exportSubtype is ignored.

When exportType is `resolve.EXPORT_AAF`, valid exportSubtype values are `resolve.EXPORT_AAF_NEW` and `resolve.EXPORT_AAF_EXISTING`.

When exportType is `resolve.EXPORT_EDL`, valid exportSubtype values are `resolve.EXPORT_CDL`, `resolve.EXPORT_SDL`, `resolve.EXPORT_MISSING_CLIPS`and`resolve.EXPORT_NONE`.

<aside>
💡 Note: Replace 'resolve.' when using the constants above, if a different Resolve class instance name is used.

</aside>

## Looking up Timeline item properties

This section covers additional notes for the function "[TimelineItem:SetProperty](https://www.notion.so/SetProperty-propertyKey-propertyValue-525e675aaa9d401b86e05623ce511ad2?pvs=21)" and "[TimelineItem:GetProperty](https://www.notion.so/GetProperty-propertyKey-e6222bad8599436e8a8c2d37899d8080?pvs=21)". These functions are used to get and set properties mentioned.

The supported keys with their accepted values are:

"`Pan`" : floating point values from -4.0*width to 4.0*width

"`Tilt`" : floating point values from -4.0*height to 4.0*height

"`ZoomX`" : floating point values from 0.0 to 100.0

"`ZoomY`" : floating point values from 0.0 to 100.0

"`ZoomGang`" : a boolean value

"`RotationAngle`" : floating point values from -360.0 to 360.0

"`AnchorPointX`" : floating point values from -4.0*width to 4.0*width

"`AnchorPointY`" : floating point values from -4.0*height to 4.0*height

"`Pitch`" : floating point values from -1.5 to 1.5

"`Yaw`" : floating point values from -1.5 to 1.5

"`FlipX`" : boolean value for flipping horizontally

"`FlipY`" : boolean value for flipping vertically

"`CropLeft`" : floating point values from 0.0 to width

"`CropRight`" : floating point values from 0.0 to width

"`CropTop`" : floating point values from 0.0 to height

"`CropBottom`" : floating point values from 0.0 to height

"`CropSoftness`" : floating point values from -100.0 to 100.0

"`CropRetain`" : boolean value for "Retain Image Position" checkbox

"`DynamicZoomEase`" : A value from the following constants

```python
DYNAMIC_ZOOM_EASE_LINEAR = 0
DYNAMIC_ZOOM_EASE_IN
DYNAMIC_ZOOM_EASE_OUT
DYNAMIC_ZOOM_EASE_IN_AND_OUT
```

"`CompositeMode`" : A value from the following constants

```python
COMPOSITE_NORMAL = 0
COMPOSITE_ADD
COMPOSITE_SUBTRACT
COMPOSITE_DIFF
COMPOSITE_MULTIPLY
COMPOSITE_SCREEN
COMPOSITE_OVERLAY
COMPOSITE_HARDLIGHT
COMPOSITE_SOFTLIGHT
COMPOSITE_DARKEN
COMPOSITE_LIGHTEN
COMPOSITE_COLOR_DODGE
COMPOSITE_COLOR_BURN
COMPOSITE_EXCLUSION
COMPOSITE_HUE
COMPOSITE_SATURATE
COMPOSITE_COLORIZE
COMPOSITE_LUMA_MASK
COMPOSITE_DIVIDE
COMPOSITE_LINEAR_DODGE
COMPOSITE_LINEAR_BURN
COMPOSITE_LINEAR_LIGHT
COMPOSITE_VIVID_LIGHT
COMPOSITE_PIN_LIGHT
COMPOSITE_HARD_MIX
COMPOSITE_LIGHTER_COLOR
COMPOSITE_DARKER_COLOR
COMPOSITE_FOREGROUND
COMPOSITE_ALPHA
COMPOSITE_INVERTED_ALPHA
COMPOSITE_LUM
COMPOSITE_INVERTED_LUM
```

"`Opacity`" : floating point value from 0.0 to 100.0

"`Distortion`" : floating point value from -1.0 to 1.0

"`RetimeProcess`" : A value from the following constants

```python
RETIME_USE_PROJECT = 0
RETIME_NEAREST
RETIME_FRAME_BLEND
RETIME_OPTICAL_FLOW
```

"`MotionEstimation`" : A value from the following constants

```python
MOTION_EST_USE_PROJECT = 0
MOTION_EST_STANDARD_FASTER
MOTION_EST_STANDARD_BETTER
MOTION_EST_ENHANCED_FASTER
MOTION_EST_ENHANCED_BETTER
MOTION_EST_SPEED_WRAP
```

"`Scaling`" : A value from the following constants

```python
SCALE_USE_PROJECT = 0
SCALE_CROP
SCALE_FIT
SCALE_FILL
SCALE_STRETCH
```

"`ResizeFilter`" : A value from the following constants

```python
RESIZE_FILTER_USE_PROJECT = 0
RESIZE_FILTER_SHARPER
RESIZE_FILTER_SMOOTHER
RESIZE_FILTER_BICUBIC
RESIZE_FILTER_BILINEAR
RESIZE_FILTER_BESSEL
RESIZE_FILTER_BOX
RESIZE_FILTER_CATMULL_ROM
RESIZE_FILTER_CUBIC
RESIZE_FILTER_GAUSSIAN
RESIZE_FILTER_LANCZOS
RESIZE_FILTER_MITCHELL
RESIZE_FILTER_NEAREST_NEIGHBOR
RESIZE_FILTER_QUADRATIC
RESIZE_FILTER_SINC
RESIZE_FILTER_LINEAR
```

Values beyond the range will be clipped

width and height are same as the UI max limits

The arguments can be passed as a key and value pair or they can be grouped together into a dictionary (for python) or table (for lua) and passed
as a single argument.

Getting the values for the keys that uses constants will return the number which is in the constant