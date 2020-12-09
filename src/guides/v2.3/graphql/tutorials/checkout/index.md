---
layout: tutorial
group: graphql
title: GraphQL checkout tutorial
menu_title: Initial tasks
menu_order: 0
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

This tutorial describes how to place an order through GraphQl. Customers can make purchases in two ways:

-  As a logged-in user
-  As a guest user who does not create an account

The **10-step tutorial** generally takes **30 minutes**.

Magento GraphQL is designed to run queries and perform actions on behalf of a customer. Magento GraphQL does not perform backend tasks, such as manage invoices or shipments.

### Before you begin

Complete the following prerequisites:

-  Install a Magento 2 instance with sample data.
   The sample data defines a functional store, called Luma, that sells fitness clothing and accessories. The store does not provide any sandbox accounts for testing credit card payments, so transactions will be simulated using an offline [payment method](https://glossary.magento.com/payment-method).

-  Install a GraphQl client. You can use any GraphQl client to send calls to Magento. [Altair](https://altair.sirmuel.design/) is a good example.

-  Learn about GraphQL, how it works, and how to use it. See [Introduction to GraphQL](https://graphql.org/learn/) for details.

-  Know how to generate a customer token. See [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for details.

-  In the Magento admin, create a [coupon](https://docs.magento.com/user-guide/marketing/price-rules-cart-coupon-code-configure.html) that will be used in [Step 7. Apply a coupon]({{page.baseurl}}/graphql/tutorials/checkout/checkout-coupon.html).

### Other resources

-  [Order processing tutorial]({{ page.baseurl }}/rest/tutorials/orders/order-intro.html) shows a system integrator how REST APIs are used in the lifecycle of an order, including configuring a store and creating a customer; creating quotes, orders, invoices, and shipments; preparing for checkout; and more order-related tasks.

-  [REST Tutorials]({{ page.baseurl }}/rest/tutorials/index.html) provides additional information about completing any Magento REST tutorial.
