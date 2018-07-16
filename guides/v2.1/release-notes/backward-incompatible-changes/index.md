---
group: release-notes
title: Magento 2.1 backward incompatible changes
github_link: release-notes/backward-incompatible-changes/index.md
version: 2.1
redirect_from: 
 - /guides/v2.1/release-notes/backward-incompatible-changes-2.1.html
 - /guides/v2.1/release-notes/backward-incompatible-changes.html
---

## Overview

Magento 2.1 introduces several major changes that may affect the correct functionality of already released external modules. The purpose of this document is to highlight major changes between Magento 2.0 and 2.1.

## API Changes

Magento 2.1 introduces changes in several {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} classes. These changes are designed to extend overall API coverage and improve developer experience with new features.

### Catalog Module API

The {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}Catalog{% endglossarytooltip %} {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} introduces new service methods that enhance both options management and products to categories cross linking management.

**Class:** [`Magento\Catalog\Api\CategoryLinkManagementInterface`]({{ site.mage2100url }}app/code/Magento/Catalog/Api/CategoryLinkManagementInterface.php){:target="_blank"}<br/>
**Action:** Added the service method `assignProductToCategories`<br/>
**Description:** Assign product to given categories<br/>

**Class:** [`Magento\Catalog\Api\ProductCustomOptionRepositoryInterface`]({{ site.mage2100url }}app/code/Magento/Catalog/Api/ProductCustomOptionRepositoryInterface.php){:target="_blank"}<br/>
**Action:** Added the service method `getProductOptions`<br/>
**Description:** Returns product options<br/>

**Action:** Added service method - `duplicate`<br/>
**Description:** Duplicate product options<br/>

**Class:** [`Catalog\Api\ProductLinkRepositoryInterface`]({{ site.mage2100url }}app/code/Magento/Catalog/Api/ProductLinkRepositoryInterface.php){:target="_blank"}<br/>
**Action:** Added service method - `getList`<br/>
**Description:** Get product links list<br/>

### CMS Module

The {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} Module has been updated to allow you to manage meta titles for your CMS pages.

**Class:** [`Magento\Cms\Api\Data\PageInterface`]({{ site.mage2100url }}app/code/Magento/Cms/Api/Data/PageInterface.php){:target="_blank"}<br/>
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

In release 2.1, Magento introduced a new way to build the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} UI. Old forms have been rewritten using the new UI components. The new UI forms have better flexibility and can be customized using configuration files.

The following entities have new forms and design:

* Product
* {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}Category{% endglossarytooltip %}
* CMS Page
* {% glossarytooltip edfe0b48-7c21-41e8-9c83-3a0afe8a8ce9 %}CMS Block{% endglossarytooltip %}
* Sales Rule
* {% glossarytooltip 3b0e248f-5571-48c0-9dde-efe1662fac6d %}Catalog Rules{% endglossarytooltip %}

<div class="bs-callout bs-callout-info" id="info">
<p><strong>Important information:</strong> Customizations that were performed with the old forms of the listed entities will be lost.</p>
</div>

## Database Schema changes

#### Staging ({{site.data.var.ee}} Only)
The Staging modules introduce {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %} changes for the following entities:

*	Products
*	Categories
*	CMS Pages and Blocks
* Cart and Catalog Price Rules

These changes are applied only if Staging modules are installed. For {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} modules (e.g. DownloadableProduct, ConfigurableProduct, Bundle etc.), relations between main {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %} tables were changed which may affect code that manages SQL queries directly.

## Persistence management

In Magento's 2.1 release, a new level of persistence management has been added, the [`EntityManager`]({{ site.mage2100url }}lib/internal/Magento/Framework/EntityManager/EntityManager.php){:target="_blank"} {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} component. It allows decoupling from Magento's persistence infrastructure and provide more flexibility for future development. At the same time, the entity manager supports all "Magento 1-style" model events in a backward compatible manner.

### Data interfaces persistence

In the 2.1 release, we introduce support for the persistence  of data interfaces for the following entities:

* Product
* Category
* CMS Page
* CMS Block
* Sales Rule
* Catalog Rule

This change may affect extensions that rely on implicit data of "Magento 1-style" models.
