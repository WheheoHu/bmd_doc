---

title: Keyframe Mode Information
displayed_sidebar: apiSidebar

---
This section covers additional notes for the functions [Resolve.GetKeyframeMode()](../resolve_api/Resolve.md#getkeyframemode) and [Resolve.SetKeyframeMode(keyframeMode)](../resolve_api/Resolve.md#setkeyframemodekeyframemode).

'keyframeMode' can be one of the following enums:
```python
resolve.KEYFRAME_MODE_ALL     == 0
resolve.KEYFRAME_MODE_COLOR   == 1
resolve.KEYFRAME_MODE_SIZING  == 2
```

Integer values returned by Resolve.GetKeyframeMode() will correspond to the enums above.