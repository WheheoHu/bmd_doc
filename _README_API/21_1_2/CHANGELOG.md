# DaVinci Resolve Scripting API Changelog

*Last Updated: 22 Oct 2026*

This file documents scripting changes by version. For the overall DaVinci Resolve Scripting API, please refer to
Developer/Scripting/README.md and DaVinciResolveScript.pyi.

## 21.1.2

Added:

- Photo Album APIs - similar to Timeline. Enumerate, select, create, update and delete albums. Access album properties and actions for photos and stills.
- Photo Album Item APIs - similar to TimelineItem. Access properties, metadata and actions for color and comp changes.
- Photo Album render APIs for supported still types - Deliver: PhotoRenderSettings, Quick Export: PhotoQuickExportRenderSettings.
- Clip Effect Actions - resolve.GetEffectsList(video/photo/audio), TimelineItem.AddEffect, DeleteEffects, GetEffects.
- Effect Properties - GetInfo, Get/SetIsEnabled, Get/SetIndex (for ordering), GetFusionComp.
- Copy video and audio attributes between clips - CopyAttributes({copyAttributesOptions}) on Edit and Cut pages.
- TimelineItem editing - Get/Set LeftOffset, Get/Set RightOffset, Get/Set Position, Timeline.MoveItems.
- Timeline actions - Timeline.DeleteGaps, Get/SetIsEnabled, TimelineItem.RippleDeleteSilence({removeSilenceOptions}).
- Audio analysis - TimelineItem.AnalyzeAudioLevels(standard).
- Media Transcription - MediaPoolItem.SetTranscription({transcription}).
- AutoCaptionSettings and project settings - query and set Extended language support model usage.
- Node APIs - Graph.SetNodeLabel, GetNodeColor, SetNodeColor.
- Graph.ApplyGradeFromDRX - optional applyType for all, color only or sizing only.
- Export frame - Timeline.ExportFrame, TimelineItem.ExportFrame, MediaPoolItem.ExportFrame({exportFrameOptions}) to file or encoded string.
- Folder hierarchy - MediaPoolItem.GetParentFolder, Folder.GetParentFolder.
- Transition properties - TimelineItem.Get/SetProperty for TransitionType, TransitionCategory, TransitionDuration and TransitionAlignment.

Addressed:

- Resolve.GetKeyframeMode and SetKeyframeMode now work from any page.
- MediaPool.AppendToTimeline crash with frame ranges for OGraf and Lottie clips.
- issues with Project.RenderWithQuickExport and ProjectManager.ArchiveProject.

## 21.1.1

Added:

- Render and Analysis APIs are non-blocking: TranscribeAudio, AnalyzeForSlate, CreateSubtitlesFromAudio, DetectSceneCuts, SmartReframe, RenderWithQuickExport.
- ApplyGradeFromDRX parameter for copying specific or all node layers.

Addressed:

- Changing timeline setting useCustomSettings retains project settings for timeline.

## 21.1

Notes:

- Python 2 is no longer supported.
- Built-in Python support for script menu and console scripts.
- Overloaded function signatures are deprecated.

Added:

- Resolve Keyboard Presets - Load/Delete/Import/Export/GetCurrent/Get List for KeyboardPreset.
- Project Settings Presets - Set/Delete/Import/Export/Update/Save/Get List for ProjectSettingsPreset.
- Render Presets - Project.UpdateRenderPreset, SetQuickExportEnabledForRenderPreset.
- Audio Render APIs - Project.GetAudioRenderCodecs, GetAudioRenderFormats.
- Media Transcription - MediaPoolItem.GetTranscription.
- Multicam APIs - MediaPool.CreateMulticamClip, TimelineItem.FlattenMulticam, PerformMulticamSmartSwitch, Timeline.AutoAlignClips.
- TimelineItem properties - Get/Set Property includes native audio properties and enabled states.
- TimelineItem properties - Get/Set Fades, Speed, OutputBlanking, UseTimelineForOutputBlanking and GetType.
- Transition API - TimelineItem.AddTransition.
- Timeline Output blanking - Timeline.Get/SetOutputBlanking.
- Timeline Audio Normalization - Timeline.GetNormalizeAudioModes, NormalizeAudioLevel.
- Set Audio Mappings - MediaPoolItem.SetAudioMapping, TimelineItem.SetSourceAudioChannelMapping.
- Media Storage Clone - MediaStorage.StartCloneMedia, StopCloneMedia, GetCloneStatus, SetCloneToolSettings.
- DCTL development - resolve.ValidateDCTL, EncryptDCTL.
- Utility functions - resolve.Get CurrentProject/CurrentTimeline/MediaPool/Gallery.

## 21.0.4

Added:

- Timeline.GetSelectedClips
- Project.SetRenderSettings - options for handles, full extents and data burn.

## 21.0.3

Addressed:

- Incorrect audio mapping results in some scenarios.

## 21.0.1

Addressed:

- GenerateSpeech API character limit issue.

## 21.0

Added:

- Optional useSpeakerDetection argument for Folder.TranscribeAudio and MediaPoolItem.TranscribeAudio.
- PerformAudioClassification and ClearAudioClassification for Folder and MediaPoolItem.
- RemoveMotionBlur({deblurOption}) for Folder and MediaPoolItem.
- AnalyzeForIntellisearch(identifyFaces, isBetterMode) for Folder and MediaPoolItem.
- New Marker color enumerated type - currently used only in AnalyzeForSlate APIs.
- AnalyzeForSlate(markerColor) for Folder and MediaPoolItem.
- Resolve.DisableBackgroundTasksForCurrentResolveSession
- Project.GenerateSpeech({speechGenerationSettings}, timecode)

## 20.3.2

Addressed:

- AppendToTimeline failure when no media pool clip is selected.

## 20.2.2

Added:

- ProjectManager.CreateProject supports optional mediaLocationPath parameter.
- Resolve.GetFairlightPresets
- Project.ApplyFairlightPresetToCurrentTimeline(preset_name)

Addressed:

- GetRenderCodecs(renderFormat) missing some valid codecs.
- SetVoiceIsolationState incorrect behavior in some scenarios.
- AppendToTimeline validating trackIndex as video track indices in 'Audio Only' mode.

## 20.2.1

Addressed:

- TimelineItem.GetName not returning subtitle text content.
- Project.SetSetting('colorAcesODT', value) not working for some values.

## 20.2

Added:

- TimelineItem and MediaPoolItem support for SetName.
- Render Settings: ExportSubtitle (Bool) and SubtitleFormat (string) options.
- TimelineItem.ResetAllNodeColors

## 20.1

Added:

- Timeline.GetVoiceIsolationState(trackIndex)
- Timeline.SetVoiceIsolationState(trackIndex, {VoiceIsolationState})
- TimelineItem.GetVoiceIsolationState
- TimelineItem.EnableVoiceIsolationState({VoiceIsolationState})

Addressed:

- Interlaced clip frame offset issues in multiple APIs.

## 20.0.1

Addressed:

- MediaPool.AppendToTimeline not working in some scenarios.

## 20.0

Added:

- MediaPoolItem.LinkFullResolutionMedia(fullResMediaPath)
- MediaPoolItem.ReplaceClipPreserveSubClip(filePath)
- MediaPoolItem.MonitorGrowingFile

Addressed:

- TimelineItem.GetRightExtents return (it now returns offset between right edit point and media extents end).
- Occasional lags for some scripting APIs.
- AddFusionComp sometimes showing incorrect composition.
