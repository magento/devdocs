---
group: frontend-developer-guide
title: Using jQuery UI styles
functional_areas:
  - Frontend
---

## What's in this topic

This topic provides an overview of how jQuery UI styles are used in Magento out of the box, and how you can use them in a custom [theme](https://glossary.magento.com/theme).

## jQuery UI styles used on the storefront

In Magento out of the box certain [storefront](https://glossary.magento.com/storefront) elements are implemented using jQuery UI widgets (like navigation menu, mini [shopping cart](https://glossary.magento.com/shopping-cart) and so on), with the default jQuery classes assigned. But Magento does not contain jQuery UI styles in the code base. Styles for the certain default jQuery UI classes are defined in Magento by default (in the default Magento storefront and [Admin](https://glossary.magento.com/admin) themes). For other jQuery UI classes styles are not defined.

We do not recommend downloading the jQuery UI styles as is, because they will override the default Magento themes definitions and break the default Magento design.

To use the jQuery styles, you need to define those which you need in your custom stylesheets in the `<your_custom_theme>/web/css` directory.

## Recommended reading

-  [Define what styles you need to change]({{ page.baseurl }}/frontend-dev-guide/themes/debug-theme.html#debug-theme-style)
-  [Quick start guide to working with styles for a new theme]({{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_overview.html)
