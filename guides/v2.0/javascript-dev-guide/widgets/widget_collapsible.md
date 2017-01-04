---
layout: default
group: jsdg
subgroup: 3_Widgets
title: Collapsible widget
menu_order: 4
menu_title: Collapsible widget
version: 2.0
github_link: javascript-dev-guide/widgets/widget_collapsible.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/widget_collapsible.html
  - guides/v1.0/frontend-dev-guide/javascript/widget_collapsible.html
---

<h2>Overview</h2>
<!-- used in Checkout -->
The Magento collapsible widget converts a header/content pair into an accordion, where the content is collapsed or expanded on the header click.

Unlike the accordion widget is that collapsible is initialized for one title/content pair, while accordion can be initialized for a set of title/contents pairs.

To "bind" several instances of collapsible widget, the <a href="#fedg_collaps_collateral"><code>collateral</code></a> option is used.

Once it is expanded, the content can be updated using Ajax. The collapsed/expanded state can be saved into local storage or cookies, if the browser does not support local storage. 

The collapsible widget source is <a href="{{site.mage2000url}}lib/web/mage/collapsible.js" target="_blank">lib/web/mage/collapsible.js</a>.


<h2 id="collaps_init_js">Initialize collapsible in JS</h2>
Generally the collapsible widget is instantiated like following:
<pre>
$("#element").collapsible();
</pre>

Where <code>#element</code> is the element's selector.

If you need to be able to save the expanded/collapsed state, the element must have the `id` attribute specified. 

The element's `id` is also used in deep linking: if the `id` of the content or the `id` of the element that appends the content is specified as an anchor, the content for that element is automatically expanded.


Similar to the accordion widget, the header, title and content for collapsible can be defined by the child elements' attributes or passed as widget options. See <a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_accordion.html#accordion_init" target="_blank">Accordion widget initialization</a> for details.

<h3>Initialize collapsible with header only</h3>
You can initialize the collapsible widget without having a container that consists of a header and a content. In this case the initialization is made on the header:
<pre>
$("#header").collapsible();
</pre>


<h2>Initialize collapsible in a template</h2>
The collapsible widget can be initialized using the <code>data-mage-init</code> attribute or `<script>` tag, as described in <a href="{{page.baseurl}}javascript-dev-guide/javascript/js_init.html#data_mage_init" target="_blank">JavaScript initialization</a>.

<h2>Options</h2>

The collapsible widget has the following options:

<ul>
<li><a href="#fedg_collaps_active">active</a> </li>
<li><a href="#fedg_collaps_ajaxUrlElement">ajaxUrlElement</a></li>
<li><a href="#fedg_collaps_ajaxContent">ajaxContent</a></li>
<li><a href="#fedg_collaps_animate">animate</a></li>
<li><a href="#fedg_collaps_collapsible">collapsible</a></li>
<li><a href="#fedg_collaps_collateral">collateral</a></li>
<li><a href="#fedg_collaps_content">content</a></li>
<li><a href="#fedg_collaps_closedState">closedState</a></li>
<li><a href="#fedg_collaps_disabled">disabled</a></li>
<li><a href="#fedg_collaps_disabledState">disabledState</a></li>
<li><a href="#fedg_collaps_header">header</a></li>
<li><a href="#fedg_collaps_icons">icons</a></li>
<li><a href="#fedg_collaps_loadingClass">loadingClass</a></li>
<li><a href="#fedg_collaps_openedState">openedState</a></li>
<li><a href="#fedg_collaps_saveState">saveState</a></li>
<li><a href="#fedg_collaps_trigger">trigger</a></li>

</ul>

<h3 id="fedg_collaps_active"><code>active</code></h3>
Specifies if the content should be expanded when the widget gets initialized.

**Type**: Boolean

**Default value**: false

Initialize the collapsible with the active option specified:
<pre>
$("#element").collapsible({ active: true});
</pre>

Get or set the active option, after initialization:

<pre>
//getter
var active = $("#element).collapsible("option","active");

//setter
$("#element").collapsible("option","active",false);
</pre>


<h3 id="fedg_collaps_ajaxUrlElement"><code>ajaxUrlElement</code></h3>
Selector applied on the header using `.find()`, for the element that contains the URL for Ajax request. 

**Type**: String

**Default value**: `[data-ajax=true]`

<h3 id="fedg_collaps_ajaxContent"><code>ajaxContent</code></h3>
Specifies if the content is updated using Ajax request.

**Type**: Boolean

**Default value**: `false`

<h3 id="fedg_collaps_animate"><code>animate</code></h3>
Specifies if the collapse/expand actions are performed with animation.

**Type**: 
Multiple types are supported:
<ul>
<li>Boolean: the `false` value disables the animation </li> 
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

Initialize the collapsible with the animate option specified:

<pre>
$("#element").collapsible({ animate: 1000});
$("#element").collapsible({ animate: {duration:1000,easing:"easeOutCubic"});
</pre>

Get or set the animate option, after initialization:

<pre>
//getter
var animate = $("#element).collapsible("option","animate");

//setter 
$("#element").collapsible("option","animate",false);
</pre>

<h3 id="fedg_collaps_collapsible"><code>collapsible</code></h3>

If this option is set to false, the content is not collapsed when the panel is active.

**Type**: Boolean

**Default value**: true

Initialize the collapsible widget with the `collapsible` option specified:
<pre>
$("#element").collapsible({ collapsible: true});
</pre>

Get or set the `collapsible` option after initialization:

<pre>
//getter
var collapsible = $("#element).collapsible("option","collapsible");

//setter
$("#element").collapsible("option","collapsible",false);
</pre>

<h3 id="fedg_collaps_collateral"><code>collateral</code></h3>

Specifies the element, and the class which is assigned to this element, when the current element is opened; and is removed when the current element is closed.

An object that contains the following:

- `element`: an element, can be a selector or jquery object. 
- `openedState`: the class name which is assigned to the element when the current element is in opened; removed when the current element is closed.

**Type**: String

**Default value**: <code>{
                element: null,
                openedState: null
            }</code>


<h3 id="fedg_collaps_content"><code>content</code></h3>
Selector for the content element, searched for using `.find()` on the main collapsible element. 

**Type**: 
<ul>
<li>String</li>
<li>jQuery Object</li>
</ul>

**Default value**: `[data-role=content]`


Initialize the collapsible with the content option specified:

<pre>
$("#element").collapsible({ content: ".content"});
</pre>
Get or set the content option, after initialization:

<pre>
//getter
var content = $("#element).collapsible("option","content");

//setter
$("#element").collapsible("option","content",".content");
</pre>

<h3 id="fedg_collaps_closedState"><code>closedState</code></h3>
Specifies the class that is assigned to the main collapsible element, when the content gets collapsed.

**Type**: String

**Default value**: `null`

Initialize the collapsible widget with the `closedState` option specified:
<pre>
$("#element").collapsible({ closedState: "collapsible-content"});
</pre>

Get or set the `contentClass` option after initialization:

<pre>
//getter
var contentClass = $("#element).collapsible("option","contentClass");

//setter
$("#element").collapsible("option","contentClass","collapsible-content");
</pre>

<h3 id="fedg_collaps_disabled"><code>disabled</code></h3>
Specifies if the content should be disabled, when the widget gets initialized.

**Type**: Boolean

**Default value**: `false`

Initialize the collapsible widget with the `disabled` option specified:
<pre>
$("#element").collapsible({ disabled: true});
</pre>
Get or set the `disabled` option after initialization:

<pre>
//getter
var disabled = $("#element).collapsible("option","disabled");

//setter
$("#element").collapsible("option","disabled",false);
</pre>

<h3 id="fedg_collaps_disabledState"><code>disabledState</code></h3>
Specifies the class that is assigned to the main collapsible element when a panel gets disabled.

**Type**: String

**Default value**: `null`

Initialize the collapsible with the `disabledState` option specified:
<pre>
$("#element").collapsible({ disabledState: "disabled"});
</pre>

Get or set the disabledState option after initialization:

<pre>
//getter
var disabledState = $("#element).collapsible("option","disabledState");

//setter
$("#element").collapsible("option","disabledState","disabled");
</pre>


<h3 id="fedg_collaps_header"><code>header</code></h3>
Selector for the header element, searched for using <code>.find()</code> on the main collapsible element. If the element with the specified selector is not found on the main collapsible element, the main element becomes a header.


**Type**: 
<ul>
<li>String</li>
<li>jQuery Object</li>
</ul>

**Default value**: `[data-role=title]`

Initialize the collapsible with the content option specified:

<pre>
$("#element").collapsible({ header: ".header"});
</pre>

Get or set the header option, after initialization:

<pre>
//getter
var header = $("#element).collapsible("option","header");

//setter
$("#element").collapsible("option","header",".header");
</pre>

<h3 id="fedg_collaps_icons"><code>icons</code></h3>
The classes for icons to be used in headers. If no classes are specified, icons are not be created. A new span is created and appended to the header, the classes for this span are automatically changed whenever the content gets expanded/collapsed.

**Type**: String

**Default value**: <code>{ activeHeader: null, header: null }</code>


Initialize the collapsible with the `icons` option specified:
<pre>
$("#element").collapsible({ icons: {"header": "plus", "activeHeader": "minus"}});
</pre>

Get or set the icons option, after initialization:

<pre>
//getter
var icons = $("#element).collapsible("option","icons");

//setter
$("#element").collapsible("option","icons",{"header": "plus", "activeHeader": "minus" });
</pre>

<h3 id="fedg_collaps_loadingClass"><code>loadingClass</code></h3>
Specifies the class that is assigned to the main collapsible element when requesting data using Ajax.


**Type**: String

**Default value**: `null`

Initialize the collapsible with the `loadingClass` option specified:
<pre>
$("#element").collapsible({ loadingClass: "loading"});
</pre>
Get or set the `loadingClass` option after initialization:

<pre>
//getter
var loadingClass = $("#element).collapsible("option","loadingClass");

//setter
$("#element").collapsible("option","loadingClass","loading");
</pre>

Initialize the collapsible with the `loadingClass` option specified:
<pre>
$("#element").collapsible({ loadingClass: ".ajax"});
</pre>

Get or set the <code>loadingClass</code> option, after initialization:

<pre>
//getter
var content = $("#element).collapsible("option","loadingClass");

//setter
$("#element").collapsible("option","loadingClass","ajax");
</pre>


Initialize the collapsible with the `ajaxContent` option specified:
<pre>
$("#element").collapsible({ ajaxContent: true});
</pre>

Get or set the ajaxContent option after initialization:

<pre>
//getter
var active = $("#element).collapsible("option","ajaxContent");

//setter
$("#element").collapsible("option","ajaxContent",true);
</pre>

<h3 id="fedg_collaps_openedState"><code>openedState</code></h3>
Specifies the class that is assigned to the main collapsible element when the content gets expanded.

**Type**: String

**Default value**: `null`

Initialize the collapsible with the `openedState` option specified:
<pre>
$("#element").collapsible({ openedState: "opened"});
</pre>

Get or set the `openedState` option after initialization:

<pre>
//getter
var openedState = $("#element).collapsible("option","openedState");

//setter
$("#element").collapsible("option","openedState","opened");
</pre>

<h3 id="fedg_collaps_saveState"><code>saveState</code></h3>
Specifies if the state is saved in the local storage if the browser supports it. Otherwise is saved into a cookie.

**Type**: Boolean

**Default value**: `true`

Initialize the collapsible widget with the `saveState` option specified:
<pre>
$("#element").collapsible({ saveState: true});
</pre>

Get or set the `saveState` option after initialization:

<pre>
//getter
var active = $("#element).collapsible("option","saveState");

//setter
$("#element").collapsible("option","saveState",true);
</pre>

<h3 id="fedg_collaps_trigger"><code>trigger</code></h3>
Selector for the trigger element, applied using `.find()` on the main collapsible element. If the trigger is not found, the header becomes a trigger.

**Type**: 
<ul>
<li>String</li>
<li>jQuery Object</li>
</ul>

**Default value**: `[data-role=trigger]`

Initialize the collapsible with the trigger option specified:
<pre>
$("#element").collapsible({ trigger: ".trigger"});
</pre>

Get or set the trigger option after initialization:

<pre>
//getter
var trigger = $("#element).collapsible("option","trigger");

//setter
$("#element").collapsible("option","trigger",".trigger");
</pre>



<h2 id="collaps_methods">Methods</h2>

<ul>
<li><a href="#collaps_activate">activate()</a></li>
<li><a href="#collaps_deactivate">deactivate()</a></li>
<li><a href="#collaps_disable">disable()</a> </li>
<li><a href="#collaps_enable">enable()</a></li>
<li><a href="#collaps_forceActivate">forceActivate()</a></li>
<li><a href="#collaps_forceDeactivate">forceDeactivate()</a></li>
</ul>


<h3 id="collaps_activate"><code>activate()</code></h3>
Expand the content when this method is called.

This method does not accept any arguments.

Invoke the activate method:
<pre>
$("#element" ).collapsible("activate");
</pre>

<h3 id="collaps_deactivate"><code>deactivate()</code></h3>

Collapse the content when this method is called.

This method does not accept any arguments.

Invoke the deactivate method:
<pre>
$( "#element" ).collapsible("deactivate");
</pre>

<h3 id="collaps_disable"><code>disable()</code></h3>

Disable the panel.
This method does not accept any arguments.

Invoke the disable method:
<pre>
$( "#element" ).collapsible("disable");
</pre>

<h3 id="collaps_enable"><code>enable()</code></h3>
Enable the panel.

This method does not accept any arguments.

Invoke the enable method:
<pre>
$( "#element" ).collapsible("enable");
</pre>

<h3 id="collaps_forceActivate"><code>forceActivate()</code></h3>
Expand the content without animation when this method is called.

This method does not accept any arguments.

Invoke the `forceActivate` method:
<pre>
$("#element").collapsible("forceActivate");
</pre>

<h3 id="collaps_forceDeactivate"><code>forceDeactivate()</code></h3>
Collapse the content without animation when this method is called.

This method does not accept any arguments.

Invoke the <code>forceDeactivate</code> method:
<pre>
$( "#element" ).collapsible("forceDeactivate");
</pre>


<h2 id="collapsible_events">Events</h2>

<h3 id="c_beforeOpen"><code>beforeOpen callback</code></h3>
Called before the content is opened. 

<h3 id="c_dimensionsChanged"><code>dimensionsChanged</code></h3>
Called after content is opened or closed.
