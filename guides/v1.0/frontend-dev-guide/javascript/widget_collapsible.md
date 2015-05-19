---
layout: default
group: fedg
subgroup: Javascript
title: Magento jQuery widgets
menu_order: 2
menu_title: Magento jQuery widgets
github_link: frontend-dev-guide/javascript/widget_collapsible.md
---

<h2>Overview</h2>

The Magento Collapsible widget converts a header/content pair into an accordion(collapse/expand the content when the header gets clicked).

The content can be updated using Ajax once the content gets expanded. The collapsed/expanded state can be saved into local storage or cookies if the browser doesn't support local storage. To save the state is absolutely necessary that the main collapsible element to have an id specified. Also when deep linking is used, if the id specified as anchor is actually the id of the content or the id of an element that appends to content, the content will be automatically expanded for that element.

The Collapsible widget source is located in the <code>pub/lib/web/mage</code> directory.

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
$("#element").collapsible({
    header : "#title-1"
    content : "#content-1",
    trigger : "#trigger-1,
    ajaxUrlElement: "a"
 });
Widget instantiation using data attributes:
<div id="element" data-mage-init='{"collapsible":{}}'>
Widget instantiated using data attributes with options passed:
<div id="element" data-mage-init='{"collapsible":{"header":"#title1", "content":"#content1", "icons": "{\"header\":\"plus\",\"activeHeader\":\"minus\"}}'/>

<h2>Options</h2>

The collapsible widget has the following options:

*	<a href="#fedg_collaps_options-active">active</a>
*	<a href="#fedg_tabs_options-destination">destination</a>
*	<a href="#fedg_tabs_options-ajaxOptions">ajaxOptions</a>
*	<a href="#fedg_tabs_options-tabIdArgument">tabIdArgument</a>
*	<a href="#fedg_tabs_options-tabsBlockPrefix">tabsBlockPrefix</a>
*	<a href="#fedg_tabs_options-shadowTabsShadow">shadowTabsShadow</a>

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

<h3>disable</h3>
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