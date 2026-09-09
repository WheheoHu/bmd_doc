# MediaStorage

> New in 21.1.0

### StartCloneMedia(sourceDir, targetDirs)
Return Type: `Bool`

Starts cloning media from sourceDir (string) to targetDirs (a string, or a list of strings).
Use [SetCloneToolSettings](#setclonetoolsettingsclonetoolsettings) to configure PreserveFolderName and ChecksumType beforehand.

### StopCloneMedia()
Return Type: `Bool`

Stops the clone job currently in progress, started via [StartCloneMedia](#startclonemediasourcedir-targetdirs). Returns False if no clone job is in progress.

### GetCloneStatus()
Return Type: `{cloneStatus}`

Returns a dict with the status of the current (or most recently started) clone job.

Refer to [Clone Tool Settings](../settings/CloneToolSettings.md) for the returned keys.

### SetCloneToolSettings([{cloneToolSettings}])
Return Type: `Bool`

Sets the PreserveFolderName and ChecksumType options used by subsequent [StartCloneMedia](#startclonemediasourcedir-targetdirs) calls, and by the Clone Tool in the UI.

Refer to [Clone Tool Settings](../settings/CloneToolSettings.md) for information on supported settings.

---

###  AddClipMattesToMediaPool(MediaPoolItem, [paths],stereoEye)
Return Type: `Bool`

Adds specified media files as mattes for the specified [MediaPoolItem](./MediaPoolItem.md) . 
StereoEye is an optional argument for specifying which eye to add the matte to for stereo clips ("left" or "right"). 
Returns True if successful.

### AddItemListToMediaPool([{itemInfo}, ...])
Return Type: `[clips...]`

Adds list of itemInfos specified as dict of "media", "startFrame" (int), "endFrame" (int) from Media Storage into current Media Pool folder. Returns a list of the [MediaPoolItem](./MediaPoolItem.md) created.

###  AddItemListToMediaPool([items...])              

> ⚠️ Deprecated calling convention since 21.1.0. Refer to [Deprecated Calling Conventions](../deprecated.md#deprecated-calling-conventions).


Return Type: `[clips...]`

Adds specified file/folder paths from Media Storage into current Media Pool folder. 
Input is an array of file/folder paths. 
Returns a list of the [MediaPoolItem](./MediaPoolItem.md)  created.

###  AddItemListToMediaPool(item1, item2, ...)       

> ⚠️ Deprecated calling convention since 21.1.0. Refer to [Deprecated Calling Conventions](../deprecated.md#deprecated-calling-conventions).


Return Type: `[clips...]`

Adds specified file/folder paths from Media Storage into current Media Pool folder. 
Input is one or more file/folder paths. 
Returns a list of the [MediaPoolItem](./MediaPoolItem.md)  created.

###  AddTimelineMattesToMediaPool([paths])           
Return Type: `[MediaPoolItems]`

Adds specified media files as timeline mattes in current media pool folder. 
Returns a list of created [MediaPoolItem](./MediaPoolItem.md) .

###  GetFileList(folderPath)                         
Return Type: `[paths...]`

Returns list of media and file listings in the given absolute folder path. 
Note that media listings may be logically consolidated entries.

###  GetMountedVolumeList()                          
Return Type: `[paths...]`

Returns list of folder paths corresponding to mounted volumes displayed in Resolve’s Media Storage.

###  GetSubFolderList(folderPath)                    
Return Type: `[paths...]`

Returns list of folder paths in the given absolute folder path.

###  RevealInStorage(path)                           
Return Type: `Bool`

Expands and displays given file/folder path in Resolve’s Media Storage.
