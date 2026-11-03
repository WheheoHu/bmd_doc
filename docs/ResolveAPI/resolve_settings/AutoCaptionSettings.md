---

title: Auto Caption Settings
displayed_sidebar: apiSidebar
---
This section covers the supported settings for the method [Timeline.CreateSubtitlesFromAudio(autoCaptionSettings)](../resolve_api/Timeline.md#createsubtitlesfromaudioautocaptionsettings)

The parameter setting is a dictionary containing the following keys:

```jsx
resolve.SUBTITLE_LANGUAGE: languageID (see below), [resolve.AUTO_CAPTION_AUTO by default]
resolve.SUBTITLE_CAPTION_PRESET: presetType (see below), [resolve.AUTO_CAPTION_SUBTITLE_DEFAULT by default]
resolve.SUBTITLE_CHARS_PER_LINE: Int Number between 1 and 60 inclusive [42 by default]
resolve.SUBTITLE_LINE_BREAK: lineBreakType (see below), [resolve.AUTO_CAPTION_LINE_SINGLE by default]
resolve.SUBTITLE_GAP: Int Number between 0 and 10 inclusive [0 by default]
resolve.SUBTITLE_EXTENDED_LANGUAGE_SUPPORT: Bool, enables Extended Language Support, which allows more languages [False by default]
```

`resolve.SUBTITLE_EXTENDED_LANGUAGE_SUPPORT` is new in 21.1.2. Extended languages (for example Arabic, Czech) require it to be True, and the call fails if the extended language models are not installed. Refer to [Studio and AI Scripting APIs](./StudioAndAIScriptingAPIs.md) for prerequisites.

languageIDs:

```jsx
resolve.AUTO_CAPTION_AUTO
resolve.AUTO_CAPTION_AFRIKAANS
resolve.AUTO_CAPTION_ARABIC
resolve.AUTO_CAPTION_ARMENIAN
resolve.AUTO_CAPTION_AZERBAIJANI
resolve.AUTO_CAPTION_BELARUSIAN
resolve.AUTO_CAPTION_BOSNIAN
resolve.AUTO_CAPTION_BULGARIAN
resolve.AUTO_CAPTION_CANTONESE
resolve.AUTO_CAPTION_CATALAN
resolve.AUTO_CAPTION_CROATIAN
resolve.AUTO_CAPTION_CZECH
resolve.AUTO_CAPTION_DANISH
resolve.AUTO_CAPTION_DUTCH
resolve.AUTO_CAPTION_ENGLISH
resolve.AUTO_CAPTION_ESTONIAN
resolve.AUTO_CAPTION_FINNISH
resolve.AUTO_CAPTION_FRENCH
resolve.AUTO_CAPTION_GALICIAN
resolve.AUTO_CAPTION_GERMAN
resolve.AUTO_CAPTION_GREEK
resolve.AUTO_CAPTION_HEBREW
resolve.AUTO_CAPTION_HINDI
resolve.AUTO_CAPTION_HUNGARIAN
resolve.AUTO_CAPTION_ICELANDIC
resolve.AUTO_CAPTION_INDONESIAN
resolve.AUTO_CAPTION_ITALIAN
resolve.AUTO_CAPTION_JAPANESE
resolve.AUTO_CAPTION_KANNADA
resolve.AUTO_CAPTION_KAZAKH
resolve.AUTO_CAPTION_KOREAN
resolve.AUTO_CAPTION_LATVIAN
resolve.AUTO_CAPTION_LITHUANIAN
resolve.AUTO_CAPTION_MACEDONIAN
resolve.AUTO_CAPTION_MALAY
resolve.AUTO_CAPTION_MANDARIN_SIMPLIFIED
resolve.AUTO_CAPTION_MANDARIN_TRADITIONAL
resolve.AUTO_CAPTION_MAORI
resolve.AUTO_CAPTION_MARATHI
resolve.AUTO_CAPTION_MYANMAR
resolve.AUTO_CAPTION_NEPALI
resolve.AUTO_CAPTION_NORWEGIAN
resolve.AUTO_CAPTION_PERSIAN
resolve.AUTO_CAPTION_POLISH
resolve.AUTO_CAPTION_PORTUGUESE
resolve.AUTO_CAPTION_ROMANIAN
resolve.AUTO_CAPTION_RUSSIAN
resolve.AUTO_CAPTION_SERBIAN
resolve.AUTO_CAPTION_SLOVAK
resolve.AUTO_CAPTION_SLOVENIAN
resolve.AUTO_CAPTION_SPANISH
resolve.AUTO_CAPTION_SWAHILI
resolve.AUTO_CAPTION_SWEDISH
resolve.AUTO_CAPTION_TAGALOG
resolve.AUTO_CAPTION_TAMIL
resolve.AUTO_CAPTION_THAI
resolve.AUTO_CAPTION_TURKISH
resolve.AUTO_CAPTION_UKRAINIAN
resolve.AUTO_CAPTION_URDU
resolve.AUTO_CAPTION_VIETNAMESE
resolve.AUTO_CAPTION_WELSH
```

presetTypes:

```jsx
resolve.AUTO_CAPTION_SUBTITLE_DEFAULT
resolve.AUTO_CAPTION_TELETEXT
resolve.AUTO_CAPTION_NETFLIX
```

lineBreakTypes:

```jsx
resolve.AUTO_CAPTION_LINE_SINGLE
resolve.AUTO_CAPTION_LINE_DOUBLE
```
