# Keyframe Mode Information

This section covers additional notes for the functions [Resolve.GetKeyframeMode()](../api/Resolve.md#getkeyframemode) and [Resolve.SetKeyframeMode(keyframeMode)](../api/Resolve.md#setkeyframemodekeyframemode).

'keyframeMode' can be one of the following enums:
```python
resolve.KEYFRAME_MODE_ALL     == 0
resolve.KEYFRAME_MODE_COLOR   == 1
resolve.KEYFRAME_MODE_SIZING  == 2
```

Integer values returned by Resolve.GetKeyframeMode() will correspond to the enums above.
