---
layout: default
group: fedg
subgroup: B_Layouts
title: XML in layouts
menu_title: XML in layouts
menu_order: 5
github_link: frontend-dev-guide/layouts/layout-xml.md
---

This topic shows you how to extend a layout by using merging layout files:

*	<a href="#layout_markup_bad">Avoid layout customization mistakes</a>
*	<a href="#layout_markup_start">Get started</a>
*	<a href="#layout_markup_columns">Change columns in a layout</a>
*	<a href="#layout_markup_rearrange">Rearrange elements</a>
*	<a href="#layout_markup_remove_elements">Remove elements</a>
*	<a href="#layout_markup_replace_elements">Replace elements</a>
*	<a href="#layout_markup_modify-block">Modify block arguments</a>
*	<a href="#layout_markup_block-properties">Use block object methods to set block properties</a>

<h2 id="layout_markup_bad">Avoid layout customization mistakes</h2>

Although the layout overriding mechanism provides great customization flexibility, it's possible to use it to add logically irrelevant changes. Magento strongly recommends you not make the following changes:

*	Changing a block name or alias. Neither the name of a block should not be changed nor the alias of a block remaining in the same parent element.
*	Changing handle inheritance. For example, you should not change the page type parent handle.

<h2 id="layout_markup_start">Get started</h2>

<div class="bs-callout bs-callout-info" id="info">
  <p>Because you can break other code and prevent successful upgrades, Magento strongly recommends you <em>not</em> change default layout files.</p>
</div>

To customize properly, add a theme merging file such as `app/design/frontend/[your theme]/Mage_CatalogSearch/layouts/catalogsearch_result_index.xml`, with the following content:

<pre>&lt;layout>
    &lt;update handle="page_three_columns_left"/>
&lt;/layout></pre>

You have the following choices:

*	`page_empty`&mdash;Empty page used mostly for Ajax responses
*	`page_one_column`&mdash;One-column design used mostly for mobile devices
*	`page_two_columns_left`&mdash;Left-sided, two-column design
*	`page_two_columns_right`&mdash;Right-sided, two-column design
*	`page_three_columns`&mdash;Three columns


<h2 id="layout_markup_columns">Change columns in a layout</h2>

This section discusses how to override the base the layout defined by the `Mage_CatalogSearch` module from two columns to three columns. You can find the original layout <a href="{{ site.mage2000url }}blob/master/app/code/Magento/CatalogSearch/view/frontend/layouts/catalogsearch_result_index.xml" target="_blank">here</a>.

The base template uses `<update handle="page_two_columns_left"/>` to define the number of columns on the page.


<h2 id="layout_markup_rearrange">Rearrange elements</h2>

For example, you can change the subordination of the product price block.

Original declaration (might be in either base or theme layout file):

<script src="https://gist.github.com/xcomSteveJohnson/55ed6e850202bb0d5374.js"></script>

Desired result:

<script src="https://gist.github.com/xcomSteveJohnson/9771c824e65567bd0dd8.js"></script>

Change you should make in a theme merging file:

<script src="https://gist.github.com/xcomSteveJohnson/93666c8933206a55dd61.js"></script>

<h2 id="layout_markup_css">Change JavaScript, CSS, and RSS</h2>

You can use layout instructions to link and remove CSS, JavaScript (JS) and RSS resources to a page's head block. See the following sections for more information:

*	<a href="#layout_markup_css_link">Link JavaScript, CSS, and RSS files</a>
*	<a href="#layout_markup_css_change">Change JavaScript or CSS links</a>
*	<a href="#layout_markup_css_remove">Remove JavaScript or CSS</a>

<h3 id="layout_markup_css_link">Link JavaScript, CSS, and RSS files</h3>

This section discusses how to link the following resources:

*	`app/design/frontend/[theme path]/jquery/jquery.js`
*	`app/design/frontend/[theme path]/mui/reset.css`
*	`app/design/frontend/[theme path]/feeds/feed.xml`

Make the following change in your theme merging file:

<script src="https://gist.github.com/xcomSteveJohnson/a36ca0d74ae7af673fb2.js"></script>

Where:

*	The value of the name attribute of `<block>` is arbitrary.
*	The file name and path for the file argument (or URL in case of RSS) is relative to the theme root directory `app/design/[area]/[theme name]`, or the `view/[area]` directory of a custom module.

<h3 id="layout_markup_css_change">Change JavaScript or CSS links</h3>

To change a link, <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml.html#layout_markup_remove_elements">remove it</a> then add the new one.

<h3 id="layout_markup_css_remove">Remove JavaScript or CSS</h3>

To remove the JavaScript and CSS resources used in a layout, make a change similar to the following in a theme merging file:

<script src="https://gist.github.com/xcomSteveJohnson/2871e00f617d4e031014.js"></script>

<h2 id="layout_markup_remove_elements">Remove elements</h2>

This section discusses how to remove the shopping cart sidebar block from a page.

Original:

<script src="https://gist.github.com/xcomSteveJohnson/faa16e16f157a50823a3.js"></script>

To change it, make a customization similar to the following in a theme merging file:

<pre>&lt;layout>
    &lt;remove name="cart_sidebar"/>
&lt;/layout></pre>

<h2 id="layout_markup_replace_elements">Replace elements</h2>

To replace an element, <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml.html#layout_markup_remove_elements">remove it</a> and add a new one.

<h2 id="layout_markup_modify-block">Modify block arguments</h2>

This section discusses how to modify the declared block argument and to add a new one.

Original:

<script src="https://gist.github.com/xcomSteveJohnson/2822dfb55fc4620fb482.js"></script>

To modify it, make a customization similar to the following in a theme merging file:

<script src="https://gist.github.com/xcomSteveJohnson/f942fac58ef97a39890f.js"></script>

<h2 id="layout_markup_block-properties">Use block object methods to set block properties</h2>

To set a page title using the `setTitle()` method, make a customization similar to the following in a theme merging file:

<script src="https://gist.github.com/xcomSteveJohnson/bc7583f5e2ac5835a250.js"></script>

<h2 id="fedg_layout_xml-instruc_others">Other XML tags</h2>
<div id="accordion">
   You can use other XML tags in a layout.
   <h3>Include CSS files in a page head block (browsers other than Internet Explorer)</h3>
   <div>
      <p>Examples:</p>
      <script src="https://gist.github.com/xcomSteveJohnson/785a513700ed94e2676b.js"></script>
      <script src="https://gist.github.com/xcomSteveJohnson/77721ca37bf9842003e0.js"></script>
      <p>To use this code, replace the following:</p>
      <ul>
         <li>the file name <code>css-topics/styles.css</code> in <code>&lt;argument name="file">&lt;/argument></code></li>
         <li>the block name <code>css-styles-css</code> in <code>&lt;block name=""/></code> to make it more relevant to your customization. This name should be unique.</li>
      </ul>
   </div>
   <h3>Include CSS files in a page head block (Internet Explorer only)</h3>
   <div>
      <p><b>Example:</b></p>
      <script src="https://gist.github.com/xcomSteveJohnson/99f069bd815c83112650.js"></script>
      <p>To use this code, replace the following:</p>
      <ul>
         <li>the file name <code>css-topics/styles.css</code> in <code>&lt;argument name="file">&lt;/argument></code></li>
         <li>the block name <code>css-styles-ie</code> in <code>&lt;block name=""/></code> to match the name of your CSS. This name should be unique.</li>
         <li>IE version restriction parameter in <code>&lt;argument name="properties">&lt;item name="ie_condition">&lt;/item>&lt;/argument></code></li>
      </ul>
   </div>
   <h3>Reference an external CSS file in a page head block</h3>
   <div>
      <p><b>Example:</b></p>
      <script src="https://gist.github.com/xcomSteveJohnson/eee1dbf762e112e2ef54.js"></script>
      <p>To use this code, replace the following:</p>
      <ul>
         <li>the link <code>http://fonts.googleapis.com/css?family=Alegreya+Sans</code> in <code>&lt;argument name="url">&lt;/argument></code></li>
         <li>the block name <code>google-font</code> in <code>&lt;block name=""/></code> to match the name of your block. This name should be unique.</li>
      </ul>
   </div>
   <h3>Include JavaScript files in a page head block (browsers other than Internet Explorer)</h3>
   <div>
      <p><b>Example:</b></p>
      <script src="https://gist.github.com/xcomSteveJohnson/0ac8690ce1552903ac06.js"></script>
      <p>To use this code, replace the following:</p>
      <ul>
         <li>the file name <code>js/script.js</code> in <code>&lt;argument name="file">&lt;/argument></code></li>
         <li>the block name <code>js-head-js</code> in <code>&lt;block name=""/></code> to match the name of your JavaScript file. This name should be unique.</li>
      </ul>
   </div>
   <h3>Include JavaScript files in page head block (Internet Explorer)</h3>
   <div>
      <p><b>Example:</b></p>
      <script src="https://gist.github.com/xcomSteveJohnson/f269219cc9b66a151c10.js"></script>
      <p>To use this code, replace the following:</p>
      <ul>
         <li>the file name <code>js/scrip-ie.js</code> in <code>&lt;argument>&lt;argument/></code></li>
         <li>the block name <code>js-selectivizr-js</code> in <code>&lt;block name=""/></code> to match the name of your JavaScript file.</li>
         <li>IE version restriction parameter in <code>&lt;argument name="properties">&lt;item name="ie_condition">&lt;/item>&lt;/argument></code></li>
      </ul>
   </div>
   <h3>Apply a CSS class to a block</h3>
   <div>
      <p>You can use the following example for any block that has the <code>css_class</code> property.</p>
      <p><b>Example:</b></p>
      <script src="https://gist.github.com/xcomSteveJohnson/5e7fefddf7689824ec44.js"></script>
      <p>To use this code, replace the following:</p>
      <ul>
         <li>the name of the block <code>footer_links</code> in <code>&lt;referenceBlock name=""></code></li>
         <li>the name of the CSS class <code>links</code> in <code>&lt;argument name="css_class">&lt;/argument></code></li>
      </ul>
   </div>
   <h3>Remove a block</h3>
   <div>
      <p><b>Example:</b></p>
      <pre>&lt;remove name="footer_links"/></pre>
      <p>Replace <code>footer_links</code> with the name of the block to remove.</p>
   </div>
   <h3>Move a block to another block</h3>
   <div>
      <p><b>Example:</b></p>
      <pre>&lt;move element="footer_links" destination="top.links" /></pre>
      <p>To use this code:</p>
      <ul>
         <li>replace <code>footer _links</code> in <code>&lt;move element=""/></code> with the name of the block to move</li>
         <li>replace <code>top.links</code> in <code>&lt;move destination=""/></code> with the name of the destination block</li>
         <li>use <code>before</code> and <code>after</code> to order the elements</li>
      </ul>
   </div>
   <h3 id="fedg_xml-instrux_order-block">Order blocks</h3>
   <div>
      <p>The following examples show how to:</p>
      <ul>
         <li>Place a block before all other blocks</li>
         <li>Place a block after a particular block</li>
      </ul>
      <p>The examples are basically interchangeable; for example, if you use the dash character with <code>after</code>, the block is ordered after all other blocks. For more information, see <a href="#fedg_xml-instrux_before-after">before and after attributes</a>.</p>
      <p>Examples:</p>
      <script src="https://gist.github.com/xcomSteveJohnson/1a7904f730e62050a918.js"></script>
      <p>To use these examples, replace the value of <code>before</code> or <code>after</code> with either dash (before or after all other blocks) or with the name of an existing block.</p>
   </div>
   <h3>Set the template used by a block</h3>
   <div>
      <p><b>Example:</b></p>
      <pre>&lt;block class="Magento\Theme\Block\Html\Title" name="page.main.title" template="html/title.phtml"/></pre>
      <p>To use this code, replace the block class, name, and path to the template.</p>
   </div>
   <h3>Specify a page handle</h3>
   <div>
      <p><b>Example:</b></p>
      <pre>&lt;update handle="page_two_columns_left"/></pre>
      <p>To use this code, replace the <code>page_two_columns_left</code> in <code>&lt;update handle=""/></code> with one of the following:</p>
      <ul>
         <li><code>page_empty</code>&mdash;Empty page, used mostly for Ajax responses</code></li>
         <li><code>page_one_column</code>&mdash;One-column design, used mostly for mobile devices</li>
         <li><code>page_two_columns_left</code>&mdash;Left-sided, two-column design</li>
         <li><code>page_two_columns_right</code>&mdash;Right-sided, two-column design</li>
         <li><code>page_three_columns</code>&mdash;Three-column design</li>
      </ul>
   </div>
   <h3>Create a new container</h3>
   <div>
      <p><b>Example:</b></p>
      <pre>&lt;container name="some.container" as="someContainer" label="Some Container" htmlTag="div" htmlClass="some-container" /></pre>
      <p>Replace the values with your own. For more information, see the earlier sections in this topic.</p>
   </div>
</div>

#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/theme-xml.html">XML in themes</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>
