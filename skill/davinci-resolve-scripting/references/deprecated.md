# Deprecated API

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
GetPresetList()                                 --> [presets...]       # Returns a list of presets and their information. (deprecated since 21.1.0)
SetPreset(presetName)                           --> Bool               # Sets preset by given presetName (string) into project. (deprecated since 21.1.0)
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

> New in 21.1.0

The following alternate calling conventions are deprecated. Use the canonical form listed below each group.

MediaStorage

```text
AddItemListToMediaPool(item1, item2, ...)       --> [clips...]         # Adds specified file/folder paths from Media Storage into current Media Pool folder. Returns a list of the MediaPoolItems created.
AddItemListToMediaPool([items...])              --> [clips...]         # Adds specified file/folder paths from Media Storage into current Media Pool folder. Returns a list of the MediaPoolItems created.
```

Use [`MediaStorage:AddItemListToMediaPool`](./api/MediaStorage.md#additemlisttomediapooliteminfo-) with a list of MediaStorageItemInfo dicts instead, where each MediaStorageItemInfo is a dict of `"media"` (string), `"startFrame"` (int) and `"endFrame"` (int).

For simple paths: `AddItemListToMediaPool([{"media": p} for p in paths])`

MediaPool

```text
AppendToTimeline(clip1, clip2, ...)             --> [TimelineItem]     # Appends specified MediaPoolItem objects in the current timeline. Returns the list of appended timelineItems.
AppendToTimeline([clips])                       --> [TimelineItem]     # Appends specified MediaPoolItem objects in the current timeline. Returns the list of appended timelineItems.
```

Use [`MediaPool:AppendToTimeline`](./api/MediaPool.md#appendtotimelineclipinfo-) with a list of AppendClipInfo dicts instead, where each AppendClipInfo is a dict of `"mediaPoolItem"`, `"startFrame"` (float/int), `"endFrame"` (float/int), optionally `"mediaType"` (int; 1 - Video only, 2 - Audio only), `"trackIndex"` (int) and `"recordFrame"` (float/int).

For simple appends: `AppendToTimeline([{"mediaPoolItem": c} for c in clips])`

```text
CreateTimelineFromClips(name, clip1, clip2,...) --> Timeline           # Creates new timeline with specified name, and appends the specified MediaPoolItem objects.
CreateTimelineFromClips(name, [clips])          --> Timeline           # Creates new timeline with specified name, and appends the specified MediaPoolItem objects.
```

Use [`MediaPool:CreateTimelineFromClips`](./api/MediaPool.md#createtimelinefromclipsname-clipinfo) with a list of clipInfo dicts instead, where each clipInfo is a dict of `"mediaPoolItem"`, `"startFrame"` (float/int), `"endFrame"` (float/int) and `"recordFrame"` (float/int).

For simple creation: `CreateTimelineFromClips(name, [{"mediaPoolItem": c} for c in clips])`

```text
ImportMedia([items...])                         --> [MediaPoolItems]   # Imports specified file/folder paths into current Media Pool folder. Input is an array of file/folder paths. Returns a list of the MediaPoolItems created.
```

Use [`MediaPool:ImportMedia`](./api/MediaPool.md#importmediaclipinfo) with a list of clipInfo dicts instead, where each clipInfo is a dict of `"FilePath"` (string), `"StartIndex"` (int) and `"EndIndex"` (int).

For simple imports: `ImportMedia([{"FilePath": p} for p in paths])`

MediaPoolItem

```text
SetMetadata(metadataType, metadataValue)        --> Bool               # Sets the given metadata to metadataValue (string). Returns True if successful.
```

Use [`MediaPoolItem:SetMetadata`](./api/MediaPoolItem.md#setmetadatametadata) with a dict instead. For single keys: `SetMetadata({"Scene": "42"})`

```text
SetThirdPartyMetadata(metadataType, metadataValue) --> Bool            # Sets/Add the given third party metadata to metadataValue (string). Returns True if successful.
```

Use [`MediaPoolItem:SetThirdPartyMetadata`](./api/MediaPoolItem.md#setthirdpartymetadatametadata) with a dict instead. For single keys: `SetThirdPartyMetadata({"key": "value"})`

```text
GetMetadata(metadataType)                       --> string             # Returns the metadata value for the key 'metadataType'.
```

Use [`MediaPoolItem:GetMetadata`](./api/MediaPoolItem.md#getmetadatametadatatypenone) with no argument instead, which returns a dict of all set metadata properties, and index into the result.

```text
GetClipProperty(propertyName)                   --> string             # Returns the property value for the key 'propertyName'.
```

Use [`MediaPoolItem:GetClipProperty`](./api/MediaPoolItem.md#getclippropertypropertynamenone) with no argument instead, which returns a dict of all clip properties, and index into the result.

Project and Timeline

```text
Project.GetSetting(settingName)                 --> string             # Returns value of project setting (indicated by settingName, string).
Project.GetSetting()                            --> {settings}         # Returns a dict of all project settings.
Timeline.GetSetting(settingName)                --> string             # Returns value of timeline setting (indicated by settingName, string).
Timeline.GetSetting()                           --> {settings}         # Returns a dict of all timeline settings.
```

Use [`Project:GetSettings`](./api/Project.md#getsettings) or [`Timeline:GetSettings`](./api/Timeline.md#getsettings) instead, which return a dict of all settings, and index into the result.

```text
Project.SetSetting(settingName, settingValue)   --> Bool               # Sets the project setting (indicated by settingName, string) to the value (settingValue, string).
Timeline.SetSetting(settingName, settingValue)  --> Bool               # Sets the timeline setting (indicated by settingName, string) to the value (settingValue, string).
```

Use [`Project:SetSettings`](./api/Project.md#setsettingssettings) or [`Timeline:SetSettings`](./api/Timeline.md#setsettingssettings) instead. For single keys: `SetSettings({"timelineFrameRate": "24"})`.

> The 4-argument form `SetSetting('superScale', 2, sharpnessValue, noiseReductionValue)`, used to select the Super Scale multiplier "2x Enhanced", is **not** deprecated — it has no `SetSettings` equivalent. See [Project and Clip Properties](./settings/ProjectAndClipProperties.md#specifically-enumerated-values).


TimelineItem

```text
GetProperty(propertyKey)                        --> float/Bool         # Returns the value of the property 'propertyKey'.
GetProperty()                                   --> {properties}       # Returns a dict of all supported properties.
```

Use [`TimelineItem:GetProperties`](./api/TimelineItem.md#getproperties) instead, which returns a dict of all supported properties, and index into the result.

```text
SetProperty(propertyKey, propertyValue)         --> Bool               # Sets the value of property 'propertyKey' to value 'propertyValue'.
SetProperty({properties})                       --> Bool               # Sets the values of the properties in the given dict.
```

Use [`TimelineItem:SetProperties`](./api/TimelineItem.md#setpropertiesproperties) instead. For single keys: `SetProperties({"ZoomX": 2.0})`

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


## Moved methods

- `Timeline.ApplyGradeFromDRX(path, gradeMode, [items])` → moved to [Graph](./api/Graph.md#applygradefromdrxpath-grademode) since 19.1.0
- `Timeline.ApplyGradeFromDRX(path, gradeMode, item1, item2, ...)` → moved to [Graph](./api/Graph.md#applygradefromdrxpath-grademode) since 19.1.0
- `TimelineItem.ApplyArriCdlLut()` → moved to [Graph](./api/Graph.md#applygradefromdrxpath-grademode) since 19.1.0
