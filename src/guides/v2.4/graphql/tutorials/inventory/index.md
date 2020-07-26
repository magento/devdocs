---
layout: tutorial
group: graphql
title: GraphQL In-store pickup tutorial
menu_title: Initial tasks
menu_order: 0
level3_subgroup: graphql-inventory
return_to:
  title: GraphQL Overview
  url: graphql/index.html
functional_areas:
  - Integration
---

This tutorial builds upon the [Order Processing with Inventory Management]({{page.baseurl}}/rest/tutorials/inventory/index.html) REST tutorial to demonstrate the In-Store Pickup feature. In-store pickup allows a shopper to place an order online and collect it from a physical store. The shopper selects the store from a list of locations that are within the specified radius of a city or postal code.

The Order Processing with Inventory Management REST tutorial configures several entities that make this GraphQL tutorial possible:

*  A fully-defined customer
*  A set of sources, some of which are designed as pickup locations
*  Several products that have been assigned to these sources

The **8-step tutorial** generally takes **30 minutes**.

### Before you begin

Complete the following prerequisites:

*  Install a Magento 2.4 instance with sample data.

   The sample data defines a functional store, called Luma, that sells fitness clothing and accessories. The store does not provide any sandbox accounts for testing credit card payments, so transactions will be simulated using an offline [payment method](https://glossary.magento.com/payment-method).

*  Work through the [Order Processing with Inventory Management]({{page.baseurl}}/rest/tutorials/inventory/index.html) REST tutorial.

*  Install a GraphQl client. You can use any GraphQl client to send calls to Magento. [GraphiQL](https://electronjs.org/apps/graphiql) is recommended.

*  Know how to generate a customer token. See [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for details.

### Other resources

*  [Managing Inventory](https://docs.magento.com/user-guide/catalog/inventory-management.html) in the _Magento User Guide_ describes Inventory Management and the in-store pickup feature.

*  [GraphQL checkout tutorial]({{page.baseurl}}/graphql/tutorials/checkout/index.html) demonstrates the process that a logged-in customer or guest use to place an order.

*  [REST Tutorials]({{ page.baseurl }}/rest/tutorials/index.html) provide demonstrations of other workflows using REST endpoints.
