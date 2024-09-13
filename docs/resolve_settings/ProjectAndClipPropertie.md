This section covers additional notes for the functions "[`Project:GetSetting`](https://www.notion.so/GetSetting-settingName-0318c9ff60804dcabee9d9ef0df4201b?pvs=21)", "[`Project:SetSetting`](https://www.notion.so/SetSetting-settingName-settingValue-cc09998823d24e7caa8ff77f47e5581e?pvs=21)", "[`Timeline:GetSetting`](https://www.notion.so/GetSetting-settingName-8995cb59faa140809a97af6790657fbf?pvs=21)", "[`Timeline:SetSetting`](https://www.notion.so/SetSetting-settingName-settingValue-e9984b80ac364af8ac126bbe9491c43b?pvs=21)", "[`MediaPoolItem:GetClipProperty`](https://www.notion.so/GetClipProperty-propertyName-None-451c17f64f2044cf9efa3647953b64fe?pvs=21)" and"[`MediaPoolItem:SetClipProperty`](https://www.notion.so/SetClipProperty-propertyName-propertyValue-92f7ef412b444578a70bd961b525a5fb?pvs=21)". These functions are used to get and set properties otherwise available to the user through the Project Settings and the Clip Attributes dialogs.

The functions follow a key-value pair format, where each property is identified by a key (the `settingName` or `propertyName` parameter) and possesses a `value` (typically a text value). Keys and values are designed to be easily correlated with parameter names and values in the Resolve UI. [Explicitly enumerated values](https://www.notion.so/DaVinci-Resolve-Python-API-7c4f1038a36f44818b631ec7e4a537fa?pvs=21) for some parameters are listed below.

Some properties may be read only - these include intrinsic clip properties like date created or sample rate, and properties that can be disabled in specific application contexts (e.g. custom colorspaces in an ACES workflow, or output sizing parameters when behavior is set to match timeline)

**Getting values:**
Invoke "[`Project:GetSetting`](https://www.notion.so/GetSetting-settingName-0318c9ff60804dcabee9d9ef0df4201b?pvs=21)", "[`Timeline:GetSetting`](https://www.notion.so/GetSetting-settingName-8995cb59faa140809a97af6790657fbf?pvs=21)" or "[`MediaPoolItem:GetClipProperty`](https://www.notion.so/GetClipProperty-propertyName-None-451c17f64f2044cf9efa3647953b64fe?pvs=21)" with the appropriate property key. 

To get a snapshot of all queryable properties (keys and values), you can call "[`Project:GetSetting`](https://www.notion.so/GetSetting-settingName-0318c9ff60804dcabee9d9ef0df4201b?pvs=21)", "[`Timeline:GetSetting`](https://www.notion.so/GetSetting-settingName-8995cb59faa140809a97af6790657fbf?pvs=21)" or "[`MediaPoolItem:GetClipProperty`](https://www.notion.so/GetClipProperty-propertyName-None-451c17f64f2044cf9efa3647953b64fe?pvs=21)" without parameters (or with a NoneType or a blank property key). 

Using specific keys to query individual properties will be faster. Note that getting a property using an invalid key will return a trivial result.

**Setting values:**
Invoke "[`Project:SetSetting`](https://www.notion.so/SetSetting-settingName-settingValue-cc09998823d24e7caa8ff77f47e5581e?pvs=21)", "[`Timeline:SetSetting`](https://www.notion.so/SetSetting-settingName-settingValue-e9984b80ac364af8ac126bbe9491c43b?pvs=21)" or "[`MediaPoolItem:SetClipProperty`](https://www.notion.so/SetClipProperty-propertyName-propertyValue-92f7ef412b444578a70bd961b525a5fb?pvs=21)" with the appropriate property key and a valid value. 

When setting a parameter, please check the return value to ensure the success of the operation. You can troubleshoot the validity of keys and values by setting the desired result from the UI and checking property snapshots before and after the change.

- The following Project properties have specifically enumerated values:
    - "timelineFrameRate" - the property value is one of the frame rates available to the user in project settings under "Timeline frame rate" option. Drop Frame can be configured for supported frame rates by appending the frame rate with "DF", e.g. "29.97 DF" will enable drop frame and "29.97" will disable drop frame
    Affects:
    • x = Project:GetSetting('timelineFrameRate') and Project:SetSetting('timelineFrameRate', x)
    - "superScale" - the property value is an enumerated integer between 0 and 3 with these meanings: 0=Auto, 1=no scaling, and 2, 3 and 4 represent the Super Scale multipliers 2x, 3x and 4x. 
    for super scale multiplier '2x Enhanced', exactly 4 arguments must be passed as outlined below. If less than 4 arguments are passed, it will default to 2x.
    Affects:
    • x = Project:GetSetting('superScale') and Project:SetSetting('superScale', x)
    • for '2x Enhanced' --> Project:SetSetting('superScale', 2, sharpnessValue, noiseReductionValue), where sharpnessValue is a float in the range [0.0, 1.0] and noiseReductionValue is a float in the range [0.0, 1.0]
- The following Clip properties have specifically enumerated values:
    - "superScale" - the property value is an enumerated integer between 1 and 3 with these meanings: 1=no scaling, and 2, 3 and 4 represent the Super Scale multipliers 2x, 3x and 4x.
    for super scale multiplier '2x Enhanced', exactly 4 arguments must be passed as outlined below. If less than 4 arguments are passed, it will default to 2x.
    Affects:
    • x = MediaPoolItem:GetClipProperty('Super Scale') and MediaPoolItem:SetClipProperty('Super Scale', x)
    • for '2x Enhanced' --> MediaPoolItem:SetClipProperty('Super Scale', 2, sharpnessValue, noiseReductionValue), where sharpnessValue is a float in the range [0.0, 1.0] and noiseReductionValue is a float in the range [0.0, 1.0]
