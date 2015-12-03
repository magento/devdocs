---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: Module load order
menu_title: Module load order
menu_order: 8
github_link: extension-dev-guide/module-load-order.md
---

##{{page.menu_title}}


You may need to specify your module's dependency on other modules or files from other modules using your module's <a href="{{ site.gdeurl }}extension-dev-guide/create_module.html#add-module-xml">composer.json</a>. Further, you can specify a load order in your module's `module.xml` file using the `<sequence>` tag to ensure that needed files from other modules are already loaded when your module loads.

`<sequence>` declares the list of modules that must be loaded before the current module is loaded. It's used for loading different kind of files: configuration files, view files (including CSS, LESS, and template files), or setup classes. Note that `<sequence>` does not affect the loading of regular classes (non-setup classes). 
*Setup* classes are classes in the module that create or update database schema or data.

If you know that your module's logic depends on something in another module then you should add it to `require` in `composer.json` and `<sequence>` in `module.xml`. 

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>If you change the module load order using <code>&lt;sequence></code>, you must regenerate the module list in <code>config.php</code>; otherwise, the load order does not take effect.</p>
<p>Currently, the only way to do this is to enable the module using <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable"><code>magento module:enable &lt;module-list></code></a>, where <code>&lt;module-list></code> is the module or modules to which you added <code>&lt;sequence></code>.</p></span>
</div>


###Examples

Assume you have a module that needs a configuration file from another module:

__Module A__ introduces `gadgetlayout.xml`, which updates block `gadgetBlock` from __module B__. In this case, layout files from __module A__ should be loaded before __module B__, so you should specify that in __module B's__ `<sequence>` entry in module.xml.



For each particular scenario, files of the same type are loaded from different modules taking into account the sequence information provided in each module's module.xml file. 

In another scenario, let's say you want to load all of the layout files with the name *default.xml*. __Module A__ specifies __module B__ in `<sequence>`. The files load in the following order:

42. `module X/view/frontend/layout/default.xml`&mdash;Either we don't care about when module X loads or perhaps module B requires it to be loaded before it.
42. `module B/view/frontend/layout/default.xml` 
42. `module A/view/frontend/layout/default.xml`&mdash;Loads after __module B__ because __module B__ is listed in __module A's__ `<sequence>` tag.
42. `module Z/view/frontend/layout/default.xml`&mdash;Either we don't care about the sequence for module Z or perhaps module Z requires module A files to be loaded before it.

There are no limitations&mdash;you can specify any valid module in `<sequence>`.

If you do specify a module in `<sequence>`, make sure that you have also added it to the `require` section in that module's composer.json file. 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Take care when using <code>&lt;sequence></code> in multiple modules because it's possible to define circular dependencies. If you do, Magento aborts the installation when it detects the circular dependency.</p></span>
</div>

##Next

[Enable or disable a module](enable-module.html)


