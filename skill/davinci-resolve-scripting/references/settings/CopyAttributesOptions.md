# Copy Attributes Options

This section covers the supported settings for the method [`TimelineItem:CopyAttributes`](../api/TimelineItem.md#copyattributestargetitems-copyattributesoptions).

The copyAttributesOptions setting is a dictionary containing the following keys. Every key except `keyframeTiming` is a Bool that selects an attribute to copy; an `all...` key selects every attribute of its group.

`keyframeTiming`: one of the keyframe timing constants below (default: `resolve.KEYFRAME_TIMING_MAINTAIN`)

## Clip attributes

`allClipAttributes`: Bool (copy all clip attributes: `clipColor`, `flags`, `markers`)

`clipColor`: Bool (copy clip color)

`flags`: Bool (copy flags)

`markers`: Bool (copy markers)

## Video attributes

`allVideoAttributes`: Bool (copy all video attributes: `compositionMode`, `opacity`, `position`, `rotationAngle`, `anchorPoint`, `pitch`, `yaw`, `allZoomAttributes`, `allCropAttributes`, `allFlipAttributes`, `retimeProcess`, `motionEstimation`, `videoPlugins`, `colorCorrection`, `fusionEffects`)

`compositionMode`: Bool (copy composition mode)

`opacity`: Bool (copy opacity)

`position`: Bool (copy position)

`rotationAngle`: Bool (copy rotation angle)

`anchorPoint`: Bool (copy anchor point)

`pitch`: Bool (copy pitch)

`yaw`: Bool (copy yaw)

`allZoomAttributes`: Bool (copy all zoom attributes: `scaleX`, `scaleY`)

`scaleX`: Bool (copy scale X)

`scaleY`: Bool (copy scale Y)

`allCropAttributes`: Bool (copy all crop attributes: `cropLeft`, `cropRight`, `cropTop`, `cropBottom`, `cropSoftness`, `retainImagePosition`)

`cropLeft`: Bool (copy left crop)

`cropRight`: Bool (copy right crop)

`cropTop`: Bool (copy top crop)

`cropBottom`: Bool (copy bottom crop)

`cropSoftness`: Bool (copy crop softness)

`retainImagePosition`: Bool (retain image position when copying crop)

`allFlipAttributes`: Bool (copy all flip attributes: `flipV`, `flipH`)

`flipV`: Bool (copy vertical flip)

`flipH`: Bool (copy horizontal flip)

`retimeProcess`: Bool (copy retime process)

`motionEstimation`: Bool (copy motion estimation)

`videoPlugins`: Bool (copy video plugins/filters)

`colorCorrection`: Bool (copy color correction/grade)

`fusionEffects`: Bool (copy Fusion effects)

## Audio attributes

`allAudioAttributes`: Bool (copy all audio attributes: `audioVolume`, `audioPlugins`, `audioEqualizer`)

`audioVolume`: Bool (copy audio volume)

`audioPlugins`: Bool (copy audio plugins/filters)

`audioEqualizer`: Bool (copy audio equalizer)

## Retime

`retimeEffect`: Bool (copy retime/speed timemap)

`rippleSequence`: Bool (ripple sequence after pasting the timemap. Requires `retimeEffect`)

## Keyframe timing

`keyframeTiming` can be one of the following constants:

```jsx
resolve.KEYFRAME_TIMING_MAINTAIN
resolve.KEYFRAME_TIMING_STRETCH_TO_FIT
```
