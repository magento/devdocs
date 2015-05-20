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

The Magento Collapsible widget converts a header/content pair into an accordion(collapse/expand the content when the header gets clicked).

The content can be updated using Ajax once the content gets expanded. The collapsed/expanded state can be saved into local storage or cookies if the browser doesn't support local storage. To save the state is absolutely necessary that the main collapsible element to have an id specified. Also when deep linking is used, if the id specified as anchor is actually the id of the content or the id of an element that appends to content, the content will be automatically expanded for that element.

The collapsible widget source is located in the <a href="{{site.mage2000url}}lib/web/mage/collapsible.js" target="_blank">lib/web/mage/collapsible.js</a>.

<p class="q">Would be nice to have an illustration</p>

<h2>Initialization</h2>

In  the following examples of widget instantiation:
•	    collapsible - the name of the widget
•	    #element - the element's selector
•	    #header - the header

Generally the collapsible widget is instantiated like:
<pre>
$("#element").collapsible();
</pre>
In this case, because the header, content and trigger are not specified, "#element" must have children with the following attributes:

data-role="title"
data-role="content"
In this case the trigger will be actually the title but you can also specify it if you want having it different from title by adding the following attribute to the element:
data-role="trigger"
Also to have the content updated using Ajax the element containing the URL for request must have the following attribute:
data-role="ajaxUrl"
Is not necessary to have the data-attributes described above, you can specify the header, content, trigger as options when you initialize the widget.
Initialize the widget without having a container that consists in a header and a content. In this case the initialization will be made on the header:
$("#header").collapsible();
 
Widget can be instantiated with options:
<pre>
$("#element").collapsible({
    header : "#title-1"
    content : "#content-1",
    trigger : "#trigger-1,
    ajaxUrlElement: "a"
 });
</pre>

Widget instantiation using data attributes:
<pre>
&lt;div id=&quot;element&quot; data-mage-init='{&quot;collapsible&quot;:{}}'&gt;
</pre>

Widget instantiated using data attributes with options passed:
<pre>
&lt;div id=&quot;element&quot; data-mage-init='{&quot;collapsible&quot;:{&quot;header&quot;:&quot;#title1&quot;, &quot;content&quot;:&quot;#content1&quot;, &quot;icons&quot;: &quot;{\&quot;header\&quot;:\&quot;plus\&quot;,\&quot;activeHeader\&quot;:\&quot;minus\&quot;}}'/&gt;
</pre>

<h2>Options</h2>

The collapsible widget has the following options:

<li><a href="#fedg_collaps_active">active</a> </li>
<li><a href="#fedg_collaps_disabled">disabled</a></li>

<li><a href="#">collapsible</a></li>
<li><a href="#">header</a></li>
<li><a href="#">content</a></li>
<li><a href="#">trigger</a></li>
<li><a href="#">closedState</a></li>
<li><a href="#">openedState</a></li>
<li><a href="#">disabledState</a></li>
<li><a href="#">ajaxUrlElement</a></li>
<li><a href="#">ajaxContent</a></li>
<li><a href="#">loadingClass</a></li>
<li><a href="#">saveState</a></li>
<li><a href="#">animate</a></li>
<li><a href="#">icons</a></li>
<li><a href="#">collateral</a></li>
</li>

<h3>active</h3>
Specifies if the content should be expanded or not when the widget gets initialized

Type: Boolean

Default value: false

Initialize the collapsible with the active option specified:
<pre>
$("#element").collapsible({ active: true});
</pre>

Get or set the active option, after initialization:
getter
<pre>
var active = $("#element).collapsible("option","active");
</pre>

setter
<pre>
$("#element").collapsible("option","active",false);
</pre>

<h3>disabled</h3>
Specifies if the content should be disabled or not when the widget gets initialized

Type: Boolean

Default value: false

Initialize the collapsible with the disable option specified:
<pre>
$("#element").collapsible({ disable: true});
</pre>
Get or set the disable option, after initialization:

//getter
<pre>
var disable = $("#element).collapsible("option","disable");
</pre>
//setter

<pre>
$("#element").collapsible("option","disable",false);
</pre>

<p class="q">In the code the option name seems to be "disabled"</p>

<h3>collapsible</h3>

If this option is set to false, the content will not be collapsed when the panel is active.

Type: Boolean

Default value: true

Initialize the collapsible with the collapsible option specified:
<pre>
$("#element").collapsible({ collapsible: true});
</pre>

Get or set the disable option, after initialization:

//getter

<pre>
var collapsible = $("#element).collapsible("option","collapsible");
</pre>

//setter

<pre>
$("#element").collapsible("option","collapsible",false);
</pre>

<h3>header</h3>
Selector for the header element, applied via .find() on the main collapsible element. If the element is not found on the main collapsible element, the header becomes the main element.

Type: String, jQuery Object

Default value: [data-role=title]

Initialize the collapsible with the content option specified:

<pre>
$("#element").collapsible({ header: ".header"});
</pre>

Get or set the header option, after initialization:

//getter
<pre>
var header = $("#element).collapsible("option","header");
</pre>

//setter

<pre>
$("#element").collapsible("option","header",".header");
</pre>

<h3>content</h3>
Selector for the content element, applied via .find() on the main collapsible element. 

Type: String, jQuery Object

Default value: [data-role=content]

Initialize the collapsible with the content option specified:

<pre>
$("#element").collapsible({ content: ".content"});
</pre>
Get or set the content option, after initialization:

//getter
<pre>
var content = $("#element).collapsible("option","content");
</pre>

//setter
<pre>
$("#element").collapsible("option","content",".content");
</pre>

<h3>trigger</h3>
Selector for the trigger element, applied via .find() on the main collapsible element. If the trigger is not found, the header becomes trigger.

Type: String, jQuery Object

Default value: [data-role=trigger]

Initialize the collapsible with the trigger option specified:
<pre>
$("#element").collapsible({ trigger: ".trigger"});
</pre>

Get or set the trigger option, after initialization:
//getter
var trigger = $("#element).collapsible("option","trigger");
//setter
$("#element").collapsible("option","trigger",".trigger");

<h3>openedState</h3>
Specifies the class that the main collapsible element will earn when the content gets expanded.

Type: String

Default value: null

Initialize the collapsible with the openedState  option specified:
<pre>
$("#element").collapsible({ openedState: "opened"});
</pre>

Get or set the openedState  option, after initialization:
//getter
<pre>
var openedState = $("#element).collapsible("option","openedState");
</pre>

//setter
<pre>
$("#element").collapsible("option","openedState","opened");
</pre>

<h3>closedState</h3>
Specifies the class that the main collapsible element will earn when the content gets collapsed.

Type: String

Default value: null

Initialize the collapsible with the contentClass option specified:
<pre>
$("#element").collapsible({ contentClass: "collapsible-content"});
</pre>

Get or set the contentClass option, after initialization:

//getter
<pre>
var contentClass = $("#element).collapsible("option","contentClass");
</pre>

//setter
<pre>
$("#element").collapsible("option","contentClass","collapsible-content");
</pre>

<h3>disabledState</h3>
Specifies the class that the main collapsible element will earn when panel gets disabled.

Type: String

Default value: null

Initialize the collapsible with the disabledState option specified:
<pre>
$("#element").collapsible({ disabledState: "disabled"});
</pre>
Get or set the disabledState option, after initialization:

//getter
<pre>
var disabledState = $("#element).collapsible("option","disabledState");
</pre>

//setter
<pre>
$("#element").collapsible("option","disabledState","disabled");
</pre>

<h3>loadingClass</h3>
Specifies the class that the main collapsible element will earn when requesting data using ajax.

Type: String

Default value: null

Initialize the collapsible with the loadingClass option specified:
<pre>
$("#element").collapsible({ loadingClass: "loading"});
</pre>
Get or set the loadingClass option, after initialization:
//getter
<pre>
var loadingClass = $("#element).collapsible("option","loadingClass");
</pre>

//setter
<pre>
$("#element").collapsible("option","loadingClass","loading");
</pre>

<h3>ajaxUrlElement</h3>
Selector for the element that contains the URL for ajax request, applied via .find() on the header. 

Type: String

Default value: [data-ajax=true]

Initialize the collapsible with the ajaxUrlElement option specified:
<pre>
$("#element").collapsible({ ajaxUrlElement: ".ajax"});
</pre>
Get or set the <code>ajaxUrlElement</code> option, after initialization:

//getter
<pre>
var content = $("#element).collapsible("option","ajaxUrlElement");
</pre>

//setter
<pre>
$("#element").collapsible("option","ajaxUrlElement","ajax");
</pre>

<h3>ajaxContent</h3>
Specifies if the content will be updated via ajax request.

Type: Boolean

Default value: false

Initialize the collapsible with the ajaxContent option specified:
<pre>
$("#element").collapsible({ ajaxContent: true});
</pre>

Get or set the ajaxContent option, after initialization:

//getter
<pre>
var active = $("#element).collapsible("option","ajaxContent");
</pre>

//setter
<pre>
$("#element").collapsible("option","ajaxContent",true);
</pre>

<h3>saveState</h3>
Specifies if the state will be saved into local storage if the browser supports it, otherwise will be saved into a cookie.

Type: boolean

Default value: true

Initialize the collapsible with the saveState option specified:
<pre>
$("#element").collapsible({ saveState: true});
</pre>

Get or set the saveState option, after initialization:

//getter
<pre>
var active = $("#element).collapsible("option","saveState");
</pre>

//setter
<pre>
$("#element").collapsible("option","saveState",true);
</pre>

<h3>animate</h3>
Specifies if the collapse/expand actions will be made with animation.

Type: Number / String / Object

Default value: false

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

<h3>icons</h3>
Icons to use for headers, if no classes are specified icons will not be created. A new span will be created and appended to header, the classes for this span will automatically be changed whenever the content gets expanded/collapsed.

Type: String

Default value: { "header": "icon-triangle-1-e", "activeHeader": "icon-triangle-1-s" }, where icon-triangle-1-e/icon-triangle-1-s are the classes mentioned above

Initialize the collapsible with the icons option specified:
<pre>
$("#element").collapsible({ icons: {"header": "plus", "activeHeader": "minus"}});
</pre>

Get or set the icons option, after initialization:

//getter
<pre>
var icons = $("#element).collapsible("option","icons");
</pre>

//setter
<pre>
$("#element").collapsible("option","icons",{"header": "plus", "activeHeader": "minus" });
</pre>

<h2>Methods</h2>
<h3>disable()</h3>

Disable the panel.
This method does not accept any arguments.

Invoke the disable method:
<pre>
$( "#element" ).collapsible("disable");
</pre>

<h3>enable()</h3>
Enable the panel.

This method does not accept any arguments.

Invoke the enable method:
<pre>
$( "#element" ).collapsible("enable");
</pre>

<h3>deactivate()</h3>

Collapse the content when this method is called.
This method does not accept any arguments.

Invoke the deactivate method:
<pre>
$( "#element" ).collapsible("deactivate");
</pre>

<h3>forceDeactivate</h3>
Collapse the content without animation whenever this method is called.
This method does not accept any arguments.

Invoke the <code>forceDeactivate</code> method:
<pre>
$( "#element" ).collapsible("forceDeactivate");
</pre>


<h3>activate</h3>
Expand the content whenever this method is called.

This method does not accept any arguments.

Invoke the activate method:
<pre>
$("#element" ).collapsible("activate");
</pre>

<h3>forceActivate</h3>
Expand the content without animation whenever this method is called.
This method does not accept any arguments.

Invoke the forceActivate method:
<pre>
$("#element").collapsible("forceActivate");
</pre>

<p class="q">
Don't see them in code:
destroy,
beforeOpen Callback
</p>