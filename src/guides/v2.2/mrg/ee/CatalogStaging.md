---
group: module-reference-guide
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_CatalogStaging module
menu_title: CatalogStaging
menu_order: 2
ee_only: true
---

The Magento_CatalogStaging [module](https://glossary.magento.com/module) is a part of the staging functionality in {{site.data.var.ee}}. It enables you to add [catalog](https://glossary.magento.com/catalog) updates to the existing store campaigns. In other words, you can change the [category](https://glossary.magento.com/category) and product [entity](https://glossary.magento.com/entity) attributes in campaigns. These updates are shown on the campaign dashboard.

## Implementation details

The Magento_CatalogStaging module extends the Magento_Catalog module functionality. It changes a category and product creation page, and related database tables to make them compatible with the Magento Staging Framework.

The following fields are removed from the Magento_Catalog module forms:

-  Category form:
   -  Schedule design update from
   -  Schedule design update to

-  Product form:
   -  Set as new from
   -  Set as new to
   -  Schedule design update from
   -  Schedule design update to
   -  Special price from
   -  Special price to

They are all related to the time period attributes. They can be set using staging functionality when you schedule a new update as:

-  Special price
-  Schedule design update
-  Set product as new

### Category Staging

The Magento_CatalogStaging module enables you to stage the following category attributes:

-  Enable/disable Category
-  Include in Menu
-  Category Name
-  Content
   -  Category Image
   -  Description
   -  CMS Blocks
-  Display Settings
   -  Display Mode
   -  Anchor
   -  Product Sorting
   -  Layered Navigation Price Step
-  [Search Engine Optimization](https://glossary.magento.com/search-engine-optimization)
   -  Meta Title
   -  Meta Keywords
   -  Meta Description
-  Design
   -  Layout
   -  Layout Update XML
   -  New Theme

The following category attributes cannot be staged:

-  Assignment of Products to a Category
-  [URL](https://glossary.magento.com/url)

### Product Staging

The Magento_CatalogStaging module enables you to stage the following product attributes:

-  [Attribute Set](https://glossary.magento.com/attribute-set)
-  Product Name
-  Price
-  Weight attributes
-  Visibility
-  New(flag)
-  Country of Manufacture
-  Description
-  Websites(assignment)
-  Design
   -  [Layout](https://glossary.magento.com/layout)
   -  Display Product Options In
   -  Layout Update [XML](https://glossary.magento.com/xml)
-  Related Products, Up-Sells, and Cross-Sells

Also, you can stage any other attribute added in [Admin](https://glossary.magento.com/admin).

The following product attributes cannot be staged:

-  Quantity
-  URL Key
-  [SKU](https://glossary.magento.com/sku)

### Installation details

The Magento_CatalogStaging module makes irreversible changes in a database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CatalogStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

[Extension](https://glossary.magento.com/extension) points enable extension developers to interact with the Magento_CatalogStaging module. You can interact with the Magento_CatalogStaging module using the Magento extension mechanism, see [Magento plug-ins]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ site.baseurl }}/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CatalogStaging module.

### UI components

You can extend product and category updates using the UI components located in the `Magento\CatalogStaging\view\adminhtml\ui_component` directory. For more information, see [UI Listing/Grid Component]({{ site.baseurl }}/guides/v2.2/ui_comp_guide/components/ui-listing-grid.html).

### Layouts

You can extend and override layouts in the `Magento\CatalogStaging\view\adminhtml\layout` directory.
For more information about layouts, see the [Layout documentation]({{ site.baseurl }}/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html).

### Events

You can use the following events:

-  `catalog_category_prepare_save` event in the `\Magento\CatalogStaging\Model\Category\Hydrator::hydrate()` method. Parameters:
   -  `category` is a category to be saved (`\Magento\Catalog\Model\Category` class).
   -  `request` is a request object with the `\Magento\Framework\App\RequestInterface` interface.
-  `controller_action_catalog_product_save_entity_after` event in the `\Magento\CatalogStaging\Model\Product\Hydrator::hydrate()` method. Parameters:
   -  `controller` is a hydrator object (`\Magento\CatalogStaging\Model\Product\Hydrator`).
   -  `product` is a product object (`\Magento\Catalog\Model\Product` class.

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release]({{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html).
