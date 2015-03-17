---
layout: default
group: arch-guide
subgroup: Architecture
title: Libraries
menu_title: Libraries
menu_order: 5
github_link: architecture/arch_libraries.md
---

<h2 id="m2arch-libraries-overview">Overview</h2>
The Magento software can use the following types of libraries:

*	The Magento libraries, which are discussed in the next section.
*	Third-party libraries, which a module can include in its `composer.json`. 
*	UI libraries, which are located in the <a href="{{ site.mage2000url }}lib/web" target="_blank">lib/web</a> directory.
	For more information, see <a href="{{ site.mage2000url }}lib/web/css/docs/source/README.md" target="_blank">library documentation on GitHub</a> and <a href="{{ site.gdeurl }}architecture/view/view-lib.html">View Library</a>.
*	Internal libraries, which are used by the Magento software. They are located in the <a href="{{ site.mage2000url }}lib/internal" target="_blank">lib/internal</a> directory.
	Internal libraries are organized by vendor to be PSR-0 compliant.

<h2 id="m2arch-libraries-mage">Magento libraries</h2>
<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App" target="_blank">Magento\Framework\App</a> is *not* a library per set because it is aware of Magento as an application. It represents a greater level of abstraction and provides the following:

* Other Magento libraries should not reference `Magento\Framework\App`
* `Magento\Framework\App` introduces some application level abstractions such as:
  * <a href="{{ site.gdeurl }}architecture/modules/mod_and_areas.html">Application areas</a>
  * <a href="{{ site.gdeurl}}extension-dev-guide/routing.html">Routing requests</a>
  * Application state

<h2 id="m2arch-related">Related topics</h2>

* <a href="{{ site.gdeurl }}architecture/arch_asmodsys.html">Magento as a modular system</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_intro.html">Modules</a>
* <a href="{{ site.gdeurl }}architecture/arch_themes.html">Themes</a>
* <a href="{{ site.gdeurl }}architecture/arch_translations.html">Language packages</a>

