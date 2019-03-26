---
group: frontend-developer-guide
subgroup: D_CSS_G
title: Quick start guide to working with styles for a new theme
menu_title: Quick start guide to styles
menu_order: 1
menu_node: parent
functional_areas:
  - Frontend
---

This chapter combines the topics aiming to help you to quickly start working with styles of your custom theme:

- [Simple ways to customize a theme's styles]({{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_approach.html)
- [Simple style changes with client-side LESS compilation vs. server-side]({{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_mode.html)

## High-level steps to create a theme and change styles

1. [Set]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html).
1. In the file system, [add a new theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html){: target="_blank"} inheriting from Magento Blank or Luma.
3.  [Apply your theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-apply.html){: target="_blank"}.
2. Decide which {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} compilation mode you will use. Compilation modes are described in the following topics:
	- Detailed description: [Styles debugging]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html)
	- Practical illustration: [Simple style changes with client-side LESS compilation vs. server-side]({{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_mode.html)
4. Customize styles. To learn how, check out the following sources:
	- [CSS chapter of this book]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-overview.html)
	- [Simple ways to customize a theme's styles]({{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_approach.html)

## Why do you need to create a custom theme?

Magento provides two themes out of the box: Blank and Luma. If Magento is installed with sample data, the {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} applied after installation is Luma. If no sample data is installed, the Blank theme is installed by default.

![Storefront with Luma applied]({{ site.baseurl }}/common/images/css_guide_luma_.png)

Luma inherits from Blank, which contains all the basic functionality and styling required for a theme.

You can use either Luma or Blank for your storeview, if there is literally nothing you want to change in their design.

But if there is something you want to improve, the only recommended way is creating a new theme. It can inherit from Blank or Luma so you can preserve all you need, and change or add whatever is required.

Making changes in the Magento out-of-the-box themes is a bad idea, because can result in your changes being overwritten during upgrade.

## Related topics

- [ CSS in Magento themes]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-overview.html)
- [Simple ways to customize a theme's styles]({{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_approach.html)
- [Simple style changes with client-side LESS compilation vs. server-side]({{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_mode.html)
