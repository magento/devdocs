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

where `#multiselect` is the selector of the select element for which Multiselect is initialized.

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

-  [containerClass](#containerclass)
-  [currentPage](#currentpage)
-  [lastAppendValue](#lastappendvalue)
-  [mselectCheckedClass](#mselectcheckedclass)
-  [mselectContainer](#mselectcontainer)
-  [mselectItemsWrapperClass](#mselectitemswrapperclass)
-  [nextPageUrl](#nextpageurl)
-  [searchInputClass](#searchinputclass)
-  [selectedItemsCountClass](#selecteditemscountclass)
-  [updateDelay](#updatedelay)

### `containerClass`

The class which is attached to the container with [multi-select container selector](#mselectcontainer).

**Type**: String

**Default value**: `'paginated'`

### `currentPage`

Current page of multi-select items.

**Type**: Integer

**Default value**: `1`

### `lastAppendValue`

The value of the last added multi-select item.

**Type**: Integer, String

**Default value**: `0`

### `mselectCheckedClass`

The class which is attached to a checked multi-select item.

**Type**: String

**Default value**: `'mselect-checked'`

### `mselectContainer`

Multiselect container selector.

**Type**: String

**Default value**: `'section.mselect-list'`

### `mselectItemsWrapperClass`

Multiselect items wrapper class.

**Type**: String

**Default value**: `'mselect-items-wrapper'`

### `nextPageUrl`

The url of the controller or API which returns the JSON response.

```json
{
  "success": true,
  "errorMessage": "",
  "result": [
    {
      "value": "1",
      "label": "Multi-select item label #1"
    },
    {
      "value": "2",
      "label": "Multi-select item label #2"
    }
  ]
}
```

An example of the controller: [`<Magento_Tax_module_dir>/Controller/Adminhtml/Rule/AjaxLoadRates.php`][]

**Type**: String

**Default value**: `undefined`

### `searchInputClass`

Class of the search input.

**Type**: String

**Default value**: `'admin__action-multiselect-search'`

### `selectedItemsCountClass`

Class of the selected items counter.

**Type**: String

**Default value**: `'admin__action-multiselect-search'`

### `updateDelay`

The search field update delay.

**Type**: Integer, String

**Default value**: `0`

## Methods

The Multiselect methods are the following:

-  [appendOptions()](#appendoptions)
-  [clearMultiselectOptions()](#clearmultiselectoptions)
-  [getCurrentPage()](#getcurrentpage)
-  [getSearchCriteria()](#getsearchcriteria)
-  [isOptionsLoaded()](#isoptionsloaded)
-  [loadOptions()](#loadoptions)
-  [setCurrentPage()](#setcurrentpage)

### `appendOptions`

The method appends multi-select items to the multi-select.

Code example:

```javascript
$('#multiselect').multiselect2('appendOptions', [{"value": "1", "label": "Label #1"}, {"value": "2", "label": "Label #2"}]);
```

### `clearMultiselectOptions`

The method removes all multi-select items.

Code example:

```javascript
$('#multiselect').multiselect2('clearMultiselectOptions');
```

### `getCurrentPage`

The method returns the number of the current page.

```javascript
$('#multiselect').multiselect2('getCurrentPage');
```

### `getSearchCriteria`

The method returns the trimmed value of the search input.

Code example:

```javascript
$('#multiselect').multiselect2('getSearchCriteria');
```

### `isOptionsLoaded`

The method checks if all multi-select items are already loaded.

```javascript
$('#multiselect').multiselect2('isOptionsLoaded', [{"value": "2", "label": "Label #2"}]);
```

This method returns `true` if multiple selection items are loaded, and it returns `false` if they are not loaded.

### `loadOptions`

The method loads the next page with multi-select items from [nextPageUrl](#nextpageurl) according to the [search criteria](#getsearchcriteria).
The multi-select items from the Ajax response are appended to the multi-select.

Code example:

```javascript
$('#multiselect').multiselect2('loadOptions');
```

### `setCurrentPage`

The method configures the current page number.

```javascript
$('#multiselect').multiselect2('setCurrentPage', 2);
```

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
[`<Magento_Tax_module_dir>/Controller/Adminhtml/Rule/AjaxLoadRates.php`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Tax/Controller/Adminhtml/Rule/AjaxLoadRates.php
