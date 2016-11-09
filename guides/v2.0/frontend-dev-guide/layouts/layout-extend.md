---
layout: default
group: fedg
subgroup: B_Layouts
title: Extend a layout
menu_title: Extend a layout
menu_order: 4
version: 2.0
github_link: frontend-dev-guide/layouts/layout-extend.md
redirect_from: /guides/v1.0/frontend-dev-guide/layouts/layout-extend.html
---

<h2 id="fedg_layout_extend_merge">Create a theme extending file</h2>


Rather than copy extensive page layout or page configuration code and then modify what you want to change, in the Magento system, you only need to create an *extending layout file* that contains the changes you want. 


To add an extending <a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-conf" target="_blank">page configuration</a> or <a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-gen" target="_blank">generic layout</a> file:

2.	Put the layout file in the following location:
<pre>
&lt;theme_dir&gt;
&nbsp;|__/&lt;Namespace&gt;_&lt;Module&gt;
&nbsp;&nbsp;&nbsp;|__/layout
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&lt;layout1&gt;.xml
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&lt;layout2&gt;.xml
</pre>

For example, to customize the layout defined in `<Magento_Catalog_module_dir>/view/frontend/layout/catalog_product_view.xml`, you need to add a layout file with the same name in your custom theme, like following:

<code>&lt;theme_dir&gt;/Magento_Catalog/layout/catalog_product_view.xml</code>

To add an extending <a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-page" target="_blank">page layout</a> file:

2.	Put the file in the following location:
<pre>
&lt;theme_dir&gt;
&nbsp;|__/&lt;Namespace&gt;_&lt;Module&gt;
&nbsp;&nbsp;&nbsp;|__/page_layout
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&lt;layout1&gt;.xml
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&lt;layout2&gt;.xml
</pre>

<!--

<h2 id="fedg_layout_extend_merge">Processing extending layouts</h2>

Magento merges layout files as follows:

1. For each layout file in the list:
	1. Loads layout handle declaration and layout instructions.
	2. Appends to the result in the following format:

<pre>
&lt;layouts&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;handle&nbsp;id=&quot;checkout_cart_index&quot;&nbsp;label=&quot;Shopping&nbsp;Cart&quot;&nbsp;type=&quot;page&quot;&nbsp;parent=&quot;default&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;Layout&nbsp;instructions&nbsp;from&nbsp;checkout_cart_index.xml&nbsp;--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/handle&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;handle&nbsp;id=&quot;checkout_onepage_index&quot;&nbsp;label=&quot;One&nbsp;Page&nbsp;Checkout&quot;&nbsp;type=&quot;page&quot;&nbsp;parent=&quot;default&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;Layout&nbsp;instructions&nbsp;from&nbsp;checkout_onepage_index.xml&nbsp;--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/handle&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;...&nbsp;--&gt;
&lt;/layouts&gt;
</pre>
Where a `handle ID` is defined by the name of the corresponding layout file, and handle attributes are defined by the attributes of the root layout node of this layout file.

2. Replaces the base URL placeholders in the result. -->


#### Related topics:

*	<a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-override.html" target="_blank">Override a layout</a>
*	<a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html" target="_blank">XML instructions</a>
*	<a href="{{page.baseurl}}frontend-dev-guide/themes/theme-create.html" target="_blank">Create a theme</a>
*	<a href="{{page.baseurl}}frontend-dev-guide/css-topics/theme-ui-lib.html" target="_blank">Magento UI library</a>

