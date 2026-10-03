---
sidebar_position: 1
sidebar_label: Introduction
displayed_sidebar: apiSidebar
---
# 



💡 Last Updated: 31 Aug 2026

---

## Overview

In this package, you will find a brief introduction to the Scripting API for DaVinci Resolve. Contents include:

- A `README.md` file for reference
- A `CHANGELOG.md` covering API changes over recent versions
- An Examples folder with representative scripts
- `.pyi` files with API documentation
- A Modules folder for custom scripting access

DaVinci Resolve supports user scripting in Lua 5.1 and Python 3.6 (or higher versions), as well as Workflow integrations (based on Electron and JavaScript). DaVinci Resolve comes with pre-packaged LuaJIT and Python interpreters, as well as a basic Electron package as a starting point for Workflow integrations. Refer to the [Workflow Integration](/workflow/WorkflowIntegration) developer notes for initialization and set up.

Scripts can be run **internally** (from the Workspace > Scripts menu or from the Console), **locally** (from the Terminal in the same system), or if configured, from the **local network**.

:::note

From v16.2.0 onwards, the `nodeIndex` parameters accepted by `SetLUT()` and `SetCDL()` are 1-based instead of 0-based, i.e. `1 <= nodeIndex <= total number of nodes`.

:::

## Prerequisites

To invoke a script, you will need:

- An active instance of DaVinci Resolve. Scripts may fail if the app is not fully loaded, or is starting up or quitting.
- A correctly configured application preference for external scripting.
- A script in one of the following languages:

```
Lua 5.1                # No need to install manually, Resolve ships a built-in LuaJIT
Python >= 3.6 64-bit   # No need to install manually since 21.1, Resolve ships a built-in Python 3.14
```

:::warning

Python 2 is no longer supported as of 21.1.0.

:::

### Configuration

In DaVinci Resolve Studio, Preferences > System > General, you can configure:

- **External scripting**, i.e. whether external scripts can connect to Resolve (None, Local, or Network).
- **Automatic scripted actions**, to allow a safe subset or to allow all arbitrary embedded scripted actions. It is recommended to leave this as Allow safe.

Please be aware of the security implications when executing scripts from unknown origins, or allowing scripting access from outside of the Resolve application.

## Internal Scripting

Supported methods for launching a script from within DaVinci Resolve:

- **Console**: The Workspace > Console window allows for an easy way to interactively execute simple scripting commands, to query or modify properties, and to test scripts. For more information on how to use the Console, please refer to the DaVinci Resolve User Manual.
- **Scripts Menu**: The Workspace > Scripts submenu lists the scripts present on your system. See [Script Menu and Folders](#script-menu-and-folders) below.
- **Render Scripts**: In the Deliver page, Render settings, under Advanced Settings, you can select a script to be executed at the start or end of a render job.
- **Composition Logic**: Fusion tools can be configured to execute in-tool scripts at Frame Render, Start Render and End Render. Please refer to the [Configuration](#configuration) section above.

When invoking scripts from inside DaVinci Resolve, internal variables like `bmd`, `resolve` and `fusion` are already defined as globals. Scripts invoked in a render context will have access to additional render job specific variables (job ID, status and render errors). For an example, see `Scripting/Examples/8_slack_notification_by_render_job.py`.

### Script Menu and Folders

On startup, DaVinci Resolve scans the subfolders in the directories shown below and enumerates the scripts found in the Workspace application menu under Scripts. Place your script under Utility to be listed in all pages, under Comp or Tool to be available in the Fusion page or under folders for individual pages (Edit, Color or Deliver). Scripts under Deliver are additionally shown under the render settings start/end scripts list. Placing your script here and invoking it from the menu is the easiest way to use scripts.

```
macOS:
All users:     /Library/Application Support/Blackmagic Design/DaVinci Resolve/Fusion/Scripts
Specific user: /Users/<UserName>/Library/Application Support/Blackmagic Design/DaVinci Resolve/Fusion/Scripts

Windows:
All users:     %PROGRAMDATA%\Blackmagic Design\DaVinci Resolve\Fusion\Scripts
Specific user: %APPDATA%\Blackmagic Design\DaVinci Resolve\Support\Fusion\Scripts

Linux:
All users:     /opt/resolve/Fusion/Scripts
Specific user: $HOME/.local/share/DaVinciResolve/Fusion/Scripts
```

## Local Scripting

DaVinci Resolve needs to be running for a script to be invoked.

### Built-in Python and LuaJIT interpreters

> New in 21.1.0

DaVinci Resolve 21.1 and above includes a custom Python 3.14 distribution which includes the following changes:

- `import DaVinciResolveScript` works out-of-box. No need to set `RESOLVE_SCRIPT_API`, `RESOLVE_SCRIPT_LIB` or `PYTHONPATH`.
- `pip`, `TK` and `IDLE` are not supported.

The interpreter can be found in the following location:

```
macOS:   /Applications/DaVinci Resolve/DaVinci Resolve.app/Contents/Applications/ResolvePython
Windows: C:\Program Files\Blackmagic Design\DaVinci Resolve\ResolvePython\ResolvePython.exe
Linux:   /opt/resolve/bin/ResolvePython
```

DaVinci Resolve also includes a LuaJIT 5.1 interpreter, found in the following location:

```
macOS:   /Applications/DaVinci Resolve/DaVinci Resolve.app/Contents/Libraries/Fusion/fuscript
Windows: C:\Program Files\Blackmagic Design\DaVinci Resolve\fuscript.exe
Linux:   /opt/resolve/libs/Fusion/fuscript
```

Use these to invoke a script from a command line / shell terminal, without needing environment variables. These interpreters will be upgraded regularly as part of the application's development.

### External interpreters

Should you wish to use your own Python runtime (3.6 or above) from [python.org](https://www.python.org), you may need to set the following environment variables and use the `DaVinciResolveScript` module:

```python 
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

(Note: For standard ISO Linux installations, the path above may need to be modified to refer to /home/resolve instead of /opt/resolve)

```

## Network and Headless Access

See the [Configuration](#configuration) section above to configure for executing scripts from the network. The Network setting allows for Terminal access from LAN.

DaVinci Resolve Studio and Fusion Studio scripting listens on port 1144 (registered with IANA for this purpose). On successful connection, the return connection is dynamically allocated in the 49152..65535 range.

DaVinci Resolve can be launched in a headless mode without the user interface using the `-nogui` command line option. When DaVinci Resolve is launched using this option, the user interface is disabled. However, the various scripting APIs will continue to work as expected.

## Example Python Script

This script creates a simple Resolve project called "Hello World":

```python
#!/usr/bin/env python3
# Obtain a resolve instance if not already initialized in context.
if 'resolve' not in globals() or not hasattr(resolve, 'GetVersion'):
    import DaVinciResolveScript as dvr_script
    resolve = dvr_script.scriptapp("Resolve")
fusion = resolve.Fusion()
projectManager = resolve.GetProjectManager()
projectManager.CreateProject("Hello World")
```

The `resolve` object is the fundamental starting point for scripting via Resolve. As a native object, it can be inspected for further scriptable properties - using table iteration and "getmetatable" in Lua and `dir`, `help` etc in Python (among other methods). A notable scriptable object above is `fusion` - it allows access to all existing Fusion scripting functionality.

## DaVinci Resolve API

> Change at 21.1.0

From 21.1 onwards, Blackmagic Design no longer ships the per-object method lists in the README. The authoritative API surface is the included `DaVinciResolveScript.pyi` Python API definition, which carries exact signatures, return types and every settings dictionary key. The [API object pages](./resolve_api/Resolve.md) and [settings references](./resolve_settings/ProjectAndClipProperties.md) on this site are transcribed from it.

## List and Dict Data Structures

Beside primitive data types, Resolve's Python API mainly uses list and dict data structures. Lists are denoted by [ ... ] and dicts are denoted by \{ ... \} above.

As Lua does not support list and dict data structures, the Lua API implements "list" as a table with indices, e.g. `{ [1] = listValue1, [2] = listValue2, ... }`.

Similarly the Lua API implements "dict" as a table with the dictionary key as first element, e.g. `{ [dictKey1] = dictValue1, [dictKey2] = dictValue2, ... }`.


