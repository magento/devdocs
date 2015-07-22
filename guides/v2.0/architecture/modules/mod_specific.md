---
layout: default
group:
subgroup: 
title: Specific Modules
menu_title: Specific Modules
menu_order: 
github_link: architecture/modules/mod_specific.md
---

<h2 id="m2arch-module-specific-overview"> Overview</h2>
The following modules are included in the standard Magento installation:

* abc
* abc
* abc

<h2 id="AG-into-mods-specific">Specific modules</h2>

<p class ="q">Need to decide what content we want about each Module... this stuff below from Olena's TEST page (https://wiki.magento.com/pages/viewpage.action?title=Working+with+Modules+in+Magento+2+-+DRAFT%2C+DO+NOT+DISTRIBUTE&spaceKey=TEST), or the content from Oleh with the dynamically generated diagram showing dependencies...? or...?</p>


Checkout Module

: The Multishipping feature and the Terms and Conditions feature were moved from Checkout module to separate modules. Thus, the third-part developer can disable these functionalities without influencing other parts of the application. Also, the dependencies between decoupled modules and other modules were eliminated or made more explicit.

Catalog Module

: Several features were moved out from Catalog module to separate modules. For instance, configurable product, grouped product, and layered navigation were encapsulated in separate modules.

Sales Module

: The recurring profile feature (also known as recurring payment) was encapsulated in a separate module. Thus, the third-party developer can disable the recurring profile (recurring payment) functionality without influencing other parts of the application. The dependencies between the recurring profile (recurring payment) module and other modules were eliminated or made more explicit.

Apart from decoupling of the recurring profile (recurring payment) feature, the elements related to the Google Checkout functionality were removed (due to its elimination by Google).

As a result of the refactoring, RecurringPayment abstract module was created. This module contains the classes and methods moved out from Sales module as well as relevant elements that ensure using the recurring profile (recurring payment) functionality by the payment methods.

Shipping Module

:	 (https://wiki.magento.com/pages/viewpage.action?title=Working+with+Modules+in+Magento+2+-+DRAFT%2C+DO+NOT+DISTRIBUTE&spaceKey=TEST)Shipping module was also affected by the decoupling changes. The shipping related operations were encapsulated in Shipping module and the shipping methods themselves were moved to separate modules (also known as carrier modules). To decrease dependencies between Shipping module and other modules, the abstract interface module - Carrier - was introduced. The shipping methods' modules interact (and have dependency connection) with Carrier module only. And the latter, in its turn, interacts with other modules within the application, for instance, Product, Sales, RMA, Core, Backend, and so on.

Thus, the carrier modules do not interact with the rest of the application directly and the third-party developer can disable any shipping method without influencing other parts of the application.

Payment Module

: TBD

Exploring Newly Created and Decoupled Modules

To learn more about the newly created or decoupled modules in Magento, please follow the links

Backend module serves to adjust the admin panel of your store

Bundle module serves to handle the bundle product type

Catalog module serves to handle the product lists both in the admin panel and storefront.

CatalogInventory module helps to handle the product stock

Checkout module serves to customize the checking out process in the storefront

CheckoutAgreements module serves to inform a customer about conditions of purchase

Core module

ConfigurableProduct module serves to handle the configurable product type

Customer module serves to handle the customer accounts both in the admin panel and storefront.

DHL module serves to integrate the DHL shipping method.

Downloadable module serves to handle the downloadable product type

Email module serves to handle the email templates

FedEx module serves to integrate the FedEx shipping method.

GiftCard module serves to handle the gift card product type

GroupedProduct module serves to handle the grouped product type.

ImportExport module serves to handle the import and export data to/from Magento

Indexer module

LayeredNavigation module serves to handle the layered navigation in the storefront.

Multishipping module serves to handle the shipping to several addresses.

OfflinePayment module serves to handle the offline payment methods, such as Cash on Delivery, Purchase Order, Bank Transfer, and Check/Money Order.

OfflineShipping module serves to handle the offline shipping methods, such as: Free Shipping, Flat rate, Table Rates, Store Pickup.

Payment module helps to handle the payment methods.

RecurringPayment module serves to handle the recurring payments

Sales module helps to handle the orders, invoices, credit memos, and shipments both in the admin panel and storefront.

ScheduledImportExport module serves to arrange scheduled import and export of the data (for instance, product and customer information) to/from Magento.

Shipping module helps to handle the shipment related data and the shipping methods.

Store module

Tax module serves to handle taxes.

Translation module contains configurations, parsers, and scripts for creating translation tables.

UPS

USPS

Weee module serves to handle the fixed product taxes, in particular, calculate the Waste Electrical and Electronic Equipment Directive tax in the online store.


<h2 id="m2arch-module-related">Related topics</h2>
* abc
* def
* ghi

