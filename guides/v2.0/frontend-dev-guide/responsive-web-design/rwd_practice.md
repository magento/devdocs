---
layout: default
group: fedg
subgroup: E_rwd
title: Customizing RWD illustration
menu_title: Customizing RWD illustration
menu_order: 6
version: 2.0
github_link: frontend-dev-guide/responsive-web-design/rwd_practice.md
redirect_from: /guides/v1.0/frontend-dev-guide/responsive-web-design/rwd_practice.html
---
<h2>What's in this topic</h2>
This topic features a step-by-step illustration of how to change the number of products displayed in a row on a product page, keeping up with the responsive design approach used by Magento out-of-the-box themes. 

The described flow is applicable only for themes that <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherit</a> from the out-of-the-box Blank or Luma theme.

<h2 id="rwd_practice">Changing the number of products in a row</h2>

OrangeCo wants to make their products more visible by decreasing the quantity of products in a row displayed on a catalog page, so that each product takes more space.

In the basic Blank theme, the number of products in a row for each breakpoint is the following (for the <a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-page" target="_blank">2-column page layout</a>):

<ul>
<li>1024px and more (desktop): four products</li>
<li>768px (tablet): three products</li>
<li>640px and less (mobile): two products</li>
</ul>

In their custom Orange theme, OrangeCo wants to have the least number of products in a row for the desktop and tablet view, namely:
<ul>
<li>Desktop: three products</li>
<li>Tablet: two products</li>
<li>Mobile: two products</li>
</ul>

The Orange theme inherits from the Blank theme.

To change the products quantity, OrangeCo take the following steps:
<ol>
<li>Copy the <a href="{{site.mage2000url}}app/design/frontend/Magento/blank/Magento_Catalog/web/css/source/module/_listings.less" target="_blank"><code>&lt;Magento_Blank_theme_dir>/Magento_Catalog/web/css/source/module/_listings.less</code></a> file.</li>
<li>Put it in the corresponding location in their Orange theme directory: <code>app/design/frontend/OrangeCo/orange/Magento_Catalog/web/css/source/module/_listings.less </code></li>
<li>Make the changes in the code. The following image illustrates which section of the file they change, the modified lines are highlighted:</li>
</ol>
<p><img src="{{site.baseurl}}common/images/rwd_pract1.png"></p>

After OrangeCo <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-apply.html" target="_blank">applies their theme</a>, the catalog page of their store looks like following:

<p><img src="{{site.baseurl}}common/images/rwd_practice.jpg"></p>

(compare to the <a href="{{page.baseurl}}frontend-dev-guide/responsive-web-design/rwd_overview.html#fedg_rwd_blank_ex" target="_blank">same page for the Blank theme</a>.)
