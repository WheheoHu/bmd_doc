### AddMarker(frameId, color, name, note, duration, customData)
Return Type: `Bool`

Creates a new marker at given frameId position and with given marker information. 
'customData' is optional and helps to attach user specific data to the marker.


### AddTrack(trackType, subTrackType)
 
> Change at 19.0.0

Return Type: `Bool`

Adds track of trackType ("video", "subtitle", "audio"). 

Second optional argument subTrackType is used for "audio”

subTrackType can be one of `{"mono", "stereo", "5.1", "5.1film", "7.1", "7.1film", "adaptive1", ... , "adaptive24"}`

### AddTrack(trackType, newTrackOptions)     
> Add at 19.0.0
       
Return Type:  `Bool`

Adds track of trackType ("video", "subtitle", "audio"). 

Optional newTrackOptions = \{'audioType':  same as subTrackType above, 'index':  1 < = index < = [GetTrackCount(trackType)](#gettrackcounttracktype)\}

'audiotype' defaults to 'mono' if arg skipped and track type is ‘audio’.

'index' if skipped (or if value not in bounds) **appends** track.
### ApplyGradeFromDRX(path, gradeMode, [items])     
Return Type: `Bool`

Loads a still from given file path (string) and applies grade to Timeline Items with gradeMode (int):  
0 - "No keyframes", 1 - "Source Timecode aligned", 2 - "Start Frames aligned".

### ApplyGradeFromDRX(path, gradeMode, item1, item2, ...)
Return Type: `Bool`

Loads a still from given file path (string) and applies grade to Timeline Items with gradeMode (int):  
0 - "No keyframes", 1 - "Source Timecode aligned", 2 - "Start Frames aligned".

### ConvertTimelineToStereo()
Return Type: `Bool`

Converts timeline to stereo. Returns True if successful; False otherwise.

### CreateCompoundClip([timelineItems], \{clipInfo\}) 
Return Type: `TimelineItem`

Creates a compound clip of input [TimelineItem](./TimelineItem.md) with an optional clipInfo map:  
\{"startTimecode" :  "00: 00: 00: 00", "name" :  "Compound Clip 1"\}. 
It returns the created timeline item.

### CreateFusionClip([timelineItems])               
Return Type: `TimelineItem`

Creates a Fusion clip of input timeline items. It returns the created timeline item.

### CreateSubtitlesFromAudio(autoCaptionSettings)
Return Type: `Bool`

Creates subtitles from audio for the timeline. Returns True on success, False otherwise.
optional dictionary autoCaptionSettings after DR 18.6.4.Check [Auto Caption Settings](../resolve_settings/AutoCaptionSettings.md) subsection below for more information.

### DeleteClips([timelineItems], Bool)
Return Type: `Bool`

Deletes specified TimelineItems from the timeline, performing ripple delete if the second argument is True. Second argument is optional (The default for this is False)

### DeleteMarkerAtFrame(frameNum)                   
Return Type: `Bool`

Deletes the timeline marker at the given frame number.

### DeleteMarkerByCustomData(customData)            
Return Type: `Bool`

Delete first matching marker with specified customData.

### DeleteMarkersByColor(color)                     
Return Type: `Bool`

Deletes all timeline markers of the specified color. 
An "All" argument is supported and deletes all timeline markers.

### DeleteTrack(trackType, trackIndex)
Return Type: `Bool`

Deletes track of trackType ("video", "subtitle", "audio") and given trackIndex. 1 < = trackIndex < = [GetTrackCount()](./Timeline.md#gettrackcounttracktype)

### DetectSceneCuts()
Return Type: `Bool`

Detects and makes scene cuts along the timeline. Returns True if successful, False otherwise.

### DuplicateTimeline(timelineName)                 
Return Type: `timeline`

Duplicates the timeline and returns the created timeline, with the (optional) timelineName, on success.

### Export(fileName, exportType, exportSubtype)     
Return Type: `Bool`

Exports timeline to 'fileName' as per input exportType & exportSubtype format.

Refer to section [Timeline Export Properties](../resolve_settings/TimelineExportProperties.md)  for information on the parameters.

### GetCurrentClipThumbnailImage()                  
Return Type: `{thumbnailData}`

Returns a dict (keys "width", "height", "format" and "data") with data containing raw thumbnail image data (RGB 8-bit image data encoded in base64 format) for current media in the Color Page.
An example of how to retrieve and interpret thumbnails is provided in 6_get_current_media_thumbnail.py in the Examples folder.

### GetCurrentTimecode()                            
Return Type: `string`

Returns a string timecode representation for the current playhead position, while on Cut, Edit, Color, Fairlight and Deliver pages.

### GetCurrentVideoItem()                           
Return Type: `item`

Returns the current video timeline item.

### GetEndFrame()                                   
Return Type: `int`

Returns the frame number at the end of timeline.

### GetIsTrackEnabled(trackType, trackIndex)
Return Type: `Bool`

Returns True if track with given trackType and trackIndex is enabled and False otherwise.
trackType is one of {"audio", "video", "subtitle"}
1 < = trackIndex < = [GetTrackCount()](./Timeline.md#gettrackcounttracktype)

### GetIsTrackLocked(trackType, trackIndex)
Return Type: `Bool`

Returns True if track with given trackType and trackIndex is locked and False otherwise.
trackType is one of {"audio", "video", "subtitle"}
1 < = trackIndex < = [GetTrackCount()](./Timeline.md#gettrackcounttracktype)

### GetItemListInTrack(trackType, index)            
Return Type: `[items...]`

Returns a list of timeline items on that track (based on trackType and index). 
1 < = index < = [GetTrackCount()](./Timeline.md#gettrackcounttracktype).

### GetMarkerByCustomData(customData)               
Return Type: `{markers...}`

Returns marker \{information\} for the first matching marker with specified customData.

### GetMarkerCustomData(frameId)                    
Return Type: `string`

Returns customData string for the marker at given frameId position.

### GetMarkers()                                    
Return Type: `{markers...}`

Returns a dict (frameId -> \{information\}) of all markers and dicts with their information.

Example:  a value of `{96.0:  {'color':  'Green', 'duration':  1.0, 'note':  '', 'name':  'Marker 1', 'customData':  ''}, ...} `indicates a single green marker at timeline offset 96

### GetName()                                       
Return Type: `string`

Returns the timeline name.

### GetSetting(settingName)                         
Return Type: `string`

Returns value of timeline setting (indicated by settingName :  string). 
Check the [Project and Clip Properties](../resolve_settings/ProjectAndClipProperties.md) below for more information.

### GetStartFrame()                                 
Return Type: `int`

Returns the frame number at the start of timeline.

### GetStartTimecode()
Return Type: `string`

Returns the start timecode for the timeline.

### GetTrackCount(trackType)                        
Return Type: `int`

Returns the number of tracks for the given trackType ("audio", "video" or "subtitle").

### GetTrackName(trackType, trackIndex)             
Return Type: `string`

Returns the track name for track indicated by trackType ("audio", "video" or "subtitle") and trackIndex.
 1 < = trackIndex < = GetTrackCount(trackType).

### GetUniqueId()
Return Type: `string`

Returns a unique ID for the timeline

### GrabAllStills(stillFrameSource)                 
Return Type: `[galleryStill]`

Grabs stills from all the clips of the timeline at 'stillFrameSource' (1 - First frame, 2 - Middle frame). 
Returns the list of GalleryStill objects.

### GrabStill()                                     
Return Type: `galleryStill`

Grabs still from the current video clip. Returns a GalleryStill object.

### ImportIntoTimeline(filePath, \{importOptions\})   
Return Type: `Bool`

Imports timeline items from an AAF file and optional importOptions dict into the timeline, with support for the keys: 
- `autoImportSourceClipsIntoMediaPool`:  Bool, specifies if source clips should be imported into media pool, True by default
- `ignoreFileExtensionsWhenMatching`:  Bool, specifies if file extensions should be ignored when matching, False by default
- `linkToSourceCameraFiles`:  Bool, specifies if link to source camera files should be enabled, False by default
- `useSizingInfo`:  Bool, specifies if sizing information should be used, False by default
- `importMultiChannelAudioTracksAsLinkedGroups`:  Bool, specifies if multi-channel audio tracks should be imported as linked groups, False by default
- `insertAdditionalTracks`:  Bool, specifies if additional tracks should be inserted, True by default
- `insertWithOffset`:  string, specifies insert with offset value in timecode format - defaults to "00: 00: 00: 00", applicable if "insertAdditionalTracks" is False
- `sourceClipsPath`:  string, specifies a filesystem path to search for source clips if the media is inaccessible in their original path and if "ignoreFileExtensionsWhenMatching" is True
- `sourceClipsFolders`:  string, list of Media Pool folder objects to search for source clips if the media is not present in current folder

### InsertFusionCompositionIntoTimeline()
Return Type: `TimelineItem`

Inserts a Fusion composition into the timeline.

### InsertFusionGeneratorIntoTimeline(generatorName)
Return Type: `TimelineItem`

Inserts a Fusion generator (indicated by generatorName :  string) into the timeline.

### InsertFusionTitleIntoTimeline(titleName)        
Return Type: `TimelineItem`

Inserts a Fusion title (indicated by titleName :  string) into the timeline.

### InsertGeneratorIntoTimeline(generatorName)      
Return Type: `TimelineItem`

Inserts a generator (indicated by generatorName :  string) into the timeline.

### InsertOFXGeneratorIntoTimeline(generatorName)   
Return Type: `TimelineItem`

Inserts an OFX generator (indicated by generatorName :  string) into the timeline.

### InsertTitleIntoTimeline(titleName)              
Return Type: `TimelineItem`

Inserts a title (indicated by titleName :  string) into the timeline.

### SetClipsLinked([timelineItems], Bool)
Return Type: `Bool`

Links or unlinks the specified TimelineItems depending on second argument.

### SetCurrentTimecode(timecode)                    
Return Type: `Bool`

Sets current playhead position from input timecode for Cut, Edit, Color, Fairlight and Deliver pages.

### SetName(timelineName)                           
Return Type: `Bool`

Sets the timeline name if timelineName (string) is unique. Returns True if successful.

### SetSetting(settingName, settingValue)           
Return Type: `Bool`

Sets timeline setting (indicated by settingName :  string) to the value (settingValue :  string). 
Check the [Project and Clip Properties](../resolve_settings/ProjectAndClipProperties.md) below for more information.

### SetStartTimecode(timecode)
Return Type: `Bool`

Set the start timecode of the timeline to the string 'timecode'. Returns true when the change is successful, false otherwise.

### SetTrackEnable(trackType, trackIndex, Bool)
Return Type: `Bool`

Enables/Disables track with given trackType and trackIndex
trackType is one of {"audio", "video", "subtitle"}
1 < = trackIndex < = [GetTrackCount()](./Timeline.md#gettrackcounttracktype)

### SetTrackLock(trackType, trackIndex, Bool)
Return Type: `Bool`

Locks/Unlocks track with given trackType and trackIndex
trackType is one of {"audio", "video", "subtitle"}
1 < = trackIndex < = [GetTrackCount()](./Timeline.md#gettrackcounttracktype)

### SetTrackName(trackType, trackIndex, name)       
Return Type: `Bool`

Sets the track name (string) for track indicated by trackType ("audio", "video" or "subtitle") and index. 
1 < = trackIndex < = GetTrackCount(trackType).

### UpdateMarkerCustomData(frameId, customData)     
Return Type: `Bool`

Updates customData (string) for the marker at given frameId position. 
CustomData is not exposed via UI and is useful for scripting developer to attach any user specific data to markers.

------
> New in 19.0.0

### GetNodeGraph()                                  
Return Type: `Graph`              

Returns the timeline's node [graph](./Graph.md) object.
### AnalyzeDolbyVision([timelineItems]=[], analysisType=NONE)        
Return Type: `Bool`               

Analyzes Dolby Vision on clips present on the timeline. 

Returns True if analysis start is successful; False otherwise.

if [[timelineItems](./TimelineItem.md)] is empty, analysis performed on **all items**. Else, analysis performed on [[timelineItems](./TimelineItem.md)] only.

set `analysisType` to `resolve.DLB_BLEND_SHOTS` for blend setting