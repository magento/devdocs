---
group: php-developer-guide
title: Name your component
---

You give a name to your component in its `composer.json` and `module.xml` files. These files also contain other required configuration parameters, such as the module's schema version.

## Prerequisites {#prereq}

Before you continue, make sure you have completed all of the following tasks:

*  Create a [file structure]({{page.baseurl}}/extension-dev-guide/build/module-file-structure.html).
*  Create the [configuration files]({{page.baseurl}}/extension-dev-guide/build/required-configuration-files.html) you'll need.
*  [Register]({{page.baseurl}}/extension-dev-guide/build/component-registration.html) your component.

## Add the component's `module.xml` file {#add-component-xml}

Declare the component itself by adding a `module.xml` file in the `/etc` folder of your component.

A component declares itself (that is, defines its name and existence) in the `module.xml` file, located in the Magento install directory at `<ComponentName>/etc/`.

The smallest working `module.xml` file would look something like this:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
        <module name="Vendor_ComponentName" setup_version="2.0.0"/>
</config>
```

Here `name`  is the name of your component, and `setup_version` is your module's [database schema](https://glossary.magento.com/database-schema) version. Both of these attributes are required.

Avoid using "Ui" for your custom module name because the <code>%Vendor%_Ui</code> notation, required when specifying paths, might cause issues.

## Add the component's `composer.json` file {#add-composer-json}
`composer.json` provides a component name and also specifies component dependencies.

In addition, the [Component Manager]({{ page.baseurl }}/comp-mgr/module-man/compman-start.html) looks for a `composer.json` in a component's root directory and can perform actions on the component and its dependencies:

*  If a component has `composer.json` *and* the component was installed using [Composer](https://glossary.magento.com/composer) (including from packagist, the Magento Marketplace, or other source), the Component Manager can update, uninstall, enable, or disable the component.
*  If the component has `composer.json` but was *not* installed using Composer (for example, custom code a developer wrote), Component Manager can still enable or disable the component.
*  We strongly recommend you include `composer.json` in your component's root directory whether or not you intend to distribute it to other Magento merchants.

### Example `composer.json` file

```json
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
```

In this example:

*  `name` is the name of your component.
*  `description` is a concise explanation of your component's purpose.
*  `require` lists any components your component depends on.
*  `suggest` lists soft dependencies. The component can operate without them, but if the components are active, this component might impact their functionality. `Suggest` does not affect component load order.
*  `type` determines what the [Magento component](https://glossary.magento.com/magento-component) type. Choose from *magento2-theme*, *magento2-language*, or *magento2-module*.
*  `version` lists the version of the component.
*  `license` lists applicable licenses that apply to your component.
*  `autoload` instructs Composer to load the specified files.

 {:.bs-callout-info}
Magento does not currently support the [`path`](https://getcomposer.org/doc/05-repositories.md#path) repository.

{:.ref-header}
Next step

[Component load order]({{ page.baseurl }}/extension-dev-guide/build/module-load-order.html)
