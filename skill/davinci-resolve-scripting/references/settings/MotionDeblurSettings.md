# Motion Deblur Settings

This section covers the supported settings for the method [Folder.RemoveMotionBlur({deblurOption})](../api/Folder.md#removemotionblurdebluroption) and [MediaPoolItem.RemoveMotionBlur({deblurOption})](../api/MediaPoolItem.md#removemotionblurdebluroption)

The deblurOption setting is a dictionary containing the following keys:

`FileName`: string

`Format`: string (example: "mov", "mp4")

`Codec`: string (example: "H264", "ProRes422")

`EncodingProfile`: string (example: "Main10"). Can only be set for H.264 and H.265.

`UseExtremeMode`: bool

`UseMarkInMarkOut`: bool

`RenderAtSourceRes`: bool

`UseMoreGpuMemory`: bool

`Encoder`: string (Native or MainConcept). Can only be set for H.265
