---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Menu widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_menu.html
---
## Overview

The Magento menu widget is a customized [jQuery UI Menu widget](http://api.jqueryui.com/menu/){:target="_blank"}. Magento menu extends the default functionality with the following:

-   expanding all layers of the menu tree past the second layer
-   declaring a responsive menu
-   setting hover delay

The Magento menu {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source is [lib/web/mage/menu.js].

## Initialize the menu widget {#menu_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript] topic.

## Options {#menu_options}

Menu widget options mostly coincide with the options of the jQuery UI Menu widget, with addition of the following custom ones:
-   [delay](#m_delay)
-   [responsive](#m_responsive)
-   [expanded](#m_expanded)

### `delay` {#m_delay}
Set the delay length of opening submenu.

**Type**: Number

**Default value**: `300`

### `responsive` {#m_responsive}
Setting the default responsive handler for the navigation widget.

**Type**: Boolean.

**Default value**: `false`

### `expanded` {#m_expanded}
Display top level navigational items in mobile menu or all items.

**Type**: Boolean.

**Default value**: `false`

## Methods and Events {#menu_methods}

The Magento menu widget has all default [jQuery UI menu widget] methods and events.


[lib/web/mage/menu.js]: {{site.mage2000url}}lib/web/mage/menu.js
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
[jQuery UI menu widget]: http://api.jqueryui.com/menu/

## Code Sample {#menu_code_sample}

The following example is just a sample to show how the widget is initialized and how the options can be passed during widget's initialization.

```html
<nav class="navigation" data-action="navigation">
    <ul id="menu" data-mage-init='{"menu":{"responsive":true, "expanded":true, "delay": 200, "position":{"my":"left top","at":"left+10 top+30"}}}'>
        <li class="level0 level-top ui-menu-item">Toys</li>
        <li class="level0 level-top parent ui-menu-item">Electronics
            <ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all">
                <li class="ui-menu-item"><a href="#">Home Entertainment</a></li>
                <li class="ui-menu-item"><a href="#">Routers</a></li>
            </ul>
        </li>
        <li class="level0 level-top ui-menu-item">Music
            <ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all">
                <li class="ui-menu-item">
                    <a href="#">Alternative</a>
                </li>
                <li class="ui-menu-item">
                    <a href="#">Classic</a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
```

### Result

As result we'll have a menu with given structure with some child items.

![Menu Widget]({{ page.baseurl }}/javascript-dev-guide/widgets/images/menu-widget-result.png)
