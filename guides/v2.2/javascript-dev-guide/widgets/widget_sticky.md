---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Sticky widget
functional_areas:
 - Frontend
 - Theme
---

## Overview

The sticky widget allows to make a page element fixed on the screen from and to
a specific position while user scrolls the page.

Widget source file is [lib/web/mage/sticky.js].

**Usages:**
- [Magento Bundle]
- [Magento Blank theme]

[lib/web/mage/sticky.js]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/sticky.js
[Magento Bundle]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Bundle/view/frontend/templates/catalog/product/view/summary.phtml
[Magento Blank theme]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/Magento_Theme/web/js/theme.js

## Initialize the sticky widget {#dropdown_init}

The sticky widget can be initialized as described in [JavaScript initialization]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html).

### Initialize with `data-mage-init` attribute

```html
<div class="block-bundle-summary"
     data-mage-init='{"sticky":{"container": ".product-add-form"}}'>
     [...]
 </div>
```

### Initialize in `.js` file with options

```js
$('.sticky-element').sticky({
    container: '.sticky-parent'
});
```

## Options {#dropdown_options}

-  [container](#s_option_container)
-  [spacingTop](#s_option_spacing_top)
-  [stickAfter](#s_option_stick_after)
-  [stickyClass](#s_option_sticky_class)

### `container` {#s_option_container}

Element selector, who's height will be used to restrict the maximum offsetTop
position of the stuck element. Default uses document `body`.

**Type**:

- String

**Default value**: `''`


### `spacingTop` {#s_option_spacing_top}

Spacing in pixels above the stuck element.

**Type**:

- Number
- Function, that will return a Number

**Default value**: `0`

### `stickAfter` {#s_option_stick_after}

Allows postponing sticking, until element will go out of the screen for the number of pixels.

**Type**:

- Number
- Function, that will return a Number

**Default value**: `0`


### `stickyClass` {#s_option_sticky_class}

CSS class for active sticky state.

**Type**:

- String

**Default value**: `_sticky`

## Styles

{:.bs-callout .bs-callout-info}
The Sticky widget won't work without basic CSS Styles.

The page element that has to be sticky has to have a position relative from the
beginning.

```CSS
.sticky-element {
    position: relative;
}
```

## Code Example

Below is an example of how sidebar additional (`.sidebar-additional`) on the 
category page is made sticky.

```html
<script type="text/x-magento-init">
    {
        ".sidebar.sidebar-additional": {
            "sticky": {
                "container": ".columns"
            }
        }
    }
</script>
```

## Result

![Sticky Widget in action]({{ site.baseurl }}/common/images/widget/sticky-widget-result.gif)
