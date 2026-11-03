---
title: Clone Tool Settings
displayed_sidebar: apiSidebar
---
This section covers the supported settings for the method [`MediaStorage:SetCloneToolSettings`](../resolve_api/MediaStorage.md#setclonetoolsettingsclonetoolsettings), and the status dictionary returned by [`MediaStorage:GetCloneStatus`](../resolve_api/MediaStorage.md#getclonestatus).

The cloneToolSettings setting is a dictionary containing the following keys:

`PreserveFolderName`: Bool (default: False)

`ChecksumType`: one of the checksum type constants below (default: `resolve.CLONE_CHECKSUM_TYPE_MD5`)

These settings apply to subsequent [`MediaStorage:StartCloneMedia`](../resolve_api/MediaStorage.md#startclonemediasourcedir-targetdirs) calls, and to the Clone Tool in the UI.

## Checksum types

`ChecksumType` can be one of the following constants:

```jsx
resolve.CLONE_CHECKSUM_TYPE_NONE
resolve.CLONE_CHECKSUM_TYPE_FILESIZE
resolve.CLONE_CHECKSUM_TYPE_CRC32
resolve.CLONE_CHECKSUM_TYPE_MD5
resolve.CLONE_CHECKSUM_TYPE_SHA256
resolve.CLONE_CHECKSUM_TYPE_SHA512
resolve.CLONE_CHECKSUM_TYPE_XXH_64
```

## Clone status

[`MediaStorage:GetCloneStatus`](../resolve_api/MediaStorage.md#getclonestatus) returns a dictionary containing the following keys:

`JobStatus`: string (options: "Complete", "Cloning", "Cancelled", "Failed"). This is "Complete" when no clone job has been started yet

`CompletionPercentage`: float (progress from 0.0 to 100.0)

`Error`: string (error message, set when `JobStatus` is "Failed")
