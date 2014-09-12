---
layout: howtom2devgde_chapters_fedg
title: Using XML Instructions In Your Theme
---
 
<h1 id="fedg_layout_xml-instruct">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/layout/layout-xml-instrux.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_layout_xml-instruc_overview">Overview of XML Instructions</h2>

You use XML instructions to manipulate page elements that are represented as containers and blocks. By referencing these containers and blocks, you can:

*	Move a page element to another parent element 
*	Remove a page element
*	Set page properties 
*	Change some properties of an existing container or block by referencing it

The layout of a page is defined by a set of XML instructions that contain handles with attributes. These attributes set a design abstraction that is used by other XML files; for example, `default.xml` and `page_one_column.xml`, which in turn describe the abstraction for page the layout.

The page layout abstraction includes the names of all containers, blocks, and columns that will be rendered on the page. To add a block with best selling products, for example, you must add a block of this class to a specific reference container. 

In the example presented in this topic, these will be referred to as `< referenceContainer name = "content">`. The design abstraction is aware of this block in the content of the page, so after we refresh the page; namely, the block that displays best selling products. This is also true for any custom HTML block that you want to add a page.

<h2 id="fedg_layout_xml-instruc_ex">XML Instruction Examples</h2>

This section discusses the following common XML instructions you can use to customize your layout:

*	<a href="#fedg_layout_xml-instruc_ex_block">&lt;block></a>
*	<a href="#fedg_layout_xml-instruc_ex_cont">&lt;container></a>
*	<a href="#fedg_layout_xml-instruc_ex_act">&lt;action></a>
*	<a href="#fedg_layout_xml-instruc_ex_rem">&lt;remove></a>
*	<a href="#fedg_layout_xml-instruc_ex_ref">&lt;referenceBlock> and &lt;referenceContainer></a>
*	<a href="#fedg_layout_xml-instruc_ex_mv">&lt;move></a>

<h3 id="fedg_layout_xml-instruc_ex_block">&lt;block></h3>

A <a href="{{ site.gdeurl }}m2fedg/layout/containers-blocks.html">block</a> represents each feature on a page and employs templates to generate the HTML to inserted into its parent structural block. Examples of blocks include a category list, a mini cart, product tags, and product listing.

The `<block>` instruction defines a block. Attributes:

<table>
	<tbody>
		<tr class="table-headings">
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
		<td>Used to position the block before an element whose name is specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">Using the before And after Attributes</a> for details.</td>
		<td>Possible values: element name or dash (-)</td>
		<td>no</td>
	</tr>
	<tr class="odd">
		<td>after</td>
		<td>Used to position the block after an element with the name specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">Using the before And after Attributes</a> for details.</td>
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
	<tr class="even">
		<td>output</td>
		<td>Defines whether to output the root element. If specified, the element will be added to output list. (If not specified, the parent element is responsible for rendering its children.)</td>
		<td>Any value except the obsolete <code>toHtml</code>. Recommended value is <code>1</code>.</td>
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

<h3 id="fedg_layout_xml-instruc_ex_cont">&lt;container></h3>

A <a href="{{ site.gdeurl }}m2fedg/layout/containers-blocks.html">container</a> is structure only; it has no additional content. A container contains other layout elements&mdash;such as blocks and containers&mdash;and it renders child elements during view output generation.

The `<container>` instruction defines a container. It can be empty or it can contain an arbitrary set of `<container>` and `<block>` elements.

`<container>` instruction attributes:

<table>
	<tbody>
		<tr class="table-headings">
			<th>Attribute</th>
			<th>Description</th>
			<th>Values</th>
			<th>Required?</th>
		</tr>
	<tr class="even">
		<td>name</td>
		<td>A name which can be used to address the container in which this attribute is assigned. The name must be unique per generated page.</td>
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
		<td>Used to position the container before a block with the name specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">Using the before And after Attributes</a> for details.</td>
		<td>Possible values: element name or dash (-)</td>
		<td>no</td>
	</tr>
	<tr class="odd">
		<td>after</td>
		<td>Used to position the container after a block with the name specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">Using the before And after Attributes</a> for details.</td>
		<td>Possible values: element name or dash (-)</td>
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
		<td>Any valid HTML 5 tag</td>
		<td>no</td>
	</tr>
	<tr class="odd">
		<td>htmlId</td>
		<td>Output parameter. If specified, the value is added to the wrapper element. If there is no wrapper element, this attribute has no effect.</td>
		<td>Any valid HTML 5 <code>&lt;id></code> value</td>
		<td>no</td>
	</tr>
	<tr class="even">
		<td>htmlClass</td>
		<td>Output parameter. If specified, the value is added to the wrapper element. If there is no wrapper element, this attribute has no effect.</td>
		<td>Any valid HTML 5  <code>&lt;class></code> value</td>
		<td>no</td>
	</tr>
	
	</tbody>
</table>

Sample declaration in layout:

<script src="https://gist.github.com/xcomSteveJohnson/8c75b9bcab19f24318c8.js"></script>

<h3 id="fedg_layout_xml-instruc_ex_act">&lt;action></h3>

The `<action>` instruction calls public methods on the block API. It is used to set up the execution of a certain method of the block during block generation; the `<action>` node must be located in the scope of the `<block>` node.

<script src="https://gist.github.com/xcomSteveJohnson/4dd7ea5d2ea1bd546ccb.js"></script>

`<action>` child nodes are translated into block method arguments. Child nodes names are arbitrary. If there are two or more nodes with the same name under `<action>`, they are passed as one array. 

In the preceding example, the value of `<arg1>` is passed as the first argument and `<arg2>` values are passed as `array('one', 'two')`. The list of all available methods depends on the block implementation (for example, the public method of the block class). 

`<action>` attribute:

<table>
	<tbody>
		<tr class="table-headings">
			<th>Attribute</th>
			<th>Description</th>
			<th>Values</th>
			<th>Required?</th>
		</tr>
	<tr class="even">
		<td>method</td>
		<td>Name of the public method of the block class this instruction is located in that is called during block generation.</td>
		<td>block method name</td>
		<td>yes</td>
	</tr>
	</tbody>
</table>

<h3 id="fedg_layout_xml-instruc_ex_rem">&lt;remove></h3>

The `<remove>` instruction enables you to ignore some layout instructions when generating a layout. 

Removal works even if the `<remove>` instruction occurs in the layout before the referenced element because it is executed after all element declarations are processed. This means that regardless of how many elements with the referenced name are declared in layout XML, if there is a `<remove>` instruction, the named elements are not generated.

However, it is possible to create a new element after the layout is generated using `Mage_Core_Model_Layout::createElement()` or `createBlock()`.

`<remove>` attribute:

<table>
	<tbody>
		<tr class="table-headings">
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

If there is a `<remove>` instruction with the `name` attribute `[specified_name]`, the following instructions are ignored:

*	`<block class="Magento\Module\Block\Class" name="name.specified"/>`
*	`<container name="name.specified"/>`
*	`<referenceBlock name="name.specified">...</referenceBlock>`
*	`<move element="name.specified" destination="name.destination"/>`
*	`<move element="name.element" destination="name.specified"/>`

`<remove>` example: Layout update

<script src="https://gist.github.com/xcomSteveJohnson/1e74bc4258bf27f1e126.js"></script>

Result: 

<script src="https://gist.github.com/xcomSteveJohnson/d0b5ccf6d5dad7796536.js"></script>

<h3 id="fedg_layout_xml-instruc_ex_ref">&lt;referenceBlock> and &lt;referenceContainer></h3>

`<referenceBlock>` and `<referenceContainer>` cause updates in `<referenceBlock>` to apply to the corresponding  `<block>` or `<container>`.

For example, you must target the reference to a block by using the name `attribute`. This attribute targets the `<block>` tag's `name` attribute. If you make a reference by `<referenceBlock name="right">`, you're targeting the block `<block name="right">`.

<h3 id="fedg_layout_xml-instruc_ex_mv">&lt;move></h3>

`<move>` sets the declared element (block or container) as a child of another element in the specified order.

Example:

<pre>&lt;move element="name.of.an.element" destination="name.of.destination.element" as="new_alias" after="name.of.element.after" before="name.of.element.before"/></pre>

Keep the following information in mind when using the `<move>` instruction:

*	`<move>` is skipped if the element to be moved is not defined.
*	If the `as` attribute is not defined, the current value of the element alias is used. If that is not possible, the value of the `name` attribute is used instead.
*	During layout generation, the `<move>` instruction is processed before the `<remove>` instruction. This means if any elements are moved to the element scheduled for removal, they will be removed as well.

Attributes:

<table>
	<tbody>
		<tr class="table-headings">
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

<h2 id="fedg_layout_xml-instruc_others">All Other XML Instructions</h2>
<div id="accordion">
This section discusses all other XML instructions you can use in a layout.

<h3>Include CSS files in a page head block (browsers other than Internet Explorer)</h3>
<div>
<p>Examples:</p>
<script src="https://gist.github.com/xcomSteveJohnson/785a513700ed94e2676b.js"></script>
<script src="https://gist.github.com/xcomSteveJohnson/77721ca37bf9842003e0.js"></script>
<p>To use this code, replace the following:</p>
<ul><li>the file name <code>css/styles.css</code> in <code>&lt;argument name="file">&lt;/argument></code></li>
<li>the block name <code>css-styles-css</code> in <code>&lt;block name=""/></code> to make it more relevant to your customization. This name should be unique.</li></ul>
</div>

<h3>Include CSS files in a page head block (Internet Explorer only)</h3>
<div>
<p>Example:</p>
<script src="https://gist.github.com/xcomSteveJohnson/99f069bd815c83112650.js"></script>

<p>To use this code, replace the following:</p>
<ul><li>the file name <code>css/styles.css</code> in <code>&lt;argument name="file">&lt;/argument></code></li>
<li>the block name <code>css-styles-ie</code> in <code>&lt;block name=""/></code> to match the name of your CSS. This name should be unique.</li>
<li>IE version restriction parameter in <code>&lt;argument name="properties">&lt;item name="ie_condition">&lt;/item>&lt;/argument></code></li></ul>
</div>

<h3>Reference an external CSS file in a page head block</h3>
<div>
<p>Example:</p>
<script src="https://gist.github.com/xcomSteveJohnson/eee1dbf762e112e2ef54.js"></script>
<p>To use this code, replace the following:</p>
<ul><li>the link <code>http://fonts.googleapis.com/css?family=Alegreya+Sans</code> in <code>&lt;argument name="url">&lt;/argument></code></li>
<li>the block name <code>google-font</code> in <code>&lt;block name=""/></code> to match the name of your block. This name should be unique.</li></ul>
</div>

<h3>Include JavaScript files in a page head block (browsers other than Internet Explorer)</h3>
<div>
<p>Example:</p>
<script src="https://gist.github.com/xcomSteveJohnson/0ac8690ce1552903ac06.js"></script>
<p>To use this code, replace the following:</p>
<ul><li>the file name <code>js/script.js</code> in <code>&lt;argument name="file">&lt;/argument></code></li>
<li>the block name <code>js-head-js</code> in <code>&lt;block name=""/></code> to match the name of your JavaScript file. This name should be unique.</li></ul>
</div>

<h3>Include JavaScript files in a page head block (Internet Explorer only)</h3>
<div>
<p>Example:</p>
<script src="https://gist.github.com/xcomSteveJohnson/f269219cc9b66a151c10.js"></script>
<p>To use this code, replace the following:</p>
<ul><li>the file name <code>js/scrip-ie.js</code> in <code>&lt;argument>&lt;argument/></code></li>
<li>the block name <code>js-selectivizr-js</code> in <code>&lt;block name=""/></code> to match the name of your JavaScript file.</li>
<li>IE version restriction parameter in <code>&lt;argument name="properties">&lt;item name="ie_condition">&lt;/item>&lt;/argument></code></li></ul>
</div>

<h3>Apply a CSS class to a block</h3>
<div>
<p>You can use the following example for any block that has the <code>css_class</code> property.</p>
<p>Example:</p>
<script src="https://gist.github.com/xcomSteveJohnson/5e7fefddf7689824ec44.js"></script>
<p>To use this code, replace the following:</p>
<ul><li>the name of the block <code>footer_links</code> in <code>&lt;referenceBlock name=""></code></li>
<li>the name of the CSS class <code>links</code> in <code>&lt;argument name="css_class">&lt;/argument></code></li></ul>
</div>

<h3>Remove a block</h3>
<div>
<p>Example:</p>
<pre>&lt;remove name="footer_links"/></pre>
<p>Replace <code>footer_links</code> with the name of the block to remove.</p>
</div>

<h3>Move a block to another block</h3>
<div>
<p>Example:</p>
<pre>&lt;move element="footer_links" destination="top.links" /></pre>
<p>To use this code:</p>
<ul><li>replace <code>footer _links</code> in <code>&lt;move element=""/></code> with the name of the block to move</li>
<li>replace <code>top.links</code> in <code>&lt;move destination=""/></code> with the name of the destination block</li>
<li>use <code>before</code> and <code>after</code> to order the elements</li></ul>
</div>

<h3 id="fedg_xml-instrux_order-block">Order blocks</h3>
<div>
<p>The following examples show how to:</p>
<ul><li>Place a block before all other blocks</li>
<li>Place a block after a particular block</li></ul>
<p>The examples are basically interchangeable; for example, if you use the dash character with <code>after</code>, the block is ordered after all other blocks. For more information, see <a href="#fedg_xml-instrux_before-after">Using the before And after Attributes</a>.</p>
<p>Examples:</p>
<script src="https://gist.github.com/xcomSteveJohnson/1a7904f730e62050a918.js"></script>
<p>To use these examples, replace the value of <code>before</code> or <code>after</code> with either dash (before or after all other blocks) or with the name of an existing block.</p>
</div>

<h3>Set the template used by a block</h3>
<div>
<p>Example:</p>
<pre>&lt;block class="Magento\Theme\Block\Html\Title" name="page.main.title" template="html/title.phtml"/></pre>
<p>To use this code, replace the block class, name, and path to the template.</p>
</div>

<h3>Specify a page handle</h3>
<div>
<p>Example:</p>
<pre>&lt;update handle="page_two_columns_left"/></pre>
<p>To use this code, replace the <code>page_two_columns_left</code> in <code>&lt;update handle=""/></code> with one of the following:</p>
<ul><li><code>page_empty</code>&mdash;Empty page, used mostly for Ajax responses</code></li>
<li><code>page_one_column</code>&mdash;One-column design, used mostly for mobile devices</li>
<li><code>page_two_columns_left</code>&mdash;Left-sided, two-column design</li>
<li><code>page_two_columns_right</code>&mdash;Right-sided, two-column design</li>
<li><code>page_three_columns</code>&mdash;Three-column design</li></ul>
</div>

<h3>Create a new container</h3>
<div>
<p>Example:</p>
<pre>&lt;container name="some.container" as="someContainer" label="Some Container" htmlTag="div" htmlClass="some-container" /></pre>
<p>Replace the values with your own. For more information, see the earlier sections in this topic.</p>
</div>
</div>

<h2 id="fedg_xml-instrux_before-after">Using the before And after Attributes</h2>

To help you to position blocks in a specific order suitable for design, SEO, usability, or other requirements, the Magento software provides the layout attributes `before` and `after`.

These optional attributes can be used in layout XML files to control the order of elements in their common parent.

An example of a layout declaration with before and after usage follows:

<script src="https://gist.github.com/xcomSteveJohnson/a88b5c8c4e53682e2596.js"></script>

The following table shows possible attribute values:

<table>
	<tbody>
		<tr class="table-headings">
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
		<td>Use the value of <code>before</code>. If that value is empty or absent as well, the element is considered as non-positioned.</td>
	</tr>
	
	</tbody>
</table>

Examples:

<table>
	<tbody>
		<tr class="table-headings">
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


#### Related Topics:

*	<a href="{{ site.gdeurl }}m2fedg/layout/layout-xml-page-markup.html">Using XML to Manage Your Page Markup</a>
*	<a href="{{ site.gdeurl }}m2fedg/layout/layout-how-to-theme.html">How To Create a Theme</a>
*	<a href="{{ site.gdeurl }}m2fedg/layout/layout-extend.html">Extending a Layout</a>
*	<a href="{{ site.gdeurl }}m2fedg/layout/layout-override.html">Overriding a Layout</a>

