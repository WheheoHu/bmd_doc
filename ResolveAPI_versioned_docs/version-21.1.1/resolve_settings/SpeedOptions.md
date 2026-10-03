---
title: Speed Options
displayed_sidebar: apiSidebar
---
This section covers the dictionary used by [`TimelineItem:GetSpeed`](../resolve_api/TimelineItem.md#getspeed) and [`TimelineItem:SetSpeed`](../resolve_api/TimelineItem.md#setspeedspeedoptions).

The speedOptions setting is a dictionary containing the following keys:

`Percentage`: float (clip speed in percent, example: 110.0. 0.0 freezes the frame)

`PitchCorrection`: Bool (pitch correction of the linked audio. Defaults to the clip's existing state)

`StretchKeyframesToFit`: Bool (default: False)

`RippleTimeline`: Bool (default: False)
