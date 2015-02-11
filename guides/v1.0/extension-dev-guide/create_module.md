---
layout: default
group: extension-dev-guide
subgroup: How To
title: Create a Module
menu_title: Create a Module
menu_order: 4
github_link: extension-dev-guide/create_a_module.md
---

<h2 id="create-module-overview">Overview</h2>

This topic covers the basic steps of creating a new module. Subsequent sections in this Developer's Guide explain how to verify your new module and how to use Composer to package and distribute the module.

(FROM CHUCK's description in MAGEDOC-1065 :
--Create a module 
--Add appropriate etc/XML files to setup/configure your module 
---This includes creating webapi.xml to turn on core APIs to be used along with oath v1 handshaking to your SAAS platform if desired 
--Create a service(s) 
---Optionally expose the service(s) methods as APIs via webapi.xml configuration 
---How a service should be written (all read methods in 1 class; all writes in another); can directly access models for performance 
--Create controllers that call services if needed 
--Create blocks/layout that use service if needed 
--Create EAV/models/tables if needed by service)

<h2 id="create-module-basics">Basic Pre-Requisites</h2>
Before you begin creating your new module, make sure that you have a working installation of Magento 2.0, and the Magento sytem requirements as explained at:

http://devdocs.magento.com/guides/v1.0/install-gde/system-requirements.html

Also, Magento recommends that you disable caching while performing the following steps. <Explain why.>

<h2 id="create-module-code-setup">Get started</h2>
The main steps to create a module are:

1. Build the file structure, with the appropriate "building block" directories
2. Create the module.xml file, with a namespace and name for the new module 
3. Create the required configuration files
4. Activate the new module by adding it to the `app/etc/config.php` file
5. In your browser, verify that the `index.html` file displays


<h3 id="create-module-file-structure">Build the file structure</h3>
First let's create the file structure, which is basically a set of directories (or folders) containing all of the components, references, and parts that the module will need. 

Typically these components are:

* Blocks
* Controllers
* Helpers
* Models

Along with the directories for those main compoenents, you will need at some additional directories for important things like configuration files, optional plugins, i18n files, APIs, and other files.

So a typical file structure might look like this:
INSERT IMAGE HERE

<h3 id="create-module-naming">Create the new module.xml file</h3>
Now let's create the module, in the /etc directory of the file structure you just created.

A module declares itself (i.e. defines its name and existence) in the `module.xml` file, located in the `<Magento install dir>/app/code/<Vendor>/<NewModuleName>/etc/`. 

A module should be named according to the Namespace_Module schema, where

* `Vendor` is a name of a module's vendor
* `ModuleName` is a name assigned to a module by its vendor

Minimal declaration sample:

<pre>
&lt;config>
    &lt;module name="Namespace_Module" schema_version="2.0.0">
    &lt;/module>
&lt;/config>
</pre>

<h3 id="create-module-config.xml">Create the module's configuration files</h3>

The module needs several configuration file that define which blocks, models, helpers, routes, etc. the module will use, and thus controls much about the module's appearance and behaviour.

* index.php
* Block: <block_name>.php
* routes.xml
* Template: <name>_index.xml
* Layout: <name>.phtml

<h4 id="create-module-index.php">Index.php configuration file</h4>

Create your Index.php file within the `app/code/<Vendor>/<ModuleName>/Controller/Index` directory. 

explain purpose/structure of this file... acts as the controller

<h4 id="create-module-block_name.php">block_name.php configuration file</h4>

Create your BlockName.php file within the `ap/code/<Vendor>/<ModuleName>/Controller/Index` directory.

explain purpose/structure of the block_name.php file

<h4 id="create-module-block_name.php">routes.xml configuration file</h4>

explain purpose/structure of the routes.xml file


<h3 id="create-module-view-assets">Create the view asset files</h3>

View assets, such as templates and layout files, are stored within the module's root directory, in one of three possible directories:

* `/adminhtml` (for assets that you want to display in the Magento Admin panel)
* `/base` (for assets that you want displayed in the _______)
* `/frontend` (for assets that you want displayed on your storefront UI)

Decide where you want your view assets to be placed...this depends on how you plan to display them. For example, if the layout will be shown in the frontend view area, then place the .phtml file in the `app/code/<Vendor>/<ModuleName>/view/frontend` directory. Or, if this layout will only be seen in the Magento Admin panel, then place the files in the 

Within each of the three areas in each view-directory of an area code, you will generally find three sub-directories: web for assets, templates for the *.phtml files and layout for the XML configuration files. 

**Reviewer, what is the "base" direcotry under app/code/Magento/<Module>/view sued for? Where would any view assets placed there be displayed?"** 

<h4 id="create-module-____.xml">____.xml configuration file</h4>

explain purpose/structure of the ___.xml file... this is the template file that includes the info about what router, controller and action the module contains

<h4 id="create-module-____.phtml">____.phtml configuration file</h4>




explain purpose/structure of the ___.phtml file... this is the template file that has the text to display on UI, like Success! or Hello World! 

<h3 id="create-module-activate.xml">Activate the new module</h3>

Finally, to activate the module you need to edit the `config.php` file (located in the `app/etc` directory) and add the new module to the array of all modules. When you add the module to the array, you will also need to set the "enable" flag to 1, for true.

<div class="bs-callout bs-callout-info" id="info">

  <p>Be aware that when working with Magento, it is more typical to use a Command Line Tool (CLI) to set the enable/disable flag, instead of manually editing the config.php file. For more information about the CLI tool, refer to ___________.
  </p>
</div>


<h3 id="create-module-launch">Open the index.html file</h3>




