---
group: live-search
title: Configure and Connect
ee_only: True
---

The Magento API key and its associated private key are required to connect Live Search to an installation of Magento Commerce. The API key is generated and maintained in the account of the Magento license holder who can generate the key and share it with the developer or SI. The developer can then create and manage the SaaS environments on behalf of the license-holder. For detailed instructions, see Magento Services in the [User Guide](https://docs.magento.com/user-guide/system/saas.html) and [Configuration Reference](https://docs.magento.com/user-guide/configuration/services/saas.html).

## Magento Commerce license holder

To generate an API key and private key, see [Magento Services](https://docs.magento.com/user-guide/system/saas.html) in the Magento user guide.

## Magento Commerce developer or SI

The developer or SI configures the Saas Environment as described in the [Magento Services](https://docs.magento.com/user-guide/configuration/services/saas.html) section of the user guide. Magento Services becomes available in the Configuration sidebar after a SaaS module is installed.

![Config - Magento Services]({{ page.baseurl }}/live-search/images/config-magento-services.png)
_Magento Services_

## Catalog Data Sync

Live Search requires synchronized product data for search operations and synchronized attribute data for facet configuration. The synchronization between the product catalog and the catalog service begins after Live Search is connected. The `saas-export` process can take up to 24 hours. You can verify that process is complete by looking for entries in the following tables:

-  `catalog_data_exporter_products`
-  `catalog_data_exporter_product_attributes`

### Test the connection

1. Log in to the Magento Admin and verify that you can go to **Marketing** > **Live Search**.

1. In the storefront, verify that **Category Browse** and **Quick Search** work as described in the [Quick Tour](https://docs.magento.com/user-guide/live-search/quick-tour.html) of Live Search.

1. If Live Search is not available in the Admin or the Category Browse / Search Results are not loading on the storefront, check the `system.log` for API communication failures or errors on the services side:

   `var/log/system.log`

## Synced and Shared Data

Catalog data synced with the Catalog Service includes:

|**Synced Data**|
|---|---|
|`sku`|
|`price`|
|`name`|
|`description`|
|`url`|
|`image`|
|`weight`|
|`displayable`|
|`buyable`|
|`inStock`|
|`lowStock`|
|`category`|
|`price + currency`|Includes variant information for configurable products|

Although the catalog shares product data, the data that is available for search includes:

|**Shared Data**|
|---|---|
|`sku`|
|`name`|
|`urlKey`|
|`category`|

The data synchronization also includes any search customizations for facets, synonyms, and rules.
