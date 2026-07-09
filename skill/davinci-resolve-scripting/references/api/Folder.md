# Folder

> New in 21.0.2

### PerformAudioClassification()
Return Type: `Bool`

Analyzes and classifies the audio of the MediaPoolItems within the folder and nested folders into categories and subcategories.

Refer to [Studio and AI Scripting APIs](../settings/StudioAndAIScriptingAPIs.md) for prerequisites.

### ClearAudioClassification()
Return Type: `Bool`

Clears audio classification of the MediaPoolItems within the folder and nested folders.

Refer to [Studio and AI Scripting APIs](../settings/StudioAndAIScriptingAPIs.md) for prerequisites.

### RemoveMotionBlur({deblurOption})
Return Type: `[[MediaPoolItem, MediaPoolItem]...]`

Applies motion deblur on [MediaPoolItem](./MediaPoolItem.md) in the folder. Returns a list of pairs mapping original to newly created [MediaPoolItem](./MediaPoolItem.md).

Refer to [Motion Deblur Settings](../settings/MotionDeblurSettings.md) for information on supported settings.

Refer to [Studio and AI Scripting APIs](../settings/StudioAndAIScriptingAPIs.md) for prerequisites.

### AnalyzeForIntellisearch(identifyFaces, isBetterMode)
Return Type: `Bool`

Performs Intellisearch analysis on all MediaPoolItems in the folder. identifyFaces specifies whether to identify faces; isBetterMode specifies whether to use Better mode. Returns True if required packages are installed and analysis is successful.

Refer to [Studio and AI Scripting APIs](../settings/StudioAndAIScriptingAPIs.md) for prerequisites.

### AnalyzeForSlate(markerColor)
Return Type: `Bool`

Performs Slate analysis on all MediaPoolItems in the folder using the current settings and specified markerColor. Returns True if required packages are installed and analysis is successful.

Refer to [Analyze Slate Settings](../settings/AnalyzeSlateSettings.md) for information on markerColor.

Refer to [Studio and AI Scripting APIs](../settings/StudioAndAIScriptingAPIs.md) for prerequisites.

------

### ClearTranscription()
Return Type: `Bool`

Clears audio transcription of the MediaPoolItems within the folder and nested folders. Returns True if successful; False otherwise.

Refer to [Studio and AI Scripting APIs](../settings/StudioAndAIScriptingAPIs.md) for prerequisites.

### Export(filePath)
Return Type: `Bool`

Returns true if export of DRB folder to filePath is successful, false otherwise

### GetClipList()            
Return Type: `[clips...]`

Returns a list of [MediaPoolItem](./MediaPoolItem.md) (items) within the folder.

### GetIsFolderStale()
Return Type: `Bool`

Returns true if folder is stale in collaboration mode, false otherwise

### GetName()                
Return Type: `string`

Returns the media folder name.

### GetSubFolderList()       
Return Type: `[folders...]`

Returns a list of [Folder](./Folder.md) in the folder.

### GetUniqueId()
Return Type: `string`

Returns a unique ID for the media pool folder

### TranscribeAudio(useSpeakerDetection=None)
Return Type: `Bool`

Transcribes audio of the MediaPoolItems within the folder and nested folders. Returns True if successful; False otherwise

Accepts an optional boolean argument to use speaker detection when transcribing. If no argument is specified, use the project's setting.

Refer to [Studio and AI Scripting APIs](../settings/StudioAndAIScriptingAPIs.md) for prerequisites.
