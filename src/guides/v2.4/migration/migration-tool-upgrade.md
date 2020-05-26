---
group: migration-guide
subgroup: C_DMTool
title: Upgrade Data Migration Tool
menu_title: Upgrade Data Migration Tool
menu_node:
menu_order: 3
functional_areas:
  - Tools
---

## Why do I need to upgrade?

To make sure the versions of your current Magento 2 installation and the Data Migration Tool match exactly, you may need to upgrade the Tool.

## Prerequisites {#data-migrate-prereq}

Before upgrading the Data Migration Tool, you must:

*  Upgrade your Magento software to get the latest version

*  Back up the `vendor/magento/data-migration-tool` directory

*  Make sure the Data Migration Tool version matches the Magento application version

### Upgrade your Magento software {#data-migrate-upgr-magento}

If you haven't already done so, [upgrade the Magento software]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html).

### Back up the `vendor/magento/data-migration-tool` directory

Before you upgrade the Data Migration Tool, back up at least the `vendor/magento/data-migration-tool` directory. During upgrade, it could be deleted and replaced by the updated code.

You can also back up the entire Magento codebase and database using the following command:

```bash
php <magento_root>/bin/magento setup:backup --code --db
```

{:.bs-callout-warning}
The `vendor/magento/data-migration-tool` directory contains your custom code. Failure to back it up means you can lose your customizations during upgrade.

### Make sure versions match

The versions of the Data Migration Tool and your Magento software must match exactly. For example, Magento 2.1.2 requires version 2.1.2 of the Data Migration Tool.

See the [Install Data Migration Tool]({{ page.baseurl }}/migration/migration-tool-install.html) topic to know how to:

*  [Check]({{ page.baseurl }}/migration/migration-tool-install.html#magento-version) your Magento 2 version

*  [Find]({{ page.baseurl }}/migration/migration-tool-install.html#migration-tool-release-version) released versions of the Data Migration Tool

*  [Check]({{ page.baseurl }}/migration/migration-tool-install.html#migration-tool-install-version) the Data Migration Tool version

## Upgrade Data Migration Tool {#data-migrate-upgr}

1. Log in to your Magento server as, or switch to, [the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Change to Magento 2 root directory.
1. Enter the following command:

   ```bash
   composer require magento/data-migration-tool:<version>
   ```

   where `<version>` must match the version of the Magento 2 codebase.

   For example, for version 2.1.2, enter:

   ```bash
   composer require magento/data-migration-tool:2.1.2
   ```

1. Wait while the command completes.

{:.ref-header}
Related topics

*  [Configure migration]({{ page.baseurl }}/migration/migration-tool-configure.html)
*  [Preconditions]({{ page.baseurl }}/migration/migration-tool-preconditions.html)
