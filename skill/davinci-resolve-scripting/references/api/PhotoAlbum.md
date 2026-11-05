# PhotoAlbum

> New in 21.2

### ExportThumbnails(photoIndices, [{exportThumbnailsOptions}])
Return Type: `{exportThumbnailsResult}`

Renders the photos at the given 1-based album positions into a single grid image, one cell per photo. `1 <= photoIndex <= GetPhotoList()` size.

Refer to [Export Thumbnails Options](../settings/ExportThumbnailsOptions.md) for supported settings and returned keys.

------

> New in 21.1.2

### GetName()
Return Type: `string`

Returns the photo album name.

### SetName(photoAlbumName)
Return Type: `Bool`

Sets the photo album name if photoAlbumName (string) is unique. Returns True if successful.

### GetUniqueId()
Return Type: `string`

Returns a unique ID for the photo album.

### GetPhotoList()
Return Type: `[PhotoAlbumItem]`

Returns a list of [PhotoAlbumItem](./PhotoAlbumItem.md) in the photo album.

### GetCurrentItem()
Return Type: `PhotoAlbumItem`

Returns the current [PhotoAlbumItem](./PhotoAlbumItem.md), or None if there is none.

### DeletePhotos([photoAlbumItems])
Return Type: `Bool`

Deletes the specified [PhotoAlbumItem](./PhotoAlbumItem.md) list from the photo album.

### GetNodeGraph()
Return Type: `Graph`

Returns the photo album's node [Graph](./Graph.md) object.

### GetMediaPoolItem()
Return Type: `MediaPoolItem`

Returns the [MediaPoolItem](./MediaPoolItem.md) corresponding to the photo album.

### GrabStill()
Return Type: `galleryStill`

Grabs still from the current photo. Returns a GalleryStill object.

### GrabAllStills()
Return Type: `[galleryStill]`

Grabs stills from all photos in the photo album. Returns the list of GalleryStill objects.
