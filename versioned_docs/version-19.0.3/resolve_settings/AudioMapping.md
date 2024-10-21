This section covers the output for [mpItem.GetAudioMapping()](../resolve_api/MediaPoolItem.md#getaudiomapping) and [timelineItem.GetSourceAudioChannelMapping()](../resolve_api/TimelineItem.md#getsourceaudiochannelmapping)
Mapping format (json result) is similar for mpItem and timelineItem.

This section will follow an example of an mpItem that has audio from its embedded source, and from two other clips that are linked to it.
The audio clip attributes of this mpItem will show 3 tracks.

Assume that 
- (A) the embedded track is of format/type 'stereo' (2 channels),
- (B) linked clip 1 track is of format/type '7.1' (8 channels),
- (C) linked clip 2 track is '5.1' (6 channels)

and assume that the format/type was not changed further.

[mpItem.GetAudioMapping()](../resolve_api/MediaPoolItem.md#getaudiomapping) returns a string of the form:
```python
{
      "embedded_audio_channels": 2,                 # Total number of embedded channels across all tracks
      "linked_audio": {                             # A list of only linked audio information
        "1": {                                      # Same as (B) above
          "channels": 8,
          "path": FILE_PATH
        },
        "2": {                                      # Same as (C) above
          "channels": 6,
          "path": FILE_PATH
        }
      },
      "track_mapping": {                            # Listing of all the tracks. Output here will match what is seen in the audio clip attributes menu on the UI.
        "1": {
          "channel_idx": [1, 3],                    # In this case, channel index '1' corresponds to first channel of (A), channel index '3' will correspond to the first channel of (B)
          "mute": true,                             # Mute 'true' indicates track is muted. Valid value is true/false.
          "type": "Stereo"                          # The length of the 'channel_idx' list will always correspond to the number of channels the format specified in 'type' will allow.
                                                    # In this case, 'Stereo' allows 2 channels and so the length of the 'channel_idx' list is 2.
        },
        "2": {
          "channel_idx": [3, 4, 5, 6, 7, 8, 9, 10], # Channel indices here are following the default for (B)
          "mute": true,
          "type": "7.1"
        },
        "3": {
          "channel_idx": [1, 1, 1, 1, 15, 16],      # The first four channels for this track correspond to the first channel of (A), and the final 2 follow the default for (C)
          "mute": false,
          "type": "5.1"
        }
      }
    }
```