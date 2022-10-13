---
group: frontend-developer-guide
title: Quick start guide to working with styles for a new theme
functional_areas:
  - Frontend
---

This chapter combines the topics aiming to help you to quickly start working with styles of your custom theme:

-  [Simple ways to customize a theme's styles]
-  [Simple style changes with client-side Less compilation vs. server-side]

## High-level steps to create a theme and change styles

1. [Set] your Magento application to the developer [mode].
1. In the file system, [add a new theme] inheriting from Magento Blank or Luma.
1. [Apply your theme]
1. Decide which CSS compilation mode you will use. Compilation modes are described in the following topics:
   -  Detailed description: [Styles debugging]
   -  Practical illustration: [Simple style changes with client-side Less compilation vs. server-side]
1. Customize styles. To learn how, check out the following sources:
   -  [CSS chapter of this book][css overview]
   -  [Simple ways to customize a theme's styles]

## Why do you need to create a custom theme?

Magento provides two themes out of the box: Blank and Luma. If Magento is installed with sample data, the theme applied after installation is Luma. If no sample data is installed, the Blank theme is installed by default.

![Storefront with Luma applied]

Luma inherits from Blank, which contains all the basic functionality and styling required for a theme.

You can use either Luma or Blank for your storeview, if there is literally nothing you want to change in their design.

But if there is something you want to improve, the only recommended way is creating a new theme. It can inherit from Blank or Luma so you can preserve all you need, and change or add whatever is required.

Making changes in the Magento out-of-the-box themes is a bad idea, because can result in your changes being overwritten during upgrade.

{:.ref-header}
Related topics

-  [CSS in Magento themes][css overview]
-  [Simple ways to customize a theme's styles]
-  [Simple style changes with client-side Less compilation vs. server-side]

<!-- Link Definitions -->
[Simple ways to customize a theme's styles]: {{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_approach.html
[Simple style changes with client-side Less compilation vs. server-side]: {{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_mode.html
[Set]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html
[mode]: {{ page.baseurl }}/config-guide/bootstrap/magento-modes.html
[add a new theme]: {{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html

[Apply your theme]: {{ page.baseurl }}/frontend-dev-guide/themes/theme-apply.html

[Styles debugging]: {{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html
[Simple style changes with client-side Less compilation vs. server-side]: {{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_mode.html
[css overview]: {{ page.baseurl }}/frontend-dev-guide/css-topics/css-overview.html
[Simple ways to customize a theme's styles]: {{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_approach.html
[Simple style changes with client-side Less compilation vs. server-side]: {{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_mode.html

<!-- Image definitions -->
[Storefront with Luma applied]: {{ site.baseurl }}/common/images/css_guide_luma21.png
