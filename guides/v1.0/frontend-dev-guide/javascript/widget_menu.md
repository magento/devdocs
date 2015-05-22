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

The Magento menu widget is a customized <a href="http://api.jqueryui.com/menu/" target="_blank">jQuery UI Menu widget</a>. This widget extends functionality to include:
<ul>
<li>expanding all layers of the menu tree past the second layer.</li>
<li>declaring a responsive menu</li>
<li>setting hover delay</li>
</ul>
The menu widget source file is <a href="{{site.mage2000url}}lib/web/mage/loader.js" target="_blank">lib/web/mage/loader.js</a>.

<h2>Options</h2>
Menu widget options mostly coincide with the options of the jQuery UI Menu widget, with addition of several custom ones:
<ul>
<li><a href="#m_expanded">expanded</a></li>
<li><a href="#m_responsive">responsive</a></li>
<li><a href="#m_delay">delay</a></li>

</ul>

<h3 id="#m_expanded">expanded</h3>
Expand all submenu's past the second layer of submenus
<p class="q">SHta?</p>

Type: Boolean

Default value: false

<h3 id="#m_responsive">responsive</h3>
Setting the default responsive handler for the navigation widget.

Type: Boolean.

Default value: false

<h3 id="#m_delay">delay</h3>
Set the delay length of opening submenu.

Type: Int

Default value: 300

<h2>Methods</h2>
The Magento menu widget has all default jQuery UI menu widget methods, plus the following custom ones:

<ul>
<li><a href="#m_isexpanded">isExpanded()</a></li>
<li><a href="#m_toggleMobileMode">_toggleMobileMode()</a></li>
<li><a href="#m_delay">delay</a></li>

</ul>

<h3>isExpanded()</h3>
This function adds an 'expanded' class to the submenu containers past the second level of sub navigation, sets the aria-expanded attribute to true, and removes the aria-hidden attribute
Visibility: public
<h3>_toggleMobileMode()</h3>
This function dictates the mobile mode of the widget. Coverts hover to click.

Visibility: private
<h3>_delay()</h3>
This function revert the changes dictated in the _toggleMobileMode

 Visibility: private