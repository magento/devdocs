---
group: cloud-guide
title: Install, manage, and upgrade extensions
functional_areas:
  - Cloud
  - Configuration
  - Extensions
  - Module
---

You can extend your Magento application capabilities by adding an extension from the [Magento Marketplace][]. For example, you can add a theme to change the look and feel of your storefront, or you can add a language package to localize your storefront and Admin panel.

{% include cloud/tip-creating-branches.md %}

{% include cloud/composer-name.md %}

## Install an extension

We recommend working in a development branch when adding the module to your implementation. If you do not have a branch, see the [Get started creating branches][branching] topic.

{:.procedure}
To install an extension:

1. On your local workstation, change to the Cloud project root directory.

1. Create or checkout a development branch. See [branching][].

1. Using the Composer name and version, add the extension to the `require` section of the `composer.json` file.

   ```bash
   composer require <extension-name>:<version> --no-update
   ```

   For example:

   ```bash
   composer require pixlee/magento2:1.0.1 --no-update
   ```

1. Update the project dependencies.

   ```bash
   composer update
   ```

1. Use `ece-tools` to refresh the configuration and enable the extension.

   ```bash
   ./vendor/bin/ece-tools module:refresh
   ```

1. Complete any upgrade for the Magento application and the extension.

   ```bash
   bin/magento setup:upgrade
   ```

1. Clean the cache.

   ```bash
   bin/magento cache:clean
   ```

1. Add, commit, and push code changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "install <extension-name>"
   ```

   ```bash
   git push origin <branch-names>
   ```

   {:.bs-callout-warning}
   When installing an extension, you must include the `composer.lock` file when you push code changes to the remote environment. The `composer install` command reads the `composer.lock` file to enable the defined dependencies in the remote environment.

1. After the build and deploy finishes, use a SSH to log in to the remote environment and verify the extension installed.

   ```bash
   bin/magento module:status <extension-name>
   ```

   An extension name uses the format: `<VendorName>_<ComponentName>`.

   Sample response:

   ```terminal
   Module is enabled
   ```

If you encounter errors, see [extension deployment failure][trouble].

### Custom config.php file

When adding an extension, the [`app/etc/config.php`][config] file is automatically updated. However, if you have a custom config file, you must update that manually.

{:.procedure}
To add an extension to a custom `config.php` file:

1. Change to the `app/etc` directory.

1. Edit the `config.php` with a text editor.

1. In the _modules_ list, add the B2B module and save the file.

   >Excerpt from the `config.php` file
   ```php?start_inline=1
   return [
       'modules' => [
           'Magento_B2b' => 1,
   ```

## Manage extensions

When managing extensions, use the format: `<VendorName>_<ComponentName>`. Never enable or disable an extension while logged in to the remote environments.

{:.procedure}
To enable or disable an extension:

1. On your local workstation, change to the Cloud project root directory.

1. Enable or disable a module. The `module` command updates the `config.php` file with the requested status of the module.

   >Enable a module.
   ```bash
   bin/magento module:enable <module-name>
   ```

   >Disable a module.
   ```bash
   bin/magento module:disable <module-name>
   ```

1. If you enabled a module, use `ece-tools` to refresh the configuration.

   ```bash
   ./vendor/bin/ece-tools module:refresh
   ```

1. Verify the status of a module.

   ```bash
   bin/magento module:status <module-name>
   ```

1. Add, commit, and push code changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "disable <extension-name>"
   ```

   ```bash
   git push origin <branch-names>
   ```

## Upgrade an extension

Before you continue, you need the Composer name and version for the extension. Also, make sure the extension is compatible with your project and {{site.data.var.ece}} version. In particular, check the required PHP version before you begin.

{:.procedure}
To update an extension:

1. On your local workstation, change to the Cloud project root directory.

1. Create or checkout a development branch. See [branching][].

1. Open the `composer.json` file in a text editor.

1. Locate your extension and update the version.

1. Save your changes and exit the text editor.

1. Update the project dependencies.

   ```bash
   composer update
   ```

1. Add, commit, and push your code changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "update <extension-name>"
   ```

   ```bash
   git push origin <branch-names>
   ```

If you encounter errors, see [extension deployment failure][].

<!-- link definitions -->

[branching]: {{ site.baseurl }}/cloud/env/environments-start.html#getstarted
[config]: {{ site.baseurl }}/guides/v2.3/config-guide/config/config-php.html
[extensions]: {{ site.baseurl }}/extensions/
[Magento Marketplace]: https://marketplace.magento.com
[trouble]: {{ site.baseurl }}/cloud/trouble/trouble_comp-deploy-fail.html