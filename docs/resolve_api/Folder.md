### ClearTranscription()
Return Type:`Bool`

Clears audio transcription of the MediaPoolItems within the folder and nested folders. Returns True if successful; False otherwise.

### Export(filePath)
Return Type:`Bool`

Returns true if export of DRB folder to filePath is successful, false otherwise

### GetClipList()            
Return Type:`[clips...]`

Returns a list of [MediaPoolItem](./MediaPoolItem.md) (items) within the folder.

### GetIsFolderStale()
Return Type:`Bool`

Returns true if folder is stale in collaboration mode, false otherwise

### GetName()                
Return Type:`string`

Returns the media folder name.

### GetSubFolderList()       
Return Type:`[folders...]`

Returns a list of [Folder](./Folder.md) in the folder.

### GetUniqueId()
Return Type:`string`

Returns a unique ID for the media pool folder

### TranscribeAudio()
Return Type:`Bool`

Transcribes audio of the MediaPoolItems within the folder and nested folders. Returns True if successful; False otherwise

