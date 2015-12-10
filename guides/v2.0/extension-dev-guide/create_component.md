---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: Create a component
menu_title: Create a component
menu_order: 7
github_link: extension-dev-guide/create_component.md
redirect_from: 
  - /guides/v1.0/extension-dev-guide/create_module.html
  - /guides/v2.0/extension-dev-guide/create_module.html
---
##{{page.menu_title}}

Now that you have [determined your component's initial file structure](module-file-structure.html), have an idea of the [configuration files](required-configuration-files.html) you&#8217;ll need, and you've [registered your component](component-registration.html), you can create the component.

<h2 id="add-component-xml">Add the component's <code>module.xml</code> file</h2>
Declare the component itself by adding a module.xml file in the `/etc` folder of your component.

A component declares itself (that is, defines its name and existence) in the `module.xml` file, located in the Magento install directory at `<ComponentName>/etc/`. 

The smallest working module.xml file would look something like this:

	<config>
       <module name="Vendor_ComponentName" setup_version="2.0.0"/>
	</config>

...where `name`  is the name of your component, and `setup_version` is the version of Magento the component uses. Both of these attributes are required.

##Add the components `composer.json` file

A sample follows:

{% highlight JSON %}

	{
    "name": "your-name/module-Acme",
    "description": "Test component for Magento 2",
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
    "autoload": {
        "files": [ "registration.php" ],
        "psr-4": {
            "Magento\\CatalogImportExport\\": ""
        }
    }
    }

{% endhighlight %}

where:

* `name`&mdash;is the name of your component.
* `description`&mdash;is a concise explanation of your component's purpose.
* `require`&mdash;lists any components your component depends on.
* `suggest`&mdash;lists soft dependencies. The component can operate without them, but if the components are active, this component might impact their functionality. `Suggest` does not affect component load order.
* `type`&mdash;determines what the Magento component type. Choose from *magento2-theme*, *magento2-language*, or *magento2-module*.
* `version`&mdash;lists the version of the component.
* `license`&mdash;lists applicable licenses that apply to your component.
* `autoload`&mdash;instructs composer to load the specified files.

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento does not currently support the <a href="https://getcomposer.org/doc/05-repositories.md#path" target="_blank"><code>path</code></a> repository.</p>
</div>

<!-- <div class="bs-callout bs-callout-info" id="info">
  <p>Take a look at a <a href="https://github.com/magento/magento2-samples/tree/master/sample-module-minimal"> sample module</a> created by the Magento Core Team. </p>
  <p>The team is creating a <a href="https://github.com/magento/magento2-samples"> collection of samples</a> to demonstrate technologies introduced in Magento 2. You can edit your Magento 2 <code>composer.json</code> file to declare a dependency upon this package of sample modules, and then run <code>composer update</code> to download them. Look for more sample modules as we build them.</p>
 </div> -->



##Next

[URN schema validation](XSD-XML-validation.html)







