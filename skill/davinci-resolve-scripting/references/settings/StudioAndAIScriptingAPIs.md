# Studio and AI Scripting APIs

The DaVinci Resolve scripting APIs cover a common superset of functions for both the Free and Studio versions of the application.

API calls can return with a False status (or an appropriate error status) when:

- the function references a Studio function from the free DaVinci Resolve version.
- the minimum system requirements of the function are not satisfied. To check if your system is capable, invoke the function from the GUI and check for error dialogs.
- the requisite Extras have not been downloaded.

The following functions require one or more Extras downloads:

- [`Folder:AnalyzeForIntellisearch`](../api/Folder.md#analyzeforintellisearchidentifyfaces-isbettermode) / [`MediaPoolItem:AnalyzeForIntellisearch`](../api/MediaPoolItem.md#analyzeforintellisearchidentifyfaces-isbettermode) with `isBetterMode=False` requires AI IntelliSearch - Faster.
- [`Folder:AnalyzeForIntellisearch`](../api/Folder.md#analyzeforintellisearchidentifyfaces-isbettermode) / [`MediaPoolItem:AnalyzeForIntellisearch`](../api/MediaPoolItem.md#analyzeforintellisearchidentifyfaces-isbettermode) with `isBetterMode=True` requires AI IntelliSearch - Better.
- [`Folder:AnalyzeForSlate`](../api/Folder.md#analyzeforslatemarkercolor) / [`MediaPoolItem:AnalyzeForSlate`](../api/MediaPoolItem.md#analyzeforslatemarkercolor) requires AI Slate ID.
- [`Folder:TranscribeAudio`](../api/Folder.md#transcribeaudiousespeakerdetectionnone) / [`MediaPoolItem:TranscribeAudio`](../api/MediaPoolItem.md#transcribeaudiousespeakerdetectionnone) — transcription workflows with extended language models. Languages from built in models will be used as a fallback if unavailable.
- [`Project:GenerateSpeech`](../api/Project.md#generatespeechspeechgenerationsettings-timecode) requires AI Speech Generator.

For a successful API call, the required package will need to be installed before script invocation. Go to the DaVinci Resolve Studio application menu, open the Extras Download Manager and install the required package.
