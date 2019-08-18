---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Multiselect widget
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

## Overview
 
The Multiselect [widget](https://glossary.magento.com/widget/) is used to create a multiple select with the search field which helps to look for options.

The Multiselect widget source is [lib/web/mage/multiselect.js][].

## Initialize the Multiselect widget

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript][] topic.

Generally the Multiselect widget is instantiated like following:

```javascript
$("#multiselect").multiselect2({});
```

Where:

- `#multiselect` is the selector of the select element for which Multiselect is initialized.

Phtml template file examples using script:

```html
<script>
    require([
        'jquery',
        'mage/multiselect'
    ], function ($) {
        'use strict';
        
        $("#multiselect").multiselect2({});
    });
</script>
```

## Options

The RedirectUrl widget has the following options:

- [mselectContainer](#mselectcontainer)
- [mselectItemsWrapperClass](#mselectitemswrapperclass)
- [mselectCheckedClass](#mselectcheckedclass)
- [containerClass](#containerclass)
- [searchInputClass](#searchinputclass)
- [selectedItemsCountClass](#selecteditemscountclass)
- [currentPage](#currentpage)
- [lastAppendValue](#lastappendvalue)
- [updateDelay](#updateDelay)

### `mselectContainer`

Multiselect container selector.

**Type**: String

**Default value**: `'section.mselect-list'`

### `mselectItemsWrapperClass`

Multiselect items wrapper class.

**Type**: String

**Default value**: `'mselect-items-wrapper'`

### `mselectCheckedClass`

Multiselect checked option class.

**Type**: String

**Default value**: `'mselect-checked'`

### `containerClass`

Container class.

**Type**: String

**Default value**: `'paginated'`

### `searchInputClass`

Class of the search input.

**Type**: String

**Default value**: `'admin__action-multiselect-search'`

### `selectedItemsCountClass`

Class of the selected items counter.

**Type**: String

**Default value**: `'admin__action-multiselect-search'`

### `currentPage`

Current page of options.

**Type**: Integer

**Default value**: `1`

### `lastAppendValue`

The value of the last added option.

**Type**: Integer, String

**Default value**: `0`

### `updateDelay`

The search field update delay.

**Type**: Integer, String

**Default value**: `0`

## Code sample

The example shows the multiselect field with search bar and *Add new value* button.

```html
<div class="select-example">
    <select id="multiselect" name="multiselect-field" multiple="multiple">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
    </select>
    <script>
        require(['jquery', 'mage/multiselect'], function ($) {
            $('#multiselect').multiselect2({selectedValues[2, 4]});
        });
    </script>
</div>
```

## Result

As a result, we see the multiselect field with search bar and *Add new value* button.
The search bar allows to search an option and the *Add new value* button allows to add a new option to the multiselect. 

![Multiselect Widget Example]({{ site.baseurl }}/common/images/widget/multiselect-widget-result.png)

<!-- Link Definitions -->
[lib/web/mage/multiselect.js]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/multiselect.js
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
