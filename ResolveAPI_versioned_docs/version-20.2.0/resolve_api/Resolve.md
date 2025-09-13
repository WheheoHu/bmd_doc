---
displayed_sidebar: apiSidebar
---
> New in 19.0.0

### GetKeyframeMode()
Return Type: `keyframeMode`

Returns the currently set keyframe mode (int). Refer to section [Keyframe Mode information](../resolve_settings/KeyframeModeInformation.md) for details.

### SetKeyframeMode(keyframeMode)
Return Type: `Bool`

Returns True when 'keyframeMode'(enum) is successfully set. Refer to section [Keyframe Mode information](../resolve_settings/KeyframeModeInformation.md) below for details.

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

Returns the page currently displayed in the main window. Returned value can be one of ("media", "cut", "edit", "fusion", "color", "fairlight", "deliver", None).

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

###  LoadLayoutPreset(presetName)                   
Return Type: `Bool`

Loads UI layout from saved preset named presetName.

###  OpenPage(pageName)                             
Return Type: `Bool`

Switches to indicated page in DaVinci Resolve. 
Input can be one of ("media", "cut", "edit", "fusion", "color", "fairlight", "deliver").

###  Quit()                                         
Return Type: `None`

Quits the Resolve App.

###  SaveLayoutPreset(presetName)                   
Return Type: `Bool`

Saves current UI layout as a preset named presetName.

###  UpdateLayoutPreset(presetName)                 
Return Type: `Bool`

Overwrites preset named 'presetName' with current UI layout.

