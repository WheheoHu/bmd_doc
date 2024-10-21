This section covers the supported settings for the method Timeline.CreateSubtitlesFromAudio(autoCaptionSettings)

The parameter setting is a dictionary containing the following keys:

```jsx
resolve.SUBTITLE_LANGUAGE: languageID (see below), [resolve.AUTO_CAPTION_AUTO by default]
resolve.SUBTITLE_CAPTION_PRESET: presetType (see below), [resolve.AUTO_CAPTION_SUBTITLE_DEFAULT by default]
resolve.SUBTITLE_CHARS_PER_LINE: Int Number between 1 and 60 inclusive [42 by default]
resolve.SUBTITLE_LINE_BREAK: lineBreakType (see below), [resolve.AUTO_CAPTION_LINE_SINGLE by default]
resolve.SUBTITLE_GAP: Int Number between 0 and 10 inclusive [0 by default]
```

languageIDs:

```jsx
resolve.AUTO_CAPTION_AUTO
resolve.AUTO_CAPTION_DANISH
resolve.AUTO_CAPTION_DUTCH
resolve.AUTO_CAPTION_ENGLISH
resolve.AUTO_CAPTION_FRENCH
resolve.AUTO_CAPTION_GERMAN
resolve.AUTO_CAPTION_ITALIAN
resolve.AUTO_CAPTION_JAPANESE
resolve.AUTO_CAPTION_KOREAN
resolve.AUTO_CAPTION_MANDARIN_SIMPLIFIED
resolve.AUTO_CAPTION_MANDARIN_TRADITIONAL
resolve.AUTO_CAPTION_NORWEGIAN
resolve.AUTO_CAPTION_PORTUGUESE
resolve.AUTO_CAPTION_RUSSIAN
resolve.AUTO_CAPTION_SPANISH
resolve.AUTO_CAPTION_SWEDISH
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
