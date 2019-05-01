---
group: extensions
title: Install Inventory Management
redirect_from: guides/v2.3/comp-mgr/install-extensions/inventory-management-installation.html
---

{{site.data.var.im}} modules provide all inventory features and options for Single and Multi Source merchants to manage product quantities and stock for sales channels. These features are available in Magento 2.3.X Open Source, Commerce, and Commerce Cloud.

These features and extensions were developed as part of the [Multi Source Inventory (MSI) project](https://github.com/magento-engcom/msi) through the Magento Community Engineering program.

{{site.data.var.im}} installs with Magento Open Source or Commerce with all features enabled by default. No additional steps are required for enabling these inventory features.

We recommend installing according to [Install Magento Using Composer]({{site.baseurl}}/guides/v2.3/install-gde/composer.html). You must install with a metapackage to receive all {{site.data.var.im}} modules.

The following line in the `composer.json` metapackage installs Inventory Management:

```json
        magento/inventory-composer-metapackage = ^1.1.0
```

The {{site.data.var.im}} installation process makes the following changes to the `<Magento_installation_directory>/app/etc/config.php` file. A `1` value indicates the corresponding module is enabled.

```json
        'Magento_Inventory' => 1,
        'Magento_InventoryAdminUi' => 1,
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
        'Magento_InventoryGroupedProduct' => 1,
        'Magento_InventoryGroupedProductAdminUi' => 1,
        'Magento_InventoryGroupedProductIndexer' => 1,
        'Magento_InventoryImportExport' => 1,
        'Magento_InventoryIndexer' => 1,
        'Magento_InventoryLowQuantityNotification' => 1,
        'Magento_InventoryLowQuantityNotificationAdminUi' => 1,
        'Magento_InventoryLowQuantityNotificationApi' => 1,
        'Magento_InventoryMultiDimensionalIndexerApi' => 1,
        'Magento_InventoryProductAlert' => 1,
        'Magento_InventoryReservations' => 1,
        'Magento_InventoryReservationsApi' => 1,
        'Magento_InventoryCache' => 1,
        'Magento_InventorySalesAdminUi' => 1,
        'Magento_InventorySalesApi' => 1,
        'Magento_InventorySalesFrontendUi' => 1,
        'Magento_InventoryShipping' => 1,
        'Magento_InventorySourceDeductionApi' => 1,
        'Magento_InventorySourceSelection' => 1,
        'Magento_InventorySourceSelectionApi' => 1,
        'Magento_InventoryShippingAdminUi' => 1,
        'Magento_InventoryDistanceBasedSourceSelection' => 1,
        'Magento_InventoryDistanceBasedSourceSelectionAdminUi' => 1,
        'Magento_InventoryDistanceBasedSourceSelectionApi' => 1,
        'Magento_InventoryElasticsearch' => 1,
        'Magento_InventorySetupFixtureGenerator' => 1,
```

## Enable {{site.data.var.im}} features

When installed, upgraded, or updated, the **Manage Stock** option in the Admin enables by default. This option enables inventory tracking and management, but does not affect module status. To disable modules, see the next section.

For more information on configurations, see [Enabling Inventory Management](https://docs.magento.com/m2/ce/user_guide/catalog/inventory.html) in the Magento 2 User Guide.

## Disable {{site.data.var.im}}

You may need to disable {{site.data.var.im}} modules to:

* Speed up the upgrade process for merchants currently on Magento 2.0.X/2.1.X/2.2.X and migrating to 2.3.X.
* Use custom or third party inventory and order management modules.
* Use [Magento Order Management](https://omsdocs.magento.com) for inventory and order management. The current Order Management connector does not support {{site.data.var.im}} interfaces. We plan to support this integration in a later release.

To disable {{site.data.var.im}}, see the instructions for [Enable or disable modules]({{site.baseurl}}/guides/v2.3/install-gde/install/cli/install-cli-subcommands-enable.html). When complete, you should see the following modules and values in `config.php`:

```json
        'Magento_Inventory' => 0,
        'Magento_InventoryAdminUi' => 0,
        'Magento_InventoryApi' => 0,
        'Magento_InventoryBundleProduct' => 0,
        'Magento_InventoryBundleProductAdminUi' => 0,
        'Magento_InventoryCatalog' => 0,
        'Magento_InventorySales' => 0,
        'Magento_InventoryCatalogAdminUi' => 0,
        'Magento_InventoryCatalogApi' => 0,
        'Magento_InventoryCatalogSearch' => 0,
        'Magento_InventoryConfigurableProduct' => 0,
        'Magento_InventoryConfigurableProductAdminUi' => 0,
        'Magento_InventoryConfigurableProductIndexer' => 0,
        'Magento_InventoryConfiguration' => 0,
        'Magento_InventoryConfigurationApi' => 0,
        'Magento_InventoryGroupedProduct' => 0,
        'Magento_InventoryGroupedProductAdminUi' => 0,
        'Magento_InventoryGroupedProductIndexer' => 0,
        'Magento_InventoryImportExport' => 0,
        'Magento_InventoryIndexer' => 0,
        'Magento_InventoryLowQuantityNotification' => 0,
        'Magento_InventoryLowQuantityNotificationAdminUi' => 0,
        'Magento_InventoryLowQuantityNotificationApi' => 0,
        'Magento_InventoryMultiDimensionalIndexerApi' => 0,
        'Magento_InventoryProductAlert' => 0,
        'Magento_InventoryReservations' => 0,
        'Magento_InventoryReservationsApi' => 0,
        'Magento_InventoryCache' => 0,
        'Magento_InventorySalesAdminUi' => 0,
        'Magento_InventorySalesApi' => 0,
        'Magento_InventorySalesFrontendUi' => 0,
        'Magento_InventoryShipping' => 0,
        'Magento_InventorySourceDeductionApi' => 0,
        'Magento_InventorySourceSelection' => 0,
        'Magento_InventorySourceSelectionApi' => 0,
        'Magento_InventoryShippingAdminUi' => 0,
        'Magento_InventoryDistanceBasedSourceSelection' => 0,
        'Magento_InventoryDistanceBasedSourceSelectionAdminUi' => 0,
        'Magento_InventoryDistanceBasedSourceSelectionApi' => 0,
        'Magento_InventoryElasticsearch' => 0,
        'Magento_InventorySetupFixtureGenerator' => 0,
```

## Upgrade {{site.data.var.im}}

### Previous Magento versions

When upgrading or updating an existing 2.1.X or 2.2.X Magento installation to Magento 2.3.X, {{site.data.var.im}} modules will be disabled by default. This is a precaution to prevent backward incompatible upgrades and to better support Magento Order Management (OMS).

Currently, Order Management does not support {{site.data.var.im}} (future development planned). When upgrading, {{site.data.var.im}} modules will be disabled to allow OMS and Magento 2.3.X to work seamlessly.

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

### Previous {{site.data.var.im}} versions

When upgrading from previous releases of {{site.data.var.im}} to the latest version, follow normal extension upgrade steps. 

For the latest, update your metapackage version:

```json
        magento/inventory-composer-metapackage = ^1.1.0
```

See the following guides for more information on upgrades:

* [Software Update Guide]({{site.baseurl}}/guides/v2.3/comp-mgr/bk-compman-upgrade-guide.html)
* [Enable or disable modules]({{site.baseurl}}/guides/v2.3/install-gde/install/cli/install-cli-subcommands-enable.html)

## Additional information

See the following guides for more information on {{site.data.var.im}}:

* [Release Notes]({{site.baseurl}}/guides/v2.3/inventory/release-notes.html)
* [Inventory Management]({{site.baseurl}}/guides/v2.3/inventory/index.html) overview for developer resources
* [Managing Inventory](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-management.html) in the Magento 2 User Guides for merchant information
