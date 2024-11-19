---

title: Project and Clip Properties

---

This section covers additional notes for the functions [`Project:GetSetting`](../resolve_api/Project.md#getsettingsettingname), [`Project:SetSetting`](../resolve_api/Project.md#setsettingsettingname-settingvalue), [`Timeline:GetSetting`](../resolve_api/Timeline.md#getsettingsettingname), [`Timeline:SetSetting`](../resolve_api/Timeline.md#setsettingsettingname-settingvalue), [`MediaPoolItem:GetClipProperty`](../resolve_api/MediaPoolItem.md#getclippropertypropertynamenone) and[`MediaPoolItem:SetClipProperty`](../resolve_api/MediaPoolItem.md#setclippropertypropertyname-propertyvalue). These functions are used to get and set properties otherwise available to the user through the Project Settings and the Clip Attributes dialogs.

The functions follow a key-value pair format, where each property is identified by a key (the `settingName` or `propertyName` parameter) and possesses a `value` (typically a text value). Keys and values are designed to be easily correlated with parameter names and values in the Resolve UI. [Explicitly enumerated values](#specifically-enumerated-values) for some parameters are listed below.

Some properties may be read only - these include intrinsic clip properties like date created or sample rate, and properties that can be disabled in specific application contexts (e.g. custom colorspaces in an ACES workflow, or output sizing parameters when behavior is set to match timeline)

## Getting values:
Invoke [`Project:GetSetting`](../resolve_api/Project.md#getsettingsettingname), [`Timeline:GetSetting`](../resolve_api/Timeline.md#getsettingsettingname) or [`MediaPoolItem:GetClipProperty`](../resolve_api/MediaPoolItem.md#getclippropertypropertynamenone) with the appropriate property key. 

To get a snapshot of all queryable properties (keys and values), you can call [`Project:GetSetting`](../resolve_api/Project.md#getsettingsettingname), [`Timeline:GetSetting`](../resolve_api/Timeline.md#getsettingsettingname) , [`MediaPoolItem:GetClipProperty`](../resolve_api/MediaPoolItem.md#getclippropertypropertynamenone) without parameters (or with a NoneType or a blank property key). 

Using specific keys to query individual properties will be faster. Note that getting a property using an invalid key will return a trivial result.

## Setting values:
Invoke [`Project:SetSetting`](../resolve_api/Project.md#setsettingsettingname-settingvalue), [`Timeline:SetSetting`](../resolve_api/Timeline.md#setsettingsettingname-settingvalue) or [`MediaPoolItem:SetClipProperty`](../resolve_api/MediaPoolItem.md#setclippropertypropertyname-propertyvalue) with the appropriate property key and a valid value. 

When setting a parameter, please check the return value to ensure the success of the operation. You can troubleshoot the validity of keys and values by setting the desired result from the UI and checking property snapshots before and after the change.

## Specifically enumerated values
### Project properties
#### "timelineFrameRate" 
the property value is one of the frame rates available to the user in project settings under "Timeline frame rate" option. Drop Frame can be configured for supported frame rates by appending the frame rate with "DF", e.g. "29.97 DF" will enable drop frame and "29.97" will disable drop frame

Affects:
• x = Project:GetSetting('timelineFrameRate') and Project:SetSetting('timelineFrameRate', x)
#### "superScale" 
the property value is an enumerated integer between 0 and 3 with these meanings: 0=Auto, 1=no scaling, and 2, 3 and 4 represent the Super Scale multipliers 2x, 3x and 4x. 
for super scale multiplier '2x Enhanced', exactly 4 arguments must be passed as outlined below. If less than 4 arguments are passed, it will default to 2x.

Affects:
-  x = Project:GetSetting('superScale') and Project:SetSetting('superScale', x)
-   for '2x Enhanced' --> [Project:SetSetting('superScale', 2, sharpnessValue, noiseReductionValue)](../resolve_api/Project.md#setsettingsettingname-settingvalue), where sharpnessValue is a `float` in the range [0.0, 1.0] and noiseReductionValue is a `float` in the range [0.0, 1.0]

### Clip properties
#### "superScale" 
the property value is an enumerated integer between 1 and 3 with these meanings: 1=no scaling, and 2, 3 and 4 represent the Super Scale multipliers 2x, 3x and 4x.

for super scale multiplier '2x Enhanced', exactly 4 arguments must be passed as outlined below. If less than 4 arguments are passed, it will default to 2x.

Affects:
-  x = MediaPoolItem:GetClipProperty('Super Scale') and MediaPoolItem:SetClipProperty('Super Scale', x)
-   for '2x Enhanced' --> MediaPoolItem:SetClipProperty('Super Scale', 2, sharpnessValue, noiseReductionValue), where sharpnessValue is a float in the range [0.0, 1.0] and noiseReductionValue is a float in the range [0.0, 1.0]

------
> New in 19.0.0

"Cloud Sync" = the property value is an enumerated integer that will correspond to one of the following enums:
```js
resolve.CLOUD_SYNC_DEFAULT                == -1
resolve.CLOUD_SYNC_DOWNLOAD_IN_QUEUE      == 0
resolve.CLOUD_SYNC_DOWNLOAD_IN_PROGRESS   == 1
resolve.CLOUD_SYNC_DOWNLOAD_SUCCESS       == 2
resolve.CLOUD_SYNC_DOWNLOAD_FAIL          == 3
resolve.CLOUD_SYNC_DOWNLOAD_NOT_FOUND     == 4
resolve.CLOUD_SYNC_UPLOAD_IN_QUEUE        == 5
resolve.CLOUD_SYNC_UPLOAD_IN_PROGRESS     == 6
resolve.CLOUD_SYNC_UPLOAD_SUCCESS         == 7
resolve.CLOUD_SYNC_UPLOAD_FAIL            == 8
resolve.CLOUD_SYNC_UPLOAD_NOT_FOUND       == 9
// New in 19.0.1
resolve.CLOUD_SYNC_SUCCESS                == 10
```