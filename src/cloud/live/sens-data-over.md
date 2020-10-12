---
group: cloud-guide
title: Configuration management for store settings
functional_areas:
  - Cloud
  - Deploy
---

Configuration management provides a way to deploy across your environments with minimal downtime using [Pipeline deployment][]. {{site.data.var.ece}} provides the build server, build and deploy scripts, and deployment environments.

{:.bs-callout-info}
You must have [environment-level, Admin role privileges][admin] to complete configuration management tasks.

## Consistent configuration

The database contains default configurations for your Magento store. When you update configurations in the {{site.data.var.ece}} environments using the Magento Admin panel, your configuration changes apply to the `app/etc/config.php` file. You can then use this file to manage and synchronize the Magento application configuration for your local environment and across each Cloud environment.

Use the `{{site.data.var.ct}}` command in the remote environment to generate a `config.php` file:

```bash
./vendor/bin/ece-tools config:dump
```

The data "dumped" to the `app/etc/config.php` file becomes _locked_, which means the corresponding field in the Magento Admin panel becomes **read-only**. The `config.php` file includes only the settings that you configure. It does not lock the default values. Locking only the values you update also ensures that all extensions used in the Staging and Production environments do not break due to read-only configurations, especially Fastly.

### Configuration data

System settings refer to the configurations in the Magento Admin **Stores** > **Settings** > **Configuration** section.

The `app/etc/config.php` file includes system configuration settings for stores, websites, modules or extensions, static file optimization, and system values related to static content deployment.

The `config.php` file includes the following settings and configuration values:

-  Configured values for settings entered through the Magento Admin store configuration
-  Extension list
-  Scopes value for static content deployment (the default SCD strategy is [quick][])

{:.bs-callout-warning}
The `ece-tools config:dump` command does not retrieve detailed configurations for modules, such as B2B. If you need a comprehensive configuration dump, use the [Magento `app:config:dump` command][commerce-dump], but be aware that this command locks configuration values in a read-only state.

{:.bs-callout-info}
Because {{site.data.var.ece}} supports only the Magento production and maintenance modes, the **Advanced** > **Developer** section is not accessible in the Admin panel. You can configure additional settings using [environment variables][env-yaml].

### Sensitive data

Sensitive values are _not_ stored in the `app/etc/config.php` file. Any sensitive configurations export to the `app/etc/config.php` file during the `config:dump` process. We recommend using environment variables to store sensitive values. For an example, see [Add Magento authentication keys][auth].

### SCD performance

Depending on the size of your store, you may have a large amount of static content files to deploy. Normally, static content deploys during the deploy phase when Magento is in Maintenance mode. The most optimal configuration is to generate static content during the build phase. See [Choosing a deploy strategy][scd].

{:.bs-callout-info}
Before deploying static files, the build and deploy phases compress static content using GZIP. Compressing static files reduces server loads and increases site performance. Refer to [Magento build options]({{ site.baseurl }}/cloud/env/variables-build.html) to learn about customizing or disabling file compression.

## Configuration logic flow

All system configurations are set during build and deploy according to the following override scheme:

1. If an environment variable exists, use the custom configuration and ignore the default configuration.
1. If an environment variable does not exist, use the configuration from a `MAGENTO_CLOUD_RELATIONSHIPS` name-value pair in the [`.magento.app.yaml` file][app-yaml]. Ignore the default configuration.
1. If an environment variable does not exist and `MAGENTO_CLOUD_RELATIONSHIPS` does not contain a name-value pair, remove all customized configuration and use the values from the default configuration.

Priority|Configuration<br/>Method|Description
---|---|---
1.|Cloud Admin UI|Values added via the Cloud Admin in the Variables tab of the environment configuration. This method is advised where configurations are secure and/or specific to the environment and need to be locked (cannot be changed in Magento Admin).
2.|`.magento.app.yaml`|Values added here also lock out the value in Magento Admin. This method is useful when values need to be consistent across all environments. **Should not** be used for sensitive values.
3.|`app/etc/env.php`|Values stored here are added by using the Magento `app:config:dump` command. [System specific]({{ site.baseurl }}/guides/v2.4/config-guide/cli/config-cli-subcommands-config-mgmt-export.html#sensitive-or-system-specific-settings) values are added to `env.php`. Sensitive settings can be added to `env.php` using the `magento config:sensitive:set command`. This file is **not** in source control.
4.|`app/etc/config.php`|Values stored here are added by using the Magento `app:config:dump` command. Shared configuration values are added to `config.php` (see above for `env.php`).
5.|Database|Value stored here are added by setting configurations in the Magento Admin UI. Note that configurations set by any of the preceding methods will be locked (greyed out) in Admin UI and will not be changeable
6.|`config.xml`|Many configurations have default values set in a module's `config.xml`. If Magento cannot find any value set by the preceding methods, it will fallback to the default value, if set.

## Procedure to manage your settings

The following illustrates a high-level overview of this process:

![Overview of Starter configuration management]({{ site.baseurl }}/common/images/cloud/cloud_configmgmt-starter-2-2.png)

{:.procedure}
To configure your store and generate a configuration file:

1. Complete all configurations for your stores in the Admin panel for one of the environments:

   -  Starter: An active development branch
   -  Pro: Integration environment

   These configurations do not include the actual products unless you plan on dumping the database from this environment to Staging and Production environments. Typically, development databases do not include your full store data.

1. On your local workstation, change to the Cloud project root directory.

1. Use SSH to log in to the remote environment and generate the `/app/etc/config.php` file.

   ```bash
   ssh <SSH-URL> "./vendor/bin/ece-tools config:dump"
   ```

{:.procedure}
To transfer the configuration file and apply to another environment:

1. On your local workstation, change to the Cloud project root directory.

1. Transfer the `/app/etc/config.php` file to your local project folder using `rsync` or `scp`.

   ```bash
   rsync <SSH-URL>:app/etc/config.php ./app/etc/config.php
   ```

1. Add, commit, and push code changes to update a remote environment.

   ```bash
   git add app/etc/config.php
   ```

   ```bash
   git commit -m "Add system-specific configuration"
   ```

   ```bash
   git push origin <branch-name>
   ```

After the deployment is complete, log in to the Magento Admin panel for the updated environment to verify the settings. Continue to merge any additional configurations to the Staging and Production environments, as needed.

## Update configurations

When you modify your environment through the Magento Admin panel and run the command again, new configurations are appended to the code in the `config.php` file.

{:.bs-callout-warning}
While you can manually edit the `config.php` file in the Staging and Production environments, we do **not** recommend it. The file helps to keep all configurations consistent across all environments. Never delete the `config.php` file to rebuild it. Deleting the file can remove specific configurations and settings required for build and deploy processes.

## Migrate older configurations

If you upgrade to {{site.data.var.ece}} 2.2 or later, you may want to migrate settings from the `config.local.php` file to your new `config.php` file. If the configuration settings in your Magento Admin panel match the contents of the file, follow the instructions to generate and add the `config.php` file.

If they differ, you can append content from the `config.local.php` file to your new `config.php` file:

1. Follow instructions to generate the `config.php` file.

1. Open the `config.php` file and delete the last line.

1. Open the `config.local.php` file and copy the contents.

1. Paste the contents into the `config.php` file, save, and complete adding it to Git.

1. Deploy across your environments.

You only need to complete this migration once. When you need to update the file, always update the `config.php` file.

## Change locales

You can change your store locales without following a complex configuration import and export process, _if_ you have [SCD_ON_DEMAND]({{ site.baseurl }}/cloud/env/variables-global.html#scd_on_demand) enabled. You can update the locales using the Admin panel.

You can add another locale to the Staging or Production environment by enabling `SCD_ON_DEMAND` in an Integration branch, generate an updated `config.php` file with the new locale information, and copy the configuration file to the target environment.

{:.bs-callout-warning}
This process **overwrites** the store configuration; only do the following if the environments contain the same stores.

1. In the Integration environment, enable the `SCD_ON_DEMAND` variable using the [`.magento.env.yaml` file][env-yaml].

1. Add the necessary locales using your Admin panel.

1. Use SSH to log in to the remote environment and generate the `/app/etc/config.php` file containing all locales.

   ```bash
   ssh <SSH-URL> "./vendor/bin/ece-tools config:dump"
   ```

1. Copy the new configuration file from your Integration environment to your local environment directory.

   ```bash
   rsync <SSH-URL>:app/etc/config.php ./app/etc/config.php
   ```

1. Add, commit, and push code changes to update a remote environment.

<!-- link definitions -->

[admin]: {{ site.baseurl }}/cloud/project/user-admin.html
[auth]: {{ site.baseurl }}/cloud/setup/first-time-setup-import-prepare.html#auth-json
[app-yaml]: {{ site.baseurl }}/cloud/project/magento-app.html
[commerce-dump]: {{ site.baseurl }}/guides/v2.3/reference/cli/magento-commerce.html#appconfigdump
[env-yaml]: {{ site.baseurl }}/cloud/project/magento-env-yaml.html
[export]: {{ site.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-export.html
[Optimize deployment]: {{ site.baseurl }}/cloud/deploy/optimize-cloud-deployment.html
[Pipeline deployment]: {{ site.baseurl }}/guides/v2.3/config-guide/deployment/pipeline/technical-details.html
[quick]: {{ site.baseurl }}/cloud/env/variables-build.html#scd_strategy
[scd]: {{ site.baseurl }}/cloud/deploy/static-content-deployment.html