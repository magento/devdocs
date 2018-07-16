---
group: fedg
subgroup: D_CSS
title: Using jQuery UI styles
menu_order: 5
menu_title: Using jQuery UI styles
version: 2.1
github_link: frontend-dev-guide/css-topics/css-jquery.md
functional_areas:
  - Frontend
---

<h2>What's in this topic</h2>

This topic provides an overview of how {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} UI styles are used in Magento out of the box, and how you can use them in a custom {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}.

## jQuery UI styles used on the storefront

In Magento out of the box certain {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} elements are implemented using jQuery UI widgets (like navigation menu, mini {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %} and so on), with the default jQuery classes assigned. But Magento does not contain jQuery UI styles in the code base. Styles for the certain default jQuery UI classes are defined in Magento by default (in the default Magento storefront and {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} themes). For other jQuery UI classes styles are not defined. 

We do not recommend downloading the jQuery UI styles as is, because they will override the default Magento themes definitions and break the default Magento design. 

To use the jQuery styles, you need to define those which you need in your custom stylesheets in the `<your_custom_theme>/web/css` directory. 

## Recommended reading

- [Define what styles you need to change]({{ page.baseurl }}/frontend-dev-guide/themes/debug-theme.html#debug-theme-style)
- [Quick start guide to working with styles for a new theme]({{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_overview.html)

