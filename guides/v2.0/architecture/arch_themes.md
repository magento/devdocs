---
layout: default
group:
subgroup: Architecture
title: Themes
menu_title: Themes
menu_order:
version: 2.0
github_link: architecture/arch_themes.md
redirect_from: /guides/v1.0/architecture/arch_themes.html
---

Themes allow you to customize the look-and-feel of the Magento application. Themes generally provide no new business features of their own, other than branding and user experience. They relate to each other through inheritance, allowing you to customize an existing {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} by setting it as the parent and then defining any desired customizations in the new theme.

Themes are located in the `/app/design/frontend/<Vendor>/` folder of a Magento installation. Each theme contains a `theme.xml` file, which defines the name and version of that theme, as well as the name of the parent theme, if any.

Themes are also divided by area, allowing you to define themes that customize either the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} or {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}.

For detailed information about working with themes, refer to  <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-general.html">Themes</a> in the {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}Frontend{% endglossarytooltip %} Developers Guide.

## Related topics {#m2arch-related}

* <a href="{{page.baseurl}}architecture/arch_asmodsys.html">Magento as a modular system</a>

* <a href="{{page.baseurl}}architecture/archi_perspectives/components/modules/mod_intro.html">Modules</a>

* <a href="{{page.baseurl}}architecture/arch_libraries.html">Libraries</a>

* <a href="{{page.baseurl}}architecture/arch_translations.html">Language packages</a>
