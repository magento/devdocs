---
layout: default
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

## Install B2B in the cloud {#install}
Prior to adding the B2B module, you should have a cloned Git branch initially deployed to your Integration, Staging, and Production environments. Adding a module as part of your initial deployment could cause issues.

1. Enable the module.
2. Add the module to composer.json "require" section: `"magento/extension-b2b": "*"`
3. Run the composer update command to pull all B2B files into your branch.

    composer update
4. Add the new B2B files to Git:

    git add setup dev pub lib && git commit -a -m "b2b"
5. Enable all modules using the following command:

    php bin/magento module:enable --all

6. Up the local installation with B2B:

    php bin/magento setup:upgrade

git add -f app/etc/config.php
git commit -a -m “Add config.php.”
