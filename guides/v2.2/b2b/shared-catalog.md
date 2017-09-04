---
layout: default
group: b2b
subgroup: 10_REST
title: Integrate with the SharedCatalog module
menu_title: Integrate with the SharedCatalog module
menu_order: 21
version: 2.2
ee_only: true
level3_menu_node: level3child
level3_subgroup: shared
github_link: b2b/shared-catalog.md
---

A shared catalog is an entity that allows a merchant to set special rules for the products that company users can buy. By using shared catalogs, a merchant can apply different pricing levels for different companies. Also, shared catalogs allow a merchant to configure the visibility of categories and products specifically for different companies.

Products and categories are not created or stored within a shared catalog. The products are defined in the master catalog. (The master catalog is the Magento standard product catalog and is visible to the merchant only.) The categories are created within the Categories page, and the merchant determines whether a category should be displayed in each shared catalog.

Custom shared catalogs can be assigned to companies only. They cannot be set for individual users. A company can be assigned only one shared catalog.

B2B provides two types of shared catalog: public and custom. A public catalog is the default shared catalog. It is automatically displayed to all guest customers and to logged-in customers that are not company users, though a company can be assigned the public catalog. The merchant assigns a custom shared catalog to specific companies. There can only be one public catalog, and it cannot be deleted.

## Related information

* [Manage shared catalogs]({{page.baseurl}}b2b/shared-cat-manage.html)
* [Assign categories and products]({{page.baseurl}}b2b/shared-cat-product-assign.html)
* [Assign companies]({{page.baseurl}}b2b/shared-cat-company.html)
* [Manage prices for multiple products]({{page.baseurl}}rest/catalog-pricing.html)
