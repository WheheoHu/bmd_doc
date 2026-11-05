---
title: Remove Silence Options
displayed_sidebar: apiSidebar
---
This section covers the supported settings for the method [`TimelineItem:RippleDeleteSilence`](../resolve_api/TimelineItem.md#rippledeletesilenceremovesilenceoptions).

The removeSilenceOptions setting is a dictionary containing the following keys:

`threshold`: float (silence threshold in dB, -100.0 to 10.0. Default: -25.0)

`preHead`: int (pre-head padding in frames. Default: 0)

`postTail`: int (post-tail padding in frames. Default: 0)

`minimumToStrip`: int (minimum silence duration in frames to strip. Default: the timeline's FPS)

`crossFadeAudio`: Bool (add cross-fades at edit points. Default: False)
