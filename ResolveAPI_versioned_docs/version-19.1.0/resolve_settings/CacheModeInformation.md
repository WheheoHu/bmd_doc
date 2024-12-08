---

title: Cache Mode Information
---


This section covers additional notes for the functions [Graph:GetNodeCacheMode(nodeIndex)](../resolve_api/Graph.md#getnodecachemodenodeindex) and [Graph:SetNodeCacheMode(nodeIndex, cache_value)](../resolve_api/Graph.md#setnodecachemodenodeindex-cache_value).

cache_value is an enumerated integer with one of the following values:
- resolve.CACHE_AUTO_ENABLED  = -1
- resolve.CACHE_DISABLED      =  0
- resolve.CACHE_ENABLED       =  1

Integer values returned by Graph:GetNodeCacheMode(nodeIndex) will correspond to the enums above.