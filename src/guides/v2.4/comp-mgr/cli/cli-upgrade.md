---
group: software-update-guide
title: Upgrade Commerce
functional_areas:
  - Upgrade
---

<!-- Topic variables
{% capture ce %}{{site.data.var.ce}}{% endcapture %}
{% capture ee %}{{site.data.var.ee}}{% endcapture %}
-->

You can upgrade your Magento application from the command line if you installed the software by:

-  Downloading the [metapackage][] using `composer create-project`.
-  Installing the compressed archive.

{:.bs-callout-info}
Do not use this method to upgrade if you cloned the Magento 2 GitHub repository. Instead, see [Update Magento][] for upgrade instructions.

The following instructions show you how to upgrade Magento using Composer. Magento 2.4.2 introduced support for Composer 2. If you are attempting to upgrade from Magento <2.4.1, you must first upgrade to a version of Magento that is compatible with Composer 2 (for example, 2.4.2) using Composer 1 _before_ upgrading to Composer 2 for Magento >2.4.2 upgrades. In addition, you must be running a [supported version]({{page.baseurl}}/install-gde/system-requirements.html) of PHP.

{:.bs-callout-warning}
The procedure for upgrading {{site.data.var.ce}} and {{site.data.var.ee}} has changed. You must install a new version of the `magento/composer-root-update-plugin` package. In addition, the commands for upgrading have changed from `composer require magento/<package_name>` to `composer require-commerce magento/<package_name>`.

## Before you begin {#prerequisites}

Complete the following prerequisites to prepare your environment before starting the upgrade process:

-  **Determine whether your current catalog search engine is supported**-Avoid significant upgrade errors by ensuring your search engine complies with 2.4 requirements. See [Check the catalog search engine] for more details.
-  **Complete the Update and upgrade checklist**—To avoid possible errors during installation or upgrading, complete the [Update and upgrade checklist].
-  **Set the `pub/` directory root**—See [Modify docroot to improve security][] for more details.
-  **Check PHP and environment settings**—Verify that your PHP and other environment settings are compatible with the [system requirements].
-  **Switch to maintenance mode**—To prevent access to your store while it's being upgraded, switch your store to maintenance mode:

    ```bash
    bin/magento maintenance:enable
    ```

    See [Enable or disable maintenance mode] for additional options.

     {:.bs-callout-info}
    Optionally, you can create a [custom maintenance mode page].
-  **Check the status of cron jobs**—To prevent various unexpected problems during the upgrade, wait for all active running Magento cron jobs to finish or stop them.
-  **Install the Composer update plugin**—The [`magento/composer-root-update-plugin`][custom Composer plugin] Composer plugin resolves changes that need to be made to the root project `composer.json` file before updating to a new Magento product requirement.

   The plugin partially automates the manual upgrade by identifying and helping you resolve dependency conflicts instead of requiring you to identify and fix them manually.

   To install the plugin:

   ```bash
   composer require magento/composer-root-update-plugin ~2.0 --no-update
   ```

   Update the dependencies:

   ```bash
   composer update
   ```

## Manage packages

{:.bs-callout-info}
See the examples at the end of this section for help specifying different release levels. For example, minor release, quality patch, and security patch. {{site.data.var.ee}} customers can access patches two weeks before the General Availability (GA) date. Pre-release packages are available through Composer only. You cannot find them on the Magento Portal or GitHub until GA. If you cannot find these packages in Composer, contact {{site.data.var.ee}} Support.

1. Backup the `composer.json` file.

   ```bash
   cp composer.json composer.json.bak
   ```

1. Add or remove specific packages based on your needs. For example, if you are upgrading from {{ ce }} to {{ ee }}, remove the {{ ce }} package.

   ```bash
   composer remove magento/product-community-edition --no-update
   ```

1. Run the `composer require-commerce` command to upgrade your instance. The command has the following syntax:

   ```bash
   composer require-commerce magento/<product> <version> --no-update [--interactive-root-conflicts] [--force-root-updates] [--help]
   ```

   where:

   `<product>` - (Required) The package to upgrade. For on-premises installations, this value must be either `product-community-edition` or `product-enterprise-edition`.

   `<version>` - (Required) The version of {{site.data.var.ce}} or {{site.data.var.ce}} you are upgrading to. For example, `2.4.3`.

   `--no-update` - (Required) Disables the automatic update of the dependencies.

   `--interactive-root-conflicts` - (Optional) Allows you to interactively view and update any out-of-date values from previous versions, or any customized values that do not match the version you are upgrading to.

   `--force-root-updates` - (Optional) Overrides all conflicting custom values with the expected Magento values.

   `--help` - (Optional) Provides usage details about the plugin.

   If neither `--interactive-root-conflicts` nor `--force-root-updates` are specified, the command keeps the existing values that are in conflict and displays a warning message.

   To learn more about the plugin, refer to the [Plugin Usage README](https://github.com/magento/composer-root-update-plugin/blob/develop/src/Magento/ComposerRootUpdatePlugin/README.md).

   **Examples:**

   _{{ ce }}_:

   ```bash
   composer require-commerce magento/product-community-edition 2.4.3 --no-update
   ```

   _{{ ee }}_:

   ```bash
   composer require-commerce magento/product-enterprise-edition 2.4.3 --no-update
   ```

   <div class="bs-callout-tip" markdown="1">
   To see the full list of available {{ page.guide_version }} versions:

   _{{ ce }}_:

   ```bash
   composer show magento/product-community-edition 2.4.* --available | grep -m 1 versions
   ```

   _{{ ee }}_:

   ```bash
   composer show magento/product-enterprise-edition 2.4.* --available | grep -m 1 versions
   ```

   </div>

1. Update the dependencies.

   ```bash
   composer update
   ```

### Example - Minor release

Minor releases contain new features, quality fixes, and security fixes. Use Composer to specify a minor release. For example, to specify the {{site.data.var.ee}} 2.4.3 metapackage:

```bash
composer require-commerce magento/product-community-edition 2.4.3 --no-update
```

### Example - Quality patch

Quality patches primarily contain functional _and_ security fixes. However, they can also sometimes contain new, backward-compatible features. Use Composer to download a quality patch. For example, to specify the {{site.data.var.ee}} 2.4.1 metapackage:

```bash
composer require-commerce magento/product-community-edition 2.4.1 --no-update
```

### Example - Security patch

Security patches contain security fixes only. They are designed to make the upgrade process faster and easier.

Security patches use the Composer naming convention `2.4.x-px`. Use Composer to specify a patch. For example, to download the {{site.data.var.ce}} 2.4.3-p1 metapackage:

```bash
composer require-commerce magento/product-community-edition 2.4.3-p1 --no-update
```

## Update metadata

1. Update the `"name"`, `"version"`, and `"description"` fields in the `composer.json` file as needed.

   {:.bs-callout-info}
   Updating the metadata in `composer.json` file is entirely superficial, not functional.

1. Apply updates.

   ```bash
   composer update
   ```

1. Clear the `var/` and `generated/` subdirectories:

   ```bash
   rm -rf var/cache/*
   ```

   ```bash
   rm -rf var/page_cache/*
   ```

   ```bash
   rm -rf generated/code/*
   ```

   {:.bs-callout-info}
   If you use a cache storage other than the filesystem, such as Redis or Memcached, you must manually clear the cache there too.

1. Update the database schema and data.

   ```bash
   bin/magento setup:upgrade
   ```

1. Disable maintenance mode.

   ```bash
   bin/magento maintenance:disable
   ```

1. _(Optional)_ Restart Varnish.

   If you use Varnish for page caching, restart it:

   ```bash
   service varnish restart
   ```

## Check your work

Open your storefront URL in a web browser to check whether the upgrade was successful. If your upgrade was unsuccessful, your storefront will not load properly.

If the application fails with a  `We're sorry, an error has occurred while generating this email.` error:

1. Reset [file system ownership and permissions] as a user with `root` privileges.
1. Clear the following directories:
   -  `var/cache/`
   -  `var/page_cache/`
   -  `generated/code/`
1. Check your storefront in your web browser again.

<!-- Link definitions -->

[custom composer plugin]: https://github.com/magento/composer-root-update-plugin
[custom maintenance mode page]: {{ page.baseurl }}/comp-mgr/trouble/cman/maint-mode.html
[Enable or disable maintenance mode]: {{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html
[file system ownership and permissions]: {{ page.baseurl }}/install-gde/prereq/file-system-perms.html
[metapackage]: https://glossary.magento.com/metapackage
[system requirements]: {{ page.baseurl }}/install-gde/system-requirements.html
[Update and upgrade checklist]: ../prereq/prereq_compman-checklist.html
[Update Magento]: {{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html
[Modify docroot to improve security]: {{ page.baseurl }}/install-gde/tutorials/change-docroot-to-pub.html
[Check the catalog search engine]: {{ site.baseurl }}{{ site.gdeurl }}/comp-mgr/prereq/prereq-elasticsearch.html
