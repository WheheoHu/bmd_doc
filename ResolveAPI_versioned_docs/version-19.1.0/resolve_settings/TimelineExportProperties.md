---

title: Timeline Export Properties

---

This section covers the parameters for the argument [Export](https://www.notion.so/Export-fileName-exportType-exportSubtype-3e82fbc068734c359cd37c4d5e784c2e?pvs=21)(fileName, exportType, exportSubtype).

exportType can be one of the following constants:

```jsx
resolve.EXPORT_AAF
resolve.EXPORT_DRT
resolve.EXPORT_EDL
resolve.EXPORT_FCP_7_XML
resolve.EXPORT_FCPXML_1_3
resolve.EXPORT_FCPXML_1_4
resolve.EXPORT_FCPXML_1_5
resolve.EXPORT_FCPXML_1_6
resolve.EXPORT_FCPXML_1_7
resolve.EXPORT_FCPXML_1_8
resolve.EXPORT_FCPXML_1_9
resolve.EXPORT_FCPXML_1_10
resolve.EXPORT_HDR_10_PROFILE_A
resolve.EXPORT_HDR_10_PROFILE_B
resolve.EXPORT_TEXT_CSV
resolve.EXPORT_TEXT_TAB
resolve.EXPORT_DOLBY_VISION_VER_2_9
resolve.EXPORT_DOLBY_VISION_VER_4_0
resolve.EXPORT_DOLBY_VISION_VER_5_1
resolve.EXPORT_OTIO
```
> New in 19.0.0

```jsx
resolve.EXPORT_ALE
resolve.EXPORT_ALE_CDL
```

exportSubtype can be one of the following enums:

```jsx
resolve.EXPORT_NONE
resolve.EXPORT_AAF_NEW
resolve.EXPORT_AAF_EXISTING
resolve.EXPORT_CDL
resolve.EXPORT_SDL
resolve.EXPORT_MISSING_CLIPS
```

Please note that exportSubType is a required parameter for `resolve.EXPORT_AAF` and `resolve.EXPORT_EDL`. 

For rest of the exportType, exportSubtype is ignored.

When exportType is `resolve.EXPORT_AAF`, valid exportSubtype values are `resolve.EXPORT_AAF_NEW` and `resolve.EXPORT_AAF_EXISTING`.

When exportType is `resolve.EXPORT_EDL`, valid exportSubtype values are `resolve.EXPORT_CDL`, `resolve.EXPORT_SDL`, `resolve.EXPORT_MISSING_CLIPS`and`resolve.EXPORT_NONE`.

<aside>
💡 Note: Replace 'resolve.' when using the constants above, if a different Resolve class instance name is used.

</aside>
