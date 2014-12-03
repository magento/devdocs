---
layout: default
group: dev-guide
subgroup: Modules
title: Introduction to modules
menu_title: Introduction to modules
menu_order: 1
github_link: architecture/modules/mod_intro.md
---

<h2 id="arch-modules-overview">Overview</h2>
Magento is an application that is built  of several different types of components: modules, themes, libraries, and language packages. The Magento Framework provides a set of core logic; PHP code, libraries, and the base concepts that will be inherited by the modules and other components.

Modules and themes are the units of customization in Magento,  modules for business features and themes for user experience and look-and-feel. Both have a lifecycle allowing them to be installed, deleted, disabled, etc.

Modules encapsulate a particular business feature or set of features; a module is basically a package of code. Modules can relate to and depend on each other in a variety of ways, but should be as independent as possible to maximum flexibility when customizing a site. And while modules primarily define new business features, or customizations to existing ones, they also define a default user interface for those features, which can be customized by themes.

A Module is a logical group--that is, a directory containing blocks, controllers, helpers, models, and so on related to the specific feature or a widget. A module is designed to work independently and not to intervene with the work of other functionality. Using a modular approach implies that every module encapsulates a feature and has minimum dependencies on other modules.

Modules live in the `/app/modules` directory of a Magento installation, in a directory with the following PSR-0 compliant format: `/app/modules/<vendor>/<module_name>`, e.g. the Customer module of Magento can be found at `/app/modules/Magento/Customer`. Inside of this folder, you will find all of the code and configuration related to this module, including the `etc/module.xml` file, which contains the name and version of the module, as well as any dependencies.

<h3 id="arch-modules-working-with">Working with Modules</h3>

This document, the Architecture Guide, provides high-level conceptual infomation about modules and other Magento components.

Magento developers, admininistrators, and anyone building a Magento web site will want to review all relevant topics surrounding their particular goals and use cases.

For 'How To' topics such as instructions for adding modules, extending modules, implementing themes and other components, refer to the Magento Documentation set at <a href ="https://github.corp.ebay.com/pages/Magento/devdocs_internal/index.html">https://github.corp.ebay.com/pages/Magento/devdocs_internal/index.html</a> for a list of all Magento Guides and Manuals. Additionally, see the Related Topics below.


<h3 id="arch-modules-related">Related topics</h3>

* <a href="{{ site.gdeurl }}architecture/modules/mod_depend.html">Understanding Module Dependencies</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_relationships.html">Module relationships</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_and_areas.html">Modules and areas</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_conventions.html">Module Location and Naming Conventions</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_specific.html">Specific Magento Modules</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Adding a New Module</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Disabling or Removing a Module</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Extending Modules</a>
* <a href="{{ site.gdeurl }}architecture/arch_libraries.html">Libraries</a>
* <a href="{{ site.gdeurl }}architecture/arch_themes.html">Themes</a>
* <a href="{{ site.gdeurl }}architecture/arch_translations.html">Language Packages</a>