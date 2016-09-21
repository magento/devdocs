---
layout: default
group: pattern
subgroup: Displaying and Dealing with Data
title: Admin Design Pattern Library
menu_title: Tree
menu_order: 3
menu_node:
version: 2.0
github_link: pattern-library/displaying-data/tree/tree.md
---

<h2>Tree</h2>

<h3>Contents</h3> 
* <a href="#overview"> Overview</a>
* <a href="#whentouse"> When to Use</a>
* <a href="#treecomponents"> Components of Tree</a>
* <a href="#funcbehavior">Basic Functional Behavior</a>
* <a href="#variation1">Usage: Navigation</a>
* <a href="#variation2">Usage: Multi-Select</a>
* <a href="#variation4">Drag & Arrange</a>
* <a href="#variation5">Action Menu</a>
* <a href="#variation6">Add to Tree</a>
* <a href="#style">Style</a>
* <a href="#asset">Assets</a>


<h3 id="overview">Overview</h3>
This article contains various types of Tree structures used in Admin with functions for navigating, multi-selecting, adding nodes, editing inline, and dragging items. 
For solutions not described in this article, please refer to other related patterns or contact the Magento UX Design team.

<h3 id="whentouse">When to Use</h3>
Tree component will be needed anytime it is required to navigate though multiple layers of information and / or places where the information hierarchy needs to be shown to the user.

<h3 id="treecomponents">Components of Tree</h3>
The tree consists of two main "Anchors" and "Links"

<img src="img/treecomponents.jpg">

<h4>1. Anchors</h4>
Anchors are items that always contain at least one child item and offer “expand” / “collapse” functionality by hiding or revealing its direct children.

<h4>2. Link</h4>
Link is a leaf level item which user can select to navigate to detail page or display details on same page.
<br>
<em>Active Link</em>- Links that are active state and can be clicked to navigate to detail page.
<br>
<em>Inactive Link</em>- Links that are inactive state and cann't be clicked.

<h3 id="funcbehavior">Basic Functional Behavior</h3>
All trees must have these baseic functional behaviors.

<h4> 1. 'N' Number of Levels </h4>
The propose tree can accommodate “n” levels of parent child relation. But only 2 levels of nesting is recommended.

<h4> 2. Collapsing/Expanding individual tree items.</h4>
The arrow to the left of the item can be used to expand or collapses the children of an item you are interacting with.

<h4> 3. Expand All </h4>
Clicking "Expand All" will open all the nodes in the tree structure. Expand All link is the default state. Once “Expand All” is clicked the link changes to “Collapse All” If user manually expand all the items, this control should also be changed to "Collapse All."

<img src="img/expandall.jpg">

<h4> 4. Collapse All </h4>
Clickign "Collapse All" will condense all the nodes in the tree structure. Once “Collapse All” is clicked link changes to “Expand All”.  If user manually collapsed all the items, this control should also be changed to "Collapse All."

<img src="img/collpaseall.jpg">


<h3 id="variation1">Usage: Navigation</h3>

This is used to navigate to the detail page of the selected item in the admin or used as navigation to display more information on the same page.

When tree is used to display more information on the same page the item clicked remains in selected state.

<img src="img/navigationonlytree.jpg">

<h3 id="variation2">Usage: Multi-Select</h3>

This is used when multiple selection of items are needed. 

<h4>Type 1. Multi Select without Icon</h4>
<img src="img/multi-select.jpg">

<h4>Type 2. Multi Select with Icon</h4>

This tree has all functionality of multi-select tree along with having icons. Icons can be used along with the checkboxes to denote the difference in item types. (e.g. In Media management Icons can be used to differentiate between audio, video, image and folder types.) 

Icons should always be placed on the left of the icon label and Icons should NOT be used as default feature for trees pattern.

<img src="img/multi-select-wicon.jpg">

<h4>Behavior and Details of Multi Select Tree: </h4>

<strong>1. Select All/Clear All</strong>
Select All is the default state for tree with multi select functionality. When this functionality is triggered:<br>
•	All checkboxes are checked <br>
•	Complete tree DOESN’T highlight. <br>
•	“Select All” link changes to “Clear All”<br><br>

When Clear All functionality is triggered – All the checkboxes are deselected. The "Clear All" link is only shown when everything is selected.

Otherwise, the link remain "Select All."

<br><br>

<em>Note:</em> The "Expand All/Collapse All" control can appear simultaneously with the "Select All/Clear All" control. They operate independently.

<img src="img/selectall-clearall.jpg">


<strong>2. Select Indicators</strong>

•	Partial Selection – this appears when a parent has items BOTH in checked and unchecked states. Partial selection only occurs at anchor level.<br>
•	Unchecked State – Item not selected and can be clicked for selection<br>
•	Checked State – item selected and can be unchecked for de-selection.<br>
•	Unchecked and Inactive – this state appears when the item is unselected and not active.<br>
•	Checked and Inactive – this state appears when the item is selected and not active.


<img src="img/states.jpg">

<strong>3. Checking a checkbox for a child item should automatically change its parent state to:</strong>

•	Partially selected – if parent also contains unchecked children<br>
•	Checked – if all checkboxes for all children are in “checked” state<br>
•	Unchecked – if all children are in “unchecked” state.<br>


<strong>4. Checking a checkbox for a Parent item should automatically change its child state to:</strong>

•	Checked – if the parent state is changed from “unchecked” to “checked” state <br>
•	Unchecked – if the parent state is changed from “checked” to “unchecked” state <br>
•	Partial Selection – if parent has a partial selection state, clicking on it will unselect all the child items.


<h3 id="variation4">Drag and Arrange</h3>

This can be used when user can drag and arrange items in tree. 

<h4>Functional Behavior: Drag Handle</h4>

Drag handles are used when the capability of dragging and arranging in a tree is needed. When an item is dragged out and moved to a desired location, the drop area is highlighted to show acceptable region. Once dropped, the pick-up area disappears. 
If an item cannot be dropped into a specific location – the drop area will not be shown.

<h4>Rule: Drag Handle Vs Checkbox</h4>
Checkboxes and Drag handles are mutually exclusive features. i.e. Tree structure that has checkboxes will NOT have drag feature and viz.

<em>Notes:</em> Moving the Items in the tree will also affect the parent – child relationship.   

<img src="img/drag-and-arrange-behavior.jpg">


<h4>Type 1. Drag and Arrange with Icon</h4>

<img src="img/drag-and-arrange.jpg">


<h4>Type 2. Drag and Arrange without Icon</h4>

<img src="img/drag-and-arrange2.jpg">


<h3 id="variation5">Action Menu</h3>
Action icon is used for any action that will be perform to the items in the tree. This may include edit, delete, move up, move down, etc.

The action icon is not required for the tree. It only appear as needed.

<strong>Step 1:</strong> User click on the action icon.<br><br>
<img src="img/action.jpg">
<br><br>
<strong>Step 2:</strong> The list of available actions against this item is shown. <br><br>
<img src="img/action2.jpg">
<br><br>
<strong>Move Up</strong> Once clicked, the item should be moved up within the parent. If the item is the first child, it cannot be moved up and the option will be disabled.

<strong>Move Down</strong> Once clicked, the item should be moved down within the parent. If the item is the last child, it cannot be moved down and the option will be disabled.

<strong>Edit</strong> Once clicked, this opens up a <a href="../../containers/slideouts-modals-overlays/slideouts-modals-overalys.html">slide-out panel</a>.

<strong>Remove</strong> Once clicked, the item should be removed.

<h3 id="variation6">Add to Tree</h3>

<h4>Triggers</h4>
The 'Add' triggers should be placed above the tree container area. (Note: the outline of the container is not always needed.) 
<br><br>
There are two types of items that can be added:<br><br>
<strong>1. A Group item </strong> This is the parent item, which means there can be children. Example: a folder for the media library or a new category. The group item can also be added to another parent group. This allows for n-level tree.
<br><br>
<strong>2. An item </strong> This is the child. Example: a media item or a sub-category. The child item will be added to whichever parent is selected or to the same parent as sibling.
<br>
The "add child" button should always have more importance than the "add parent" button.

<img src="img/placement.jpg">

<h4>Interaction</h4>
<br>
<strong>Step 1:</strong> User click on the add button<br><br>
<img src="img/add1.jpg">
<br><br><br>
<strong>Step 2:</strong> A <a href="../../containers/slideouts-modals-overlays/slideouts-modals-overalys.html">slide-out panel</a> should opens up to get the details of what to be added/<br><br>

<strong>Step 3:</strong> The item is added. The placement of the items will be determined as stated above.<br><br>
<img src="img/add3.jpg">
<br>

<h3 id="style">Style</h3>

<img src="img/style.jpg">

<h3 id="asset">Assets</h3>

Download <a href="src/magento-tree-pattern.zip">PhotoShop source file</a>.








