---
group: fedg
subgroup: A_Themes
title: Themes overview
menu_title: Themes overview
menu_order: 1
version: 2.1
github_link: frontend-dev-guide/themes/theme-overview.md
functional_areas:
  - Frontend
  - Theme
---

## Themes overview
A *theme* is a component of Magento application which provides a consistent look and feel (visual design) for entire application area (for example, {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} or Magento admin) using a combination of custom templates, layouts, styles or images.

Themes are designed to override or customize view layer resources, provided initially by modules or libraries.

Themes are implemented by different vendors (frontend developers) and intended to be distributed as additional packages for Magento system similar to other components.

Out-of-the-box Magento application provides two design themes: Luma, as a demonstration theme, and Blank as a basis for custom {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} creation.

There are no restrictions on using the demonstration Luma theme for a live store, but if you want to customize the default design, you need to create a new theme. We strongly recommend not to change the default Luma and Blank theme files, because if you do edit the default files, your changes can be overwritten by the new version of the default files during upgrades.

Your new theme can be a standalone new theme, or it can inherit from the default or any other existing one. The theme inheritance concept implemented in the Magento system allows you to change only certain theme files, and <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html">inherit other required files from a parent theme</a>. 

## Themes flow

![Themes flow]({{ site.baseurl }}/common/images/fdg/create_install_theme.png)



   