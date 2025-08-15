---
displayed_sidebar: apiSidebar
---


> New in 20.1.0
### GetVoiceIsolationState()

Return Type: VoiceIsolationState

Returns the Voice Isolation State as a dict `{isEnabled, amount}`, of the [TimelineItem](./TimelineItem.md).


### SetVoiceIsolationState(\{VoiceIsolationState\})   

Return Type: Bool               

Sets Voice Isolation state of the timelineItem to the given VoiceIsolationState of `{isEnabled (bool), amount (int)}`. amount is in range of [0, 100]. 

Returns True if successful.

---
> New in 19.1.0

### GetIsColorOutputCacheEnabled()

Return Type: `cache_value`(`int`)

Returns if the cache corresponding to cache_type is enabled

### GetIsFusionOutputCacheEnabled()

Return Type: `cache_value`(`int`)

Returns if the cache corresponding to cache_type is enabled (or auto)

### SetColorOutputCache(cache_value)

Return Type: `Bool`

Sets caching to enabled or disabled. Equivalent to clip context menu action `Render Cache Color Output`.

### SetFusionOutputCache(cache_value)

Return Type: `Bool`

Sets caching to auto, enabled or disabled. Equivalent to clip context menu action `Render Cache Fusion Output`.

---

> New in 19.0.2

### GetSourceEndFrame()

Return Type: `int`

Returns the end frame position of the media pool clip in the timeline clip.

### GetSourceEndTime()

Return Type: `float`

Returns the end time position of the media pool clip in the timeline clip.

### GetSourceStartFrame()

Return Type: `int`

Returns the start frame position of the media pool clip in the timeline clip.

### GetSourceStartTime()

Return Type: `float`

Returns the start time position of the media pool clip in the timeline clip.

---

> New in 19.0.1

### GetSourceAudioChannelMapping()

Return Type: `json formatted string`

Returns a string with TimelineItem's audio mapping information. Check '[Audio Mapping](../resolve_settings/AudioMapping.md)' section below for more information.

---

> New in 19.0.0

### GetNodeGraph(layerIdx)

Return Type: `Graph`

Returns the clip's node graph object at layerIdx (int, optional).
Returns the first layer if layerIdx is skipped. 1 < = layerIdx < = [project.GetSetting("nodeStackLayers")](./Project.md#getsettingsettingname).

### GetColorGroup()

Return Type: `ColorGroup`

Returns the clip's [color group](../resolve_api/ColorGroup.md) if one exists.

### AssignToColorGroup(ColorGroup)

Return Type: `Bool`

Returns `True` if TiItem to successfully assigned to given ColorGroup.

ColorGroup must be an **existing group** in the current project.

### RemoveFromColorGroup()

Return Type: `Bool`

Returns `True` if the TiItem is successfully removed from the ColorGroup it is in.

### ExportLUT(exportType, path)

Return Type: `Bool`

Exports LUTs from tiItem referring to value passed in 'exportType' (enum) for LUT size. Refer to. [ExportLUT notes](../resolve_settings/ExportLUT.md) section for possible values.

Saves generated LUT in the provided 'path' (string). 'path' should include the **intended file name**.

If an empty or incorrect extension is provided, the appropriate extension (.cube/.vlt) will be appended at the end of the path.

### GetLinkedItems()

Return Type: `[TimelineItems]`

Returns a list of linked timeline items.

### GetTrackTypeAndIndex()

Return Type: `[trackType, trackIndex]`

Returns a list of two values that correspond to the TimelineItem's trackType (string) and trackIndex (int) respectively.

trackType is one of {"audio", "video", "subtitle"}

1 < = trackIndex < = [Timeline.GetTrackCount(trackType)](./Timeline.md#gettrackcounttracktype)

---

### AddFlag(color)

Return Type: `Bool`

Adds a flag with given color (string).

### AddFusionComp()

Return Type: `fusionComp`

Adds a new Fusion composition associated with [TimelineItem](./TimelineItem.md).

### AddMarker(frameId, color, name, note, duration, customData)

Return Type: `Bool`

Creates a new marker at given frameId position and with given marker information.
'customData' is optional and helps to attach user specific data to the marker.

### AddTake(mediaPoolItem, startFrame, endFrame)

Return Type: `Bool`

Adds [MediaPoolItem](./MediaPoolItem.md) as a new take.
Initializes a take selector for the timeline item if needed. By default, the full clip extents is added.
startFrame (int) and endFrame (int) are optional arguments used to specify the extents.

### AddVersion(versionName, versionType)

Return Type: `Bool`

Adds a new color version for a video clip based on versionType (0 - local, 1 - remote).

### ApplyArriCdlLut()

:::danger

Move to [Graph](./Graph.md#applygradefromdrxpath-grademode) since 19.1.0

:::

~~Return Type: `Bool`~~

~~Applies ARRI CDL and LUT. Returns True if successful, False otherwise.~~

### ClearClipColor()

Return Type: `Bool`

Clears the item color.

### ClearFlags(color)

Return Type: `Bool`

Clear flags of the specified color.
An "All" argument is supported to clear all flags.

### CopyGrades([tgtTimelineItems])

> Change at 19.0.0
>
> Return Type: `Bool`

Copies the current node stack layer grade to the same layer for each item in `tgtTimelineItems`.

Returns `True` if successful.

### CreateMagicMask(mode)

Return Type: `Bool`

Returns True if magic mask was created successfully, False otherwise.
mode can "F" (forward), "B" (backward), or "BI" (bidirection)

### DeleteFusionCompByName(compName)

Return Type: `Bool`

Deletes the named Fusion composition.

### DeleteMarkerAtFrame(frameNum)

Return Type: `Bool`

Delete marker at frameNum from the timeline item.

### DeleteMarkerByCustomData(customData)

Return Type: `Bool`

Delete first matching marker with specified customData.

### DeleteMarkersByColor(color)

Return Type: `Bool`

Delete all markers of the specified color from the timeline item.
"All" as argument deletes all color markers.

### DeleteTakeByIndex(idx)

Return Type: `Bool`

Deletes a take by index, 1 < = idx < = number of takes.

### DeleteVersionByName(versionName, versionType)

Return Type: `Bool`

Deletes a color version by name and versionType (0 - local, 1 - remote).

### ExportFusionComp(path, compIndex)

Return Type: `Bool`

Exports the Fusion composition based on given compIndex to the path provided.

### FinalizeTake()

Return Type: `Bool`

Finalizes take selection.

### GetClipColor()

Return Type: `string`

Returns the item color as a string.

### GetClipEnabled()

Return Type: `Bool`

Gets clip enabled status.

### GetCurrentVersion()

Return Type: `{versionName...}`

Returns the current version of the video clip.
The returned value will have the keys versionName and versionType(0 - local, 1 - remote).

### GetDuration(subframe_precision)

:::warning

Change at 19.0.2  
:::
Return Type: `int/float`

Returns the item duration.Returns fractional frames if `subframe_precision` is True

### GetEnd(subframe_precision)

:::warning

Change at 19.0.2

:::  
Return Type: `int/float`

Returns the end frame position on the timeline.Returns fractional frames if `subframe_precision` is True

### GetFlagList()

Return Type: `[colors...]`

Returns a list of flag colors assigned to the item.

### GetFusionCompByIndex(compIndex)

Return Type: `fusionComp`

Returns the Fusion composition object based on given compIndex.
1 < = compIndex < = [GetFusionCompCount()](#getfusioncompcount)

### GetFusionCompByName(compName)

Return Type: `fusionComp`

Returns the Fusion composition object based on given compName.

### GetFusionCompCount()

Return Type: `int`

Returns number of Fusion compositions associated with the timeline item.

### GetFusionCompNameList()

Return Type: `[names...]`

Returns a list of Fusion composition names associated with the timeline item.

### GetLeftOffset(subframe_precision)

:::warning

Change at 19.0.2  
:::  
Return Type: `int/float`

Returns the maximum extension by frame for clip from left side. Returns fractional frames if `subframe_precision` is True

### GetLUT(nodeIndex)

:::danger

Removed from 19.0.0, Use [GetNodeGraph()](#getnodegraphlayeridx) to get a [Graph](./Graph.md) object for this function

:::
~~Return Type: `string`~~

~~Gets relative LUT path based on the node index provided, l~~

### GetMarkerByCustomData(customData)

Return Type: `{markers...}`

Returns marker \{information\} for the first matching marker with specified customData.

### GetMarkerCustomData(frameId)

Return Type: `string`

Returns customData string for the marker at given frameId position.

### GetMarkers()

Return Type: `{markers...}`

Returns a dict (frameId -> \{information\}) of all markers and dicts with their information.

Example: a value of \{96.0: \{'color': 'Green', 'duration': 1.0, 'note': '', 'name': 'Marker 1', 'customData': ''\}, ...\} indicates a single green marker at clip offset 96

### GetMediaPoolItem()

Return Type: `MediaPoolItem`

Returns the [MediaPoolItem](./MediaPoolItem.md) corresponding to the timeline item if one exists.

### GetName()

Return Type: `string`

Returns the item name.

### GetNodeLabel(nodeIndex)

:::danger
Removed from 19.0.0, Use [GetNodeGraph()](#getnodegraphlayeridx) to get a [Graph](./Graph.md) object for this function
:::
~~Return Type: `string`~~

~~Returns the label of the node at nodeIndex~~

### GetNumNodes()

:::danger
Removed from 19.0.0, Use [GetNodeGraph()](#getnodegraphlayeridx) to get a [Graph](./Graph.md) object for this function
:::

~~Return Type: `int`~~

~~Returns the number of nodes in the current graph for the timeline item~~

### GetProperty(propertyKey)

Return Type: `int/[key:value]`

returns the value of the specified key.
if no key is specified, the method returns a dictionary(python) or table(lua) for all supported keys

### GetRightOffset(subframe_precision)

:::warning

Change at 19.0.2  
:::  
Return Type: `int/float`

Returns the maximum extension by frame for clip from right side. Returns fractional frames if `subframe_precision` is True

### GetSelectedTakeIndex()

Return Type: `int`

Returns the index of the currently selected take, or 0 if the clip is not a take selector.

### GetStart(subframe_precision)

:::warning

Change at 19.0.2  
:::  
Return Type: `int/float`

Returns the start frame position on the timeline. Returns fractional frames if `subframe_precision` is True

### GetStereoConvergenceValues()

Return Type: `{keyframes...}`

Returns a dict (offset -> value) of keyframe offsets and respective convergence values.

### GetStereoLeftFloatingWindowParams()

Return Type: `{keyframes...}`

For the LEFT eye -> returns a dict (offset -> dict) of keyframe offsets and respective floating window params. Value at particular offset includes the left, right, top and bottom floating window values.

### GetStereoRightFloatingWindowParams()

Return Type: `{keyframes...}`

For the RIGHT eye -> returns a dict (offset -> dict) of keyframe offsets and respective floating window params. Value at particular offset includes the left, right, top and bottom floating window values.

### GetTakeByIndex(idx)

Return Type: `{takeInfo...}`

Returns a dict (keys "startFrame", "endFrame" and "mediaPoolItem") with take info for specified index.

### GetTakesCount()

Return Type: `int`

Returns the number of takes in take selector, or 0 if the clip is not a take selector.

### GetUniqueId()

Return Type: `string`

Returns a unique ID for the timeline item

### GetVersionNameList(versionType)

Return Type: `[names...]`

Returns a list of all color versions for the given versionType (0 - local, 1 - remote).

### ImportFusionComp(path)

Return Type: `fusionComp`

Imports a Fusion composition from given file path by creating and adding a new composition for the item.

### LoadBurnInPreset(presetName)

Return Type: `Bool`

Loads user defined data burn in preset for clip when supplied presetName (string). Returns true if successful.

### LoadFusionCompByName(compName)

Return Type: `fusionComp`

Loads the named Fusion composition as the active composition.

### LoadVersionByName(versionName, versionType)

Return Type: `Bool`

Loads a named color version as the active version.
versionType: 0 - local, 1 - remote.

### RegenerateMagicMask()

Return Type: `Bool`

Returns True if magic mask was regenerated successfully, False otherwise.

### RenameFusionCompByName(oldName, newName)

Return Type: `Bool`

Renames the Fusion composition identified by oldName.

### RenameVersionByName(oldName, newName, versionType)

Return Type: `Bool`

Renames the color version identified by oldName and versionType (0 - local, 1 - remote).

### SelectTakeByIndex(idx)

Return Type: `Bool`

Selects a take by index, 1 < = idx < = number of takes.

### SetCDL([CDL map])

Return Type: `Bool`

Keys of map are: "NodeIndex", "Slope", "Offset", "Power", "Saturation", where 1 < = NodeIndex < = total number of nodes.
Example python code :

```python
 SetCDL(\{"NodeIndex" : "1", "Slope" : "0.5 0.4 0.2", "Offset" : "0.4 0.3 0.2", "Power" : "0.6 0.7 0.8", "Saturation" : "0.65"\})
```

### SetClipColor(colorName)

Return Type: `Bool`

Sets the item color based on the colorName (string).

### SetClipEnabled(Bool)

Return Type: `Bool`

Sets clip enabled based on argument.

### SetLUT(nodeIndex, lutPath)

:::danger
Removed from 19.0.0, Use [GetNodeGraph()](#getnodegraphlayeridx) to get a [Graph](./Graph.md) object for this function
:::  
~~Return Type: `Bool`~~

~~Sets LUT on the node mapping the nodeIndex provided, 1 < = nodeIndex < = total number of nodes.
The lutPath can be an absolute path, or a relative path (based off custom LUT paths or the master LUT path).
The operation is successful for valid lut paths that Resolve has already discovered (see [RefreshLUTList()](./Project.md#refreshlutlist)).~~

### SetProperty(propertyKey, propertyValue)

Return Type: `Bool`

Sets the value of property "propertyKey" to value "propertyValue".Refer to "Looking up Timeline item properties" for more information

### SmartReframe()

Return Type: `Bool`

Performs Smart Reframe. Returns True if successful, False otherwise.

### Stabilize()

Return Type: `Bool`

Returns True if stabilization was successful, False otherwise

### UpdateMarkerCustomData(frameId, customData)

Return Type: `Bool`

Updates customData (string) for the marker at given frameId position. CustomData is not exposed via UI and is useful for scripting developer to attach any user specific data to markers.

### UpdateSidecar()

Return Type: `Bool`

Updates sidecar file for BRAW clips or RMD file for R3D clips.
