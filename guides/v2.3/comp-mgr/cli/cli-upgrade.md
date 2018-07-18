---
group: compman
title: Command-line upgrade
version: 2.3
github_link: comp-mgr/cli/cli-upgrade.md
functional_areas:
  - Upgrade
---

Upgrade Magento from the command line if you installed the software using any of the following:

* Downloaded the {% glossarytooltip 7490850a-0654-4ce1-83ff-d88c1d7d07fa %}metapackage{% endglossarytooltip %} using `composer create-project`
* Installed the compressed archive

There are two ways to upgrade your Magento application to 2.3:
1. Manual: [Upgrade using the command line].
2. Semi-automated: [Upgrade using the script].
The upgrading scenario is the same from the system's point of view, excepting that several steps are automated using the PHP script.

The both ways require to comply with the pre-upgrade checklist.
{:.bs-callout .bs-callout-warning}

If you cloned the Magento 2 GitHub repository, you **cannot** use this method to upgrade. Instead, see [Update the Magento application].
{:.bs-callout .bs-callout-info}

## Pre-upgrade checklist

Comply with the the [Update and upgrade checklist].

### Prerequisite for the `pub` directory root {#upgrade-cli-pub}

This section applies to you *only* if you set the Magento root directory to `<your Magento install dir>/pub`.
If you did not do this, skip this section and continue with the next section.

If you use pub as your Magento root directory: 

* For the upgrade, create another subdomain or docroot that uses the Magento installation directory as its root.

  Run the [System Upgrade utility] using that subdomain.
* Use the [following procedure] to upgrade Magento using the command line.

### PHP and other environment settings

Check PHP and other environment settings to be compatible with the [system requirements].

### Switch your store to the maintenance mode {#upgrade-cli-maint}

To prevent access to your store while it's being upgraded, put your store in the maintenance mode.

```bash
php <your Magento install dir>/bin/magento maintenance:enable
```

For additional options, see [Enable or disable maintenance mode].

You can optionally create a [custom maintenance mode page].
{:.bs-callout .bs-callout-info}

## Upgrade using the command line {#upgrade-cli-upgr}
   
### Backup `composer.json`

Backup the existing `composer.json` file in the Magento installation directory.
   
### (Optional) To upgrade from {{ site.data.var.ce }} to {{ site.data.var.ee }}

If you are upgrading from {{ site.data.var.ce }} to {{ site.data.var.ee }}, deactivate the {{ site.data.var.ce }} update:
 
```bash
composer remove magento/product-community-edition --no-update
```

### Require the Magento packages using Composer

Require the Magento packages of the corresponding edition (`community` or `enterprise`) and version (`<2.3_version>`).

#### (Optional) If you are upgrading from {{ site.data.var.ce }} to {{ site.data.var.ee }}

If you are upgrading from {{ site.data.var.ce }} to {{ site.data.var.ee }}, deactivate the {{ site.data.var.ce }} update:
 
```bash
composer remove magento/product-community-edition --no-update
```

#### For the {{ site.data.var.ce }}

```bash
composer require magento/product-community-edition=2.3.0 --no-update
```

{%
include note.html
type='tip'
content=' To see a full list of available 2.3 versions, use:

```bash
composer show magento/product-community-edition 2.3.* --all | grep -m 1 versions
```
'
%}

#### For the {{ site.data.var.ee }}

```bash
composer require magento/product-enterprise-edition=2.3.0 --no-update
```

{%
include note.html
type='tip'
content='To see a full list of available 2.3 versions, use:

```bash
composer show magento/product-enterprise-edition 2.3.* --all | grep -m 1 versions
```
'
%}

### Require the additional packages using Composer

```bash
composer require --dev phpunit/phpunit:~6.2.0 friendsofphp/php-cs-fixer:~2.10.1 lusitanian/oauth:~0.8.10 pdepend/pdepend:2.5.2 sebastian/phpcpd:~3.0.0 squizlabs/php_codesniffer:3.2.2 --no-update
```

### Remove the unused packages using Composer

```bash
composer remove --dev sjparkinson/static-review fabpot/php-cs-fixer --no-update
```

### Update `autoload` in `composer.json`

Open `composer.json` and edit the the `"autoload": "psr-4"` section to include `"Zend\\Mvc\\Controller\\": "setup/src/Zend/Mvc/Controller/"`

Example: 

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

### (Optional) Update the Magento updater

Update the Magento updater if it is installed.
It is located at `<Magento install dir>/update` when installed.
To update the tool, follow the guidelines below.

#### Backup and remove the `<Magento install dir>/update` directory

#### Create a Composer project

- For the {{ site.data.var.ce }}

  Example for the 2.3.0 version:

  ```bash
  composer create-project --repository=https://repo.magento.com magento/project-community-edition=2.3.0 temp_dir --no-install
  ```

  If need to use a repository that contains non-public packages such as internal sandboxes, change the URL in `--repository` correspondingly.
  {:.bs-callout .bs-callout-info}

- For the {{ site.data.var.ee }}

  Example for the 2.3.0 version:

  ```bash
  composer create-project --repository=https://repo.magento.com magento/project-enterprise-edition=2.3.0 temp_dir --no-install
  ```

  If need to use a repository that contains non-public packages such as internal sandboxes, change the URL in `--repository` correspondingly.
  {:.bs-callout .bs-callout-info}

#### Move the project to `<Magento install dir>/update`

```bash
mkdir update
```
```bash
mv temp_dir/update <Magento install dir>/update
```
```bash
rm -rf temp_dir
```

### Update metadata in `composer.json`

It is a cosmetic change, not functional.
{:.bs-callout .bs-callout-info}

Update the `"name"`, `"version"`, and `"description"` fields in `<Magento install dir>/composer.json`.

### Apply the updates using Composer

```bash
composer update
```

### Clear `var` subdirectories

```bash
rm -rf <Magento install dir>/var/cache/*
```
```bash
rm -rf <Magento install dir>/var/page_cache/*
```
```bash
rm -rf <Magento install dir>/generated/code/*
```

If you use a cache storage other than filesystem (e.g., Redis, Memcached, etc.) you need to manually clear the cache there too.
{:.bs-callout .bs-callout-info}
    
### Update the database schema and data

```bash
php bin/magento setup:upgrade
```

### Put your storefront online (that is, cancel maintenance mode)

```bash
php bin/magento maintenance:disable
```

### (Optional) Restart Varnish

Restart Varnish if you use it for page caching.

```bash
service varnish restart
```

### Check your storefront online

Open your storefront to check if the upgrade was successful.

#### Troubleshooting

If the application fails with the following error:

```terminal
We're sorry, an error has occurred while generating this email.
```

follow the next steps:

1. Reset [file system ownership and permissions] as a user with `root` privileges.
2. Clear the following directories and check the storefront again:
   * `<your Magento install dir>/var/cache`
   * `<your Magento install dir>/var/page_cache`
   * `<your Magento install dir>/generated/code`
   
## Upgrade using the script {#upgrade-cli-script}

The script updates Magento with the 2.3 requirements.
Run this script after upgrading to PHP 7.1/7.2.

When the script is run, the following steps will be executed:
- Back up `composer.json`
- Require the new version of the Magento metapackage
- Update the `"require-dev"` section in `composer.json`
- Add `"Zend\\Mvc\\Controller\\": "setup/src/Zend/Mvc/Controller/"` to the `"autoload":"psr-4"` section in `composer.json`
- Back up and update `Magento/Updater` if it has been installed
- Update the `"name"`, `"version"`, and `"description"` fields in `composer.json`

### Download the upgrade script

The file containing the upgrade script is available in the `magento/magento2` repo, which is [`/dev/tools/UpgradeScripts/pre_composer_update_2.3.php`][script].
Download or copy the file.

### Check out the available options

```bash
php -f pre_composer_update_2.3.php -- --help
```

### Run the script

```bash
php -f pre_composer_update_2.3.php -- --root='<path/to/magento/install/dir>' <options>
```

### Apply the updates using Composer

```bash
composer update
```

### Clear `var` subdirectories

```bash
rm -rf <Magento install dir>/var/cache/*
```
```bash
rm -rf <Magento install dir>/var/page_cache/*
```
```bash
rm -rf <Magento install dir>/generated/code/*
```

If you use a cache storage other than filesystem (e.g., Redis, Memcached, etc.) you need to manually clear the cache there too.
{:.bs-callout .bs-callout-info}
    
### Update the database schema and data

```bash
php bin/magento setup:upgrade
```

### Put your storefront online (that is, cancel maintenance mode)

```bash
php bin/magento maintenance:disable
```

### (Optional) Restart Varnish

Restart Varnish if you use it for page caching.

```bash
service varnish restart
```

### Check your storefront online

Open your storefront to check if the upgrade was successful.

<!-- Link definitions -->

[script]: https://raw.githubusercontent.com/magento/magento2/2.3-develop/dev/tools/UpgradeScripts/pre_composer_update_2.3.php
[authentication keys]: {{ page.baseurl }}/install-gde/prereq/connect-auth.html
[custom maintenance mode page]: {{ page.baseurl }}/comp-mgr/trouble/cman/maint-mode.html
[Enable or disable maintenance mode]: {{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html
[file system ownership and permissions]: {{ page.baseurl }}/install-gde/prereq/file-system-perms.html
[following procedure]: #upgrade-cli-upgr
[system requirements]: {{ page.baseurl }}/install-gde/system-requirements-tech.html
[System Upgrade utility]: {{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html
[Update and upgrade checklist]: ../prereq/prereq_compman-checklist.html
[Update the Magento application]: {{ page.baseurl }}/install-gde/install/cli/dev_update-magento.html
[Upgrade using the command line]: #upgrade-cli-upgr
[Upgrade using the script]: #upgrade-cli-script
