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
