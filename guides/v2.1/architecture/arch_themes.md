---
layout: default
group: 
subgroup: Architecture
title: Themes
menu_title: Themes
menu_order: 
version: 2.1
github_link21: architecture/arch_themes.md
---

<h2 id="m2arch-themes-overview">Overview</h2>
Themes allow you to customize the look-and-feel of the Magento application. Themes generally provide no new business features of their own, other than branding and user experience. They relate to each other through inheritance, allowing you to customize an existing theme by setting it as the parent and then defining any desired customizations in the new theme.

Themes are located in the `/app/design/frontend/<Vendor>/` folder of a Magento installation. Each theme contains a `theme.xml` file, which defines the name and version of that theme, as well as the name of the parent theme, if any.

Themes are also divided by area, allowing you to define themes that customize either the storefront or Magento Admin.

For detailed information about working with themes, refer to  <a href="{{ site.gdeurl21 }}frontend-dev-guide/themes/theme-general.html">Themes</a> in the Frontend Developers Guide.

<h2 id="m2arch-related">Related topics</h2>

* <a href="{{ site.gdeurl21 }}architecture/arch_asmodsys.html">Magento as a modular system</a>
* <a href="{{ site.gdeurl21 }}architecture/modules/mod_intro.html">Modules</a>
* <a href="{{ site.gdeurl21 }}architecture/arch_libraries.html">Libraries</a>
* <a href="{{ site.gdeurl21 }}architecture/arch_translations.html">Language packages</a>


