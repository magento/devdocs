---
group: frontend-developer-guide
title: Customizing RWD illustration
functional_areas:
  - Frontend
---
## What's in this topic

This topic features a step-by-step illustration of how to change the number of products displayed in a row on a product page, keeping up with the responsive design approach used by Magento out-of-the-box themes.

The described flow is applicable only for themes that [inherit]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html) from the out-of-the-box Blank or Luma [theme](https://glossary.magento.com/theme).

## Changing the number of products in a row {#rwd_practice}

OrangeCo wants to make their products more visible by decreasing the quantity of products in a row displayed on a [catalog](https://glossary.magento.com/catalog) page, so that each product takes more space.

In the basic Blank theme, the number of products in a row for each breakpoint is the following (for the [2-column page layout]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-types.html#layout-types-page)):

-  1024px and more (desktop): four products
-  768px (tablet): three products
-  640px and less (mobile): two products

In their custom Orange theme, OrangeCo wants to have the least number of products in a row for the desktop and tablet view, namely:

-  Desktop: three products
-  Tablet: two products
-  Mobile: two products

The Orange theme inherits from the Blank theme.

To change the products quantity, OrangeCo take the following steps:

1. Copy the [`/Magento_Catalog/web/css/source/module/_listings.less`] file.
1. Put it in the corresponding location in their Orange theme directory: `app/design/frontend/OrangeCo/orange/Magento_Catalog/web/css/source/module/_listings.less`
1. Make the changes in the code. The following image illustrates which section of the file they change, the modified lines are highlighted:

![responsive practice 1]

After OrangeCo [applies their theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-apply.html), the catalog page of their store looks like following:

![responsive practice 2]

(compare to the [same page for the Blank theme]({{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd_mobile.html).)

[`/Magento_Catalog/web/css/source/module/_listings.less`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/Magento_Catalog/web/css/source/module/_listings.less
[responsive practice 1]: {{site.baseurl}}/common/images/rwd_pract1.png
[responsive practice 2]: {{site.baseurl}}/common/images/rwd_practice.jpg
