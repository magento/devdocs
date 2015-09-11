---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: PHP developer guide
menu_title: Module Load Order
menu_order: 5
github_link: extension-dev-guide/module-load-order.md

---
##{{page.menu_title}}





 “sequence” declares list of modules that must be loaded before this module. It’s used for loading different kind of files: config files (in ‘etc’ folder of the module), view files (css, less, templates), setup classes. It does NOT affect loading of regular classes (non-setup classes). “setup” classes are classes in the module that create/update DB schema or DB data.
The developer should use this directive, if he knows that his module’s logic depends on something in another module and it depends so much that the module it depends on should be loaded before. For example, a module A may introduce a layout.xml, which updates block “block”, which is introduced in module B. So layout files from module B should be loaded before layout files in module A.



Under loading files I mean that for each particular scenario, files of the same type will be loaded from different modules taking into account this “sequence” information.
For example, if I want to load all layout files with name “default”, and my module A specifies module B in the sequence, the files will be loaded as follows:
module X/view/frontend/layout/default.xml (either we don’t care about sequence for module X or module B requires it to be loaded before it)
module B/view/frontend/layout/default.xml
module A/view/frontend/layout/default.xml
module Z/view/frontend/layout/default.xml (either we don’t care about sequence for module Z or module Z requires module A files to be loaded before it)

There are no limitations – any module can be used there.


If you call a module in a `<sequence>` tag in `module.xml`, you should also have that module added to `require` in your composer.json file.

The only limitation (not sure how exactly it’s implemented) is that same module should be in “require” section in composer.json of the module. It just means that you should not specify a module in the sequence section if you don’t really depend in it.




If you
<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Take care when using `<sequence>` in multiple modules not to define circular dependencies. If you do, Magento aborts the installation when it detects the circular dependency.</p></span>
</div>
