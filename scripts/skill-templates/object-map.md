# Resolve Object Hierarchy

How to reach each scriptable object from `resolve`. Each arrow is a method call; see the
matching `references/api/<Object>.md` for exact signatures.

```
resolve
├── GetProjectManager() -> ProjectManager
│   └── GetCurrentProject() -> Project
│       ├── GetMediaPool() -> MediaPool
│       │   ├── GetRootFolder() / GetCurrentFolder() -> Folder
│       │   │   └── GetClipList() -> [MediaPoolItem]
│       │   └── GetCurrentFolder().GetClipList() -> [MediaPoolItem]
│       ├── GetCurrentTimeline() -> Timeline
│       │   ├── GetItemListInTrack(trackType, index) -> [TimelineItem]
│       │   └── GetNodeGraph() -> Graph
│       └── GetGallery() -> Gallery
│           └── GetGalleryStillAlbums() -> [GalleryStillAlbum]
├── GetMediaStorage() -> MediaStorage
└── Fusion() -> Fusion
```

Common entry points:
- Import/organize media: `MediaStorage` + `MediaPool` + `Folder` + `MediaPoolItem`
- Edit/timeline work: `Timeline` + `TimelineItem`
- Color/nodes: `Graph` + `ColorGroup`
- Render/deliver: `Project` (render job + render settings)
