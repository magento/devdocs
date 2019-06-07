---
group: frontend-developer-guide
title: Layout instructions
functional_areas:
  - Frontend
---

## What's in this topic {#fedg_layout_xml-instruc_overview}

There are two possible ways to customize page layout in Magento:
* Changing [layout](https://glossary.magento.com/layout) files 
* Altering templates

To change the page wireframe, modify the [page layout]({{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html#layout-types-page) files; all other customizations are performed in the [page configuration]({{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html#layout-types-conf) or [generic layout]({{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html#layout-types-gen) files. 

## Manage layouts

To make layout changes available on every page, modify the `default.xml` file.
For example, layout changes added to `app/code/Vendor/Module/view/frontend/layout/default.xml` are loaded on all pages.
To add layout changes to a specific page, use a layout file that corresponds to the page's path. 
For example, changes to the `app/code/Vendor/Module/view/frontend/layout/catalog_product_view.xml` file are loaded on the product details page.

Use these [layout instructions](https://glossary.magento.com/layout-instructions) to:
*  Move a page element to another parent element.
*  Add content.
*  Remove a page element.

The basic set of instructions is the same for all types of layout files. This topic describes these basic instructions. For details about how they are used in a particular layout file type, please refer to the [Layout file types]({{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html) topic.

## Common layout instructions {#fedg_layout_xml-instruc_ex}

Use the following layout instructions to customize your layout:

* [`<block>`](#fedg_layout_xml-instruc_ex_block) 
* [`<container>`](#fedg_layout_xml-instruc_ex_cont) 
* [`before` and `after` attributes](#fedg_xml-instrux_before-after)
* [`<action>`](#fedg_layout_xml-instruc_ex_act)
* [`<referenceBlock>` and `<referenceContainer>`](#fedg_layout_xml-instruc_ex_ref)
* [`<move>`](#fedg_layout_xml-instruc_ex_mv)
* [`<remove>`](#fedg_layout_xml-instruc_ex_rmv)
* [`<update>`](#fedg_layout_xml-instruc_ex_upd)
* [`<argument>`](#argument)
* [`<block vs. container>`](#block_vs_container)

### block {#fedg_layout_xml-instruc_ex_block}

Defines a block.

**Details:** A block is a unit of page output that renders some distinctive content (anything visually tangible for the end-user), such as a piece of information or a user interface element.

Blocks are a foundational building unit for layouts in Magento. They are the link between a PHP block class (which contains logic) and a template (which renders content). Blocks can have children and grandchildren (and so on). Information can be passed from layout XML files to blocks using the `<arguments/>` child node. 

Blocks employ templates to generate HTML. Examples of blocks include a [category](https://glossary.magento.com/category) list, a mini cart, product tags, and product listing.</p>

<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Description</th>
         <th>Values</th>
         <th>Required?</th>
      </tr>
      <tr class="even">
         <td><code>class</code></td>
         <td>Name of a class that implements rendering of a particular block. An object of this class is responsible for actual rendering of block output.</td>
         <td>class name</td>
         <td>yes</td>
      </tr>
      <tr class="odd">
         <td><code>name</code></td>
         <td>Name that can be used to address the block to which this attribute is assigned. The name must be unique per generated page. If not specified, an automatic name will be assigned in the format <code>ANONYMOUS_<em>n</em></code></td>
         <td>0-9, A-Z, a-z, underscore (_), period (.), dash (-). Should start with a letter. Case-sensitive.</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td><code>before</code></td>
         <td><p>Used to position the block</p> before an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">before and after attributes</a> for details.</td>
         <td>Possible values: element name or dash (-)</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td><code>after</code></td>
         <td>Used to position the block after an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">before and after attributes</a> for details.</td>
         <td>Possible values: element name or dash (-)</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td><code>template</code></td>
         <td>A template that represents the functionality of the block to which this attribute is assigned.</td>
         <td>template file name</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td><code>as</code></td>
         <td>An alias name that serves as identifier in the scope of the parent element.</td>
         <td>0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive.</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td><code>cacheable</code></td>
         <td>Defines whether a block element is cacheable. This can be used for development purposes and to make needed elements of the page dynamic. </td>
         <td><code>true</code> or <code>false</code></td>
         <td>no</td>
      </tr>
   </tbody>
</table>

To pass parameters use the [`<argument></argument>`](#argument) instruction. 

### container {#fedg_layout_xml-instruc_ex_cont}
A structure without content that holds other layout elements such as blocks and containers.
**Details:** A container renders child elements during view output generation. It can be empty or it can contain an arbitrary set of `<container>` and `<block>` elements.
<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Description</th>
         <th>Values</th>
         <th>Required?</th>
      </tr>
      <tr class="even">
         <td><code>name</code></td>
         <td>A name that can be used to address the container in which this attribute is assigned. The name must be unique per generated page.</td>
         <td>A-Z, a-z, 0-9, underscore (_), period (.), dash (-). Should start with a letter. Case-sensitive.</td>
         <td>yes</td>
      </tr>
      <tr class="odd">
         <td><code>label</code></td>
         <td>An arbitrary name to display in the web browser.</td>
         <td>any</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td><code>before</code></td>
         <td>Used to position the container before an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">before and after attributes</a> for details.</td>
         <td>Possible values: element name or dash (-).</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td><code>after</code></td>
         <td>Used to position the container after an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">before and after attributes</a> for details.</td>
         <td>Possible values: element name or dash (-).</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td><code>as</code></td>
         <td>An alias name that serves as identifier in the scope of the parent element.</td>
         <td>0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive.</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td><code>output</code></td>
         <td>Defines whether to output the root element. If specified, the element will be added to output list. (If not specified, the parent element is responsible for rendering its children.)</td>
         <td>Any value except the obsolete <code>toHtml</code>. Recommended value is <code>1</code>.</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td><code>htmlTag</code></td>
         <td>Output parameter. If specified, the output is wrapped into specified HTML tag.</td>
         <td>Any valid HTML 5 tag.</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td><code>htmlId</code></td>
         <td>Output parameter. If specified, the value is added to the wrapper element. If there is no wrapper element, this attribute has no effect.</td>
         <td>Any valid HTML 5 <code>\<id\></code> value.</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td><code>htmlClass</code></td>
         <td>Output parameter. If specified, the value is added to the wrapper element. If there is no wrapper element, this attribute has no effect.</td>
         <td>Any valid HTML 5  <code>\<class\></code> value.</td>
         <td>no</td>
      </tr>
   </tbody>
</table>

Sample of usage in layout:
```xml
<container name="div.sidebar.additional" htmlTag="div" htmlClass="sidebar sidebar-additional" after="div.sidebar.main">
    <container name="sidebar.additional" as="sidebar_additional" label="Sidebar Additional"/>
</container>
```

This would add a new column to the page layout.

### block vs. container {#block_vs_container}

* Blocks represents the end of the chain in rendering HTML for Magento.
* Containers contain blocks and can wrap them in an HTML tag.
* Containers do not render any output if there are no children assigned to them.

### before and after attributes {#fedg_xml-instrux_before-after}

To help you to position elements in a specific order suitable for design, SEO, usability, or other requirements, Magento software provides the `before` and `after` layout attributes.

These optional attributes can be used in layout XML files to control the order of elements in their common parent.

The following tables give a detailed description of the results you can get using the `before` and `after` attributes. The first table uses a block as a positioned element.

<table>
   <tbody>
      <tr>
         <th><code>Attribute</code></th>
         <th>Value</th>
         <th>Description</th>
      </tr>
      <tr class="even">
         <td><code>before</code></td>
         <td>Dash (-)</td>
         <td>The block displays before all other elements in its parent node.</td>
      </tr>
      <tr class="odd">
         <td><code>before</code></td>
         <td>[element name]</td>
         <td>The block displays before the named element.</td>
      </tr>
      <tr class="even">
         <td><code>before</code></td>
         <td>empty value or [element name] is absent</td>
         <td>Use the value of <code>after</code>. If that value is empty or absent as well, the element is considered as non-positioned.</td>
      </tr>
      <tr class="even">
         <td><code>after</code></td>
         <td>Dash (-)</td>
         <td>The block displays after all other elements in its parent node.</td>
      </tr>
      <tr class="odd">
         <td><code>after</code></td>
         <td>[element name]</td>
         <td>The block displays after the named element.</td>
      </tr>
      <tr class="even">
         <td><code>after</code></td>
         <td>empty value or [element name] is absent</td>
         <td>Use the value of <code>before</code>. If that value is empty or absent as well, the block is considered as non-positioned.</td>
      </tr>
   </tbody>
</table>

#### Examples {#examples}

<table>
   <tbody>
      <tr>
         <th>Situation</th>
         <th>Result</th>
      </tr>
      <tr class="even">
         <td>Both <code>before</code> and <code>after</code> attributes are present</td>
         <td><code>after</code> takes precedence.</td>
      </tr>
      <tr class="odd">
         <td>Both <code>before</code> and <code>after</code> attributes are absent or empty</td>
         <td>The element is considered as non-positioned. All other elements are positioned at their specified locations. The missing element displays at a random position that doesn't violate requirements for the positioned elements.</td>
      </tr>
      <tr class="even">
         <td>Several elements have <code>before</code> or <code>after</code> set to dash (-)</td>
         <td>All elements display at the top (or bottom, in case of the after attribute), but the ordering of group of these elements is undefined.</td>
      </tr>
      <tr class="odd">
         <td>The <code>before</code> or <code>after</code> attribute's value refers to an element that is not located in the parent node of the element being defined.</td>
         <td>The element displays at a random location that doesn't violate requirements for the correctly positioned elements.</td>
      </tr>
   </tbody>
</table>

### action {#fedg_layout_xml-instruc_ex_act}

{:.bs-callout .bs-callout-info}
The `<action>` instruction is deprecated. If the method implementation allows, use the [`<argument>`](#argument) for [`<block>`](#fedg_layout_xml-instruc_ex_block) or [`<referenceBlock>`](#fedg_layout_xml-instruc_ex_ref) to access block public API.

Calls public methods on the block API.

**Details:** Used to set up the execution of a certain method of the block during block generation; the `<action>` node must be located in the scope of the `<block>` node.

Example:

```xml
<block class="Magento\Module\Block\Class" name="block">
    <action method="setText">
        <argument name="text" translate="true" xsi:type="string">Text</argument>
    </action>
    <action method="setEnabled">
        <argument name="enabled" xsi:type="boolean">true</argument>
    </action>
</block>
```

`<action>` child nodes are translated into block method arguments. Child nodes names are arbitrary. If there are two or more nodes with the same name under `<action>`, they are passed as one array.

<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Description</th>
         <th>Values</th>
         <th>Required?</th>
      </tr>
      <tr class="even">
         <td><code>method</code></td>
         <td>Name of the public method of the block class this tag is located in that is called during block generation.</td>
         <td>block method name</td>
         <td>yes</td>
      </tr>
   </tbody>
</table>

To pass parameters, use the [`</argument>`](#argument) instruction.

### referenceBlock and referenceContainer {#fedg_layout_xml-instruc_ex_ref}

Updates in `<referenceBlock>` and `<referenceContainer>` are applied to the corresponding `<block>` or `<container>`.
For example, if you make a reference by `<referenceBlock name="right">`, you're targeting the block `<block name="right">`.

To pass parameters to a block use the [`</argument>`](#argument) instruction.

<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Description</th>
         <th>Values</th>
         <th>Required?</th>
      </tr>
      <tr class="even">
         <td><code>remove</code></td>
         <td>Allows to remove or cancel the removal of the element. When a container is removed, its child elements are removed as well.</td>
         <td>true/false</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td><code>display</code></td>
         <td>Allows you to disable rendering of specific block or container with all its children (both set directly and by reference). The block's/container's and its children' respective PHP objects are still generated and available for manipulation.</td>
         <td>true/false</td>
         <td>no</td>
      </tr>
   </tbody>
</table>

- The `remove` attribute is optional and its default value is `false`.

    This implementation allows you to remove a block or container in your layout by setting the remove attribute value to `true`, or to cancel the removal of a block or container by setting the value to `false`.
     
    Example: 
    `<referenceBlock name="block.name" remove="true" />`

- The `display` attribute is optional and its default value is true.

    You are always able to overwrite this value in your layout.
    In situation when remove value is true, the display attribute is ignored.
     
    Example: 
    `<referenceContainer name="container.name" display="false" />` 

### move {#fedg_layout_xml-instruc_ex_mv}

Sets the declared block or container element as a child of another element in the specified order.
**Example:**

```xml
<move element="name.of.an.element" destination="name.of.destination.element" as="new_alias" after="name.of.element.after" before="name.of.element.before"/>
```

- `<move>` is skipped if the element to be moved is not defined.
- If the `as` attribute is not defined, the current value of the element alias is used. If that is not possible, the value of the `name` attribute is used instead.
- During layout generation, the `<move>` instruction is processed before the removal (set using the `remove` attribute). This means if any elements are moved to the element scheduled for removal, they will be removed as well.

<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Description</th>
         <th>Values</th>
         <th>Required?</th>
      </tr>
      <tr class="even">
         <td>element</td>
         <td>Name of the element to move.</td>
         <td>element name</td>
         <td>yes</td>
      </tr>
      <tr class="odd">
         <td><code>destination</code></td>
         <td>Name of the target parent element.</td>
         <td>element name</td>
         <td>yes</td>
      </tr>
      <tr class="even">
         <td><code>as</code></td>
         <td>Alias name for the element in the new location.</td>
         <td>0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive.</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td><code>after | before</code></td>
         <td>Specifies the element's position relative to siblings. Use dash (-) to position the block before or after all other siblings of its level of nesting. If the attribute is omitted, the element is placed after all siblings.</td>
         <td>element name</td>
         <td>no</td>
      </tr>
   </tbody>
</table>

### remove {#fedg_layout_xml-instruc_ex_rmv}

`<remove>` is used only to remove the static resources linked in a page `<head>` section.
For removing blocks or containers, use the `remove` attribute for [<referenceBlock>` and `<referenceContainer>`](#fedg_layout_xml-instruc_ex_ref).

Example of usage:

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
   <head>
        <!-- Remove local resources -->
        <remove src="css/styles-m.css" />
        <remove src="my-js.js"/>
        <remove src="Magento_Catalog::js/compare.js" />
								
        <!-- Remove external resources -->
        <remove src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css"/>
        <remove src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"/>
        <remove src="http://fonts.googleapis.com/css?family=Montserrat" /> 
   </head>
</page>
```

### update {#fedg_layout_xml-instruc_ex_upd}

Includes a certain layout file.

Used as follows:

```xml
<update handle="{name_of_handle_to_include}"/>
```

The specified [handle]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-overview.html#layout-over-terms) is "included" and executed recursively.

### argument {#argument}

Used to pass an argument. Must be always enclosed in [`<arguments>`](#arguments).
 
<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Description</th>
         <th>Values</th>
         <th>Required?</th>
      </tr>
      <tr class="even">
         <td><code>name</code></td>
         <td>Argument name.</td>
         <td>unique</td>
         <td>yes</td>
      </tr>
      <tr class="odd">
         <td><code>xsi:type</code></td>
         <td>Argument type.</td>
         <td>string|boolean|object|number|null|array</td>
         <td>yes</td>
      </tr>
      <tr class="even">
         <td><code>translate</code></td>
         <td />
         <td>true|false</td>
         <td>no</td>
      </tr>

   </tbody>
</table>

To pass multiple arguments use the following construction:
```xml
<arguments>
   <argument></argument>
   <argument></argument>
   ...
</arguments>
```

To pass an argument that is an array use the following construction:

```xml
<argument>
   <item></item>
   <item></item>
   ...
</argument>
```

Arguments values set in a layout file can be accessed in [templates]({{ page.baseurl }}/frontend-dev-guide/templates/template-overview.html) using the `get{ArgumentName}()` and `has{ArgumentName}()` methods. The latter returns a boolean defining whether there's any value set. 

`{ArgumentName}` is obtained from the `name` attribute the following way: for getting the value of `<argument name="some_string">` the method name is `getSomeString()`.

Example:
Setting a value of `css_class` in the [app/code/Magento/Theme/view/frontend/layout/default.xml] layout file:

```xml
<arguments>
    <argument name="css_class" xsi:type="string">header links</argument>
</arguments>
```

Using the value of `css_class` in [app/code/Magento/Theme/view/frontend/templates/html/title.phtml]

```php
$cssClass = $this->hasCssClass() ? ' ' . $this->getCssClass() : '';
```

### arguments {#arguments}

`<arguments>` is a required container for `<argument>`. It does not have its own attributes.

Example:

```xml
<arguments>
    <argument name="css_class" xsi:type="string">header links</argument>
</arguments>
```

[app/code/Magento/Theme/view/frontend/layout/default.xml]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/view/frontend/layout/default.xml
[app/code/Magento/Theme/view/frontend/templates/html/title.phtml]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/view/frontend/templates/html/title.phtml
