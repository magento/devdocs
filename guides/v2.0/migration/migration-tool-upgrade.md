---
layout: default
group:  migration
subgroup: C_Data migration tool
title: Upgrade Data Migration Tool
menu_title: Upgrade Data Migration Tool
menu_node:
menu_order: 3
version: 2.0
github_link: migration/migration-tool-upgrade.md
---

## {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

## Why do I need to upgrade?

To make sure the versions of your current Magento 2 installation and the Data Migration Tool match exactly, you may need to upgrade the Tool.

## Prerequisites {#data-migrate-prereq}

Before upgrading the Data Migration Tool, you must:

*	Upgrade your Magento software to get the latest version

*	Back up the `vendor/magento/data-migration-tool` directory

* Make sure the Data Migration Tool version matches the Magento application version

### Upgrade your Magento software {#data-migrate-upgr-magento}

If you haven't already done so, run the <a href="{{page.baseurl}}comp-mgr/upgrader/upgrade-start.html">System Upgrade utility</a> to upgrade the Magento software.

### Back up the `vendor/magento/data-migration-tool` directory

Before you upgrade the Data Migration Tool, back up at least the `vendor/magento/data-migration-tool` directory. During upgrade, it could be deleted and replaced by the updated code.

You can also back up the entire Magento codebase and database using the following command:

	php <your Magento install dir>/bin/magento setup:backup --code --db

<div class="bs-callout bs-callout-warning">
    <p>The <code>vendor/magento/data-migration-tool</code> directory contains your custom code. Failure to back it up means you can lose your customizations during upgrade.</p>
</div>

### Make sure versions match

The versions of the Data Migration Tool and your Magento software must match exactly. For example, Magento 2.1.2 requires version 2.1.2 of the Data Migration Tool.

See the [Install Data Migration Tool]({{page.baseurl}}migration/migration-tool-install.html) topic to know how to:

* [Check]({{page.baseurl}}migration/migration-tool-install.html#magento-version) your Magento 2 version

* [Find]({{page.baseurl}}migration/migration-tool-install.html#migration-tool-release-version) released versions of the Data Migration Tool

* [Check]({{page.baseurl}}migration/migration-tool-install.html#migration-tool-install-version) the Data Migration Tool version

## Upgrade Data Migration Tool {#data-migrate-upgr}

1.	Log in to your Magento server as, or switch to, <a href="{{page.baseurl}}install-gde/prereq/apache-user.html">the Magento file system owner</a>.
2.	Change to Magento 2 root directory.
3. 	Enter the following command:

	`composer require magento/data-migration-tool:<version>`

	where `<version>` must match the version of the Magento 2 codebase.

	For example, for version 2.1.2, enter:

	`composer require magento/data-migration-tool:2.1.2`
4.	Wait while the command completes.

## Related topics

* <a href="{{page.baseurl}}migration/migration-tool-configure.html">Configure migration</a>
* <a href="{{page.baseurl}}migration/migration-tool-preconditions.html">Preconditions</a>
