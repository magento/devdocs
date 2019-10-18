---
group: javascript-developer-guide
subgroup: 3_Widgets
title: RemainingCharacters widget
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The RemainingCharacters [widget](https://glossary.magento.com/widget/) allows you to display the remaining characters count for a text field.

The RemainingCharacters widget can be used only in the frontend area.

The RemainingCharacters widget source is [`<Magento_Catalog_module_dir>/view/frontend/web/js/product/remaining-characters.js`][].

## Initialize the RemainingCharacters widget

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript][] topic.

The RemainingCharacters widget is instantiated with:

```javascript
$("#remaining-characters").remainingCharacters({
    maxLength: 5,
    noteSelector: '.note',
    counterSelector: '.note .character-counter'
});``
```

Where:

-  `#remaining-characters` is the selector of the element which will display RemainingCharacters.

The following example shows a PHTML file using the script:

```html
<script>
    require([
        'jquery',
        'Magento_Catalog/js/product/remaining-characters'
    ], function ($) {
        'use strict';

        $("#remaining-characters").remainingCharacters({
            maxLength: 5,
            noteSelector: '.note',
            counterSelector: '.note .character-counter'
        });
    });
</script>
```

## Options

-  [counterSelector](#counterselector)
-  [errorClass](#errorclass)
-  [maxLength](#maxlength)
-  [noDisplayClass](#nodisplayclass)
-  [noteSelector](#noteselector)
-  [remainingText](#remainingtext)
-  [tooManyText](#toomanytext)

### `counterSelector`

The selector of counter element.

**Type**: String

**Default value**: `undefined`

### `errorClass`

The error class that appends to the [note element](#noteselector) if the [maxLength](#maxlength) is exceeded.

**Type**: String

**Default value**: `'mage-error'`

### `maxLength`

The maximum length of the text for the field.

**Type**: Integer

**Default value**: `undefined`

### `noDisplayClass`

The class that appends to the [counter element](#counterselector) if the field value is empty.

**Type**: String

**Default value**: `'no-display'`

### `noteSelector`

The selector of note element. The note element contains the [counter element](#counterselector) and the [error class](#errorclass) is added to the note element when the [maxLength](#maxlength) is exceeded.

**Type**: String

**Default value**: `undefined`

### `remainingText`

The text that shows in the [counter element](#counterselector) if the [maxLength](#maxlength) is not exceeded.

**Type**: String

**Default value**: `$t('remaining')`

### `tooManyText`

The text that shows in the [counter element](#counterselector) if the [maxLength](#maxlength) is exceeded.

**Type**: String

**Default value**: `$t('too many')`

## Code sample

This example shows the text field with the note that shows you a message about the remaining characters.

```html
<input id="remaining-characters" type="text"/>
<p class="note">
    <span class="character-counter"></span>
</p>
<script>
    require([
        "jquery",
        "Magento_Catalog/js/product/remaining-characters"
    ], function ($) {
        'use strict';

        $('#remaining-characters').remainingCharacters({
            maxLength: 5,
            noteSelector: '.note',
            counterSelector: '.note .character-counter'
        });
    });
</script>
```

### Result

![RemainingCharacters widget example with not exceeded text length]({{ site.baseurl }}/common/images/widget/remaining-characters-widget-with-not-exceeded-text-length.png)
![RemainingCharacters widget example with exceeded text length]({{ site.baseurl }}/common/images/widget/remaining-characters-widget-with-exceeded-text-length.png)

<!-- Link Definitions -->
[`<Magento_Catalog_module_dir>/view/frontend/web/js/product/remaining-characters.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/view/frontend/web/js/product/remaining-characters.js
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
