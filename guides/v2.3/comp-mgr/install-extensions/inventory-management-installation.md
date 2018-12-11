---
group: software-update-guide
title: Manage Inventory Management modules
---

Inventory Management modules provide all inventory features and options for Single and Multi Source merchants to manage product quantities and stock for sales channels. These features are available in Magento 2.3.X Open Source and Commerce.

These features and extensions were developed as part of the [Multi Source Inventory (MSI) project](https://github.com/magento-engcom/msi) through the Magento Community Engineering program.

## Install Inventory Management

Inventory Management installs with Magento Open Source or Commerce with all features enabled by default. No additional steps are required for enabling these inventory features.

The Inventory Management installation process makes the following changes to the `<Magento_installation_directory>/composer.json` file. A `1` value indicates the corresponding module is enabled.

``` json
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
```

## Enable Inventory Management features

When installed or upgraded, the **Manage Stock** option in the Admin enables by default. This option enables inventory tracking and management, but does not affect module status. To disable modules, see the next section.

For more information on configurations, see [Enabling Inventory Management](https://docs.magento.com/m2/ce/user_guide/catalog/inventory.html) in the Magento 2 User Guide.

## Disable Inventory Management

You may need to disable Inventory Management modules to:

* Speed up the upgrade process for merchants currently on Magento 2.0/2.1/2.2 and migrating to 2.3.0.
* Use custom or third party inventory and order management modules.
* Use [Magento Order Management](https://omsdocs.magento.com) for inventory and order management. The current Order Management connector does not support Inventory Management interfaces. We plan to support this integration in a later release.

To disable Inventory Management, see the instructions for [Enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html). When complete, you should see the following modules and values in `composer.json`:

``` json
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
```

## Additional information

See the following guides for more information on Inventory Management:

* [Inventory Management]({{ page.baseurl }}/inventory/index.md) overview for developer resources
* [Managing Inventory](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-management.html) in the Magento 2 User Guides for merchant information
