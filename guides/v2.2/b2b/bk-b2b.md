---
layout: default
group: b2b
subgroup: 01_Introduction
title: B2B Developer Guide
landing-page: B2B
menu_title: B2B Developer Guide
menu_order: 1
menu_node: parent
version: 2.2
ee_only: true
github_link: b2b/bk-b2b.md
---

The B2B functionality suggests that services and goods are sold to companies and not to individuals.

There are two basic actors in B2B model:

* A **merchant** is an admin user that accesses the system from the Magento Admin panel.
* A **buyer** is any customer associated with a company account who accesses the system from the storefront.

The Company component is the key entity within B2B on which all other features are in some way dependent. It allows joining multiple customers that belong to the same company into a single company account (or corporate account). The company admin is able to build the company structure (divisions, subdivisions and users) in the appropriate hierarchy and provide different user roles and permissions to the company members. Such a hierarchy allows the company admin to control user activity within an account: ordering, quoting, purchasing, access to company credit info or profile, etc. In addition, merchant can configure how the buying company operates at the website: including the payment methods, pricing levels, the ability to negotiate over prices, and the ability to create requisition lists.

Companies have an option to Pay on Account, or in other words make purchases in credit. The merchant allocates credit for a company account and manages credit settings for a company as well as credit reimbursement.

Shared catalogs are the pricing levels that allow setting custom prices per product for different companies on one or multiple websites. By using shared catalogs, a merchant can sell this product with applying different pricing levels for different customer groups.

The merchant and a buyer representing a company can negotiate the price of an order prior to order placement. This functionality is supported within the Negotiable Quote module. It means that before making an order, the buyer can initiate negotiations with the merchant on prices and discounts. Negotiations suggest that the created quote may be submitted, reviewed and modified several times before it is converted into order.

## B2B Modules

Magento B2B ais a set of modules that is installed on top of the Magento 2.x Enterprise Edition. The following table lists the modules provided with B2B.

Name | Description | WebAPI enabled?
--- | --- | ---
B2b | The base module for B2B. It also provides branding elements. | No
BundleNegotiableQuote | Enables bundle products to be displayed in a negotiable quote in an B2B environment | No
BundleRequisitionList | Enables bundle products to be displayed in a requisition list | No
BundleSharedCatalog | Enables bundle products to be added to a shared catalog in an B2B environment. | No
Company | Allows a merchant to create a company account and assign multiple members of the company to the account. | Yes
CompanyCredit | Adds the Payment on Account payment method for B2B companies. | Yes
CompanyPayment | Allows a merchant to configure which payment methods are available for B2B companies. | No
ConfigurableNegotiableQuote | Enables configurable products to be displayed in a negotiable quote in an B2B environment | No
ConfigurableRequisitionList | Enables configurable products to be displayed in a requisition list | No
ConfigurableSharedCatalog |Enables configurable products to be added to a shared catalog in an B2B environment. | No
GiftCardNegotiableQuote | Enables gift cards to be displayed in a negotiable quote in an B2B environment | No
GiftCardRequisitionList | Enables gift cards to be displayed in a requisition list | No
GiftCardSharedCatalog | Enables gift cards to be added to a shared catalog in an B2B environment. | No
GroupedSharedCatalog | Enables grouped products to be added to a shared catalog in an B2B environment. | No
NegotiableQuote | Allows a customer and a merchant (admin user) to negotiate product and/or shipping prices before the customer places an order. | Yes
NegotiableQuoteSharedCatalog | Enables the `NegotiableQuote` module to interact with a `SharedCatalog` in an B2B environment. | No
QuickOrder | Allows customers to create a new order from a list of multiple SKUs. | No
RequisitionList | Allows a customer to create multiple lists of frequently-purchased items and use those lists for order placement. | No
SharedCatalog | Defines the visibility of products and prices in the catalog and in B2B quotes for different company accounts. | Yes
