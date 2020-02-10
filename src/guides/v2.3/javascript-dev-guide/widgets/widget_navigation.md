---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Navigation widget
---

Magento navigation widget is an [extension](https://glossary.magento.com/extension) of the [Magento Menu widget]({{page.baseurl}}/javascript-dev-guide/widgets/widget_menu.html) with the following funcitonalities:

-  Expanding all layers of the menu tree past the second layer.
-  Limiting the maximum number of list items contained within the main
   navigation (overflow items are placed into a secondary navigation
   level).
-  Method for handling the responsive layout of the menu.

The navigation widget source is present in [lib/web/mage/menu.js] along with the menu widget source.

## Initialize the navigation widget {#navigation_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript] topic.

## Options {#navigation_options}

The navigation widget has the following options:

-  [breakpoint](#n_breakpoint)
-  [container](#n_container)
-  [maxItems](#n_maxItems)
-  [moreText](#n_moreText)
-  [responsiveAction](#n_responsiveAction)

### `breakpoint` {#n_breakpoint}

Width of user's window in px for which the menu switches between mobile view and desktop view.

**Type**: Number

**Default value**: `768`

### `container` {#n_container}

Container's CSS selector to track the menu overflow on responsive navigation.

**Type**: String

**Default value**: `#menu`

### `maxItems` {#n_maxItems}

The number of top level navigational items in main menu.

**Type**: Number

**Default value**: `null`

### `moreText` {#n_moreText}

Set the text for the overflow menu (i.e. more)

**Type**: String

**Default value**: `more`

### `responsiveAction` {#n_responsiveAction}

The default responsive handler for the navigation widget.

**Type**: String

**Default value**: `wrap`

**Accepted values**: `wrap`, `onResize`, `onReload`

## Methods {#navigation_methods}

-  [setMaxItems()](#nav_setMaxItems)
-  [setupMoreMenu()](#nav_setupMoreMenu)

### `setMaxItems()` {#nav_setMaxItems}
Moves the list items that are more than the total max item number set by the user option.

### `setupMoreMenu()` {#nav_setupMoreMenu}
Builds the more overflowing menu by cloning the main menu items.

[lib/web/mage/menu.js]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/menu.js
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
