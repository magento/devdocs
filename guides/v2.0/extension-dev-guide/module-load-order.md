---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: Module load order
menu_title: Module load order
menu_order: 6
github_link: extension-dev-guide/module-load-order.md

---
##{{page.menu_title}}


You may need to specify your module&#8217;s dependency on other modules or files from other modules through your module&#8217;s [composer.json file](create_module.html#add-the-module8217s-composerjson-file). Further, you can specify a load order in your module&#8217;s *module.xml* file through the `<sequence>` tag to ensure that needed files from other modules are already loaded when your module loads.

`<sequence>` declares the list of modules that must be loaded before the current module is loaded. It&#8217;s used for loading different kind of files: configuration files, view files (including CSS, LESS, and template files), or setup classes. Note that `<sequence>` does not affect the loading of regular classes (non-setup classes). 
*Setup* classes are classes in the module that create/update DB schema or DB data.

If you know that your module&#8217;s logic depends on something in another module then you should add it to `require` in *composer.json* and `<sequence>` in *module.xml*. 


###Examples

Assume you have a module that needs a configuration file from another module:

__Module A__ introduces `gadgetlayout.xml`, which updates block `gadgetBlock` from __module B__. In this case, layout files from __module A__ should be loaded before __module B__, so you should specify that in __module B&#8217;s__ `<sequence>` entry in module.xml.



For each particular scenario, files of the same type are loaded from different modules taking into account the sequence information provided in each module&#8217;s module.xml file. 

In another scenario, let&#8217;s say you want to load all of the layout files with the name *default.xml*. __Module A__ specifies __module B__ in `<sequence>`. The files load in the following order:

42. *module X/view/frontend/layout/default.xml* &#8212; Either we don&#8217;t care about when module X loads or perhaps module B requires it to be loaded before it.
42. *module B/view/frontend/layout/default.xml* 
42. *module A/view/frontend/layout/default.xml* &#8212; Loads after __module B__ because __module B__ is listed in __module A&#8217;s__ `<sequence>` tag.
42. *module Z/view/frontend/layout/default.xml* &#8212; Either we don&#8217;t care about the sequence for module Z or perhaps module Z requires module A files to be loaded before it.

There are no limitations&#8212;you can specify any valid module in `<sequence>`.

If you do specify a module in `<sequence>`, make sure that you have also added it to the `require` section in that module&#8217;s composer.json file. 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Take care when using <code>&#60;sequence></code> in multiple modules: it is possible to define circular dependencies. If you do, Magento aborts the installation when it detects the circular dependency.</p></span>
</div>

##Next

[Enable&#8212;or disable&#8212;a module](enable-module.html)


