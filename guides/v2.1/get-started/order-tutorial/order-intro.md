---
layout: tutorial
group: get-started
subgroup: 20_REST
title: Order Processing with REST APIs Tutorial
menu_title: Initial tasks
menu_order: 0
level3_menu_node:
level3_subgroup: order-tutorial
version: 2.1
github_link: get-started/order-tutorial/order-intro.md
ee_only: False
functional_areas:
  - Integration
  - Orders
  - Sales
---

### Before you begin
{:.tutorial-before}

This tutorial shows a system integrator how REST APIs are used in the lifecycle of an order, including configuring a store and creating a customer; creating quotes, orders, invoices, and shipments; preparing for checkout; and more order-related tasks.

The **10-step tutorial** generally takes **30 minutes**.

### Complete these prerequisites

* Install a Magento 2.1.3 (or later) instance with sample data.

The sample data defines a functional store, called Luma, that sells fitness clothing and accessories. The store does not provide any sandbox accounts for testing credit card payments, so transactions will be simulated using an offline {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %}.

* Install a REST client. You can use any REST client to send calls to Magento. [Postman](https://www.getpostman.com/){:target="_blank"} is recommended.

* Know how to construct a REST call in Magento. See [Construct a request]({{ page.baseurl }}/get-started/gs-web-api-request.html) for details.

* Find the Magento REST API documentation. You can view the [static REST API documentation on devdocs](http://devdocs.magento.com/swagger/){:target="_blank"} or [generate a local API reference]({{ page.baseurl }}/rest/generate-local.html).

* Find the Magento Merchant documentation. Refer to [Getting Started with {{site.data.var.ce}} 2.1](http://docs.magento.com/m2/ce/user_guide/getting-started.html) for information about the Luma store that is created when you install Magento with the sample data.
