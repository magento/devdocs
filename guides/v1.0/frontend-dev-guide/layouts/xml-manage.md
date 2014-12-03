---
layout: default
group: fedg
subgroup: B_Layouts
title: Common layout customization tasks
menu_title: Common layout customization tasks
menu_order: 5
github_link: frontend-dev-guide/layouts/layout-xml.md
---

This topic shows you how to extend a layout by using merging layout files:

*	<a href="#layout_markup_bad">Avoid layout customization mistakes</a>
*	<a href="#layout_markup_columns">Change columns in a layout</a>
*	<a href="#layout_markup_rearrange">Rearrange elements</a>
*	<a href="#layout_markup_remove_elements">Remove elements</a>
*	<a href="#layout_markup_replace_elements">Replace elements</a>
*	<a href="#layout_markup_modify-block">Modify block arguments</a>
*	<a href="#layout_markup_block-properties">Use block object methods to set block properties</a>
*	<a href="#apply_css">Apply a CSS class to a block</a> - Should it be here???
*	<a href="#move" >Move a block to another block</a> - if not covered in Rearrange element
*	<a href="#fedg_xml-instrux_order-block">Order blocks</a> - if not covered in Rearrange element
*	<a href="#set_template">Set the template used by a block</a> - Should it be here???
*	<a href="#create_cont">Create a container</a> - Should it be here???

<h2 id="layout_markup_bad">Avoid layout customization mistakes</h2>

Although the layout overriding mechanism provides great customization flexibility, it's possible to use it to add logically irrelevant changes. Magento strongly recommends you not make the following changes:

*	Changing a block name or alias. Neither the name of a block should not be changed nor the alias of a block remaining in the same parent element.
*	Changing handle inheritance. For example, you should not change the page type parent handle.

<h2 id="layout_markup_columns">Change columns in a layout</h2>

Example: The `catalogsearch_result_index.xml` base layout file of the Mage_CatalogSearch module defines a three-column page layout. We need to change it to two-column layout.
Original declaration in `app/code/Mage/CatalogSearch/view/frontend/layout/catalogsearch_result_index.xml`
<p class="q">TO reviewer: Need to completely rewrite it, guess it should be done in page layout file.</p>

<h2 id="layout_markup_rearrange">Rearrange elements</h2>

For example, you can change the subordination of the product price block.

Original declaration (might be in either base or theme layout file):
<pre>
&lt;layout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceBlock&nbsp;name=&quot;product.info&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;name=&quot;product.info.bundle&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;name=&quot;bundle.prices&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceBlock&gt;
&lt;/layout&gt;
</pre>

<!-- <script src="https://gist.github.com/xcomSteveJohnson/55ed6e850202bb0d5374.js"></script>  -->

Desired result:
<pre>
layout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceBlock&nbsp;name=&quot;product.info&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;name=&quot;product.info.bundle&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;name=&quot;bundle.summary&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;name=&quot;bundle.prices&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;name=&quot;product.info.addtocart.bundle&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceBlock&gt;
&lt;/layout&gt;
</pre>
<!--<script src="https://gist.github.com/xcomSteveJohnson/9771c824e65567bd0dd8.js"></script> -->

Change you should make in a theme merging file:
<pre>
&lt;layout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceBlock&nbsp;name=&quot;product.info&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;name=&quot;bundle.summary&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;name=&quot;product.info.addtocart.bundle&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceBlock&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;move&nbsp;element=&quot;bundle.prices&quot;&nbsp;destination=&quot;bundle.summary&quot;&nbsp;before=&quot;product.info.addtocart.bundle&quot;/&gt;
&lt;/layout&gt;
</pre>
<!-- <script src="https://gist.github.com/xcomSteveJohnson/93666c8933206a55dd61.js"></script> -->

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

<p class="q">To reviewer: this is outdated for sure, new approach described here: https://wiki.corp.x.com/display/MPD/Page+Layout+%28Draft%29#PageLayout%28Draft%29-Headelements.</p>

Make the following change in your theme merging file:

<script src="https://gist.github.com/xcomSteveJohnson/a36ca0d74ae7af673fb2.js"></script>

Where:

*	The value of the name attribute of `<block>` is arbitrary.
*	The file name and path for the file argument (or URL in case of RSS) is relative to the theme root directory `app/design/[area]/[theme name]`, or the `view/[area]` directory of a custom module.

<h3 id="layout_markup_css_change">Change JavaScript or CSS links</h3>

To change a link, <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html#layout_markup_remove_elements">remove it</a> then add the new one.

<h3 id="layout_markup_css_remove">Remove JavaScript or CSS</h3>

To remove the JavaScript and CSS resources used in a layout, make a change similar to the following in a theme merging file:

<script src="https://gist.github.com/xcomSteveJohnson/2871e00f617d4e031014.js"></script>

<h2 id="layout_markup_remove_elements">Remove elements</h2>

This section discusses how to remove the shopping cart sidebar block from a page.

Original:
<pre>
&lt;layout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceContainer&nbsp;name=&quot;right&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Mage_Checkout_Block_Cart_Sidebar&quot;&nbsp;name=&quot;cart_sidebar&quot;&nbsp;template=&quot;cart/sidebar.phtml&quot;&nbsp;before=&quot;-&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;addItemRender&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;type&quot;&nbsp;xsi:type=&quot;string&quot;&gt;simple&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;block&quot;&nbsp;xsi:type=&quot;object&quot;&gt;Mage_Checkout_Block_Cart_Item_Renderer&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;cart/sidebar/default.phtml&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;addItemRender&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;type&quot;&nbsp;xsi:type=&quot;string&quot;&gt;grouped&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;block&quot;&nbsp;xsi:type=&quot;object&quot;&gt;Mage_Checkout_Block_Cart_Item_Renderer_Grouped&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;cart/sidebar/default.phtml&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;addItemRender&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;type&quot;&nbsp;xsi:type=&quot;string&quot;&gt;configurable&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;block&quot;&nbsp;xsi:type=&quot;object&quot;&gt;Mage_Checkout_Block_Cart_Item_Renderer_Configurable&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;cart/sidebar/default.phtml&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;container&nbsp;name=&quot;cart_sidebar.extra_actions&quot;&nbsp;as=&quot;extra_actions&quot;&nbsp;label=&quot;Shopping&nbsp;Cart&nbsp;Sidebar&nbsp;Extra&nbsp;Actions&quot;&nbsp;module=&quot;Mage_Checkout&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceContainer&gt;
&lt;/layout&gt;
</pre>

<!--
<script src="https://gist.github.com/xcomSteveJohnson/faa16e16f157a50823a3.js"></script>
-->

To change it, make a customization similar to the following in a theme merging file:

<pre>&lt;layout>
    &lt;remove name="cart_sidebar"/>
&lt;/layout></pre>

<h2 id="layout_markup_replace_elements">Replace elements</h2>

To replace an element, <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html#layout_markup_remove_elements">remove it</a> and add a new one.

<h2 id="layout_markup_modify-block">Modify block arguments</h2>

This section discusses how to modify the declared block argument and to add a new one.

Original:

<script src="https://gist.github.com/xcomSteveJohnson/2822dfb55fc4620fb482.js"></script>

To modify it, make a customization similar to the following in a theme merging file:

<script src="https://gist.github.com/xcomSteveJohnson/f942fac58ef97a39890f.js"></script>

<h2 id="layout_markup_block-properties">Use block object methods to set block properties</h2>

To set a page title using the `setTitle()` method, make a customization similar to the following in a theme merging file:

<pre>
&lt;layout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceBlock&nbsp;name=&quot;head&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;setTitle&quot;&nbsp;module=&quot;Enterprise_Wishlist&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;title&quot;&nbsp;xsi:type=&quot;string&quot;&gt;My&nbsp;Wish&nbsp;Lists&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceBlock&gt;
&lt;/layout&gt;
</pre>

<!--
<script src="https://gist.github.com/xcomSteveJohnson/bc7583f5e2ac5835a250.js"></script>
-->


   <h2 id="apply_css">Apply a CSS class to a block</h2>

<p class="q">To reviewer: is it similar to linking a CSS to the page or no?</p>

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

   <h2 id="move" >Move a block to another block</h2>
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
   <h2 id="fedg_xml-instrux_order-block">Order blocks</h2>
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
   <h2 id="set_template">Set the template used by a block</h2>
<p><b>Example:</b></p>
<pre>&lt;block class="Magento\Theme\Block\Html\Title" name="page.main.title" template="html/title.phtml"/></pre>
<p>To use this code, replace the block class, name, and path to the template.</p>

<h2 id="create_cont">Create a container</h2>

<p><b>Example:</b></p>
<pre>&lt;container name="some.container" as="someContainer" label="Some Container" htmlTag="div" htmlClass="some-container" /></pre>
<p>Replace the values with your own. For more information, see the earlier sections in this topic.</p>

#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>
