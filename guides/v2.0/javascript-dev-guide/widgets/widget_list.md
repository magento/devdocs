---
layout: default
group: jsdg
subgroup: 3_Widgets
title: List widget
menu_order: 7 
menu_title: List widget
version: 2.0
github_link: javascript-dev-guide/widgets/widget_list.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/widget_list.html
  - guides/v1.0/frontend-dev-guide/javascript/widget_list.html
---
<h2>Overview</h2>

Provides a way to move items, typically a list, from one content section to another.
The content can be moved using buttons and links. 

The list widget source file is <a href="{{site.mage2000url}}lib/web/mage/list.js" target="_blank">lib/web/mage/list.js</a>.

<h2 id="quicksearch_init">Initialize the list widget</h2>
For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.

<h2 id="list_options">Options</h2>
The list widget has the following options:
<ul>
<li><a href="#l_addButton">addButton</a></li>
<li><a href="#l_destinationSelector">destinationSelector</a></li>
<li><a href="#l_itemCount">itemCount</a></li>
<li><a href="#l_itemIndex">itemIndex</a></li>
<li><a href="#l_maxItems">maxItems</a></li>
<li><a href="#l_maxItemsAlert">maxItemsAlert</a></li>
<li><a href="#l_removeButton">removeButton</a></li>
<li><a href="#l_template">template</a></li>
<li><a href="#l_templateClass">templateClass</a></li>
<li><a href="#l_templateWrapper">templateWrapper</a></li>
</ul>

Detailed description of each option follows.

<h3 id="l_addButton"><code>addButton</code></h3>
Selector for the element used for item adding. 

**Type**: String

**Default value**: `[data-button=remove]`

<h3 id="l_destinationSelector"><code>destinationSelector</code></h3>
Content destination selector.

**Type**: String

**Default value**: `[data-role=container]`

<h3 id="l_itemCount"><code>itemCount</code></h3>
Number of total items.

**Type**: Integer 

**Default value**: `0`

<h3 id="l_itemIndex"><code>itemIndex</code></h3>
Number of the current item.

**Type**: Integer

**Default value**: `0`

<h3 id="l_maxItems"><code>maxItems</code></h3>
Number of list items that can be added to the destination.

**Type**: Integer

**Default value**: `null`

<h3 id="l_maxItemsAlert"><code>maxItemsAlert</code></h3>
Alert message displayed when maximum limit is reached.

**Type**: String

**Default value**: `[data-button=remove]`

<h3 id="l_removeButton"><code>removeButton</code></h3>
Selector for the element used for item removing. 

**Type**: String

**Default value**: `[data-button=remove]`

<h3 id="l_template"><code>template</code></h3>
Template for the added item.

**Type**: String

**Default value**: `[data-role=item]`

<h3 id="l_templateClass"><code>templateClass</code></h3>
Class attached to the template wrapper.

**Type**: String

**Default value**: `[data-role=container]`

<h3 id="l_templateWrapper"><code>templateWrapper</code></h3>
Element holding the template.

**Type**: String

**Default value**: `null`


<h2 id="list_methods">Methods</h2>

The list widget has the following methods:
<ul>
<li><a href="#list_addItem">addItem</a></li>
<li><a href="#list_checkLimit">checkLimit()</a></li>
<li><a href="#list_handleAdd">handleAdd</a></li>
<li><a href="#list_removeItem">removeItem()</a></li>
</ul>

<h3 id="list_addItem"><code>addItem()</code></h3>
Adds item to the list in the specified order (defined by the index parameter).

<h3 id="list_handleAdd"><code>handleAdd()</code></h3>
Adds item to the list.

<h3 id="list_checkLimit"><code>checkLimit()</code></h3>
If the `maxItems` option is set, hides or displays the **Add** button.


<h3 id="list_removeItem"><code>removeItem()</code></h3>
Removes an item from the list.




