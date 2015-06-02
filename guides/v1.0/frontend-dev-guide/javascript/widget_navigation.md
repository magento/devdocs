---
layout: default
group: fedg
subgroup: Javascript
title: Magento Navigation widget
menu_order: 2
menu_title: Magento Navigation widget
github_link: frontend-dev-guide/javascript/widget_navigation.md
---

<h2>Overview</h2>
Magento navigation widget is a customized <a href="http://api.jqueryui.com/menu/" target="_blank">jQuery UI menu widget</a>. The extended functionality includes:
<ul>
<li>expanding all layers of the menu tree past the second layer.</li>
<li>limiting the maximum number of list items contained within the main navigation (overflow items are placed into a secondary navigation level).</li>
<li>method for handling the responsive layout of the menu.</li>
</ul>

The navigation widget source is `magento/pub/lib/mage/menu.js`

<h2 id="navigation_init">Initialization</h2>
The loader widget is initialized as described in Widget initializaiton.
<!--ADDLINK-->

<h2 id="navigation_options">Options</h2>

<ul>
<li><a href="#n_responsiveAction">responsiveAction</a></li>
<li><a href="#n_maxItems">maxItems: null, //option to set max number of menu items</a></li>
<li><a href="#n_container">container: '#menu', //container to check against navigation length</a></li>
<li><a href="#n_moreText">moreText: $.mage.__('more'),</a></li>
<li><a href="#n_breakpoint">breakpoint: 768</a></li>
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

**Default value**: #menu

<h3 id="n_moreText">moreText</h3>

Set the text for the overflow menu (i.e. more)

**Type**: String

**Default value**: *'more'*

<h3 id="#n_breakpoint">breakpoint</h3>