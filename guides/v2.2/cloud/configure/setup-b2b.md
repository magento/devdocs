---
group: cloud-guide
title: Set up Magento B2B
---

With the {{site.data.var.ece}} Pro subscription for v2.2 and later, you can install and setup Magento Business to Business (B2B) Commerce features. B2B supports merchants whose customers are other companies. This section provides specific information for installing and setting up B2B in {{site.data.var.ece}}.

For additional information on using and extending B2B, see the following guides:

* [Magento B2B Developer Guide]({{ site.baseurl }}/guides/v2.2/b2b/bk-b2b.html)
* [Magento B2B User Guide](http://docs.magento.com/m2/b2b/user_guide/getting-started.html)

We provide these features as a module you can install and setup in {{site.data.var.ece}}. Installation of B2B in a Pro project require additional steps to add the module and update your Git branch.

## Prerequisites for adding B2B {#prereqs}

Prior to adding the B2B module, you should have the following:

* Upgraded to a {{site.data.var.ece}} 2.2.X on your environments
* A Git branch to add the new B2B module
* Have your Magento Authentication keys (public and private) available

We provide B2B as a module for Magento. For new Pro projects, we highly recommend having {{site.data.var.ece}} fully deployed to Integration, Staging, and Production environments. For more information, see [First time deployment]({{ page.baseurl }}/cloud/setup/first-time-deploy.html). Adding a module as part of your initial deployment could cause issues.

## Create a branch to work in {#branch}

We recommend working in a branch to add the B2B module and features to your implementation. If you have a branch, continue to [Add B2B in the cloud](#add).

{% include cloud/cli-get-started.md %}

## Add B2B in the cloud {#add}

You need to add the module to `composer.json`. All extensions and modules must be added to this file. These instructions are specific to {{site.data.var.ece}}. For more information, you can also review the [installation instructions]({{ site.baseurl }}/extensions/b2b/) in the B2B guide.

1. Open a terminal application.
2. Change to your local development environment root directory.
3.  Install the B2B module using composer.

    ```bash
    composer require magento/extension-b2b
    ```

    You may be prompted to enter your Magento Authentication keys (public and private). If copying and pasting your keys, do not introduce additional spaces. Spaces could cause the following error:

        InvalidArgumentException - Could not find package magento/extension-b2b at any version for your minimum-stability (stable). Check the package spelling or your minimum-stability.

4.  Add and commit the updated `composer.json` and `composer.lock` files.

    ```bash
    git add composer.json composer.lock && git commit -a -m "install b2b module"
    ```
5. Enable all missing modules, including B2B, for updating.

        ./vendor/bin/ece-tools module:refresh

6. Complete the upgrade with B2B using the following command:

    ```bash
        php bin/magento setup:upgrade
    ```

If you have a config.php file as part of your deployment, you should also add the B2B module in the modules section of the file.

1. Change to the app/etc directory.
2. Edit the config.php with a text editor.
3. In the modules list, add the B2B module.
4. Save the file and update Git.

    ```bash
        git add -f app/etc/config.php
    ```

    ```bash
        git commit -a -m “Add config.php.”
    ```

## Configure and use B2B {#use}

For additional information on using and configuring B2B, review the [Magento B2B User Guide](http://docs.magento.com/m2/b2b/user_guide/getting-started.html). To extend functionality, see the [Magento B2B Developer Guide]({{ site.baseurl }}/guides/v2.2/b2b/bk-b2b.html).
