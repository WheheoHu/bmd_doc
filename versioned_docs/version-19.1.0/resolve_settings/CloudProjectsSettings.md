---
title: Cloud Projects Settings
---

This section covers additional notes for the functions:
[LoadCloudProject](../resolve_api/ProjectManager.md#loadcloudprojectcloudsettings),
[CreateCloudProject](../resolve_api/ProjectManager.md#createcloudprojectcloudsettings),
[ImportCloudProject](../resolve_api/ProjectManager.md#importcloudprojectfilepath-cloudsettings), 
[RestoreCloudProject](../resolve_api/ProjectManager.md#restorecloudprojectfolderpath-cloudsettings)

All four functions take in a cloudSettings dict, that have the following keys:

```jsx
resolve.CLOUD_SETTING_PROJECT_NAME: String, ["" by default]
resolve.CLOUD_SETTING_PROJECT_MEDIA_PATH: String, ["" by default]
resolve.CLOUD_SETTING_IS_COLLAB: Bool, [False by default]
resolve.CLOUD_SETTING_SYNC_MODE: syncMode (see below), [resolve.CLOUD_SYNC_PROXY_ONLY by default]
resolve.CLOUD_SETTING_IS_CAMERA_ACCESS: Bool [False by default]
```

:::note

[ProjectManager:LoadCloudProject](../resolve_api/ProjectManager.md#loadcloudprojectcloudsettings) only honour the following keys:

```jsx
resolve.CLOUD_SETTING_PROJECT_NAME
resolve.CLOUD_SETTING_PROJECT_MEDIA_PATH
resolve.CLOUD_SETTING_SYNC_MODE.
```

Only 1st load on a given system will honour all 3 settings. Subsequent loads will honour only `resolve.CLOUD_SETTING_PROJECT_NAME`

:::

Where syncMode is one of the following values:

```jsx
resolve.CLOUD_SYNC_NONE;
resolve.CLOUD_SYNC_PROXY_ONLY;
resolve.CLOUD_SYNC_PROXY_AND_ORIG;
```

:::note

[LoadCloudProject](../resolve_api/ProjectManager.md#loadcloudprojectcloudsettings), [CreateCloudProject](../resolve_api/ProjectManager.md#createcloudprojectcloudsettings), [ImportCloudProject](../resolve_api/ProjectManager.md#importcloudprojectfilepath-cloudsettings), [RestoreCloudProject](../resolve_api/ProjectManager.md#restorecloudprojectfolderpath-cloudsettings) require `resolve.PROJECT_MEDIA_PATH` to be defined.

[LoadCloudProject](../resolve_api/ProjectManager.md#loadcloudprojectcloudsettings) and [CreateCloudProject](../resolve_api/ProjectManager.md#createcloudprojectcloudsettings) also requires `resolve.PROJECT_NAME` to be defined.

:::
