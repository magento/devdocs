---
group: fedg
title: Layout instructions
version: 2.1
functional_areas:
  - Frontend
---

## What's in this topic {#fedg_layout_xml-instruc_overview}

There are two possible ways to customize page layout in Magento:
* Changing {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} files 
* Altering templates

To change the page wireframe, modify the <a href="{{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html#layout-types-page" target="_blank">page layout</a> files; all other customizations are performed in the <a href="{{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html#layout-types-conf" target="_blank">page configuration</a> or <a href="{{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html#layout-types-gen" target="_blank">generic layout</a> files. 

Use these {% glossarytooltip bcbc9bf8-3251-4b3c-a802-07417770af3b %}layout instructions{% endglossarytooltip %} to:
*  Move a page element to another parent element.
*  Add content.
*  Remove a page element.

The basic set of instructions is the same for all types of layout files. This topic describes these basic instructions. For details about how they are used in a particular layout file type, please refer to the <a href="{{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html" target="_blank">Layout file types</a> topic.

## Common layout instructions {#fedg_layout_xml-instruc_ex}

Use the following layout instructions to customize your layout:

*  <a href="#fedg_layout_xml-instruc_ex_block"><code>&lt;block&gt;</code></a>
*  <a href="#fedg_layout_xml-instruc_ex_cont"><code>&lt;container&gt;</code></a>
*  <a href="#fedg_xml-instrux_before-after"><code>before</code> and <code>after</code> attributes</a>
*  <a href="#fedg_layout_xml-instruc_ex_act"><code>&lt;action&gt;</code></a>
*  <a href="#fedg_layout_xml-instruc_ex_ref"><code>&lt;referenceBlock&gt;</code> and <code>&lt;referenceContainer&gt;</code></a>
*  <a href="#fedg_layout_xml-instruc_ex_mv"><code>&lt;move&gt;</code></a>
*  <a href="#fedg_layout_xml-instruc_ex_rmv"><code>&lt;remove&gt;</code></a>
*  <a href="#fedg_layout_xml-instruc_ex_upd"><code>&lt;update&gt;</code></a>
*  <a href="#argument"><code>&lt;argument&gt;</code></a>
*  <a href="#arguments"><code>&lt;arguments&gt;</code></a>

### &lt;block&gt; {#fedg_layout_xml-instruc_ex_block}

Defines a block.

<p><b>Details:</b> A block is a unit of page output that renders some distinctive content (anything visually tangible for the end-user), such as a piece of information or a user interface element.

Blocks employ templates to generate {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %}. Examples of blocks include a {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} list, a mini cart, product tags, and product listing.</p>

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

To pass parameters use the <a href="#argument">`<argument></argument>`</a> instruction. 

### &lt;container&gt; {#fedg_layout_xml-instruc_ex_cont}
A structure without content that holds other layout elements such as blocks and containers.
<p><b>Details:</b> A container renders child elements during view output generation. It can be empty or it can contain an arbitrary set of <code>&lt;container&gt;</code> and <code>&lt;block&gt;</code> elements.
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
         <td>Any valid HTML 5 <code>&lt;id&gt;</code> value.</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td><code>htmlClass</code></td>
         <td>Output parameter. If specified, the value is added to the wrapper element. If there is no wrapper element, this attribute has no effect.</td>
         <td>Any valid HTML 5  <code>&lt;class&gt;</code> value.</td>
         <td>no</td>
      </tr>
   </tbody>
</table>

Sample of usage in layout:
{%highlight xml%}
...
<container name="div.sidebar.additional" htmlTag="div" htmlClass="sidebar sidebar-additional" after="div.sidebar.main">
    <container name="sidebar.additional" as="sidebar_additional" label="Sidebar Additional"/>
</container>
...
{%endhighlight xml%}

This would add a new column to the page layout.

### before and after attributes {#fedg_xml-instrux_before-after}

<p>To help you to position elements in a specific order suitable for design, SEO, usability, or other requirements, Magento software provides the <code>before</code> and <code>after</code> layout attributes.</p>
<p>These optional attributes can be used in layout {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} files to control the order of elements in their common parent.

The following tables give a detailed description of the results you can get using the <code>before</code> and <code>after</code> attributes. The first table uses a block a as positioned element.

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

### Examples {#examples}

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

### fedg_layout_xml-instruc_ex_act

<div class="bs-callout bs-callout-warning" id="info">
<span class="glyphicon-class">
 <p>The <code>&lt;action&gt;</code> instruction is deprecated. If the method implementation allows, use the <a href="#argument"><code>&lt;argument&gt;</code></a> for <a href="#fedg_layout_xml-instruc_ex_block"><code>&lt;block&gt;</code></a> or <a href="#fedg_layout_xml-instruc_ex_ref"><code>&lt;referenceBlock&gt;</code></a> to access block public {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %}.</p></span>
</div>

Calls public methods on the block API.

<p><b>Details:</b> Used to set up the execution of a certain method of the block during block generation; the <code>&lt;action&gt;</code> node must be located in the scope of the <code>&lt;block&gt;</code> node.</p>


Example:

{%highlight xml%}
<block class="Magento\Module\Block\Class" name="block">
    <action method="setText">
        <argument name="text" translate="true" xsi:type="string">Text</argument>
    </action>
    <action method="setEnabled">
        <argument name="enabled" xsi:type="boolean">true</argument>
    </action>
</block>
{%endhighlight xml%}


<p><code>&lt;action&gt;</code> child nodes are translated into block method arguments. Child nodes names are arbitrary. If there are two or more nodes with the same name under <code>&lt;action&gt;</code>, they are passed as one array.</p>

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

To pass parameters, use the <a href="#argument"><code>&lt;argument&gt;&lt;/argument&gt;</code></a> instruction.

### fedg_layout_xml-instruc_ex_ref

<p>Updates in <code>&lt;referenceBlock&gt;</code> and <code>&lt;referenceContainer&gt;</code> are applied to the corresponding <code>&lt;block&gt;</code> or <code>&lt;container&gt;</code>.</p>
<p>For example, if you make a reference by <code>&lt;referenceBlock name="right"&gt;</code>, you're targeting the block <code>&lt;block name="right"&gt;</code>.</p>

To pass parameters to a block use the <a href="#argument"><code>&lt;argument&gt;&lt;/argument&gt;</code></a> instruction.

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

<ul>
<li>The <code>remove</code> attribute is optional and its default value is <code>false</code>.</li>

    This implementation allows you to remove a block or container in your layout by setting the remove attribute value to <code>true</code>, or to cancel the removal of a block or container by setting the value to <code>false</code>.
     
    Example: 
    
    <pre>&lt;referenceBlock name="block.name" remove="true" /&gt;</pre>

<li>The <code>display</code> attribute is optional and its default value is true.</li>

    You are always able to overwrite this value in your layout.
    In situation when remove value is true, the display attribute is ignored.
     
    Example: 
    
    <pre>&lt;referenceContainer name="container.name" display="false" /&gt;</pre>
</ul>  

### fedg_layout_xml-instruc_ex_mv

Sets the declared block or container element as a child of another element in the specified order.
<p><b>Example:</b></p>

{%highlight xml%}
<move element="name.of.an.element" destination="name.of.destination.element" as="new_alias" after="name.of.element.after" before="name.of.element.before"/>
{%endhighlight xml%}


<ul>
   <li><code>&lt;move&gt;</code> is skipped if the element to be moved is not defined.</li>
   <li>If the <code>as</code> attribute is not defined, the current value of the element alias is used. If that is not possible, the value of the <code>name</code> attribute is used instead.</li>
  <li>During layout generation, the <code>&lt;move&gt;</code>
  instruction is processed before the removal (set using the <code>
    remove</code> attribute). This means if any elements are moved
    to the element scheduled for removal, they will be removed as
    well.
  </li>
</ul>
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

### fedg_layout_xml-instruc_ex_rmv

`<remove>` is used only to remove the static resources linked in a page <code>&lt;head&gt;</code> section.
For removing blocks or containers, use the <code>&lt;remove&gt;</code> attribute for <a href="#fedg_layout_xml-instruc_ex_ref"><code>&lt;referenceBlock&gt;</code> and <code>&lt;referenceContainer&gt;</code></a>.

Example of usage:

{%highlight xml%}
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
{%endhighlight xml%}

### fedg_layout_xml-instruc_ex_upd

Includes a certain layout file.

Used as follows:

{%highlight xml%}
<update handle="{name_of_handle_to_include}"/>
{%endhighlight xml%}

The specified <a href="{{ page.baseurl }}/frontend-dev-guide/layouts/layout-overview.html#handle" target="_blank">handle</a> is "included" and executed recursively.

### argument

Used to pass an argument. Must be always enclosed in<a href="#arguments"><code>&lt;arguments&gt;</code></a>.
 
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
         <td></td>
         <td>true|false</td>
         <td>no</td>
      </tr>

   </tbody>
</table>

To pass multiple arguments use the following construction:
{%highlight xml%}
<arguments>
   <argument></argument>
   <argument></argument>
   ...
</arguments>
{%endhighlight xml%}

To pass an argument that is an array use the following construction:

{%highlight xml%}
<argument>
   <item></item>
   <item></item>
   ...
</argument>
{%endhighlight xml%}

<p id="getter">Arguments values set in a layout file can be accessed in <a href="{{ page.baseurl }}/frontend-dev-guide/templates/template-overview.html" target="_blank">templates</a> using the <code>get{ArgumentName}()</code> and <code>has{ArgumentName}()</code> methods. The latter returns a boolean defining whether there's any value set. 
<code>{ArgumentName}</code> is obtained from the <code>name</code> attribute the following way: for getting the value of <code>&lt;argument name="some_string"&gt;</code> the method name is <code>getSomeString()</code>.

Example:
Setting a value of <code>css_class</code> in the <code><a href="{{ site.mage2000url }}app/code/Magento/Theme/view/frontend/layout/default.xml" target="_blank">app/code/Magento/Theme/view/frontend/layout/default.xml</a></code> layout file:

{%highlight xml%}
...
<arguments>
    <argument name="css_class" xsi:type="string">header links</argument>
</arguments>
...
{%endhighlight xml%}


Using the value of <code>css_class</code> in <code><a href="{{ site.mage2000url }}app/code/Magento/Theme/view/frontend/templates/html/title.phtml" target="_blank">app/code/Magento/Theme/view/frontend/templates/html/title.phtml</a></code>:

{%highlight php%}
...
$cssClass = $this->hasCssClass() ? ' ' . $this->getCssClass() : '';
...
{%endhighlight %}

### arguments

<code>&lt;arguments&gt;</code> is a required container for <code>&lt;argument&gt;</code>. It does not have its own attributes.

Example:

{%highlight xml%}
...
<arguments>
    <argument name="css_class" xsi:type="string">header links</argument>
</arguments>
...
{%endhighlight xml%}
