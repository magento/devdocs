---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: PHP developer guide
menu_title: Module File Structure
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


* Block
* Controller
* Helper
* Model

####Additional directories

Additionally, there are folders for configuration and other ancillary functions for items like plug-ins, internationalization, and front-end layout files.

* Api
* etc
* il8n
* view


####Add your own

You can also add other folders you need for your module.



##Build the file structure

Add a folder and give it the name of your module. Use a module name that is descriptive, and not too long.  

Add the subfolders inside your module folder as you need them (Block, Controller, Model, view, and so on). 

Make sure you add the `etc` folder; it is required, and is where most of the configuration files, including `module.xml`, are kept.

Along with the directories for those main components, you may need some additional directories for important things like configuration files, optional plugins, i18n files, APIs, and other files.

<div class="bs-callout bs-callout-info" id="info">
  <p>Be aware that the standard placement of the &lt;ModuleName> directory within the overall Magento file structure is <code>app/code/&lt;Vendor>/&lt;ModuleName>/etc/</code>. However, if you are creating a new module for distribution, you can just create the &lt;ModuleName> directory and the required directories within it. </p> 
</div>


##Next

[Define your configuration files](required-configuration-files.html)
