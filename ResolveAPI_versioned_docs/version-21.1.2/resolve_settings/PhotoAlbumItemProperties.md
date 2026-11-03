---
title: Photo Album Item Properties
displayed_sidebar: apiSidebar
---
This section covers the supported keys for the methods [`PhotoAlbumItem:GetProperties`](../resolve_api/PhotoAlbumItem.md#getproperties) and [`PhotoAlbumItem:SetProperties`](../resolve_api/PhotoAlbumItem.md#setpropertiesproperties).

All keys and values are validated before any of them is applied, so either all the properties are set or none of them is.

Pixel values (`Pan`, `Tilt` and the crop edges) use the oriented image, so when `ImageOrientation` is 90 degrees left or right the width and height are swapped. `RotationAngle` does not change the image size.

## Source transform

`SourceTransformEnabled`: Bool (enable/disable the Source Transform filter section)

`Pan`: float (horizontal position in pixels, -4.0\*width to 4.0\*width)

`Tilt`: float (vertical position in pixels, -4.0\*height to 4.0\*height)

`ZoomX`: float (horizontal zoom factor, 0.01 to 100.0. 1.0 = no zoom)

`ZoomY`: float (vertical zoom factor, 0.01 to 100.0. 1.0 = no zoom)

`ZoomGang`: Bool (link `ZoomX` and `ZoomY` so both change together)

`RotationAngle`: float (rotation in degrees, -360.0 to 360.0)

`Pitch`: float (3D rotation around the horizontal axis, -1.5 to 1.5)

`Yaw`: float (3D rotation around the vertical axis, -1.5 to 1.5)

`FlipX`: Bool (flip image horizontally)

`FlipY`: Bool (flip image vertically)

`ImageOrientation`: one of the image orientation constants below (example: `resolve.PHOTO_ORIENTATION_90_DEG_RIGHT`)

## Source cropping

`SourceCroppingEnabled`: Bool (enable/disable the Source Cropping filter section)

`CropLeft`: float (pixels cropped from the left edge, 0.0 to width)

`CropRight`: float (pixels cropped from the right edge, 0.0 to width)

`CropTop`: float (pixels cropped from the top edge, 0.0 to height)

`CropBottom`: float (pixels cropped from the bottom edge, 0.0 to height)

`CropRatio`: one of the crop ratio constants below (example: `resolve.PHOTO_CROP_RATIO_16X9`)

`CropLockAspectRatio`: Bool (locks the crop aspect ratio)

## Source looks

`SourceLooksEnabled`: Bool (enable/disable the Source Looks filter section)

`SourceLookType`: one of the look type constants below (example: `resolve.PHOTO_LOOK_WARM`)

## Crop params

The crop params are `CropLeft`, `CropRight`, `CropTop`, `CropBottom`, `CropRatio` and `CropLockAspectRatio`. Any of them can be set together. The number of crop edges given decides how the crop changes.

When no crop edge is given:

- A preset `CropRatio` reframes the crop to the largest centered crop with the ratio, with the lock on or off. Custom, or the current `CropRatio`, keeps the crop.
- `CropLockAspectRatio` is set without changing the crop.

When one crop edge is given:

- With `CropLockAspectRatio` off the edge is applied as given, and a preset `CropRatio` changes to Custom unless `CropRatio` is also given.
- With `CropLockAspectRatio` on and a preset `CropRatio`, the ratio is kept. The other axis stays centered on the crop, and the edge is pulled back if the crop would go outside the image.
- With a Custom `CropRatio` only that edge moves, since there is no ratio to keep.

When more than one crop edge is given:

- The crop edges not given keep their current values, and the crop is applied as given. A `CropRatio` does not reframe the crop.
- With `CropLockAspectRatio` on and a preset `CropRatio`, the crop must match the ratio, within a pixel on the shorter side of the ratio so that crop edges in whole pixels are accepted. Otherwise the call fails and nothing is applied.
- With `CropLockAspectRatio` off or a Custom `CropRatio`, any crop is accepted.

When `ImageOrientation` is 90 degrees left or right, a preset `CropRatio` is flipped, so 16:9 gives a 9:16 crop. `RotationAngle` does not flip the ratio.

## Image orientations

`ImageOrientation` can be one of the following constants:

```jsx
resolve.PHOTO_ORIENTATION_0_DEG
resolve.PHOTO_ORIENTATION_90_DEG_RIGHT
resolve.PHOTO_ORIENTATION_180_DEG
resolve.PHOTO_ORIENTATION_90_DEG_LEFT
```

## Crop ratios

`CropRatio` can be one of the following constants:

```jsx
resolve.PHOTO_CROP_RATIO_AS_SHOT
resolve.PHOTO_CROP_RATIO_CUSTOM
resolve.PHOTO_CROP_RATIO_16X9
resolve.PHOTO_CROP_RATIO_1X1
resolve.PHOTO_CROP_RATIO_4X5
resolve.PHOTO_CROP_RATIO_2X3
resolve.PHOTO_CROP_RATIO_4X3
```

## Look types

`SourceLookType` can be one of the following constants:

```jsx
resolve.PHOTO_LOOK_DEFAULT
resolve.PHOTO_LOOK_BW
resolve.PHOTO_LOOK_BRIGHT
resolve.PHOTO_LOOK_COOL
resolve.PHOTO_LOOK_DRAMATIC
resolve.PHOTO_LOOK_GOLD
resolve.PHOTO_LOOK_NATURAL
resolve.PHOTO_LOOK_RICH_CONTRAST
resolve.PHOTO_LOOK_ROSE
resolve.PHOTO_LOOK_VIBRANT
resolve.PHOTO_LOOK_WARM
```
