# ColorGroup

> New in 21.1.2

### GetPhotosInPhotoAlbum(photoAlbum=CurrPhotoAlbum)
Return Type: `[PhotoAlbumItem]`

Returns a list of [PhotoAlbumItem](./PhotoAlbumItem.md) that are in colorGroup in the given [PhotoAlbum](./PhotoAlbum.md). photoAlbum is the current photo album by default.

------

### GetName()             
Return Type: `String`             

Returns the name (string) of the ColorGroup.
### SetName(groupName)    
Return Type: `Bool`               

Renames ColorGroup to groupName (string).
### GetClipsInTimeline(Timeline=CurrTimeline)
Return Type: `[TimelineItem]`   

Returns a list of [TimelineItem](./TimelineItem.md) that are in colorGroup in the given Timeline. Timeline is Current Timeline by default.
### GetPreClipNodeGraph() 
Return Type: `Graph`              

Returns the ColorGroup Pre-clip [graph](./Graph.md).
### GetPostClipNodeGraph()
Return Type: `Graph`              

Returns the ColorGroup Post-clip [graph](./Graph.md).
