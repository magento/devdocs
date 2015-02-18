---
layout: default
group: fedg
subgroup: B_Layouts
title: Layout instructions
menu_title: Layout instructions
menu_order: 2
github_link: frontend-dev-guide/layouts/xml-instructions.md
---
<head>
	<style>
		table tr td, table tr th {border: 1px solid #ABABAB}
	</style>
</head>

<h2 id="fedg_layout_xml-instruc_overview">Overview</h2>


Changing layout files is one of the two possible ways to customize page layout in Magento (the second way is altering templates). 
To change the page wireframe, modify the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-page" target="_blank">page layout</a> files; all other customizations are performed in the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-conf" target="_blank">page configuration</a> or <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-gen" target="_blank">generic layout</a> files. 

Use layout instructions to:


*	move a page element to another parent element
*	add content
*	remove a page element
<p></p>

The basic set of instructions is the same for all types of layout files. This article describes these basic instructions; for details about how they are used in particular layout file type, please refer to the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html" target="_blank">Layout file types</a> article.


<h2 id="fedg_layout_xml-instruc_ex">Common layout instructions</h2>

Use the following layout instructions to customize your layout:

*	<a href="#fedg_layout_xml-instruc_ex_block"><code>&lt;block></code></a>
*	<a href="#fedg_layout_xml-instruc_ex_cont"><code>&lt;container></code></a>
*	<a href="#fedg_xml-instrux_before-after"><code>before</code> and <code>after</code> attributes</a>
*	<a href="#fedg_layout_xml-instruc_ex_act"><code>&lt;action></code></a>
*	<a href="#fedg_layout_xml-instruc_ex_rem"><code>&lt;remove></code></a>
*	<a href="#fedg_layout_xml-instruc_ex_ref"><code>&lt;referenceBlock></code> and <code>&lt;referenceContainer></code></a>
*	<a href="#fedg_layout_xml-instruc_ex_mv"><code>&lt;move></code></a>
*	<a href="#fedg_layout_xml-instruc_ex_upd"><code>&lt;update&gt;</code></a>
*	<a href="#argument"><code>&lt;argument&gt;</code></a>

<h3 id="fedg_layout_xml-instruc_ex_block">&lt;block></h3>

Defines a block.

<p><b>Details:</b> A block is a unit of page output that renders some distinctive content – a piece of information, a user interface element – anything visually tangible for the end-user.
Blocks employ templates to generate HTML. Examples of blocks include a category list, a mini cart, product tags, and product listing.</p>

<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Description</th>
         <th>Values</th>
         <th>Required?</th>
      </tr>
      <tr class="even">
         <td>class</td>
         <td>Name of a class that implements rendering of a particular block. An object of this class is responsible for actual rendering of block output.</td>
         <td>class name</td>
         <td>yes</td>
      </tr>
      <tr class="odd">
         <td>name</td>
         <td>Name that can be used to address the block to which this attribute is assigned. The name must be unique per generated page. If not specified, an automatic name will be assigned in the format <code>ANONYMOUS_<em>n</em></code></td>
         <td>0-9, A-Z, a-z, underscore (_), period (.), dash (-). Should start with a letter. Case-sensitive.</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td>before</td>
         <td>Used to position the block before an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">before and after attributes</a> for details.</td>
         <td>Possible values: element name or dash (-)</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td>after</td>
         <td>Used to position the block after an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">before and after attributes</a> for details.</td>
         <td>Possible values: element name or dash (-)</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td>template</td>
         <td>A template that represents the functionality of the block to which this attribute is assigned.</td>
         <td>template file name</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td>as</td>
         <td>An alias name that serves as identifier in the scope of the parent element.</td>
         <td>0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive.</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td>cacheable</td>
         <td>Defines whether a block element is cacheable. This can be used for development purposes and to make needed elements of the page dynamic.	</td>
         <td><code>true</code> or <code>false</code></td>
         <td>no</td>
      </tr>
   </tbody>
</table>

To pass parameters use the <a href="#argument">`<argument></argument>`</a> instruction. 

<h3 id="fedg_layout_xml-instruc_ex_cont">&lt;container></h3>
A structure without content that holds other layout elements such as blocks and containers.
<p><b>Details:</b> A container renders child elements during view output generation. It can be empty or it can contain an arbitrary set of <code>&lt;container></code> and <code>&lt;block></code> elements.
<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Description</th>
         <th>Values</th>
         <th>Required?</th>
      </tr>
      <tr class="even">
         <td>name</td>
         <td>A name that can be used to address the container in which this attribute is assigned. The name must be unique per generated page.</td>
         <td>A-Z, a-z, 0-9, underscore (_), period (.), dash (-). Should start with a letter. Case-sensitive.</td>
         <td>yes</td>
      </tr>
      <tr class="odd">
         <td>label</td>
         <td>An arbitrary name to display in the web browser.</td>
         <td>any</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td>before</td>
         <td>Used to position the container before an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">before and after attributes</a> for details.</td>
         <td>Possible values: element name or dash (-).</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td>after</td>
         <td>Used to position the container after an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">before and after attributes</a> for details.</td>
         <td>Possible values: element name or dash (-).</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td>as</td>
         <td>An alias name that serves as identifier in the scope of the parent element.</td>
         <td>0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive.</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td>output</td>
         <td>Defines whether to output the root element. If specified, the element will be added to output list. (If not specified, the parent element is responsible for rendering its children.)</td>
         <td>Any value except the obsolete <code>toHtml</code>. Recommended value is <code>1</code>.</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td>htmlTag</td>
         <td>Output parameter. If specified, the output is wrapped into specified HTML tag.</td>
         <td>Any valid HTML 5 tag.</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td>htmlId</td>
         <td>Output parameter. If specified, the value is added to the wrapper element. If there is no wrapper element, this attribute has no effect.</td>
         <td>Any valid HTML 5 <code>&lt;id></code> value.</td>
         <td>no</td>
      </tr>
      <tr class="even">
         <td>htmlClass</td>
         <td>Output parameter. If specified, the value is added to the wrapper element. If there is no wrapper element, this attribute has no effect.</td>
         <td>Any valid HTML 5  <code>&lt;class></code> value.</td>
         <td>no</td>
      </tr>
   </tbody>
</table>

Sample of usage in layout:
<pre>
...
&lt;container&nbsp;name=&quot;div.sidebar.additional&quot;&nbsp;htmlTag=&quot;div&quot;&nbsp;htmlClass=&quot;sidebar&nbsp;sidebar-additional&quot;&nbsp;after=&quot;div.sidebar.main&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;container&nbsp;name=&quot;sidebar.additional&quot;&nbsp;as=&quot;sidebar_additional&quot;&nbsp;label=&quot;Sidebar&nbsp;Additional&quot;/&gt;
&lt;/container&gt;
...
</pre>
This would add a new column to the page layout.


<h2 id="fedg_xml-instrux_before-after">before and after attributes</h2>
<p>To help you to position elements in a specific order suitable for design, SEO, usability, or other requirements, Magento software provides the <code>before</code> and <code>after</code> layout attributes.</p>
<p>These optional attributes can be used in layout XML files to control the order of elements in their common parent.

The following tables give a detailed description of the results you can get using the `before` and `after` attributes. The first table uses a block a as positioned element.

<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Value</th>
         <th>Description</th>
      </tr>
      <tr class="even">
         <td>before</td>
         <td>Dash (-)</td>
         <td>The block displays before all other elements in its parent node.</td>
      </tr>
      <tr class="odd">
         <td>before</td>
         <td>[element name]</td>
         <td>The block displays before the named element.</td>
      </tr>
      <tr class="even">
         <td>before</td>
         <td>empty value or [element name] is absent</td>
         <td>Use the value of <code>after</code>. If that value is empty or absent as well, the element is considered as non-positioned.</td>
      </tr>
      <tr class="even">
         <td>after</td>
         <td>Dash (-)</td>
         <td>The block displays after all other elements in its parent node.</td>
      </tr>
      <tr class="odd">
         <td>after</td>
         <td>[element name]</td>
         <td>The block displays after the named element.</td>
      </tr>
      <tr class="even">
         <td>after</td>
         <td>empty value or [element name] is absent</td>
         <td>Use the value of <code>before</code>. If that value is empty or absent as well, the block is considered as non-positioned.</td>
      </tr>
   </tbody>
</table>
<h3 id="examples">Examples</h3>
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

<h3 id="fedg_layout_xml-instruc_ex_act">&lt;action></h3>
Calls public methods on the block API.
<p><b>Details:</b> Used to set up the execution of a certain method of the block during block generation; the <code>&lt;action></code> node must be located in the scope of the <code>&lt;block></code> node.</p>
Example:
<pre>
&lt;block&nbsp;class=&quot;Magento\Module\Block\Class&quot;&nbsp;name=&quot;block&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;setText&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;text&quot;&nbsp;translate=&quot;true&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Text&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;setEnabled&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;enabled&quot;&nbsp;xsi:type=&quot;boolean&quot;&gt;true&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&lt;/block&gt;
</pre>


<p><code>&lt;action></code> child nodes are translated into block method arguments. Child nodes names are arbitrary. If there are two or more nodes with the same name under <code>&lt;action></code>, they are passed as one array.</p>
<p>In the previous example, the value of <code>&lt;arg1></code> is passed as the first argument and <code>&lt;arg2></code> values are passed as `array('one', 'two')`. The list of all available methods depends on the block implementation (for example, the public method of the block class).</p>
<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Description</th>
         <th>Values</th>
         <th>Required?</th>
      </tr>
      <tr class="even">
         <td>method</td>
         <td>Name of the public method of the block class this tag is located in that is called during block generation.</td>
         <td>block method name</td>
         <td>yes</td>
      </tr>
   </tbody>
</table>

To pass parameters, use the <a href="#argument"><code>&lt;argument&gt;&lt;/argument&gt;</code></a> instruction.

<h3 id="fedg_layout_xml-instruc_ex_rem">&lt;remove></h3>
Enables you to ignore some layout tags when generating a layout.
<p><b>Details:</b> Removal works even if the <code>&lt;remove></code> tag occurs in the layout before the referenced element because it is executed after all element declarations are processed. This means that regardless of how many elements with the referenced name are declared in layout XML, if there is a <code>&lt;remove></code> tag, the named elements are not generated.</p>
<p>However, it is possible to create a new element after the layout is generated using <code>Mage_Core_Model_Layout::createElement()</code> or <code>createBlock()</code>.</p>
<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Description</th>
         <th>Values</th>
         <th>Required?</th>
      </tr>
      <tr class="even">
         <td>name</td>
         <td>Name of a block to remove.</td>
         <td>block name</td>
         <td>yes</td>
      </tr>
   </tbody>
</table>
<p>If a <code>&lt;remove></code> tag has the <code>name</code> attribute <code>[specified_name]</code>, the following tags are ignored:</p>
<ul>
   <li><code>&lt;block class="Magento\Module\Block\Class" name="name.specified"/></code></li>
   <li><code>&lt;container name="name.specified"/></code></li>
   <li><code>&lt;referenceBlock name="name.specified">...</referenceBlock></code></li>
   <li><code>&lt;move element="name.specified" destination="name.destination"/></code></li>
   <li><code>&lt;move element="name.element" destination="name.specified"/></code></li>
</ul>
<p><b>Example:</b></p>

Removing the `report.bugs` block:
<pre>
&lt;remove&nbsp;name=&quot;report.bugs&quot;/&gt;
</pre>

<h3 id="fedg_layout_xml-instruc_ex_ref">&lt;referenceBlock> and &lt;referenceContainer></h3>
<p>Updates in <code>&lt;referenceBlock></code> and <code>&lt;referenceContainer></code> are applied to the corresponding <code>&lt;block></code> or <code>&lt;container></code>.</p>
<p>For example, if you make a reference by <code>&lt;referenceBlock name="right"></code>, you're targeting the block <code>&lt;block name="right"></code>.</p>

To pass parameters to a block use the <a href="#argument">`<argument></argument>`</a> instruction.

<h3 id="fedg_layout_xml-instruc_ex_mv">&lt;move></h3>
Sets the declared block or container element as a child of another element in the specified order.
<p><b>Example:</b></p>
<pre>&lt;move element="name.of.an.element" destination="name.of.destination.element" as="new_alias" after="name.of.element.after" before="name.of.element.before"/></pre>
<p>Keep the following information in mind when using <code>&lt;move></code></p>
<ul>
   <li><code>&lt;move></code> is skipped if the element to be moved is not defined.</li>
   <li>If the <code>as</code> attribute is not defined, the current value of the element alias is used. If that is not possible, the value of the <code>name</code> attribute is used instead.</li>
   <li>During layout generation, the <code>&lt;move></code> instruction is processed before the <code>&lt;remove></code> instruction. This means if any elements are moved to the element scheduled for removal, they will be removed as well.</li>
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
         <td>destination</td>
         <td>Name of the target parent element.</td>
         <td>element name</td>
         <td>yes</td>
      </tr>
      <tr class="even">
         <td>as</td>
         <td>Alias name for the element in the new location.</td>
         <td>0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive.</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td>after | before</td>
         <td>Specifies the element's position relative to siblings. Use dash (-) to position the block before or after all other siblings of its level of nesting. If the attribute is omitted, the element is placed after all siblings.</td>
         <td>element name</td>
         <td>no</td>
      </tr>
   </tbody>
</table>

<h3 id="fedg_layout_xml-instruc_ex_upd">&lt;update&gt;</h3>

Includes a certain layout file.

Used as follows:
<pre>
&lt;update&nbsp;handle=&quot;{name_of_handle_to_include}&quot;/&gt;
</pre>
The specified <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html#handle" target="_blank">handle</a> is "included" and executed recursively.

<h3 id="argument">&lt;argument&gt;</h3>
Used to pass an argument.

<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Description</th>
         <th>Values</th>
         <th>Required?</th>
      </tr>
      <tr class="even">
         <td>name</td>
         <td>Argument name.</td>
         <td>unique</td>
         <td>yes</td>
      </tr>
      <tr class="odd">
         <td>xsi:type</td>
         <td>Argument type.</td>
         <td>string|boolean|object|number|null|array</td>
         <td>yes</td>
      </tr>
      <tr class="even">
         <td>translate</td>
         <td></td>
         <td>true|false</td>
         <td>no</td>
      </tr>

   </tbody>
</table>

To pass multiple arguments use the following construction:
<pre>
&lt;arguments&gt;
	&lt;argument&gt;&lt;/argument&gt;
	&lt;argument&gt;&lt;/argument&gt;
	...
&lt;/arguments&gt;
</pre>

To pass an argument that is an array use the following construction:
<pre>
&lt;argument&gt;
	&lt;item&gt;&lt;/item&gt;
	&lt;item&gt;&lt;/item&gt;
	...
&lt;/argument&gt;
</pre>

<p id="getter">Arguments values set in a layout file can be accessed in <a href="{{site.gdeurl}}frontend-dev-guide/templates/template-overview.html" target="_blank">templates</a> using the <code>get{ArgumentName}()</code> and <code>has{ArgumentName}()</code> methods. The latter returns a boolean difining whether there's any value set. 
<code>{ArgumentName}</code> is obtained from the <code>name</code> attribute the following way: for getting the value of <code>&lt;argument name="some_string"&gt;</code> the method name is <code>getSomeString()</code>.

Example:
Setting a value of `css_class` in the <code><a href="{{site.mage2000url}}app/code/Magento/Theme/view/frontend/layout/default.xml" target="_blank">app/code/Magento/Theme/view/frontend/layout/default.xml</a></code> layout file:
<pre>
...
&lt;arguments&gt;
    &lt;argument name=&quot;css_class&quot; xsi:type=&quot;string&quot;&gt;header links&lt;/argument&gt;
&lt;/arguments&gt;
...
</pre>

Using the value of `css_class` in <code><a href="{{site.mage2000url}}app/code/Magento/Theme/view/frontend/templates/html/title.phtml" target="_blank">app/code/Magento/Theme/view/frontend/templates/html/title.phtml</a></code>:
<pre>
...
$cssClass&nbsp;=&nbsp;$this-&gt;getCssClass()&nbsp;?&nbsp;'&nbsp;'&nbsp;.&nbsp;$this-&gt;getCssClass()&nbsp;:&nbsp;'';
...
</pre>
