---
group: configuration-guide
title: Magento's deployment configuration
functional_areas:
  - Configuration
  - System
  - Setup
---

## Purpose of the deployment configuration {#config-php-overview}

Magento's deployment configuration consists of the shared and system-specific configuration for your installation. Magento's deployment configuration is divided between [`app/etc/config.php`][config-php] and [`app/etc/env.php`][env-php].

*  `app/etc/config.php` is the _shared_ configuration file.
  This file contains the list of installed modules, themes, and language packages; and shared configuration settings.

  Check this file in to source control and use it in your development, staging, and production systems.

  As of the 2.2 release, the `app/etc/config.php` file is no longer an entry in the `.gitignore` file.
  This was done to facilitate [pipeline deployment][pipeline-deployment].

*  `app/etc/env.php` contains settings that are specific to the installation environment.

Together, `config.php` and `env.php` are referred to as Magento's _deployment configuration_ because they are created during installation and are required to start Magento.

{:.bs-callout-info}
The Magento 2 deployment configuration replaces `local.xml` in Magento 1.x.

Unlike other [module configuration files]({{ page.baseurl }}/config-guide/config/config-files.html), Magento's deployment configuration is loaded into memory when Magento initializes, is not merged with any other files, and cannot be extended. (`config.php` and `env.php` are merged with each other, however.)

## Details about the deployment configuration {#config-php-contents}
`config.php` and `env.php` are [PHP](https://glossary.magento.com/php) files that return a [multi-dimensional associative array](http://www.w3schools.com/php/php_arrays.asp), which is basically a hierarchical arrangement of configuration parameters and values.

On the top level of this array are *configuration segments*. A segment has arbitrary content (a scalar value or a nested array) distinguished by an arbitrary key---where both the key and its value are defined by the Magento framework.

[Magento\Framework\App\DeploymentConfig]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/DeploymentConfig.php) merely provides access to these sections but does not allow you to extend them.

On the next hierarchy level, items in each segment are ordered according to the [module](https://glossary.magento.com/module) sequence definition, which is obtained by merging all modules' configuration files, with the [exception](https://glossary.magento.com/exception) of disabled modules.

The following sections discusses the structure and contents of the deployment configuration---`config.php` and `env.php`.

*  [Manage installed modules](#config-php-contents-config-php)
*  [System-specific configuration]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-export.html#app-etc-env-php)

## Manage installed modules {#config-php-contents-config-php}
`config.php` lists your installed modules. Magento provides both command-line and web-based utilities to manage modules (install, uninstall, enable, disable, or upgrade).

Examples:

*  Uninstall components: [`bin/magento setup:uninstall`]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html)
*  Check status of components: [`bin/magento module:status`]({{ page.baseurl }}/reference/cli/magento.html#modulestatus)
*  Enable or disable components: [`bin/magento module:disable`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable), [`bin/magento module:enable`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable).

`config.php` snippet:

```php
return array (
  'modules' =>
  array (
    'Magento_Core' => 1,
    'Magento_Store' => 1,
    'Magento_Theme' => 1,
    'Magento_Authorization' => 1,
    'Magento_Directory' => 1,
    'Magento_Backend' => 1,
    'Magento_Backup' => 1,
    'Magento_Eav' => 1,
    'Magento_Customer' => 1,
...
  ),
);
```

The value `1` or `0` indicates whether a module is enabled or disabled.

Disabled modules are not recognized by the Magento application; in other words, they don't participate in merging configuration, in dependency injection, events, plug-ins, and so on. Disabled modules do not modify the [storefront](https://glossary.magento.com/storefront) or [Admin](https://glossary.magento.com/admin) and don't affect routing.

The only practical difference of a module being disabled and being completely absent in the code base is that a disabled module is found by the autoloader, enabling its classes and constants to be reused in other code.

## Related topic

[Module configuration files]({{ page.baseurl }}/config-guide/config/config-files.html)

[config-php]: {{ page.baseurl }}/config-guide/prod/config-reference-configphp.html
[env-php]: {{ page.baseurl }}/config-guide/prod/config-reference-envphp.html
[pipeline-deployment]: {{ page.baseurl }}/config-guide/deployment/
