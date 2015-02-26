---
layout: default
group: extension-dev-guide
subgroup: How To
title: Developer's Roadmap
menu_title: Developer's Roadmap
menu_order: 3
github_link: extension-dev-guide/create_module.md

---

<h2 id="create-module-overview">Overview</h2>

intro
 

<h2 id="create-module-code-setup">Get started</h2>
The main steps to create a module are:

1. text
2. text



<h2 id="create-module-file-structure">title here</h2>
First let's create the &lt;ModuleName> directory. Use a module name that is descriptive, and not too long.

Next, you can create the `/etc` directory within the `<ModuleName>` directory:

Example: 

	<ModuleName>
	  /etc

text here

* Blocks
* Controllers
* Helpers
* Models

text here

<div class="bs-callout bs-callout-info" id="info">
  <p>NOTE here. </p> 
</div>                


<h2 id="create-module-naming">name here</h2>
Now let's create the module itself, in the /etc directory of the module you just created.

A module declares itself (i.e. defines its name and existence) in the `module.xml` file, located in the Magento install directory at `<ModuleName>/etc/`. 

Minimal declaration sample:

	<config>
       <module name="Vendor_ModuleName" schema_version="2.0.0">
       </module>
	</config>

<div class="bs-callout bs-callout-info" id="info">
  <p>Take a look at a <a href="https://github.com/magento/magento2-samples/tree/master/m2-sample-minimal"> sample module</a> created by the Magento Core Team. </p>
  <p>The team is creating a <a href="https://github.com/magento/magento2-samples"> collection of samples</a> to demonstrate technologies introduced in Magento 2. You can edit your Magento 2 <code>composer.json</code> file to declare a dependency upon this package of sample modules, and then run <code>composer update</code> to download them. Look for more sample modules as we build them.</p>
 </div>
