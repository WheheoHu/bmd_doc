# DaVinci Resolve Scripting API

*Last Updated: 31 Aug 2026*

## Overview

In this package, you will find a brief introduction to the Scripting API for DaVinci Resolve. Contents include:

- This README.md file for reference
- A changelog covering API changes over recent versions
- An Examples folder with representative scripts
- .pyi files with API documentation
- A Modules folder for custom scripting access

DaVinci Resolve supports user scripting in Lua 5.1 and Python 3.6 (or higher versions), as well as Workflow
integrations (based on Electron and JavaScript). DaVinci Resolve comes with pre-packaged LuaJIT and Python interpreters,
as well as a basic Electron package as a starting point for Workflow integrations. Refer to the Workflow integration
developer notes for initialization and set up.

Scripts can be run internally (from the Workspace > Scripts menu or from the Console), locally (from the Terminal in
the same system), or if configured, from the local network. See Prerequisites section below.

Notes:

- From v16.2 onwards, the `nodeIndex` parameters accepted by `SetLUT()` and `SetCDL()` are 1-based instead of 0-based,
  i.e. `1 <= nodeIndex <= total number of nodes`.

### Prerequisites

To invoke a script, you will need:

- An active instance of DaVinci Resolve. Scripts may fail if the app is not fully loaded, or is starting up or quitting.
- A correctly configured application preference for external scripting.
- A script in one of the following languages:
  - Lua 5.1
  - Python >= 3.6 64-bit

### Configuration

In DaVinci Resolve Studio, Preferences > System > General, you can configure:

- External scripting, i.e. whether external scripts can connect to Resolve (None, Local, or Network).
- Automatic scripted actions, to allow a safe subset or to allow all arbitrary embedded scripted actions. It is
  recommended to leave this as Allow safe.

Please be aware of the security implications when executing scripts from unknown origins, or allowing scripting access
from outside of the Resolve application.

## Internal Scripting

Supported methods for launching a script from within DaVinci Resolve:

- **Console**: The Workspace > Console window allows for an easy way to interactively execute simple scripting commands,
  to query or modify properties, and to test scripts. For more information on how to use the Console, please refer to
  the DaVinci Resolve User Manual.
- **Scripts Menu**: The Workspace > Scripts submenu lists the scripts present on your system. See Script Menu and
  Folders section below.
- **Render Scripts**: In the Deliver page, Render settings, under Advanced Settings, you can select a script to be
  executed at the start or end of a render job.
- **Composition Logic**: Fusion tools can be configured to execute in-tool scripts at Frame Render, Start Render and End
  Render. Please refer to the Configuration section above.

When invoking scripts from inside DaVinci Resolve, internal variables like `bmd`, `resolve` and `fusion` are already
defined as globals. Scripts invoked in a render context will have access to additional render job specific variables
(job ID, status and render errors). For an example, see `Scripting/Examples/8_slack_notification_by_render_job.py`.

### Script Menu and Folders

On startup, DaVinci Resolve scans the subfolders in the directories shown below and enumerates the scripts found in the
Workspace application menu under Scripts. Place your script under Utility to be listed in all pages, under Comp or Tool
to be available in the Fusion page or under folders for individual pages (Edit, Color or Deliver). Scripts under Deliver
are additionally shown under render settings start/end scripts list. Placing your script here and invoking it from the
menu is the easiest way to use scripts.

macOS:

- All users: `/Library/Application Support/Blackmagic Design/DaVinci Resolve/Fusion/Scripts`
- Specific user: `/Users/<UserName>/Library/Application Support/Blackmagic Design/DaVinci Resolve/Fusion/Scripts`

Windows:

- All users: `%PROGRAMDATA%\Blackmagic Design\DaVinci Resolve\Fusion\Scripts`
- Specific user: `%APPDATA%\Blackmagic Design\DaVinci Resolve\Support\Fusion\Scripts`

Linux:

- All users: `/opt/resolve/Fusion/Scripts`
- Specific user: `$HOME/.local/share/DaVinciResolve/Fusion/Scripts`

## Local Scripting

### Built-in Python and LuaJIT Interpreters

DaVinci Resolve 21.1 and above includes a custom Python 3.14 distribution which includes the following changes:

- `import DaVinciResolveScript` works out-of-box. No need to set `RESOLVE_SCRIPT_API`, `RESOLVE_SCRIPT_LIB` or
  `PYTHONPATH`.
- `pip`, `TK` and `IDLE` are not supported.

The interpreter can be found in the following location:

- macOS: `/Applications/DaVinci Resolve/DaVinci Resolve.app/Contents/Applications/ResolvePython`
- Windows: `C:\Program Files\Blackmagic Design\DaVinci Resolve\ResolvePython\ResolvePython.exe`
- Linux: `/opt/resolve/bin/ResolvePython`

DaVinci Resolve also includes a LuaJIT 5.1 interpreter, found in the following location:

- macOS: `/Applications/DaVinci Resolve/DaVinci Resolve.app/Contents/Libraries/Fusion/fuscript`
- Windows: `C:\Program Files\Blackmagic Design\DaVinci Resolve\fuscript.exe`
- Linux: `/opt/resolve/libs/Fusion/fuscript`

Use these to invoke a script from a command line / shell terminal, without needing environment variables. These
interpreters will be upgraded regularly as part of the application's development.

### External Interpreters

Should you wish to use your own Python runtime (3.6 or above) from www.python.org, you may need to set the following
environment variables and use the DaVinciResolveScript module:

macOS:

```sh
RESOLVE_SCRIPT_API="/Library/Application Support/Blackmagic Design/DaVinci Resolve/Developer/Scripting"
RESOLVE_SCRIPT_LIB="/Applications/DaVinci Resolve/DaVinci Resolve.app/Contents/Libraries/Fusion/fusionscript.so"
PYTHONPATH="$PYTHONPATH:$RESOLVE_SCRIPT_API/Modules/"
```

Windows:

```bat
RESOLVE_SCRIPT_API="%PROGRAMDATA%\Blackmagic Design\DaVinci Resolve\Support\Developer\Scripting"
RESOLVE_SCRIPT_LIB="C:\Program Files\Blackmagic Design\DaVinci Resolve\fusionscript.dll"
PYTHONPATH="%PYTHONPATH%;%RESOLVE_SCRIPT_API%\Modules\"
```

Linux:

```sh
RESOLVE_SCRIPT_API="/opt/resolve/Developer/Scripting"
RESOLVE_SCRIPT_LIB="/opt/resolve/libs/Fusion/fusionscript.so"
PYTHONPATH="$PYTHONPATH:$RESOLVE_SCRIPT_API/Modules/"
```

## Network and Headless Access

See Configuration section above to configure for executing scripts from the network. The Network setting allows for
Terminal access from LAN.

DaVinci Resolve Studio and Fusion Studio scripting listens on port 1144 (registered with IANA for this purpose). On
successful connection, the return connection is dynamically allocated in the 49152..65535 range.

DaVinci Resolve can be launched in a headless mode without the user interface using the `-nogui` command line option.
When DaVinci Resolve is launched using this option, the user interface is disabled. However, the various scripting APIs
will continue to work as expected.

## Example Python Script

This script creates a simple Resolve project called "Hello World":

```python
#!/usr/bin/env python3
# Obtain a resolve instance if not already initialized in context.
if 'resolve' not in globals() or not hasattr(resolve, 'GetVersion'):
    import DaVinciResolveScript as dvr_script
    resolve = dvr_script.scriptapp("Resolve")
fusion = resolve.Fusion()
projectManager = resolve.GetProjectManager()
projectManager.CreateProject("Hello World")
```

The `resolve` object is the fundamental starting point for scripting via Resolve. As a native object, it can be
inspected for further scriptable properties - using table iteration and "getmetatable" in Lua and `dir`, `help`
etc in Python (among other methods). A notable scriptable object above is `fusion` - it allows access to all existing
Fusion scripting functionality.

## DaVinci Resolve API

Please refer to the included `DaVinciResolveScript.pyi` Python API definition.

## List and Dict Data Structures

Beside primitive data types, Resolve's Python API mainly uses list and dict data structures. Lists are denoted by
`[ ... ]` and dicts are denoted by `{ ... }` above.
As Lua does not support list and dict data structures, the Lua API implements "list" as a table with indices, e.g.
`{ [1] = listValue1, [2] = listValue2, ... }`.
Similarly the Lua API implements "dict" as a table with the dictionary key as first element, e.g.
`{ [dictKey1] = dictValue1, [dictKey2] = dictValue2, ... }`.

## Keyframe Mode information

This section covers additional notes for the functions `Resolve.GetKeyframeMode()` and
`Resolve.SetKeyframeMode(keyframeMode)`.

`keyframeMode` is one of the `resolve.KEYFRAME_MODE_*` constants. The integer returned by
`Resolve.GetKeyframeMode()` corresponds to those constants.

## Cache Mode information

This section covers additional notes for the functions `Graph.GetNodeCacheMode(nodeIndex)` and
`Graph.SetNodeCacheMode(nodeIndex, cache_value)`.

`cache_value` is one of the `resolve.CACHE_*` constants. The integer returned by
`Graph.GetNodeCacheMode(nodeIndex)` corresponds to those constants.

## Cloud Projects Settings

All four cloud functions (`CreateCloudProject`, `LoadCloudProject`, `ImportCloudProject`, `RestoreCloudProject`) require
`projectMediaPath` to be defined. `LoadCloudProject` and `CreateCloudProject` additionally require `projectName`.

Note that `LoadCloudProject` only honours the following keys: `projectName`, `projectMediaPath` and `syncMode`.
Only 1st load on a given system will honour all 3 settings. Subsequent loads will honour only `projectName`.

## Looking up Project and Clip properties

This section covers additional notes for the functions `Project.GetSettings()`, `Project.SetSettings()`,
`Timeline.GetSettings()`, `Timeline.SetSettings()`, `MediaPoolItem.GetClipProperty()` and `MediaPoolItem.SetClipProperty()`.
These functions are used to get and set properties otherwise available to the user through the Project Settings and the
Clip Attributes dialogs.

The settings and properties follow a key-value pair format, where each property is identified by a key and possesses a
value (typically a text value). Keys and values are designed to be easily correlated with parameter names and values in
the Resolve UI. Explicitly enumerated values for some parameters are listed below.

Some properties may be read only - these include intrinsic clip properties like date created or sample rate, and
properties that can be disabled in specific application contexts (e.g. custom colorspaces in an ACES workflow, or output
sizing parameters when behavior is set to match timeline)

### Getting values

Invoke `Project.GetSettings()` or `Timeline.GetSettings()` to get a snapshot of all settings (keys and values).
Similarly, `MediaPoolItem.GetClipProperty()` can be called to get all clip properties.

Note that `Timeline.GetSettings()` returns the project settings when the timeline setting `"useCustomSettings"` is `'0'`.

### Setting values

Invoke `Project.SetSettings()` or `Timeline.SetSettings()` with a dict of the setting keys to change and their valid values,
or `MediaPoolItem.SetClipProperty()` with the appropriate property key and a valid value. When setting parameters, please
check the return value to ensure the success of the operation. You can troubleshoot the validity of keys and values by
setting the desired result from the UI and checking property snapshots before and after the change.

Settings are applied one by one, in an unspecified order except for `"useCustomSettings"` which is always applied first.
When one or more settings cannot be applied, the settings applied before them are kept, and the returned status is False
with an error message listing the setting keys that failed.

Timeline settings other than `"useCustomSettings"` can only be changed when `"useCustomSettings"` is `'1'`.

### Project properties with enumerated values

The valid values of each setting are documented with the "ProjectSettings" and "TimelineSettings" types. The following
settings need additional notes:

`"superScale"` - the '2x Enhanced' multiplier cannot be expressed as a single value, and is only available through
`Project.SetSetting()` as `Project.SetSetting('superScale', 2, sharpnessValue, noiseReductionValue)`, where sharpnessValue
is a float in the range `[0.0, 1.0]` and noiseReductionValue is a float in the range `[0.0, 1.0]`. Exactly 4 arguments must
be passed, if less than 4 arguments are passed, it will default to 2x.

`"timelineFrameRate"` - the setting value is one of the frame rates available to the user in project settings under
"Timeline frame rate" option. It is returned as a number, and is set as a string. Drop Frame can be configured for
supported frame rates by appending the frame rate with "DF", e.g. setting `"timelineFrameRate"` to `'29.97 DF'` will
enable drop frame and `'29.97'` will disable drop frame.

### Clip properties with enumerated values

`"Super Scale"` - the property value is an enumerated integer between 1 and 4 with these meanings: 1=no scaling, and 2, 3
and 4 represent the Super Scale multipliers 2x, 3x and 4x. For super scale multiplier '2x Enhanced', exactly 4 arguments
must be passed as outlined below. If less than 4 arguments are passed, it will default to 2x.

Affects:

- `x = MediaPoolItem.GetClipProperty('Super Scale')` and `MediaPoolItem.SetClipProperty('Super Scale', x)`
- for '2x Enhanced' --> `MediaPoolItem.SetClipProperty('Super Scale', 2, sharpnessValue, noiseReductionValue)`, where
  sharpnessValue is a float in the range [0.0, 1.0] and noiseReductionValue is a float in the range [0.0, 1.0]

`"Cloud Sync"` - the property value is an enumerated integer that corresponds to one of the `resolve.CLOUD_SYNC_*`
constants.

## Audio Mapping

This section covers `mpItem.GetAudioMapping()`/`SetAudioMapping()` and
`timelineItem.GetSourceAudioChannelMapping()`/`SetSourceAudioChannelMapping()`.
Mapping format (json result) is similar for mpItem and timelineItem.

### Retrieving audio mappings

This section will follow an example of an mpItem that has audio from its embedded source, and from two other clips that
are linked to it. The audio clip attributes of this mpItem will show 3 tracks.

Assume that (A) the embedded track is of format/type 'stereo' (2 channels),
(B) linked clip 1 track is of format/type '7.1' (8 channels),
(C) linked clip 2 track is '5.1' (6 channels)
and assume that the format/type was not changed further.

`mpItem.GetAudioMapping()` returns a string of the form:

```jsonc
{
  "embedded_audio_channels": 2,                 // Total number of embedded channels across all tracks
  "linked_audio": {                             // A list of only linked audio information
    "1": {                                      // Same as (B) above
      "channels": 8,
      "offset": -100,                           // Audio at media offset 0 plays file_start + 100th sample
      "path": FILE_PATH
    },
    "2": {                                      // Same as (C) above
      "channels": 6,
      "offset": 200,                            // Audio at media start plays 200 samples of digital black then file_start + 0th audio sample
      "path": FILE_PATH
    }
  },
  "track_mapping": {                            // Listing of all the tracks. Output here will match what is seen in the audio clip attributes menu on the UI.
    "1": {
      "channel_idx": [1, 3],                    // In this case, channel index '1' corresponds to first channel of (A), channel index '3' will correspond to the first channel of (B)
      "mute": true,                             // Mute 'true' indicates track is muted. Valid value is true/false.
      "type": "Stereo"                          // The length of the 'channel_idx' list will always correspond to the number of channels the format specified in 'type' will allow.
                                                // In this case, 'Stereo' allows 2 channels and so the length of the 'channel_idx' list is 2.
    },
    "2": {
      "channel_idx": [3, 4, 5, 6, 7, 8, 9, 10], // Channel indices here are following the default for (B)
      "mute": true,
      "type": "7.1"
    },
    "3": {
      "channel_idx": [1, 1, 1, 1, 15, 16],      // The first four channels for this track correspond to the first channel of (A), and the final 2 follow the default for (C)
      "mute": false,
      "type": "5.1"
    }
  }
}
```

### Updating audio mappings

`SetAudioMapping(audioMapping)` and `SetSourceAudioChannelMapping(audioMapping)` accept audioMapping as a JSON-formatted
string.
Only the 'track_mapping' section is processed; 'embedded_audio_channels' and 'linked_audio' keys are ignored (even if
present, e.g., when reusing output from a getter).

Continuing the example above, to re-route track "1" to linked source (C) instead of (B) and unmute track "2":

```jsonc
{
  "track_mapping": {
    "1": {
      "channel_idx": [1, 11],                   // Re-routed: channel index '11' (first channel of (C)) replaces the previous '3' (first channel of (B))
      "mute": true,
      "type": "Stereo"                          // 'channel_idx' length must match the channel count for 'type' (Stereo = 2)
    },
    "2": {
      "channel_idx": [3, 4, 5, 6, 7, 8, 9, 10],
      "mute": false,                            // Unmuted from previous value of true
      "type": "7.1"
    },
    "3": {
      "channel_idx": [1, 1, 1, 1, 15, 16],
      "mute": false,
      "type": "5.1"
    }
  }
}
```

Valid values for 'type' field in track_mapping:
`{"mono", "stereo", "lrc", "lcr", "lrcs", "lcrs", "quad", "5.0", "5.0_film", "5.1", "5.1_film", "7.0", "7.0_film", "7.1", "7.1_film", "adaptive_1", ... , "adaptive_36"}`

Notes:

- 'channel_idx' must be a list whose length matches the channel count for the track's 'type' (e.g., Stereo = 2, 5.1 = 6,
  7.1 = 8). A value of 0 means the channel is unconnected; otherwise it is a 1-based index into the source media's
  physical channels.
- `SetAudioMapping()` can redefine the media's audio track structure by passing a different number of tracks than
  currently exists.
- `SetSourceAudioChannelMapping()` must pass exactly 1 track in 'track_mapping'.

## Looking up timeline export properties

This section covers the parameters for the argument `Export(fileName, exportType, exportSubtype)`.

Please note that exportSubType is a required parameter for `resolve.EXPORT_AAF` and `resolve.EXPORT_EDL`. For rest of the
exportType, exportSubtype is ignored.
When exportType is `resolve.EXPORT_AAF`, valid exportSubtype values are `resolve.EXPORT_AAF_NEW` and
`resolve.EXPORT_AAF_EXISTING`.
When exportType is `resolve.EXPORT_EDL`, valid exportSubtype values are `resolve.EXPORT_CDL`, `resolve.EXPORT_SDL`,
`resolve.EXPORT_MISSING_CLIPS` and `resolve.EXPORT_NONE`.

Note: Replace 'resolve.' when using the constants, if a different Resolve class instance name is used.

## Unsupported exportType types

Starting with DaVinci Resolve 18.1, the following export types are not supported:

- `resolve.EXPORT_FCPXML_1_3`
- `resolve.EXPORT_FCPXML_1_4`
- `resolve.EXPORT_FCPXML_1_5`
- `resolve.EXPORT_FCPXML_1_6`
- `resolve.EXPORT_FCPXML_1_7`

## Looking up Timeline item properties

This section covers additional notes for the functions `TimelineItem.GetProperties()` and `TimelineItem.SetProperties()`.
These functions are used to get and set the properties mentioned.

The supported keys with their accepted values are documented with the "TimelineItemProperties" type.

Values beyond the range will be clipped
width and height are same as the UI max limits

The properties to change are passed to `TimelineItem.SetProperties()` grouped into a dictionary (for python) or table (for
lua). All keys and values are validated before any of them is applied, so either all the properties are set or none of
them is, with the returned status being False and an error message naming the offending key.

Getting the values for the keys that uses constants will return the number which is in the constant

Keys marked [Active Timeline Only] are only supported when the timeline item is from the active timeline.

## Studio and AI Scripting APIs

The DaVinci Resolve scripting APIs cover a common superset of functions for both the Free and Studio versions of the
application.

API calls can return with a False status (or an appropriate error status) when:

- the function references a Studio function from the free DaVinci Resolve version.
- the minimum system requirements of the function are not satisfied. To check if your system is capable, invoke the
  function from the GUI and check for error dialogs.
- the requisite Extras have not been downloaded.

The following functions require one or more Extras downloads:

- `AnalyzeForIntellisearch(identifyFaces, isBetterMode=False)` requires AI IntelliSearch - Faster.
- `AnalyzeForIntellisearch(identifyFaces, isBetterMode=True)` requires AI IntelliSearch - Better.
- `AnalyzeForSlate(markerColor)` requires AI Slate ID.
- Transcription workflows with extended language models. Languages from built in models will be used as a fallback if
  unavailable.
- `GenerateSpeech({speechGenerationSettings}, timecode)` requires AI Speech Generator.

For a successful API call, the required package will need to be installed before script invocation. Go to the DaVinci
Resolve Studio application menu, open the Extras Download Manager and install the required package.

## Analyze Slate Settings

This section covers the supported settings for the method `AnalyzeForSlate(markerColor)`

`markerColor` is one of the `resolve.MARKER_*` constants, except `resolve.MARKER_NONE` which is not a valid marker
color.

## Deprecated Resolve API Functions

The following API functions are deprecated.

ProjectManager

```text
GetProjectsInCurrentFolder()                    --> {project names...} # Returns a dict of project names in current folder.
GetFoldersInCurrentFolder()                     --> {folder names...}  # Returns a dict of folder names in current folder.
```

Project

```text
GetPresets()                                    --> {presets...}       # Returns a dict of presets and their information.
GetRenderJobs()                                 --> {render jobs...}   # Returns a dict of render jobs and their information.
GetRenderPresets()                              --> {presets...}       # Returns a dict of render presets and their information.
GetPresetList()                                 --> [presets...]       # Returns a list of presets and their information.
SetPreset(presetName)                           --> Bool               # Sets preset by given presetName (string) into project.
```

MediaStorage

```text
GetMountedVolumes()                             --> {paths...}         # Returns a dict of folder paths corresponding to mounted volumes displayed in Resolve's Media Storage.
GetSubFolders(folderPath)                       --> {paths...}         # Returns a dict of folder paths in the given absolute folder path.
GetFiles(folderPath)                            --> {paths...}         # Returns a dict of media and file listings in the given absolute folder path. Note that media listings may be logically consolidated entries.
AddItemsToMediaPool(item1, item2, ...)          --> {clips...}         # Adds specified file/folder paths from Media Storage into current Media Pool folder. Input is one or more file/folder paths. Returns a dict of the MediaPoolItems created.
AddItemsToMediaPool([items...])                 --> {clips...}         # Adds specified file/folder paths from Media Storage into current Media Pool folder. Input is an array of file/folder paths. Returns a dict of the MediaPoolItems created.
```

Folder

```text
GetClips()                                      --> {clips...}         # Returns a dict of clips (items) within the folder.
GetSubFolders()                                 --> {folders...}       # Returns a dict of subfolders in the folder.
```

MediaPoolItem

```text
GetFlags()                                      --> {colors...}        # Returns a dict of flag colors assigned to the item.
```

Timeline

```text
GetItemsInTrack(trackType, index)               --> {items...}         # Returns a dict of Timeline items on the video or audio track (based on trackType) at specified
```

TimelineItem

```text
GetFusionCompNames()                            --> {names...}         # Returns a dict of Fusion composition names associated with the timeline item.
GetFlags()                                      --> {colors...}        # Returns a dict of flag colors assigned to the item.
GetVersionNames(versionType)                    --> {names...}         # Returns a dict of version names by provided versionType: 0 - local, 1 - remote.
GetNumNodes()                                   --> int                # Returns the number of nodes in the current graph for the timeline item
SetLUT(nodeIndex, lutPath)                      --> Bool               # Sets LUT on the node mapping the node index provided, 1 <= nodeIndex <= total number of nodes.
                                                                       # The lutPath can be an absolute path, or a relative path (based off custom LUT paths or the master LUT path).
                                                                       # The operation is successful for valid lut paths that Resolve has already discovered (see Project.RefreshLUTList).
GetLUT(nodeIndex)                               --> String             # Gets relative LUT path based on the node index provided, 1 <= nodeIndex <= total number of nodes.
GetNodeLabel(nodeIndex)                         --> string             # Returns the label of the node at nodeIndex.
```

### Deprecated Calling Conventions

The following alternate calling conventions are deprecated. Use the canonical form listed below each group.

MediaStorage

```text
AddItemListToMediaPool(item1, item2, ...)       --> [clips...]         # Adds specified file/folder paths from Media Storage into current Media Pool folder. Returns a list of the MediaPoolItems created.
AddItemListToMediaPool([items...])              --> [clips...]         # Adds specified file/folder paths from Media Storage into current Media Pool folder. Returns a list of the MediaPoolItems created.
```

Use `AddItemListToMediaPool([MediaStorageItemInfo, ...])` instead, where MediaStorageItemInfo is a dict of `"media"` (string),
`"startFrame"` (int), `"endFrame"` (int). For simple paths: `AddItemListToMediaPool([{"media": p} for p in paths])`

MediaPool

```text
AppendToTimeline(clip1, clip2, ...)             --> [TimelineItem]     # Appends specified MediaPoolItem objects in the current timeline. Returns the list of appended timelineItems.
AppendToTimeline([clips])                       --> [TimelineItem]     # Appends specified MediaPoolItem objects in the current timeline. Returns the list of appended timelineItems.
```

Use `AppendToTimeline([AppendClipInfo, ...])` instead, where AppendClipInfo is a dict of `"mediaPoolItem"`,
`"startFrame"` (float/int), `"endFrame"` (float/int), (optional) `"mediaType"` (int; 1 - Video only, 2 - Audio only),
`"trackIndex"` (int) and `"recordFrame"` (float/int).
For simple appends: `AppendToTimeline([{"mediaPoolItem": c} for c in clips])`

```text
CreateTimelineFromClips(name, clip1, clip2,...) --> Timeline           # Creates new timeline with specified name, and appends the specified MediaPoolItem objects.
CreateTimelineFromClips(name, [clips])          --> Timeline           # Creates new timeline with specified name, and appends the specified MediaPoolItem objects.
```

Use `CreateTimelineFromClips(name, [{clipInfo}])` instead, where each clipInfo is a dict of `"mediaPoolItem"`,
`"startFrame"` (float/int), `"endFrame"` (float/int), `"recordFrame"` (float/int).
For simple creation: `CreateTimelineFromClips(name, [{"mediaPoolItem": c} for c in clips])`

```text
ImportMedia([items...])                         --> [MediaPoolItems]   # Imports specified file/folder paths into current Media Pool folder. Input is an array of file/folder paths. Returns a list of the MediaPoolItems created.
```

Use `ImportMedia([{clipInfo}])` instead, where each clipInfo is a dict of `"FilePath"` (string), `"StartIndex"` (int),
`"EndIndex"` (int). For simple imports: `ImportMedia([{"FilePath": p} for p in paths])`

MediaPoolItem

```text
SetMetadata(metadataType, metadataValue)        --> Bool               # Sets the given metadata to metadataValue (string). Returns True if successful.
```

Use `SetMetadata({metadata})` instead. For single keys: `SetMetadata({"Scene": "42"})`

```text
SetThirdPartyMetadata(metadataType, metadataValue) --> Bool            # Sets/Add the given third party metadata to metadataValue (string). Returns True if successful.
```

Use `SetThirdPartyMetadata({metadata})` instead. For single keys: `SetThirdPartyMetadata({"key": "value"})`

```text
GetMetadata(metadataType)                       --> string             # Returns the metadata value for the key 'metadataType'.
```

Use `GetMetadata()` instead, which returns a dict of all set metadata properties, and index into the result.

```text
GetClipProperty(propertyName)                   --> string             # Returns the property value for the key 'propertyName'.
```

Use `GetClipProperty()` instead, which returns a dict of all clip properties, and index into the result.

Project and Timeline

```text
Project.GetSetting(settingName)                 --> string             # Returns value of project setting (indicated by settingName, string).
Project.GetSetting()                            --> {settings}         # Returns a dict of all project settings.
Timeline.GetSetting(settingName)                --> string             # Returns value of timeline setting (indicated by settingName, string).
Timeline.GetSetting()                           --> {settings}         # Returns a dict of all timeline settings.
```

Use `GetSettings()` instead, which returns a dict of all settings, and index into the result.

```text
Project.SetSetting(settingName, settingValue)   --> Bool               # Sets the project setting (indicated by settingName, string) to the value (settingValue, string).
Timeline.SetSetting(settingName, settingValue)  --> Bool               # Sets the timeline setting (indicated by settingName, string) to the value (settingValue, string).
```

Use `SetSettings({settings})` instead. For single keys: `SetSettings({"timelineFrameRate": "24"})`.
Note that the 4-argument form `SetSetting('superScale', 2, sharpnessValue, noiseReductionValue)` used to select the Super
Scale multiplier '2x Enhanced' is not deprecated, as it has no `SetSettings` equivalent.

TimelineItem

```text
GetProperty(propertyKey)                        --> float/Bool         # Returns the value of the property 'propertyKey'.
GetProperty()                                   --> {properties}       # Returns a dict of all supported properties.
```

Use `GetProperties()` instead, which returns a dict of all supported properties, and index into the result.

```text
SetProperty(propertyKey, propertyValue)         --> Bool               # Sets the value of property 'propertyKey' to value 'propertyValue'.
SetProperty({properties})                       --> Bool               # Sets the values of the properties in the given dict.
```

Use `SetProperties({properties})` instead. For single keys: `SetProperties({"ZoomX": 2.0})`

## Unsupported Resolve API Functions

The following API (functions and parameters) are no longer supported. Use job IDs instead of indices.

Project

```text
StartRendering(index1, index2, ...)             --> Bool               # Please use unique job ids (string) instead of indices.
StartRendering([idxs...])                       --> Bool               # Please use unique job ids (string) instead of indices.
DeleteRenderJobByIndex(idx)                     --> Bool               # Please use unique job ids (string) instead of indices.
GetRenderJobStatus(idx)                         --> {status info}      # Please use unique job ids (string) instead of indices.
GetSetting and SetSetting                       --> {}                 # settingName videoMonitorUseRec601For422SDI is now replaced with videoMonitorUseMatrixOverrideFor422SDI and videoMonitorMatrixOverrideFor422SDI.
                                                                       # settingName perfProxyMediaOn is now replaced with perfProxyMediaMode which takes values 0 - disabled, 1 - when available, 2 - when source not available.
```
