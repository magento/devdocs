---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: Create a module
menu_title: Create a module
menu_order: 5
github_link: extension-dev-guide/create_module.md
redirect_from: /guides/v1.0/extension-dev-guide/create_module.html
---
##{{page.menu_title}}

Now that you have [determined your module&#8217;s initial file structure](module-file-structure.html), have an idea of the [configuration files](required-configuration-files.html) you&#8217;ll need, and you've [registered your module](component-registration.html), you can create the module.



##Add the module&#8217;s `module.xml` file
Declare the module itself by adding a module.xml file in the `/etc` folder of your module.

A module declares itself (i.e. defines its name and existence) in the `module.xml` file, located in the Magento install directory at `<ModuleName>/etc/`. 

The smallest working module.xml file would look something like this:

	<config>
       <module name="Vendor_ModuleName" setup_version="2.0.0"/>
	</config>

...where `name`  is the name of your module, and `setup_version` is the version of Magento the module uses. Both of these attributes are required.



##Add the module&#8217;s `composer.json` file


	{
    "name": "your-name/module-Acme",
    "autoload": {
        "psr-4": { "AcmeVendor\\BarComponent\\": "" },
        "files": [ "registration.php" ],
    "description": "Test module for Magento 2",
    "require": {
        "php": "~5.5.0|~5.6.0",
        "magento/module-store": "1.0.0-beta",
        "magento/module-catalog": "1.0.0-beta",
        "magento/module-catalog-inventory": "1.0.0-beta",
        "magento/module-ui": "self.version",
        "magento/magento-composer-installer": "*"
    },
    "suggest": {
      "magento/module-webapi": "1.0.0-beta"
    },
    "type": "magento2-module",
     "version": "1.0.0-beta",
    "license": [
        "OSL-3.0",
        "AFL-3.0"
    ],
    "extra": {
        "map": [
            [
                "*",
                "YourName/FooBar"
            ]
        ]
    }
}


where:

* `name` &#8212; is the name of your module.
* `description` &#8212; is a concise explanation of your module's purpose.
* `require` &#8212; lists any modules your module depends on.
* `suggest` &#8212; lists soft dependencies. The module can operate without them, but if the modules are active, this module may impact their functionality. `Suggest` does not impact module load order.

* `type` &#8212; determines what type of magento component your module is. Choose from *magento2-library*, *magento2-theme*, *magento2-language*, or *magento2-module*.
* `version` &#8212; lists the version of the module.
* `license` &#8212; lists applicable licenses that apply to your module.
* `extra.map` &#8212; gives the path for Magento&#8217;s Composer installer so it can marshall your component&#8217;s files to the appropriate locations under the main instance of Magento.



<div class="bs-callout bs-callout-info" id="info">
  <p>Take a look at a <a href="https://github.com/magento/magento2-samples/tree/master/sample-module-minimal"> sample module</a> created by the Magento Core Team. </p>
  <p>The team is creating a <a href="https://github.com/magento/magento2-samples"> collection of samples</a> to demonstrate technologies introduced in Magento 2. You can edit your Magento 2 <code>composer.json</code> file to declare a dependency upon this package of sample modules, and then run <code>composer update</code> to download them. Look for more sample modules as we build them.</p>
 </div>



##Next

[Module Load Order](module-load-order.html)







