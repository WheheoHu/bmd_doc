# Effect

> New in 21.1.2

An Effect is a Fusion, OFX or Audio effect applied to a [TimelineItem](./TimelineItem.md) or [PhotoAlbumItem](./PhotoAlbumItem.md). Effect objects are returned by `AddEffect` and `GetEffects` on those items.

### GetInfo()
Return Type: `{effectInfo}`

Returns information about the effect, or None if it is no longer applied.

Refer to [Effect Info](../settings/EffectInfo.md) for the returned keys.

### GetIsEnabled()
Return Type: `Bool`

Returns whether the effect is enabled.

### SetIsEnabled(enabled)
Return Type: `Bool`

Sets whether the effect is enabled (Bool).

### GetFusionComp()
Return Type: `fusionComp`

Returns the Fusion composition object for this effect, or None if it's not a Fusion effect.

### GetIndex()
Return Type: `int`

Returns the effect's 1-based index among its siblings' effects of the same category, or None if it's no longer applied.

### SetIndex(index)
Return Type: `Bool`

Moves the effect to the given 1-based index (int) among its sibling effects, changing the order in which effects are applied.
