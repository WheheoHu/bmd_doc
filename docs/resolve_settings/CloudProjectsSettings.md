This section covers additional notes for the functions:
[CreateCloudProject](https://www.notion.so/CreateCloudProject-cloudSettings-47ca8f799d5e46219ecb20c27fb12ed2?pvs=21)
[ImportCloudProject](https://www.notion.so/ImportCloudProject-filePath-cloudSettings-1ef1a2d76e3c4acc9ab067e12c2d502e?pvs=21) 
[RestoreCloudProject](https://www.notion.so/RestoreCloudProject-folderPath-cloudSettings-877bef1ebf8a4c8ea320b43c8f2cbb14?pvs=21)

All three functions take in a cloudSettings dict, that have the following keys:

```jsx
resolve.CLOUD_SETTING_PROJECT_NAME: String, ["" by default]
resolve.CLOUD_SETTING_PROJECT_MEDIA_PATH: String, ["" by default]
resolve.CLOUD_SETTING_IS_COLLAB: Bool, [False by default]
resolve.CLOUD_SETTING_SYNC_MODE: syncMode (see below), [resolve.CLOUD_SYNC_PROXY_ONLY by default]
resolve.CLOUD_SETTING_IS_CAMERA_ACCESS: Bool [False by default]
```

Where syncMode is one of the following values:

```jsx
resolve.CLOUD_SYNC_NONE
resolve.CLOUD_SYNC_PROXY_ONLY
resolve.CLOUD_SYNC_PROXY_AND_ORIG
```


💡 [CreateCloudProject](https://www.notion.so/CreateCloudProject-cloudSettings-47ca8f799d5e46219ecb20c27fb12ed2?pvs=21),[ImportCloudProject](https://www.notion.so/ImportCloudProject-filePath-cloudSettings-1ef1a2d76e3c4acc9ab067e12c2d502e?pvs=21),[RestoreCloudProject](https://www.notion.so/RestoreCloudProject-folderPath-cloudSettings-877bef1ebf8a4c8ea320b43c8f2cbb14?pvs=21) require `resolve.PROJECT_MEDIA_PATH` to be defined.
[CreateCloudProject](https://www.notion.so/CreateCloudProject-cloudSettings-47ca8f799d5e46219ecb20c27fb12ed2?pvs=21) also requires `resolve.PROJECT_NAME` to be defined.
