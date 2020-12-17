---
group: software-update-guide
title: Command-line upgrade
functional_areas:
  - Upgrade
---

<!-- Topic variables
{% capture ce %}{{site.data.var.ce}}{% endcapture %}
{% capture ee %}{{site.data.var.ee}}{% endcapture %}
-->

You can upgrade your Magento application from the command line if you installed the software by:

-  Downloading the [metapackage][] using `composer create-project`.
-  Installing the compressed archive.

Do not use this method to upgrade if you cloned the Magento 2 GitHub repository.
Instead, see [Update the Magento application][] for upgrade instructions.

## Prerequisites

Complete the following prerequisites to prepare your environment before starting the upgrade process:

-  **Complete the Update and upgrade checklist**—To avoid possible errors during installation or upgrading, complete the [Update and upgrade checklist].
-  **Set the `pub/` directory root**—See [Modify docroot to improve security][] for more details.
-  **Check PHP and environment settings**—Verify that your PHP and other environment settings are compatible with the [system requirements].
-  **Switch to maintenance mode**—To prevent access to your store while it's being upgraded, switch your store to maintenance mode:

    ```bash
    bin/magento maintenance:enable
    ```

    See [Enable or disable maintenance mode] for additional options.

     {:.bs-callout-info}
    Optionally, you can create a [custom maintenance mode page].
-  **Check the status of cron jobs**—To prevent various unexpected problems during the upgrade, wait for all active running Magento cron jobs to finish or stop them.

Using the more manual process of upgrading via the command line allows you to track and control exactly what is being changed in the upgrade.

## Manage packages

{:.bs-callout-info}
See the examples at the end of this section for help specifying different release levels. For example, minor release, quality patch, and security patch. {{site.data.var.ee}} customers can access 2.3.x patches two weeks before the General Availability (GA) date. Pre-release packages are available through Composer only. You cannot find them on the Magento Portal or GitHub until GA. If you cannot find these packages in Composer, contact Magento Support.

1. Backup the `composer.json` file.

   ```bash
   cp composer.json composer.json.bak
   ```

1. Add or remove specific packages based on your needs. For example, if you are upgrading from {{ ce }} to {{ ee }}, remove the {{ ce }} package.

   ```bash
   composer remove magento/product-community-edition --no-update
   ```

1. Indicate the Magento packages, both the edition (`community` or `enterprise`) and the version (`{{ page.guide_version }}.3`), that you want to upgrade to.

   _{{ ce }}_:

   ```bash
   composer require magento/product-community-edition={{ page.guide_version }}.3 --no-update
   ```

   _{{ ee }}_:

   ```bash
   composer require magento/product-enterprise-edition={{ page.guide_version }}.3 --no-update
   ```

   <div class="bs-callout-tip" markdown="1">
   To see the full list of available {{ page.guide_version }} versions:

   _{{ ce }}_:

   ```bash
   composer show magento/product-community-edition {{ page.guide_version }}.* --all | grep -m 1 versions
   ```

   _{{ ee }}_:

   ```bash
   composer show magento/product-enterprise-edition {{ page.guide_version }}.* --all | grep -m 1 versions
   ```

   </div>

1. Specify additional packages.

   ```bash
   composer require --dev allure-framework/allure-phpunit:~1.2.0 friendsofphp/php-cs-fixer:~2.14.0 lusitanian/oauth:~0.8.10 magento/magento-coding-standard:~3.0.0 magento/magento2-functional-testing-framework:2.4.5 pdepend/pdepend:2.5.2 phpmd/phpmd:@stable phpunit/phpunit:~6.5.0 sebastian/phpcpd:~3.0.0 squizlabs/php_codesniffer:~3.4.0 --sort-packages --no-update
   ```

1. Remove unused packages.

   If you are upgrading from 2.2.x to 2.3.x, remove unused packages with the following command. It is not needed if you are upgrading from 2.3.x.

   ```bash
   composer remove --dev sjparkinson/static-review fabpot/php-cs-fixer --no-update
   ```

### Example - Minor release

Minor releases contain new features, quality fixes, and security fixes. Use Composer to specify a minor release. For example, to specify the {{site.data.var.ee}} 2.3.0 metapackage:

```bash
composer require magento/product-community-edition=2.3.0 --no-update
```

### Example - Quality patch

Quality patches primarily contain functional _and_ security fixes. However, they can also sometimes contain new, backward-compatible features. Use Composer to download a quality patch. For example, to specify the {{site.data.var.ee}} 2.3.3 metapackage:

```bash
composer require magento/product-community-edition=2.3.3 --no-update
```

### Example - Security patch

Security patches contain security fixes only. They are designed to make the upgrade process faster and easier.

Security patches use the Composer naming convention `2.3.3-px`. Use Composer to specify a patch. For example, to download the {{site.data.var.ce}} 2.3.3-p1 metapackage:

```bash
composer require magento/product-community-edition=2.3.3-p1 --no-update
```

## (_Optional)_ Recreate the Magento updater {#recreate-magento-updater}

If the Magento updater is installed, remove and recreate it. It is located in the `update/` directory.

1. Backup the `update/` directory.

1. Create a Composer project.

   _{{ ce }} version {{ page.guide_version }}.3:_

   ```bash
   composer create-project --repository=https://repo.magento.com magento/project-community-edition={{ page.guide_version }}.3 temp_dir --no-install
   ```

   _{{ ee }} version {{ page.guide_version }}.3:_

   ```bash
   composer create-project --repository=https://repo.magento.com magento/project-enterprise-edition={{ page.guide_version }}.3 temp_dir --no-install
   ```

   {:.bs-callout-info}
   If you need to use a repository that contains non-public packages, such as internal sandboxes, change the URL in `--repository` accordingly.

1. Remove the old `update/` directory and move `temp_dir/update/` to the `update/` directory:

   ```bash
   rm -rf update
   ```

   ```bash
   mv temp_dir/update .
   ```

   ```bash
   rm -rf temp_dir
   ```

## Update metadata

1. Update the `"name"`, `"version"`, and `"description"` fields in the `composer.json` file as needed.

   {:.bs-callout-info}
   Updating the metadata in `composer.json` file is entirely superficial, not functional.

1. Apply updates.

   ```bash
   composer update
   ```

1. Clean the Magento cache.

   ```bash
   bin/magento cache:clean
   ```

## Clean up

Manually clear caches and generated content.

1. Clear the `var/` and `generated/` subdirectories:

   ```bash
   rm -rf var/cache/*
   ```

   ```bash
   rm -rf var/page_cache/*
   ```

   ```bash
   rm -rf generated/code/*
   ```

   {:.bs-callout-info}
   If you use a cache storage other than the filesystem, such as Redis or Memcached, you must manually clear the cache there too.

1. Update the database schema and data.

   ```bash
   bin/magento setup:upgrade
   ```

1. Disable maintenance mode.

   ```bash
   bin/magento maintenance:disable
   ```

1. _(Optional)_ Restart Varnish.

   If you use Varnish for page caching, restart it:

   ```bash
   service varnish restart
   ```

## Check your work

Open your storefront URL in a web browser to check whether the upgrade was successful. If your upgrade was unsuccessful, your storefront will not load properly.

If the application fails with a  `We're sorry, an error has occurred while generating this email.` error:

1. Reset [file system ownership and permissions] as a user with `root` privileges.
1. Clear the following directories:
   -  `var/cache/`
   -  `var/page_cache/`
   -  `generated/code/`
1. Check your storefront in your web browser again.

## Alternatives

There are alternatives methods that automate parts of the upgrade process:

1. [Upgrade using the script][] (semi-automated process).
   We recommend using the script to upgrade if you have not made updates to the values that the script affects.
   If you previously made updates, do not upgrade using the script. The script will override your updates.
1. [Upgrade using the custom Composer plugin][].
   We created a [custom Composer plugin][] to enhance the semi-automated upgrade process.

The upgrading scenario is the same for each of these options. Both use Composer and a command line interface.

{:.bs-callout-warning}
All scenarios require that you comply with the [Prerequisites].

<!-- Link definitions -->

[custom composer plugin]: https://github.com/magento/composer-root-update-plugin
[custom maintenance mode page]: {{ page.baseurl }}/comp-mgr/trouble/cman/maint-mode.html
[Enable or disable maintenance mode]: {{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html
[file system ownership and permissions]: {{ page.baseurl }}/install-gde/prereq/file-system-perms.html
[metapackage]: https://glossary.magento.com/metapackage
[Prerequisites]: #prerequisites
[system requirements]: {{ page.baseurl }}/install-gde/system-requirements.html
[System Upgrade utility]: {{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html
[Update and upgrade checklist]: ../prereq/prereq_compman-checklist.html
[Update the Magento application]: {{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html
[Upgrade using the custom composer plugin]: upgrade-with-plugin.html
[Upgrade using the script]: upgrade-with-script.html
[Modify docroot to improve security]: {{ page.baseurl }}/install-gde/tutorials/change-docroot-to-pub.html
