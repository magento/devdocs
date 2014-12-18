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

A page layout file defines the page wireframe, for example, one-column layout. Technically page layout is an .xml file defining the structure inside the `<body>` section of an HTML page. Page layouts feature only <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html#layout_overview_blocks" target="_blank">containers</a>. 
All page layouts used for page rendering should be declared in the page layout declaration file.

Page configuration is also an .xml file. It defines the detailed structure (page header, footer, etc.), contents and page meta information, including the page layout used. Page configuration features both main elements, <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html#layout_overview_blocks" target="_blank">blocks of particular classes</a> and containers.

We also distinguish the third type of layout files, *generic layouts*. They are .xml files which define the contents and detailed structure inside the `<body>` section of an HTML page. These files are used for pages returned by AJAX requests, emails, HTML snippets and so on.

This article gives a comprehensive description of layout type structure and rules of usage.

<h2 id="layout-types-page">Page layout</h2>
Page layout declares the wireframe of a page inside the `<body>` section, for example one-column layout or two-column layout. 

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


<h3 id="layout-types-page-conv">Page layout files conventional location</h3>

Conventionally page layouts must be located as follows:

* Module page layouts: `app/code/<Namespace>/<Module>/view/frontend/page_layout`
* Theme page layouts: `app/design/frontend/<Vendor>/<theme>/<Namespace>_<Module>/page_layout`

<h3 id="layout-types-page-dec">Page layouts declaration</h3>

To be able to use a layout for actual page rendering, you need to declare it in the layouts declaration file `layouts.xml`.

Conventionally layout declaration file can be located in one of the following locations: 


<ul>
<li>Module layout declations: <code>app/code/&lt;Namespace&gt;/&lt;Module&gt;/view/frontend/layouts.xml</code></li>
<li>Theme layout declaration: <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;Namespace&gt;_&lt;Module&gt;/layouts.xml</code></li>

</ul>

Declare a layout file using the `<layout></layout>` instruction, for which specify the following:

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

The page configuration "fills" the containers defined in a layout file with specified functionality using blocks and containers. It also contains page meta-information, and contents of the `<head>` section.

<h3 id="layout-type-conf-loc">Page configuration file conventional location</h3>

Conventionally page configuration files must be located as follows:

* Module page configurations: `app/code/<Namespace>/<Module>/view/frontend/layout`
* Theme page configurations: `app/design/frontend/<Vendor>/<theme>/<Namespace>_<Module>/layout`

<h3>Page configuration structure and allowed layout instructions</h3>

<table>
  <tbody>
    <tr>
      <th>Element</th>
      <th colspan="1">Attributes</th>
      <th colspan="1">Parent of</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code> <span>&lt;page&gt;&lt;/page&gt;</span> </code>
      </td>
      <td colspan="1">
        <ul>
          <li>
            <code>layout = {layout}</code>
          </li>
          <li>
            <code class="xml color1">
              <a href="http://xsinoNamespaceSchemaLocation">xsi:noNamespaceSchemaLocation</a>
            </code>
            <code class="xml plain">=</code>
            <code class="xml string">"../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd</code>
          </li>
        </ul>
      </td>
      <td colspan="1">
        <ul>
          <li><code>&lt;html&gt;</code></li>
          <li><code>&lt;head&gt;</code></li>
          <li><code>&lt;body&gt;</code></li>
          <li><code>&lt;update&gt;</code></li>
        </ul>
      </td>
      <td>Mandatory root element.</td>
    </tr>
    <tr>
      <td colspan="1"><code>&lt;html&gt;&lt;/html&gt;</code></td>
      <td colspan="1">
        <p>none</p>
      </td>
      <td colspan="1">
        <ul>
          <li><code>&lt;attribute&gt;</code></li>
        </ul>
      </td>
      <td colspan="1">
        <span>Mandatory element.</span>
      </td>
    </tr>
    <tr>
      <td colspan="1"><code>&lt;head&gt;&lt;/head&gt;</code></td>
      <td colspan="1">none</td>
      <td colspan="1">
        <ul>
          <li><code>&lt;title&gt;</code></li>
          <li><code>&lt;meta&gt;</code></li>
          <li><code>&lt;link&gt;</code></li>
          <li><code>&lt;css&gt;</code></li>
          <li><code>&lt;script&gt;</code></li>
        </ul>
      </td>
      <td colspan="1"> </td>
    </tr>
    <tr>
      <td colspan="1"><code>&lt;body&gt;&lt;/body&gt;</code></td>
      <td colspan="1">none</td>
      <td colspan="1">
        <ul>
          <li><code>&lt;block&gt;</code></li>
          <li><code>&lt;container&gt;</code></li>
          <li><code>&lt;remove&gt;</code></li>
          <li><code>&lt;move&gt;</code></li>
       <li><code>&lt;attribute&gt;</code></li>
          <li><code>&lt;referenceBlock&gt;</code></li>
          <li><code>&lt;referenceContainer&gt;</code></li>
          <li><code>&lt;action&gt;</li>
        </ul>
      </td>
      <td colspan="1"> </td>
    </tr>
    <tr>
      <td colspan="1"><code>&lt;attribute&gt;</code></td>
      <td colspan="1">
        <ul>
          <li><code>name = <span>{arbitrary_name}</code></span>
          </li>
          <li><code>value = <span>{arbitrary_value}</code></span>
          </li>
        </ul>
      </td>
      <td colspan="1"> </td>
      <td colspan="1">
        <p>Specified for <code>&lt;html&gt;</code>, rendered like following:</p>
        <p><code>&lt;html name="value'&gt;</code></p>
        <p> </p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p><code>&lt;title&gt;</code></p>
      </td>
      <td colspan="1">none</td>
      <td colspan="1">none</td>
      <td colspan="1">Page title</td>
    </tr>
    <tr>
      <td colspan="1">
        <p><code>&lt;meta&gt;</code></p>
      </td>
      <td colspan="1">
        <ul>
          <li>
            <span><code>content</code></span>
          </li>
          <li>
            <span><code>charset</code></span>
          </li>
          <li>
            <span><code>http-equiv</code></span>
          </li>
          <li>
            <span><code>name</code></span>
          </li>
          <li>
            <span><code>scheme</code></span>
          </li>
        </ul>
      </td>
      <td colspan="1">
        <span>none</span>
      </td>
      <td colspan="1"> </td>
    </tr>
    <tr>
      <td colspan="1">
        <p><code>&lt;link&gt;</code></p>
      </td>
      <td colspan="1">
        <ul>
          <li>
            <span><code>src</code></span>
          </li>
          <li>
            <span><code>defer</code></span>
          </li>
          <li>
            <span><code>ie_condition</code></span>
          </li>
          <li>
            <span><code>charset</code></span>
          </li>
          <li>
            <span><code>hreflang</code></span>
          </li>
          <li>
            <span><code>media</code></span>
          </li>
          <li>
            <span><code>rel</code></span>
          </li>
          <li>
            <span><code>rev</code></span>
          </li>
          <li>
            <span><code>sizes</code></span>
          </li>
          <li>
            <span><code>target</code></span>
          </li>
          <li>
            <span><code>type</code></span>
          </li>
        </ul>
      </td>
      <td colspan="1">
        <span>none</span>
      </td>
      <td colspan="1"> </td>
    </tr>
    <tr>
      <td colspan="1">
        <span><code>&lt;css&gt;</code></span>
      </td>
      <td colspan="1">
        <ul>
          <li>
            <span><code>src</code></span>
          </li>
          <li>
            <span><code>defer</code></span>
          </li>
          <li>
            <span><code>ie_condition</code></span>
          </li>
          <li>
            <span><code>charset</code></span>
          </li>
          <li>
            <span><code>hreflang</code></span>
          </li>
          <li>
            <span><code>media</code></span>
          </li>
          <li>
            <span><code>rel</code></span>
          </li>
          <li>
            <span><code>rev</code></span>
          </li>
          <li>
            <span><code>sizes</code></span>
          </li>
          <li>
            <span><code>target</code></span>
          </li>
          <li>
            <span><code>type</code></span>
          </li>
        </ul>
      </td>
      <td colspan="1">
        <span>none</span>
      </td>
      <td colspan="1"> </td>
    </tr>
    <tr>
      <td colspan="1">
        <p><code>&lt;script&gt;</code></p>
      </td>
      <td colspan="1">
        <ul>
          <li>
            <span><code>src</code></span>
          </li>
          <li>
            <span><code>defer</code></span>
          </li>
          <li>
            <span><code>ie_condition</code></span>
          </li>
          <li>
            <span><code>async</code></span>
          </li>
          <li>
            <span><code>charset</code></span>
          </li>
          <li>
            <span><code>type</code></span>
          </li>
        </ul>
      </td>
      <td colspan="1">
        <span>none</span>
      </td>
      <td colspan="1"> </td>
    </tr>
  </tbody>
</table>

<h2 id="layout-types-gen">Generic layout</h2>

Generic layouts define the contents and detailed structure inside the `<body>` section of an HTML page. 






