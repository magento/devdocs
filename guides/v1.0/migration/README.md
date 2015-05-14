## Overview
We’re pleased you’re considering moving from the world’s #1 eCommerce platform—Magento 1.x—to the eCommerce platform for the future, Magento 2. We’re also excited to share the details about this process, which we refer to as migration.

Magento 2 migration involves four components: data, extensions, themes, and customizations. 

*	Data: We’ve developed the Magento 2 Data Migration Tool to help you efficiently port all of your key product, customer, and order data, store configurations, promotions and more to Magento 2. 

*	Extensions: We are actively working with the Magento development community to help ensure the most widely used extensions will be updated, vetted, and available on Magento Connect when Magento 2 becomes generally available. More information on developing extensions for Magento 2 is available in the <a href="http://devdocs.magento.com/guides/v1.0/extension-dev-guide/bk-extension-dev-guide.html">Magento 2 Extension Developer Guide</a>.

*	Themes and Customizations: Magento 2 uses several new approaches and technologies that give merchants an unmatched ability to create innovative shopping experiences and scale to new levels. To take advantage of these advances, developers will need to make changes to their themes and customizations. Documentation is available online for creating Magento 2 <a href="http://devdocs.magento.com/guides/v1.0/frontend-dev-guide/themes/theme-general.html">themes</a>, <a href="http://devdocs.magento.com/guides/v1.0/frontend-dev-guide/layouts/layout-overview.html">layouts</a>, and <a href="http://devdocs.magento.com/guides/v1.0/frontend-dev-guide/layouts/xml-manage.html">customizations</a>.

### Supported versions
We support the following versions for migration:

*	Community Edition (CE) versions 1.6, 1.7, 1.8, and 1.9
*	Enterprise Edition (EE) versions 1.11, 1.12, 1.13, and 1.14

## Prerequisites
Before you start your migration, you must do all of the following:

*	Set up a Magento 2.0 system that meets our <a href="http://devdocs.magento.com/guides/v1.0/install-gde/system-requirements.html">system requirements</a>.

	Set up your system using a topology and design that at least matches your existing Magento 1.x system.

*	Do not start Magento 2.0 cron jobs.

*	Back up or <a href="https://dev.mysql.com/doc/refman/5.1/en/mysqldump.html">dump</a> your Magento 2 database as soon after installation as possible.

*	The Magento 1.x and Magento 2 databases must be able to communicate with each other.

	Open firewall ports for MySQL and reduce network latency between your Magento 1.x and 2.0 databases as much as possible to improve migration performance.

*	To provide redundancy in the event of unexpected issues, we advise you to replicate your Magento 1.x database.

*	Migrate Magento 1.x extension code to Magento 2.0.

	Reach out to your extension providers to see if they have been ported yet.

## Install the migration tool
This section discusses how to install the Magento migration tool. You can install it from either <a href="http://packages.magento.com/#magento/data-migration-tool" target="_blank">packages.magento.com</a> or from a GitHub repository.

**Note**: The versions of both the migration tool and the Magento 2 code must be identical (for example, 0.74-beta8). To find the version of either package, open `composer.json` and find the value of `"version"`.

### Install the tool from GitHub
To install the migration tool from GitHub, use the following steps:

1.	Log in to your Magento 2 server as a user with privileges to write to the Magento 2 file system or <a href="http://devdocs.magento.com/guides/v1.0/install-gde/install/prepare-install.html#install-update-depend-apache">switch to the web server user</a>.
2. Change to your Magento 2 installation directory.
3.	Enter one of the following commands:

	*	Magento CE:

			composer config repositories.migration-tool git https://github.com/magento/data-migration-tool-ce
			composer require magento/data-migration-tool:dev-develop

	*	Magento EE:

			composer config repositories.migration-tool git <ee-github-repo>
			composer require magento/data-migration-tool:dev-develop

3.	Wait while dependencies are updated.

### Install the tool from packages.magento.com
To install the migration tool, you must update `composer.json` in the Magento root installation directory to provide the location of the migration tool package. 

Sample data is versioned like Magento code. Before you begin, you can either:

*	Find the exact version you want at <a href="http://packages.magento.com/#magento/data-migration-tool" target="_blank">packages.magento.com</a>.
*	Install the latest version using Composer <a href="https://getcomposer.org/doc/01-basic-usage.md#next-significant-release-tilde-and-caret-operators-" target="_blank">next significant release syntax</a>.

To install the migration tool, you must:

1.	Decide the version of `magento/data-migration-tool` you want as discussed in the preceding section.

2.	Run the `composer config` and `composer require` commands to update `composer.json`.

To update `composer.json`:

1.	Log in to your Magento server as the <a href="http://devdocs.magento.com/guides/v1.0/install-gde/install/prepare-install.html#install-update-depend-apacheweb">web server user</a> or as a user with `root` privileges.

2.	Change to your Magento installation directory.

3.	Make a backup copy of `composer.json`.

		cp composer.json composer.json.bak

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
To continue using the migration tool, see the <a href="http://devdocs.magento.com/guides/v1.0/migration/migration-user-guide.html">Migration User Guide</a>.