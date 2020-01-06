---
layout: tutorial
group: rest-api
title: Order processing tutorial
menu_title: Initial tasks
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 0
level3_subgroup: order-tutorial
redirect_from:
  - /guides/v2.3/get-started/order-tutorial/order-intro.html
functional_areas:
  - Integration
  - Orders
  - Sales
---

This tutorial shows a system integrator how REST APIs are used in the lifecycle of an order, including configuring a store and creating a customer; creating quotes, orders, invoices, and shipments; preparing for checkout; and more order-related tasks.

The **10-step tutorial** generally takes **30 minutes**.

### Before you begin

Complete the following prerequisites:

*  Install a Magento 2.1.3 (or later) instance with sample data.

  The sample data defines a functional store, called Luma, that sells fitness clothing and accessories. The store does not provide any sandbox accounts for testing credit card payments, so transactions will be simulated using an offline [payment method](https://glossary.magento.com/payment-method).

*  Install a REST client. You can use any REST client to send calls to Magento. [Postman](https://www.getpostman.com/) is recommended.

*  Know how to construct a REST call in Magento. See [Construct a request]({{ page.baseurl }}/get-started/gs-web-api-request.html) for details.

*  Find the Magento REST API documentation. You can view the [static REST API documentation on devdocs]({{ site.baseurl }}/redoc/{{page.guide_version}}/) or [generate a local API reference]({{ page.baseurl }}/rest/generate-local.html).

*  Find the Magento Merchant documentation. Refer to [Getting Started with {{site.data.var.ce}} 2.1](http://docs.magento.com/m2/ce/user_guide/getting-started.html) for information about the Luma store that is created when you install Magento with the sample data.

### Other resources

*  [REST Tutorials]({{ page.baseurl }}/rest/tutorials/index.html) provides additional information about completing any Magento REST tutorial.
