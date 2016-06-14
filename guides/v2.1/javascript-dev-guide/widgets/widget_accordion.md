---
layout: default
group: jsdg
subgroup: 3_Widgets
title: Accordion widget
menu_order: 1
menu_title: Accordion widget
version: 2.1
github_link: javascript-dev-guide/widgets/widget_accordion.md
---

<h2>Overview</h2>

Magento accordion widget is an extension of the <a href="{{site.gdeurl21}}javascript-dev-guide/widgets/widget_tabs.html" target="_blank">Magento Tabs widget</a>.

Accordions are generally used to break content into multiple sections that can be swapped to save space.

The accordion widget source is <a href="{{site.mage2100url}}lib/web/mage/accordion.js" target="_blank">lib/web/mage/accordion.js</a>.

<h2 id="accordion_init">Initialize the accordion widget</h2>

<h3>Initialize accordion in JS components</h3>

<h4>Initialize accordion with <code>data-*</code> attributes specified</h4>
Generally the accordion widget is instantiated like following:
<pre>
$("#element").accordion();
</pre>

Where:
<ul>
<li><code>#element</code> is the selector of the element for accordion is initialized.</li>
<li><code>#element</code> has children with the following attributes specified: 

<ul>
<li><code>data-role="title"</code>
</li>
<li><code>data-role="content"</code></li>
</ul>
</li>
</ul>

Optionally, you can specify the following:
<ul>
<li>If you want the trigger to be different from the title, add the <code>data-role="content"</code> attribute for the element</li>

<li>To have the content updated using Ajax, add the <code>data-ajax="true"</code> attribute for the element containing the URL for request.
</li>
</ul>

Accordions support arbitrary markup, but the following requirements should be kept:

<ol>
<li>Titles and contents are specified in the same order in DOM: first title, then contents.</li>

<li>The header, trigger and content are specified, either by adding the <code>data-*</code> attributes for the corresponding children elements or by specifying these elements with selectors as options.</li>
</ol>

Mark-up examples:

{%highlight html%}
<div id="element">
    <div data-role="collapsible">
        <div data-role="trigger">
            <span>Title 1</span>
        </div>
    </div>
    <div data-role="content">Content 1</div>

    <div data-role="collapsible">
        <div data-role="trigger">
            <span>Title 2</span>
        </div>
    </div>
    <div data-role="content">Content 2</div>

    <div data-role="collapsible">
        <div data-role="trigger">
            <span>Title 3</span>
        </div>
    </div>
    <div data-role="content">Content 3</div>
</div>

<script>
    require([
        'jquery',
        'tabs'], function ($) {
        $("#element").accordion();
    });
</script>

{%endhighlight%}


<h4>Initialize accordion with option</h4>
You can specify the header, content, trigger as options when you initialize the widget.
For example:
<pre>
$("#element").accordion({
    header : "#title-1",
    content : "#content-1",
    trigger : "#trigger-1",
    ajaxUrlElement: "a"
 });
</pre>

<h3>Initialize accordion in a template</h3>

The accordion widget can be initialized using the <code>data-mage-init</code> attribute or `<script>` element, as described in <a href="{{site.gdeurl21}}frontend-dev-guide/javascript/js_init.html#data_mage_init" target="_blank">JavaScript initialization</a>.


<h2 id="accordion_options">Options</h2>
Accordion options coincide with <a href="{{site.gdeurl21}}javascript-dev-guide/widgets/widget_tabs.html#fedg_tabs_options" target="_blank">Magento Tabs options</a>, plus the following custom ones:
<ul>
<li><a href="#collaps_active">active</a></li>
<li><a href="#collaps_multi">multipleCollapsible</a></li>
<li><a href="#collaps_open">openOnFocus</a></li>
</ul>

<h3 id="collaps_active"><code>active</code></h3>

Defines which tab is active when the widget gets instantiated.

**Type**: Array, String

**Default value**: `0`

Example of the accordion initialization with the <code>active</code> option specified:
<pre>
$("#element").accordion({ active: "0 1"});
$("#element").accordion({ active: [0,1]});
</pre>


<h3 id="collaps_multi"><code>multipleCollapsible</code></h3>
Defines if multiple panels can be expanded at the same time.

**Type**: Boolean

**Default value**: `false`

Example of the accordion initialization with the <code>multipleCollapsible</code> option specified:
<pre>
$("#element").accordion({ multipleCollapsible: false});
</pre>
Get or set the <code>multipleCollapsible</code> option, after initialization:
<pre>
//getter
var multipleCollapsible = $("#element").accordion("option","multipleCollapsible");

//setter
$("#element").tabs("option","multipleCollapsible",false);
</pre>

<h3 id="collaps_open"><code>openOnFocus</code></h3>

For keyboard navigation defines if the accordion expands when the title gets in focus.

**Type**: Boolean

**Default value**: `false`


<h2 id="accordion_methods">Methods</h2>
Accordion widget options and keyboard interaction mostly coincide with the Magento tabs widget methods.

The custom accordion methods are the following:

<ul>
<li><a href="#meth_act">activate()</a></li>
<li><a href="#meth_deact">deactivate()</a></li>
</ul>

<h3 id="meth_act"><code>activate(index)</code></h3>
Activate a tab with the specified `index`.

**Type**: Number, Array.

If no `index` is passed, all panels are activated.

Code examples:
<pre>
$( "#element" ).accordion( "activate" );
$( "#element" ).accordion( "activate", 1 );
$( "#element" ).accordion( "activate", [0,1]);
</pre>

<h3 id="meth_deact"><code>deactivate(index)</code></h3>
Deactivate a tab with the specified `index`.


**Type**: Number, Array.

If no index is passed, all panels are deactivated.

Code examples:

<pre>
$( "#element" ).accordion( "deactivate" );
$( "#element" ).accordion( "deactivate", 1 );
$( "#element" ).accordion( "deactivate", [0,1]);
</pre>
