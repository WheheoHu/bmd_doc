---
title: Timeline Item Position
displayed_sidebar: apiSidebar
---
This section covers the position dictionary returned by [`TimelineItem:GetPosition`](../resolve_api/TimelineItem.md#getpositionsubframeprecisionfalse), and accepted by [`TimelineItem:SetPosition`](../resolve_api/TimelineItem.md#setpositionposition-movelinkeditemstrue-subframeprecisionfalse) and [`Timeline:MoveItems`](../resolve_api/Timeline.md#moveitemstimelineitems-position-movelinkeditemstrue-subframeprecisionfalse).

The position dictionary contains the following keys:

`trackType`: string (options: "video", "audio", "subtitle". Returned by GetPosition; ignored by SetPosition and MoveItems)

`trackIndex`: int (1-based track index. Omit to retain the current track)

`startFrame`: float (frame number. Omit to retain the current frame)
