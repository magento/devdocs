---
layout: default-arch
title: Module Naming and Location Conventions
---

<h1 id="m2arch-module-conventions">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/arch/mod_depend.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2arch-module-conventions-overview"> Overview</h2>
text here
<p class="q">Does this topic even belong in the Architecture Guide; it might be better suited for a Developer's Guide...?? Also, if thre are addiotnal conventions used, let's add those. </p>

<h2 id="m2arch-module-conventions-location"> Module Location Conventions</h2>

<div class="table-wrap"><table class="confluenceTable"><tbody><tr><th class="confluenceTh">Entity</th><th class="confluenceTh">Location</th></tr><tr><td class="confluenceTd">Code base of your custom module</td><td class="confluenceTd"><p><code>&lt;root&gt;/app/code/&lt;Vendor&gt;/&lt;Module&gt;</code></p><p> </p></td></tr><tr><td colspan="1" class="confluenceTd">Your custom theme files</td><td colspan="1" class="confluenceTd"><code>&lt;root&gt;/app/design/&lt;Module&gt;/&lt;theme&gt;</code></td></tr><tr><td colspan="1" class="confluenceTd">If you want to use a library</td><td colspan="1" class="confluenceTd"><code>&lt;root/lib/&lt;Vendor&gt;</code></td></tr></tbody></table></div>
       
<h2 id="m2arch-module-conventions-location"> Module Naming Convention</h2>

Several modules in Magento have composite names, i.e. when name consists of several words with capitalized first letters. Because module alias is in lowercase, there is no simple solution to convert module alias to module name. To solve this issue setup class contains correspondence array of modules with composite names and this array is used in class name generation.

Example: "catalogsearch" is module alias of "Magento_CatalogSearch" module.




<h2 id="m2arch-module-related"> Related Topics</h2>
* abc
* def
* ghi

