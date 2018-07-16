---
group: config-guide
subgroup: 04_CLI
title: Export the configuration
menu_title: Export the configuration
menu_node:
level3_menu_node: level3child
level3_subgroup: cli-config-mgmt
menu_order: 251
version: 2.2
github_link: config-guide/cli/config-cli-subcommands-config-mgmt-export.md
functional_areas:
  - Configuration
  - System
  - Setup
---

In Magento 2.2 and later [pipeline deployment model]({{ page.baseurl }}/config-guide/deployment/pipeline/), you can maintain a consistent configuration across systems. After you configure settings in the Magento Admin on your development system, export those settings to configuration files using the following command:

    bin/magento app:config:dump

As a result of the command execution, the following configuration files are updated:

-   [`app/etc/config.php`](#app-etc-config-php)
-   [`app/etc/env.php`](#app-etc-env-php)

## `app/etc/config.php` {#app-etc-config-php}

This is the shared configuration file for all your Magento instances.
Include this in your source control so it can be shared between the development, build, and production systems.

See: [config.php reference]({{ page.baseurl }}/config-guide/prod/config-reference-configphp.html)

## `app/etc/env.php` {#app-etc-env-php}

This is the environment-specific configuration file.
It contains sensitive and system-specific settings for individual environments.

Do _not_ include this file in source control.

See: [env.php reference]({{ page.baseurl }}/config-guide/prod/config-reference-envphp.html)

### Sensitive or system-specific settings

To set the sensitive settings written to `env.php`, use the [`bin/magento config:sensitive:set`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-set.html) command.

Configuration values are specified as either sensitive or system-specific by referencing [`Magento\Config\Model\Config\TypePool`]({{ site.mage2200url }}app/code/Magento/Config/Model/Config/TypePool.php){:target="\_blank"} in the module's [`di.xml`]({{ page.baseurl }}/extension-dev-guide/configuration/sensitive-and-environment-settings.html#how-to-specify-values-as-sensitive-or-system-specific) file.
