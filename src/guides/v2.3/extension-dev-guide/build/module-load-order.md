---
group: php-developer-guide
subgroup: 03_Build
title: Component load order
menu_title: Component load order
menu_order: 7000
---

You may need to specify your component's dependency on other components or files from other components using your component's [composer.json]({{ page.baseurl }}/extension-dev-guide/build/create_component.html#add-composer-json). Further, you can specify a load order in your component's `module.xml` file using the `<sequence>` tag to ensure that needed files from other components are already loaded when your component loads.

`<sequence>` declares the list of components that must be loaded before the current component is loaded. It's used for loading different kind of files: configuration files, view files (including CSS, Less, and template files), or setup classes. Note that `<sequence>` does not affect the loading of regular classes (non-setup classes).
*Setup* classes are classes in the component that create or update [database schema](https://glossary.magento.com/database-schema) or data.

If you know that your component's logic depends on something in another component, then you should add this component to `require` in `composer.json` and `<sequence>` in `module.xml`.

You can check your module's load order from the `<magento_root>/app/etc/config.php` file after you've successfully set up Magento. This file is created dynamically at run time during set up.

 {:.bs-callout-info}
If you change the component load order using `<sequence>`, you must regenerate the component list in `config.php`; otherwise, the load order does not take effect. Currently, the only way to do this is to enable the component using [`magento module:enable`]({{ page.baseurl}}/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable), where `<module-list>` is the component or components to which you added `<sequence>`.

### Examples

Assume you have a component that needs a configuration file from another component:

__Component B__ introduces `gadgetlayout.xml`, which updates block `gadgetBlock` from __component A__. In this case, layout files from __component A__ should be loaded before __component B__, so you should specify that in __component B's__ `<sequence>` entry in [module](https://glossary.magento.com/module).xml. In other words, __component B__ is dependent on __component A__. That is to say:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Vendor_ComponentB" setup_version="0.0.1">
        <sequence>
        <!-- Vendor_ComponentB is dependent on Vendor_ComponentA: -->
            <module name="Vendor_ComponentA" />
        </sequence>
    </module>
</config>
```

For each particular scenario, files of the same type are loaded from different components taking into account the sequence information provided in each component's `module.xml` file.

In another scenario, let's say you want to load all of the [layout](https://glossary.magento.com/layout) files with the name `default.xml`. __Component A__ specifies __component B__ in `<sequence>`. The files load in the following order:

1. `component X/view/frontend/layout/default.xml`---Either we don't care about when component X loads or perhaps component B requires it to be loaded before it.
1. `component B/view/frontend/layout/default.xml`
1. `component A/view/frontend/layout/default.xml`---Loads after __component B__ because __component B__ is listed in __component A's__ `<sequence>` tag.
1. `component Z/view/frontend/layout/default.xml`---Either we don't care about the sequence for component Z or perhaps component Z requires component A files to be loaded before it.

There are no limitations---you can specify any valid component in `<sequence>`.

If you do specify a component in `<sequence>`, make sure that you have also added it to the `require` section in that component's `composer.json` file.

{:.bs-callout-info}
Take care when using `<sequence>` in multiple components because it's possible to define circular dependencies. If you do, Magento aborts the installation when it detects the circular dependency.

{:.ref-header}
Next

[Enable or disable your component]({{ page.baseurl }}/extension-dev-guide/build/enable-module.html)
