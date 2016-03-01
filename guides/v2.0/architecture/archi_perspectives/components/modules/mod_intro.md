---
layout: default
group: arch-guide
subgroup: Components
title: Module overview
menu_title: Module overview
menu_order: 3
level3_menu_node: level3child
level3_subgroup: modules
github_link: architecture/archi_perspectives/components/modules/mod_intro.md
redirect_from: /guides/v1.0/architecture/modules/mod_intro.html
---

<h2 id="arch-modules-overview">Module overview</h2>
A <i>module</i> is a logical group -- that is, a directory containing blocks, controllers, helpers, models -- that are related to a specific business feature. In keeping with Magento's commitment to optimal modularity, a module encapsulates one feature and has minimal dependencies on other modules.

Modules and themes are the units of customization in Magento. Modules provide business features, with supporting logic,  while themes strongly influence user experience and storefront appearance. Both components have a life cycle that allows them to be installed, deleted, and disabled. From the perspective of both merchants and extension developers, modules are the central unit of Magento organization. 


The Magento Framework provides a set of core logic: PHP code, libraries, and the basic functions that are inherited by the modules and other components.



<h3>Module purpose</h3>

The purpose of each module is to provide specific product features by implementing new functionality or extending the functionality of other modules. Each module is designed to function independently, so the inclusion or exclusion of a particular module does not typically affect the functionality of other modules.


<h3>Module components</h3>

A module is a directory that contains the PHP and XML files (blocks, controllers, helpers, models) that are related to a specific business feature, such as Shipping. Specifically, a Magento module is composed of these software components: <a href="{{ site.gdeurl }}architecture/archi_perspectives/components/arch_themes.html">themes</a>, <a href="{{ site.gdeurl }}architecture/archi_perspectives/components/arch_libraries.html">libraries</a>, and <a href="{{ site.gdeurl }}architecture/archi_perspectives/components/arch_translations.html">language packages</a>. 

See <a href="{{ site.gdeurl }}architecture/archi_perspectives/components/modules/mod_anatomy.html">Module anatomy</a> for an overview of module structure. 


<h3>Where do modules live?</h3>

Modules typically live in the `app/code` directory of a Magento installation, in a directory with the following PSR-0 compliant format: `app/code/<Vendor>/<ModuleName>`. For example, the Customer module of Magento can be found at `app/code/Magento/Customer`. 

Inside this folder, you will find all the code related to this module, including the `etc/module.xml` file, which contains the name and version of the module, as well as any dependencies.

The standard placement of the `<ModuleName>` directory within the overall Magento file structure is `app/code/<Vendor>/<ModuleName>`. However, if you are creating a new module for distribution, you can just create the `<ModuleName>` directory and the required directories within it.

<h3>Working with modules</h3>

Magento developers, administrators, and anyone building a Magento web site will want to review all relevant topics surrounding their particular goals and use cases.

See <a href="{{ site.gdeurl }}extension-dev-guide/bk-extension-dev-guide.html">PHP Developer Guide</a> for specific instructions on extending modules.



See 
<a href="{{ site.gdeurl }}frontend-dev-guide/bk-frontend-dev-guide.html">Frontend Developer Guide</a> for information on implementing themes and other components.



<h3 id="arch-modules-related">Related topics</h3>

<a href="{{ site.gdeurl }}architecture/archi_perspectives/components/modules/mod_depend.html">Module dependencies</a>



<a href="{{ site.gdeurl }}architecture/archi_perspectives/components/modules/mod_and_areas.html">Modules and areas</a>


<a href="{{ site.gdeurl }}architecture/archi_perspectives/components/modules/mod_conventions.html">Module location and naming conventions</a>



