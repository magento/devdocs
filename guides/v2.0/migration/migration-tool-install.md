---
layout: default
group:  migration
subgroup: C_Data migration tool
title: Install Data Migration Tool
menu_title: Install Data Migration Tool
menu_node:
menu_order: 2
version: 2.0
github_link: migration/migration-tool-install.md
redirect_from: /guides/v1.0/migration/migration-tool-install.html
---

## {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

## Prerequisite: Versions of Magento and Data Migration Tool {#data-migrate-prereq}

Make sure you are using *the same released version* of both Magento 2 and the Data Migration Tool. For example, for Magento version 2.1.2, you must also use the Data Migration Tool version 2.1.2.

### Check your Magento 2 version {#magento-version}

#### Composer metapackage

If you downloaded the Magento software using a Composer metapackage, enter the following command:

	php <your Magento install dir>/bin/magento --version

#### Github repository

If you cloned the Magento 2 GitHub repository, enter the following commands:

	cd <your Magento 2 clone directory>
	git branch

If you're currently in the `develop` branch, you must change to a <a href="{{page.baseurl}}install-gde/install/cli/dev_downgrade.html">released branch</a> before you continue.

<div class="bs-callout bs-callout-tip">
	<p>If you haven't installed the Magento software yet, <a href="{{page.baseurl}}install-gde/continue.html">install it now</a>.</p>

	<p>If you're cloning the GitHub repository, make sure you check out a release tag as discussed in <a href="{{page.baseurl}}install-gde/prereq/dev_install.html">(Contributor) Clone the Magento repository</a>.</p>
</div>

### Find released versions of Data Migration Tool {#migration-tool-release-version}

Go to the [Releases](https://github.com/magento/data-migration-tool/releases){:target="_blank"} page of the Data Migration Tool [Github repository](https://github.com/magento/data-migration-tool) to find available released versions.

## Install Data Migration Tool {#data-migrate-install}

You may install the Data Migration Tool from:

1. [GitHub](#install-github)

2. [`repo.magento.com`](#install-repo)

<div class="bs-callout bs-callout-info" id="info">
  <p>Before installing, make sure you have:</p>
	<ul>
		<li>
			Completed all tasks mentioned in the <a href="{{page.baseurl}}migration/migration-tool-preconditions.html">Preconditions</a> section
		</li>

		<li>
			<a href="{{page.baseurl}}migration/migration-tool-install.html#data-migrate-prereq">Verified the version</a> of the Magento 2 software
		</li>
	</ul>
</div>

### Install from GitHub {#install-github}

If you've cloned the GitHub repositories of Magento 2 and the Tool, follow the steps below to install the Data Migration Tool.

1.	Log in to your Magento server as, or switch to, <a href="{{page.baseurl}}install-gde/prereq/apache-user.html">the Magento file system owner</a>.
2.	Change to Magento 2 root directory.
3.	Enter the following commands:

		composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool
		composer require magento/data-migration-tool:<version>

	where `<version>` must match the version of the Magento 2 codebase.

	For example, for version 2.1.2, enter:

		composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool
		composer require magento/data-migration-tool:2.1.2

### Install from `repo.magento.com` {#install-repo}

To specify location of the Data Migration Tool package, you must update the `composer.json` file in the Magento root installation directory.

1.	Log in to your Magento server as, or switch to, <a href="{{page.baseurl}}install-gde/prereq/apache-user.html">the Magento file system owner</a>.
2.	Change to Magento 2 root directory.
3.	Enter the following commands:

		composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool
		composer require magento/data-migration-tool:<version>

	where `<version>` must match the version of the Magento 2 codebase.

	For example, for version 2.1.2, enter:

		composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool
		composer require magento/data-migration-tool:2.1.2

4.  When prompted, enter your <a href="http://devdocs.magento.com/guides/v2.0/install-gde/prereq/connect-auth.html">authentication keys</a>. Your public key is your username; your private key is your password.

### Check version of installed Data Migration Tool {#migration-tool-install-version}

1. Change to your Data Migration Tool directory: `<vendor>/magento/data-migration-tool`.

2. Open `composer.json` in a text editor.

3. Find the value of the `version` tag.

This is the version of your Data Migration Tool.

## Related topics

* <a href="{{page.baseurl}}migration/migration-tool-configure.html">Configure migration</a>
* <a href="{{page.baseurl}}migration/migration-tool-preconditions.html">Preconditions</a>
