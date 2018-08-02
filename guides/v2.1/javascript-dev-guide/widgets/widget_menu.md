---
group: jsdg
subgroup: 3_Widgets
title: Menu widget
menu_order: 8
menu_title: Menu widget
version: 2.1
github_link: javascript-dev-guide/widgets/widget_menu.md
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_menu.html
 - /guides/v1.0/frontend-dev-guide/javascript/widget_menu.html
---
## Overview

The Magento menu widget is a customized [jQuery UI Menu widget](http://api.jqueryui.com/menu/" target="_blank). Magento menu extends the default functionality with the following:
<ul>
<li>expanding all layers of the menu tree past the second layer</li>
<li>declaring a responsive menu</li>
<li>setting hover delay</li>
</ul>
The Magento menu {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source is [lib/web/mage/menu.js]({{ site.mage2000url }}lib/web/mage/menu.js" target="_blank).

## Initialize the menu widget {#menu_init}
For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank) topic.

## Options {#menu_options}
Menu widget options mostly coincide with the options of the {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} UI Menu widget, with addition of the following custom ones:
<ul>

<li>[delay](#m_delay)</li>
<li>[responsive](#m_responsive)</li>
<li>[expanded](#m_expanded)</li>


</ul>

### <code>delay</code> {#m_delay}
Set the delay length of opening submenu.

**Type**: Number

**Default value**: `300`

### <code>responsive</code> {#m_responsive}
Setting the default responsive handler for the navigation widget.

**Type**: Boolean.

**Default value**: `false`

### <code>expanded</code> {#m_expanded}
Display top level navigational items in mobile menu or all items.

**Type**: Boolean.

**Default value**: `false`


## Methods and Events {#menu_methods}
The Magento menu widget has all default [jQuery UI menu widget](http://api.jqueryui.com/menu/" target="_blank) methods and events.




