"use strict";(self.webpackChunkbmd_doc_test=self.webpackChunkbmd_doc_test||[]).push([[3071],{1014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=n(4848),s=n(8453);const i={},r=void 0,d={id:"other/misc",title:"misc",description:"Deprecated Resolve API Functions",source:"@site/docs/other/misc.md",sourceDirName:"other",slug:"/other/misc",permalink:"/bmd_doc/docs/other/misc",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/other/misc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"settings",permalink:"/bmd_doc/docs/resolve_settings/settings"}},a={},c=[{value:"Deprecated Resolve API Functions",id:"deprecated-resolve-api-functions",level:2},{value:"Unsupported Resolve API Functions",id:"unsupported-resolve-api-functions",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"deprecated-resolve-api-functions",children:"Deprecated Resolve API Functions"}),"\n",(0,o.jsx)(t.p,{children:"The following API functions are deprecated."}),"\n",(0,o.jsx)(t.p,{children:"ProjectManager"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"GetProjectsInCurrentFolder()                    --\x3e {project names...} # Returns a dict of project names in current folder.\nGetFoldersInCurrentFolder()                     --\x3e {folder names...}  # Returns a dict of folder names in current folder.\n\nProject\nGetPresets()                                    --\x3e {presets...}       # Returns a dict of presets and their information.\nGetRenderJobs()                                 --\x3e {render jobs...}   # Returns a dict of render jobs and their information.\nGetRenderPresets()                              --\x3e {presets...}       # Returns a dict of render presets and their information.\n\nMediaStorage\nGetMountedVolumes()                             --\x3e {paths...}         # Returns a dict of folder paths corresponding to mounted volumes displayed in Resolve\u2019s Media Storage.\nGetSubFolders(folderPath)                       --\x3e {paths...}         # Returns a dict of folder paths in the given absolute folder path.\nGetFiles(folderPath)                            --\x3e {paths...}         # Returns a dict of media and file listings in the given absolute folder path. Note that media listings may be logically consolidated entries.\nAddItemsToMediaPool(item1, item2, ...)          --\x3e {clips...}         # Adds specified file/folder paths from Media Storage into current Media Pool folder. Input is one or more file/folder paths. Returns a dict of the MediaPoolItems created.\nAddItemsToMediaPool([items...])                 --\x3e {clips...}         # Adds specified file/folder paths from Media Storage into current Media Pool folder. Input is an array of file/folder paths. Returns a dict of the MediaPoolItems created.\n\nFolder\nGetClips()                                      --\x3e {clips...}         # Returns a dict of clips (items) within the folder.\nGetSubFolders()                                 --\x3e {folders...}       # Returns a dict of subfolders in the folder.\n\nMediaPoolItem\nGetFlags()                                      --\x3e {colors...}        # Returns a dict of flag colors assigned to the item.\n\nTimeline\nGetItemsInTrack(trackType, index)               --\x3e {items...}         # Returns a dict of Timeline items on the video or audio track (based on trackType) at specified\n\nTimelineItem\nGetFusionCompNames()                            --\x3e {names...}         # Returns a dict of Fusion composition names associated with the timeline item.\nGetFlags()                                      --\x3e {colors...}        # Returns a dict of flag colors assigned to the item.\nGetVersionNames(versionType)                    --\x3e {names...}         # Returns a dict of version names by provided versionType: 0 - local, 1 - remote.\n"})}),"\n",(0,o.jsx)(t.h2,{id:"unsupported-resolve-api-functions",children:"Unsupported Resolve API Functions"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"The following API (functions and parameters) are no longer supported. Use job IDs instead of indices.\n\nProject\nStartRendering(index1, index2, ...)             --\x3e Bool               # Please use unique job ids (string) instead of indices.\nStartRendering([idxs...])                       --\x3e Bool               # Please use unique job ids (string) instead of indices.\nDeleteRenderJobByIndex(idx)                     --\x3e Bool               # Please use unique job ids (string) instead of indices.\nGetRenderJobStatus(idx)                         --\x3e {status info}      # Please use unique job ids (string) instead of indices.\nGetSetting and SetSetting                       --\x3e {}                 # settingName videoMonitorUseRec601For422SDI is now replaced with videoMonitorUseMatrixOverrideFor422SDI and videoMonitorMatrixOverrideFor422SDI.\n# settingName perfProxyMediaOn is now replaced with perfProxyMediaMode which takes values 0 - disabled, 1 - when available, 2 - when source not available.\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var o=n(6540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);