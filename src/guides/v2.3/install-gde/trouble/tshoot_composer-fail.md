---
group: installation-guide
subgroup: 03_install
title: Download fails because of changes in Composer
menu_title: Download fails because of changes in Composer
menu_node:
menu_order: 300
functional_areas:
  - Install
  - System
  - Setup
redirect_to: https://support.magento.com/hc/en-us/articles/360033818091
---

### Symptom

During download, the following error displays:

```text
[ErrorException]
    file_get_contents(app/etc/NonComposerComponentRegistration.php): failed to open stream: No such file or directory
```

### Description

This happens because of changes in certain versions of [Composer](https://glossary.magento.com/composer).

The workaround is to downgrade Composer to an earlier version and try your Magento download again.

Any version of Composer dated between November 21 and November 26, 2015 has this issue. To confirm this issue is related to the Composer version, enter the following command:

```bash
composer -v
```

The version displays similar to the following:

```terminal
Composer version 1.0-dev (2b14f0a047dd4f3545ec82381f65c36ea93a4c81) 2015-11-25 17:13:09
```

Note the date is 2015-11-25, which indicates Composer has this issue.

To work around it:

1. Change your version of Composer to enable you to download the Magento software by doing any of the following:

   *  Downgrade Composer using the following command:

      ```bash
      composer self-update 1.0.0-alpha11
      ```

   *  Upgrade Composer to a version later than November 26, 2015:

      ```bash
      composer self-update
      ```

1. Delete your Magento 2 directory and subdirectories.
1. Try the download again using either [`composer create-project`]({{ page.baseurl }}/install-gde/composer.html) or [`git clone`]({{ page.baseurl }}/install-gde/prereq/dev_install.html).
1. After successfully downloading the Magento software, update Composer:

   ```bash
   composer self-update
   ```
