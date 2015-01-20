---
layout: default
group: arch-guide
subgroup: Architecture
title: Magento Architecture
menu_title: Themes
menu_order: 6
github_link: architecture/arch_themes.md
---

<h2 id="m2arch-themes-overview">Overview</h2>
Themes allow you to customize the look-and-feel of the Magento application. Themes generally provide no new business features of their own, other than branding and user experience. They relate to each other through inheritance, allowing you to customize an existing theme by setting it as the parent and then defining any desired customizations in the new theme.

The default Magento <code>theme.xml</code> files are located in the following two directories:

* <code>/app/designfrontend/<vendor_name>/blank</code> 
 
* <code>/app/designfrontend/<vendor_name>/luma</code> 

Each <code>theme.xml</code> defines the name of that theme as well as the name of the parent theme, if any. The version of the theme is controlled by the <code>composer.json</code> file in which the theme is packaged.

Themes are also divided by area, allowing you define themes that customize either the storefront or admin sections of the Magento application independently.

For detailed information about working with themes, refer to  <a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-general.html">Themes</a> in the Frontend Developers Guide.

<h2 id="m2arch-related">Related topics</h2>

* <a href="{{ site.gdeurl }}architecture/arch_asmodsys.html">Magento as a modular system</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_intro.html">Modules</a>
* <a href="{{ site.gdeurl }}architecture/arch_libraries.html">Libraries</a>
* <a href="{{ site.gdeurl }}architecture/arch_translations.html">Language packs</a>


