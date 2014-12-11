---
layout: default
group: dev-guide
subgroup: Architecture
title: Themes
menu_title: Themes
menu_order: 4
github_link: architecture/arch_themes.md
---

<h2 id="m2arch-themes-overview">Overview</h2>
Themes allow you to customize the look-and-feel of the Magento application. Themes generally provide no new business features of their own, other than branding and user experience. They relate to each other through inheritance, allowing you to customize an existing theme by setting it as the parent and then defining any desired customizations in the new theme.

Themes are located in the <code>/app/themes</code> folder of a Magento installation. Each theme contains a <code>theme.xml</code> file, which defines the name and version of that theme, as well as the name of the parent theme, if any.

Themes are also divided by area, allowing you define themes that customize either the storefront or admin sections of the Magento application independently.

For detailed information about working with themes, refer to  <a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-general.html">Themes</a> in the Frontend Developers Guide.

<h2 id="m2arch-related">Related topics</h2>

* <a href="{{ site.gdeurl }}architecture/arch_asmodsys.html">Magento as a modular system</a>
<!--* Magento framework
* Magento file system
* Magento database
* Commonly used terms-->

