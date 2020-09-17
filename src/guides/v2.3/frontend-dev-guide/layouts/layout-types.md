---
group: frontend-developer-guide
title: Layout file types
functional_areas:
  - Frontend
---

## What's in this topic

For a particular page, its layout is defined by two major layout components: *page layout* file and *page configuration* file.

A page layout file defines the page wireframe, for example, one-column layout. Technically page layout is an .xml file defining the structure inside the `<body>` section of the HTML page markup. Page layouts feature only [containers]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_cont).
All page layouts used for page rendering should be declared in the page layout declaration file.

Page configuration is also an .xml file. It defines the detailed structure (page header, footer, etc.), contents and page meta information, including the page layout used. Page configuration features both main elements, [blocks]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_block) and [containers]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_cont).

We also distinguish the third type of layout files, *generic layouts*. They are .xml files which define the contents and detailed structure inside the `<body>` section of the HTML page markup. These files are used for pages returned by AJAX requests, emails, HTML snippets and so on.

This article gives a comprehensive description of each layout file type.

## Page layout {#layout-types-page}

Page layout declares the wireframe of a page inside the `<body>` section, for example one-column layout or two-column layout.

Allowed layout instructions:

*  [`<container>`]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_cont)
*  [`<referenceContainer>`]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_ref)
*  [`<move>`]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_mv)
*  [`<update>`]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_upd)

Sample page layout:

`<Magento_Theme_module_dir>/view/frontend/page_layout/2columns-left.xml`

```xml
<layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_layout.xsd">
    <update handle="1column"/>
    <referenceContainer name="columns">
        <container name="div.sidebar.main" htmlTag="div" htmlClass="sidebar sidebar-main" after="main">
            <container name="sidebar.main" as="sidebar_main" label="Sidebar Main"/>
        </container>
        <container name="div.sidebar.additional" htmlTag="div" htmlClass="sidebar sidebar-additional" after="div.sidebar.main">
            <container name="sidebar.additional" as="sidebar_additional" label="Sidebar Additional"/>
        </container>
    </referenceContainer>
</layout>
```

### Page layout files conventional location {#layout-types-page-conv}

Conventionally page layouts must be located as follows:

*  Module page layouts: `<module_dir>/view/frontend/page_layout`
*  Theme page layouts: `<theme_dir>/<Namespace>_<Module>/page_layout`

### Page layouts declaration {#layout-types-page-dec}

To be able to use a layout for actual page rendering, you need to declare it in `layouts.xml`.

Conventionally layout declaration file can be located in one of the following locations:

*  Module layout declarations: `<module_dir>/view/frontend/layouts.xml`
*  Theme layout declaration: `<theme_dir>/<Namespace>_<Module>/layouts.xml`

Declare a layout file using the `<layout></layout>` instruction, for which specify the following:

*  `<layout id="layout_file_name">`. For example, the `2columns-left.xml` page layout is declared like following: `<layout id="2columns-left"/>`
*  `<label translate="true|false">{Label_used_in_Admin}</label>`

Sample page layout declaration file: `<Magento_Theme_module_dir>/view/frontend/layouts.xml`

```xml
<page_layouts xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/PageLayout/etc/layouts.xsd">
    <layout id="1column">
        <label translate="true">1 column</label>
    </layout>
    <layout id="2columns-left">
        <label translate="true">2 columns with left bar</label>
    </layout>
    <layout id="2columns-right">
        <label translate="true">2 columns with right bar</label>
    </layout>
    <layout id="3columns">
        <label translate="true">3 columns</label>
    </layout>
</page_layouts>
```

Use the `layout` attribute in the `page` node of a page configuration file to define a layout type for the page. The following example shows how to use the `3 columns` page layout type for the [Wish List Sharing]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Wishlist/view/frontend/layout/wishlist_index_share.xml#L8) page:

```xml
<?xml version="1.0"?>
<!--
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" layout="3columns" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <update handle="customer_account"/>
    <body>
        <referenceContainer name="content">
            <block class="Magento\Wishlist\Block\Customer\Sharing" name="wishlist.sharing" template="Magento_Wishlist::sharing.phtml" cacheable="false"/>
        </referenceContainer>
    </body>
</page>
```

![Wish List Sharing. 3 columns layout page type]({{ page.baseurl }}/frontend-dev-guide/images/wish-list-sharing.png)

{:.bs-callout-info}
By default, Magento provides 5 page layout types for the frontend (`empty`, `1column`, `2columns-left`, `2columns-right`, and `3columns`) and 3 page layout types for the backend (`admin-empty`, `admin-1column`, and `admin-2columns-left`).

## Page configuration {#layout-types-conf}

The page configuration adds content to the wireframe defined in a page layout file. A page configuration also contains page meta-information, and contents of the `<head>` section.

### Page configuration file conventional location {#layout-type-conf-loc}

Conventionally page configuration files must be located as follows:

*  Module page configurations: `<module_dir>/view/frontend/layout`
*  Theme page configurations: `<theme_dir>/<Namespace>_<Module>/layout`

### Page configuration structure and allowed layout instructions

The following table describes the instructions specific for page configuration files. For the descriptions of common layout instructions see the [Layout instructions]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html) article.

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
        <code>&lt;page&gt;&lt;/page&gt;</code>
      </td>
      <td colspan="1">
        <ul>
          <li>
            <code>layout = {layout}</code>
          </li>
          <li>
            <code>xsi:noNamespaceSchemaLocation ="{path_to_schema}"</code>
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
      <td colspan="1"></td>
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
          <li><code>&lt;font&gt;</code></li>
          <li><code>&lt;script&gt;</code></li>
          <li><code>&lt;remove&gt;</code></li>
          <li><code>&lt;attribute&gt;</code></li>
        </ul>
      </td>
      <td colspan="1"></td>
    </tr>
    <tr>
      <td colspan="1"><code>&lt;body&gt;&lt;/body&gt;</code></td>
      <td colspan="1">none</td>
      <td colspan="1">
        <ul>
          <li><code>&lt;block&gt;</code></li>
          <li><code>&lt;container&gt;</code></li>
          <li><code>&lt;move&gt;</code></li>
       <li><code>&lt;attribute&gt;</code></li>
          <li><code>&lt;referenceBlock&gt;</code></li>
          <li><code>&lt;referenceContainer&gt;</code></li>
          <li><code>&lt;action&gt;</code></li>
        </ul>
      </td>
      <td colspan="1"></td>
    </tr>
    <tr>
      <td colspan="1"><code>&lt;attribute&gt;</code></td>
      <td colspan="1">
        <ul>
          <li><code>name = {arbitrary_name}</code>
          </li>
          <li><code>value = {arbitrary_value}</code>
          </li>
        </ul>
      </td>
      <td colspan="1"></td>
      <td colspan="1">
        <p>Specified for <code>&lt;html&gt;</code>, rendered like following:</p>
        <p><code>&lt;html name="value'&gt;</code></p>
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
      <td colspan="1" ></td>
    </tr>
    <tr>
      <td colspan="1">
        <p><code>&lt;link&gt;</code></p>
      </td>
      <td colspan="1">
        <ul>
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
            <span><code>src</code></span>
          </li>
          <li>
            <span><code>src_type</code></span>
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
            <span><code>src</code></span>
          </li>
          <li>
            <span><code>src_type</code></span>
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
      <td colspan="1"></td>
    </tr>
    <tr>
      <td colspan="1">
        <p><code>&lt;script&gt;</code></p>
      </td>
      <td colspan="1">
        <ul>
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
            <span><code>src</code></span>
          </li>
          <li>
            <span><code>src_type</code></span>
          </li>
          <li>
            <span><code>type</code></span>
          </li>
        </ul>
      </td>
      <td colspan="1">
        <span>none</span>
      </td>
      <td colspan="1"></td>
    </tr>
  </tbody>
</table>

## Generic layout {#layout-types-gen}

Generic layouts define the contents and detailed structure inside the `<body>` section of the HTML page markup.

### Generic layout file conventional location {#layout-type-gen-loc}

Conventionally generic layout files must be located as follows:

*  Module generic layouts: `<module_dir>/view/frontend/layout`
*  Theme generic layouts: `<theme_dir>/<Namespace>_<Module>/layout`

### Generic layout structure and allowed layout instructions

The following table describes the instructions specific for generic layout files. For the descriptions of common layout instructions see the [Layout instructions]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html) article.

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
        <code> &lt;layout&gt;&lt;/layout&gt; </code>
      </td>
      <td colspan="1">
        <ul>
          <li>
            <code>
              xsi:noNamespaceSchemaLocation="{path_to_schema}"
</code>
          </li>
        </ul>
      </td>
      <td colspan="1">
        <ul>
          <li><code>&lt;container&gt;</code></li>
          <li><code>&lt;update&gt;</code></li>
        </ul>
      </td>
      <td>Mandatory root element.</td>
    </tr>
    <tr>
      <td>
        <code> &lt;update&gt; </code>
      </td>
      <td colspan="1">
        <ul>
          <li>
            <code>handle="{name_of_handle_to_include}"</code>
          </li>
        </ul>
      </td>
      <td colspan="1">
none
      </td>
<td></td>
    </tr>
    <tr>
      <td colspan="1"><code>&lt;container&gt;</code></td>
      <td colspan="1">
<ul>
<li><code>name="root"</code></li>
<li>For complete list of attributes, see <a href="{{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_cont">Layout instructions</a></li>
</ul>
</td>
      <td colspan="1">
        <ul>
          <li><code>&lt;block&gt;</code></li>
          <li><code>&lt;container&gt;</code></li>
          <li><code>&lt;referenceBlock&gt;</code></li>
          <li><code>&lt;referenceContainer&gt;</code></li>
        </ul>
      </td>
      <td colspan="1">Mandatory element</td>
    </tr>
  </tbody>
</table>

Sample generic layout:

```xml
<layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/layout_generic.xsd">
    <update handle="formkey"/>
    <update handle="adminhtml_googleshopping_types_block"/>
    <container name="root">
        <block class="Magento\Backend\Block\Widget\Grid\Container" name="googleshopping.types.container" template="Magento_Backend::widget/grid/container/empty.phtml"/>
    </container>
</layout>
```
