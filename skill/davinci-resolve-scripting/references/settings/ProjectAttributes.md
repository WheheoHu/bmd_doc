# Project Attributes

This section covers the project attributes returned by [`ProjectManager:GetProjectAttributesInCurrentFolder`](../api/ProjectManager.md#getprojectattributesincurrentfolder), which maps every project name in the current folder to a dictionary of that project's attributes.

Each projectAttributes dictionary contains the following keys:

`lastModifiedDate`: string (last modified date in ISO 8601 format, example: "2024-06-15T09:30:00+05:30")

`creationDate`: string (creation date in ISO 8601 format, example: "2024-06-15T09:30:00+05:30")

`notes`: string (project notes)

`liveCollaborationMode`: string ("multi_user" or "single_user")
