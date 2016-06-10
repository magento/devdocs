---
layout: default
group: jsdg
subgroup: 3_Widgets
title: Navigation widget
menu_order: 11
menu_title: Navigation widget
version: 2.1
github_link: javascript-dev-guide/widgets/widget_navigation.md
---

<h2>Overview</h2>
Magento navigation widget is a customized <a href="http://api.jqueryui.com/menu/" target="_blank">jQuery UI Menu widget</a>. Magento navigation extends the default functionality with the following:
<ul>
<li>Expanding all layers of the menu tree past the second layer.</li>
<li>Limiting the maximum number of list items contained within the main navigation (overflow items are placed into a secondary navigation level).</li>
<li>Method for handling the responsive layout of the menu.</li>
</ul>

The navigation widget source is <a href="{{site.mage2100url}}lib/web/mage/menu.js" target="_blank">lib/web/mage/menu.js</a>

<h2 id="navigation_init">Initialize the navigation widget</h2>
For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{site.gdeurl21}}frontend-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.

<h2 id="navigation_options">Options</h2>
The navigation widget has the following options:
<ul>
<li><a href="#n_breakpoint">breakpoint</a></li>
<li><a href="#n_container">container</a></li>
<li><a href="#n_maxItems">maxItems</a></li>
<li><a href="#n_moreText">moreText</a></li>
<li><a href="#n_responsiveAction">responsiveAction</a></li>
</ul>

<h3 id="n_breakpoint"><code>breakpoint</code></h3>

Width of user's window in px for which the menu switches between mobile view and desktop view.

**Type**: Number

**Default value**: `768`

<h3 id="n_container"><code>container</code></h3>

Container to track the menu overflow on responsive navigation.

**Type**: String

**Default value**: `#menu`

<h3 id="n_maxItems"><code>maxItems</code></h3>

The number of top level navigational items in main menu.

**Type**: Number

**Default value**: `null`

<h3 id="n_moreText"><code>moreText</code></h3>

Set the text for the overflow menu (i.e. more)

**Type**: String

**Default value**: `more`

<h3 id="n_responsiveAction"><code>responsiveAction</code></h3>

The default responsive handler for the navigation widget.

**Type**: String

**Default value**: `'wrap'`

**Accepted values**: `wrap`, `onResize`, `onLoad`


<h2 id="navigation_methods">Methods</h2>
<ul>
<li><a href="#nav_setMaxItems">setMaxItems()</a></li>
<li><a href="#nav_setupMoreMenu">setupMoreMenu()</a></li>
</ul>


<h3 id="nav_setMaxItems"><code>setMaxItems()</code></h3>
Moves the list items that are more than the total max item number set by the user option.

<h3 id="nav_setupMoreMenu"><code>setupMoreMenu()</code></h3>
Builds the more overflowing menu by cloning the main menu items.
