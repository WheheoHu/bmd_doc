# Transcription

This section covers the transcription data returned by [`MediaPoolItem:GetTranscription`](../api/MediaPoolItem.md#gettranscriptionusenestedcliptranscriptionfalse).

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
