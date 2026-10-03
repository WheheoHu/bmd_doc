# Job Status

This section covers the status dictionaries returned by [`Project:RenderWithQuickExport`](../api/Project.md#renderwithquickexportpreset_name-param_dict) and by the Project job status methods, which report the progress of the active render or analysis operation.

When no such operation is active, each status method returns a dictionary containing only `JobStatus` set to "Inactive". The other keys are only set while the job is running, on completion or on failure, as noted per key.

## Quick Export render status

[`Project:RenderWithQuickExport`](../api/Project.md#renderwithquickexportpreset_name-param_dict) and [`Project:GetRenderWithQuickExportStatus`](../api/Project.md#getrenderwithquickexportstatus) return a dictionary containing the following keys:

`JobStatus`: string (options: "Rendering", "Render Complete", "Render Failed", "Render Cancelled", "Upload Pending", "Uploading", "Upload Completed", "Upload Failed", "Upload Cancelled", "Inactive", "Unexpected")

`CompletionPercentage`: int (set for rendering jobs)

`TimeTakenToRenderInMs`: int (time taken to render in milliseconds, set on completion)

`EstimatedTimeRemainingInMs`: int (time remaining to render in milliseconds, set for rendering jobs)

`Error`: string (error details, set on failure)

## Transcribe audio status

[`Project:GetTranscribeAudioStatus`](../api/Project.md#gettranscribeaudiostatus) reports on the active [`Folder:TranscribeAudio`](../api/Folder.md#transcribeaudiousespeakerdetectionnone-transcribeasnestedclipfalse) / [`MediaPoolItem:TranscribeAudio`](../api/MediaPoolItem.md#transcribeaudiousespeakerdetectionnone-transcribeasnestedclipfalse) operation, and returns a dictionary containing the following keys:

`JobStatus`: string (options: "Inactive", "Initializing", "Analyzing", "Cancelling", "Cancelled", "Complete")

`CompletionPercentage`: int (set while transcription is in progress)

`CurrentClipIndex`: int (index of the clip being analyzed, set while transcription is in progress)

`TotalClips`: int (total clips to analyze, set while transcription is in progress)

`EstimatedTimeRemaining`: int (time remaining to complete transcription in seconds, set while transcription is in progress)

`Error`: string (error details, set on failure)

## Slate analysis status

[`Project:GetAnalyzeForSlateStatus`](../api/Project.md#getanalyzeforslatestatus) reports on the active [`Folder:AnalyzeForSlate`](../api/Folder.md#analyzeforslatemarkercolor) / [`MediaPoolItem:AnalyzeForSlate`](../api/MediaPoolItem.md#analyzeforslatemarkercolor) operation, and returns a dictionary containing the following keys:

`JobStatus`: string (options: "Inactive", "Initializing", "Analyzing", "Cancelling", "Cancelled", "Complete", "Failed")

`CompletionPercentage`: int (set during analysis)

`CurrentClipIndex`: int (index of the clip being analyzed, set during analysis)

`TotalClips`: int (total clips to analyze, set during analysis)

`EstimatedTimeRemaining`: int (time remaining to complete analysis in seconds, set during analysis)

`Error`: string (error details, set on failure)

## Smart Reframe status

[`Project:GetSmartReframeStatus`](../api/Project.md#getsmartreframestatus) reports on the active [`TimelineItem:SmartReframe`](../api/TimelineItem.md#smartreframe) operation, and returns a dictionary containing the following keys:

`JobStatus`: string (options: "Inactive", "Initializing", "Analyzing", "Cancelled", "Complete", "Failed")

`CompletionPercentage`: int (set during analysis)

`AnalysisSpeed`: float (analysis speed in fps, set during analysis)

`EstimatedTimeRemaining`: int (time remaining to complete smart reframe in seconds, set during analysis)

`Error`: string (error details, set on failure)

## Detect scene cuts status

[`Project:GetDetectSceneCutsStatus`](../api/Project.md#getdetectscenecutsstatus) reports on the active [`Timeline:DetectSceneCuts`](../api/Timeline.md#detectscenecuts) operation, and returns a dictionary containing the following keys:

`JobStatus`: string (options: "Inactive", "Analyzing", "Complete", "Cancelled")

`CompletionPercentage`: int (set during analysis)

`AnalysisSpeed`: float (analysis speed in fps, set during analysis)

`EstimatedTimeRemaining`: int (estimated time remaining in seconds, set during analysis)

## Create subtitles from audio status

[`Project:GetCreateSubtitlesFromAudioStatus`](../api/Project.md#getcreatesubtitlesfromaudiostatus) reports on the active [`Timeline:CreateSubtitlesFromAudio`](../api/Timeline.md#createsubtitlesfromaudioautocaptionsettings) operation, and returns a dictionary containing the following keys:

`JobStatus`: string (options: "Inactive", "Initializing", "Analyzing", "Cancelling", "Cancelled", "Complete", "Failed")

`CompletionPercentage`: int (set during analysis)

`AnalysisSpeed`: float (analysis speed, set during analysis)

`EstimatedTimeRemaining`: int (time remaining to complete subtitle creation in seconds, set during analysis)

`Error`: string (error details, set on failure)
