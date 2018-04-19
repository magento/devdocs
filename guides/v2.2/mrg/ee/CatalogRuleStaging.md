---
layout: default
group: mrg
subgroup: 20_Enterprise Edition
ee_only: true
title: Magento_CatalogRuleStaging module
menu_title: CatalogRuleStaging
menu_order: 2
version: 2.2
ee_only: true
github_link: mrg/ee/CatalogRuleStaging.md
---

The Magento_CatalogRuleStaging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} is a part of the staging functionality in {{site.data.var.ee}}. It enables you to add the {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}catalog{% endglossarytooltip %} rule updates to existing store campaigns. In other words, you can add and/or remove {% glossarytooltip 3b0e248f-5571-48c0-9dde-efe1662fac6d %}catalog rules{% endglossarytooltip %} for some period of time. These updates are shown on the campaign dashboard.

## Implementation details

The Magento_CatalogRuleStaging module changes a catalog rule creation page and the catalog rule related database tables to make them compatible with the Magento Staging Framework. This module depends on the Magento_CatalogRule module and extends its functionality. It changes the database structure of the Magento_CatalogRule module and the way in which catalog rules are managed. The Magento_CatalogRule module must be enabled.

The Magento_CatalogRuleStaging module enables you to stage the following catalog rule attributes:

- Rule Name
- Description
- Websites
- Customer Groups
- Priority
- Product Apply
- Product Discount Amount
- Subproduct Discounts
- Subproduct Apply
- Subproduct Discount Amount
- Discard Subsequent Rules

These attributes cannot be modified and are a part of the static Magento Catalog Rule form.

### Installation details

The Magento_CatalogRuleStaging module makes irreversible changes in a database during installation. You cannot uninstall this module.

## Dependencies

You can find the list of modules that have dependencies on the Magento_CatalogRuleStaging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

{% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}Extension{% endglossarytooltip %} points enable extension developers to interact with the Magento_CatalogRuleStaging module. You can interact with the Magento_CatalogRuleStaging module using the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_CatalogRuleStaging module.

### Layouts

You can extend and override layouts in the `app/code/Magento/CatalogRuleStaging/view/adminhtml/layout` directory.
For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html).

## Additional Information

You can track [backward incompatible changes made in a {{site.data.var.ee}} mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html).
