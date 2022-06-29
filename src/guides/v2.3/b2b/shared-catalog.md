---
group: b2b-developer-guide
subgroup: 10_REST
title: Integrate with the SharedCatalog module
menu_title: Integrate with the SharedCatalog module
menu_order: 21
ee_only: True
level3_menu_node: level3child
level3_subgroup: shared
functional_areas:
  - B2B
  - Catalog
  - Integration
---

A shared catalog is an entity that allows a seller to set special rules for the products that company users (buyers) can purchase. By using shared catalogs, a seller can apply different pricing levels for different companies. Also, shared catalogs allow a seller to configure the visibility of categories and products specifically for different companies.

Products and categories are not created or stored within a shared catalog. The products are defined in the master catalog. (The master catalog is the Magento standard product catalog and is visible to the seller only.) The categories are created within the Categories page, and the seller determines whether a category should be displayed in each shared catalog.

Custom shared catalogs can be assigned to companies only. They cannot be set for individual users. A company can be assigned only one shared catalog.

{{site.data.var.b2b}} provides two types of shared catalog: public and custom. A public catalog is the default shared catalog. It is automatically displayed to all guest customers and to logged-in customers that are not company users, though a company can be assigned the public catalog. The seller assigns a custom shared catalog to specific companies. There can only be one public catalog, and it cannot be deleted.

## Related information

*  [Manage shared catalogs]({{ page.baseurl }}/b2b/shared-cat-manage.html)
*  [Assign categories and products]({{ page.baseurl }}/b2b/shared-cat-product-assign.html)
*  [Assign companies]({{ page.baseurl }}/b2b/shared-cat-company.html)
*  [Manage prices for multiple products]({{ page.baseurl }}/rest/modules/catalog-pricing.html)
