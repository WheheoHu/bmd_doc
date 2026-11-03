---
title: Effect Info
displayed_sidebar: apiSidebar
---
This section covers the effect info dictionary returned by [`Resolve:GetEffectsList`](../resolve_api/Resolve.md#geteffectslistmediatype) (one per available effect) and [`Effect:GetInfo`](../resolve_api/Effect.md#getinfo).

The effect info dictionary contains the following keys:

`category`: string (options: "fusion", "ofx", "audio")

`id`: string (unique identifier of the effect)

`name`: string (display name of the effect)

The `category` and `id` are the arguments of [`TimelineItem:AddEffect`](../resolve_api/TimelineItem.md#addeffectcategory-id) / [`PhotoAlbumItem:AddEffect`](../resolve_api/PhotoAlbumItem.md#addeffectcategory-id).
