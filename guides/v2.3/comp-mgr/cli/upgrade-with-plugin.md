---
group: software-update-guide
title: (Experimental) Command-line upgrade using the Magento composer root plugin
functional_areas:
  - Upgrade
---

<!-- Topic variables
{% capture ce %}{{site.data.var.ce}}{% endcapture %}
{% capture ee %}{{site.data.var.ee}}{% endcapture %}
-->

{: .bs-callout-warning}
This upgrading scenario is still under development and is published here to make it available for the Community to test.
Do not use it on production.

The [`magento/composer-root-update-plugin`][custom composer plugin] Composer plugin resolves changes that need to be made to the root project `composer.json` file before updating to a new Magento product requirement.

Basically, this section repeats the manual upgrade scenario with the only exclusion that you are guided to install the plugin to resolve the dependency conflicts instead of fixing them manually.

## Ensure to comply with prerequisites

Refer to [Prerequisites][].

## Backup `composer.json`

Backup the existing `composer.json` file in the Magento installation directory.

## Install the plugin

```bash
composer require magento/composer-root-update-plugin 1.0.0 --no-update
composer update
```

## Manage packages

Specify needed packages and remove any unneeded ones before proceeding with the upgrade.

### Deactivate the {{ ce }} update (for edition upgrade only)

_Optional_—If you are upgrading from {{ ce }} to {{ ee }}, deactivate the {{ ce }} update:

```bash
composer remove magento/product-community-edition --no-update
```

### Specify Magento packages

Indicate the Magento packages, both the edition (`community` or `enterprise`) and the version (`2.3.0`), that you want to upgrade to.

_{{ ce }}_:

```bash
composer require magento/product-community-edition=2.3.0 --no-update
```

_{{ ee }}_:

```bash
composer require magento/product-enterprise-edition=2.3.0 --no-update
```

{%
include note.html
type='tip'
content='To see a full list of available 2.3 versions:

_Magento Open Source_:

```bash
composer show magento/product-community-edition 2.3.* --all | grep -m 1 versions
```

_Magento Commerce_:

```bash
composer show magento/product-enterprise-edition 2.3.* --all | grep -m 1 versions
```

'
%}

## Modify the Magento updater

_Optional_—If the Magento updater is installed (it is located in `update/`) modify it:

1. Backup `update/` directory.
2. Create a Composer project.

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
3. Remove the old `update/` directory and move the `temp_dir/update/` to the `update/` directory:

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

{:.bs-callout .bs-callout-info}
Updating the metadata in `composer.json` file is entirely superficial, not functional.

Update the `"name"`, `"version"`, and `"description"` fields in the `composer.json` file as desired.

## Apply updates

```bash
composer update
```

## Clean the Magento cache

After applying an update, you must clean the cache.

```bash
bin/magento cache:clean
```

## Manually clear caches and generated content

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

{:.bs-callout .bs-callout-info}
If you use cache storage other than the filesystem, such as Redis or Memcached, you must manually clear the cache there too.

## Update the database schema and data

```bash
bin/magento setup:upgrade
```

## Disable maintenance mode

```bash
bin/magento maintenance:disable
```

## Restart Varnish

_Optional_—If you use Varnish for page caching, restart it:

```bash
service varnish restart
```

## Check your work

Open your storefront URL in a web browser to check whether the upgrade was successful. If your upgrade was unsuccessful, your storefront will not load properly.

If the application fails with a  `We're sorry, an error has occurred while generating this email.` error:

1. Reset [file system ownership and permissions] as a user with `root` privileges.
2. Clear these directories:
   - `var/cache`
   - `var/page_cache`
   - `generated/code`
3. Check your storefront in your web browser again.

<!-- Link definitions -->

[file system ownership and permissions]: {{ page.baseurl }}/install-gde/prereq/file-system-perms.html
[Prerequisites]: cli-upgrade.html#prerequisites
