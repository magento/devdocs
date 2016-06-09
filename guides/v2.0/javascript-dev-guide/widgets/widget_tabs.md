---
layout: default
group: jsdg
subgroup: 3_Widgets
title: Tabs widget
menu_title: Tabs widget
menu_order: 14
version: 2.0
github_link: javascript-dev-guide/widgets/widget_tabs.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/widget_tabs.html
  - guides/v1.0/frontend-dev-guide/javascript/widget_tabs.html
---

<h2 id="fedg_tabs-widget_overview">Overview</h2>

The Magento tabs widget implements single content area with multiple panels, each associated with a header in a list. It uses the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_collapsible.html" target="_blank">Magento collapsible widget</a>.

The tabs widget source is <a href="{{site.mage2000url}}lib/web/mage/tabs.js" target="_blank">lib/web/mage/tabs.js</a>. 


<h2 id="fedg_tabs_init">Initialize the tabs widget</h2>
For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.


<h2 id="fedg_tabs_options">Options</h2>

The tabs widget has the following options:

*	<a href="#fedg_tabs_options-active">active</a>
*	<a href="#fedg_tabs_options-ajaxUrlElement">ajaxUrlElement</a>
*	<a href="#fedg_tabs_options-ajaxContent">ajaxContent</a>
*	<a href="#fedg_tabs_options-animate">animate</a>
*	<a href="#fedg_tabs_options-closedState">closedState</a>
*	<a href="#fedg_tabs_options-collapsible">collapsible</a>
*	<a href="#fedg_tabs_options-collapsibleElement">collapsibleElement</a>
*	<a href="#fedg_tabs_options-content">content</a>
*	<a href="#fedg_tabs_options-disabled">disabled</a>
*	<a href="#fedg_tabs_options-disabledState">disabledState</a>
*	<a href="#fedg_tabs_options-header">header</a>
*	<a href="#fedg_tabs_options-icons">icons</a>
*	<a href="#fedg_tabs_options-loadingClass">loadingClass</a>
*	<a href="#fedg_tabs_options-openedState">openedState</a>
*	<a href="#fedg_tabs_options-openOnFocus">openOnFocus</a>
*	<a href="#fedg_tabs_options-saveState">saveState</a>
*	<a href="#fedg_tabs_options-trigger">trigger</a>

<h3 id="fedg_tabs_options-active"><code>active</code></h3>

Index of the tab, which is active at the moment of initialization. Starts from "0"

**Type**: Number

**Default value**: `0`

<h3 id="fedg_tabs_options-ajaxUrlElement"><code>ajaxUrlElement</code></h3> 
Selector for the tab element, which contains the URL for the Ajax request.
The option of the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs. 

**Type**: String

**Default value**: `[data-ajax=true]`

<h3 id="fedg_tabs_options-ajaxContent"><code>ajaxContent</code></h3>
Defines if the content is loaded by Ajax request.
The option of the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs. 

**Type**: Boolean

**Default value**: `false`

<h3 id="fedg_tabs_options-animate"><code>animate</code></h3>
Specifies if the collapse/expand actions are performed with animation. The option of the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs. 

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

<h3 id="fedg_tabs_options-closedState"><code>closedState</code></h3>
Class assigned to the tab being closed.

**Type**: String

**Default value**: `null`

<h3 id="fedg_tabs_options-collapsible"><code>collapsible</code></h3>

If this option is set to false, the content is not collapsed when the panel is active. The option of the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs. 

**Type**: Boolean

**Default value**: `false`

<h3 id="fedg_tabs_options-collapsibleElement"><code>collapsibleElement</code></h3>
Selector of the element for which the collapsible widget is initialized.

**Type**: String 

**Default value**: `[data-role=collapsible]`

<h3 id="fedg_tabs_options-content"><code>content</code></h3>

Selector for the content element, searched for using `.find()` on the main collapsible element. The option of the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs. 

**Type**: String

**Default value**: `[data-role=content]`

<h3 id="fedg_tabs_options-disabled"><code>disabled</code></h3>

Array of the elements' indexes which are disabled when the widget is initialized.

**Type**: Array of numbers.

**Default value**: `[]`

<h3 id="fedg_tabs_options-disabledState"><code>disabledState</code></h3>
Class assigned to the tab being currently disabled.

**Type**: String

**Default value**: `null`

<h3 id="fedg_tabs_options-header"><code>header</code></h3>

Selector for the header element, searched for using `.find()` on the main collapsible element. 
The option of the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs. 

**Type**: String

**Default value**: `[data-role=title]`

<h3 id="fedg_tabs_options-icons"><code>icons</code></h3>

The classes for icons to be used in headers. If no classes are specified, icons are not be created. A new span is created and appended to the header, the classes for this span are automatically changed whenever the content gets expanded/collapsed.
The option of the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs. 

**Type**: String

**Default value**: <code>{ header: null, activeHeader: null }</code>


<h3 id="fedg_tabs_options-loadingClass"><code>loadingClass</code></h3>
Class assigned to a tab during content loading for this tab.

**Type**: String

**Default value**: `null`

<h3 id="fedg_tabs_options-openedState"><code>openedState</code></h3>
Class name assigned to a tab which is being currently opened.

**Type**: String

**Default value**: `null`

<h3 id="fedg_tabs_options-openOnFocus"><code>openOnFocus</code></h3>
Used for setting keyboard navigation. Defines if the tab is expanded when its header is in focus.

**Type**: Boolean

**Default value**: `true`

<h3 id="fedg_tabs_options-saveState"><code>saveState</code></h3>

Specifies if the state is saved in the local storage if the browser supports it. Otherwise will be saved into a cookie.
The option of the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs. 

**Type**: Boolean

**Default value**: `true`

<h3 id="fedg_tabs_options-trigger"><code>trigger</code></h3>

Selector for the trigger element, applied using `.find()` on the main collapsible element. If the trigger is not found, the header becomes a trigger.
The option of the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_collapsible.html" target="_blank">collapsible</a> widget used by tabs. 

**Type**: 

- String
- jQuery object

**Default value**: `[data-role=trigger]`


<h2 id="tabs_methods">Methods</h2>

The tabs widget has the following methods:
<ul>
<li><a href="#fedg_tabs_methods-activate">activate()</a></li>
<li><a href="#fedg_tabs_methods-enable">enable()</a></li>
<li><a href="#fedg_tabs_methods-deactivate">deactivate()</a></li>
<li><a href="#fedg_tabs_options-disable">disable()</a></li>
</ul>
<h3 id="fedg_tabs_methods-activate"><code>activate()</code></h3>

`activate(index)` displays `content` for the tab with the corresponding `index`.


<h3 id="fedg_tabs_methods-enable"><code>enable()</code></h3>
`enable(index)` enables the tab with the corresponding `index`.

<h3 id="fedg_tabs_methods-deactivate"><code>deactivate()</code></h3>
`deactivate(index)` hides `content` for the tab with the corresponding `index`.

<h3 id="fedg_tabs_methods-disable"><code>disable()</code></h3>
`disable(index)` disables the tab with the corresponding `index`.

<h2 id="fedg_tabs_events-methods">Events</h2>
Tabs is subscribed to the same events as the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_collapsible.html" target="_blank">collapsible</a> widget:

<ul>
<li><a href="#fedg_tabs_beforeOpen_callback">beforeOpen callback</a></li>
<li><a href="#fedg_tabs_dimensionsChanged">dimensionsChanged</a></li>
</ul>

<h3 id="fedg_tabs_beforeOpen_callback"><code>beforeOpen callback</code></h3>
Called before the content is opened. 

<h3 id="fedg_tabs_dimensionsChanged"><code>dimensionsChanged</code></h3>
Called after content is opened or closed.


