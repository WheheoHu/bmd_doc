# Output Blanking

This section covers the dictionary used by [`Timeline:GetOutputBlanking`](../api/Timeline.md#getoutputblanking), [`Timeline:SetOutputBlanking`](../api/Timeline.md#setoutputblankingoutputblanking), [`TimelineItem:GetOutputBlanking`](../api/TimelineItem.md#getoutputblanking) and [`TimelineItem:SetOutputBlanking`](../api/TimelineItem.md#setoutputblankingoutputblanking).

The outputBlanking dictionary contains the following keys:

`Top`: int (top blanking in pixels)

`Bottom`: int (bottom blanking in pixels)

`Left`: int (left blanking in pixels)

`Right`: int (right blanking in pixels)

> [`TimelineItem:GetOutputBlanking`](../api/TimelineItem.md#getoutputblanking) returns an empty dictionary when the clip uses the timeline's output blanking. Use [`TimelineItem:GetUseTimelineForOutputBlanking`](../api/TimelineItem.md#getusetimelineforoutputblanking) and [`TimelineItem:SetUseTimelineForOutputBlanking`](../api/TimelineItem.md#setusetimelineforoutputblankingusetimelineoutputblanking) to query and control that flag.
