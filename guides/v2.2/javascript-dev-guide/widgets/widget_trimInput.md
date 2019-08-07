---
group: javascript-developer-guide
subgroup: 3_Widgets
title: TrimInput widget
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

## Overview

The TrimInput [widget](https://glossary.magento.com/widget) allows trimming spaces for an input field.

The TrimInput widget source is [lib/web/mage/trim-input.js][].

## Initialize the TrimInput widget

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript][] topic.

Generally the TrimInput widget is instantiated like following:

```javascript
$('#element').trimInput();
```

Where:

- `#element` is the selector of the input element for which TrimInput is initialized.

Phtml template file examples using script:

```html
<script>
    require([
        'jquery',
        'mage/trim-input'
    ], function ($) {
        'use strict';
        
        $("#element").trimInput();
    });
</script>
```

## Code sample

The following example shows how to initialize the TrimInput widget.

```html
<input type="text" name="text" id="text" class="input-text" data-mage-init='{"mage/trim-input":{}}' placeholder="Type some text...">
```

## Result

As a result, we have the text input field and the value of this input will be trimmed each time when it is changed.

![TrimInput Input Example]({{ site.baseurl }}/common/images/widget/trimInput-widget-result.png)

[lib/web/mage/trim-input.js]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/trim-input.js
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
