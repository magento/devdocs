---
group:  migration
subgroup: C_DMTool
title: Install Data Migration Tool
menu_title: Install Data Migration Tool
menu_node:
menu_order: 2
redirect_from: /guides/v1.0/migration/migration-tool-install.html
---

## Prerequisite: Versions of Magento and Data Migration Tool must match {#data-migrate-prereq}

Make sure you are using *the same released version* of both Magento 2 and the Data Migration Tool. For example, for Magento version 2.2.0, you must also use the Data Migration Tool version 2.2.0.

### Check your Magento 2 version {#magento-version}

#### Composer metapackage

If you downloaded the Magento software using a {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} metapackage, enter the following command:

	php <your Magento install dir>/bin/magento --version

#### Github repository

If you cloned the Magento 2 GitHub repository, enter the following commands:

	cd <your Magento 2 clone directory>
	git branch

If you're currently in the `develop` branch, you must change to a [releasedbranch]({{ page.baseurl }}/install-gde/install/cli/dev_downgrade.html) before you continue.

<div class="bs-callout bs-callout-tip" markdown="1">
If you haven't installed the Magento software yet, [install it now]({{ page.baseurl }}/install-gde/bk-install-guide.html).

If you're cloning the GitHub repository, make sure you check out a release tag as discussed in [(Contributor) Clone the Magentorepository]({{ page.baseurl }}/install-gde/prereq/dev_install.html).
</div>

### Find released versions of Data Migration Tool {#migration-tool-release-version}

Go to the [Releases](https://github.com/magento/data-migration-tool/releases){:target="_blank"} page of the Data Migration Tool Github repository to find available released versions.

## Install Data Migration Tool {#data-migrate-install}

You may install the Data Migration Tool from:

* [`repo.magento.com`](#install-repo)

* [GitHub](#install-github)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Before installing, make sure you have:

-   Completed all tasks mentioned in the [Preconditions]({{ page.baseurl }}/migration/migration-tool-preconditions.html) section
-   [Verified theversion]({{ page.baseurl }}/migration/migration-tool-install.html#data-migrate-prereq) of the Magento 2 software
</div>

### Install from `repo.magento.com` {#install-repo}

To install the Data Migration Tool, you must update `composer.json` in the Magento root installation directory to provide the location of the Data Migration Tool package.

1.	Log in to your Magento server as, or switch to, [the Magento file systemowner]({{ page.baseurl }}/install-gde/prereq/apache-user.html).
2.	Change to Magento 2 root directory.
3.	Enter the following commands:

		composer config repositories.magento composer https://repo.magento.com
		composer require magento/data-migration-tool:<version>

	where `<version>` must match the version of the Magento 2 codebase.

	For example, for version 2.2.0, enter:

		composer config repositories.magento composer https://repo.magento.com
		composer require magento/data-migration-tool:2.2.0

4.  When prompted, enter your [authenticationkeys]({{ site.baseurl }}/guides/v2.0/install-gde/prereq/connect-auth.html). Your public key is your username; your private key is your password.

### Install from GitHub {#install-github}

If you've cloned Magento 2 from the GitHub repository, follow the steps below to install the Data Migration Tool.

1.	Log in to your Magento server as, or switch to, [the Magento file systemowner]({{ page.baseurl }}/install-gde/prereq/apache-user.html).
2.	Change to Magento 2 root directory.
3.	Enter the following commands:

		composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool
		composer require magento/data-migration-tool:<version>

	where `<version>` must match the version of the Magento 2 codebase.

	For example, for version 2.2.0, enter:

		composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool
		composer require magento/data-migration-tool:2.2.0

### Check version of installed Data Migration Tool {#migration-tool-install-version}

1. Change to your Data Migration Tool directory: `<vendor>/magento/data-migration-tool`.

2. Open [`composer.json`][composer-json] in a text editor.

3. The `version` entry in that file is the version of the Data Migration Tool.

## Related topics

* [Configuremigration]({{ page.baseurl }}/migration/migration-tool-configure.html)
* [Preconditions]({{ page.baseurl }}/migration/migration-tool-preconditions.html)

[composer-json]: https://github.com/magento/data-migration-tool/blob/master/composer.json
