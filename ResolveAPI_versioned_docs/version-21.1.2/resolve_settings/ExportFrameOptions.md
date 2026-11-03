---
title: Export Frame Options
displayed_sidebar: apiSidebar
---
This section covers the supported settings for the methods [`Timeline:ExportFrame`](../resolve_api/Timeline.md#exportframeframeoffset-exportframeoptions), [`TimelineItem:ExportFrame`](../resolve_api/TimelineItem.md#exportframeframeoffset-exportframeoptions), [`MediaPoolItem:ExportFrame`](../resolve_api/MediaPoolItem.md#exportframeframeoffset-exportframeoptions) and [`PhotoAlbumItem:ExportFrame`](../resolve_api/PhotoAlbumItem.md#exportframeexportframeoptions), and the result dictionary they return.

The exportFrameOptions setting is a dictionary containing the following keys:

`outputType`: string (options: "file", "encodedString". Default: "encodedString")

`encodedImageFormat`: string (options: "jpg", "png". Used when `outputType` is "encodedString". Default: "jpg")

`filePath`: string (output file path, the format is inferred from the extension. Required when `outputType` is "file")

`maxDimension`: int (caps the longer edge in pixels, scaling the other edge proportionally. Default: 0, no scaling)

## Export frame result

The ExportFrame methods return a dictionary containing the following keys:

`success`: Bool (True if the frame was exported successfully)

`error`: string (error message, set on failure)

`data`: string (Base64-encoded image bytes, set when `outputType` is "encodedString" and `success` is True)
