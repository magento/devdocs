---
layout: default
group: javascript
subgroup: JQuery widget details
title: Navigation widget
menu_order: 2
menu_title: Navigation widget
github_link: frontend-dev-guide/javascript/widget_navigation.md
---

<h2>Overview</h2>
Magento navigation widget is a customized <a href="http://api.jqueryui.com/menu/" target="_blank">jQuery UI Menu widget</a>. Magento menu extends the default functionality with the following:
<ul>
<li>expanding all layers of the menu tree past the second layer.</li>
<li>limiting the maximum number of list items contained within the main navigation (overflow items are placed into a secondary navigation level).</li>
<li>method for handling the responsive layout of the menu.</li>
</ul>

The navigation widget source is <a href="{{site.mage2000url}}lib/web/mage/menu.js">lib/web/mage/menu.js</a>

<h2 id="navigation_init">Initialize navigation</h2>
For information about how to initilize a widget in a JS component or `.phtml` template, see the <a href="{{site.baseurl}}frontend-dev-guide/javascript/">Initialize JavaScript</a> topic.

<h2 id="navigation_options">Options</h2>

<ul>
<li><a href="#n_responsiveAction">responsiveAction</a></li>
<li><a href="#n_maxItems">maxItems</a></li>
<li><a href="#n_container">container</a></li>
<li><a href="#n_moreText">moreText</a></li>
<li><a href="#n_breakpoint">breakpoint</a></li>
</ul>

<h3 id="n_responsiveAction">responsiveAction</h3>

The default responsive handler for the navigation widget.

**Type**: String

**Default value**: `'wrap'`

**Accepted values**: *'wrap'*, *'onResize'*, *'onLoad'*

<h3 id="n_maxItems">maxItems</h3>

The number of top level navigational items in main menu.

**Type**: Integer

**Default value**: null

<h3 id="n_container">container</h3>

Container to track the menu overflow on responsive navigation.

**Type**: String

**Default value**: *'#menu'*

<h3 id="n_moreText">moreText</h3>

Set the text for the overflow menu (i.e. more)

**Type**: String

**Default value**: *'more'*

<h3 id="n_breakpoint">breakpoint</h3>

Width of user's window in px for which the menu switches between mobile view and desktop view.

**Type**: Integer

**Default value**: 768

<h2 id="navigation_methods">Methods</h2>
<ul>
<li><a href="#nav_setMaxItems">setMaxItems()</a></li>
<li><a href="#setupMoreMenu">setupMoreMenu()</a></li>
</ul>


<h3 id="nav_setMaxItems">setMaxItems()</h3>
Moves the list items that are more than the total max item number set by the user option.

<h3 id="nav_setupMoreMenu">setupMoreMenu()</h3>
Builds the more overflow menu by cloning the main menu items.