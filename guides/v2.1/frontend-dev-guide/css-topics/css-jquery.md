---
layout: default
group: fedg
subgroup: D_CSS
title: Using jQuery UI styles
menu_order: 5
menu_title: Using jQuery UI styles
version: 2.1
github_link: frontend-dev-guide/css-topics/css-jquery.md
---

<h2>What's in this topic</h2>

This topic provides an overview of how jQuery UI styles are used in Magento out of the box, and how you can use them in a custom theme.

## jQuery UI styles used on the storefront

In Magento out of the box certain storefront elements are implemented using jQuery UI widgets (like navigation menu, mini shopping cart and so on), with the default jQuery classes assigned. But Magento does not contain jQuery UI styles in the code base. Styles for the certain default jQuery UI classes are defined in Magento by default (in the default Magento storefront and Admin themes). For other jQuery UI classes styles are not defined. 

We do not recommend downloading the jQuery UI styles as is, because they will override the default Magento themes definitions and break the default Magento design. 

To use the jQuery styles, you need to define those which you need in your custom stylesheets in the `<your_custom_theme>/web/css` directory. 

## Recommended reading

- [Define what styles you need to change]({{site.gdeurl21}}frontend-dev-guide/themes/debug-theme.html#debug-theme-style)
- [Quick start guide to working with styles for a new theme]({{site.gdeurl21}}frontend-dev-guide/css-guide/css_quick_guide_overview.html)

