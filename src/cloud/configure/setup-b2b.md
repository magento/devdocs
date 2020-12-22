---
group: cloud-guide
title: Set up Magento B2B module
functional_areas:
  - Cloud
  - Extensions
  - Module
  - B2B
---

If your customers are companies, you can install the {{site.data.var.b2b}} module to extend your {{site.data.var.ece}} Pro project to accommodate a business-to-business model. Although this topic provides information specific to installing and configuring the B2B module for {{site.data.var.ece}}, you can find additional B2B information in the following guides:

-  [Magento B2B Developer Guide][b2b-dev]
-  [Magento B2B User Guide][b2b-user]

{:.bs-callout-tip}
Because we provide B2B as a module for {{site.data.var.ece}}, we highly recommend that you have your Magento application fully deployed to an Integration or Staging environment before beginning.

## Install B2B module

We recommend working in a development branch when adding the B2B module to your project. If you do not have a branch, see the [Get started creating branches][branching] topic. When installing the B2B module, the `Magento_B2b` module name is automatically inserted in the [`app/etc/config.php`][config] file. There is no need to edit the file directly.

{:.procedure}
To install the B2B module:

1. On your local workstation, change to the Cloud project root directory.

1. Create or checkout a development branch. See [branching][].

1. Add the B2B module to the `require` section of the `composer.json` file.

   ```bash
   composer require magento/extension-b2b --no-update
   ```

1. Update the project dependencies.

   ```bash
   composer update
   ```

1. Add, commit, and push code changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "Install the B2B module."
   ```

   ```bash
   git push origin <branch-name>
   ```

1. After the build and deploy finishes, use SSH to log in to the remote environment and verify that the B2B module installed.

   ```bash
   bin/magento module:status Magento_B2b
   ```

   An extension name uses the format: `<VendorName>_<ComponentName>`.

   Sample response:

   ```terminal
   Module is enabled
   ```

   If you encounter deployment errors, see [extension deployment failure][trouble].

## Enable the B2B module

When you install the B2B module using Composer, the deployment process automatically enables the module. If you already have the B2B module installed, you can enable or disable the module using the CLI. See [Manage extensions][].

## Configure the B2B module

After installing the {{site.data.var.b2b}} module, you must [start the message consumers][messages] so that you can enable the _Shared Catalog_ module, and you must [enable the B2B module in the Magento Admin panel][admin-enable].

For additional information on using and configuring B2B, review the [Magento B2B User Guide][b2b-user].

To extend functionality, see the [Magento B2B Developer Guide][b2b-dev] and the [Extension Guide][extensions].

<!-- link definitions -->

[admin-enable]: {{ site.baseurl }}/extensions/b2b/#enable-b2b-features-in-magento-admin
[b2b-dev]: {{ site.baseurl }}/guides/v2.3/b2b/bk-b2b.html
[b2b-user]: http://docs.magento.com/m2/b2b/user_guide/getting-started.html
[branching]: {{ site.baseurl }}/cloud/env/environments-start.html#getstarted
[config]: {{ site.baseurl }}/guides/v2.3/config-guide/config/config-php.html
[extensions]: {{ site.baseurl }}/extensions/
[install-b2b]: {{ site.baseurl }}/extensions/b2b/
[Manage extensions]: {{ site.baseurl }}/cloud/howtos/install-components.html#manage-extensions
[messages]: {{ site.baseurl }}/extensions/b2b/#start-message-consumers
[trouble]: {{ site.baseurl }}/cloud/trouble/trouble_comp-deploy-fail.html
