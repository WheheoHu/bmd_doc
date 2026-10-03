---
title: Output Blanking
displayed_sidebar: apiSidebar
---
This section covers the dictionary used by [`Timeline:GetOutputBlanking`](../resolve_api/Timeline.md#getoutputblanking), [`Timeline:SetOutputBlanking`](../resolve_api/Timeline.md#setoutputblankingoutputblanking), [`TimelineItem:GetOutputBlanking`](../resolve_api/TimelineItem.md#getoutputblanking) and [`TimelineItem:SetOutputBlanking`](../resolve_api/TimelineItem.md#setoutputblankingoutputblanking).

The outputBlanking dictionary contains the following keys:

`Top`: int (top blanking in pixels)

`Bottom`: int (bottom blanking in pixels)

`Left`: int (left blanking in pixels)

`Right`: int (right blanking in pixels)

:::note

[`TimelineItem:GetOutputBlanking`](../resolve_api/TimelineItem.md#getoutputblanking) returns an empty dictionary when the clip uses the timeline's output blanking. Use [`TimelineItem:GetUseTimelineForOutputBlanking`](../resolve_api/TimelineItem.md#getusetimelineforoutputblanking) and [`TimelineItem:SetUseTimelineForOutputBlanking`](../resolve_api/TimelineItem.md#setusetimelineforoutputblankingusetimelineoutputblanking) to query and control that flag.

:::
