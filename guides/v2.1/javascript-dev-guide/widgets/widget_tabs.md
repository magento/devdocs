---
group: jsdg
subgroup: 3_Widgets
title: Tabs widget
menu_title: Tabs widget
menu_order: 14
version: 2.1
github_link: javascript-dev-guide/widgets/widget_tabs.md
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_tabs.html
 - /guides/v1.0/frontend-dev-guide/javascript/widget_tabs.html
---

## Overview {#fedg_tabs-widget_overview}

The Magento tabs widget implements single content area with multiple panels, each associated with a header in a list. It uses the [Magento collapsible widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank).

The tabs {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source is [lib/web/mage/tabs.js]({{ site.mage2000url }}lib/web/mage/tabs.js" target="_blank).


## Initialize the tabs widget {#fedg_tabs_init}
For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank) topic.


Generally the tabs widget is instantiated like following:
<pre>
$("#element").tabs();
</pre>

Where:
<ul>
<li><code>#element</code> is the selector of the element for tabs is initialized.</li>
</ul>

Phtml template file examples using script:

{%highlight html%}
<script>
    require([
        'jquery',
        'tabs'], function ($) {
        $("#element").tabs();
    });
</script>
{%endhighlight%}

## Options {#fedg_tabs_options}

The tabs widget has the following options:

* [active](#fedg_tabs_options-active)
* [ajaxUrlElement](#fedg_tabs_options-ajaxUrlElement)
* [ajaxContent](#fedg_tabs_options-ajaxContent)
* [animate](#fedg_tabs_options-animate)
* [closedState](#fedg_tabs_options-closedState)
* [collapsible](#fedg_tabs_options-collapsible)
* [collapsibleElement](#fedg_tabs_options-collapsibleElement)
* [content](#fedg_tabs_options-content)
* [disabled](#fedg_tabs_options-disabled)
* [disabledState](#fedg_tabs_options-disabledState)
* [header](#fedg_tabs_options-header)
* [icons](#fedg_tabs_options-icons)
* [loadingClass](#fedg_tabs_options-loadingClass)
* [openedState](#fedg_tabs_options-openedState)
* [openOnFocus](#fedg_tabs_options-openOnFocus)
* [saveState](#fedg_tabs_options-saveState)
* [trigger](#fedg_tabs_options-trigger)

### <code>active</code> {#fedg_tabs_options-active}

Index of the tab, which is active at the moment of initialization. Starts from "0"

**Type**: Number

**Default value**: `0`

### <code>ajaxUrlElement</code> {#fedg_tabs_options-ajaxUrlElement}
Selector for the tab element, which contains the {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} for the Ajax request.
The option of the [collapsible]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank) widget used by tabs.

**Type**: String

**Default value**: `[data-ajax=true]`

### <code>ajaxContent</code> {#fedg_tabs_options-ajaxContent}
Defines if the content is loaded by Ajax request.
The option of the [collapsible]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank) widget used by tabs.

**Type**: Boolean

**Default value**: `false`

### <code>animate</code> {#fedg_tabs_options-animate}
Specifies if the collapse/expand actions are performed with animation. The option of the [collapsible]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank) widget used by tabs.

**Type**:
Multiple types are supported:
<ul>
<li>Boolean: the <code>false</code> value disables the animation </li>
<li>Number: duration in milliseconds</li>
<li>String: is parsed to an object as a json string</li>
<li>Object:
<pre>
{
duration: &lt;Number&gt;,
easing: &lt;String&gt;,
&lt;propToAnimate&gt;: &lt;howToAnimate&gt;
}
</pre>
For details about the object passed, see [jQuery.animate()](http://api.jquery.com/animate/" target="_blank).
</li>
</ul>

**Default value**: `false`

### <code>closedState</code> {#fedg_tabs_options-closedState}
Class assigned to the tab being closed.

**Type**: String

**Default value**: `null`

### <code>collapsible</code> {#fedg_tabs_options-collapsible}

If this option is set to false, the content is not collapsed when the panel is active. The option of the [collapsible]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank) widget used by tabs.

**Type**: Boolean

**Default value**: `false`

### <code>collapsibleElement</code> {#fedg_tabs_options-collapsibleElement}
Selector of the element for which the collapsible widget is initialized.

**Type**: String

**Default value**: `[data-role=collapsible]`

### <code>content</code> {#fedg_tabs_options-content}

Selector for the content element, searched for using `.find()` on the main collapsible element. The option of the [collapsible]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank) widget used by tabs.

**Type**: String

**Default value**: `[data-role=content]`

### <code>disabled</code> {#fedg_tabs_options-disabled}

Array of the elements' indexes which are disabled when the widget is initialized.

**Type**: Array of numbers.

**Default value**: `[]`

### <code>disabledState</code> {#fedg_tabs_options-disabledState}
Class assigned to the tab being currently disabled.

**Type**: String

**Default value**: `null`

### <code>header</code> {#fedg_tabs_options-header}

Selector for the header element, searched for using `.find()` on the main collapsible element.
The option of the [collapsible]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank) widget used by tabs.

**Type**: String

**Default value**: `[data-role=title]`

### <code>icons</code> {#fedg_tabs_options-icons}

The classes for icons to be used in headers. If no classes are specified, icons are not be created. A new span is created and appended to the header, the classes for this span are automatically changed whenever the content gets expanded/collapsed.
The option of the [collapsible]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank) widget used by tabs.

**Type**: String

**Default value**: <code>{ header: null, activeHeader: null }</code>


### <code>loadingClass</code> {#fedg_tabs_options-loadingClass}
Class assigned to a tab during content loading for this tab.

**Type**: String

**Default value**: `null`

### <code>openedState</code> {#fedg_tabs_options-openedState}
Class name assigned to a tab which is being currently opened.

**Type**: String

**Default value**: `null`

### <code>openOnFocus</code> {#fedg_tabs_options-openOnFocus}
Used for setting keyboard navigation. Defines if the tab is expanded when its header is in focus.

**Type**: Boolean

**Default value**: `true`

### <code>saveState</code> {#fedg_tabs_options-saveState}

Specifies if the state is saved in the local storage if the browser supports it. Otherwise will be saved into a cookie.
The option of the [collapsible]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank) widget used by tabs.

**Type**: Boolean

**Default value**: `true`

### <code>trigger</code> {#fedg_tabs_options-trigger}

Selector for the trigger element, applied using `.find()` on the main collapsible element. If the trigger is not found, the header becomes a trigger.
The option of the [collapsible]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank) widget used by tabs.

**Type**:

- String
- {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} object

**Default value**: `[data-role=trigger]`


## Methods {#tabs_methods}

The tabs widget has the following methods:
<ul>
<li>[activate()](#fedg_tabs_methods-activate)</li>
<li>[enable()](#fedg_tabs_methods-enable)</li>
<li>[deactivate()](#fedg_tabs_methods-deactivate)</li>
<li>[disable()](#fedg_tabs_options-disable)</li>
</ul>
### <code>activate()</code> {#fedg_tabs_methods-activate}

`activate(index)` displays `content` for the tab with the corresponding `index`.


### <code>enable()</code> {#fedg_tabs_methods-enable}
`enable(index)` enables the tab with the corresponding `index`.

### <code>deactivate()</code> {#fedg_tabs_methods-deactivate}
`deactivate(index)` hides `content` for the tab with the corresponding `index`.

### <code>disable()</code> {#fedg_tabs_options-disable}
`disable(index)` disables the tab with the corresponding `index`.

## Events {#fedg_tabs_events-methods}
Tabs is subscribed to the same events as the [collapsible]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank) widget:

<ul>
<li>[beforeOpen callback](#fedg_tabs_beforeOpen_callback)</li>
<li>[dimensionsChanged](#fedg_tabs_dimensionsChanged)</li>
</ul>

### <code>beforeOpen callback</code> {#fedg_tabs_beforeOpen_callback}
Called before the content is opened.

### <code>dimensionsChanged</code> {#fedg_tabs_dimensionsChanged}
Called after content is opened or closed.
