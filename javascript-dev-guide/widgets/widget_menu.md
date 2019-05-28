---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Menu widget
menu_order: 8
menu_title: Menu widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_menu.html
---
## Overview

The Magento menu widget is a customized <a href="http://api.jqueryui.com/menu/" target="_blank">jQuery UI Menu widget</a>. Magento menu extends the default functionality with the following:
<ul>
<li>expanding all layers of the menu tree past the second layer</li>
<li>declaring a responsive menu</li>
<li>setting hover delay</li>
</ul>
The Magento menu {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source is <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/menu.js" target="_blank">lib/web/mage/menu.js</a>.

## Initialize the menu widget   {#menu_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.

## Options   {#menu_options}

Menu widget options mostly coincide with the options of the {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} UI Menu widget, with addition of the following custom ones:
<ul>

<li><a href="#m_delay">delay</a></li>
<li><a href="#m_responsive">responsive</a></li>
<li><a href="#m_expanded">expanded</a></li>


</ul>

### `delay`   {#m_delay}

Set the delay length of opening submenu.

**Type**: Number

**Default value**: `300`

### `responsive`   {#m_responsive}

Setting the default responsive handler for the navigation widget.

**Type**: Boolean.

**Default value**: `false`

### `expanded`   {#m_expanded}

Display top level navigational items in mobile menu or all items.

**Type**: Boolean.

**Default value**: `false`

## Methods and Events   {#menu_methods}

The Magento menu widget has all default <a href="http://api.jqueryui.com/menu/" target="_blank">jQuery UI menu widget</a> methods and events.




