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
This topic features a step-by-step illustration of how to change the number of products displayed on a product page keeping up with the responsive desing approach. 

Responsive practice
Guys want to make their products more visible by decreasing the quantity of columns on a page, so that each product takes more space. (for 2 column layout only)
In the Blank theme, the number of columns is:
-	Desktop 4 columns
-	Tablet (768px) 3 columns
-	Mobile 2 columns
They want:
-	Desktop 3 columns
-	Tablet (768px) 2 columns
-	Mobile 2 columns

To change columns quantity, you should override \app\design\frontend\Magento\blank\Magento_Catalog\web\css\source\module\_listings.less
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

<img src="{{site.baseurl}}common/images/rwd_practice.jpg">