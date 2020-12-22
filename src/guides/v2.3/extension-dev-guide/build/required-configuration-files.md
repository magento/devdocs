---
group: php-developer-guide
subgroup: 03_Build
title: Define your configuration files
---

Each Magento 2 [module](https://glossary.magento.com/module) has its own set of configuration files, gathered into the module's `etc` directory.

 {:.bs-callout-info}
Unlike Magento 1, there is no monolithic configuration file in Magento 2.

{% include php-dev/component-root-2.3.md %}

## Use /etc for your configuration files

Magento 2 looks for configuration information for each module in that module's `etc` directory. Depending on the needs of your module, you might have the following configuration files at the top level of your module's `etc` directory:

*  `acl.xml`
*  `config.xml`
*  `di.xml`
*  `module.xml`
*  `webapi.xml`

 {:.bs-callout-info}
Additions you make to those configuration files are applied *globally* to your module.

In addition to those files, a Magento 2 module also has nested configuration directories in the `etc` directory for any required administration html, frontend, API REST, or API SOAP specific configuration. Additions you make to files in these directories override the settings in the global configuration files for the respective functionality only. That is, if you add a `config.xml` file to `etc/frontend`, the settings you make in that file overrides the settings in `etc/config.xml` for [storefront](https://glossary.magento.com/storefront) functionality *only*.

*  `<your module root dir>/etc/adminhtml/`
*  `<your module root dir>/etc/frontend/`
*  `<your module root dir>/etc/webapi_rest/`
*  `<your module root dir>/etc/webapi_soap/`

### Configuration files

*  Configuration files that are in the top level of that module's `etc` directory are global to that component.
*  Configuration files placed in subdirectories (`adminhtml`, `frontend`, `webapi_rest`, `webapi_soap`) apply only to those respective functional areas.

### Tailor your configuration files for what your module does

The exact set of configuration files required for your module depends on what your new module does. The required configuration files depend on how you plan to use the module: will the module be manifested on the storefront UI, or in the [Magento Admin](https://glossary.magento.com/magento-admin) panel, or as a [backend](https://glossary.magento.com/backend) [extension](https://glossary.magento.com/extension) that makes a service call? Or all of the above. For example, if your module performs a function in the Admin, you should add any necessary configuration files for those functions to `etc/adminhtml/`, like:

*  `<your module root dir>/etc/adminhtml/di.xml`
*  `<your module root dir>/etc/adminhtml/routes.xml`

Similarly, if your module changes the UI, you should add the needed configuration files to `~/etc/frontend/`. For example:

*  `<your module root dir>/etc/frontend/di.xml`
*  `<your module root dir>/etc/frontend/page_types.xml`

If the module is a service that may call an API, or does some other work that is not manifested in the UI you should add any needed configuration files in the REST and/or SOAP webapi configuration directories, like this:

*  `<your module root dir>/etc/webapi_rest/di.xml`
*  `<your module root dir>/etc/webapi_soap/di.xml`

Keep in mind that you might be able to handle your module's configuration solely with configuration files at the top level of your module's `etc` directory, but the nested directory is a useful way to keep the configuration neatly compartmentalized.

#### Next

[Create your component file structure]({{ page.baseurl }}/extension-dev-guide/build/module-file-structure.html)
