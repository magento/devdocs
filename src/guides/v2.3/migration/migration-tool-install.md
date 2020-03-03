---
group: migration-guide
subgroup: C_DMTool
title: Install Data Migration Tool
menu_title: Install Data Migration Tool
menu_node:
menu_order: 2
---

## Prerequisite: Versions of Magento and Data Migration Tool must match {#data-migrate-prereq}

Make sure you are using *the same released version* of both Magento 2 and the Data Migration Tool. For example, for Magento version 2.2.0, you must also use the Data Migration Tool version 2.2.0.

### Check your Magento 2 version {#magento-version}

#### Composer metapackage

If you downloaded the Magento software using a [Composer](https://glossary.magento.com/composer) metapackage, enter the following command:

```bash
php <magento_root>/bin/magento --version
```

#### GitHub repository

If you cloned the Magento 2 GitHub repository, enter the following commands:

```bash
cd <your Magento 2 clone directory>
```

```bash
git branch
```

If you're currently in the `develop` branch, you must change to a <a href="{{ page.baseurl }}/install-gde/install/cli/dev_downgrade.html">released branch</a> before you continue.

If you haven't installed the Magento software yet, [install it now]({{ page.baseurl }}/install-gde/bk-install-guide.html).
If you're cloning the GitHub repository, make sure you check out a release tag as discussed in [(Contributor) Clone the Magento repository]({{ page.baseurl }}/install-gde/prereq/dev_install.html).

### Find released versions of Data Migration Tool {#migration-tool-release-version}

Go to the [Releases](https://github.com/magento/data-migration-tool/releases){:target="_blank"} page of the Data Migration Tool GitHub repository to find available released versions.

## Install Data Migration Tool {#data-migrate-install}

You may install the Data Migration Tool from:

*  [`repo.magento.com`](#install-repo)

*  [GitHub](#install-github)

Before installing, make sure you have:

*  Completed all tasks mentioned in the [Preconditions]({{ page.baseurl }}/migration/migration-tool-preconditions.html) section
*  [Verified the version]({{ page.baseurl }}/migration/migration-tool-install.html#data-migrate-prereq) of the Magento 2 software

### Install from `repo.magento.com` {#install-repo}

To install the Data Migration Tool, you must update `composer.json` in the Magento root installation directory to provide the location of the Data Migration Tool package.

1. Log in to your Magento server as, or switch to, <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">the Magento file system owner</a>.
1. Change to Magento 2 root directory.
1. Enter the following commands:

   ```bash
   composer config repositories.magento composer https://repo.magento.com
   ```

   ```bash
   composer require magento/data-migration-tool:<version>
   ```

   where `<version>` must match the version of the Magento 2 codebase.

   For example, for version 2.2.0, enter:

   ```bash
   composer config repositories.magento composer https://repo.magento.com
   ```

   ```bash
   composer require magento/data-migration-tool:2.2.0
   ```

1. When prompted, enter your <a href="{{ page.baseurl }}/install-gde/prereq/connect-auth.html">authentication keys</a>. Your public key is your username; your private key is your password.

### Install from GitHub {#install-github}

If you've cloned Magento 2 from the GitHub repository, follow the steps below to install the Data Migration Tool.

1. Log in to your Magento server as, or switch to, <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">the Magento file system owner</a>.
1. Change to Magento 2 root directory.
1. Enter the following commands:

   ```bash
   composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool
   ```

   ```bash
   composer require magento/data-migration-tool:<version>
   ```

   where `<version>` must match the version of the Magento 2 codebase.

   For example, for version 2.2.0, enter:

   ```bash
   composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool
   ```

   ```bash
   composer require magento/data-migration-tool:2.2.0
   ```

### Check version of installed Data Migration Tool {#migration-tool-install-version}

1. Change to your Data Migration Tool directory: `<vendor>/magento/data-migration-tool`.

1. Open [`composer.json`][composer-json] in a text editor.

1. The `version` entry in that file is the version of the Data Migration Tool.

{:.ref-header}
Related topics

*  <a href="{{ page.baseurl }}/migration/migration-tool-configure.html">Configure migration</a>
*  <a href="{{ page.baseurl }}/migration/migration-tool-preconditions.html">Preconditions</a>

[composer-json]: https://github.com/magento/data-migration-tool/blob/{{ page.guide_version }}/composer.json
