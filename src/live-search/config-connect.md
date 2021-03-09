---
group: live-search
title: Configure and Connect
ee_only: True
---

The Magento API key and its associated private key are required to connect Live Search to an installation of Magento Commerce. The API key is generated and maintained in the account of the Magento license holder, who can generate the key and share it with the developer or SI. The developer can then create and manage the SaaS environments on behalf of the license-holder. For detailed instructions, see Magento Services in the [User Guide](https://docs.magento.com/user-guide/system/saas.html) and [Configuration Reference](https://docs.magento.com/user-guide/configuration/services/saas.html).

1.  The Magento Commerce license holder sets up API keys for their sandbox and production environments.

1.  In the Magento Admin, the developer or SI configures Magento Services and the Live Search SaaS project and environment.

   Magento Services is available in the Configuration sidebar when a SaaS module is installed.

_Magento Services_

## Catalog Data Sync

The data synchronization between the product catalog and the ctalog service begins after Live Search is connected. Shared catalog data includes product metadata such as name, price, availability, and more.

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
|`category1|
|`price + currency`|Includes variant information for configurable products|

Although the catalog shares product data, the data that is available for search includes:

|**Shared Data**|
|---|---|
|`sku`|
|`name`|
|`urlKey`|
|`category`|

The data synchronization also includes any search customizations such as facets, synonyms, and rules.
