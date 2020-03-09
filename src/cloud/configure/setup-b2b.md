---
group: cloud-guide
title: Set up Magento B2B module
functional_areas:
  - Cloud
  - Extensions
  - Module
  - B2B
---

If your customers are companies, you can install the {{site.data.var.b2b}} module to extend your {{site.data.var.ece}} Pro project to accommodate a business-to-business model. Although this topic provides information specific to installing and configuring the B2B module in Cloud, you can find additional B2B information in the following:

-  [Magento B2B Developer Guide][b2b-dev]
-  [Magento B2B User Guide][b2b-user]

## Install B2B module

We recommend working in a development branch when adding the B2B module to your implementation. If you do not have a branch, see the [Get started creating branches][branching] topic.

{:.bs-callout-info}
Because we provide B2B as a module for {{site.data.var.ece}}, we highly recommend that you have your Magento application fully deployed to an Integration or Staging environment before beginning.

{:.procedure}
To install the B2B module:

1. On your local workstation, change to the Cloud project root directory.

1. Create or checkout a development branch. See [branching][].

1. Add the B2B module to the `require` section of the `composer.json` file.

   ```bash
   composer require magento/extension-b2b
   ```

1. Use `ece-tools` to refresh the configuration and enable B2B module.

   ```bash
   ./vendor/bin/ece-tools module:refresh
   ```

1. Complete any upgrade for the B2B module.

   ```bash
   php bin/magento setup:upgrade
   ```

{:.procedure}
To add the B2B module to a custom `config.php` file:

1. Change to the `app/etc` directory.

1. Edit the `config.php` with a text editor.

1. In the _modules_ list, add the B2B module and save the file.

   ```php?start_inline=1
   return [
       'modules' => [
           'Magento_B2b' => 1,
   ```

1. Add, commit, and push code changes.

   ```bash
   git add -f app/etc/config.php
   ```

   ```bash
   git commit -a -m “Add config.php.”
   ```

   ```bash
   git push magento <branch-name>
   ```

1. Verify the extension installed properly.

## Configure B2B module

For additional information on using and configuring B2B, review the [Magento B2B User Guide](http://docs.magento.com/m2/b2b/user_guide/getting-started.html).

To extend functionality, see the [Magento B2B Developer Guide]({{ site.baseurl }}/guides/v2.3/b2b/bk-b2b.html).

<!-- link definitions -->

[b2b-dev]: {{ site.baseurl }}/guides/v2.3/b2b/bk-b2b.html
[b2b-user]: http://docs.magento.com/m2/b2b/user_guide/getting-started.html
[branching]: {{ site.baseurl }}/cloud/env/environments-start.html#getstarted
[install-b2b]: {{ site.baseurl }}/extensions/b2b/