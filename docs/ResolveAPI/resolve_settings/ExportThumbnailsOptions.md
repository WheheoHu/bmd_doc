---
title: Export Thumbnails Options
displayed_sidebar: apiSidebar
---
This section covers the supported settings for the methods [`MediaPoolItem:ExportThumbnails`](../resolve_api/MediaPoolItem.md#exportthumbnailsframes-exportthumbnailsoptions), [`Timeline:ExportThumbnails`](../resolve_api/Timeline.md#exportthumbnailsframes-exportthumbnailsoptions), [`TimelineItem:ExportThumbnails`](../resolve_api/TimelineItem.md#exportthumbnailsframes-exportthumbnailsoptions) and [`PhotoAlbum:ExportThumbnails`](../resolve_api/PhotoAlbum.md#exportthumbnailsphotoindices-exportthumbnailsoptions), and the result dictionary they return.

The frames argument is a list whose elements are either integer frame offsets (0-based into the source) or `{frameOffset, label}` dicts. When `label` is omitted, the cell is labelled with the frame offset; use it to label cells with a timecode or a clip name so the grid reads back to the source.

The exportThumbnailsOptions setting is a dictionary containing the following keys:

`outputType`: string (options: "file", "encodedString". Default: "encodedString")

`encodedImageFormat`: string (options: "jpg", "png". Used when `outputType` is "encodedString". Default: "jpg")

`filePath`: string (output file path, the format is inferred from the extension. Required when `outputType` is "file")

`maxDimension`: int (caps the longer edge of the whole sheet in pixels, not of one cell. Default: 0, no scaling. The budget is split across the cells, so more frames means smaller cells)

`quality`: int (image quality in percent, 1 to 100. JPEG only, ignored by the other formats. Default: 100)

## Export thumbnails result

The ExportThumbnails methods return a dictionary containing the following keys:

`success`: Bool (True if the thumbnails were composited successfully)

`error`: string (error message, set on failure)

`data`: string (Base64-encoded image bytes, set when `outputType` is "encodedString" and `success` is True)

`width`: int (width in pixels of the composited sheet. Set when `success` is True)

`height`: int (height in pixels of the composited sheet. Set when `success` is True)

`columns`: int (cells per row of the grid, chosen to keep the sheet near square. Set when `success` is True)

`rows`: int (rows of the grid. Cells fill it left to right, top to bottom, in the order frames were given. Set when `success` is True)

`cellWidth`: int (width in pixels of one cell. Set when `success` is True)

`cellHeight`: int (height in pixels of one cell. Set when `success` is True)
