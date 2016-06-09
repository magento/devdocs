---
layout: default
group:  migration
subgroup: C_Data migration tool
title: Install the Data Migration Tool
menu_title: Install the Data Migration Tool
menu_node: 
menu_order: 2
version: 2.1
github_link21: migration/migration-tool-install.md
---

#### Contents
*	[Prerequisite for install](#data-migrate-prereq)
*	[Install the Data Migration Tool](#data-migrate-install)

## Prerequisite for install {#data-migrate-prereq}
Before you continue, make sure you are using the *same released version* of both Magento 2 and the Data Migration Tool. For example, if you're using Magento version 2.0.2, you must also use Data Migration Tool version 2.0.2.

{% include migration/find-version.md %}

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>If you haven't installed the Magento software yet, <a href="{{ site.gdeurl21 }}install-gde/continue.html">install it now</a>.</p> 
	<p>If you're cloning the GitHub repository, make sure you check out a release tag as discussed in <a href="{{ site.gdeurl21 }}install-gde/prereq/dev_install.html">(Contributor) Clone the Magento repository</a>.</p></span>
</div>

## Install the Data Migration Tool {#data-migrate-install}
This section discusses how to install the Magento Data Migration Tool. You can install it from either `repo.magento.com` or from the GitHub repository.

Before you continue, make sure you completed all tasks discussed in <a href="{{ site.gdeurl21 }}migration/migration-tool-preconditions.html">Preconditions</a>.

You can install the Data Migration Tool in any of the following ways:

*	[Install from GitHub](#install-github)
*	[Install from `repo.magento.com`](#install-repo)

### Install the tool from GitHub {#install-github}
This section discusses how to install the migration tool if you cloned the Magento 2 and migration tool GitHub repositories.

Before you continue, make sure you [verified the version](#data-migrate-prereq) of the Magento 2 software.

To install the Data Migration Tool from GitHub, use the following steps:

1.	Log in to your Magento server as, or switch to, <a href="{{ site.gdeurl21 }}install-gde/prereq/apache-user.html">the Magento file system owner</a>.
2.	Change to Magento 2 root directory.
3.	Enter the following commands:

		composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool
		composer require magento/data-migration-tool:<version>

	where `<version>` must match the version of the Magento 2 codebase.

	For example, for version 2.0.2, enter:

		composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool
		composer require magento/data-migration-tool:2.0.2

### Install the tool from `repo.magento.com` {#install-repo}
To install the Data Migration Tool, you must update `composer.json` in the Magento root installation directory to provide the location of the Data Migration Tool package. 

Before you continue, make sure you [verified the version](#data-migrate-prereq) of the Magento 2 software.

To install the Data Migration Tool:

1.	Log in to your Magento server as, or switch to, <a href="{{ site.gdeurl21 }}install-gde/prereq/apache-user.html">the Magento file system owner</a>.
2.	Change to Magento 2 root directory.
3.	Enter the following commands in the order shown:

		composer config repositories.magento composer https://repo.magento.com
		composer require magento/data-migration-tool:<version>

	where `<version>` must match the version of the Magento 2 codebase.

	For example, for version 2.0.2, enter:

		composer config repositories.magento composer https://repo.magento.com
		composer require magento/data-migration-tool:2.0.2

4.  	When prompted, enter your <a href="http://devdocs.magento.com/guides/v2.0/install-gde/prereq/connect-auth.html">authentication keys</a>. Your public key is your username; your private key is your password.


###Related topics

* <a href="{{ site.gdeurl21 }}migration/migration-tool-configure.html">Configure migration</a>
* <a href="{{ site.gdeurl21 }}migration/migration-tool-preconditions.html">Preconditions</a>
