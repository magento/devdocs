---
group: javascript-developer-guide
subgroup: 3_Widgets
title: List widget
menu_order: 7 
menu_title: List widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_list.html
---
## Overview

Provides a way to move items, typically a list, from one content section to another.
The content can be moved using buttons and links. 

The list {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source file is <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/list.js" target="_blank">lib/web/mage/list.js</a>.

## Initialize the list widget   {#quicksearch_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.

## Options   {#list_options}

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

### `addButton`   {#l_addButton}

Selector for the element used for item adding. 

**Type**: String

**Default value**: `[data-button=remove]`

### `destinationSelector`   {#l_destinationSelector}

Content destination selector.

**Type**: String

**Default value**: `[data-role=container]`

### `itemCount`   {#l_itemCount}

Number of total items.

**Type**: Integer 

**Default value**: `0`

### `itemIndex`   {#l_itemIndex}

Number of the current item.

**Type**: Integer

**Default value**: `0`

### `maxItems`   {#l_maxItems}

Number of list items that can be added to the destination.

**Type**: Integer

**Default value**: `null`

### `maxItemsAlert`   {#l_maxItemsAlert}

Alert message displayed when maximum limit is reached.

**Type**: String

**Default value**: `[data-button=remove]`

### `removeButton`   {#l_removeButton}

Selector for the element used for item removing. 

**Type**: String

**Default value**: `[data-button=remove]`

### `template`   {#l_template}

Template for the added item.

**Type**: String

**Default value**: `[data-role=item]`

### `templateClass`   {#l_templateClass}

Class attached to the template wrapper.

**Type**: String

**Default value**: `[data-role=container]`

### `templateWrapper`   {#l_templateWrapper}

Element holding the template.

**Type**: String

**Default value**: `null`

## Methods   {#list_methods}

The list widget has the following methods:
<ul>
<li><a href="#list_addItem">addItem</a></li>
<li><a href="#list_checkLimit">checkLimit()</a></li>
<li><a href="#list_handleAdd">handleAdd</a></li>
<li><a href="#list_removeItem">removeItem()</a></li>
</ul>

### `addItem()`   {#list_addItem}

Adds item to the list in the specified order (defined by the index parameter).

### `handleAdd()`   {#list_handleAdd}

Adds item to the list.

### `checkLimit()`   {#list_checkLimit}

If the `maxItems` option is set, hides or displays the **Add** button.


### `removeItem()`   {#list_removeItem}

Removes an item from the list.




