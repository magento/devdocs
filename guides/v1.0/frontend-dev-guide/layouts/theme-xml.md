---
layout: default
group: fedg
subgroup: B_Layouts
title: XML instructions
menu_title: XML instructions
menu_order: 6
github_link: frontend-dev-guide/layouts/theme-xml.md
---

<h2 id="fedg_layout_xml-instruc_overview">Overview</h2>

Changing layout files is one of the two possible ways to customize page layout in Magento (the second way is altering templates). 
To change the high-level page structure modify the page layout files; all other customizations are performed in the page configuration or generic layout files. <!--ADDLINK-->


Using layout instructions you can:

*	move a page element to another parent element
*	add content 
*	remove a page element


The basic set of instructions is the same for all types of layout files. Though there are specific limitations and rules of usage for each layout type. This article describes these general instructions; for details about how they are used in particular layout file type, please refer to one of the following:

* Page layout <!--ADDLINK-->
* Page configuration <!--ADDLINK-->
* Generic layout <!--ADDLINK-->


<h2 id="fedg_layout_xml-instruc_ex">Common layout instructions</h2>

Use the following layout instructions to customize your layout:

*	<a href="#fedg_layout_xml-instruc_ex_block">&lt;block></a>
*	<a href="#fedg_layout_xml-instruc_ex_cont">&lt;container></a>
*	<a href="#fedg_layout_xml-instruc_ex_act">&lt;action></a>
*	<a href="#fedg_layout_xml-instruc_ex_rem">&lt;remove></a>
*	<a href="#fedg_layout_xml-instruc_ex_ref">&lt;referenceBlock> and &lt;referenceContainer></a>
*	<a href="#fedg_layout_xml-instruc_ex_mv">&lt;move></a>
*	<a href="#fedg_layout_xml-instruc_ex_upd">&lt;update/&gt;</a>

<h3 id="fedg_layout_xml-instruc_ex_block">&lt;block></h3>

Defines a block.

<p><b>Details:</b> A <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/containers-blocks.html">block</a> is a unit of page output that renders some distinctive content – a piece of information, a user interface element – anything visually tangible for the end-user.
Blocks employ templates to generate HTML. The HTML is inserted into its parent structural block. Examples of blocks include a category list, a mini cart, product tags, and product listing.</p>
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
         <td>Used to position the block before an element whose name is specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">before and after attributes</a> for details.</td>
         <td>Possible values: element name or dash (-)</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td>after</td>
         <td>Used to position the block after an element with the name specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">before and after attributes</a> for details.</td>
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
         <td>An alias name that serves as identifier in the scope of the parent element (**does it makes sense only if parent is block?**).</td>
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
A structure without content that holds other layout elements such as blocks and containers.
<p><b>Details:</b> A <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/containers-blocks.html">container</a> renders child elements during view output generation. It can be empty or it can contain an arbitrary set of <code>&lt;container></code> and <code>&lt;block></code> elements.
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
         <td>Used to position the container before a block with the name specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">before and after attributes</a> for details.</td>
         <td>Possible values: element name or dash (-).</td>
         <td>no</td>
      </tr>
      <tr class="odd">
         <td>after</td>
         <td>Used to position the container after a block with the name specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See <a href="#fedg_xml-instrux_before-after">before and after attributes</a> for details.</td>
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
Question to a reviewer: what are these containers declared in the sample? Can we describe in simple words, where on a page are they displayed? 
<pre>
...
&lt;container&nbsp;name=&quot;div.sidebar.additional&quot;&nbsp;htmlTag=&quot;div&quot;&nbsp;htmlClass=&quot;sidebar&nbsp;sidebar-additional&quot;&nbsp;after=&quot;div.sidebar.main&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;container&nbsp;name=&quot;sidebar.additional&quot;&nbsp;as=&quot;sidebar_additional&quot;&nbsp;label=&quot;Sidebar&nbsp;Additional&quot;/&gt;
&lt;/container&gt;
...
</pre>


<script src="https://gist.github.com/xcomSteveJohnson/8c75b9bcab19f24318c8.js"></script>
<h3 id="fedg_layout_xml-instruc_ex_act">&lt;action></h3>
Calls public methods on the block API.
<p><b>Details:</b> Used to set up the execution of a certain method of the block during block generation; the <code>&lt;action></code> node must be located in the scope of the <code>&lt;block></code> node.</p>
<script src="https://gist.github.com/xcomSteveJohnson/4dd7ea5d2ea1bd546ccb.js"></script>
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
Initial layout update:

<pre>
&lt;layout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;layout_handle_default&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Module\Block\Class&quot;&nbsp;name=&quot;block.1&quot;&nbsp;output=&quot;toHtml&quot;&nbsp;template=&quot;block1.phtml&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Module\Block\Class&quot;&nbsp;name=&quot;block.2&quot;&nbsp;as=&quot;block_2&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Module\Block\Class&quot;&nbsp;name=&quot;block.3&quot;&nbsp;as=&quot;block_3&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;container&nbsp;name=&quot;container.1&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;reference&nbsp;name=&quot;existing.block&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;setTemplate&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;template.phtml&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/reference&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;container&nbsp;name=&quot;container.2&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/layout_handle_default&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;layout_handle_current&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;update&nbsp;handle=&quot;layout_handle_default&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;name=&quot;block.2&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;name=&quot;container.1&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;name=&quot;existing.block&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/layout_handle_current&gt;
&lt;/layout&gt;
</pre>

Layout generated for `layout_handle_current` handle after processing the `<remove>` directives:
<script src="https://gist.github.com/xcomSteveJohnson/1e74bc4258bf27f1e126.js"></script>
<script src="https://gist.github.com/xcomSteveJohnson/d0b5ccf6d5dad7796536.js"></script>
<pre>
&lt;layout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;layout_handle_default&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Module\Block\Class&quot;&nbsp;name=&quot;block.1&quot;&nbsp;output=&quot;toHtml&quot;&nbsp;template=&quot;block1.phtml&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Module\Block\Class&quot;&nbsp;name=&quot;block.2&quot;&nbsp;as=&quot;block_2&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Module\Block\Class&quot;&nbsp;name=&quot;block.3&quot;&nbsp;as=&quot;block_3&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;container&nbsp;name=&quot;container.1&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;reference&nbsp;name=&quot;existing.block&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;setTemplate&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;template.phtml&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/reference&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;container&nbsp;name=&quot;container.2&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/layout_handle_default&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;layout_handle_current&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;update&nbsp;handle=&quot;layout_handle_default&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;name=&quot;block.2&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;name=&quot;container.1&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;name=&quot;existing.block&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/layout_handle_current&gt;
&lt;/layout&gt;
</pre>


<h3 id="fedg_layout_xml-instruc_ex_ref">&lt;referenceBlock> and &lt;referenceContainer></h3>
<p>Cause updates in <code>&lt;referenceBlock></code> to apply to the corresponding <code>&lt;block></code> or <code>&lt;container></code>.</p>
<p>For example, you must target the reference to a block by name <code>attribute</code>.
This attribute targets the <code>&lt;block></code> tag's <code>name</code> attribute.</p>
<p>If you make a reference by <code>&lt;referenceBlock name="right"></code>, you're targeting the block <code>&lt;block name="right"></code>.</p>
<h3 id="fedg_layout_xml-instruc_ex_mv">&lt;move></h3>
Sets the declared block or container element as a child of another element in the specified order.
<p><b>Example:</b></p>
<pre>&lt;move element="name.of.an.element" destination="name.of.destination.element" as="new_alias" after="name.of.element.after" before="name.of.element.before"/></pre>
<p>Keep the following information in mind when <code>&lt;move></code> tag:</p>
<ul>
   <li><code>&lt;move></code> is skipped if the element to be moved is not defined.</li>
   <li>If the <code>as</code> attribute is not defined, the current value of the element alias is used. If that is not possible, the value of the <code>name</code> attribute is used instead.</li>
   <li>During layout generation, the <code>&lt;move></code> tag is processed before the <code>&lt;remove></code> tag. This means if any elements are moved to the element scheduled for removal, they will be removed as well.</li>
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

<h2 id="fedg_xml-instrux_before-after">before and after attributes</h2>
<p>To help you to position blocks in a specific order suitable for design, SEO, usability, or other requirements, the Magento software provides the <code>before</code> and <code>after</code> layout attributes.</p>
<p>These optional attributes can be used in layout XML files to control the order of elements in their common parent.
An example of a layout declaration with before and after usage follows:</p>
<script src="https://gist.github.com/xcomSteveJohnson/a88b5c8c4e53682e2596.js"></script>
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
         <td>Use the value of <code>before</code>. If that value is empty or absent as well, the element is considered as non-positioned.</td>
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
<h4 id="related-topics">Related topics</h4>
<ul>
   <li><a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml.html">XML in layouts</a></li>
   <li><a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-create.html">Create a theme</a></li>
   <li><a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a></li>
   <li><a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a></li>
</ul>

