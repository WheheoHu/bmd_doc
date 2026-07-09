---

title: Speech Generation Settings
displayed_sidebar: apiSidebar
---
This section covers the supported settings for the method [Project.GenerateSpeech(\{speechGenerationSettings\}, timecode)](../resolve_api/Project.md#generatespeechspeechgenerationsettings-timecode)

The speechGenerationSettings is a dictionary containing the following keys:

`TextInput`: string (Max 350 chars)

`VoiceModel`: string (example: "Female 1", "Male 1", "Custom Voice")

`CustomVoiceFile`: string (Full Path of Voice File)

`Speed`: int

`Variation`: int

`Pitch`: int

`GenerationID`: int

`Filename`: string

`AddToTimeline`: bool

`AudioTrack`: int
