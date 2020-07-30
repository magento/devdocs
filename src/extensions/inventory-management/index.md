---
group: extensions
title: Install Inventory Management
redirect_from: guides/v2.3/comp-mgr/install-extensions/inventory-management-installation.html
---

{{site.data.var.im}} modules provide all inventory features and options for Single and Multi Source merchants to manage product quantities and stock for sales channels. These features are available in 2.3.x {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

These features and extensions were developed as part of the [Magento Inventory (MSI) project](https://github.com/magento/inventory) through the Magento Community Engineering program.

{{site.data.var.im}} installs with Magento {{site.data.var.ce}} and {{site.data.var.ee}} with all features enabled by default. No additional steps are required for enabling these inventory features. Upgrades from v2.1.x or 2.2.x may require additional steps. See [Upgrade Inventory Management](#upgrade-inventory-management).

We recommend installing according to [Install Magento Using Composer]({{site.baseurl}}/guides/v2.4/install-gde/composer.html). You must install with a metapackage to receive all {{site.data.var.im}} modules.

The following line in the `composer.json` metapackage installs Inventory Management:

```json
        magento/inventory-composer-metapackage = 1.1.3
```

For a list of {{site.data.var.im}} metapackage versions, see the [release notes]({{site.baseurl}}/guides/v2.4/inventory/release-notes.html).

The {{site.data.var.im}} installation process adds all modules to the `<Magento_installation_directory>/app/etc/config.php` file. A `1` value indicates the corresponding module is enabled. The following list of modules are added:

```php
        'Magento_Inventory' => 1,
        'Magento_InventoryAdminUi' => 1,
        'Magento_InventoryAdvancedCheckout' => 1,
        'Magento_InventoryApi' => 1,
        'Magento_InventoryBundleProduct' => 1,
        'Magento_InventoryBundleProductAdminUi' => 1,
        'Magento_InventoryCatalog' => 1,
        'Magento_InventorySales' => 1,
        'Magento_InventoryCatalogAdminUi' => 1,
        'Magento_InventoryCatalogApi' => 1,
        'Magento_InventoryCatalogSearch' => 1,
        'Magento_InventoryConfigurableProduct' => 1,
        'Magento_InventoryConfigurableProductAdminUi' => 1,
        'Magento_InventoryConfigurableProductIndexer' => 1,
        'Magento_InventoryConfiguration' => 1,
        'Magento_InventoryConfigurationApi' => 1,
        'Magento_InventoryDistanceBasedSourceSelection' => 1,
        'Magento_InventoryDistanceBasedSourceSelectionAdminUi' => 1,
        'Magento_InventoryDistanceBasedSourceSelectionApi' => 1,
        'Magento_InventoryElasticsearch' => 1,
        'Magento_InventoryExportStockApi' => 1,
        'Magento_InventoryIndexer' => 1,
        'Magento_InventorySalesApi' => 1,
        'Magento_InventoryGroupedProduct' => 1,
        'Magento_InventoryGroupedProductAdminUi' => 1,
        'Magento_InventoryGroupedProductIndexer' => 1,
        'Magento_InventoryImportExport' => 1,
        'Magento_InventoryCache' => 1,
        'Magento_InventoryLowQuantityNotification' => 1,
        'Magento_InventoryLowQuantityNotificationApi' => 1,
        'Magento_InventoryMultiDimensionalIndexerApi' => 1,
        'Magento_InventoryProductAlert' => 1,
        'Magento_InventoryRequisitionList' => 1,
        'Magento_InventoryReservations' => 1,
        'Magento_InventoryReservationCli' => 1,
        'Magento_InventoryReservationsApi' => 1,
        'Magento_InventoryExportStock' => 1,
        'Magento_InventorySalesAdminUi' => 1,
        'Magento_InventorySalesFrontendUi' => 1,
        'Magento_InventorySetupFixtureGenerator' => 1,
        'Magento_InventoryShipping' => 1,
        'Magento_InventorySourceDeductionApi' => 1,
        'Magento_InventorySourceSelection' => 1,
        'Magento_InventorySourceSelectionApi' => 1,
        'Magento_InventoryLowQuantityNotificationAdminUi' => 1,
        'Magento_InventoryShippingAdminUi' => 1,
        'Magento_InventoryGraphQl' => 1,
```

## Enable {{site.data.var.im}} features

When installed, upgraded, or updated, the **Manage Stock** option in the Admin enables by default. This option enables inventory tracking and management, but does not affect module status. To disable modules, see the next section.

For more information on configurations, see [Enabling Inventory Management](https://docs.magento.com/m2/ce/user_guide/catalog/inventory.html) in the Magento 2 User Guide.

## Disable {{site.data.var.im}}

You may need to disable {{site.data.var.im}} modules to:

*  Speed up the upgrade process for merchants migrating from 2.0.x, 2.1.x, 2.2.x, or 2.3.x to 2.4.x.
*  Use custom or third-party inventory and Order Management System (OMS) modules.
*  Use [OMS](https://omsdocs.magento.com) for inventory and order management. The current OMS Connector does not support {{site.data.var.im}} interfaces. We plan to support this integration in a later release.

See the [Enable or disable modules]({{site.baseurl}}/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html) topic, specifically the [Module status]({{site.baseurl}}/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-status) and [Module enable, disable]({{site.baseurl}}/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable) sections, for information about how to disable the applicable modules.

When complete, you should a list of modules and values in `<Magento_installation_directory>/app/etc/config.php`, beginning with:

```php
   'Magento_Inventory' => 0,
   'Magento_InventoryAdminUi' => 0,
   'Magento_InventoryAdvancedCheckout' => 0,
   ...
```

{:.bs-callout-warning}
If you have the OMS Connector modules installed, ensure you do not disable the `Magento_InventoryMessageBus` module. It's a Connector module, not an MSI one, and you need it to use the Connector with OMS.

## Upgrade {{site.data.var.im}}

### Previous Magento versions

When upgrading or updating an existing 2.1.x, 2.2.x, or 2.3.x Magento installation to Magento {{site.data.var.ce}} or {{site.data.var.ee}} 2.4.x, {{site.data.var.im}} modules will be disabled by default. This is a precaution to prevent backward incompatible upgrades and to better support Magento Order Management (OMS).

Currently, Order Management does not support {{site.data.var.im}} (future development planned). When upgrading, {{site.data.var.im}} modules will be disabled to allow OMS and Magento 2.3.x to work seamlessly.

To enable {{site.data.var.im}} modules:

1. Edit the `<Magento_installation_directory>/app/etc/config.php` file.
1. Modify all Inventory modules from `0` to `1` to enable.
1. Update the database:

   ```bash
   bin/magento setup:upgrade
   ```

1. Clean the cache:

   ```bash
   bin/magento cache:clean
   ```

We also recommend using [reservation inconsistencies commands]({{site.baseurl}}/guides/v2.4/inventory/inventory-cli-reference.html) after upgrading. When upgrading, all of your products will be added to the Default Stock. If you have pending orders, the commands correctly update your salable quantity and reservations for sales and order fulfillment.

### Previous {{site.data.var.im}} versions

When upgrading from previous releases of {{site.data.var.im}} to the latest version, follow normal extension upgrade steps.

For the latest, update your metapackage version:

```json
        magento/inventory-composer-metapackage = 1.1.3
```

See the following guides for more information on upgrades:

*  [Software Update Guide]({{site.baseurl}}/guides/v2.4/comp-mgr/bk-compman-upgrade-guide.html)
*  [Enable or disable modules]({{site.baseurl}}/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html)

## Additional information

See the following guides for more information on {{site.data.var.im}}:

*  [Release Notes]({{site.baseurl}}/guides/v2.4/inventory/release-notes.html)
*  [Inventory Management]({{site.baseurl}}/guides/v2.4/inventory/index.html) overview for developer resources
*  [Managing Inventory](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-management.html) in the Magento 2 User Guides for merchant information
