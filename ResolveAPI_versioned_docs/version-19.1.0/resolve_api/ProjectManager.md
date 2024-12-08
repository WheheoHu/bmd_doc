> New in 19.1.0

###  LoadCloudProject(cloudSettings)
Return Type: `Project`

Loads and returns a cloud project with the following cloud settings if there is a match found, and None if there is no matching cloud project.
 
-----
### ArchiveProject(projectName,filePath,isArchiveSrcMedia=True,isArchiveRenderCache=True,isArchiveProxyMedia=False)
Return Type: `Bool`

Archives project to provided filePath with the configuration as provided by the optional arguments

###  CloseProject(project)                      
Return Type: `Bool`

Closes the specified project without saving.

### CreateCloudProject(cloudSettings)
Return Type: `Project`

Creates and returns a cloud project. 
cloudSettings:  Check [Cloud Porject Settings](../resolve_settings/CloudProjectsSettings.md) subsection below for more information

###  CreateFolder(folderName)                   
Return Type: `Bool`

Creates a folder if folderName(string) is unique.

###  CreateProject(projectName)                 
Return Type: `Project`

Creates and returns a project if projectName(string) is unique, and None if it is not.

###  DeleteFolder(folderName)                   
Return Type: `Bool`

Deletes the specified folder if it exists. Returns True in case of success.

###  DeleteProject(projectName)                 
Return Type: `Bool`

Delete project in the current folder if not currently loaded

###  ExportProject(projectName, filePath, withStillsAndLUTs=True)
Return Type: `Bool`

Exports project to provided file path, including stills and LUTs if withStillsAndLUTs is True (enabled by default). 
Returns True in case of success

###  GetCurrentDatabase()                       
Return Type: `{dbInfo}`

Returns a dictionary (with keys DbType, DbName and optional IpAddress) corresponding to the current database connection

###  GetCurrentFolder()                         
Return Type: `string`

Returns the current folder name.

###  GetCurrentProject()                        
Return Type: `Project`

Returns the currently loaded Resolve [Project](./Project.md) .

###  GetDatabaseList()                          
Return Type: `[\{dbInfo\}]`

Returns a list of dictionary items (with keys DbType, DbName and optional IpAddress) corresponding to all the databases added to Resolve

###  GetFolderListInCurrentFolder()             
Return Type: `[folder names...]`

Returns a list of folder names in current folder.

###  GetProjectListInCurrentFolder()            
Return Type: `[project names...]`

Returns a list of project names in current folder.

###  GotoParentFolder()                         
Return Type: `Bool`

Opens parent folder of current folder in database if current folder has parent.

###  GotoRootFolder()                           
Return Type: `Bool`

Opens root folder in database.

### ImportCloudProject(filePath, cloudSettings)
Return Type: `Bool`

Returns True if import cloud project is successful; False otherwise
filePath:  String; filePath of file to import
cloudSettings:  Check [Cloud Porject Settings](../resolve_settings/CloudProjectsSettings.md)subsection below for more information.

###  ImportProject(filePath, projectName=None)                    
Return Type: `Bool`

Imports a project from the file path provided with given project name. Returns True if successful.

###  LoadProject(projectName)                   
Return Type: `Project`

Loads and returns the[Project](./Project.md)  with name = projectName (string)
if there is a match found, and None if there is no matching Project.

###  OpenFolder(folderName)                     
Return Type: `Bool`

Opens folder under given name.

### RestoreCloudProject(folderPath, cloudSettings)
Return Type: `Bool`

Returns True if restore cloud project is successful; False otherwise
folderPath:  String; path of folder to restore
cloudSettings:  Check [Cloud Porject Settings](../resolve_settings/CloudProjectsSettings.md)subsection below for more information.

###  RestoreProject(filePath, projectName=None)                   
Return Type: `Bool`

Restores a project from the file path provided with given project name. Returns True if successful.

###  SaveProject()                              
Return Type: `Bool`

Saves the currently loaded project with its own name. Returns True if successful.

###  SetCurrentDatabase(\{dbInfo\})               
Return Type: `Bool`

Switches current database connection to the database specified by the keys below, and closes any open project.
DbType:  'Disk' or 'PostgreSQL' (string)
DbName:  database name (string)
IpAddress:  IP address of the PostgreSQL server (string, optional key - defaults to '127.0.0.1')

