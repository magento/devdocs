---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: PHP developer guide
menu_title: Create a module
menu_order: 2
github_link: extension-dev-guide/create_module.md
redirect_from: /guides/v1.0/extension-dev-guide/create_module.html
---
##{{page.menu_title}}

This topic covers the basic steps of creating a new module. Subsequent sections in this Developer&#8217;s Guide explain how to verify your new module and how to use Composer to package and distribute the module.

<h2 id="create-module-basics">Basic Pre-Requisites</h2>
Before you begin creating your new module, make sure that you have a working installation of Magento 2.0, and the Magento [System Requirements]({{ site.gdeurl }}install-gde/system-requirements.html).

Also, Magento recommends that you disable caching while performing the following steps. 

<h2 id="create-module-code-setup">Get started</h2>
The main steps to create a module are:

1. Build the file structure for the module, with the appropriate "building block" directories
2. Create the `module.xml` file, with a namespace and name for the new module 
3. Install the module

In subsequent topics, we will discuss which configuration files are needed for your new module. The required configuration files depend on how you plan to use the module: will it be manifested on the storefront UI, or in the Magento Admin panel, or as a backend extension that makes a service call?


    


<h2 id="create-module-naming">Create the module&#8217;s module.xml file</h2>
Now let's declare the module itself by adding a module.xml file in the `/etc` directory of the module you just created.

A module declares itself (i.e. defines its name and existence) in the `module.xml` file, located in the Magento install directory at `<ModuleName>/etc/`. 

Minimal declaration sample:

	<config>
       <module name="Vendor_ModuleName" setup_version="2.0.0"/>
	</config>

<div class="bs-callout bs-callout-info" id="info">
  <p>Take a look at a <a href="https://github.com/magento/magento2-samples/tree/master/sample-module-minimal"> sample module</a> created by the Magento Core Team. </p>
  <p>The team is creating a <a href="https://github.com/magento/magento2-samples"> collection of samples</a> to demonstrate technologies introduced in Magento 2. You can edit your Magento 2 <code>composer.json</code> file to declare a dependency upon this package of sample modules, and then run <code>composer update</code> to download them. Look for more sample modules as we build them!</p>
 </div>

##Create the 


<h2 id="install-module">Install Module</h2>
The last step is to install the module.
 
 1. Disable the Cache under System->Cache Management
 2. In base directory run bin/magento setup:upgrade
 3. Check under Stores->Configuration->Advanced->Advanced that the module is present
 
Your module is now installed.
