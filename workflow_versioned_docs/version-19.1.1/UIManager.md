UIManager Introduction
----------------------
There are two main objects needed to manage a window, the UIManager that handles layout, and the UIDispatcher that manages interaction events, accessed as follows:
```python
	ui = fusion.UIManager()
	dispatcher = bmd.UIDispatcher(ui)
```
Windows are created with the the UIDispatcher, passing a dictionary of attributes like ID and Text, with GUI elements in nested layouts all created with the UIManager.

UIDispatcher Functions
--------------------
The UIDispatcher object has a few important functions to manage processing of events. The most important are:

### AddWindow(props, children)
Accepts a dictionary of properties and a list of children, returns a Window object

### AddDialog(props, children)
Accepts a dictionary of properties and a list of children, returns a Dialog object

### int RunLoop()
Call when your window is ready to receive user clicks and other events

### ExitLoop(int)
Terminates the event processing, and returns any supplied exit code from `RunLoop()`

Common usage is to create your window and set up any event handlers, including a Close handler for the window that calls `ExitLoop()`, then `Show()` your window and call `RunLoop()` to wait for user interaction:

```python
	ui = fusion.UIManager
	dispatcher = bmd.UIDispatcher(ui)

	win = dispatcher.AddWindow({ 'ID': 'myWindow' }, [ ui.Label({ 'Text': 'Hello World!' }) ])

	def OnClose(ev):
		dispatcher.ExitLoop()

	win.On.myWindow.Close = OnClose

	win.Show()
	dispatcher.RunLoop()
```

`AddWindow()` will also accept a single child without needing a list, or a single dictionary containing both proprties and child elements, for ease of use.

As well as constructing new child elements and layouts, the UIManager also offers a few useful functions:

### FindWindow(ID)
Returns an element with matching ID

### FindWindows(ID)
Returns a list of all elements with matching ID

### QueueEvent(element, event, info)
Calls the element's event handler for 'event', passing it the dictionary 'info'

UIManager Elements
------------------
The element's ID is used to find, manage, and dispatch events for that element. GUI elements also support a set of common attributes including `Enabled`, `Hidden`, `Visible`, `Font`, `WindowTitle`, `BackgroundColor`, `Geometry`, `ToolTip`, `StatusTip`, `StyleSheet`, `WindowOpacity`, `MinimumSize`, `MaximumSize`, and `FixedSize`. 

Some other common GUI elements and their main attributes include:
```
	Label:		Text, Alignment, FrameStyle, WordWrap, Indent, Margin
	Button:		Text, Down, Checkable, Checked, Icon, IconSize, Flat
	CheckBox:	Text, Down, Checkable, Checked, Tristate, CheckState
	ComboBox:	ItemText, Editable, CurrentIndex, CurrentText, Count
	SpinBox:	Value, Minimum, Maximum, SingleStep, Prefix, Suffix, Alignment, ReadOnly, Wrapping
	Slider:		Value, Minimum, Maximum, SingleStep, PageStep, Orientation, Tracking, SliderPosition
	LineEdit:	Text, PlaceholderText, Font, MaxLength, ReadOnly, Modified, ClearButtonEnabled
	TextEdit:	Text, PlaceholderText, HTML, Font, Alignment, ReadOnly, TextColor, TextBackgroundColor, TabStopWidth, Lexer, LexerColors
	ColorPicker: Text, Color, Tracking, DoAlpha
	Font:		Family, StyleName, PointSize, PixelSize, Bold, Italic, Underline, Overline, StrikeOut, Kerning, Weight, Stretch, MonoSpaced
	Icon: 		File
	TabBar:		CurrentIndex, TabsClosable, Expanding, AutoHide, Movable, DrawBase, UsesScrollButtons, DocumentMode, ChangeCurrentOnDrag
	Tree:		ColumnCount, SortingEnabled, ItemsExpandable, ExpandsOnDoubleClick, AutoExpandDelay, HeaderHidden, IconSize, RootIsDecorated,
				Animated, AllColumnsShowFocus, WordWrap, TreePosition, SelectionBehavior, SelectionMode, UniformRowHeights, Indentation,
				VerticalScrollMode, HorizontalScrollMode, AutoScroll, AutoScrollMargin, TabKeyNavigation, AlternatingRowColors,
				FrameStyle, LineWidth, MidLineWidth, FrameRect, FrameShape, FrameShadow
	TreeItem:	Selected, Hidden, Expanded, Disabled, FirstColumnSpanned, Flags, ChildIndicatorPolicy
```
Some elements also have property arrays, indexed by item or column (zero-based), e.g. 
```python 
newItem.Text[2] = 'Third column text'
```
```
	Combo:		ItemText[]
	TabBar:		TabText[], TabToolTip[], TabWhatsThis[], TabTextColor[]
	Tree:		ColumnWidth[]
	Treeitem: 	Text[], StatusTip[], ToolTip[], WhatsThis[], SizeHint[], TextAlignment[], CheckState[], BackgroundColor[], TextColor[], Icon[], Font[]
```
Some elements like Label and Button will automatically recognise and render basic HTML in their Text attributes, and TextEdit is capable of displaying and returning HTML too. Element attributes can be specified when creating the element, or can be read or changed later:
```
	win.Find('myButton').Text = "Processing..."
```
Most elements have functions that can be called from them as well:
```
	Show()
	Hide()
	Raise()
	Lower()
	Close()				Returns boolean
	Find(ID)			Returns child element with matching ID
	GetChildren()		Returns list
	AddChild(element)
	RemoveChild(element)
	SetParent(element)
	Move(point)
	Resize(size)
	Size()				Returns size
	Pos()				Returns position
	HasFocus()			Returns boolean
	SetFocus(reason)	Accepts string "MouseFocusReason", "TabFocusReason", "ActiveWindowFocusReason", "OtherFocusreason", etc
	FocusWidget()		Returns element
	IsActiveWindow()	Returns boolean
	SetTabOrder(element)
	Update()
	Repaint()
	SetPaletteColor(r,g,b)
	QueueEvent(name, info)  Accepts event name string and dictionary of event attributes
	GetItems()			Returns dictionary of all child elements
```
Some elements have extra functions of their own:
```
	Label:				SetSelection(int, int), bool HasSelection(), string SelectedText(), int SelectionStart()
	Button:				Click(), Toggle(), AnimateClick()
	CheckBox:			Click(), Toggle(), AnimateClick()
	ComboBox:			AddItem(string), InsertItem(string), AddItems(list), InsertItems(int, list), InsertSeparator(int), RemoveItem(int), Clear(),
						SetEditText(string), ClearEditText(), Count(), ShowPopup(), HidePopup()
	SpinBox:			SetRange(int, int), StepBy(int), StepUp(), StepDown(), SelectAll(), Clear()
	Slider:				SetRange(int, int), TriggerAction(string)
	LineEdit:			SetSelection(int, int), bool HasSelectedText(), string SelectedText(), int SelectionStart(), SelectAll(), Clear(), Cut(), Copy(), Paste(),
						Undo(), Redo(), Deselect(), Insert(string), Backspace(), Del(), Home(bool), End(bool), int CursorPositionAt(point)
	TextEdit:			InsertPlainText(string), InsertHTML(string), Append(string), SelectAll(), Clear(), Cut(), Copy(), Paste(), Undo(), Redo(),
						ScrollToAnchor(string), ZoomIn(int), ZoomOut(int), EnsureCursorVisible(), MoveCursor(moveOperation, moveMode), bool CanPaste(),
						string AnchorAt(point), bool Find(string, findFlags)
	TabBar:				int AddTab(strubg), int InsertTab(string), int Count(), RemoveTab(int), MoveTab(int, int)
	Tree:				AddTopLevelItem(item), InsertTopLevelItem(item), SetHeaderLabel(string), int CurrentColumn(), int SortColumn(),
						int TopLevelItemCount(), item CurrentItem(), item TopLevelItem(int), item TakeTopLevelItem(int), item InvisibleRootItem(),
						item HeaderItem(), int IndexOfTopLevelItem(item), item ItemAbove(item), item ItemBelow(item), item ItemAt(point),
						Clear(), rect VisualItemRect(item), SetHeaderLabels(list), SetHeaderItem(item), InsertTopLevelItems(list), AddTopLevelItems(list),
						list SelectedItems(), list FindItems(string, flags), SortItems(int, order), ScrollToItem(item), ResetIndentation(),
						SortByColumn(int, order), int FrameWidth()
	TreeItem:			AddChild(item), InsertChild(item), RemoveChild(iitem), SortChildren(int, order), InsertChildren(int, list), AddChildren(list),
						int IndexOfChild(item), item Clone(), tree TreeWidget(), item Parent(), item Child(int), item TakeChild(int),
						int ChildCount(), int ColumnCount()
	Window:				Show(), Hide(), RecalcLayout()
	Dialog:				Exec(), IsRunning(), Done(), RecalcLayout()
```
Elements can be accessed by the window's `FindWindow(id)` function, or by assigning them to a variable for later usage, which is more efficient. The `GetItems()` function will return a dictionary of all child elements for ease of access.

UIManager Layout
----------------
Additionally, elements can be nested to define layout, using the `HGroup` and `VGroup` elements. As with Window and other elements, tou can pass a single dictionary or list with all properties and children, or separate them into a dict of properties and list of children, for convenience:
```python
	winLayout = ui.VGroup([
		ui.Label({ 'Text': "A 2x2 grid of buttons", 'Weight': 1 }),

		ui.HGroup({ 'Weight': 5 }, [
			ui.Button({ 'ID': "myButton1",  'Text': "Go" }),
			ui.Button({ 'ID': "myButton2",  'Text': "Stop" }),
			]),
		ui.VGap(2),
		ui.HGroup({ 'Weight': 5 }, [
			ui.Button({ 'ID': "myButtonA",  'Text': "Begin" }),
			ui.Button({ 'ID': "myButtonB",  'Text': "End" }),
			]),
		]),
	win = dispatcher.AddWindow({ 'ID': "myWindow" }, winLayout)
```
`HGap` and `VGap` elements can included for finer spacing control. Note also the Weight attribute, which can be applied to most elements to control how they adjust their relative sizes. A Weight of 0 will use the element's minimum size.

Event Handlers
--------------
Window objects will call user-defined event handler functions in response to various interaction events. Event handlers are managed using a window member called 'On'. This has sub-members for each GUI element with an ID, and those have members for each available event.

To set up an event handler, define a function for it, then assign the function to the window's On.ID.Event member as follows:
```python
	def OnClose(ev):
		dispatcher.ExitLoop()

	win.On.myWindow.Close = OnClose
```
Alternatively, if your object's ID is stored in a string variable called 'buttonID', you could use:
```python 
	win.On[buttonID].Clicked = OnButtonClicked
```
Many objects have specific events that can be handled:
```
	Button:				Clicked, Toggled, Pressed, Released
	CheckBox:			Clicked, Toggled, Pressed, Released
	ComboBox:			CurrentIndexChanged, CurrentTextChanged, TextEdited, EditTextChanged, EditingFinished, ReturnPressed, Activated
	SpinBox:			ValueChanged, EditingFinished
	Slider:				ValueChanged, SliderMoved, ActionTriggered, SliderPressed, SliderReleased, RangeChanged
	LineEdit:			TextChanged, TextEdited, EditingFinished, ReturnPressed, SelectionChanged, CursorPositionChanged
	TextEdit:			TextChanged, SelectionChanged, CursorPositionChanged
	ColorPicker:		ColorChanged
	TabBar:				CurrentChanged, CloseRequested, TabMoved, TabBarClicked, TabBarDoubleClicked
	Tree:				CurrentItemChanged, ItemClicked, ItemPressed, ItemActivated, ItemDoubleClicked, ItemChanged, ItemEntered,
						ItemExpanded, ItemCollapsed, CurrentItemChanged, ItemSelectionChanged
	Window:				Close, Show, Hide, Resize, MousePress, MouseRelease, MouseDoubleClick, MouseMove, Wheel, KeyPress, KeyRelease,
						FocusIn, FocusOut, ContextMenu, Enter, Leave
```
Event handler functions are called with a dictionary of related attributes such as who, what, when, sender, and modifiers. Common events and some additional attributes they receive include:
```
	MousePress:			Pos, GlobalPos, Button, Buttons
	MouseRelease:		Pos, GlobalPos, Button, Buttons
	MouseDoubleClick:	Pos, GlobalPos, Button, Buttons
	MouseMove:			Pos, GlobalPos, Button, Buttons
	Wheel:				Pos, GlobalPos, Buttons, Delta, PixelDelta, AngleDelta, Orientiation, Phase
	KeyPress:			Key, Text, IsAutoRepeat, Count
	KeyRelease:			Key, Text, IsAutoRepeat, Count
	ContextMenu:		Pos, GlobalPos
	Move:				Pos, OldPos
	FocusIn:			Reason
	FocusOut:			Reason
```
Event handlers can be enabled or disabled for a given element by turning them on or off in the Events attribute:
```python
	ui.Slider({ 'ID': 'mySlider', 'Events': { 'SliderMoved': true } })
```

Some common events like Clicked or Close are enabled by default.

Basic Resolve API
-----------------
Please refer to the [Basic Resolve API] section in '../Developer/Scripting/README.txt' file for the list of the functions that Resolve offers for scripted control. For plugin scripts, the 'resolve' and 'project' variables are automatically set up for you, and may be used to access any part of Resolve's API.

Further Information
-------------------
This document provides a basic introduction only, and does not list all available UIManager elements and attributes. As UIManager is based on Qt, you can refer to the Qt documentation at https://doc.qt.io/qt-5/qwidget.html for more information on element types and their attributes. There are also many third-party examples and discussions available on user forums for DaVinci Resolve and Fusion Studio.