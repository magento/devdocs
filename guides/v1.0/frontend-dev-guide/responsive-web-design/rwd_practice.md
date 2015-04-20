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
This topic features a step-by-step illustration of how to change the number of products displayed on a product page keeping up with the responsive design approach. 

<h2 id="rwd_practice">Changing the number of columns</h2>


OrangeCo want to make their products more visible by decreasing the quantity of columns on a catalog page, so that each product takes more space. 

In the default Blank theme, the number of columns for each breakpoint is the following (for the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-page">2-column page layout</a>):

<ul>
<li>1024px and higher (desktop): 4 columns</li>
<li>768px (tablet): 3 columns</li>
<li>640px and less (mobile): 2 columns</li>
</ul>

<p class="q">Can we change the wording of "columns"? cause it looks confusing about the 2-column layout and changing the number of columns at the same time</p>

In their custom Orange theme, OrangeCo want to have the least number of columns, namely:
<ul>
<li>Desktop: 3 columns</li>
<li>Tablet: 2 columns</li>
<li>Mobile: 2 columns</li>
</ul>

The Orange theme <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherits</a> from the Blank theme.
To change columns quantity, OrangeCo add an overriding <a href="{{site.mage2000url}}app/design/frontend/Magento/blank/Magento_Catalog/web/css/source/module/_listings.less" target="_blank"><code>app/design/frontend/Magento/blank/Magento_Catalog/web/css/source/module/_listings.less </code></a>, where they changed the following: 

<p class="q"> Can we describe it somehow, the changes we make? </p>

The changed lines are highlighted.

<img src="{{site.baseurl}}common/images/rwd_pract1.png">

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


<p class="q">Do we change the Desktop section only, and it applies to all the breakpoints?</p>

<img src="{{site.baseurl}}common/images/rwd_practice.jpg">