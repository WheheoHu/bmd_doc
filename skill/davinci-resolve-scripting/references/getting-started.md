# Getting Started with Resolve Scripting

Covers Resolve **21.0.2** (docs last updated 26 May 2026).

## Prerequisites

DaVinci Resolve must be running. One of the following runtimes is required:
- Python >= 3.6 64-bit (or Python 2.7 64-bit)
- Lua 5.1 (Resolve ships a built-in LuaJIT)

## Environment variables

Set these so your interpreter can import the scripting module:

```
Mac OS X:
RESOLVE_SCRIPT_API="/Library/Application Support/Blackmagic Design/DaVinci Resolve/Developer/Scripting"
RESOLVE_SCRIPT_LIB="/Applications/DaVinci Resolve/DaVinci Resolve.app/Contents/Libraries/Fusion/fusionscript.so"
PYTHONPATH="$PYTHONPATH:$RESOLVE_SCRIPT_API/Modules/"

Windows:
RESOLVE_SCRIPT_API="%PROGRAMDATA%\Blackmagic Design\DaVinci Resolve\Support\Developer\Scripting"
RESOLVE_SCRIPT_LIB="C:\Program Files\Blackmagic Design\DaVinci Resolve\fusionscript.dll"
PYTHONPATH="%PYTHONPATH%;%RESOLVE_SCRIPT_API%\Modules\"

Linux:
RESOLVE_SCRIPT_API="/opt/resolve/Developer/Scripting"
RESOLVE_SCRIPT_LIB="/opt/resolve/libs/Fusion/fusionscript.so"
PYTHONPATH="$PYTHONPATH:$RESOLVE_SCRIPT_API/Modules/"
```

## Bootstrap

```python
#!/usr/bin/env python
import DaVinciResolveScript as dvr_script
resolve = dvr_script.scriptapp("Resolve")
fusion = resolve.Fusion()
projectManager = resolve.GetProjectManager()
projectManager.CreateProject("Hello World")
```

`resolve` is the fundamental starting point. `fusion` exposes all Fusion scripting.

## Headless mode

Launch with `-nogui` to run without the UI; the scripting APIs still work.

## List and dict data structures

Beyond primitives, the API uses lists (`[ ... ]`) and dicts (`{ ... }`). In Lua both are
tables: a list is `{ [1] = v1, [2] = v2, ... }`; a dict is `{ [key1] = v1, [key2] = v2, ... }`.
