---
displayed_sidebar: apiSidebar
---
> New in 21.2

### ApplyAutoColor()
Return Type: `Bool`

Analyses the photo and applies the automatic balance and grade. Replaces the grade of a previous call and clears the legacy auto color values.

### SetAutoColorEnabled(enabled)
Return Type: `Bool`

Enables or disables the grade a previous `ApplyAutoColor()` applied.

### GetAutoColorEnabled()
Return Type: `Bool`

Returns whether auto color is applied and enabled on this photo. Returns None if the photo has no auto color applied.

### ClearAutoColor()
Return Type: `Bool`

Discards the auto-color grade applied by a previous `ApplyAutoColor()` call.

### GetCDL(nodeIndex)
Return Type: `{CDL}`

Returns the ASC CDL equivalent of the primaries of the node at nodeIndex (1-based) as a dict with keys "NodeIndex", "Slope", "Offset", "Power" and "Saturation".

------

> New in 21.1.2

### GetName()
Return Type: `string`

Returns the item name.

### SetName(name)
Return Type: `Bool`

Sets the photo's name to name (string). Returns True if successful.

### GetUniqueId()
Return Type: `string`

Returns a unique ID for the photo album item.

### GetProperties()
Return Type: `{properties}`

Returns a dict with all supported photo properties (source transform, cropping and looks).

Refer to [Photo Album Item Properties](../resolve_settings/PhotoAlbumItemProperties.md) for the supported keys.

### SetProperties(\{properties\})
Return Type: `Bool`

Sets the photo properties (source transform, cropping and looks) with the specified dict of property keys and values. All keys and values are validated before any of them is applied, so either all the properties are set or none of them is.

Refer to [Photo Album Item Properties](../resolve_settings/PhotoAlbumItemProperties.md) for the supported keys and the crop rules.

### GetFusionCompCount()
Return Type: `int`

Returns number of Fusion compositions associated with the photo album item.

### GetFusionCompNameList()
Return Type: `[names...]`

Returns a list of Fusion composition names associated with the photo album item.

### GetFusionCompByIndex(compIndex)
Return Type: `fusionComp`

Returns the Fusion composition object based on given compIndex.
1 < = compIndex < = [GetFusionCompCount()](#getfusioncompcount)

### GetFusionCompByName(compName)
Return Type: `fusionComp`

Returns the Fusion composition object based on given compName.

### AddFusionComp()
Return Type: `fusionComp`

Adds a new Fusion composition associated with the photo album item.

### DeleteFusionCompByName(compName)
Return Type: `Bool`

Deletes the named Fusion composition.

### LoadFusionCompByName(compName)
Return Type: `fusionComp`

Loads the named Fusion composition as the active composition.

### RenameFusionCompByName(oldName, newName)
Return Type: `Bool`

Renames the Fusion composition identified by oldName.

### ImportFusionComp(path)
Return Type: `fusionComp`

Imports a Fusion composition from given file path by creating and adding a new composition for the item.

### ExportFusionComp(path, compIndex)
Return Type: `Bool`

Exports the Fusion composition based on given compIndex to the path provided.

### GetMediaPoolItem()
Return Type: `MediaPoolItem`

Returns the [MediaPoolItem](./MediaPoolItem.md) corresponding to the photo album item if one exists.

### AddFlag(color)
Return Type: `Bool`

Adds a flag with given color (string).

### GetFlagList()
Return Type: `[colors...]`

Returns a list of flag colors assigned to the item.

### ClearFlags(color)
Return Type: `Bool`

Clear flags of the specified color.
An "All" argument is supported to clear all flags.

### GetClipColor()
Return Type: `string`

Returns the item color as a string.

### SetClipColor(colorName)
Return Type: `Bool`

Sets the item color based on the colorName (string).

### ClearClipColor()
Return Type: `Bool`

Clears the item color.

### CopyGrades([tgtPhotoAlbumItems])
Return Type: `Bool`

Copies the current node stack layer grade to the same layer for each item in `tgtPhotoAlbumItems`.

### GetCurrentVersion()
Return Type: `{versionName...}`

Returns the current version of the photo.
The returned value will have the keys versionName and versionType (always 1 - remote, as photo albums only support remote versions).

### RenameVersionByName(oldName, newName)
Return Type: `Bool`

Renames the color version identified by oldName. Photo albums only support remote versions.

### DeleteVersionByName(versionName)
Return Type: `Bool`

Deletes a color version by name. Photo albums only support remote versions.

### LoadVersionByName(versionName)
Return Type: `Bool`

Loads a named color version as the active version. Photo albums only support remote versions.

### AddVersion(versionName)
Return Type: `Bool`

Adds a new color version for a photo. Photo albums only support remote versions.

### GetVersionNameList()
Return Type: `[names...]`

Returns a list of all color versions. Photo albums only support remote versions.

### SetCDL([CDL map])
Return Type: `Bool`

Sets CDL values on the node. Keys of map are: "NodeIndex", "Slope", "Offset", "Power", "Saturation", where 1 < = NodeIndex < = total number of nodes.

### GetNodeGraph(layerIdx)
Return Type: `Graph`

Returns the photo's node graph object at layerIdx (int, optional).
Returns the first layer if layerIdx is skipped. 1 < = layerIdx < = [project.GetSetting("nodeStackLayers")](./Project.md#getsettingsettingname).

### ResetAllNodeColors()
Return Type: `Bool`

Resets node color for all nodes in the active version of the photo.

### ExportLUT(exportType, path)
Return Type: `Bool`

Exports a LUT of the size given by 'exportType' (enum), saving it in the provided 'path' (string). Refer to [ExportLUT notes](../resolve_settings/ExportLUT.md) section for possible values.

### GetColorGroup()
Return Type: `ColorGroup`

Returns the photo's [color group](./ColorGroup.md) if one exists.

### AssignToColorGroup(ColorGroup)
Return Type: `Bool`

Assigns the photo to the given [ColorGroup](./ColorGroup.md). ColorGroup must be an **existing group** in the current project.

### RemoveFromColorGroup()
Return Type: `Bool`

Removes the photo from its [ColorGroup](./ColorGroup.md).

### LoadBurnInPreset(presetName)
Return Type: `Bool`

Loads user defined data burn in preset for photo when supplied presetName (string). Returns true if successful.

### GetRatings()
Return Type: `int`

Returns the photo rating in stars (0-5).

### SetRatings(stars)
Return Type: `Bool`

Sets the photo rating to stars (int, 0-5).

### AddEffect(category, id)
Return Type: `Effect`

Applies the effect with the provided category and id to this photo album item. Returns the applied [Effect](./Effect.md), or None on failure.

Use [Resolve.GetEffectsList("photo")](./Resolve.md#geteffectslistmediatype) to list the available effects and their category and id.

### GetEffects(category)
Return Type: `[Effect]`

Returns the [Effect](./Effect.md) list of the given category ("fusion" or "ofx") applied to this photo album item.

### DeleteEffects([effects])
Return Type: `Bool`

Removes the given [Effect](./Effect.md) list from this photo album item.

### ExportFrame([\{exportFrameOptions\}])
Return Type: `{exportFrameResult}`

Exports the photo as a still image, to a file or as an encoded string, per exportFrameOptions.

Refer to [Export Frame Options](../resolve_settings/ExportFrameOptions.md) for information on supported settings and the returned keys.
