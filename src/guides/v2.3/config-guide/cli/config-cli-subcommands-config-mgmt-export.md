---
group: configuration-guide
title: Export the configuration
functional_areas:
  - Configuration
  - System
  - Setup
---

In Magento 2.2 and later [pipeline deployment model]({{ page.baseurl }}/config-guide/deployment/pipeline/), you can maintain a consistent configuration across systems. After you configure settings in the Magento Admin on your development system, export those settings to configuration files using the following command:

```bash
bin/magento app:config:dump {config-types}
```

_config_types_ is a space-separated list of config types to dump. Available types include `scopes`, `system`, `themes`, and `i18n`. If no config types are specified, the command dumps all system configuration information.

The following example dumps scopes and themes only:

 ```bash
bin/magento app:config:dump scopes themes
```

As a result of the command execution, the following configuration files are updated:

-  [`app/etc/config.php`](#app-etc-config-php)
-  [`app/etc/env.php`](#app-etc-env-php)

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

Configuration values are specified as either sensitive or system-specific by referencing [`Magento\Config\Model\Config\TypePool`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Config/Model/Config/TypePool.php) in the module's [`di.xml`]({{ page.baseurl }}/extension-dev-guide/configuration/sensitive-and-environment-settings.html#how-to-specify-values-as-sensitive-or-system-specific) file.

To export additional system settings when using `config_types`, consider using the [`bin/magento config:set`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-set.html#config-cli-config-set) command.
