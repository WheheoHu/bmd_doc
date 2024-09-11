### AddRenderJob()   
                              
Return Type:`string`

Adds a render job based on current render settings to the render queue. 
Returns a unique job id (string) for the new render job.

### DeleteAllRenderJobs()                          
Return Type:`Bool`

Deletes all render jobs in the queue.

### DeleteRenderJob(jobId)                         
Return Type:`Bool`

Deletes render job for input job id (string).

### ExportCurrentFrameAsStill(filePath)
Return Type:`Bool`

Exports current frame as still to supplied filePath. filePath must end in valid export file format. Returns True if succssful, False otherwise.

### GetCurrentRenderFormatAndCodec()               
Return Type:`{format codec}  `

Returns a dict with currently selected format 'format' and render codec 'codec'.

### GetCurrentRenderMode()                         
Return Type:`int`

Returns the render mode: 0 - Individual clips, 1 - Single clip.

### GetCurrentTimeline()                           
Return Type:`Timeline`

Returns the currently loaded Timeline (DaVinci%20Resolve%20Python%20API%207c4f1038a36f44818b631ec7e4a537fa/Timeline%20c7483b6449264a26a1a4f956a278b95b.md) .

### GetGallery()                                   
Return Type:`Gallery`

Returns the Gallery (DaVinci%20Resolve%20Python%20API%207c4f1038a36f44818b631ec7e4a537fa/Gallery%209e4f01dc837f4438877ba17cd4c16c71.md)  object.

### GetMediaPool()                                 
Return Type:`MediaPool`

Returns the MediaPool (DaVinci%20Resolve%20Python%20API%207c4f1038a36f44818b631ec7e4a537fa/MediaPool%20beb158d369cb4920b1bc38cd70524f56.md)  object.

### GetName()                                      
Return Type:`string`

Returns project name.

### GetPresetList()                                
Return Type:`[presets...]`

Returns a list of presets and their information.

### GetRenderCodecs(renderFormat)                  
Return Type:`{render codecs...}`

Returns a dict (codec description -> codec name) of available codecs for given render format (string).

### GetRenderFormats()                             
Return Type:`{render formats..}`

Returns a dict (format -> file extension) of available render formats.

### GetRenderJobList()                             
Return Type:`[render jobs...]`

Returns a list of render jobs and their information.

### GetRenderJobStatus(jobId)                      
Return Type:`{status info}`

Returns a dict with job status and completion percentage of the job by given jobId (string).

### GetRenderPresetList()                          
Return Type:`[presets...]`

Returns a list of render presets and their information.

### GetRenderResolutions(format, codec)            
Return Type:`[{Resolution}]`

Returns list of resolutions applicable for the given render format (string) and render codec (string). Returns full list of resolutions if no argument is provided. Each element in the list is a dictionary with 2 keys "Width" and "Height".

### GetSetting(settingName)                        
Return Type:`string`

Returns value of project setting (indicated by settingName, string). 
Check the https://www.notion.so/DaVinci-Resolve-Python-API-7c4f1038a36f44818b631ec7e4a537fa?pvs=21 below for more information.

### GetTimelineByIndex(idx)                        
Return Type:`Timeline`

Returns Timeline (DaVinci%20Resolve%20Python%20API%207c4f1038a36f44818b631ec7e4a537fa/Timeline%20c7483b6449264a26a1a4f956a278b95b.md)  at the given index, 1 < = idx < = project.GetTimelineCount()

### GetTimelineCount()                             
Return Type:`int`

Returns the number of timelines currently present in the project.

### GetUniqueId()
Return Type:`string`

Returns a unique ID for the project item

### InsertAudioToCurrentTrackAtPlayhead(mediaPath,startOffsetInSamples, durationInSamples)
Return Type:`Bool`

Inserts the media specified by mediaPath (string) with startOffsetInSamples (int) and durationInSamples (int) at the playhead on a selected track on the Fairlight page. Returns True if successful, otherwise False.

### IsRenderingInProgress()                        
Return Type:`Bool`

Returns True if rendering is in progress.

### LoadBurnInPreset(presetName)
Return Type:`Bool`

Loads user defined data burn in preset for project when supplied presetName (string). Returns true if successful.

### LoadRenderPreset(presetName)                   
Return Type:`Bool`

Sets a preset as current preset for rendering if presetName (string) exists.

### RefreshLUTList()                               
Return Type:`Bool`

Refreshes LUT List

### SaveAsNewRenderPreset(presetName)              
Return Type:`Bool`

Creates new render preset by given name if presetName(string) is unique.

### SetCurrentRenderFormatAndCodec(format, codec)  
Return Type:`Bool`

Sets given render format (string) and render codec (string) as options for rendering.

### SetCurrentRenderMode(renderMode)               
Return Type:`Bool`

Sets the render mode. Specify renderMode = 0 for Individual clips, 1 for Single clip.

### SetCurrentTimeline(timeline)                   
Return Type:`Bool`

Sets given Timeline (DaVinci%20Resolve%20Python%20API%207c4f1038a36f44818b631ec7e4a537fa/Timeline%20c7483b6449264a26a1a4f956a278b95b.md)  as current timeline for the project. Returns True if successful.

### SetName(projectName)                           
Return Type:`Bool`

Sets project name if given projectName (string) is unique.

### SetPreset(presetName)                          
Return Type:`Bool`

Sets preset by given presetName (string) into project.

### SetRenderSettings(\{settings\})                  
Return Type:`Bool`

Sets given settings for rendering. Settings is a dict, with support for the keys:
(Refer to "https://www.notion.so/DaVinci-Resolve-Python-API-7c4f1038a36f44818b631ec7e4a537fa?pvs=21" section for information for supported settings)

### SetSetting(settingName, settingValue)          
Return Type:`Bool`

Sets the project setting (indicated by settingName, string) to the value (settingValue, string). 
Check the https://www.notion.so/DaVinci-Resolve-Python-API-7c4f1038a36f44818b631ec7e4a537fa?pvs=21 below for more information.

### StartRendering([jobIds...], isInteractiveMode=False)
Return Type:`Bool`

Starts rendering jobs indicated by the input job ids.
The optional "isInteractiveMode", when set, enables error feedback in the UI during rendering.

### StartRendering(isInteractiveMode=False)        
Return Type:`Bool`

Starts rendering all queued render jobs. 
The optional "isInteractiveMode", when set, enables error feedback in the UI during rendering.

### StartRendering(jobId1, jobId2, ...)            
Return Type:`Bool`

Starts rendering jobs indicated by the input job ids.

### StopRendering()                                
Return Type:`None`

Stops any current render processes.

