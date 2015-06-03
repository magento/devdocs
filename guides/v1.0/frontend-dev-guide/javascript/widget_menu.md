---
layout: default
group: fedg
subgroup: Javascript
title: Magento Menu widget
menu_order: 2
menu_title: Magento Menu widget
github_link: frontend-dev-guide/javascript/widget_menu.md
---
<h2>Overview</h2>

The Magento menu widget is a customized <a href="http://api.jqueryui.com/menu/" target="_blank">jQuery UI Menu widget</a>. The Magento widget extends the functionality to include:
<ul>
<li>expanding all layers of the menu tree past the second layer.</li>
<li>declaring a responsive menu</li>
<li>setting hover delay</li>
</ul>
The Magento menu widget source is <a href="{{site.mage2000url}}lib/web/mage/loader.js" target="_blank">lib/web/mage/loader.js</a>.

<h2 id="menu_init">Initialization</h2>

<h2 id="menu_options">Options</h2>
Menu widget options mostly coincide with the options of the jQuery UI Menu widget, with addition of the following custom ones:
<ul>
<li><a href="#m_expanded">expanded</a></li>
<li><a href="#m_responsive">responsive</a></li>
<li><a href="#m_delay">delay</a></li>

</ul>

<h3 id="#m_expanded">expanded</h3>
Expand all submenu's past the second layer of sub-menus.
<p class="q">SHta?</p>

**Type**: Boolean

**Default value**: `false`

<h3 id="#m_responsive">responsive</h3>
Setting the default responsive handler for the navigation widget.

**Type**: Boolean.

**Default value**: false

<h3 id="#m_delay">delay</h3>
Set the delay length of opening submenu.

Type: Int

Default value: 300

<h2>Methods</h2>
The Magento menu widget has all default jQuery UI menu widget methods, plus the following custom ones:

<ul>
<li><a href="#m_isexpanded">isExpanded()</a></li>

</ul>

<h3>isExpanded()</h3>
Adds the `expanded` class to the submenu containers past the second level of sub navigation, sets the aria-expanded attribute to true, and removes the aria-hidden attribute

<p class="q">What is meant by "aria"? area?></p>
<p class="q">In the code, there's also the toggle() method, it is not mentioned in <code>navigation</code> or <code>menu</code> docs, should it be mentioned?</p>
