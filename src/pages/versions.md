---
title: Version Update Info
---

For more information on the latest version of the Update, see the [release notes in bmd webside](https://www.blackmagicdesign.com/support/family/davinci-resolve-and-fusion).


# Resolve 21.1.0 update

## Resolve

### New

- GetCurrentProject()
- GetCurrentTimeline()
- GetMediaPool()
- GetGallery()
- GetKeyboardPresetList()
- GetCurrentKeyboardPreset()
- LoadKeyboardPreset(presetName)
- DeleteKeyboardPreset(presetName)
- ImportKeyboardPreset(filePath, presetName)
- ExportKeyboardPreset(presetName, exportPath)
- ValidateDCTL(dctlSource)
- EncryptDCTL(inputPath, [\{encryptDCTLOptions\}])
- IsStudio() - long-standing API, newly documented
- SetHighPriority(highPriority) - long-standing API, newly documented

## ProjectManager

### New

- GetProjectLastModifiedTime(projectName) - long-standing API, newly documented

## Project

### New

- GetSettings()
- SetSettings(\{settings\})
- GetProjectSettingsPresetList()
- SetProjectSettingsPreset(presetName)
- UpdateProjectSettingsPreset(presetName)
- DeleteProjectSettingsPreset(presetName)
- ImportProjectSettingsPreset(filePath, presetName)
- ExportProjectSettingsPreset(presetName, exportPath)
- SaveCurrentProjectSettingsAsNewPreset(presetName)
- UpdateRenderPreset(presetName)
- SetQuickExportEnabledForRenderPreset(presetName, isEnabled)
- GetAudioRenderFormats()
- GetAudioRenderCodecs(audioRenderFormatFileExtension)

### Remove

- GetPresetList() - deprecated
- SetPreset(presetName) - deprecated

### Changes

- GetSetting(settingName) - deprecated calling convention, use GetSettings()
- SetSetting(settingName, settingValue) - deprecated calling convention, use SetSettings(\{settings\}). The 4-argument superScale form is not deprecated

## MediaPool

### New

- CreateMulticamClip([clips], \{multicamOptions\})

### Changes

- AppendToTimeline([clips]) and AppendToTimeline(clip1, clip2, ...) - deprecated calling conventions
- CreateTimelineFromClips(name, [clips]) and CreateTimelineFromClips(name, clip1, clip2,...) - deprecated calling conventions
- ImportMedia([items...]) - deprecated calling convention, use ImportMedia([\{clipInfo\}])

## MediaPoolItem

### New

- GetTranscription(useNestedClipTranscription=False)
- SetAudioMapping(audioMapping)

### Changes

- SetMetadata(metadataType, metadataValue) and SetThirdPartyMetadata(metadataType, metadataValue) - deprecated calling conventions
- GetMetadata(metadataType=None) and GetClipProperty(propertyName=None) - passing an argument is a deprecated calling convention

## Timeline

### New

- GetSettings()
- SetSettings(\{settings\})
- GetOutputBlanking()
- SetOutputBlanking(\{outputBlanking\})
- GetNormalizeAudioModes()
- NormalizeAudioLevel([timelineItems], [\{normalizeAudioOptions\}])
- AutoAlignClips([timelineItems], [\{autoAlignOptions\}])

### Changes

- GetSetting(settingName) - deprecated calling convention, use GetSettings()
- SetSetting(settingName, settingValue) - deprecated calling convention, use SetSettings(\{settings\})

## TimelineItem

### New

- GetType()
- GetProperties()
- SetProperties(\{properties\})
- GetFades()
- SetFades(\{fades\})
- GetSpeed()
- SetSpeed(\{speedOptions\})
- GetOutputBlanking()
- SetOutputBlanking(\{outputBlanking\})
- GetUseTimelineForOutputBlanking()
- SetUseTimelineForOutputBlanking(useTimelineOutputBlanking)
- AddTransition(\{transitionOptions\})
- FlattenMulticam(gradeOption)
- PerformMulticamSmartSwitch(\{smartSwitchSettings\})
- SetSourceAudioChannelMapping(audioMapping)

### Changes

- GetProperty(propertyKey) - deprecated calling convention, use GetProperties()
- SetProperty(propertyKey, propertyValue) - deprecated calling convention, use SetProperties(\{properties\})

## MediaStorage

### New

- StartCloneMedia(sourceDir, targetDirs)
- StopCloneMedia()
- GetCloneStatus()
- SetCloneToolSettings([\{cloneToolSettings\}])

### Changes

- AddItemListToMediaPool([items...]) and AddItemListToMediaPool(item1, item2, ...) - deprecated calling conventions

## GalleryStillAlbum

### New

- ImportStills([filePaths]) - long-standing API, newly documented

## Settings and Properties

### New

- Multicam Options
- Smart Switch Settings
- Transition Options
- Output Blanking
- Normalize Audio Options
- Auto Align Options
- Speed Options
- Fade Info
- Transcription
- Clone Tool Settings
- Encrypt DCTL Options
- Project Settings Preset Info

### Changes

- Project and Clip Properties: now enumerates all 158 project settings keys and all 69 timeline settings keys
- Timeline Item Properties: now enumerates all 47 keys, including the new native audio and "...Enabled" properties
- Deprecated API: added the Deprecated Calling Conventions section

# Resolve 21.0.4 update

## Timeline

### New

- GetSelectedClips()

## MediaPoolItem

### New

- GetTimeline()

## Settings and Properties

### Changes

- Render Settings: added UseFullExtents, AddFrameHandles and DataBurnIn

# Resolve 21.0.3 update

## Resolve

### New

- GetLayoutPresetList()
- GetBurnInPresetList()
- DeleteBurnInPreset(presetName)
- GetUserPreferencesPresetList()
- LoadUserPreferencesPreset(presetName)
- SaveUserPreferencesPreset(presetName)
- DeleteUserPreferencesPreset(presetName)
- ImportUserPreferencesPreset(filePath, presetName)
- ExportUserPreferencesPreset(presetName, exportPath)

## ProjectManager

### New

- GetProjectAttributesInCurrentFolder()

## Settings and Properties

### New

- Project Attributes

# Resolve 21.0.2 update

## Resolve

### New

- DisableBackgroundTasksForCurrentResolveSession()

### Changes

- OpenPage(pageName) - Now accepts the "photo" page
- GetCurrentPage() - Can now return the "photo" page

## Project

### New

- ResetIntellisearchAnalysis()
- GenerateSpeech(\{speechGenerationSettings\}, timecode)

## Folder

### New

- PerformAudioClassification()
- ClearAudioClassification()
- RemoveMotionBlur(\{deblurOption\})
- AnalyzeForIntellisearch(identifyFaces, isBetterMode)
- AnalyzeForSlate(markerColor)

### Changes

- TranscribeAudio() -> TranscribeAudio(useSpeakerDetection=None)

## MediaPoolItem

### New

- PerformAudioClassification()
- ClearAudioClassification()
- RemoveMotionBlur(\{deblurOption\})
- AnalyzeForIntellisearch(identifyFaces, isBetterMode)
- AnalyzeForSlate(markerColor)

### Changes

- TranscribeAudio() -> TranscribeAudio(useSpeakerDetection=None)

## Settings and Properties

### New

- Studio and AI Scripting APIs
- Motion Deblur Settings
- Analyze Slate Settings
- Speech Generation Settings

# Resolve 20.3.0 update

## Resolve

### New

- GetFairlightPresets()

## ProjectManager

### Changes

- CreateProject(projectName, mediaLocationPath) - Now accepts optional mediaLocationPath parameter

## Project

### New

- ApplyFairlightPresetToCurrentTimeline(name)

# Resolve 20.2.0 update

## MediaPoolItem

### New

- SetName(name)

## TimelineItem

### New

- SetName(name)
- ResetAllNodeColors() [NOT WORKING]

## Render Settings

### New Export Subtitle Options

- "ExportSubtitle": Bool
- "SubtitleFormat": string (options: "BurnIn", "EmbeddedCaptions", "SeparateFile")

# Resolve 20.1.0 update

## Timeline

### New

- GetVoiceIsolationState(trackIndex)
- SetVoiceIsolationState(trackIndex, \{VoiceIsolationState\})

## TimelineItem

### New

- GetVoiceIsolationState()
- SetVoiceIsolationState(\{VoiceIsolationState\})

# Resolve 20.0.0 update

## MediaPoolItem

### New

- LinkFullResolutionMedia(fullResMediaPath)
- ReplaceClipPreserveSubClip(filePath)
- MonitorGrowingFile()

# Resolve 19.1.0 update

## ProjectManager

### New

- LoadCloudProject()

## Project

### New

- DeleteRenderPreset(presetName)
- GetQuickExportRenderPresets()
- RenderWithQuickExport(preset_name, \{param_dict\})

## MediaPool

### New

- AutoSyncAudio([MediaPoolItems], \{audioSyncSettings\})

## MediaPoolItem

### New

- GetMarkInOut()
- SetMarkInOut(in, out, type="all")
- ClearMarkInOut(type="all")

## Timeline

### New

- GetMediaPoolItem()
- GetMarkInOut()
- SetMarkInOut(in, out, type="all")
- ClearMarkInOut(type="all")

### Remove

- ApplyGradeFromDRX(path, gradeMode, item1, item2, ...)
- ApplyGradeFromDRX(path, gradeMode, [items])

## TimelineItem

### New

- GetIsColorOutputCacheEnabled()
- GetIsFusionOutputCacheEnabled()
- SetColorOutputCache(cache_value)
- SetFusionOutputCache(cache_value)

### Remove

- ApplyArriCdlLut()

## Gallery

### New

- GetGalleryPowerGradeAlbums()
- CreateGalleryStillAlbum()
- CreateGalleryPowerGradeAlbum()

## Graph

### New

- SetNodeCacheMode(nodeIndex, cache_value)
- GetNodeCacheMode(nodeIndex)
- ApplyGradeFromDRX(path, gradeMode)
- ApplyArriCdlLut()
- ResetAllGrades()


# Resolve 19.0.3 update

## MediaPool

### Changes

- `AppendToTimeline` and `CreateTimelineFromClips` allow sub-frame precision data for `clipInfo`

# Resolve 19.0.2 update

## MediaPool

### Changes

- AppendToTimeline()
- CreateTimelineFromClips()

### New

- GetSelectedClips()
- SetSelectedClip(MediaPoolItem)

## MediaPoolItem

### New

- GetThirdPartyMetadata(metadataType=None)
- SetThirdPartyMetadata(metadataType, metadataValue)
- SetThirdPartyMetadata(\{metadata\})

## TimelineItem

### Changes

- GetDuration() -> GetDuration(subframe_precision)
- GetEnd() -> GetEnd(subframe_precision)
- GetLeftOffset() -> GetLeftOffset(subframe_precision)
- GetRightOffset() -> GetRightOffset(subframe_precision)
- GetStart() -> GetStart(subframe_precision)

### New

- GetSourceEndFrame
- GetSourceEndTime
- GetSourceStartFrame
- GetSourceStartTime
