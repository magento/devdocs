## Overview
We’re pleased you’re considering moving from the world’s #1 eCommerce platform—Magento 1.x—to the eCommerce platform for the future, Magento 2. We’re also excited to share the details about this process, which we refer to as migration.

Magento 2 migration involves four components: data, extensions, themes, and customizations. 

*	Data: We’ve developed the Magento 2 Data Migration Tool to help you efficiently port all of your key product, customer, and order data, store configurations, promotions and more to Magento 2. 

*	Extensions: We are actively working with the Magento development community to help ensure the most widely used extensions will be updated, vetted, and available on Magento Connect when Magento 2 becomes generally available. More information on developing extensions for Magento 2 is available in the <a href="http://devdocs.magento.com/guides/v1.0/extension-dev-guide/bk-extension-dev-guide.html">Magento 2 Extension Developer Guide</a>.

*	Themes and Customizations: Magento 2 uses several new approaches and technologies that give merchants an unmatched ability to create innovative shopping experiences and scale to new levels. To take advantage of these advances, developers will need to make changes to their themes and customizations. Documentation is available online for creating Magento 2 <a href="http://devdocs.magento.com/guides/v1.0/frontend-dev-guide/themes/theme-general.html">themes</a>, <a href="http://devdocs.magento.com/guides/v1.0/frontend-dev-guide/layouts/layout-overview.html">layouts</a>, and <a href="http://devdocs.magento.com/guides/v1.0/frontend-dev-guide/layouts/xml-manage.html">customizations</a>.

### Supported versions
We currently support the following versions for migration:
*	Community Edition (CE) versions 1.9
*	Enterprise Edition (EE) versions 1.14

We plan to support the following versions:
*	Community Edition (CE) versions 1.6, 1.7, and 1.8
*	Enterprise Edition (EE) versions 1.11, 1.12, and 1.13

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
This section discusses how to install the Magento migration tool. 

**Note**: The versions of both the migration tool and the Magento 2 code must be identical (for example, 0.74-beta8). To find the version of either package, open `composer.json` and find the value of `"version"`.

To install the migration tool from GitHub, use the following steps:

1.	Log in to your Magento 2 server as a user with privileges to write to the Magento 2 file system or <a href="http://devdocs.magento.com/guides/v1.0/install-gde/install/prepare-install.html#install-update-depend-apache">switch to the web server user</a>.
2. Change to your Magento 2 installation directory.

	Examples:

	*	Ubuntu: `/var/www/magento2`
	*	CentOS: `/var/www/html/magento2`

3.	Enter the following commands:

	composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool-ee
	composer require magento/data-migration-tool:dev-develop

3.	Wait while dependencies are updated.

## For more details
To continue using the migration tool, see the <a href="http://devdocs.magento.com/guides/v1.0/migration/migration-user-guide.html">Migration User Guide</a>.