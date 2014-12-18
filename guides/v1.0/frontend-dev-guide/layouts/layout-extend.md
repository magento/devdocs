---
layout: default
group: 
subgroup: B_Layouts
title: Extend a layout
menu_title: Extend a layout
menu_order: 3
github_link: frontend-dev-guide/layouts/layout-extend.md
---

<h2 id="fedg_layout_extend_merge">Create a theme extending file</h2>

Rather than copy extensive page layout or page configuration code and then modify what you want to change, in the Magento system, you only need to create a *theme extending file* that contains the changes you want. In this chapter, <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-page" target="_blank">page layouts</a>, <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-conf" target="_blank">page configurations</a>, and <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-gen" target="_blank">generic layouts</a> are all referenced to as *layout files*, because the mechanism of extending is similar for all of them.

To add a theme extending file:

2.	Put the layout file in the following location:
<pre>
app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;
&nbsp;|__/&lt;Namespace&gt;_&lt;Module&gt;
&nbsp;&nbsp;&nbsp;|__/layout
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&amp;lt;layout1&gt;.xml
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&amp;lt;layout2&gt;.xml
</pre>



<h2 id="fedg_layout_extend_merge">Processing extending layouts</h2>

Magento merges layout files as follows:

1. For each layout file in the list:
	1. Loads layout handle declaration and layout instructions.
	2. Appends to the result in the following format:
<p class="q"> To the reviewer: could you plz provide an updated code sample if this is outdated </p>
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

2. Replaces the base URL placeholders in the result.


#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-create.html">Create a theme</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-manage.html">XML instructions</a>