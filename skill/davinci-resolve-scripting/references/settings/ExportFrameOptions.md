# Export Frame Options

This section covers the supported settings for the methods [`Timeline:ExportFrame`](../api/Timeline.md#exportframeframeoffset-exportframeoptions), [`TimelineItem:ExportFrame`](../api/TimelineItem.md#exportframeframeoffset-exportframeoptions), [`MediaPoolItem:ExportFrame`](../api/MediaPoolItem.md#exportframeframeoffset-exportframeoptions) and [`PhotoAlbumItem:ExportFrame`](../api/PhotoAlbumItem.md#exportframeexportframeoptions), and the result dictionary they return.

The exportFrameOptions setting is a dictionary containing the following keys:

`outputType`: string (options: "file", "encodedString". Default: "encodedString")

`encodedImageFormat`: string (options: "jpg", "png". Used when `outputType` is "encodedString". Default: "jpg")

`filePath`: string (output file path, the format is inferred from the extension. Required when `outputType` is "file")

`maxDimension`: int (caps the longer edge in pixels, scaling the other edge proportionally. Default: 0, no scaling)

> Add at 21.2

`quality`: int (image quality 1 to 100, JPEG only. Default: 100)

`roiX`: float (left edge of the region of interest, as a fraction of the frame width, 0 to 1. Default: 0)

`roiY`: float (top edge of the region of interest, as a fraction of the frame height, 0 to 1. Default: 0)

`roiWidth`: float (width of the region of interest, as a fraction of the frame width. Default: 1, the whole width. Only supported for jpg and png output. `maxDimension` then caps the region instead of the whole frame, so the frame is rendered large enough for the region to reach it)

`roiHeight`: float (height of the region of interest, as a fraction of the frame height. Default: 1, the whole height. Note the fractions are per-axis, so equal `roiWidth` and `roiHeight` are not a square region unless the frame is square)

## Export frame result

The ExportFrame methods return a dictionary containing the following keys:

`success`: Bool (True if the frame was exported successfully)

`error`: string (error message, set on failure)

`data`: string (Base64-encoded image bytes, set when `outputType` is "encodedString" and `success` is True)

> Add at 21.2

`width`: int (width in pixels of the exported frame, after `maxDimension` was applied. Set when `success` is True)

`height`: int (height in pixels of the exported frame, after `maxDimension` was applied. Set when `success` is True)
