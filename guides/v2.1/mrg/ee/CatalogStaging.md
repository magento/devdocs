---
layout: default
group: mrg
title: Magento_CatalogStaging module
version: 2.1
ee_only: true
github_link: mrg/ee/CatalogStaging.md
---

The Magento_CatalogStaging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is a part of the staging functionality in {{site.data.var.ee}}. It enables you to add {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}catalog{% endglossarytooltip %} updates to the existing store campaigns. In other words, you can change the {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} and product {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %} attributes in campaigns. These updates are shown on the campaign dashboard.

## Implementation details

The Magento_CatalogStaging module extends the Magento_Catalog module functionality. It changes a category and product creation page, and related database tables to make them compatible with the Magento Staging Framework.

The following fields are removed from the Magento_Catalog module forms:

- Category form:
  - Schedule design update from
  - Schedule design update to

- Product form:
  - Set as new from
  - Set as new to
  - Schedule design update from
  - Schedule design update to
  - Special price from
  - Special price to

They are all related to the time period attributes. They can be set using staging functionality when you schedule a new update as:

- Special price
- Schedule design update
- Set product as new

### Category Staging

The Magento_CatalogStaging module enables you to stage the following category attributes:

- Enable/disable Category
- Include in Menu
- Category Name
- Content
    - Category Image
    - Description
    - CMS Blocks
- Display Settings
    - Display Mode
    - Anchor
    - Product Sorting
    - Layered Navigation Price Step
- {% glossarytooltip ae8f7f2b-ddfb-41ed-bec3-bed191406fdd %}Search Engine Optimization{% endglossarytooltip %}
    - Meta Title
    - Meta Keywords
    - Meta Description
- Design
    - Layout
    - Layout Update XML
    - New Theme

The following category attributes cannot be staged:

- Assignment of Products to a Category
- {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %}

### Product Staging

The Magento_CatalogStaging module enables you to stage the following product attributes:

- {% glossarytooltip 44d60586-b853-40dd-bf82-4a1580450416 %}Attribute Set{% endglossarytooltip %}
- Product Name
- Price
- Weight attributes
- Visibility
- New(flag)
- Country of Manufacture
- Description
- Websites(assignment)
- Design
  - {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}Layout{% endglossarytooltip %}
  - Display Product Options In
  - Layout Update {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %}
- Related Products, Up-Sells, and Cross-Sells

Also, you can stage any other attribute added in {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}.

The following product attributes cannot be staged:

- Quantity
- URL Key
- {% glossarytooltip fd4bed67-7130-4415-8a6f-ad8d8ef8f25e %}SKU{% endglossarytooltip %}

### Installation details

The Magento_CatalogStaging module makes irreversible changes in a database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CatalogStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

{% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}Extension{% endglossarytooltip %} points enable extension developers to interact with the Magento_CatalogStaging module. You can interact with the Magento_CatalogStaging module using the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CatalogStaging module.

### UI components

You can extend product and category updates using the UI components located in the `Magento\CatalogStaging\view\adminhtml\ui_component` directory. For more information, see [UI Listing/Grid Component](http://devdocs.magento.com/guides/v2.1/ui_comp_guide/components/ui-listing-grid.html).

### Layouts

You can extend and override layouts in the `Magento\CatalogStaging\view\adminhtml\layout` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

### Events

You can use the following events:

- `catalog_category_prepare_save` event in the `\Magento\CatalogStaging\Model\Category\Hydrator::hydrate()` method. Parameters:
  - `category` is a category to be saved (`\Magento\Catalog\Model\Category` class).
  - `request` is a request object with the `\Magento\Framework\App\RequestInterface` interface.
- `controller_action_catalog_product_save_entity_after` event in the `\Magento\CatalogStaging\Model\Product\Hydrator::hydrate()` method. Parameters:
  - `controller` is a hydrator object (`\Magento\CatalogStaging\Model\Product\Hydrator`).
  - `product` is a product object (`\Magento\Catalog\Model\Product` class.

## Additional information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html).
