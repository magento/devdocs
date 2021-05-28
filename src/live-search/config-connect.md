---
group: live-search
title: Configure and Connect
ee_only: True
---

The Adobe Commerce API key and its associated private key are required to connect Live Search to an installation of Adobe Commerce. The API key is generated and maintained in the account of the Adobe Commerce license holder who can generate the key and share it with the developer or SI. The developer can then create and manage the SaaS environments on behalf of the license-holder. For detailed instructions, see Commerce Services in the [User Guide](https://docs-beta.magento.com/user-guide/system/saas.html) and [Configuration Reference](https://docs-beta.magento.com/user-guide/configuration/services/saas.html).

## Adobe Commerce license holder

To generate an API key and private key, see [Commerce Services](https://docs-beta.magento.com/user-guide/system/saas.html) in the Adobe Commerce user guide.

## Adobe Commerce developer or SI

The developer or SI configures the SaaS Environment as described in the Commerce Services section of the configuration. Commerce Services becomes available in the Configuration sidebar when a SaaS module is installed.

## Catalog data sync

Live Search requires synchronized product data for search operations and synchronized attribute data for facet configuration. After configuring Commerce Services with your API key and SaaS Environment, you must go to Live Search in the Adobe Commerce Admin and complete any [configuration action](https://docs-beta.magento.com/user-guide/live-search/onboarding.html) to trigger indexation. The synchronization between the product catalog and the catalog service begins after Live Search is connected.

It can take up to 24 hours to export catalog data from your Adobe Commerce instance and for it to be indexed by Live Search.

### Verify catalog sync

To verify that the data has been exported from your Adobe Commerce instance, look for entries in the following tables:

-  `catalog_data_exporter_products`
-  `catalog_data_exporter_product_attributes`

If you need additional help, check the [Support Knowledge Base](https://support.magento.com/hc/en-us).

### Test the connection

1. Log in to the Adobe Commerce Admin and verify that you can go to **Marketing** > **Live Search**.

1. In the storefront, verify that the **Search** box returns results correctly.

1. If Live Search is not available in the Admin or if the search results are not returned in the storefront, check the `var/log/system.log` file for API communication failures or errors on the services side.

### Synced and shared data

The list of data that is synced and shared with the catalog service can be found in the schema, which is defined in:

`vendor/magento/module-catalog-data-exporter/etc/et_schema.xml`
