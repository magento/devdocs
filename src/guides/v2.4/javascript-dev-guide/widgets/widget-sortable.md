---
group: javascript-developer-guide
title: Sortable widget
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The Sortable [widget](https://glossary.magento.com/widget/) is a customized jQuery [Sortable Widget][] that allows you to reorder sortable items using *Up* and *Down* buttons.

The Sortable widget is only available in the [adminhtml](https://glossary.magento.com/adminhtml) area.

The widget source file is [`<Magento_Theme_module_dir>/view/adminhtml/web/js/sortable.js`][].

## Initialize the Sortable widget

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript][] topic.

Use the `sortable()` function to instantiate the Sortable widget:

```javascript
$('#sortable').sortable();
```

Where:

-  `#sortable` is the selector of the block element where Sortable is initialized.

The following example shows a PHTML file using the script:

```html
<script>
    require([
            'jquery',
            'Magento_Theme/js/sortable'
        ], function ($) {
            'use strict';

            $('#sortable').sortable();
        });
</script>
```

## Methods, Options and Events inheritance

Most options, methods, and events for the Sortable widget correspond to the jQuery [Sortable Widget] options.

## Options

The Sortable has only two custom options that are different from default [Sortable Widget] options.

-  [moveUpEvent](#moveupevent)
-  [moveDownEvent](#movedownevent)

### `moveUpEvent`

The name of the event which moves a sortable item up.

**Type**: String

**Default value**: `'moveUp'`

### `moveDownEvent`

The name of the event which moves a sortable item down.

**Type**: String

**Default value**: `'moveDown'`

## Code sample

This example shows how to initialize the sortable widget.

```html
<ul id="sortable-list">
    <li>
        <div>
            <span>Sortable Item #1</span>
        </div>
        <input type="button" class="up" title="Up" value="Up">
        <input type="button" class="down" title="Down" value="Down">
    </li>
    <li>
        <div>
            <span>Sortable Item #2</span>
        </div>
        <input type="button" class="up" title="Up" value="Up">
        <input type="button" class="down" title="Down" value="Down">
    </li>
    <li>
        <div>
            <span>Sortable Item #3</span>
        </div>
        <input type="button" class="up" title="Up" value="Up">
        <input type="button" class="down" title="Down" value="Down">
    </li>
</ul>

<script>
require([
    "jquery",
    "jquery/ui",
    "Magento_Theme/js/sortable"
], function ($) {
    'use strict';

    $('#sortable-list').sortable({
       axis: 'y',
       tolerance: 'pointer',
       items: 'li'
    });
});
</script>
```

### Result

As a result, we see the list of sortable items that can be sorted via *Up*, *Down* buttons or via dragging.

![Sortable widget initial view Example]({{ site.baseurl }}/common/images/widget/sortable-widget-initial-result.png)
![Sortable widget sorted view Example]({{ site.baseurl }}/common/images/widget/sortable-widget-sorted-result.png)

<!-- Link Definitions -->

[Sortable Widget]: https://api.jqueryui.com/sortable/
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
[`<Magento_Theme_module_dir>/view/adminhtml/web/js/sortable.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/view/adminhtml/web/js/sortable.js
