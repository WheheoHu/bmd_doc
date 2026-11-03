---
displayed_sidebar: apiSidebar
---

> New in 21.1.2

### SetNodeLabel(nodeIndex, label)
Return Type: `Bool`

Sets the label (string) of the node at nodeIndex, 1 < = nodeIndex < = [GetNumNodes()](#getnumnodes).

### GetNodeColor(nodeIndex)
Return Type: `string`

Returns the color of the node at nodeIndex as a string, or an empty string if no color is set.

### SetNodeColor(nodeIndex, colorName)
Return Type: `Bool`

Sets the color of the node at nodeIndex based on the colorName (string), 1 < = nodeIndex < = [GetNumNodes()](#getnumnodes). An empty string clears the color.

colorName is one of "Orange", "Apricot", "Yellow", "Lime", "Olive", "Green", "Teal", "Navy", "Blue", "Purple", "Violet", "Pink", "Tan", "Beige", "Brown", "Chocolate".

---

> New in 19.1.0

### ApplyGradeFromDRX(path, gradeMode, applyToAllLayers=False, keyframeMode=resolve.KEYFRAME_MODE_ALL)

:::warning

Change at 21.1.2

:::

Return Type: `Bool`

Loads a still from given file `path` (`string`) and applies grade to graph with `gradeMode` (`int`):

- 0 - “No keyframes”
- 1 - “Source Timecode aligned”
- 2 - “Start Frames aligned”.

If the optional argument `applyToAllLayers` (`Bool`) is True, the grade is applied to all node-stack layers instead of just the active layer.

The optional argument `keyframeMode` selects what is applied: all (`resolve.KEYFRAME_MODE_ALL`, the default), color only (`resolve.KEYFRAME_MODE_COLOR`) or sizing only (`resolve.KEYFRAME_MODE_SIZING`). Refer to [Keyframe Mode information](../resolve_settings/KeyframeModeInformation.md) for the constants.

Applying a grade replaces the existing graph. After a successful call, this Graph object no longer refers to a valid graph, and calls on it return None with an error message (except ApplyGradeFromDRX, which still works). To continue working with the revised graph, call `GetNodeGraph()` again to get an updated Graph object.

### ApplyArriCdlLut()

Return Type: `Bool`

Applies ARRI CDL and LUT. Returns True if successful, False otherwise.

### ResetAllGrades()

Return Type: `Bool`

Returns True if all grades were reset successfully, False otherwise.

### SetNodeCacheMode(nodeIndex, cache_value)

Return Type: `Bool`

Sets the cache mode type on the node mapping the node index provided. Refer to [Cache Mode](../resolve_settings/CacheModeInformation.md) section below to find the possible values of cache_value.

### GetNodeCacheMode(nodeIndex)

Return Type: `int`(cache_value)

Returns the cache mode type on the node mapping the node index provided.

---

### GetNumNodes()

Return Type: `int`

Returns the number of nodes in the graph

### SetLUT(nodeIndex, lutPath)

Return Type: `Bool`

Sets LUT on the node mapping the node index provided, 1 < = nodeIndex < = [self.GetNumNodes()](#getnumnodes)

The lutPath can be an absolute path, or a relative path (based off custom LUT paths or the master LUT path)

The operation is successful for valid lut paths that Resolve has already discovered (see [Project.RefreshLUTList](./Project.md#refreshlutlist)).

### GetLUT(nodeIndex)

Return Type: `String`

Gets relative LUT path based on the node index provided, 1 < = nodeIndex < = total number of nodes.

### GetNodeLabel(nodeIndex)

Return Type: `string`

Returns the label of the node at nodeIndex.

### GetToolsInNode(nodeIndex)

Return Type: `[toolsList]`

Returns toolsList (list of strings) of the tools used in the node indicated by given nodeIndex (int).

### SetNodeEnabled(nodeIndex, isEnabled)

Return Type: `Bool`

Sets the node at the given nodeIndex (int) to isEnabled (bool)

1 < = nodeIndex < = [self.GetNumNodes()](#getnumnodes).
