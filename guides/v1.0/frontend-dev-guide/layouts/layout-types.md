---
layout: default
group: 
subgroup: B_Layouts
title: Layout file types
menu_title: Layout file types
menu_order: 5
github_link: frontend-dev-guide/layouts/layout-types.md
---

<h2>Overview</h2>
For a particular page, its layout is defined by two major layout components: *page layout* file and *page configuration* file. 

A page layout file defines the high level structure of the page, for example, one-column layout. Technically page layout is an .xml file, which features only <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html#layout_overview_blocks" target="_blank">containers</a>. 

Page configuration is also an .xml file, it defines which page layout is used and the low level, detailed structure (page header, footer, etc.) and content. Page configuration features both main elements, <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html#layout_overview_blocks" target="_blank">blocks of particular classes</a> and containers.
All page layouts used for page rendering should be declared in the page layout declaration file.
For rendering AJAX requests output a specific type of a page configuration files is used called *generic layout*.
This article gives a comprehensive description of layout type structure and rules of usage.

<h2 id="layout-types-page">Page layout</h2>
Page layout declares high-level page structure, for example one-column layout or two-column layout. 

Allowed layout instructions:

* <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_cont" target="_blank">&nbsp;&lt;container&gt;</a>
* <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_ref" target="_blank">&nbsp;&lt;referenceContainer&gt;</a>
* <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_mv" target="_blank">&nbsp;&lt;move&gt;</a>
* <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_rem" target="_blank">&nbsp;&lt;remove&gt;</a>
* <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_upd" target="_blank">&nbsp;&lt;update&gt;</a> 

Sample page layout:

**`magento2/app/code/Magento/Theme/view/frontend/page_layout/2columns-left.xml`**

<pre>
&lt;layout&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_layout.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;update&nbsp;handle=&quot;1column&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceContainer&nbsp;name=&quot;columns&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;container&nbsp;name=&quot;div.sidebar.main&quot;&nbsp;htmlTag=&quot;div&quot;&nbsp;htmlClass=&quot;sidebar&nbsp;sidebar-main&quot;&nbsp;after=&quot;main&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;container&nbsp;name=&quot;sidebar.main&quot;&nbsp;as=&quot;sidebar_main&quot;&nbsp;label=&quot;Sidebar&nbsp;Main&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/container&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;container&nbsp;name=&quot;div.sidebar.additional&quot;&nbsp;htmlTag=&quot;div&quot;&nbsp;htmlClass=&quot;sidebar&nbsp;sidebar-additional&quot;&nbsp;after=&quot;div.sidebar.main&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;container&nbsp;name=&quot;sidebar.additional&quot;&nbsp;as=&quot;sidebar_additional&quot;&nbsp;label=&quot;Sidebar&nbsp;Additional&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/container&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceContainer&gt;
&lt;/layout&gt;
</pre>

<h3 id="layout-types-page-dec">Page layouts declaration</h3>

To be able to use a layout for actual page rendering, you need to declare it in the layouts declaration file `layouts.xml`.

<p class="q">Are they declared on per-module basis? Meaning, if I want to use a layout for a module, I should declare it in this module directory?<p>

Conventionally layout declaration file can be located in one of the following locations: 
<p class=q>Does this order correspond to the overriding order? </p>

* app/code/<Namespace>/<Module>/view/frontend/page/layouts.xml
* app/design/frontend/<Vendor>/<theme>/<Namespace>_<Module>/page/layouts.xml
* app/design/frontend/<Vendor><theme>/<Namespace>_<Module>/page/override/layouts.xml 
* app/design/frontend/<Vendor><theme>/<Namespace>_<Module>/override/<ancestor_theme>/layouts.xml 

To declare a layout file use the <layout></layout> element, for which specify the following:

* <code>&lt;layout&nbsp;id=&quot;layout_file_name&quot;&gt;</code>. For example, the `2columns-left.xml` page layout is declared like following: <code>&lt;layout&nbsp;id&nbsp;=&nbsp;&quot;2columns-left&quot;/&gt;</code>
* <code>&lt;label&nbsp;tranlsate=&quot;true|false&quot;&gt;{Label_used_in_Admin}&lt;/label&gt;</code>

Sample page layout declaration file:

**`app/code/Magento/Theme/view/frontend/layouts.xml`**

<pre>
&lt;page_layouts&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../lib/internal/Magento/Framework/View/PageLayout/etc/layouts.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;layout&nbsp;id=&quot;1column&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;translate=&quot;true&quot;&gt;1&nbsp;column&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/layout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;layout&nbsp;id=&quot;2columns-left&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;translate=&quot;true&quot;&gt;2&nbsp;columns&nbsp;with&nbsp;left&nbsp;bar&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/layout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;layout&nbsp;id=&quot;2columns-right&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;translate=&quot;true&quot;&gt;2&nbsp;columns&nbsp;with&nbsp;right&nbsp;bar&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/layout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;layout&nbsp;id=&quot;3columns&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;translate=&quot;true&quot;&gt;3&nbsp;columns&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/layout&gt;
&lt;/page_layouts&gt;
</pre>



<h2 id="layout-types-conf">Page configuration</h2>

Page configuration is an .xml file, which "fills" the containers defined in a layout file by the particular functionality using blocks.

<h3>Page configuration structure and allowed layout instructions</h3>







