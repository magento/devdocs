---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Navigation widget
menu_order: 11
menu_title: Navigation widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_navigation.html
---

## Overview

Magento navigation widget is a customized <a href="http://api.jqueryui.com/menu/" target="_blank">jQuery UI Menu widget</a>. Magento navigation extends the default functionality with the following:
<ul>
<li>Expanding all layers of the menu tree past the second layer.</li>
<li>Limiting the maximum number of list items contained within the main navigation (overflow items are placed into a secondary navigation level).</li>
<li>Method for handling the responsive {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} of the menu.</li>
</ul>

The navigation {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source is <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/menu.js" target="_blank">lib/web/mage/menu.js</a>

## Initialize the navigation widget   {#navigation_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.

## Options   {#navigation_options}

The navigation widget has the following options:
<ul>
<li><a href="#n_breakpoint">breakpoint</a></li>
<li><a href="#n_container">container</a></li>
<li><a href="#n_maxItems">maxItems</a></li>
<li><a href="#n_moreText">moreText</a></li>
<li><a href="#n_responsiveAction">responsiveAction</a></li>
</ul>

### `breakpoint`   {#n_breakpoint}


Width of user's window in px for which the menu switches between mobile view and desktop view.

**Type**: Number

**Default value**: `768`

### `container`   {#n_container}


Container to track the menu overflow on responsive navigation.

**Type**: String

**Default value**: `#menu`

### `maxItems`   {#n_maxItems}


The number of top level navigational items in main menu.

**Type**: Number

**Default value**: `null`

### `moreText`   {#n_moreText}


Set the text for the overflow menu (i.e. more)

**Type**: String

**Default value**: `more`

### `responsiveAction`   {#n_responsiveAction}


The default responsive handler for the navigation widget.

**Type**: String

**Default value**: `'wrap'`

**Accepted values**: `wrap`, `onResize`, `onLoad`

## Methods   {#navigation_methods}

<ul>
<li><a href="#nav_setMaxItems">setMaxItems()</a></li>
<li><a href="#nav_setupMoreMenu">setupMoreMenu()</a></li>
</ul>


### `setMaxItems()`   {#nav_setMaxItems}

Moves the list items that are more than the total max item number set by the user option.

### `setupMoreMenu()`   {#nav_setupMoreMenu}

Builds the more overflowing menu by cloning the main menu items.
