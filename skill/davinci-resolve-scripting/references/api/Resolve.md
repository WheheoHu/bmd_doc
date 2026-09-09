# Resolve

> New in 21.1.0

### GetCurrentProject()
Return Type: `Project`

Returns the currently loaded Resolve [Project](./Project.md).

### GetCurrentTimeline()
Return Type: `Timeline`

Returns the currently loaded [Timeline](./Timeline.md).

### GetMediaPool()
Return Type: `MediaPool`

Returns the [MediaPool](./MediaPool.md) object for the current project.

### GetGallery()
Return Type: `Gallery`

Returns the [Gallery](./Gallery.md) object for the current project.

### GetKeyboardPresetList()
Return Type: `[presetNames...]`

Returns a list of available keyboard preset names.

### GetCurrentKeyboardPreset()
Return Type: `string`

Returns the name of the currently active keyboard preset.

### LoadKeyboardPreset(presetName)
Return Type: `Bool`

Loads the keyboard preset named presetName (string).

### DeleteKeyboardPreset(presetName)
Return Type: `Bool`

Deletes the keyboard preset named presetName (string).

### ImportKeyboardPreset(filePath, presetName)
Return Type: `Bool`

Imports a keyboard preset from filePath (string).
The optional argument presetName (string) specifies how the preset shall be named.
If not specified, the preset is named based on the file base name.

### ExportKeyboardPreset(presetName, exportPath)
Return Type: `Bool`

Exports the keyboard preset named presetName (string) to exportPath (string).

### ValidateDCTL(dctlSource)
Return Type: `string`

Validates the DCTL source code dctlSource (string). Returns None on success, or an error string on failure.

### EncryptDCTL(inputPath, [{encryptDCTLOptions}])
Return Type: `Bool`

Encrypts the DCTL at inputPath (string) and writes it to an output folder.

Refer to [Encrypt DCTL Options](../settings/EncryptDCTLOptions.md) for information on supported settings.

------

> New in 21.0.3

### GetLayoutPresetList()
Return Type: `[presetNames...]`

Returns a list of available UI layout preset names.

### GetBurnInPresetList()
Return Type: `[presetNames...]`

Returns a list of available data burn in preset names.

### DeleteBurnInPreset(presetName)
Return Type: `Bool`

Deletes the data burn in preset named presetName (string).

### GetUserPreferencesPresetList()
Return Type: `[presetNames...]`

Returns a list of available user preferences preset names.

### LoadUserPreferencesPreset(presetName)
Return Type: `Bool`

Loads the user preferences preset named presetName (string).

### SaveUserPreferencesPreset(presetName)
Return Type: `Bool`

Saves the current user preferences as a preset named presetName (string).

### DeleteUserPreferencesPreset(presetName)
Return Type: `Bool`

Deletes the user preferences preset named presetName (string).

### ImportUserPreferencesPreset(filePath, presetName)
Return Type: `Bool`

Imports a user preferences preset from filePath (string).
The optional argument presetName (string) specifies how the preset shall be named.
If not specified, the preset is named based on the file base name.

### ExportUserPreferencesPreset(presetName, exportPath)
Return Type: `Bool`

Exports the user preferences preset named presetName (string) to exportPath (string).

------
> New in 21.0.2

### DisableBackgroundTasksForCurrentResolveSession()
Return Type: `None`

Disables all background tasks for current Resolve session.

------

> New in 20.3.0

### GetFairlightPresets()
Return Type: `[presetNames...]`

Returns a list of Fairlight presets by name.

------

> New in 19.0.0

### GetKeyframeMode()
Return Type: `keyframeMode`

Returns the currently set keyframe mode (int). Refer to section [Keyframe Mode information](../settings/KeyframeModeInformation.md) for details.

### SetKeyframeMode(keyframeMode)
Return Type: `Bool`

Returns True when 'keyframeMode'(enum) is successfully set. Refer to section [Keyframe Mode information](../settings/KeyframeModeInformation.md) below for details.

------

###  DeleteLayoutPreset(presetName)                 
Return Type: `Bool`

Deletes preset named presetName.

### ExportBurnInPreset(presetName, exportPath)
Return Type: `Bool`

Export a data burn in preset to a given path (string) if presetName (string) exists.

###  ExportLayoutPreset(presetName, presetFilePath) 
Return Type: `Bool`

Exports preset named presetName to path presetFilePath.

### ExportRenderPreset(presetName, exportPath)
Return Type: `Bool`

Export a preset to a given path (string) if presetName(string) exists.

###  Fusion()                                       
Return Type: `Fusion`

Returns the Fusion object. Starting point for Fusion scripts.

###  GetCurrentPage()                               
Return Type: `String`

Returns the page currently displayed in the main window. Returned value can be one of ("media", "photo", "cut", "edit", "fusion", "color", "fairlight", "deliver", None).

###  GetMediaStorage()                              
Return Type: `MediaStorage`

Returns the [MediaStorage](./MediaStorage.md)  object to query and act on media locations.

###  GetProductName()                               
Return Type: `String`

Returns product name.

###  GetProjectManager()                            
Return Type: `ProjectManager`

Returns the [ProjectManager](./ProjectManager.md) object for currently open database.

###  GetVersion()                                   
Return Type: `[version fields]`

Returns list of product version fields in [major, minor, patch, build, suffix] format.

###  GetVersionString()                             
Return Type: `String`

Returns product version in "major.minor.patch[suffix].build" format.

### ImportBurnInPreset
Return Type: `Bool`

Import a data burn in preset from a given presetPath (string)

###  ImportLayoutPreset(presetFilePath, presetName) 
Return Type: `Bool`

Imports preset from path 'presetFilePath'. 
The optional argument 'presetName' specifies how the preset shall be named.
If not specified, the preset is named based on the filename.

### ImportRenderPreset(presetPath)
Return Type: `Bool`

Import a preset from presetPath (string) and set it as current preset for rendering.

### IsStudio()
Return Type: `Bool`

Returns True if this is the Studio version of the product, False for the free version.

###  LoadLayoutPreset(presetName)                   
Return Type: `Bool`

Loads UI layout from saved preset named presetName.

###  OpenPage(pageName)                             
Return Type: `Bool`

Switches to indicated page in DaVinci Resolve. 
Input can be one of ("media", "photo", "cut", "edit", "fusion", "color", "fairlight", "deliver").

###  Quit()                                         
Return Type: `None`

Quits the Resolve App.

###  SaveLayoutPreset(presetName)                   
Return Type: `Bool`

Saves current UI layout as a preset named presetName.

### SetHighPriority(highPriority)
Return Type: `Bool`

Sets the script execution priority to high or normal, based on highPriority (Bool).

###  UpdateLayoutPreset(presetName)                 
Return Type: `Bool`

Overwrites preset named 'presetName' with current UI layout.
