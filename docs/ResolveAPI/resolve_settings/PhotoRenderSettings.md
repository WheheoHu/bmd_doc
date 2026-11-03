---
title: Photo Render Settings
displayed_sidebar: apiSidebar
---
This section covers the supported settings for the methods [`Project:SetPhotoRenderSettings`](../resolve_api/Project.md#setphotorendersettingssettings) (Deliver page) and [`Project:RenderPhotosWithQuickExport`](../resolve_api/Project.md#renderphotoswithquickexportquickexportpresetname-presetinfo) (Quick Export), which render the current photo album.

## Deliver settings

The settings dictionary for [`Project:SetPhotoRenderSettings`](../resolve_api/Project.md#setphotorendersettingssettings) contains the following keys. Settings not given keep their current value.

`TargetDir`: string (output directory path)

`CustomName`: string (output filename prefix, supports tags)

`UsePhotoAlbumName`: Bool (use the photo album name as the filename prefix instead of `CustomName`)

`CustomSuffix`: string (output filename suffix, supports tags)

`FilenameDigits`: int (number of digits in the filename frame number, 1 to 10)

`Format`: one of the photo format constants below (example: `resolve.PHOTO_FORMAT_JPEG`)

`BitDepth`: int (8 or 16 for PNG and TIFF, 8 or 10 for HEIC. HEIC is available on macOS only)

`ExportAlpha`: Bool (enable alpha channel export. PNG and TIFF only)

`AutoQualityLevel`: one of the auto quality constants below (JPEG only, cannot be combined with `ManualQualityPercent`)

`ManualQualityPercent`: int (manual quality in percent: JPEG 1 to 100, HEIC 0 to 100. JPEG and HEIC only, cannot be combined with `AutoQualityLevel`)

`TiffCompressionType`: one of the TIFF compression constants below (TIFF only)

`CompressionLevel`: int (0 to 9. PNG, and TIFF when `TiffCompressionType` is `resolve.PHOTO_TIFF_COMPRESSION_ZIP`)

`ScaleMode`: one of the scale mode constants below. Changing it requires the value key of the new mode

`ScaleWidth`: int (output width in pixels. Requires `ScaleMode` `resolve.PHOTO_SCALE_DIMENSIONS`)

`ScaleHeight`: int (output height in pixels. Requires `ScaleMode` `resolve.PHOTO_SCALE_DIMENSIONS`)

`ScaleShortSide`: int (short side length in pixels. Requires `ScaleMode` `resolve.PHOTO_SCALE_SHORT_SIDE`)

`ScaleLongSide`: int (long side length in pixels. Requires `ScaleMode` `resolve.PHOTO_SCALE_LONG_SIDE`)

`ScalePercent`: int (scale in percent, 25 to 100. Requires `ScaleMode` `resolve.PHOTO_SCALE_PERCENT`)

`ScaleMegapixels`: float (output size in megapixels, one decimal place, example: 12.5. Requires `ScaleMode` `resolve.PHOTO_SCALE_MEGAPIXELS`)

`AllowEnlarge`: Bool (allow scaling above the original size. Not used with `resolve.PHOTO_SCALE_ORIGINAL` or `resolve.PHOTO_SCALE_PERCENT`)

`Resolution`: int (resolution value in the unit given by `ResolutionUnit`, 40 to 3000)

`ResolutionUnit`: one of the resolution unit constants below

`IncludeMetadata`: Bool (embed metadata in the exported image)

## Quick Export settings

The presetInfo dictionary for [`Project:RenderPhotosWithQuickExport`](../resolve_api/Project.md#renderphotoswithquickexportquickexportpresetname-presetinfo) contains the following keys:

`TargetDir`: string (output directory path. Required)

`CustomName`: string (output filename, supports tags. Required)

`BitDepth`: int (8 or 16 for PNG and TIFF, 8 or 10 for HEIC. HEIC is available on macOS only. Default: 8)

`ManualQualityPercent`: int (image quality in percent, 1 to 100. JPEG and HEIC only. Default: 80)

`TiffCompressionType`: one of the TIFF compression constants below (TIFF only. Default: `resolve.PHOTO_TIFF_COMPRESSION_NONE`)

`CompressionLevel`: int (0 to 9. PNG, and TIFF when `TiffCompressionType` is `resolve.PHOTO_TIFF_COMPRESSION_ZIP`. Default: 0)

`ScalePercent`: int (scale in percent: 100 (original), 75, 50 or 25. JPEG, PNG and HEIC only. Default: 100)

`Resolution`: int (resolution in pixels per inch (ppi), 40 to 1200. Default: 72)

`IncludeMetadata`: Bool (embed metadata in the exported image. Default: True)

## Photo formats

`Format` can be one of the following constants:

```jsx
resolve.PHOTO_FORMAT_JPEG
resolve.PHOTO_FORMAT_PNG
resolve.PHOTO_FORMAT_HEIC
resolve.PHOTO_FORMAT_TIFF
```

## Auto quality levels

`AutoQualityLevel` can be one of the following constants:

```jsx
resolve.PHOTO_AUTO_QUALITY_LEAST
resolve.PHOTO_AUTO_QUALITY_LOW
resolve.PHOTO_AUTO_QUALITY_MEDIUM
resolve.PHOTO_AUTO_QUALITY_HIGH
resolve.PHOTO_AUTO_QUALITY_BEST
```

## TIFF compression types

`TiffCompressionType` can be one of the following constants:

```jsx
resolve.PHOTO_TIFF_COMPRESSION_NONE
resolve.PHOTO_TIFF_COMPRESSION_LZW
resolve.PHOTO_TIFF_COMPRESSION_ZIP
```

## Scale modes

`ScaleMode` can be one of the following constants:

```jsx
resolve.PHOTO_SCALE_ORIGINAL
resolve.PHOTO_SCALE_DIMENSIONS
resolve.PHOTO_SCALE_SHORT_SIDE
resolve.PHOTO_SCALE_LONG_SIDE
resolve.PHOTO_SCALE_PERCENT
resolve.PHOTO_SCALE_MEGAPIXELS
```

## Resolution units

`ResolutionUnit` can be one of the following constants:

```jsx
resolve.PHOTO_RESOLUTION_UNIT_PPI
resolve.PHOTO_RESOLUTION_UNIT_PPCM
```
