---
layout: default
group: extension-dev-guide
subgroup: How To
title: Create a Module
menu_title: Create a Module
menu_order: 4
github_link: extension-dev-guide/create_module.md
---

<h2 id="create-module-overview">Overview</h2>

This topic covers the basic steps of creating a new module. Subsequent sections in this Developer's Guide explain how to verify your new module and how to use Composer to package and distribute the module.

<h2 id="create-module-basics">Basic Pre-Requisites</h2>
Before you begin creating your new module, make sure that you have a working installation of Magento 2.0, and the Magento [System Requirements](http://://devdocs.magento.com/guides/v1.0/install-gde/system-requirements.html>System Requirements).

Also, Magento recommends that you disable caching while performing the following steps. 

<h2 id="create-module-code-setup">Get started</h2>
The main steps to create a module are:

1. Build the file structure for the module, with the appropriate "building block" directories
2. Create the `module.xml` file, with a namespace and name for the new module 

In subsequent topics, we will discuss which configuration files are needed for your new module. The required configuration files depend on how you plan to use the module: will it be manifested on the storefront UI, or in the Magento Admin panel, or as a backend extension that makes a service call?


<h2 id="create-module-file-structure">Build the file structure</h2>
First let's create the &lt;ModuleName> directory. Use a module name that is descriptive, and not too long.

Next, you can create the /etc directory, within the &lt;ModuleName> directory:

Example: 

	<ModuleName>
		/etc

The /etc directory is where the `module.xml` file resides, and this directory is required no matter how you plan to use the module. Additional directories may be needed under the &lt;ModuleName> directory, depending on how you plan to use the module. 

We will look at the additional directories in the next topic, and link to some sample modules showing these directories and the configuration files in each. Typically these components are:

* Blocks
* Controllers
* Helpers
* Models

Along with the directories for those main components, you may need some additional directories for important things like configuration files, optional plugins, i18n files, APIs, and other files.

<div class="bs-callout bs-callout-info" id="info">
                <p>Be aware that the standard placement of the &lt;ModuleName> directory within the overall Magento file structure is <code>app/code/&lt;Vendor>/&lt;ModuleName>/etc/</code>. However, if you are creating a new module for distribution, you can just create the &lt;ModuleName> directory and the required directories within it. </p> 
</div>                


<h2 id="create-module-naming">Create the new module.xml file</h2>
Now let's create the module itself, in the /etc directory of the module you just created.

A module declares itself (i.e. defines its name and existence) in the `module.xml` file, located in the Magento install directory at `<NewModuleName>/etc/`. 

Minimal declaration sample:

<pre>
&lt;config>
    &lt;module name="Namespace_Module" schema_version="2.0.0">
    &lt;/module>
&lt;/config>
</pre>

<div class="bs-callout bs-callout-info" id="info">
                  <p>Take a look at a <a href="https://github.corp.ebay.com/magento2/magento2-samples"> sample module</a> created by the Magento Core Team. </p>
                  <p>The team is creating a collection of samples to demonstrate technologies introduced in Magento 2. You can edit your Magneto 2 <code>composer.json</code> file to declare a dependency upon this package of sample modules, and then run <code>composer update</code> to download them.
                  </p>
               </div>






