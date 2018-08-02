---
group: jsdg
subgroup: 3_Widgets
title: Navigation widget
menu_order: 11
menu_title: Navigation widget
version: 2.1
github_link: javascript-dev-guide/widgets/widget_navigation.md
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_navigation.html
 - /guides/v1.0/frontend-dev-guide/javascript/widget_navigation.html
---

## Overview
Magento navigation widget is a customized [jQuery UI Menu widget](http://api.jqueryui.com/menu/" target="_blank). Magento navigation extends the default functionality with the following:
<ul>
<li>Expanding all layers of the menu tree past the second layer.</li>
<li>Limiting the maximum number of list items contained within the main navigation (overflow items are placed into a secondary navigation level).</li>
<li>Method for handling the responsive {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} of the menu.</li>
</ul>

The navigation {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source is [lib/web/mage/menu.js]({{ site.mage2000url }}lib/web/mage/menu.js" target="_blank)

## Initialize the navigation widget {#navigation_init}
For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank) topic.

## Options {#navigation_options}
The navigation widget has the following options:
<ul>
<li>[breakpoint](#n_breakpoint)</li>
<li>[container](#n_container)</li>
<li>[maxItems](#n_maxItems)</li>
<li>[moreText](#n_moreText)</li>
<li>[responsiveAction](#n_responsiveAction)</li>
</ul>

### <code>breakpoint</code> {#n_breakpoint}

Width of user's window in px for which the menu switches between mobile view and desktop view.

**Type**: Number

**Default value**: `768`

### <code>container</code> {#n_container}

Container to track the menu overflow on responsive navigation.

**Type**: String

**Default value**: `#menu`

### <code>maxItems</code> {#n_maxItems}

The number of top level navigational items in main menu.

**Type**: Number

**Default value**: `null`

### <code>moreText</code> {#n_moreText}

Set the text for the overflow menu (i.e. more)

**Type**: String

**Default value**: `more`

### <code>responsiveAction</code> {#n_responsiveAction}

The default responsive handler for the navigation widget.

**Type**: String

**Default value**: `'wrap'`

**Accepted values**: `wrap`, `onResize`, `onLoad`


## Methods {#navigation_methods}
<ul>
<li>[setMaxItems()](#nav_setMaxItems)</li>
<li>[setupMoreMenu()](#nav_setupMoreMenu)</li>
</ul>


### <code>setMaxItems()</code> {#nav_setMaxItems}
Moves the list items that are more than the total max item number set by the user option.

### <code>setupMoreMenu()</code> {#nav_setupMoreMenu}
Builds the more overflowing menu by cloning the main menu items.
