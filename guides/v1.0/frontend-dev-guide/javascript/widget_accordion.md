---
layout: default
group: fedg
subgroup: Javascript
title: Accordion widget
menu_order: 3
menu_title: Accordion widget
github_link: frontend-dev-guide/javascript/widget_accordion.md
---

<h2>Overview</h2>
Accordions are generally used to break content into multiple sections that can be swapped to save space.
Accordions support arbitrary markup, but a set of data-attributes should be specified for the header, trigger and content, or all this elements must be specified with selectors as options. Also the titles and contents must be in the same order in DOM.
Magento Accordion widget is an extension of <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_accordion.md">Magento Tabs widget</a>.

The collapsible widget source is located in the <a href="{{site.mage2000url}}lib/web/mage/accordion.js" target="_blank">lib/web/mage/accordion.js</a>.

<h2>Initialize the accordion widget</h2>

Generally the collapsible widget is instantiated like following:
<pre>
$("#element").accordion();
</pre>

Where <code>#element</code> is the element's selector.

 
In this case, because the header, content and trigger are not specified, "#element" must have children with the following attributes:
 
data-role="title"
data-role="content"
 
In this case the trigger will be actually the title but you can also specify it if you want having it different from title by adding the following attribute to the element:
 
data-role="trigger"
 
Also to have the content updated using Ajax the element containing the URL for request must have the following attribute:
 
data-ajax="true"
 
Mark-up examples:
 
<div id="element">
    <div data-role="title">
        <div data-role="trigger">
            <span>Title 1</span>
        </div>
    </div>
    <div data-role="content">Content 1</div>
  
    <div data-role="title">
        <div data-role="trigger">
            <span>Title 2</span>
        </div>
    </div>
    <div data-role="content">Content 2</div>
  
   <div data-role="title">
        <div data-role="trigger">
            <span>Title 3</span>
        </div>
    </div>
    <div data-role="content">Content 3</div>
</div>
 
Is not necessary to have the data-attributes described above, you can specify the header, content, trigger as options when you initialize the widget.
Widget can be instantiated with options:
 
$("#element").accordion({
    header : "#title-1"
    content : "#content-1",
    trigger : "#trigger-1,
    ajaxUrlElement: "a"
 });
 
Widget instantiation using data attributes:
 
<div id="element" data-mage-init='{"accordion":{}}'>
 
Widget instantiated using data attributes with options passed:
 
<div id="element" data-mage-init='{"accordion":{"header":"#title1", "content":"#content1", "icons": "{\"header\":\"plus\",\"activeHeader\":\"minus\"}}'/>

<h2>Options</h2>
Accordion options coincide with <a href="{{site.gdeurl}}frontend-dev-guide/javascript/jquery-widget-tabs.html#fedg_tabs_options">Magento Tabs options</a>, plus the following custom ones:
<ul>
<li><a href="#collaps_active">active</a></li>
<li><a href="#collaps_multi">multipleCollapsible</a></li>
<li><a href="#collaps_open">openOnFocus</a></li>
<p class="q">openFocus is not described in docs. Answer: need to document</p>
</ul>

<h3>active</h3>

Specifies which tab should be active when widget gets instantiated.

Type: Array, String

Default value: [0]

Initialize the tabs with the active option specified:
<pre>
$("#element").accordion({ active: "0 1"});
$("#element").accordion({ active: [0,1]});
</pre>
<h3>multipleCollapsible</h3>
Specifies is multiple panels can be expanded at the same time.

Type: Boolean

Default value: false

Initialize the tabs with the active option specified:
<pre>
$("#element").accordion({ multipleCollapsible: false});
</pre>
Get or set the active option, after initialization:

//getter
<pre>
var multipleCollapsible = $("#element).accordion("option","multipleCollapsible");
</pre>

//setter
<pre>
$("#element").tabs("option","multipleCollapsible",false);
</pre>

<h2>Methods</h2>
Accordion widget options and keyboard interaction mostly coincide with Magento Tabs Methods.
<p class="q">Magento tabs or simply tabs. A:magento tabs</p>

The custom accordion methods are the fdifferences are the following:

<ul>
<li><a href="#meth_act">activate()</a></li>
<li><a href="#meth_deact">deactivate()</a></li>
</ul>

<h3>activate(index)</h3>
Activate a tab.

The <code>index</code> parameter defines the which tab to activate; type: Number, Array.

If no index is passed, all panels are activated.
Code examples:
<pre>
$( "#element" ).accordion( "activate" );
$( "#element" ).accordion( "activate", 1 );
$( "#element" ).accordion( "activate", [0,1]);
</pre>

<h3>deactivate(index)</h3>
Deactivate a tab.

The <code>index</code> parameter defines the which tab to activate; type: Number, Array.

If no index is passed, all panels are deactivated.

Code examples:

<pre>
$( "#element" ).accordion( "deactivate" );
$( "#element" ).accordion( "deactivate", 1 );
$( "#element" ).accordion( "deactivate", [0,1]);
</pre>