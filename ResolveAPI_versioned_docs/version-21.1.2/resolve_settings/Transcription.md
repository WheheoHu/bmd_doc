---
title: Transcription
displayed_sidebar: apiSidebar
---
This section covers the transcription data returned by [`MediaPoolItem:GetTranscription`](../resolve_api/MediaPoolItem.md#gettranscriptionusenestedcliptranscriptionfalse) and accepted by [`MediaPoolItem:SetTranscription`](../resolve_api/MediaPoolItem.md#settranscriptiontranscription).

The returned dictionary contains the following keys:

`language`: string (transcription language code)

`segments`: list of segment dictionaries, described below

## Segments

Each segment in `segments` is a dictionary containing the following keys:

`start`: string (start timecode, example: "01:00:02:05")

`end`: string (end timecode, example: "01:00:04:10")

`text`: string (concatenated text of all words in the segment. "(...)" denotes silence)

`speaker`: string (speaker name if speaker detection was used, `None` otherwise)

`words`: list of word dictionaries, described below

## Words

Each word in a segment's `words` list is a dictionary containing the following keys:

`start`: string (start timecode)

`end`: string (end timecode)

`text`: string (word text. "(...)" denotes silence)

## Setting a transcription

> New in 21.1.2

[`MediaPoolItem:SetTranscription`](../resolve_api/MediaPoolItem.md#settranscriptiontranscription) replaces the item's transcription with the given transcription dict, as returned by [`MediaPoolItem:GetTranscription`](../resolve_api/MediaPoolItem.md#gettranscriptionusenestedcliptranscriptionfalse). Note the following:

- Requires DaVinci Resolve Studio.
- `segments` must not be empty. Use [`MediaPoolItem:ClearTranscription`](../resolve_api/MediaPoolItem.md#cleartranscriptionclearnestedcliptranscriptionfalse) to remove a transcription instead.
- `language` is optional; the item keeps its current transcription language when it is omitted.
- Each segment must have a non-empty `words` list, and each word must have a `text`.
- Word `start` and `end` timecodes are optional. Missing timings are interpolated between the surrounding known timings, so a segment whose words carry no timing at all has them distributed evenly over the segment.
- Each segment must have a `start` and `end` unless its first and last words have start/end timecodes.
- `speaker` is optional. Unknown speaker names are enrolled automatically in the project, which makes them available to the transcription UI and to subsequent transcriptions.
- Segments and the words within them must be in ascending timecode order, and segments must not overlap.
- Words with the silence text "(...)" are ignored, as silence is derived from the gaps between the remaining words.
- For a timeline the transcription is set "as nested clip", matching `GetTranscription(True)`. The timeline transcription itself cannot be set, as it is generated from the transcriptions of the timeline's clips.
