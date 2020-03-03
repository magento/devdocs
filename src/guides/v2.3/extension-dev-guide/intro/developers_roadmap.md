---
group: php-developer-guide
subgroup: 01_Introduction
title: Developer roadmap
menu_title: Developer roadmap
menu_order: 2
---

This topic introduces the high-level workflow for a developer who wants to create or customize the Magento application. Developers can also package and distribute their customizations to merchants.

To satisfy the minimum required elements for creating or customizing your Magento application:

*  [Declare component dependencies]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html) in `composer.json`.
##### Example: `composer.json` file.
```json
{
    "name": "magento/module-config",
    "description": "N/A",
    "config": {
        "sort-packages": true
    },
    "require": {
        "php": "~7.1.3||~7.2.0",
        "magento/framework": "102.0.*",
        "magento/module-backend": "101.0.*",
        "magento/module-cron": "100.3.*",
        "magento/module-deploy": "100.3.*",
        "magento/module-directory": "100.3.*",
        "magento/module-email": "101.0.*",
        "magento/module-media-storage": "100.3.*",
        "magento/module-store": "101.0.*"
    },
    "type": "magento2-module",
    "license": [
        "OSL-3.0",
        "AFL-3.0"
    ],
    "autoload": {
        "files": [
            "registration.php"
        ],
        "psr-4": {
            "Magento\\Config\\": ""
        }
    },
    "version": "101.1.2"
}
```
   {:.bs-callout-tip}
   While you can manage dependencies on your own, it is a recommended and strongly encouraged best practice to use the `composer.json` file.

*  [Register]({{ page.baseurl }}/extension-dev-guide/build/component-registration.html) the component using the `registration.php` file.
##### Example: `registration.php` file.
```php
<?php
use \Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::MODULE, 'Magento_Config', __DIR__);
```

*  Use these component-specific XML definition files:
   *  Modules: [`module.xml`]({{ page.baseurl }}/extension-dev-guide/build/create_component.html)
   ##### Example: `module.xml` file.
```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Magento_Config">
        <sequence>
            <module name="Magento_Store"/>
        </sequence>
    </module>
</config>
```

   *  Themes: [`theme.xml`]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html#fedg_create_theme_how-to_declare)
   ##### Example: `theme.xml` file.
```xml
<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
    <title>Default</title>
    <version>0.1.0</version>
</theme>
```

   *  Language packages: [`language.xml`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-pack-meta-xml)
   ##### Example: `language.xml` file.
```xml
<language xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/Language/package.xsd">
    <code>en_US</code>
    <vendor>first</vendor>
    <package>en_us</package>
    <sort_order>0</sort_order>
    <use package="en_gb" vendor="second"/>
</language>
```

*  Distribute your component:
   *  [Package your component]({{ page.baseurl }}/extension-dev-guide/package/package_module.html) in `.zip` format.
   *  If you upload the component to Magento Marketplace, it should be less than 30MB in size.
