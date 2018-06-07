---
group: cloud
subgroup: 090_configure
title: Set up Magento B2B
menu_title: Set up Magento B2B
menu_order: 16
menu_node:
version: 2.2
github_link: cloud/configure/setup-b2b.md
---

With the {{site.data.var.ece}} Pro subscription for v2.2 and later, you can install and setup Magento Business to Business (B2B) Commerce features. B2B supports merchants whose customers are other companies. This section provides specific information for installing and setting up B2B in {{site.data.var.ece}}.

For additional information on using and extending B2B, see the following guides:

* [Magento B2B Developer Guide](http://devdocs.magento.com/guides/v2.2/b2b/bk-b2b.html)
* [Magento B2B User Guide](http://docs.magento.com/m2/b2b/user_guide/getting-started.html){:target="_blank"}

We provide these features as a module you can install and setup in {{site.data.var.ece}}. Installation of B2B in a Pro project require additional steps to add the module and update your Git branch.

## Prerequisites for adding B2B {#prereqs}
Prior to adding the B2B module, you should have the following:

* Upgraded to a {{site.data.var.ece}} 2.2.X on your environments
* A Git branch to add the new B2B module
* Have your Magento Authentication keys (public and private) available

We provide B2B as a module for Magento. For new Pro projects, we highly recommend having {{site.data.var.ece}} fully deployed to Integration, Staging, and Production environments. For more information, see [First time deployment]({{ page.baseurl }}/cloud/access-acct/first-time-deploy.html). Adding a module as part of your initial deployment could cause issues.

## Create a branch to work in {#branch}
We recommend working in a branch to add the B2B module and features to your implementation. If you have a branch, continue to [Add B2B in the cloud](#add).

{% include cloud/cli-get-started.md %}

## Add B2B in the cloud {#add}
You need to add the module to `composer.json`. All extensions and modules must be added to this file. These instructions are specific to {{site.data.var.ece}}. For more information, you can also review the [installation instructions](http://devdocs.magento.com/guides/v2.2/comp-mgr/install-extensions/b2b-installation.html) in the B2B guide.

1. Open a terminal application.
2. Change to your local development environment root directory.
3. Use a text editor to edit `composer.json`.
4. In the `require` section, add the following:

        "magento/extension-b2b": "*"
5. Save the file.
6. Run the composer update command to pull all B2B files into your branch.

        composer update

    You may be prompted to enter your Magento Authentication keys (public and private). If copying and pasting your keys, make sure no additional spaces are included. Spaces could cause the following error:

        InvalidArgumentException - Could not find package magento/extension-b2b at any version for your minimum-stability (stable). Check the package spelling or your minimum-stability.

5. Add the new B2B files to Git:

        git add setup dev pub lib && git commit -a -m "b2b"
5. Enable all modules using the following command. You need to use this command to ensure all modules, including B2B, are enabled for updating.

        php bin/magento module:enable --all

6. Complete the upgrade with B2B using the following command:

        php bin/magento setup:upgrade


If you have a config.php file as part of your deployment, you should also add the B2B module in the modules section of the file.

1. Change to the app/etc directory.
2. Edit the config.php with a text editor.
3. In the modules list, add the B2B module.
4. Save the file and update Git.

        git add -f app/etc/config.php
        git commit -a -m “Add config.php.”

## Configure and use B2B {#use}
For additional information on using and configuring B2B, review the [Magento B2B User Guide](http://docs.magento.com/m2/b2b/user_guide/getting-started.html){:target="_blank"}. To extend functionality, see the [Magento B2B Developer Guide](http://devdocs.magento.com/guides/v2.2/b2b/bk-b2b.html).
