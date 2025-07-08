---
title: Version Update Info
---

For more information on the latest version of the Update, see the [release notes in bmd webside](https://www.blackmagicdesign.com/support/family/davinci-resolve-and-fusion).

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
