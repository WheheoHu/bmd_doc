---
title: Transition Options
displayed_sidebar: apiSidebar
---
This section covers the supported settings for the method [`TimelineItem:AddTransition`](../resolve_api/TimelineItem.md#addtransitiontransitionoptions).

The transitionOptions setting is a dictionary containing the following keys:

`type`: string (transition type name, example: "Cross Dissolve")

`category`: string (options: "simple", "fusion", "ofx", "audio")

`position`: string (edge of the item to attach the transition to. Options: "start", "end")

`alignment`: string (placement relative to the edge. Options: "left", "center", "right")

`duration`: int (duration in frames. Automatically calculated when omitted)
