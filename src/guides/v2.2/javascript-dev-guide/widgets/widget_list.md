---
group: javascript-developer-guide
subgroup: 3_Widgets
title: List widget
---

{%
include note.html
type='warning'
content='The list widget is deprecated since version 2.2.0. As an alternative component for the admin area, use [DynamicRows][].'
%}

Provides a way to move items, typically a list, from one content section to another.
The content can be moved using buttons and links.

The list [widget](https://glossary.magento.com/widget) source file is [lib/web/mage/list.js].

## Initialize the list widget {#quicksearch_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript] topic.

## Options {#list_options}

The list widget has the following options:

-  [addButton](#l_addButton)
-  [destinationSelector](#l_destinationSelector)
-  [itemCount](#l_itemCount)
-  [itemIndex](#l_itemIndex)
-  [maxItems](#l_maxItems)
-  [maxItemsAlert](#l_maxItemsAlert)
-  [removeButton](#l_removeButton)
-  [template](#l_template)
-  [templateClass](#l_templateClass)
-  [templateWrapper](#l_templateWrapper)

Detailed description of each option follows.

### `addButton` {#l_addButton}
Selector for the element used for item adding.

**Type**: String

**Default value**: `[data-button=add]`

### `destinationSelector` {#l_destinationSelector}
Content destination selector.

**Type**: String

**Default value**: `[data-role=container]`

### `itemCount` {#l_itemCount}
Number of total items.

**Type**: Integer

**Default value**: `0`

### `itemIndex` {#l_itemIndex}
Number of the current item.

**Type**: Integer

**Default value**: `0`

### `maxItems` {#l_maxItems}
Number of list items that can be added to the destination.

**Type**: Integer

**Default value**: `null`

### `maxItemsAlert` {#l_maxItemsAlert}
Alert message displayed when maximum limit is reached.

**Type**: String

**Default value**: `null`

### `removeButton` {#l_removeButton}
Selector for the element used for item removing.

**Type**: String

**Default value**: `[data-button=remove]`

### `template` {#l_template}
Template for the added item.

**Type**: String

**Default value**: `[data-role=item]`

### `templateClass` {#l_templateClass}
Class attached to the template wrapper.

**Type**: String

**Default value**: `null`

### `templateWrapper` {#l_templateWrapper}
Element holding the template.

**Type**: String

**Default value**: `null`

## Methods {#list_methods}

The list widget has the following methods:

-  [addItem()](#list_addItem)
-  [checkLimit()](#list_checkLimit)
-  [handleAdd()](#list_handleAdd)
-  [removeItem()](#list_removeItem)

### `addItem()` {#list_addItem}
Adds item to the list in the specified order (defined by the index parameter).

### `handleAdd()` {#list_handleAdd}
Adds item to the list.

### `checkLimit()` {#list_checkLimit}
If the `maxItems` option is set, hides or displays the **Add** button.

### `removeItem()` {#list_removeItem}
Removes an item from the list.

[lib/web/mage/list.js]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/list.js
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
[DynamicRows]:{{ page.baseurl }}/ui_comp_guide/components/ui-dynamicrows.html
