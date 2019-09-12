---
group: javascript-developer-guide
title: Multiselect widget
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

This [widget](https://glossary.magento.com/widget/) enables multiple select capability in the search field to help users choose different options.

The Multiselect widget source is the [lib/web/mage/multiselect.js][] file.

## Initialize the Multiselect widget

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript][] topic.

The following example shows how to instantiate the Multiselect widget:

```javascript
$("#multiselect").multiselect2({});
```

Where:

- `#multiselect` is the selector of the select element for which Multiselect is initialized.

The following example shows a PHTML file using the script:

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
- [updateDelay](#updatedelay)

### `mselectContainer`

Multiselect container selector.

**Type**: String

**Default value**: `'section.mselect-list'`

### `mselectItemsWrapperClass`

Multiselect items wrapper class.

**Type**: String

**Default value**: `'mselect-items-wrapper'`

### `mselectCheckedClass`

The class which is attached to a checked multi-select item.

**Type**: String

**Default value**: `'mselect-checked'`

### `containerClass`

The class which is attached to the container with [multi-select container selector](#mselectcontainer).

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

Current page of multi-select items.

**Type**: Integer

**Default value**: `1`

### `lastAppendValue`

The value of the last added multi-select item.

**Type**: Integer, String

**Default value**: `0`

### `updateDelay`

The search field update delay.

**Type**: Integer, String

**Default value**: `0`

## Code sample

The following example shows the multiselect field with search bar and **Add new value** button.

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
            $('#multiselect').multiselect2({selectedValues: [2, 4]});
        });
    </script>
</div>
```

## Result

As a result, we see the multiselect field with search bar and **Add new value** button.
You can now search for an option in the search bar and the **Add new value** button allows you to add a new option to the multiselect feature.

![Multiselect Widget Example]({{ site.baseurl }}/common/images/widget/multiselect-widget-result.png)

<!-- Link Definitions -->
[lib/web/mage/multiselect.js]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/multiselect.js
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
