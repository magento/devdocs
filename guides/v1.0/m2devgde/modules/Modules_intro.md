---
layout: howtom2devgde_chapters
title: Magento 2 Introduction to Modules
---
 
<h1 id="m2arch-module-intro">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/arch/____.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="arch-modules-overview">Overview</h2>
ADD INTRO INFO HERE

<h2 id="arch-modules-terms">Terms Used</h2>

In Magento 2 we pay special attention to flexibility of the system. To achieve this goal, we implemented layers and modularity approach. Familiarize yourselves with main terms used before you start discovering the new approaches.

Module

:	A logical group (that is, a directory containing blocks, controllers, helpers, models, and so on related to the specific feature or a widget). Module is a part of the application layer. A module is designed to work independently and not to intervene into work of other functionality.

Application layer

: Implements business logic. This layer is built on top of the framework layer, which defines the role of an application component in Magento, defines standards for the interactions among components, and implements system-level request and response objects and routing. Introducing layers means that business logic and system-level processes are pulled apart in application and framework layers correspondingly, so changes in the business logic will not influence sustainability of your store.

Modularity approach: Implies that every module encapsulates a feature and has minimum dependencies on other modules.

This section briefs about main tools for working with modules in Magento 2, introduces the modules decoupling details, and describes some modules you might need when adjusting and extending your store.

Please refer to following materials to customize the modules:

Understanding areas and modules' use in the areas

Understanding dependencies between the modules in Magento

Building dependencies by using thedependency injection

Understanding conventional location of the custom modules and composite module names

Adding new product type
Exploring Modules Decoupling

Modules decoupling in Magento 2 resulted in moving components to feature-specific modules and in moving events to the libraries. Thus, the decoupling affected not only the application layer, but the framework layer as well. The following modules were changed:
Core Module

Core module underwent more changes then other modules: some features were moved to the framework layer and became a part of the libraries; other features were encapsulated in separate modules and their dependencies on Core module were decreased or eliminated.

The changes made in Core module can be divided into three groups:

    Components and features moved from Core module to separate modules:
        Store module
        Magento\Module module
        Functionality related to form key
        Flag functionality
        View-related component
        Indexer module
        Magento\Install module
        Backend module
    Components and features moved from Core module to libraries
        Config library
        URL library
        Magento\Locale library
        Components dependent only on the libraries
        Model library
        Db library
        Library related logic from Magento\Core\Model\App
        Cookie library
        Data type processing components
        functions.php
        Message library
    Components and features moved from Core module to both modules and libraries
        Translation feature
        Cache feature
        Email feature
        Session feature

Checkout Module

The Multishipping feature and the Terms and Conditions feature were moved from Checkout module to separate modules. Thus, the third-part developer can disable these functionalies without influencing other parts of the application. Also, the dependencies between decoupled modules and other modules were eliminated or made more explicit.
Catalog Module

Several features were moved out from Catalog module to separate modules. For instance, configurable product, grouped product, and layered navigation were encapsulated in separate modules.
Sales Module

The recurring profile feature (also known as recurring payment) was encapsulated in a separate module. Thus, the third-party developer can disable the recurring profile (recurring payment) functionality without influencing other parts of the application. The dependencies between the recurring profile (recurring payment) module and other modules were eliminated or made more explicit.

Apart from decoupling of the recurring profile (recurring payment) feature, the elements related to the Google Checkout functionality were removed (due to its elimination by Google).

As a result of the refactoring, RecurringPayment abstract module was created. This module contains the classes and methods moved out from Sales module as well as relevant elements that ensure using the recurring profile (recurring payment) functionality by the payment methods.
Shipping Module

Shipping module was also affected by the decoupling changes. The shipping related operations were encapsulated in Shipping module and the shipping methods themselves were moved to separate modules (also known as carrier modules). To decrease dependencies between Shipping module and other modules, the abstract interface module - Carrier - was introduced. The shipping methods' modules interact (and have dependency connection) with Carrier module only. And the latter, in its turn, interacts with other modules within the application, for instance, Product, Sales, RMA, Core, Backend, and so on.

Thus, the carrier modules do not interact with the rest of the application directly and the third-party developer can disable any shipping method without influencing other parts of the application.
Payment Module

TBD
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

Weee module serves to handle the fixed product taxes, in particular, calculate the Waste Electrical and Electronic Equipment Directive tax in the online store
