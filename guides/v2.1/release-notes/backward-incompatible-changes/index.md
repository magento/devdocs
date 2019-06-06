---
group: release-notes
title: Magento 2.1 backward incompatible changes
---

## Overview

Magento 2.1 introduces changes that may affect the correct functionality of already released external modules. The purpose of this document is to highlight the changes between Magento 2.0 and 2.1.

## API Changes

Magento 2.1 introduces changes in several [API](https://glossary.magento.com/api) classes. These changes are designed to extend overall API coverage and improve developer experience with new features.

### Catalog Module API

The [Catalog](https://glossary.magento.com/catalog) [module](https://glossary.magento.com/module) introduces new service methods that enhance both options management and products to categories cross linking management.

**Class:** [`Magento\Catalog\Api\CategoryLinkManagementInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Api/CategoryLinkManagementInterface.php){:target="_blank"}<br/>
**Action:** Added the service method `assignProductToCategories`<br/>
**Description:** Assign product to given categories<br/>

**Class:** [`Magento\Catalog\Api\ProductCustomOptionRepositoryInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Api/ProductCustomOptionRepositoryInterface.php){:target="_blank"}<br/>
**Action:** Added the service method `getProductOptions`<br/>
**Description:** Returns product options<br/>

**Action:** Added service method - `duplicate`<br/>
**Description:** Duplicate product options<br/>

**Class:** [`Catalog\Api\ProductLinkRepositoryInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Api/ProductLinkRepositoryInterface.php){:target="_blank"}<br/>
**Action:** Added service method - `getList`<br/>
**Description:** Get product links list<br/>

### CMS Module

The [CMS](https://glossary.magento.com/cms) Module has been updated to allow you to manage meta titles for your CMS pages.

**Class:** [`Magento\Cms\Api\Data\PageInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Cms/Api/Data/PageInterface.php){:target="_blank"}<br/>
**Action:** Added the getter method `getMetaTitle`<br/>
**Description:** Add meta title field to CMS pages<br/>

**Action:** Added the setter method `setMetaTitle`<br/>
**Description:** Set meta title field of CMS pages<br/>

### GiftcardAccount Module ({{site.data.var.ee}} Only)

A data interfaces has been changed in the GiftcardAccount module.

**Class:** `Magento\GiftCard\Api\Data\GiftcardAmountInterface`<br/>
**Action:** Added the getter method `getAttributeId`<br/>
**Description:** Remove GiftCard Account entity<br/>

**Action:** Added the setter method `setAttributeId`<br/>
**Description:** Remove GiftCard Account entity<br/>

## Changes in UI

In release 2.1, Magento introduced a new way to build the [Admin](https://glossary.magento.com/admin) UI. Old forms have been rewritten using the new UI components. The new UI forms have better flexibility and can be customized using configuration files.

The following entities have new forms and design:

- Product
- [Category](https://glossary.magento.com/category)
- CMS Page
- [CMS Block](https://glossary.magento.com/cms-block)
- Sales Rule
- [Catalog Rules](https://glossary.magento.com/catalog-rules)

{: .bs-callout .bs-callout-info }
**Important information:** Customizations that were performed with the old forms of the listed entities will be lost.

## Database Schema changes

### Staging ({{site.data.var.ee}} Only)

The Staging modules introduce [database schema](https://glossary.magento.com/database-schema) changes for the following entities:

- Products
- Categories
- CMS Pages and Blocks
- Cart and Catalog Price Rules

These changes are applied only if Staging modules are installed. For [extension](https://glossary.magento.com/extension) modules (e.g. DownloadableProduct, ConfigurableProduct, Bundle etc.), relations between main [entity](https://glossary.magento.com/entity) tables were changed which may affect code that manages SQL queries directly.

## Persistence management

In Magento 2.1 release, a new level of persistence management has been added, the [`EntityManager`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/EntityManager/EntityManager.php){:target="_blank"} [library](https://glossary.magento.com/library) component. It allows decoupling from Magento persistence infrastructure and provide more flexibility for future development. At the same time, the entity manager supports all "Magento 1-style" model events in a backward compatible manner.

### Data interfaces persistence

In the 2.1 release, we introduce support for the persistence  of data interfaces for the following entities:

- Product
- Category
- CMS Page
- CMS Block
- Sales Rule
- Catalog Rule

This change may affect extensions that rely on implicit data of "Magento 1-style" models.
