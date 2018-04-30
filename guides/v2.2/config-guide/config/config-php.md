---
layout: default
group: config-guide
subgroup: 07_conf
title: Magento's deployment configuration
menu_title: Magento's deployment configuration
menu_order: 1
version: 2.2
github_link: config-guide/config/config-php.md
functional_areas:
  - Configuration
  - System
  - Setup
---

## Purpose of the deployment configuration {#config-php-overview}

Magento's deployment configuration consists of the shared and system-specific configuration for your installation. Magento's deployment configuration is divided between [`app/etc/config.php`][config-php] and [`app/etc/env.php`][env-php].

* `app/etc/config.php` is the _shared_ configuration file.
  This file contains the list of installed modules, themes, and language packages; and shared configuration settings.

  Check this file in to source control and use it in your development, staging, and production systems.

  As of the 2.2 release, the `app/etc/config.php` file is no longer an entry in the `.gitignore` file.
  This was done to facilitate [pipeline deployment][pipeline-deployment].

* `app/etc/env.php` contains settings that are specific to the installation environment.

Together, `config.php` and `env.php` are referred to as Magento's _deployment configuration_ because they are created during installation and are required to start Magento.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The Magento 2 deployment configuration replaces `local.xml` in Magento 1.x.
</div>

Unlike other [module configuration files]({{page.baseurl}}/config-guide/config/config-files.html), Magento's deployment configuration is loaded into memory when Magento initializes, is not merged with any other files, and cannot be extended. (`config.php` and `env.php` are merged with each other, however.)

## Details about the deployment configuration {#config-php-contents}
`config.php` and `env.php` are {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} files that return a <a href="http://www.w3schools.com/php/php_arrays.asp" target="_blank">multi-dimensional associative array</a>, which is basically a hierarchical arrangement of configuration parameters and values.

On the top level of this array are *configuration segments*. A segment has arbitrary content (a scalar value or a nested array) distinguished by an arbitrary key&mdash;where both the key and its value are defined by the Magento framework.

<a href="{{ site.mage2200url }}lib/internal/Magento/Framework/App/DeploymentConfig.php" target="_blank">Magento\Framework\App\DeploymentConfig</a> merely provides access to these sections but does not allow you to extend them.

On the next hierarchy level, items in each segment are ordered according to the {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} sequence definition, which is obtained by merging all modules' configuration files, with the {% glossarytooltip 53da11f1-d0b8-4a7e-b078-1e099462b409 %}exception{% endglossarytooltip %} of disabled modules.

The following sections discusses the structure and contents of the deployment configuration&mdash;`config.php` and `env.php`.

* <a href="#config-php-contents-config-php">Manage installed modules</a>
* <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-config-mgmt-export.html#app-etc-env-php">System-specific configuration</a>

## Manage installed modules {#config-php-contents-config-php}
`config.php` lists your installed modules. Magento provides both command-line and web-based utilities to manage modules (install, uninstall, enable, disable, or upgrade).

Examples:

* Uninstall components: <a href="{{page.baseurl}}/install-gde/install/cli/install-cli-uninstall.html">bin/magento setup:uninstall</a>
* Enable or disable components: <a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable">bin/magento module:enable</a>, <a href="{{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable">bin/magento module:disable</a>.
* [Component Manager]({{page.baseurl}}/comp-mgr/module-man/compman-start.html)
* [System Upgrade]({{page.baseurl}}/comp-mgr/upgrader/upgrade-start.html)

`config.php` snippet:

{% highlight php startinline=true %}
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
{% endhighlight %}

The value `1` or `0` indicates whether a module is enabled or disabled.

Disabled modules are not recognized by the Magento application; in other words, they don't participate in merging configuration, in dependency injection, events, plug-ins, and so on. Disabled modules do not modify the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} or {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} and don't affect routing.

The only practical difference of a module being disabled and being completely absent in the code base is that a disabled module is found by the autoloader, enabling its classes and constants to be reused in other code.

## Related topic
<a href="{{page.baseurl}}/config-guide/config/config-files.html">Module configuration files</a>

[config-php]: {{page.baseurl}}/config-guide/prod/config-reference-configphp.html
[env-php]: {{page.baseurl}}/config-guide/prod/config-reference-envphp.html
[pipeline-deployment]: {{page.baseurl}}/config-guide/deployment/
