---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Accordion widget
menu_order: 1
menu_title: Accordion widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_accordion.html
---

## Overview

Magento accordion widget is an {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} of the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_tabs.html" target="_blank">Magento Tabs widget</a>.

Accordions are generally used to break content into multiple sections that can be swapped to save space.

The accordion {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source is <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/accordion.js" target="_blank">lib/web/mage/accordion.js</a>.

## Initialize the accordion widget   {#accordion_init}

### Initialize accordion in JS components

#### Initialize accordion with `data-*` attributes specified

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

<li>To have the content updated using Ajax, add the <code>data-ajax="true"</code> attribute for the element containing the {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} for request.
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
        'accordion'], function ($) {
        $("#element").accordion();
    });
</script>

{%endhighlight%}

#### Initialize accordion with option

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

### Initialize accordion in a template

The accordion widget can be initialized using the <code>data-mage-init</code> attribute or `<script>` element, as described in <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html#data_mage_init" target="_blank">JavaScript initialization</a>.

## Options   {#accordion_options}

Accordion options coincide with <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_tabs.html#fedg_tabs_options" target="_blank">Magento Tabs options</a>, plus the following custom ones:
<ul>
<li><a href="#collaps_active">active</a></li>
<li><a href="#collaps_multi">multipleCollapsible</a></li>
<li><a href="#collaps_open">openOnFocus</a></li>
</ul>

### `active`   {#collaps_active}


Defines which tab is active when the widget gets instantiated.

**Type**: Array, String

**Default value**: `0`

Example of the accordion initialization with the <code>active</code> option specified:
<pre>
$("#element").accordion({ active: "0 1"});
$("#element").accordion({ active: [0,1]});
</pre>


### `multipleCollapsible`   {#collaps_multi}

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

### `openOnFocus`   {#collaps_open}


For keyboard navigation defines if the accordion expands when the title gets in focus.

**Type**: Boolean

**Default value**: `false`

## Methods   {#accordion_methods}

Accordion widget options and keyboard interaction mostly coincide with the Magento tabs widget methods.

The custom accordion methods are the following:

<ul>
<li><a href="#meth_act">activate()</a></li>
<li><a href="#meth_deact">deactivate()</a></li>
</ul>

### `activate(index)`   {#meth_act}

Activate a tab with the specified `index`.

**Type**: Number, Array.

If no `index` is passed, all panels are activated.

Code examples:
<pre>
$( "#element" ).accordion( "activate" );
$( "#element" ).accordion( "activate", 1 );
$( "#element" ).accordion( "activate", [0,1]);
</pre>

### `deactivate(index)`   {#meth_deact}

Deactivate a tab with the specified `index`.


**Type**: Number, Array.

If no index is passed, all panels are deactivated.

Code examples:

<pre>
$( "#element" ).accordion( "deactivate" );
$( "#element" ).accordion( "deactivate", 1 );
$( "#element" ).accordion( "deactivate", [0,1]);
</pre>
