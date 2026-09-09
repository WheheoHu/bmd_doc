# Fade Info

This section covers the dictionary used by [`TimelineItem:GetFades`](../api/TimelineItem.md#getfades) and [`TimelineItem:SetFades`](../api/TimelineItem.md#setfadesfades).

The fades dictionary contains the following keys:

`FadeIn`: int (fade in duration in frames)

`FadeOut`: int (fade out duration in frames)

The durations apply to the item's video or audio fader, depending on the type of the timeline item.
