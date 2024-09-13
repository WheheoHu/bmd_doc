### AddSubFolder(folder, name)                      
Return Type:`Folder`

Adds new subfolder under specified [Folder](./Folder.md)  object with the given name.

### AppendToTimeline([\{clipInfo\}, ...])             
Return Type:`[TimelineItem]`

Appends list of clipInfos specified as dict of mediaPoolItem, startFrame (int), endFrame(int), (optional) mediaType(int; 1 - Video only, 2 - Audio only), trackIndex(int) and recordFrame(int). 
Returns the list of appended [TimelineItem](./time) .

### AppendToTimeline([clips])                       
Return Type:`[TimelineItem]`

Appends specified [MediaPoolItem](./MediaPoolItem.md)  objects in the current timeline. 
Returns the list of appended [TimelineItem](./TimelineItem.md) .

### AppendToTimeline(clip1, clip2, ...)             
Return Type:`[TimelineItem]`

Appends specified [MediaPoolItem](./MediaPoolItem.md)  objects in the current timeline. 
Returns the list of appended [TimelineItem](./TimelineItem.md) .

### CreateEmptyTimeline(name)                       
Return Type:`Timeline`

Adds new [Timeline](./Timeline.md)  with given name.

### CreateStereoClip(LeftMediaPoolItem,RightMediaPoolItem)
Return Type:`MediaPoolItem`

Takes in two existing media pool items and creates a new 3D stereoscopic media pool entry replacing the input media in the media pool.

### CreateTimelineFromClips(name, [\{clipInfo\}])     
Return Type:`Timeline`

Creates new [Timeline](./Timeline.md)  with specified name, appending the list of clipInfos specified as a dict of "[MediaPoolItem](./MediaPoolItem.md) ", "startFrame" (int), "endFrame" (int), "recordFrame" (int).

### CreateTimelineFromClips(name, [clips])          
Return Type:`Timeline`

Creates new [Timeline](./Timeline.md)  with specified name, and appends the specified [MediaPoolItem](./MediaPoolItem.md)  objects.

### CreateTimelineFromClips(name, clip1, clip2,...) 
Return Type:`Timeline`

Creates new [Timeline](./Timeline.md)  with specified name, and appends the specified [MediaPoolItem](./MediaPoolItem.md)  objects.

### DeleteClipMattes(MediaPoolItem, [paths])        
Return Type:`Bool`

Delete mattes based on their file paths, for specified [MediaPoolItem](./MediaPoolItem.md) . 
Returns True on success.

### DeleteClips([clips])                            
Return Type:`Bool`

Deletes specified clips or timeline mattes in the media pool

### DeleteFolders([subfolders])                     
Return Type:`Bool`

Deletes specified subfolders in the media pool

### DeleteTimelines([timeline])                     
Return Type:`Bool`

Deletes specified timelines in the media pool.

### ExportMetadata(fileName, [clips])               
Return Type:`Bool`

Exports metadata of specified clips to 'fileName' in CSV format.
If no clips are specified, all clips from media pool will be used.

### GetClipMatteList(MediaPoolItem)                 
Return Type:`[paths]`

Get mattes for specified [MediaPoolItem](./MediaPoolItem.md) , as a list of paths to the matte files.

### GetCurrentFolder()                              
Return Type:`Folder`

Returns currently selected [Folder](./Folder.md) .

### GetRootFolder()                                 
Return Type:`Folder`

Returns root [Folder](./Folder.md)  of Media Pool

### GetTimelineMatteList(Folder)                    
Return Type:`[MediaPoolItems]`

Get mattes in specified Folder, as list of [MediaPoolItem](./MediaPoolItem.md).

### GetUniqueId()
Return Type:`String`

Returns a unique ID for the media pool

### ImportFolderFromFile(filePath, sourceClipsPath="")
Return Type:`Bool`

Returns true if import from given DRB filePath is successful, false otherwise 
sourceClipsPath is a string that specifies a filesystem path to search for source clips if the media is inaccessible in their original path, empty by default

### ImportMedia([\{clipInfo\}])                       
Return Type:`[MediaPoolItems]`

Imports file path(s) into current Media Pool folder as specified in list of clipInfo dict. 
Returns a list of the [MediaPoolItem](./MediaPoolItem.md) s created.

Each clipInfo gets imported as one MediaPoolItem unless 'Show Individual Frames' is turned on.
Example: 
```python
ImportMedia([{"FilePath":"file_%03d.dpx", "StartIndex":1, "EndIndex":100}]) 
```
would import clip "file_[001-100].dpx".
### ImportMedia([items...])                         
Return Type:`[MediaPoolItems]`

Imports specified file/folder paths into current Media Pool folder. 
Input is an array of file/folder paths. 
Returns a list of the [MediaPoolItem](./MediaPoolItem.md)  created.

### ImportTimelineFromFile(filePath, \{importOptions\})
Return Type:`Timeline`

Creates [Timeline](./Timeline.md)  based on parameters within given file (AAF/EDL/XML/FCPXML/DRT/ADL) and optional importOptions dict, with support for the keys:

`timelineName`: string, specifies the name of the timeline to be created.Not valid for DRT import

`importSourceClips`: Bool, specifies whether source clips should be imported, True by default.Not valid for DRT import

`sourceClipsPath`: string, specifies a filesystem path to search for source clips if the media is inaccessible in their original path and if "importSourceClips" is True

`sourceClipsFolders`: List of Media Pool folder objects to search for source clips if the media is not present in current folder and if "importSourceClips" is False.Not valid for DRT import

`interlaceProcessing`: Bool, specifies whether to enable interlace processing on the imported timeline being created. valid only for AAF import

### MoveClips([clips], targetFolder)                
Return Type:`Bool`

Moves specified [MediaPoolItem](./MediaPoolItem.md) to target [Folder](./Folder.md) .

### MoveFolders([folders], targetFolder)            
Return Type:`Bool`

Moves specified folders to target [Folder](./Folder.md) .

### RefreshFolders()
Return Type:`Bool`

Updates the folders in collaboration mode

### RelinkClips([MediaPoolItem], folderPath)        
Return Type:`Bool`

Update the folder location of specified media pool clips with the specified folderpath.

### SetCurrentFolder(Folder)                        
Return Type:`Bool`

Sets current folder by given [Folder](./Folder.md) .

### UnlinkClips([MediaPoolItem])                    
Return Type:`Bool`

Unlink specified media pool clips.

