---
group: live-search
title: Installing Live Search
ee_only: True
---

Live Search is a standalone meta package that replaces the default Magento Search capabilities.

## Requirements

- Magento 2.4.x or 2.3.5
- PHP 7.3 (The catalog-data-exporter is not compatible with previous PHP versions.)

## Install Live Search

Composer is required to install and manage updates to the Live Search module.

To install Live Search:

```text
$   composer require magento/module-live-search
```

### Dependencies

The following Live Search dependencies are captured by Composer:

|**Dependency**|**Description**|
|---|---|
|`saas-export`|Syncs your catalog and product attribute information including product names, pricing, inventory availability, and more.|
|`services-connector`|Required to configure your connection to the Magento Services.|
|`module-services-id`|Required to configure your connection to the Magento Services.|

## Uninstall

To uninstall Live Search, see [Uninstall modules]({{ page.baseurl }}/guides/v2.4/install-gde/install/cli/install-cli-uninstall-mods.html)

## Update Live Search

To update Live Search:

```text
$   composer update magento/module-live-search–with-dependencies
```

To update to a major version, such as from 1.0 to 2.0, you need to edit the project’s root Composer `.json` file.

1.  Open the `main.json` file and search for `magento/module-live-search`.

1.  In the `.json` file, update the version number in the code:

    ```text
      "require": {
        ...
       "magento/module-live-search": "^2.0",
        ...
    }
   ```

1.  **Save** `composer.json` and **Run**.

    ```text
    $  composer update magento/live-search–with-dependencies
    ```
