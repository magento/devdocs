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

- Downloading the [metapackage][] using `composer create-project`.
- Installing the compressed archive.

Do not use this method to upgrade if you cloned the Magento 2 GitHub repository.
Instead, see [Update the Magento application] for upgrade instructions.

## Prerequisites

Complete the following prerequisites to prepare your environment before starting the upgrade process:

- **Complete the Update and upgrade checklist**—To avoid possible errors during installation or upgrading, complete the [Update and upgrade checklist].
- **Set the `pub/` directory root**—See [Modify docroot to improve security][] for more details.
- **Check PHP and environment settings**—Verify that your PHP and other environment settings are compatible with the [system requirements].
- **Switch to maintenance mode**—To prevent access to your store while it's being upgraded, switch your store to maintenance mode:

    ```bash
    bin/magento maintenance:enable
    ```

    See [Enable or disable maintenance mode] for additional options.

    {: .bs-callout-info }
    Optionally, you can create a [custom maintenance mode page].

## Upgrade using the command line {#upgrade-cli-upgr}

Using the more manual process of upgrading via the command line allows you to track and control exactly what's being changed in the upgrade.

### Backup `composer.json`

Backup the existing `composer.json` file in the Magento installation directory.

### Manage packages

Specify needed packages and remove any unneeded ones before proceeding with the upgrade.

#### Deactivate the {{ ce }} update (for edition upgrade only)

_Optional_—If you are upgrading from {{ ce }} to {{ ee }}, deactivate the {{ ce }} update:

```bash
composer remove magento/product-community-edition --no-update
```

#### Specify Magento packages

Indicate the Magento packages, both the edition (`community` or `enterprise`) and the version (`{{ page.guide_version }}.2`), that you want to upgrade to.

_{{ ce }}_:

```bash
composer require magento/product-community-edition={{ page.guide_version }}.2 --no-update
```

_{{ ee }}_:

```bash
composer require magento/product-enterprise-edition={{ page.guide_version }}.2 --no-update
```

<div class="bs-callout-tip" markdown="1">
To see the full list of available {{ page.guide_version }} version:

_Magento Open Source_:

```bash
composer show magento/product-community-edition {{ page.guide_version }}.* --all | grep -m 1 versions
```

_Magento Commerce_:

```bash
composer show magento/product-enterprise-edition {{ page.guide_version }}.* --all | grep -m 1 versions
```

</div>

#### Specify additional packages

```bash
composer require --dev allure-framework/allure-phpunit:~1.2.0 friendsofphp/php-cs-fixer:~2.13.0 lusitanian/oauth:~0.8.10 magento/magento-coding-standard:~1.0.0 magento/magento2-functional-testing-framework:~2.3.14 pdepend/pdepend:2.5.2 phpunit/phpunit:~6.5.0 sebastian/phpcpd:~3.0.0 squizlabs/php_codesniffer:3.3.1 --sort-packages --no-update
```

#### Remove unused packages

```bash
composer remove --dev sjparkinson/static-review fabpot/php-cs-fixer --no-update
```

### Update `autoload`

Open `composer.json` and edit the `"autoload": "psr-4"` section to include `"Zend\\Mvc\\Controller\\": "setup/src/Zend/Mvc/Controller/"`:

```json
"autoload": {
    "psr-4": {
        "Magento\\Framework\\": "lib/internal/Magento/Framework/",
        "Magento\\Setup\\": "setup/src/Magento/Setup/",
        "Magento\\": "app/code/Magento/",
        "Zend\\Mvc\\Controller\\": "setup/src/Zend/Mvc/Controller/"
    },
    //...
}
```

### Modify the Magento updater

_Optional_—If the Magento updater is installed, modify it (it is located in the `update/` directory):

1. Backup the `update/` directory.
2. Create a Composer project.

   _{{ ce }} version {{ page.guide_version }}.2:_

    ```bash
    composer create-project --repository=https://repo.magento.com magento/project-community-edition={{ page.guide_version }}.2 temp_dir --no-install
    ```

    _{{ ee }} version {{ page.guide_version }}.2:_

    ```bash
    composer create-project --repository=https://repo.magento.com magento/project-enterprise-edition={{ page.guide_version }}.2 temp_dir --no-install
    ```

    {: .bs-callout-info }
    If you need to use a repository that contains non-public packages, such as internal sandboxes, change the URL in `--repository` accordingly.
3. Remove the old `update/` directory and move `temp_dir/update/` to the `update/` directory:

   ```bash
   rm -rf update
   ```

   ```bash
   mv temp_dir/update .
   ```

   ```bash
   rm -rf temp_dir
   ```

### Update metadata

Update the `"name"`, `"version"`, and `"description"` fields in the `composer.json` file as needed.

{: .bs-callout-info }
Updating the metadata in `composer.json` file is entirely superficial, not functional.

### Apply updates

```bash
composer update
```

### Clean the Magento cache

After applying an update, you must clean the cache.

```bash
bin/magento cache:clean
```

### Manually clear caches and generated content

Clear the `var/` and `generated/` subdirectories:

```bash
rm -rf var/cache/*
```

```bash
rm -rf var/page_cache/*
```

```bash
rm -rf generated/code/*
```

{: .bs-callout-info }
If you use a cache storage other than the filesystem, such as Redis or Memcached, you must manually clear the cache there too.

### Update the database schema and data

```bash
bin/magento setup:upgrade
```

### Disable maintenance mode

```bash
bin/magento maintenance:disable
```

### Restart Varnish

_Optional_—If you use Varnish for page caching, restart it:

```bash
service varnish restart
```

### Check your work

Open your storefront URL in a web browser to check whether the upgrade was successful. If your upgrade was unsuccessful, your storefront will not load properly.

If the application fails with a  `We're sorry, an error has occurred while generating this email.` error:

1. Reset [file system ownership and permissions] as a user with `root` privileges.
2. Clear the following directories:
   - `var/cache/`
   - `var/page_cache/`
   - `generated/code/`
3. Check your storefront in your web browser again.

## Alternatives

There are alternatives methods that automate parts of the upgrade process:

1. [Upgrade using the script][] (semi-automated process)
   Upgrading using the script process is a bit easier and less intensive if you have not made updates to values that the script affects.
   If you previously made updates, do not upgrade using the script. The script will override your updates.
2. EXPERIMENTAL: [Upgrade using the custom Composer plugin][]
   We are developing a [custom Composer plugin][] that enhances the semi-automated upgrade process.

The upgrading scenario is the same for each of these options. Both use Composer and a command line interface.

{: .bs-callout-warning }
All scenarios require that you comply with the [Prerequisites].

<!-- Link definitions -->

[custom composer plugin]: https://github.com/magento/composer-root-update-plugin
[custom maintenance mode page]: {{ page.baseurl }}/comp-mgr/trouble/cman/maint-mode.html
[Enable or disable maintenance mode]: {{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html
[file system ownership and permissions]: {{ page.baseurl }}/install-gde/prereq/file-system-perms.html
[metapackage]: https://glossary.magento.com/metapackage
[Prerequisites]: #prerequisites
[system requirements]: {{ page.baseurl }}/install-gde/system-requirements-tech.html
[System Upgrade utility]: {{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html
[Update and upgrade checklist]: ../prereq/prereq_compman-checklist.html
[Update the Magento application]: {{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html
[Upgrade using the custom composer plugin]: upgrade-with-plugin.html
[Upgrade using the script]: upgrade-with-script.html
[Modify docroot to improve security]: {{ page.baseurl }}/install-gde/tutorials/change-docroot-to-pub.html
