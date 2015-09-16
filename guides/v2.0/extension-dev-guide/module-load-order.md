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


You may need to specify your module&#8217;s dependency on other modules or files from other modules through your module&#8217;s [composer.json file](create_module.html#add-the-module8217s-composerjson-file). Further, you can specify a load order in your module&#8217;s module.xml file through the `&lt;sequence> tag to ensure that needed files from other modules are already loaded when your module loads.



`&#60;sequence>` declares the list of modules that must be loaded before the current module is loaded. It&#8217;s used for loading different kind of files: configuration files, view files (including CSS, LESS, and template files), or setup classes. Note that `&lt;sequence>` does not affect the loading of regular classes (non-setup classes). 
*Setup* classes are classes in the module that create/update DB schema or DB data.



If you know that your module&#8217;s logic depends on something in another module then you should add it to `require` in composer.json and `&lt;sequence>` in module.xml. For example, *module A* may introduce `gadgetlayout.xml`, which updates block “gadgetBlock” from module B. So layout files from module A should be loaded before layout files in module B.

For each particular scenario, files of the same type are loaded from different modules taking into account the sequence information provided in each module&#8217;s module.xml file.

For example, if you want to load all of the layout files with the name *default*, and module A specifies module B in the sequence, the files are loaded as follows:
42. module X/view/frontend/layout/default.xml (either we don’t care about sequence for module X or module B requires it to be loaded before it)
42. module B/view/frontend/layout/default.xml
42. module A/view/frontend/layout/default.xml
42. module Z/view/frontend/layout/default.xml (either we don’t care about sequence for module Z or module Z requires module A files to be loaded before it).

There are no limitations&#8212;you can specify any valid module in `&lt;sequence>`.


If you do specify a module in `&lt;sequence>`, make sure that you have also added it to the `require` section in that module&#8217;s composer.json file. 



<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Take care when using `<sequence>` in multiple modules not to define circular dependencies. If you do, Magento aborts the installation when it detects the circular dependency.</p></span>
</div>


##Next

[Enable&#8212;or disable&#8212;a module](enable-module.html)


