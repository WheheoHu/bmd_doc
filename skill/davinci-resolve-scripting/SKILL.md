---
name: davinci-resolve-scripting
description: Use when writing, editing, or debugging DaVinci Resolve scripting API code (Python or Lua) — provides accurate method signatures, return types, settings dictionaries, enum constants, object navigation, and deprecations for the Resolve/Fusion scripting API. Triggers include DaVinci Resolve, Resolve API, DaVinciResolveScript, GetProjectManager, MediaPool, MediaPoolItem, Timeline, TimelineItem, Fusion scripting, render/export settings.
---

# DaVinci Resolve Scripting API

Accurate reference for the DaVinci Resolve scripting API, generated from the versioned
docs at https://wheheohu.github.io/bmd_doc/. Covers Resolve **21.1.0** (docs last
updated 31 Aug 2026). Use these files instead of guessing method names — the Resolve
API is easy to hallucinate.

## Getting started

Every script starts from the `resolve` object:

```python
#!/usr/bin/env python
import DaVinciResolveScript as dvr_script
resolve = dvr_script.scriptapp("Resolve")
projectManager = resolve.GetProjectManager()
project = projectManager.GetCurrentProject()
```

For environment variables (`RESOLVE_SCRIPT_API`, `RESOLVE_SCRIPT_LIB`, `PYTHONPATH`),
headless mode, and the object hierarchy, read:
- `references/getting-started.md` — setup, env vars, headless, list/dict data structures
- `references/object-map.md` — how to navigate from one object to another

## How to find what you need

- Working with a specific object (Timeline, MediaPool, …) → `references/api/<Object>.md`
- Render/export settings, constants, property dicts → `references/settings/<Name>.md`
- A method that no longer exists or moved → `references/deprecated.md`
- Version markers (`> New in X.Y.Z`) inside each file tell you when a method was added.

## Index

### API Objects

- [ColorGroup](references/api/ColorGroup.md)
- [Folder](references/api/Folder.md)
- [Gallery](references/api/Gallery.md)
- [GalleryStillAlbum](references/api/GalleryStillAlbum.md)
- [Graph](references/api/Graph.md)
- [MediaPool](references/api/MediaPool.md)
- [MediaPoolItem](references/api/MediaPoolItem.md)
- [MediaStorage](references/api/MediaStorage.md)
- [Project](references/api/Project.md)
- [ProjectManager](references/api/ProjectManager.md)
- [Resolve](references/api/Resolve.md)
- [Timeline](references/api/Timeline.md)
- [TimelineItem](references/api/TimelineItem.md)

### Settings & Constants

- [Analyze Slate Settings](references/settings/AnalyzeSlateSettings.md)
- [Audio Mapping](references/settings/AudioMapping.md)
- [Audio Sync Settings](references/settings/AudioSyncSettings.md)
- [Auto Align Options](references/settings/AutoAlignOptions.md)
- [Auto Caption Settings](references/settings/AutoCaptionSettings.md)
- [Cache Mode Information](references/settings/CacheModeInformation.md)
- [Clone Tool Settings](references/settings/CloneToolSettings.md)
- [Cloud Projects Settings](references/settings/CloudProjectsSettings.md)
- [Encrypt DCTL Options](references/settings/EncryptDCTLOptions.md)
- [Export LUT](references/settings/ExportLUT.md)
- [Fade Info](references/settings/FadeInfo.md)
- [Keyframe Mode Information](references/settings/KeyframeModeInformation.md)
- [Motion Deblur Settings](references/settings/MotionDeblurSettings.md)
- [Multicam Options](references/settings/MulticamOptions.md)
- [Normalize Audio Options](references/settings/NormalizeAudioOptions.md)
- [Output Blanking](references/settings/OutputBlanking.md)
- [Project and Clip Properties](references/settings/ProjectAndClipProperties.md)
- [Project Attributes](references/settings/ProjectAttributes.md)
- [Project Settings Preset Info](references/settings/ProjectSettingsPresetInfo.md)
- [Render Settings](references/settings/RenderSettings.md)
- [Smart Switch Settings](references/settings/SmartSwitchSettings.md)
- [Speech Generation Settings](references/settings/SpeechGenerationSettings.md)
- [Speed Options](references/settings/SpeedOptions.md)
- [Studio and AI Scripting APIs](references/settings/StudioAndAIScriptingAPIs.md)
- [Timeline Export Properties](references/settings/TimelineExportProperties.md)
- [Timeline Item Properties](references/settings/TimelineItemProperties.md)
- [Transcription](references/settings/Transcription.md)
- [Transition Options](references/settings/TransitionOptions.md)

