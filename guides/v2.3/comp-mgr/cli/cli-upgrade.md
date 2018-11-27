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

You can upgrade Magento from the command line if you installed the software by:

* Downloading the {% glossarytooltip 7490850a-0654-4ce1-83ff-d88c1d7d07fa %}metapackage{% endglossarytooltip %} using `composer create-project`.
* Installing the compressed archive.

There are two ways to upgrade your Magento application to the 2.3 version:
1. [Upgrade using the command line] (manual process)
2. [Upgrade using the script] (semi-automated process)

The upgrade scenario is the same for each of these options (both utilize Composer and a command line interface) from the system's point of view. However, if you upgrade using the script several of the steps are automated.

{:.bs-callout .bs-callout-warning}
Both scenarios require that you comply with the [Prerequisites].

{:.bs-callout .bs-callout-info}
If you cloned the Magento 2 GitHub repository, you **cannot** use this method to upgrade. Instead, see [Update the Magento application] for upgrade instructions.

## Prerequisites

Complete the following prerequisites to prepare your environment before starting the upgrade process:
* **Complete the Update and upgrade checklist**—To avoid possible errors during installation or upgrading, complete the [Update and upgrade checklist].
* **Set the `pub` directory root**—If you set the Magento root directory to `<your Magento install dir>/pub`, create another subdomain or docroot that uses the Magento installation directory as its root, and run the [System Upgrade utility] using that subdomain.
* **Check PHP and environment settings**—Verify that your PHP and other environment settings are compatible with the [system requirements].
* **Switch to maintenance mode**—To prevent access to your store while it's being upgraded, switch your store to maintenance mode:

    ```bash
    php <your Magento install dir>/bin/magento maintenance:enable
    ```

    See [Enable or disable maintenance mode] for additional options.

    {:.bs-callout .bs-callout-info}
    Optionally, you can create a [custom maintenance mode page].

## Upgrade using the command line {#upgrade-cli-upgr}

Using the more manual process of upgrading via the command line allows you to track and control exactly what's being changed in the upgrade. If you previously made updates to the same values that the upgrade script affects, the script will override those values, so using the manual process is the best approach. Upgrading using the script process is a bit easier and less intensive, if you have not made updates to values that the script affects.
   
### Backup `composer.json`

Backup the existing `composer.json` file in the Magento installation directory.

### Manage packages

Specify needed packages and remove any unneeded ones before proceeding with the upgrade.

#### Deactivate the {{ ce }} update

_Optional_—If you are upgrading from {{ ce }} to {{ ee }}, deactivate the {{ ce }} update:
 
```bash
composer remove magento/product-community-edition --no-update
```

#### Specify Magento packages

Indicate the Magento packages, both the edition (`community` or `enterprise`) and the version (`2.3.0`), that you want to upgrade to.

_{{ ce }}_
```bash
composer require magento/product-community-edition=2.3.0 --no-update
```

_{{ ee }}_
```bash
composer require magento/product-enterprise-edition=2.3.0 --no-update
```

{%
include note.html
type='tip'
content='To see a full list of available 2.3 versions:

_Magento Open Source_
```bash
composer show magento/product-community-edition 2.3.* --all | grep -m 1 versions
```
_Magento Commerce_
```bash
composer show magento/product-enterprise-edition 2.3.* --all | grep -m 1 versions
```
'
%}

#### Specify additional packages

```bash
composer require --dev phpunit/phpunit:~6.2.0 friendsofphp/php-cs-fixer:~2.10.1 lusitanian/oauth:~0.8.10 pdepend/pdepend:2.5.2 sebastian/phpcpd:~3.0.0 squizlabs/php_codesniffer:3.2.2 --no-update
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
    ...
}
```

### Modify the Magento updater

_Optional_—If the Magento updater is installed (it is located in `<Magento install dir>/update`) modify it:

1. Backup and remove the old updater, in the `<Magento install dir>/update` directory.
1. Create a Composer project.
   
   _{{ ce }} version 2.3.0:_
    ```bash
    composer create-project --repository=https://repo.magento.com magento/project-community-edition=2.3.0 temp_dir --no-install
    ```

    _{{ ee }} version 2.3.0:_

    ```bash
    composer create-project --repository=https://repo.magento.com magento/project-enterprise-edition=2.3.0 temp_dir --no-install
    ```

    {:.bs-callout .bs-callout-info}
      If you need to use a repository that contains non-public packages, such as internal sandboxes, change the URL in `--repository` accordingly.
1. Move the project to the `<Magento install dir>/update` directory:

   ```bash
   mkdir update
   ```
   ```bash
   mv temp_dir/update <Magento install dir>/update
   ```
   ```bash
   rm -rf temp_dir
   ```

### Update metadata

Update the `"name"`, `"version"`, and `"description"` fields in the `<Magento install dir>/composer.json` file as desired.

{:.bs-callout .bs-callout-info}
Updating the metadata in `composer.json` file is entirely superficial, not functional.

### Apply updates

```bash
composer update
```

### Clear caches and generated content

Clear the `var` and `generated` subdirectories:

```bash
rm -rf <Magento install dir>/var/cache/*
```
```bash
rm -rf <Magento install dir>/var/page_cache/*
```
```bash
rm -rf <Magento install dir>/generated/code/*
```

{:.bs-callout .bs-callout-info}
If you use a cache storage other than the filesystem, such as Redis or Memcached, you must manually clear the cache there too.
    
### Update the database schema and data

```bash
php bin/magento setup:upgrade
```

### Disable maintenance mode

```bash
php bin/magento maintenance:disable
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
1. Clear these directories:
   * `<your Magento install dir>/var/cache`
   * `<your Magento install dir>/var/page_cache`
   * `<your Magento install dir>/generated/code`
1. Check your storefront in your web browser again.
   
## Upgrade using the script {#upgrade-cli-script}

Upgrading your Magento installation with our script, which makes the upgrade process semi-automated, is the preferred method—it's easy, quick, and efficient.

Run this script after upgrading to PHP 7.1 or 7.2.

{:.bs-callout .bs-callout-info}
If you previously made updates to the same values that the upgrade script affects, the script will override those values, so using [the manual process] is the best approach.

The upgrade script:
- Updates Magento with the 2.3 requirements.
- Backs up the `composer.json` file.
- Specifies the new version of the Magento metapackage.
- Updates the `"require-dev"` section in the `composer.json` file.
- Adds `"Zend\\Mvc\\Controller\\": "setup/src/Zend/Mvc/Controller/"` to the `"autoload":"psr-4"` section in the `composer.json` file.
- Backs up and updates the `magento/updater`, if it has been installed.
- Updates the `"name"`, `"version"`, and `"description"` fields in the `composer.json` file.

### Download the script

Download, or copy, the script file from the `magento/magento2` repo, [`/dev/tools/UpgradeScripts/pre_composer_update_2.3.php`][script].

### Show script options

```bash
php -f pre_composer_update_2.3.php -- --help
```

### Run the script

```bash
php -f pre_composer_update_2.3.php -- --root='<path/to/magento/install/dir>' <options>
```

### Apply updates

```bash
composer update
```

### Clear caches and generated content

Clear the `var` and `generated` subdirectories:

```bash
rm -rf <Magento install dir>/var/cache/*
```
```bash
rm -rf <Magento install dir>/var/page_cache/*
```
```bash
rm -rf <Magento install dir>/generated/code/*
```

{:.bs-callout .bs-callout-info}
If you use a cache storage other than the filesystem, such as Redis or Memcached, you must manually clear the cache there too.
    
### Update the database schema and data

```bash
php bin/magento setup:upgrade
```

### Disable maintenance mode

```bash
php bin/magento maintenance:disable
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
1. Clear these directories:
   * `<your Magento install dir>/var/cache`
   * `<your Magento install dir>/var/page_cache`
   * `<your Magento install dir>/generated/code`
1. Check your storefront in your web browser again.

<!-- Link definitions -->

[authentication keys]: {{ page.baseurl }}/install-gde/prereq/connect-auth.html
[custom maintenance mode page]: {{ page.baseurl }}/comp-mgr/trouble/cman/maint-mode.html
[Enable or disable maintenance mode]: {{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html
[file system ownership and permissions]: {{ page.baseurl }}/install-gde/prereq/file-system-perms.html
[script]: https://raw.githubusercontent.com/magento/magento2/2.3.0/dev/tools/UpgradeScripts/pre_composer_update_2.3.php
{:target="_blank"}
[system requirements]: {{ page.baseurl }}/install-gde/system-requirements-tech.html
[System Upgrade utility]: {{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html
[Update and upgrade checklist]: ../prereq/prereq_compman-checklist.html
[Update the Magento application]: {{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html
[Upgrade using the command line]: #upgrade-cli-upgr
[Upgrade using the script]: #upgrade-cli-script
[Prerequisites]: #prerequisites
[the manual process]: #upgrade-cli-upgr
