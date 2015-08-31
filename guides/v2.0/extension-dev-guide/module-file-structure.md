---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: PHP developer guide
menu_title: Module File Structure
menu_order: 0
github_link: extension-dev-guide/module-file-structure.md

---
##{{page.menu_title}}



###Magento 2 Module File Structure


A typical file structure for a Magento 2 module:
<p><img src="{{ site.baseurl }}common/images/pdg-config-file-structure.png" width="300" alt="A filesystem view of a typical file structure"></p>


<h2 id="create-module-file-structure">Build the file structure</h2>
First, add a  &lt;ModuleName> directory for your module. Use a module name that is descriptive, and not too long.

Next, add a `/etc` directory within the `<ModuleName>` directory:

Example: 

	/ModuleName
	  /etc

The `/etc` directory is where the `module.xml` file resides, and this directory is required no matter how you plan to use the module. Additional directories may be needed under the `<ModuleName>` directory, depending on how you plan to use the module. 

We will look at the additional directories in the next topic, and link to some sample modules showing these directories and the configuration files in each. Typically these components are:

* Blocks
* Controllers
* Helpers
* Models

Along with the directories for those main components, you may need some additional directories for important things like configuration files, optional plugins, i18n files, APIs, and other files.

<div class="bs-callout bs-callout-info" id="info">
  <p>Be aware that the standard placement of the &lt;ModuleName> directory within the overall Magento file structure is <code>app/code/&lt;Vendor>/&lt;ModuleName>/etc/</code>. However, if you are creating a new module for distribution, you can just create the &lt;ModuleName> directory and the required directories within it. </p> 
</div>            