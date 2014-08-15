---
layout: howtom2devgde_chapters_fedg
title: Using XML Instructions In Your Theme
---
 
<h1 id="fedg_layout_xml-instruct">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/m2fedg/v1.0.0.0/layout/layout-xml-instrux.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

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

This section discusses common XML instructions you can use to customize your layout.

<h3 id="fedg_layout_xml-instruc_ex_block">&lt;block> Instruction</h3>

A block is a unit of page output that renders some distinctive content, such as a piece of information, a user interface element, or anything visible to the user.

The `<block>` instruction defines a block.

`<block>` instruction attributes:

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
		<td>Used to position the block before an element with the name specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. TBD See HIDDEN Elements Sorting with "before" and "after" Attributes for details.</td>
		<td>Possible values: element name or dash (-)</td>
		<td>no</td>
	</tr>
	<tr class="odd">
		<td>after</td>
		<td>Used to position the block after an element with the name specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. TBD See HIDDEN Elements Sorting with "before" and "after" Attributes for details.</td>
		<td>Possible values: element name or dash (-)</td>
		<td>no</td>
	</tr>
	<tr class="even">
		<td>template</td>
		<td>A template that represents the functionality of the block in which this attribute is assigned.</td>
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
		<td>Any value except obsolete <code>toHtml</code>. Recommended value is <code>1</code>.</td>
		<td>no</td>
	</tr>
	<tr class="odd">
		<td>cacheable</td>
		<td>Defines whether a block element is to be cached. This can be used for development purposes and to make needed elements of the page dynamic.	</td>
		<td><code>true</code> or <code>false</code></td>
		<td>no</td>
	</tr>
	
	</tbody>
</table>

<h3 id="fedg_layout_xml-instruc_ex_cont">&lt;container> Instruction</h3>

A container is structural unit of layout. The purpose of containers is to contain other layout elements&mdash;such as blocks and containers&mdash;and to render child elements during view output generation.

The `<container>` instruction defines a container.

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
		<td>Used to position the container before a block with the name specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. TBD See HIDDEN Elements Sorting with "before" and "after" Attributes for details.</td>
		<td>Possible values: element name or dash (-)</td>
		<td>no</td>
	</tr>
	<tr class="odd">
		<td>after</td>
		<td>Used to position the container after a block with the name specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. TBD See HIDDEN Elements Sorting with "before" and "after" Attributes for details.</td>
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
		<td>Any value except obsolete <code>toHtml</code>. Recommended value is <code>1</code>.</td>
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

A `<container>` element can be empty or have arbitrary set of `<container>` and `<block>` elements.

Sample declaration in layout:

<script src="https://gist.github.com/xcomSteveJohnson/8c75b9bcab19f24318c8.js"></script>

<h3 id="fedg_layout_xml-instruc_ex_act">&lt;action> Instruction</h3>

The `<action>` instruction is used to call the public methods of the block API. It is used to set up the execution of a certain method of the block during block generation; the `<action>` node must be located in the scope of the `<block>` node.

<script src="https://gist.github.com/xcomSteveJohnson/4dd7ea5d2ea1bd546ccb.js"></script>

`<action>` child nodes are translated into block method arguments. Child nodes names are arbitrary. If there are two or more nodes with the same name under `<action>`, they are passed as one array. 

In the preceding example, the value of `<arg1>` is passed as the first argument and `<arg2>` values are passed as `array('one', 'two')`. The list of all available methods depends on the block implementation (for example, the public method of the block class). 

Action attribute:

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
		<td>Name of the public method of the block class this instruction is located in that is called during the block generation.</td>
		<td>block method name</td>
		<td>yes</td>
	</tr>
	</tbody>
</table>

<h3 id="fedg_layout_xml-instruc_ex_rem">&lt;remove> Instruction</h3>

The `<remove>` instruction enables you to ignore some layout instructions when generating a layout. 

Removal will work even if the `<remove>` instruction emerges in the layout before the referenced element because it is executed after all element declarations are processed. This means that regardless of how many elements with the referenced name are declared in layout XML, if there is a `<remove>` instruction, they will not be generated.

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

If there is a `<remove>` instruction with the `name` attribute `specified_name`, the following instructions are ignored:

*	`<block class="Magento\Module\Block\Class" name="name.specified"/>`
*	`<container name="name.specified"/>`
*	`<referenceBlock name="name.specified">...</referenceBlock>`
*	`<move element="name.specified" destination="name.destination"/>`
*	`<move element="name.element" destination="name.specified"/>`

`<remove>` example: Layout update

<script src="https://gist.github.com/xcomSteveJohnson/1e74bc4258bf27f1e126.js"></script>

Result: 

<script src="https://gist.github.com/xcomSteveJohnson/d0b5ccf6d5dad7796536.js"></script>

<h3 id="fedg_layout_xml-instruc_ex_ref">&lt;referenceBlock> and &lt;referenceContainer> Instructions</h3>

`<referenceBlock>` and `<referenceContainer>` cause updates in `<referenceBlock>` to apply to the corresponding  `<block>` or `<container>`.

For example, you must target the reference to a block by using the name `attribute`. This attribute targets the `<block>` tag's `name` attribute. If you make a reference by `<referenceBlock name="right">`, you're targeting the block `<block name="right">`.

<h3 id="fedg_layout_xml-instruc_ex_mv">&lt;move> Instruction</h3>

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

This section discusses all other XML instructions you can use in a layout.

<div id="accordion">
<h3>Include CSS files in a page head block (browsers other than Internet Explorer)</h3>
<div>
<p>Examples:</p>
<script src="https://gist.github.com/xcomSteveJohnson/785a513700ed94e2676b.js"></script>
<script src="https://gist.github.com/xcomSteveJohnson/77721ca37bf9842003e0.js"></script>
<p>To use this code, replace the following:</p>
<ul><li>the file name <code>css/styles.css</code> in <code>&lt;argument name="file">&lt;/argument></code></li>
<li>the block name <code>css-styles-css</code> in <code>&lt;block name=""/> to make it more relevant to your customization. This name should be unique.</li></ul>
</div>

<h3>Include CSS files in a page head block (Internet Explorer only)</h3>
<div>
<p>Example:</p>
<script src="https://gist.github.com/xcomSteveJohnson/99f069bd815c83112650.js"></script>

<p>To use this code, replace the following:</p>
<ul><li>the file name <code>css/styles.css</code> in <code>&lt;argument name="file">&lt;/argument></code></li>
<li>the block name <code>css-styles-ie</code> in <code>&lt;block name=""/></code> to make it more relevant to your customization. This name should be unique.</li>
<li>IE version restriction parameter in <code>&lt;argument name="properties">&lt;item name="ie_condition">&lt;/item>&lt;/argument></code></li></ul>

</div>

</div>

<h4>Related Topics:</h4>

