---
title: Version Update Info
---

For more information on the latest version of the Update, see the [release notes in bmd webside](https://www.blackmagicdesign.com/support/family/davinci-resolve-and-fusion).

# Resolve 19.0.3 update
## MediaPool
### Changes
- `AppendToTimeline` and `CreateTimelineFromClips` allow sub-frame precision data for `clipInfo`

# Resolve 19.0.2 update
## MediaPool
### Changes
- AppendToTimeline
- CreateTimelineFromClips

### New
- GetSelectedClips
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