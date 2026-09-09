# Timeline Item Properties

This section covers additional notes for the functions [`TimelineItem:GetProperties`](../api/TimelineItem.md#getproperties) and [`TimelineItem:SetProperties`](../api/TimelineItem.md#setpropertiesproperties). These functions are used to get and set the item properties otherwise available to the user through the Inspector.

The arguments are passed as a dictionary (for python) or a table (for lua) of key and value pairs.

The single-key forms [`TimelineItem:GetProperty`](../api/TimelineItem.md#getpropertypropertykey) and [`TimelineItem:SetProperty`](../api/TimelineItem.md#setpropertypropertykey-propertyvalue) accept the same keys, but are a [deprecated calling convention](../deprecated.md#deprecated-calling-conventions) since 21.1.0.

Values beyond the accepted range will be clipped. `width` and `height` are the same as the UI max limits. Getting the value for a key that uses constants will return the number which is in the constant.

------

> New in 21.1.0

Each filter section of the Inspector now has an `...Enabled` key that toggles the whole section, and the audio properties (volume, pan, pitch, Voice Isolation and Dialogue Leveler) are exposed natively.

------

## Transform

`TransformEnabled`: Bool (enable/disable the Transform filter section)

`Pan`: float (-4.0*width to 4.0*width)

`Tilt`: float (-4.0*height to 4.0*height)

`ZoomX`: float (0.0 to 100.0)

`ZoomY`: float (0.0 to 100.0)

`ZoomGang`: Bool (gang ZoomX and ZoomY)

`RotationAngle`: float (-360.0 to 360.0)

`AnchorPointX`: float (-4.0*width to 4.0*width)

`AnchorPointY`: float (-4.0*height to 4.0*height)

`Pitch`: float (-1.5 to 1.5)

`Yaw`: float (-1.5 to 1.5)

`FlipX`: Bool (flip horizontally)

`FlipY`: Bool (flip vertically)

## Cropping

`CroppingEnabled`: Bool (enable/disable the Cropping filter section)

`CropLeft`: float (0.0 to width)

`CropRight`: float (0.0 to width)

`CropTop`: float (0.0 to height)

`CropBottom`: float (0.0 to height)

`CropSoftness`: float (-100.0 to 100.0)

`CropRetain`: Bool (the "Retain Image Position" checkbox)

## Dynamic Zoom

`DynamicZoomEnabled`: Bool (enable/disable the Dynamic Zoom filter section)

`DynamicZoomEase`: int (one of the constants below)

`DynamicZoomEase` can be one of the following constants:

```jsx
resolve.DYNAMIC_ZOOM_EASE_LINEAR        == 0
resolve.DYNAMIC_ZOOM_EASE_IN
resolve.DYNAMIC_ZOOM_EASE_OUT
resolve.DYNAMIC_ZOOM_EASE_IN_AND_OUT
```

## Composite

`CompositeEnabled`: Bool (enable/disable the Composite filter section)

`CompositeMode`: int (one of the constants below)

`Opacity`: float (0.0 to 100.0)

`CompositeMode` can be one of the following constants:

```jsx
resolve.COMPOSITE_NORMAL                == 0
resolve.COMPOSITE_ADD
resolve.COMPOSITE_SUBTRACT
resolve.COMPOSITE_DIFF
resolve.COMPOSITE_MULTIPLY
resolve.COMPOSITE_SCREEN
resolve.COMPOSITE_OVERLAY
resolve.COMPOSITE_HARDLIGHT
resolve.COMPOSITE_SOFTLIGHT
resolve.COMPOSITE_DARKEN
resolve.COMPOSITE_LIGHTEN
resolve.COMPOSITE_COLOR_DODGE
resolve.COMPOSITE_COLOR_BURN
resolve.COMPOSITE_EXCLUSION
resolve.COMPOSITE_HUE
resolve.COMPOSITE_SATURATE
resolve.COMPOSITE_COLORIZE
resolve.COMPOSITE_LUMA_MASK
resolve.COMPOSITE_DIVIDE
resolve.COMPOSITE_LINEAR_DODGE
resolve.COMPOSITE_LINEAR_BURN
resolve.COMPOSITE_LINEAR_LIGHT
resolve.COMPOSITE_VIVID_LIGHT
resolve.COMPOSITE_PIN_LIGHT
resolve.COMPOSITE_HARD_MIX
resolve.COMPOSITE_LIGHTER_COLOR
resolve.COMPOSITE_DARKER_COLOR
resolve.COMPOSITE_FOREGROUND
resolve.COMPOSITE_ALPHA
resolve.COMPOSITE_INVERTED_ALPHA
resolve.COMPOSITE_LUM
resolve.COMPOSITE_INVERTED_LUM
```

## Lens Correction

`LensCorrectionEnabled`: Bool (enable/disable the Lens Correction filter section)

`Distortion`: float (-1.0 to 1.0)

## Retime and Scaling

`RetimeAndScalingEnabled`: Bool (enable/disable the Retime and Scaling filter section)

`RetimeProcess`: int (one of the constants below)

`MotionEstimation`: int (one of the constants below)

`Scaling`: int (one of the constants below)

`ResizeFilter`: int (one of the constants below)

`RetimeProcess` can be one of the following constants:

```jsx
resolve.RETIME_USE_PROJECT              == 0
resolve.RETIME_NEAREST
resolve.RETIME_FRAME_BLEND
resolve.RETIME_OPTICAL_FLOW
```

`MotionEstimation` can be one of the following constants:

```jsx
resolve.MOTION_EST_USE_PROJECT          == 0
resolve.MOTION_EST_STANDARD_FASTER
resolve.MOTION_EST_STANDARD_BETTER
resolve.MOTION_EST_ENHANCED_FASTER
resolve.MOTION_EST_ENHANCED_BETTER
resolve.MOTION_EST_SPEED_WARP_FASTER
resolve.MOTION_EST_SPEED_WARP_BETTER
// New in 21.1.0
resolve.MOTION_EST_METAL
```

`Scaling` can be one of the following constants:

```jsx
resolve.SCALE_USE_PROJECT               == 0
resolve.SCALE_CROP
resolve.SCALE_FIT
resolve.SCALE_FILL
resolve.SCALE_STRETCH
```

`ResizeFilter` can be one of the following constants:

```jsx
resolve.RESIZE_FILTER_USE_PROJECT       == 0
resolve.RESIZE_FILTER_SHARPER
resolve.RESIZE_FILTER_SMOOTHER
resolve.RESIZE_FILTER_BICUBIC
resolve.RESIZE_FILTER_BILINEAR
resolve.RESIZE_FILTER_BESSEL
resolve.RESIZE_FILTER_BOX
resolve.RESIZE_FILTER_CATMULL_ROM
resolve.RESIZE_FILTER_CUBIC
resolve.RESIZE_FILTER_GAUSSIAN
resolve.RESIZE_FILTER_LANCZOS
resolve.RESIZE_FILTER_MITCHELL
resolve.RESIZE_FILTER_NEAREST_NEIGHBOR
resolve.RESIZE_FILTER_QUADRATIC
resolve.RESIZE_FILTER_SINC
resolve.RESIZE_FILTER_LINEAR
```

## Audio

`AudioVolumeEnabled`: Bool (enable/disable the audio volume filter)

`AudioVolume`: float (-100.0 to 30.0 dB)

`AudioPanEnabled`: Bool (enable/disable the audio pan filter)

`AudioPan`: float (-100.0 to 100.0)

`AudioPitchEnabled`: Bool (enable/disable the audio pitch filter)

`AudioPitchSemiTones`: float (-24.0 to 24.0)

`AudioPitchCents`: float (-100.0 to 100.0)

## Voice Isolation

> The Voice Isolation and Dialogue Leveler properties are supported on items of the active timeline only.


`AudioVoiceIsolationEnabled`: Bool (enable/disable Voice Isolation)

`AudioVoiceIsolationAmount`: int (0 to 100, isolation strength)

## Dialogue Leveler

`AudioDialogueLevelerEnabled`: Bool (enable/disable the Dialogue Leveler)

`AudioDialogueLevelerMode`: int (one of the constants below)

`AudioDialogueLevelerReduceLoudDialogue`: Bool (reduce loud dialogue)

`AudioDialogueLevelerLiftSoftDialogue`: Bool (lift soft dialogue)

`AudioDialogueLevelerBackgroundReduction`: Bool (enable background reduction)

`AudioDialogueLevelerOutputGain`: float (0.0 to 6.0 dB)

`AudioDialogueLevelerMode` can be one of the following constants:

```jsx
resolve.DIALOGUE_LEVELER_MODE_ALLOW_WIDER_DYNAMICS
resolve.DIALOGUE_LEVELER_MODE_OPTIMIZE_MODERATE_LEVELS
resolve.DIALOGUE_LEVELER_MODE_MORE_LIFT_FOR_LOW_LEVELS
resolve.DIALOGUE_LEVELER_MODE_LIFT_SOFT_WHISPERY_SOURCES
```
