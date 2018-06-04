---
group: jsdg
subgroup: 3_Widgets
title: Menu widget
menu_order: 8
menu_title: Menu widget
version: 2.1
github_link: javascript-dev-guide/widgets/widget_menu.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/widget_menu.html
  - guides/v1.0/frontend-dev-guide/javascript/widget_menu.html
---
<h2>Overview</h2>

The Magento menu widget is a customized <a href="http://api.jqueryui.com/menu/" target="_blank">jQuery UI Menu widget</a>. Magento menu extends the default functionality with the following:
<ul>
<li>expanding all layers of the menu tree past the second layer</li>
<li>declaring a responsive menu</li>
<li>setting hover delay</li>
</ul>
The Magento menu {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source is <a href="{{ site.mage2000url }}lib/web/mage/menu.js" target="_blank">lib/web/mage/menu.js</a>.

<h2 id="menu_init">Initialize the menu widget</h2>
For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.

<h2 id="menu_options">Options</h2>
Menu widget options mostly coincide with the options of the {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} UI Menu widget, with addition of the following custom ones:
<ul>

<li><a href="#m_delay">delay</a></li>
<li><a href="#m_responsive">responsive</a></li>
<li><a href="#m_expanded">expanded</a></li>


</ul>

<h3 id="m_delay"><code>delay</code></h3>
Set the delay length of opening submenu.

**Type**: Number

**Default value**: `300`

<h3 id="m_responsive"><code>responsive</code></h3>
Setting the default responsive handler for the navigation widget.

**Type**: Boolean.

**Default value**: `false`

<h3 id="m_expanded"><code>expanded</code></h3>
Display top level navigational items in mobile menu or all items.

**Type**: Boolean.

**Default value**: `false`


<h2 id="menu_methods">Methods and Events</h2>
The Magento menu widget has all default <a href="http://api.jqueryui.com/menu/" target="_blank">jQuery UI menu widget</a> methods and events.




