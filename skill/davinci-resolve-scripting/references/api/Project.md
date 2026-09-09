# Project

> New in 21.1.0

### GetSettings()
Return Type: `{settings}`

Returns a dict with all project settings.

Refer to [Project and Clip Properties](../settings/ProjectAndClipProperties.md) for the supported keys.

### SetSettings({settings})
Return Type: `Bool`

Sets the project settings with the specified dict of setting names and values.

Refer to [Project and Clip Properties](../settings/ProjectAndClipProperties.md) for the supported keys.

### GetProjectSettingsPresetList()
Return Type: `[{presetInfo}...]`

Returns a list of project settings presets and their information.

Refer to [Project Settings Preset Info](../settings/ProjectSettingsPresetInfo.md) for the returned keys.

### SetProjectSettingsPreset(presetName)
Return Type: `Bool`

Sets the project settings preset named presetName (string) into the project.

### UpdateProjectSettingsPreset(presetName)
Return Type: `Bool`

Updates the project settings preset named presetName (string) with the current settings.

### DeleteProjectSettingsPreset(presetName)
Return Type: `Bool`

Deletes the project settings preset named presetName (string).

### ImportProjectSettingsPreset(presetFilePath, presetName)
Return Type: `Bool`

Imports a project settings preset from presetFilePath (string).
The optional argument presetName (string) specifies how the preset shall be named.
If not specified, the preset is named based on the file base name.

### ExportProjectSettingsPreset(presetName, exportPath)
Return Type: `Bool`

Exports the project settings preset named presetName (string) to exportPath (string).

### SaveCurrentProjectSettingsAsNewPreset(presetName)
Return Type: `Bool`

Saves the current project settings as a new preset named presetName (string).

### UpdateRenderPreset(presetName)
Return Type: `Bool`

Updates the render preset named presetName (string) with the current render settings.

### SetQuickExportEnabledForRenderPreset(presetName, isEnabled)
Return Type: `Bool`

Enables or disables quick export for the render preset named presetName (string), based on isEnabled (Bool).

### GetAudioRenderFormats()
Return Type: `{formatDescription: fileExtension...}`

Returns a dict of available audio render formats, mapping each format description to its file extension.

### GetAudioRenderCodecs(audioRenderFormatFileExtension)
Return Type: `{codecDescription: codecName...}`

Returns a dict of the audio codecs available for the audio render format identified by audioRenderFormatFileExtension (string), mapping each codec description to its codec name.

---

> New in 21.0.2

### ResetIntellisearchAnalysis()

Return Type: `Bool`

Clears Intellisearch analysis data. Returns True if successful.

Refer to [Studio and AI Scripting APIs](../settings/StudioAndAIScriptingAPIs.md) for prerequisites.

### GenerateSpeech({speechGenerationSettings}, timecode)

Return Type: `MediaPoolItem`

Generates an audio [MediaPoolItem](./MediaPoolItem.md) based on the given speechGenerationSettings and adds it to the timeline at the stated timecode if "AddToTimeline" is True. Returns the newly generated [MediaPoolItem](./MediaPoolItem.md).

Refer to [Speech Generation Settings](../settings/SpeechGenerationSettings.md) for information on supported settings.

Refer to [Studio and AI Scripting APIs](../settings/StudioAndAIScriptingAPIs.md) for prerequisites.

---

> New in 20.3.0

### ApplyFairlightPresetToCurrentTimeline(name)

Return Type: `Bool`

Apply Fairlight Preset of given name to the current timeline. Returns True if successful, False otherwise.

---

> New in 19.1.0

### DeleteRenderPreset(presetName)

Return Type: `Bool`

Delete render preset by provided name

### GetQuickExportRenderPresets()

Return Type: `[preset_name..]`

Returns a list of Quick Export render presets by name

### RenderWithQuickExport(preset_name, {param_dict})

Return Type: `{status info}`

Starts a quick export render for the current active timeline.

`preset_name` from [GetQuickExportRenderPresets](#getquickexportrenderpresets) list.

`param_dict` supports render settings keys `TargetDir`, `CustomName`,`VideoQuality`, and `EnableUpload`.

`EnableUpload` key enables direct upload for supported web presets.

Returns a dict with job status and time taken to render, or an error string if render has failed or not attempted

Refer to [Render Settings](../settings/RenderSettings.md) section for information on the above supported settings

---

> New in 19.0.0

### GetColorGroupsList()

Return Type: `[ColorGroups...]`

Returns a list of all [group](./ColorGroup.md) objects in the timeline.

### AddColorGroup(groupName)

Return Type: `ColorGroup`

Creates a new [ColorGroup](./ColorGroup.md). groupName must be a **unique** string.

### DeleteColorGroup(colorGroup)

Return Type: `Bool`

Deletes the given [color group](./ColorGroup.md) and sets clips to ungrouped.

---

### AddRenderJob()

Return Type: `string`

Adds a render job based on current render settings to the render queue.
Returns a unique job id (string) for the new render job.

### DeleteAllRenderJobs()

Return Type: `Bool`

Deletes all render jobs in the queue.

### DeleteRenderJob(jobId)

Return Type: `Bool`

Deletes render job for input job id (string).

### ExportCurrentFrameAsStill(filePath)

Return Type: `Bool`

Exports current frame as still to supplied filePath. filePath must end in valid export file format. Returns True if successful, False otherwise.

### GetCurrentRenderFormatAndCodec()

Return Type: `{format codec}  `

Returns a dict with currently selected format 'format' and render codec 'codec'.

### GetCurrentRenderMode()

Return Type: `int`

Returns the render mode: 0 - Individual clips, 1 - Single clip.

### GetCurrentTimeline()

Return Type: `Timeline`

Returns the currently loaded [Timeline](./Timeline.md) .

### GetGallery()

Return Type: `Gallery`

Returns the [Gallery](./Gallery.md) object.

### GetMediaPool()

Return Type: `MediaPool`

Returns the [MediaPool](./MediaPool.md) object.

### GetName()

Return Type: `string`

Returns project name.

### GetPresetList()

> ⚠️ Deprecated since 21.1.0. Refer to [Deprecated API](../deprecated.md#deprecated-resolve-api-functions).


~~Return Type: `[presets...]`~~

~~Returns a list of presets and their information.~~

### GetRenderCodecs(renderFormat)

Return Type: `{render codecs...}`

Returns a dict (codec description -> codec name) of available codecs for given render format (string).

### GetRenderFormats()

Return Type: `{render formats..}`

Returns a dict (format -> file extension) of available render formats.

### GetRenderJobList()

Return Type: `[render jobs...]`

Returns a list of render jobs and their information.

### GetRenderJobStatus(jobId)

Return Type: `{status info}`

Returns a dict with job status and completion percentage of the job by given jobId (string).

### GetRenderPresetList()

Return Type: `[presets...]`

Returns a list of render presets and their information.

### GetRenderResolutions(format, codec)

Return Type: `[{Resolution}]`

Returns list of resolutions applicable for the given render format (string) and render codec (string). Returns full list of resolutions if no argument is provided. Each element in the list is a dictionary with 2 keys "Width" and "Height".

### GetSetting(settingName)

> ⚠️ Deprecated calling convention since 21.1.0. Refer to [Deprecated Calling Conventions](../deprecated.md#deprecated-calling-conventions).


Return Type: `string`

Returns value of project setting (indicated by settingName, string).
Check the [Project and Clip Properties](../settings/ProjectAndClipProperties.md) below for more information.

### GetTimelineByIndex(idx)

Return Type: `Timeline`

Returns [Timeline](./Timeline.md) at the given index, 1 < = idx < = project.GetTimelineCount()

### GetTimelineCount()

Return Type: `int`

Returns the number of timelines currently present in the project.

### GetUniqueId()

Return Type: `string`

Returns a unique ID for the project item

### InsertAudioToCurrentTrackAtPlayhead(mediaPath,startOffsetInSamples, durationInSamples)

Return Type: `Bool`

Inserts the media specified by mediaPath (string) with startOffsetInSamples (int) and durationInSamples (int) at the playhead on a selected track on the Fairlight page. Returns True if successful, otherwise False.

### IsRenderingInProgress()

Return Type: `Bool`

Returns True if rendering is in progress.

### LoadBurnInPreset(presetName)

Return Type: `Bool`

Loads user defined data burn in preset for project when supplied presetName (string). Returns true if successful.

### LoadRenderPreset(presetName)

Return Type: `Bool`

Sets a preset as current preset for rendering if presetName (string) exists.

### RefreshLUTList()

Return Type: `Bool`

Refreshes LUT List

### SaveAsNewRenderPreset(presetName)

Return Type: `Bool`

Creates new render preset by given name if presetName(string) is unique.

### SetCurrentRenderFormatAndCodec(format, codec)

Return Type: `Bool`

Sets given render format (string) and render codec (string) as options for rendering.

### SetCurrentRenderMode(renderMode)

Return Type: `Bool`

Sets the render mode. Specify renderMode = 0 for Individual clips, 1 for Single clip.

### SetCurrentTimeline(timeline)

Return Type: `Bool`

Sets given [Timeline](./Timeline.md) as current timeline for the project. Returns True if successful.

### SetName(projectName)

Return Type: `Bool`

Sets project name if given projectName (string) is unique.

### SetPreset(presetName)

> ⚠️ Deprecated since 21.1.0. Refer to [Deprecated API](../deprecated.md#deprecated-resolve-api-functions).


~~Return Type: `Bool`~~

~~Sets preset by given presetName (string) into project.~~

### SetRenderSettings({settings})

Return Type: `Bool`

Sets given settings for rendering. Settings is a dict, with support for the keys:

(Refer to [Render Settings](../settings/RenderSettings.md) section for information for supported settings)

### SetSetting(settingName, settingValue)

> ⚠️ Deprecated calling convention since 21.1.0. Refer to [Deprecated Calling Conventions](../deprecated.md#deprecated-calling-conventions).


Return Type: `Bool`

Sets the project setting (indicated by settingName, string) to the value (settingValue, string).
Check the [Project and Clip Properties](../settings/ProjectAndClipProperties.md) below for more information.

> The 4-argument form `SetSetting('superScale', 2, sharpnessValue, noiseReductionValue)`, used to select the Super Scale multiplier "2x Enhanced", is **not** deprecated — it has no [`SetSettings`](#setsettingssettings) equivalent.


### StartRendering([jobIds...], isInteractiveMode=False)

Return Type: `Bool`

Starts rendering jobs indicated by the input job ids.
The optional "isInteractiveMode", when set, enables error feedback in the UI during rendering.

### StartRendering(isInteractiveMode=False)

Return Type: `Bool`

Starts rendering all queued render jobs.
The optional "isInteractiveMode", when set, enables error feedback in the UI during rendering.

### StartRendering(jobId1, jobId2, ...)

Return Type: `Bool`

Starts rendering jobs indicated by the input job ids.

### StopRendering()

Return Type: `None`

Stops any current render processes.
