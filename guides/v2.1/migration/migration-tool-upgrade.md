---
layout: default
group:  migration
subgroup: C_Data migration tool
title: Upgrade the Data Migration Tool
menu_title: Upgrade the Data Migration Tool
menu_node: 
menu_order: 3
version: 2.1
github_link21: migration/migration-tool-upgrade.md
---

#### Contents
*	[Overview of upgrade](#data-migrate-upgr-over)
*	[Prerequisites for upgrade](#data-migrate-upgr-prereq)
*	[Upgrade the Data Migration Tool](#data-migrate-upgr)

## Overview of upgrade {#data-migrate-upgr-over}
This section discusses how to upgrade the version of the Data Migration Tool to match the Magento software version.

The versions of the Data Migration Tool and your Magento software must exactly match. For example, if you're using version 2.0.2 of the Magento software, you must use version 2.0.2 of the Data Migration Tool.

{% include migration/find-version.md %}

## Prerequisites {#data-migrate-prereq}
Before you upgrade, you must:

*	Upgrade your Magento software
*	Back up the `vendor/magento/data-migration-tool` directory

### Upgrade the Magento software {#data-migrate-upgr-magento}
If you haven't already done so, run the <a href="{{ site.gdeurl21 }}comp-mgr/upgrader/upgrade-start.html">System Upgrade utility</a> to upgrade the Magento software.

### Back up the `vendor/magento/data-migration-tool` directory
Before you upgrade the Data Migration Tool, back up at least the `vendor/magento/data-migration-tool` directory. During upgrade, it could be deleted and replaced by updated code.

If you want, you can back up the entire Magento codebase and database using the following command:

	php <your Magento install dir>/bin/magento setup:backup --code --db

<div class="bs-callout bs-callout-warning">
    <p>The <code>vendor/magento/data-migration-tool</code> directory contains your custom code. Failure to back it up means you can lose your customizations during upgrade.</p>
</div>

## Upgrade the Data Migration Tool {#data-migrate-upgr}
To upgrade the Data Migration Tool:

1.	Log in to your Magento server as, or switch to, <a href="{{ site.gdeurl21 }}install-gde/prereq/apache-user.html">the Magento file system owner</a>.
2.	Change to Magento 2 root directory.
3. 	Enter the following command:

	`composer require magento/data-migration-tool:<version>`

	where `<version>` must match the version of the Magento 2 codebase.

	For example, for version 2.0.2, enter:

	`composer require magento/data-migration-tool:2.0.2`
4.	Wait while the command completes.

###Related topics

* <a href="{{ site.gdeurl21 }}migration/migration-tool-configure.html">Configure migration</a>
* <a href="{{ site.gdeurl21 }}migration/migration-tool-preconditions.html">Preconditions</a>
