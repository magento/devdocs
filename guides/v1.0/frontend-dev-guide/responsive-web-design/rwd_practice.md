---
layout: default
group: fedg
subgroup: E_rwd
title: Customizing RWD illustration
menu_title: Customizing RWD illustration
menu_order: 6
github_link: frontend-dev-guide/responsive-web-design/rwd_practice.md
---
<h2>Overview</h2>
This topic features a step-by-step illustration of how to change the number of products displayed in a row on a product page, keeping up with the responsive design approach. 

<h2 id="rwd_practice">Changing the number of products in a row</h2>


OrangeCo want to make their products more visible by decreasing the quantity of products in a row dispalyed on a catalog page for desktop and tablet, so that each product takes more space. 

In the default Blank theme, the number of products in a row for each breakpoint is the following (for the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-page">2-column page layout</a>):

<ul>
<li>1024px and higher (desktop): 4 products</li>
<li>768px (tablet): 3 products</li>
<li>640px and less (mobile): 2 products</li>
</ul>


In their custom Orange theme, OrangeCo want to have the least number of products in a row for the desktop and tablet view, namely:
<ul>
<li>Desktop: 3 products</li>
<li>Tablet: 2 products</li>
<li>Mobile: 2 products</li>
</ul>

The Orange theme <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherits</a> from the Blank theme.

To change the products quantity, OrangeCo take the following steps:
<ol>
<li>Copy the <a href="{{site.mage2000url}}app/design/frontend/Magento/blank/Magento_Catalog/web/css/source/module/_listings.less" target="_blank"><code>app/design/frontend/Magento/blank/Magento_Catalog/web/css/source/module/_listings.less </code></a> file.

<li>Put in the corresponding location in their Orange theme folder: <code>app/design/frontend/OrangeCo/orange/Magento_Catalog/web/css/source/module/_listings.less </code> </li>

<li>Make the changes in the code. The following image illustates which section of the file they change, the modified lines are highlighted:</li>
</ol>
<p><img src="{{site.baseurl}}common/images/rwd_pract1.png"></p>



<!---
In your theme and change
…
<pre>
//
//  Desktop
//  ---------------------------------------------

.media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__m) {
    .page-products .products-grid .product-item { width: 100%/2 }
    .page-products.page-layout-1column .products-grid .product-item { width: 100%/4 }
    .page-products.page-layout-3columns .products-grid .product-item { width: 100%/2 }
}
.media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__l) {
    .products-grid .product-item { width: 100%/3 }
    .page-layout-1column .products-grid .product-item { width: 100%/6 }
    .page-layout-3columns .products-grid .product-item { width: 100%/4 }
    .page-products .products-grid .product-items { margin: 0; }
    .page-products .products-grid .product-item {
        width: 33.333%;
        margin-left: calc(~"(100% - 3 * 33.333%) / 3");
        padding: 0;
        &:nth-child(4n+1) {
            margin-left: 0;
        }
    }
    .page-products.page-layout-1column .products-grid .product-item { width: 100%/5 }
    .page-products.page-layout-3columns .products-grid .product-item { width: 100%/4 }
}

</pre>

-->


When OrangeCo <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-apply.html" target="_blank">apply their theme</a>, the catalog page of their store will look like following:

<p><img src="{{site.baseurl}}common/images/rwd_practice.jpg"></p>

(compare to the <a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_overview.html#fedg_rwd_blank_ex" target="_blank">same page for the Blank theme</a>.)