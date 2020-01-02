---
group: javascript-developer-guide
title: RowBuilder widget
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The RowBuilder [widget](https://glossary.magento.com/widget/) allows you to build a container with rows.

The RowBuilder widget can be used only on the frontend area.

The RowBuilder widget source is [lib/web/mage/row-builder.js][].

## Initialize the RowBuilder widget

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript][] topic.

The RowBuilder widget is instantiated with:

```javascript
$("#row-builder").rowBuilder({
    "rowTemplate":"#row-template",
    "rowContainer":"#row-container",
    "rowParentElem":"<div></div>",
    "remEventSelector":"a",
    "btnRemoveSelector":".action.remove",
    "maxRows":"5"
});``
```

Where:

-  `#row-builder` is the selector of the element which will be the RowBuilder.

The following example shows a PHTML file using the script:

```html
<script>
    require([
        'jquery',
        'rowBuilder'
    ], function ($) {
        'use strict';

        $("#row-builder").rowBuilder({
              "rowTemplate":"#row-template",
              "rowContainer":"#row-container",
              "rowParentElem":"<div></div>",
              "remEventSelector":"a",
              "btnRemoveSelector":".action.remove",
              "maxRows":"5"
        });
    });
</script>
```

## Options

The PopupWindow widget has the following options:

-  [rowTemplate](#rowtemplate)
-  [rowContainer](#rowcontainer)
-  [rowIndex](#rowindex)
-  [rowCount](#rowcount)
-  [rowParentElem](#rowparentelem)
-  [rowContainerClass](#rowcontainerclass)
-  [addRowBtn](#addrowbtn)
-  [btnRemoveIdPrefix](#btnremoveidprefix)
-  [btnRemoveSelector](#btnremoveselector)
-  [rowIdPrefix](#rowidprefix)
-  [additionalRowClass](#additionalrowclass)
-  [addEventSelector](#addeventselector)
-  [remEventSelector](#remeventselector)
-  [hideFirstRowAddSeparator](#hidefirstrowaddseparator)
-  [maxRows](#maxrows)
-  [maxRowsMsg](#maxrowsmsg)

### `rowTemplate`

The row template selector.

**Type**: String

**Default value**: `'#template-registrant'`

### `rowContainer`

The row container selector.

**Type**: String

**Default value**: `'#registrant-container'`

### `rowIndex`

Row index used by the template rows.

**Type**: Integer

**Default value**: `0`

### `rowCount`

Row count.

**Type**: Integer

**Default value**: `0`

### `rowParentElem`

Row parent element.

**Type**: String

**Default value**: `'<li></li>'`

### `rowContainerClass`

Row container class.

**Type**: String

**Default value**: `'fields'`

### `addRowBtn`

The add row button selector.

**Type**: String

**Default value**: `'#add-registrant-button'`

### `btnRemoveIdPrefix`

ID prefix of a remove button.

**Type**: String

**Default value**: `'btn-remove'`

### `btnRemoveSelector`

The remove button selector.

**Type**: String

**Default value**: `'.btn-remove'`

### `rowIdPrefix`

ID prefix of a row element.

**Type**: String

**Default value**: `'row'`

### `additionalRowClass`

The additional row class name which is added after the main class name.

**Type**: String

**Default value**: `'add-row'`

### `addEventSelector`

Default selectors for adding elements to a template.

**Type**: String

**Default value**: `'button'`

### `remEventSelector`

Default selectors for removing markup elements from a template.

**Type**: String

**Default value**: `'a'`

### `hideFirstRowAddSeparator`

This option specifies if the [remove link](#btnremoveidprefix) and [additional row class](#additionalrowclass) are removed for the first row.

**Type**: Boolean

**Default value**: `true`

### `maxRows`

Max number of rows.

**Type**: Integer

**Default value**: `1000`

### `maxRowsMsg`

The message selector of an element which appears when the max number of rows has been exceeded.

**Type**: String

**Default value**: `#max-registrant-message`

## Code sample

This example shows the row builder container, which adds a new row when you click the **Add Item** button and removes a row when you click the **Remove Item** button.

```html
<script id="row-template" type="text/x-magento-template">
    <div>
        <div class="field name required">
            <label for="field-name<%- data._index_ %>" class="label"><span>Item <%- data._index_ %> Field</span></label>
            <div class="control">
                <input name="field[name][<%- data._index_ %>]" type="text" title="<?= $block->escapeHtmlAttr(__('Name')) ?>" class="input-text"
                       id="field-name<%- data._index_ %>"/>
            </div>
        </div>
        <div class="actions-toolbar">
            <div class="secondary">
                <a href="#" id="btn-remove<%- data._index_ %>" class="action remove"
                   title="Remove Item">
                    <span>Remove Item</span>
                </a>
            </div>
        </div>
    </div>
</script>

<div class="row-builder-example"
     data-mage-init='{
        "rowBuilder":{
            "rowTemplate":"#row-template",
            "rowContainer":"#row-container",
            "rowParentElem":"<div></div>",
            "remEventSelector":"a",
            "btnRemoveSelector":".action.remove",
            "maxRows":"5",
            "maxRowsMsg":"#max-rows-message",
            "addRowBtn":"#add-row-button",
            "additionalRowClass":"additional"
        }
     }'>
    <div id="max-rows-message" style="display: none;" class="message notice limit" role="alert">
        <span>Number of rows exceeded.</span>
    </div>
    <button type="button" id="add-row-button" class="action add">
        <span>Add Item</span>
    </button>
    <div id="row-container"></div>
</div>
```

## Result

As a result, we see the RowBuilder widget example with 5 rows as max.

![RowBuilder widget Example]({{ site.baseurl }}/common/images/widget/row-builder-widget-result.png)
![RowBuilder widget with warning message Example]({{ site.baseurl }}/common/images/widget/row-builder-widget-warning-message-result.png)

<!-- Link Definitions -->
[lib/web/mage/row-builder.js]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/view/frontend/web/js/row-builder.js
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
