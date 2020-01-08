---
group: software-update-guide
title: Command-line upgrade
functional_areas:
  - Upgrade
---

You can upgrade Magento from the command line if you installed the software using any of the following:

*  Downloaded the [metapackage](https://glossary.magento.com/metapackage) using `composer create-project`
*  Installed the compressed archive

 {:.bs-callout-info}
If you cloned the Magento 2 GitHub repository, you **cannot** use this method to upgrade; instead, see [Update the Magento application]({{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html).

## Pre-upgrade checklist

{% include comp-man/checklist_2.2.md %}

## Prerequisite: `pub` directory root {#upgrade-cli-pub}

This section applies to you *only* if you set the Magento root directory to `<magento_root>/pub`.
If you did not do this, skip this section and continue with the next section.

If you use pub as your Magento root directory:

*  For the upgrade, create another subdomain or docroot that uses the Magento installation directory as its root.

   Run the [System Upgrade utility]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html) using that subdomain.

*  Use the [following procedure](#upgrade-cli-upgr) to upgrade Magento using the command line.

## Put your store in maintenance mode {#upgrade-cli-maint}

To prevent access to your store while it's being upgraded, put your store in maintenance mode.

 {:.bs-callout-info}
You can optionally create a [custom maintenance mode page]({{ page.baseurl }}/comp-mgr/trouble/cman/maint-mode.html).

To enable maintenance mode:

1. Log in to your Magento server as, or switch to, the Magento file system owner.
1. Enter the following command:

   ```bash
   php <magento_root>/bin/magento maintenance:enable
   ```

   For additional options, see [Enable or disable maintenance mode]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html).

## Upgrade using the command line {#upgrade-cli-upgr}

1. Log in to your Magento server as, or switch to, the Magento file system owner.
1. Change to the directory in which you installed the Magento software. For example,

   ```bash
   cd /var/www/html/magento2
   ```

1. Require the Magento package using Composer and update the dependencies:

   ```bash
   composer require <product> <version> --no-update
   ```

   ```bash
   composer update
   ```

   For example, to upgrade to {{ site.data.var.ce }} version {{ page.guide_version }}.10, enter:

   ```bash
   composer require magento/product-community-edition {{ page.guide_version }}.10 --no-update
   ```

   ```bash
   composer update
   ```

   To upgrade to Magento EE version {{ page.guide_version }}.10, enter:

   ```bash
   composer require magento/product-enterprise-edition {{ page.guide_version }}.10 --no-update
   ```

   ```bash
   composer update
   ```

1. If prompted, enter your [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html).

1. Clean the Magento cache:

   ```bash
   bin/magento cache:clean
   ```

1. Manually clear `var` subdirectories:

   ```bash
   rm -rf <Magento install dir>/var/cache/*
   rm -rf <Magento install dir>/var/page_cache/*
   rm -rf <Magento install dir>/generated/code/*
   ```

    {:.bs-callout-info}
   If you use a cache storage other than filesystem (e.g., Redis, Memcached, etc.) you need to manually clear the cache there too.

1. Update the database schema and data:

   ```bash
   php bin/magento setup:upgrade
   ```

1. Put your storefront online (that is, cancel maintenance mode):

   ```bash
   php bin/magento maintenance:disable
   ```

1. Restart Varnish if you use it for page caching.

   ```bash
   service varnish restart
   ```

1. Access your storefront.

   The following error might display:

   ```terminal
   We're sorry, an error has occurred while generating this email.
   ```

   If so, perform the following tasks:

   1. Reset [file system ownership and permissions]({{ page.baseurl }}/install-gde/prereq/file-system-perms.html) as a user with `root` privileges.
   1. Clear the following directories and try again:
     *  `<magento_root>/var/cache`
     *  `<magento_root>/var/page_cache`
     *  `<magento_root>/generated/code`
