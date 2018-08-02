---
group: jsdg
subgroup: 3_Widgets
title: List widget
menu_order: 7 
menu_title: List widget
version: 2.1
github_link: javascript-dev-guide/widgets/widget_list.md
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_list.html
 - /guides/v1.0/frontend-dev-guide/javascript/widget_list.html
---
## Overview

Provides a way to move items, typically a list, from one content section to another.
The content can be moved using buttons and links. 

The list {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source file is [lib/web/mage/list.js]({{ site.mage2000url }}lib/web/mage/list.js" target="_blank).

## Initialize the list widget {#quicksearch_init}
For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank) topic.

## Options {#list_options}
The list widget has the following options:
<ul>
<li>[addButton](#l_addButton)</li>
<li>[destinationSelector](#l_destinationSelector)</li>
<li>[itemCount](#l_itemCount)</li>
<li>[itemIndex](#l_itemIndex)</li>
<li>[maxItems](#l_maxItems)</li>
<li>[maxItemsAlert](#l_maxItemsAlert)</li>
<li>[removeButton](#l_removeButton)</li>
<li>[template](#l_template)</li>
<li>[templateClass](#l_templateClass)</li>
<li>[templateWrapper](#l_templateWrapper)</li>
</ul>

Detailed description of each option follows.

### <code>addButton</code> {#l_addButton}
Selector for the element used for item adding. 

**Type**: String

**Default value**: `[data-button=remove]`

### <code>destinationSelector</code> {#l_destinationSelector}
Content destination selector.

**Type**: String

**Default value**: `[data-role=container]`

### <code>itemCount</code> {#l_itemCount}
Number of total items.

**Type**: Integer 

**Default value**: `0`

### <code>itemIndex</code> {#l_itemIndex}
Number of the current item.

**Type**: Integer

**Default value**: `0`

### <code>maxItems</code> {#l_maxItems}
Number of list items that can be added to the destination.

**Type**: Integer

**Default value**: `null`

### <code>maxItemsAlert</code> {#l_maxItemsAlert}
Alert message displayed when maximum limit is reached.

**Type**: String

**Default value**: `[data-button=remove]`

### <code>removeButton</code> {#l_removeButton}
Selector for the element used for item removing. 

**Type**: String

**Default value**: `[data-button=remove]`

### <code>template</code> {#l_template}
Template for the added item.

**Type**: String

**Default value**: `[data-role=item]`

### <code>templateClass</code> {#l_templateClass}
Class attached to the template wrapper.

**Type**: String

**Default value**: `[data-role=container]`

### <code>templateWrapper</code> {#l_templateWrapper}
Element holding the template.

**Type**: String

**Default value**: `null`


## Methods {#list_methods}

The list widget has the following methods:
<ul>
<li>[addItem](#list_addItem)</li>
<li>[checkLimit()](#list_checkLimit)</li>
<li>[handleAdd](#list_handleAdd)</li>
<li>[removeItem()](#list_removeItem)</li>
</ul>

### <code>addItem()</code> {#list_addItem}
Adds item to the list in the specified order (defined by the index parameter).

### <code>handleAdd()</code> {#list_handleAdd}
Adds item to the list.

### <code>checkLimit()</code> {#list_checkLimit}
If the `maxItems` option is set, hides or displays the **Add** button.


### <code>removeItem()</code> {#list_removeItem}
Removes an item from the list.




