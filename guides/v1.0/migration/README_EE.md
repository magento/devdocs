## Overview
We’re pleased you’re considering moving from the world’s #1 eCommerce platform—Magento 1.x—to the eCommerce platform for the future, Magento 2. We’re also excited to share the details about this process, which we refer to as migration.

Magento 2 migration involves four components: data, extensions, themes, and customizations. 

*	Data: We’ve developed the Magento 2 Data Migration Tool to help you efficiently move all of your products, customers, and order data, store configurations, promotions and more to Magento 2. 

*	Custom code: code is not ported because it cannot be automated.

*	Extensions: We are working with the Magento development community on updating extensions. They will be on Magento Connect when Magento 2 becomes generally available. More information on developing extensions for Magento 2 is available in the <a href="http://devdocs.magento.com/guides/v1.0/extension-dev-guide/bk-extension-dev-guide.html">Magento 2 Extension Developer Guide</a>.

*	Themes and Customizations: Magento 2 uses new approache and technologies that give merchants an unmatched ability to create innovative shopping experiences and scale to new levels. To take advantage of these advances, developers will need to make changes to their themes and customizations. Documentation is available online for creating Magento 2 <a href="http://devdocs.magento.com/guides/v1.0/frontend-dev-guide/themes/theme-general.html">themes</a>, <a href="http://devdocs.magento.com/guides/v1.0/frontend-dev-guide/layouts/layout-overview.html">layouts</a>, and <a href="http://devdocs.magento.com/guides/v1.0/frontend-dev-guide/layouts/xml-manage.html">customizations</a>.

### Supported versions
We support the following versions for migration:

*	Enterprise Edition (EE) version 1.9.1.0 

We also plan to support:

*  EE 1.11.x, EE 1.12.x, EE 1.13.x, and EE 1.14.x

## Prerequisites
Before you start your migration, you must do all of the following:

*	Set up a Magento 2.0 system that meets our <a href="http://devdocs.magento.com/guides/v1.0/install-gde/system-requirements.html">system requirements</a>.

	Set up your system using a topology and design that at least matches your existing Magento 1.x system.

*	Do not start Magento 2.0 cron jobs.

*	Back up or <a href="https://dev.mysql.com/doc/refman/5.1/en/mysqldump.html">dump</a> your Magento 2 database as soon after installation as possible.

*	Check that the data migration tool has a network connection the Magento 1.x and Magento 2 databases.

	Open ports in your firewall so the migration tool can communicate with the databases and so the databases can communicate with each other.

*	To provide redundancy in the event of unexpected issues, we advise you to replicate your Magento 1.x database.

*	Migrate Magento 1.x extension and custom code to Magento 2.0.

	Reach out to your extension providers to see if they have been ported yet.

## Install the Data Migration Tool
This section discusses how to install the Magento Data Migration Tool. You can install it from either <a href="http://packages.magento.com/#magento/data-migration-tool" target="_blank">packages.magento.com</a> or from a GitHub repository.

**Note**: The versions of both the migration tool and the Magento 2 code must be identical (for example, 0.74-beta8). To find the version of either package, open `composer.json` and find the value of `"version"`.

### Install the tool from GitHub
To install the migration tool from GitHub, use the following steps:

1.	Log in to your Magento 2 server as a user with privileges to write to the Magento 2 file system or <a href="http://devdocs.magento.com/guides/v1.0/install-gde/install/prepare-install.html#install-update-depend-apache">switch to the web server user</a>.
2. Go to Magento 2 root directory.
3.	Enter one of the following commands:

	*	Magento EE:

			composer config repositories.data-migration-tool git <ee-github-repo>
			composer require magento/data-migration-tool:dev-develop

3.	Wait while dependencies are updated.

### Install the tool from packages.magento.com
To install the Data Migration Tool, you must update `composer.json` in the Magento root installation directory to provide the location of the migration tool package. 

Sample data is versioned like Magento code. Before you begin, you can either:

*	Find the exact version you want at <a href="http://packages.magento.com/#magento/data-migration-tool" target="_blank">packages.magento.com</a>.
*	Install the latest version using Composer <a href="https://getcomposer.org/doc/01-basic-usage.md#next-significant-release-tilde-and-caret-operators-" target="_blank">next significant release syntax</a>.

To install the migration tool, you must:

1.	Decide the version of `magento/data-migration-tool` you want as discussed in the preceding section.

2.	Run the `composer config` and `composer require` commands to update `composer.json`.

To update `composer.json`:

1.	Log in to your Magento server as the <a href="http://devdocs.magento.com/guides/v1.0/install-gde/install/prepare-install.html#install-update-depend-apacheweb">web server user</a> or as a user with `root` privileges.

2.	Change to your Magento installation directory.

7.	Enter the following command to reference Magento packages in `composer.json`:

		composer config repositories.magento composer http://packages.magento.com

8.	Enter the following command to require the current version of the sample data package:

		composer require magento/data-migration-tool:<version>

	where `<version>` is either an exact version or next significant release syntax.

	Exact version example:

		composer require magento/data-migration-tool:0.74.0-beta4

	Next significant release example:

		composer require magento/data-migration-tool:~0.74.0-beta4

9.	Wait while dependencies are installed.

## For more details
See the <a href="http://devdocs.magento.com/guides/v1.0/migration/migration-user-guide.html">Migration User Guide</a>.