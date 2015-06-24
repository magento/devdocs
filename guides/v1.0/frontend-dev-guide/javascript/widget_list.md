---
layout: default
group: javascript
subgroup: JQuery widget details
title: List widget
menu_order: 2
menu_title: List widget
github_link: frontend-dev-guide/javascript/widget_list.md
---
<h2>Overview</h2>

Provides developers a way to move items, typically a list, from one content section to another.
The content can be moved using buttons and links. 

The List widget source file is <a href="{{site.mage2000url}}">lib/web/mage/list.js</a>.

<h2 id="list_options">Options</h2>

<ul>
<li><a href="#l_template">template</a></li>
<li><a href="#l_templateWrapper">templateWrapper</a></li>
<li><a href="#l_templateClass">templateClass</a></li>
<li><a href="#l_destinationSelector">destinationSelector</a></li>
<li><a href="#l_itemIndex">itemIndex</a></li>
<li><a href="#l_itemCount">itemCount</a></li>
<li><a href="#l_addButton">addButton</a></li>
<li><a href="#l_removeButton">removeButton</a></li>
<li><a href="#l_maxItems">maxItems</a></li>
<li><a href="#l_maxItemsAlert">maxItemsAlert</a></li>
</ul>

<h3 id="#l_template">template</h3>
Template for the added item.

**Type**: String

**Default value**: *"[data-role=item]"*


<h3 id="#l_templateWrapper">templateWrapper</h3>
Element holding the template.

**Type**: String

**Default value**: null

<h3 id="#l_templateClass">templateClass</h3>
Class attached to the template wrapper.

**Type**: String

**Default value**: `[data-role=container]`

<h3 id="#l_destinationSelector">destinationSelector</h3>
Content destination selector.

**Type**: String

**Default value**: `"[data-role=container]"`

<h3 id="#l_itemIndex">itemIndex</h3>
Number of the current item.

**Type**: Integer

**Default value**: 0

<h3 id="#l_itemCount">itemCount</h3>
Number of total items.

**Type**: Integer 

**Default value**: 0

<h3 id="#l_addButton">addButton</h3>
Selector for the element used for item adding. 

**Type**: String

**Default value**: `"[data-button=remove]"`

<h3 id="#l_removeButton">removeButton</h3>
Selector for the element used for item removing. 

**Type**: String

**Default value**: `"[data-button=remove]"`

<h3 id="#l_maxItems">maxItems</h3>
The number of list items that can be added to the destination.

**Type**: Integer

**Default value**: null

<h3 id="#l_maxItemsAlert">maxItemsAlert</h3>
Alert message displayed when maximum limit is reached.

**Type**: String

**Default value**: `"[data-button=remove]"`

<h2 id="list_methods">Methods</h2>

<h3>checkLimit()</h3>
If the `maxItems` option is set, hides or displays the Add button.


<h3>removeItem()</h3>
Removes an item from the list.

<h3>handleAdd()</h3>
Adds item to the list.

<h3>addItem()</h3>
Adds item to the list in the specified order (defined by the index parameter).

