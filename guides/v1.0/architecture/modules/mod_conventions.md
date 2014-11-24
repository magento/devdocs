---
layout: default
group: dev-guide
subgroup: Modules
title: Module Naming and Location Conventions
menu_title: Module Naming and Location Conventions
menu_order: 5
github_link: architecture/modules/mod_conventions.md
---

<h2 id="m2arch-module-conventions-overview"> Overview</h2>

When developing or working with modules, be aware of Magento standards and conventions, such as naming conventions and the location of modules within the file system.

Be sure to research additional Magento conventions, beyond those applicable to modules. For  more information, see Coding Standards.

<h2 id="m2arch-module-conventions-location"> Module Location Conventions</h2>

The following table shows the standard locatin within the Magento file system for specific entities.

<div class="table-wrap"><table class="confluenceTable"><tbody><tr><th class="confluenceTh">Entity</th><th class="confluenceTh">Location</th></tr><tr><td class="confluenceTd">Code base of your custom module</td><td class="confluenceTd"><p><code>&lt;root&gt;/app/code/&lt;Vendor&gt;/&lt;Module&gt;</code></p><p> </p></td></tr><tr><td colspan="1" class="confluenceTd">Your custom theme files</td><td colspan="1" class="confluenceTd"><code>&lt;root&gt;/app/design/&lt;Module&gt;/&lt;theme&gt;</code></td></tr><tr><td colspan="1" class="confluenceTd">If you want to use a library</td><td colspan="1" class="confluenceTd"><code>&lt;root/lib/&lt;Vendor_Library&gt;</code></td></tr></tbody></table></div>

<h2 id="m2arch-module-conventions-location"> Module Naming Convention</h2>

Several modules in Magento have composite names. For example, when a name consists of several words with capitalized first letters. Because a module alias is in lowercase, there is no simple solution to convert module alias to module name. To solve this issue setup class contains correspondence array of modules with composite names and this array is used in class name generation.

Example: "catalogsearch" is module alias of "Magento_CatalogSearch" module.

<h2 id="m2arch-module-related"> Related Topics</h2>
* <a href="{{ site.gdeurl }}architecture/modules/mod_depend.html">Understanding Module Dependencies</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_relationships.html">Module Relationships</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_and_areas.html">Modules and Areas</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_specific.html">Specific Magento Modules</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Adding a New Module</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Disabling or Removing a Module</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Extending Modules</a>


