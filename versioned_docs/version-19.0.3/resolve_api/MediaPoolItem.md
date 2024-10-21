
> New in 19.0.2

### GetThirdPartyMetadata(metadataType=None)
Return Type: `string|dict`

Returns the third party metadata value for the key 'metadataType'.

If no argument is specified, a dict of all set third parth metadata properties is returned.


### SetThirdPartyMetadata(metadataType, metadataValue)
Return Type: `Bool`

Sets/Add the given third party metadata to metadataValue (string).Returns True if successful.

### SetThirdPartyMetadata(\{metadata\}) 

Return Type: `Bool`

Sets/Add the item third party metadata with specified 'metadata' dict. Returns True if successful.
pt

-------
> New in 19.0.0

### GetAudioMapping()                               
Return Type: `json formatted string` 

Returns a `string` with MediaPoolItem's audio mapping information.

 Check [Audio Mapping](../resolve_settings/AudioMapping.md) section for more information.

------

### AddFlag(color)                                 
Return Type: `Bool`

Adds a flag with given color (string).

### AddMarker(frameId, color, name, note, duration,customData)
Return Type: `Bool`

Creates a new marker at given frameId position and with given marker information. 'customData' is optional and helps to attach user specific data to the marker.

### ClearClipColor()                               
Return Type: `Bool`

Clears the item color.

### ClearFlags(color)                              
Return Type: `Bool`

Clears the flag of the given color if one exists. An "All" argument is supported and clears all flags.

### ClearTranscription()
Return Type: `Bool`

Clears audio transcription of the MediaPoolItem. Returns True if successful; False otherwise.

### DeleteMarkerAtFrame(frameNum)                  
Return Type: `Bool`

Delete marker at frame number from the media pool item.

### DeleteMarkerByCustomData(customData)           
Return Type: `Bool`

Delete first matching marker with specified customData.

### DeleteMarkersByColor(color)                    
Return Type: `Bool`

Delete all markers of the specified color from the media pool item. 
"All" as argument deletes all color markers.

### GetClipColor()                                 
Return Type: `string`

Returns the item color as a string.

### GetClipProperty(propertyName=None)             
Return Type: `string|dict`

Returns the property value for the key 'propertyName'.
If no argument is specified, a dict of all clip properties is returned. 
Check the [Project and Clip Properties](../resolve_settings/ProjectAndClipProperties.md) below for more information.

### GetFlagList()                                  
Return Type: `[colors...]`

Returns a list of flag colors assigned to the item.

### GetMarkerByCustomData(customData)              
Return Type: `{markers...}`

Returns marker \{information\} for the first matching marker with specified customData.

### GetMarkerCustomData(frameId)                   
Return Type: `string`

Returns customData string for the marker at given frameId position.

### GetMarkers()                                   
Return Type: `{markers...}`

Returns a dict (frameId -> \{information\}) of all markers and dicts with their information.

Example of output format: 
```
 {96.0:  {'color':  'Green', 'duration':  1.0, 'note':  '', 'name':  'Marker 1', 'customData':  ''}, ...}
 ```
 In the above example - there is one 'Green' marker at offset 96 (position of the marker)

### GetMediaId()                                   
Return Type: `string`

Returns the unique ID for the MediaPoolItem.

### GetMetadata(metadataType=None)                 
Return Type: `string|dict`

Returns the metadata value for the key 'metadataType'.
If no argument is specified, a dict of all set metadata properties is returned.

### GetName()
Return Type: `string`

Returns the clip name.

### GetUniqueId()
Return Type: `string`

Returns a unique ID for the media pool item

### LinkProxyMedia(proxyMediaFilePath)             
Return Type: `Bool`

Links proxy media located at path specified by arg 'proxyMediaFilePath' with the current clip. 'proxyMediaFilePath' should be absolute clip path.

### ReplaceClip(filePath)                          
Return Type: `Bool`

Replaces the underlying asset and metadata of MediaPoolItem with the specified absolute clip path.

### SetClipColor(colorName)                        
Return Type: `Bool`

Sets the item color based on the colorName (string).

### SetClipProperty(propertyName, propertyValue)   
Return Type: `Bool`

Sets the given property to propertyValue (string).
Check the [Project and Clip Properties](../resolve_settings/ProjectAndClipProperties.md) below for more information.

### SetMetadata(\{metadata\})                        
Return Type: `Bool`

Sets the item metadata with specified 'metadata' dict. Returns 
True if successful.

### SetMetadata(metadataType, metadataValue)
Return Type: `Bool`

Sets the given metadata to metadataValue (string). 
Returns True if successful.

### TranscribeAudio()
Return Type: `Bool`

Transcribes audio of the MediaPoolItem. Returns True if successful; False otherwise

### UnlinkProxyMedia()                             
Return Type: `Bool`

Unlinks any proxy media associated with clip.

### UpdateMarkerCustomData(frameId, customData)    
Return Type: `Bool`

Updates customData (string) for the marker at given frameId position. 
CustomData is not exposed via UI and is useful for scripting developer to attach any user specific data to markers.

