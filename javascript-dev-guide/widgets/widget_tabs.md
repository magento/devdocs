---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Tabs widget
menu_title: Tabs widget
menu_order: 14
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_tabs.html
---

## Overview   {#fedg_tabs-widget_overview}

The Magento tabs widget implements single content area with multiple panels, each associated with a header in a list. It uses the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank">Magento collapsible widget</a>.

The tabs {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source is <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/tabs.js" target="_blank">lib/web/mage/tabs.js</a>.

## Initialize the tabs widget   {#fedg_tabs_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.


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

## Options   {#fedg_tabs_options}

The tabs widget has the following options:

* <a href="#fedg_tabs_options-active">active</a>
* <a href="#fedg_tabs_options-ajaxUrlElement">ajaxUrlElement</a>
* <a href="#fedg_tabs_options-ajaxContent">ajaxContent</a>
* <a href="#fedg_tabs_options-animate">animate</a>
* <a href="#fedg_tabs_options-closedState">closedState</a>
* <a href="#fedg_tabs_options-collapsible">collapsible</a>
* <a href="#fedg_tabs_options-collapsibleElement">collapsibleElement</a>
* <a href="#fedg_tabs_options-content">content</a>
* <a href="#fedg_tabs_options-disabled">disabled</a>
* <a href="#fedg_tabs_options-disabledState">disabledState</a>
* <a href="#fedg_tabs_options-header">header</a>
* <a href="#fedg_tabs_options-icons">icons</a>
* <a href="#fedg_tabs_options-loadingClass">loadingClass</a>
* <a href="#fedg_tabs_options-openedState">openedState</a>
* <a href="#fedg_tabs_options-openOnFocus">openOnFocus</a>
* <a href="#fedg_tabs_options-saveState">saveState</a>
* <a href="#fedg_tabs_options-trigger">trigger</a>

### `active`   {#fedg_tabs_options-active}


Index of the tab, which is active at the moment of initialization. Starts from "0"

**Type**: Number

**Default value**: `0`

### `ajaxUrlElement`   {#fedg_tabs_options-ajaxUrlElement}

Selector for the tab element, which contains the {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} for the Ajax request.
The option of the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs.

**Type**: String

**Default value**: `[data-ajax=true]`

### `ajaxContent`   {#fedg_tabs_options-ajaxContent}

Defines if the content is loaded by Ajax request.
The option of the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs.

**Type**: Boolean

**Default value**: `false`

### `animate`   {#fedg_tabs_options-animate}

Specifies if the collapse/expand actions are performed with animation. The option of the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs.

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
For details about the object passed, see <a href="http://api.jquery.com/animate/" target="_blank">jQuery.animate()</a>.
</li>
</ul>

**Default value**: `false`

### `closedState`   {#fedg_tabs_options-closedState}

Class assigned to the tab being closed.

**Type**: String

**Default value**: `null`

### `collapsible`   {#fedg_tabs_options-collapsible}


If this option is set to false, the content is not collapsed when the panel is active. The option of the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs.

**Type**: Boolean

**Default value**: `false`

### `collapsibleElement`   {#fedg_tabs_options-collapsibleElement}

Selector of the element for which the collapsible widget is initialized.

**Type**: String

**Default value**: `[data-role=collapsible]`

### `content`   {#fedg_tabs_options-content}


Selector for the content element, searched for using `.find()` on the main collapsible element. The option of the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs.

**Type**: String

**Default value**: `[data-role=content]`

### `disabled`   {#fedg_tabs_options-disabled}


Array of the elements' indexes which are disabled when the widget is initialized.

**Type**: Array of numbers.

**Default value**: `[]`

### `disabledState`   {#fedg_tabs_options-disabledState}

Class assigned to the tab being currently disabled.

**Type**: String

**Default value**: `null`

### `header`   {#fedg_tabs_options-header}


Selector for the header element, searched for using `.find()` on the main collapsible element.
The option of the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs.

**Type**: String

**Default value**: `[data-role=title]`

### `icons`   {#fedg_tabs_options-icons}


The classes for icons to be used in headers. If no classes are specified, icons are not be created. A new span is created and appended to the header, the classes for this span are automatically changed whenever the content gets expanded/collapsed.
The option of the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs.

**Type**: String

**Default value**: <code>{ header: null, activeHeader: null }</code>


### `loadingClass`   {#fedg_tabs_options-loadingClass}

Class assigned to a tab during content loading for this tab.

**Type**: String

**Default value**: `null`

### `openedState`   {#fedg_tabs_options-openedState}

Class name assigned to a tab which is being currently opened.

**Type**: String

**Default value**: `null`

### `openOnFocus`   {#fedg_tabs_options-openOnFocus}

Used for setting keyboard navigation. Defines if the tab is expanded when its header is in focus.

**Type**: Boolean

**Default value**: `true`

### `saveState`   {#fedg_tabs_options-saveState}


Specifies if the state is saved in the local storage if the browser supports it. Otherwise will be saved into a cookie.
The option of the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs.

**Type**: Boolean

**Default value**: `true`

### `trigger`   {#fedg_tabs_options-trigger}


Selector for the trigger element, applied using `.find()` on the main collapsible element. If the trigger is not found, the header becomes a trigger.
The option of the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs.

**Type**:

- String
- {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} object

**Default value**: `[data-role=trigger]`

## Methods   {#tabs_methods}

The tabs widget has the following methods:
<ul>
<li><a href="#fedg_tabs_methods-activate">activate()</a></li>
<li><a href="#fedg_tabs_methods-enable">enable()</a></li>
<li><a href="#fedg_tabs_methods-deactivate">deactivate()</a></li>
<li><a href="#fedg_tabs_options-disable">disable()</a></li>
</ul>
### `activate()`   {#fedg_tabs_methods-activate}


`activate(index)` displays `content` for the tab with the corresponding `index`.


### `enable()`   {#fedg_tabs_methods-enable}

`enable(index)` enables the tab with the corresponding `index`.

### `deactivate()`   {#fedg_tabs_methods-deactivate}

`deactivate(index)` hides `content` for the tab with the corresponding `index`.

### `disable()`   {#fedg_tabs_options-disable}

`disable(index)` disables the tab with the corresponding `index`.

## Events   {#fedg_tabs_events-methods}

Tabs is subscribed to the same events as the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank">collapsible</a> widget:

<ul>
<li><a href="#fedg_tabs_beforeOpen_callback">beforeOpen callback</a></li>
<li><a href="#fedg_tabs_dimensionsChanged">dimensionsChanged</a></li>
</ul>

### `beforeOpen callback`   {#fedg_tabs_beforeOpen_callback}

Called before the content is opened.

### `dimensionsChanged`   {#fedg_tabs_dimensionsChanged}

Called after content is opened or closed.
