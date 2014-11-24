---
layout: default
group: dev-guide
subgroup: Modules
title: Modules Relationships
menu_title: Modules Relationships
menu_order: 3
github_link: architecture/modules/mod_relationships.md
---

<h2 id="m2arch-module-relationships-overview">Overview</h2>

Understanding how one module relates to another helps determine how it reacts to changes in that module.

<p>The module relationships get all the more interesting the more modules involved.</p>

<p>In a scenario where module A uses module B and module C customizes module B, the customizations in module C cannot break the API of module B so that module A still functions properly in the face of these customizations.</p>

<p><span class="image-wrap" style=""><img src="/download/attachments/81990900/modA_use_modB_modC_customize_modB.png?version=1&amp;modificationDate=1389582873000" style="border: 0px solid black"></span></p>

<p>Similarly, in a case where module A reacts to module B and module C customizes module B, the customizations in module C must not interfere with the events in module B that module A depends on.</p>

<p><span class="image-wrap" style=""><img src="/download/attachments/81990900/modA_react_modB_modC_customize_modB.png?version=1&amp;modificationDate=1389582874000" style="border: 0px solid black"></span></p>

<p>If both module A and C customize module B, we have to be careful about how these customizations are implemented so that we avoid conflicts (see below).</p>

<p><span class="image-wrap" style=""><img src="/download/attachments/81990900/modA_modC_customize_modB.png?version=1&amp;modificationDate=1389582873000" style="border: 0px solid black"></span></p>

<p>If module A replaces module B, it needs to be able to do so in such a way that other modules are not affected.  That will mean not having direct hard dependencies on module B, but rather dependencies on a third module, module C, that both module A and B implement.</p>

<p><span class="image-wrap" style=""><img src="/download/attachments/81990900/modA_replace_modB.png?version=1&amp;modificationDate=1389582873000" style="border: 0px solid black">




<h2 id="m2arch-module-related">Related topics</h2>
* <a href="{{ site.gdeurl }}architecture/modules/mod_depend.html">Understanding Module Dependencies</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_relationships.html">Module Relationships</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_and_areas.html">Modules and Areas</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_specific.html">Specific Magento Modules</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Adding a New Module</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Disabling or Removing a Module</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Extending Modules</a>

