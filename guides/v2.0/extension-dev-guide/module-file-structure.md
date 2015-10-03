---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: Module file Structure
menu_title: Module file Structure
menu_order: 2
github_link: extension-dev-guide/module-file-structure.md

---
##{{page.menu_title}}

Magento 2 looks for the files that make up a module, including configuration files, in particular places. Follow the predefined file structure to ensure that your module works as expected.


###Magento 2 Module File Structure


A typical file structure for a Magento 2 module:
<p><img src="{{ site.baseurl }}common/images/pdg-config-file-structure.png" width="300" alt="A filesystem view of a typical file structure"></p>

####Main components

The main component folders are:


* __Block__ &#8212; contains PHP classes as part of MVC vertical implementation of module logic.
* __Controller__ &#8212; contains PHP classes as part of MVC vertical implementation of module logic.
* __Helper__ &#8212; contains PHP classes as part of MVC vertical implementation of module logic.
* __Model__ &#8212; contains PHP classes as part of MVC vertical implementation of module logic.
* __Setup__ &#8212; contains classes for module database structure and data setup which are invoked when installing or upgrading.



####Additional directories

Additionally, there are folders for configuration and other ancillary functions for items like plug-ins, internationalization, and front-end layout files.

* __Api__&#8212; contains any PHP classes exposed to the API.	
* __etc__ &#8212; contains configuration files. 
* __i18n__ &#8212; contains localization files.
* __Plugin__ &#8212; contains any needed plugin files.
* __view__ &#8212; contains non-object-oriented and non-static view level parts of the module such as design templates, email templates, and layout files.


####Add your own

You can also add any other folders you need for your module.



##Build the file structure

Add a folder and give it the name of your module. Use a module name that is descriptive, but not too long. For example,

    mkdir module-catalog
    cd module-catalog

You can add subfolders inside your module folder as you need them (Block, Controller, Model, view, and so on).

Or, you could just add them at once:

    mkdir Api && mkdir Block && mkdir Controller && mkdir etc && mkdir Helper && mkdir i18n && mkdir Model && mkdir view

Make sure you add the `etc` folder; it is required, and is where most of the configuration files, including `module.xml`, are kept.



<div class="bs-callout bs-callout-info" id="info">
  <p>Be aware that the standard placement of the &lt;ModuleName> directory within the overall Magento file structure is <code>app/code/&lt;Vendor>/&lt;ModuleName>/etc/</code>. However, if you are creating a new module for distribution, you can just create the &lt;ModuleName> directory and the required directories within it. </p> 
</div>


##Next

[Define your configuration files](required-configuration-files.html)
