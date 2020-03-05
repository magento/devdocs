---
group: software-update-guide
title: Update the updater application
functional_areas:
- Upgrade
redirect_from:
- guides/v2.3/install-gde/prereq/prereq_updater.html
---

In some cases, you might need to update the updater application, which is responsible for updating components and the Magento application. You should do this only if instructed to do so.

To update the updater application:

1. Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Delete, move, or rename the directory containing the updater application.

   ```bash
   mv <magento_root>/update <magento_root>/old_update
   ```
1. Change to your Magento 2 installation directory and enter the following command:

   ```bash
   composer create-project magento/updater update --repository https://repo.magento.com
   ```

1. If prompted, enter your Magento [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html).
1. Wait while [Composer](https://glossary.magento.com/composer) installs the updater and its dependencies.
