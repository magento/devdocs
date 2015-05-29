---
layout: default
group: fedg
subgroup: Javascript
title: Collapsible widget
menu_order: 2
menu_title: Collapsible widget
github_link: frontend-dev-guide/javascript/widget_collapsible.md
---

<h2>Overview</h2>
<p class="q">used in Checkout</p>
The Magento Collapsible widget converts a header/content pair into an accordion(collapse/expand the content when the header gets clicked).

The content can be updated using Ajax once the content gets expanded. The collapsed/expanded state can be saved into local storage or cookies if the browser doesn't support local storage. To save the state is absolutely necessary that the main collapsible element to have an id specified. Also when deep linking is used, if the id specified as anchor is actually the id of the content or the id of an element that appends to content, the content will be automatically expanded for that element.

The collapsible widget source is located in the <a href="{{site.mage2000url}}lib/web/mage/collapsible.js" target="_blank">lib/web/mage/collapsible.js</a>.

<p class="q">Illustration: you mentioned that it is used in Checkout, but I can't find it in the page source using the method you described</p>

<h2>Initialize collapsible</h2>

Generally the collapsible widget is instantiated like:
<pre>
$("#element").collapsible();
</pre>

Where <code>#element</code> is the element's selector.


Similar to the accordion widget, the header, title and content for collapsible can be defined by the child elements' attributes or pathed as widget options. See <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_accordion.html#accordion_init">Accordion widget initialization</a> for details.

<h3>Initialize collapsible with header only</h3>
You can initialize the collapsible widget without having a container that consists of a header and a content. In this case the initialization is made on the header:
<pre>
$("#header").collapsible();
</pre>
<p class="q">For the writer: previous paragraph is unique, should be here</p>

<h3>Initialize collapsible using the data-mage-init attribute</h3>
The collapsible widget can be initialized using the <code>data-mage-init</code> attribute, as described in Widget initializaiton.
<!--ADDLINK-->

<h2>Options</h2>

The collapsible widget has the following options:

<ul>
<li><a href="#fedg_collaps_active">active</a> </li>
<li><a href="#fedg_collaps_disabled">disabled</a></li>
<li><a href="#fedg_collaps_collapsible">collapsible</a></li>
<li><a href="#fedg_collaps_header">header</a></li>
<li><a href="#fedg_collaps_content">content</a></li>
<li><a href="#fedg_collaps_trigger">trigger</a></li>
<li><a href="#fedg_collaps_closedState">closedState</a></li>
<li><a href="#fedg_collaps_openedState">openedState</a></li>
<li><a href="#fedg_collaps_disabledState">disabledState</a></li>
<li><a href="#fedg_collaps_ajaxUrlElement">ajaxUrlElement</a></li>
<li><a href="#fedg_collaps_ajaxContent">ajaxContent</a></li>
<li><a href="#fedg_collaps_loadingClass">loadingClass</a></li>
<li><a href="#fedg_collaps_saveState">saveState</a></li>
<li><a href="#fedg_collaps_animate">animate</a></li>
<li><a href="#fedg_collaps_icons">icons</a></li>
<li><a href="#fedg_collaps_collateral">collateral</a></li>
</ul>

<h3 id="fedg_collaps_active">active</h3>
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

<h3 id="fedg_collaps_disabled">disabled</h3>
Specifies if the content should be disabled when the widget gets initialized.

**Type**: Boolean

**Default value**: false

Initialize the collapsible widget with the `disabled` option specified:
<pre>
$("#element").collapsible({ disabled: true});
</pre>
Get or set the disable option after initialization:

<pre>
//getter
var disabled = $("#element).collapsible("option","disabled");

//setter
$("#element").collapsible("option","disabled",false);
</pre>



<h3 id="fedg_collaps_collapsible">collapsible</h3>

If this option is set to false, the content will not be collapsed when the panel is active.

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

<h3 id="fedg_collaps_header">header</h3>
Selector for the header element, applied using <code>.find()</code> on the main collapsible element. If the element is not found on the main collapsible element, the header becomes the main element.

<p class="q">need explanation for "applied using <code>.find()</code> on the main collapsible element" </p>

<p class="q">What is meant by element is not found on the ... element? </p>

**Type**: String, jQuery Object

**Default value**: [data-role=title]

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

<h3 id="fedg_collaps_content">content</h3>
Selector for the content element, applied using `.find()` on the main collapsible element. 

**Type**: String, jQuery Object

**Default value**: [data-role=content]

<p class="q">"[data-role=content]" - why in brackets </p>

Initialize the collapsible with the content option specified:

<pre>
$("#element").collapsible({ content: ".content"});
</pre>
Get or set the content option, after initialization:

//getter
<pre>
var content = $("#element).collapsible("option","content");

//setter
$("#element").collapsible("option","content",".content");
</pre>

<h3 id="fedg_collaps_trigger">trigger</h3>
Selector for the trigger element, applied using `.find()` on the main collapsible element. If the trigger is not found, the header becomes a trigger.

**Type**: String, jQuery Object

**Default value**: [data-role=trigger]

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

<h3 id="fedg_collaps_openedState">openedState</h3>
Specifies the class that is assigned to the main collapsible element when the content gets expanded.

**Type**: String

**Default value**: null

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

<h3 id="fedg_collaps_closedState">closedState</h3>
Specifies the class that is assigned to the main collapsible element when the content gets collapsed.

**Type**: String

**Default value**: null

Initialize the collapsible widget with the `closedState` option specified:
<pre>
$("#element").collapsible({ closedState: "collapsible-content"});
</pre>

Get or set the `contentClass` option after initialization:

//getter
var contentClass = $("#element).collapsible("option","contentClass");

//setter
$("#element").collapsible("option","contentClass","collapsible-content");
</pre>

<h3 id="fedg_collaps_disabledState">disabledState</h3>
Specifies the class that is assigned to the main collapsible element when a panel gets disabled.

**Type**: String

**Default value**: null

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

<h3 id="fedg_collaps_loadingClass">loadingClass</h3>
Specifies the class that is assigned to the main collapsible element when requesting data using Ajax.
<p class="q">who is requesting data using Ajax?</p>

**Type**: String

**Default value**: null

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

<h3 id="fedg_collaps_ajaxUrlElement">ajaxUrlElement</h3>
Selector for the element that contains the URL for Ajax request, applied using `.find()` on the header. 

<p class="q">What exactly is applied?</p>

**Type**: String

**Default value**: [data-ajax=true]

Initialize the collapsible with the `loadingClass` option specified:
<pre>
$("#element").collapsible({ loadingClass: ".ajax"});
</pre>

<p class="q">need to verify all code examples, cause it was not correct in the original doc</p>
Get or set the <code>loadingClass</code> option, after initialization:

<pre>
//getter
var content = $("#element).collapsible("option","loadingClass");

//setter
$("#element").collapsible("option","loadingClass","ajax");
</pre>

<h3 id="fedg_collaps_ajaxContent">ajaxContent</h3>
Specifies if the content will is updated using Ajax request.

<p class="q">Is it is updated at all or by Ajax request specifically</p>

**Type**: Boolean

**Default value**: false

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

<h3 id="fedg_collaps_saveState">saveState</h3>
Specifies if the state is saved in the local storage if the browser supports it. Otherwise will be saved into a cookie.

<p class="q">Otherwise: depending on the option value or the browser settings?</p>

**Type**: Boolean

**Default value**: true

Initialize the collapsible widget with the `saveState` option specified:
<pre>
$("#element").collapsible({ saveState: true});
</pre>

Get or set the `saveState` option after initialization:

//getter
<pre>
var active = $("#element).collapsible("option","saveState");

//setter
$("#element").collapsible("option","saveState",true);
</pre>

<h3 id="fedg_collaps_animate">animate</h3>
Specifies if the collapse/expand actions are performed with animation.

**Type**: Number / String / Object

**Default value**: false

Initialize the collapsible with the animate option specified:

<pre>
$("#element").collapsible({ animate: 1000});
$("#element").collapsible({ animate: {duration:1000,easing:"easeOutCubic"});
</pre>

Get or set the animate option, after initialization:

//getter
<pre>
var animate = $("#element).collapsible("option","animate");
</pre>

//setter 
<pre>
$("#element").collapsible("option","animate",false);
</pre>

<h3 id="fedg_collaps_icons">icons</h3>
The icons to be used in headers. If no classes are specified icons are not be created. A new span is created and appended to the header, the classes for this span are automatically changed whenever the content gets expanded/collapsed.

<p class="q">What is meant by "icons"? Classes</p>

**Type**: String

**Default value**: <code>{ "header": "icon-triangle-1-e", "activeHeader": "icon-triangle-1-s" }</code>

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

<h2>Methods</h2>
<h3 id="collaps_disable">disable()</h3>

Disable the panel.
This method does not accept any arguments.

Invoke the disable method:
<pre>
$( "#element" ).collapsible("disable");
</pre>

<h3 id="collaps_enable"> enable()</h3>
Enable the panel.

This method does not accept any arguments.

Invoke the enable method:
<pre>
$( "#element" ).collapsible("enable");
</pre>

<h3 id="collaps_deactivate">deactivate()</h3>

Collapse the content when this method is called.
<p class="q">Wouldn't it be enough to say "Collapse the content"?</p>
This method does not accept any arguments.

Invoke the deactivate method:
<pre>
$( "#element" ).collapsible("deactivate");
</pre>

<h3 id="collaps_forceDeactivate">forceDeactivate</h3>
Collapse the content without animation when this method is called.

This method does not accept any arguments.

Invoke the <code>forceDeactivate</code> method:
<pre>
$( "#element" ).collapsible("forceDeactivate");
</pre>


<h3 id="collaps_activate">activate</h3>
Expand the content when this method is called.

This method does not accept any arguments.

Invoke the activate method:
<pre>
$("#element" ).collapsible("activate");
</pre>

<h3 id="collaps_forceActivate">forceActivate</h3>
Expand the content without animation when this method is called.

This method does not accept any arguments.

Invoke the `forceActivate` method:
<pre>
$("#element").collapsible("forceActivate");
</pre>

<h2 id="collapsible_events">Events</h2>

<h3 id="c_beforeOpen">beforeOpen callback</h3>
<p class="q">need a description here</p>