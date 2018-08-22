---
group: jsdg
subgroup: 3_Widgets
title: Accordion widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_accordion.html
 - /guides/v1.0/frontend-dev-guide/javascript/widget_accordion.html
---

## Overview

Magento accordion widget is an {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} of the [Magento Tabs widget].

Accordions are generally used to break content into multiple sections that can be swapped to save space.

The accordion {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source is [lib/web/mage/accordion.js].
                                                                                                                  
## Initialize the accordion widget {#accordion_init}

### Initialize accordion in JS components

#### Initialize accordion with `data-*` attributes specified

Generally the accordion widget is instantiated like following:
```javascript
$("#element").accordion();
```

Where:
-   `#element` is the selector of the element for accordion is initialized.
-   `#element` has children with the following attributes specified:
    -   `data-role="title"`
    -   `data-role="content"`

Optionally, you can specify the following:
-   If you want the trigger to be different from the title, add the `data-role="content"` attribute for the element
-   To have the content updated using Ajax, add the `data-ajax="true"` attribute for the element containing the URL for request.

Accordions support arbitrary markup, but the following requirements should be kept:

1.  Titles and contents are specified in the same order in DOM: first title, then contents.
2.  The header, trigger and content are specified, either by adding the `data-*` attributes for the corresponding children elements or by specifying these elements with selectors as options.

Mark-up examples:

```html
<div id="element">
    <div data-role="collapsible">
        <div data-role="trigger">
            <span>Title 1</span>
        </div>
    </div>
    <div data-role="content">Content 1</div>

    <div data-role="collapsible">
        <div data-role="trigger">
            <span>Title 2</span>
        </div>
    </div>
    <div data-role="content">Content 2</div>

    <div data-role="collapsible">
        <div data-role="trigger">
            <span>Title 3</span>
        </div>
    </div>
    <div data-role="content">Content 3</div>
</div>

<script>
    require([
        'jquery',
        'accordion'], function ($) {
        $("#element").accordion();
    });
</script>
```

#### Initialize accordion with option

You can specify the header, content, trigger as options when you initialize the widget.
For example:
```javascript
$("#element").accordion({
    header : "#title-1",
    content : "#content-1",
    trigger : "#trigger-1",
    ajaxUrlElement: "a"
 });
```

### Initialize accordion in a template

The accordion widget can be initialized using the `data-mage-init` attribute or `<script>` element, as described in [JavaScript initialization].

## Options {#accordion_options}

Accordion options coincide with [Magento Tabs options], plus the following custom ones:
-   [active]
-   [multipleCollapsible]
-   [openOnFocus]

### `active` {#collaps_active}

Defines which tab is active when the widget gets instantiated.

**Type**: Array, String

**Default value**: `0`

Example of the accordion initialization with the <code>active</code> option specified:
```javascript
$("#element").accordion({ active: "0 1"});
$("#element").accordion({ active: [0,1]});
```

### `multipleCollapsible` {#collaps_multi}
Defines if multiple panels can be expanded at the same time.

**Type**: Boolean

**Default value**: `false`

Example of the accordion initialization with the `multipleCollapsible` option specified:
```javascript
$("#element").accordion({ multipleCollapsible: false});
```

Get or set the `multipleCollapsible` option, after initialization:
```javascript
//getter
var multipleCollapsible = $("#element").accordion("option","multipleCollapsible");

//setter
$("#element").tabs("option","multipleCollapsible",false);
```

### `openOnFocus` {#collaps_open}
For keyboard navigation defines if the accordion expands when the title gets in focus.

**Type**: Boolean

**Default value**: `false`

## Methods {#accordion_methods}

Accordion widget options and keyboard interaction mostly coincide with the Magento tabs widget methods.

The custom accordion methods are the following:
-   [activate()]
-   [deactivate()]

### `activate(index)` {#meth_act}
Activate a tab with the specified `index`.

**Type**: Number, Array.

If no `index` is passed, all panels are activated.

Code examples:

```javascript
$( "#element" ).accordion( "activate" );
$( "#element" ).accordion( "activate", 1 );
$( "#element" ).accordion( "activate", [0,1]);
```

### `deactivate(index)` {#meth_deact}
Deactivate a tab with the specified `index`.

**Type**: Number, Array.

If no index is passed, all panels are deactivated.

Code examples:

```javascript
$( "#element" ).accordion( "deactivate" );
$( "#element" ).accordion( "deactivate", 1 );
$( "#element" ).accordion( "deactivate", [0,1]);
```

[Magento Tabs widget]: {{page.baseurl}}/javascript-dev-guide/widgets/widget_tabs.html
[lib/web/mage/accordion.js]: {{site.mage2000url}}lib/web/mage/accordion.js
[JavaScript initialization]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html#data_mage_init
[Magento Tabs options]: {{page.baseurl}}/javascript-dev-guide/widgets/widget_tabs.html#fedg_tabs_options
[active]: #collaps_active
[multipleCollapsible]: #collaps_multi
[openOnFocus]: #collaps_open
[activate()]: #meth_act
[deactivate()]: #meth_deact