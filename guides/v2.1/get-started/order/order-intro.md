---
layout: default
group: get-started
subgroup: 20_REST
title: Order Processing Tutorial
menu_title: Step 1. Get started
menu_order: 21
level3_menu_node: level3child
level3_subgroup: order
version: 2.1
github_link: get-started/order/order-intro.md
---

## Step 1. Get started

### Overview

This tutorial uses REST APIs to demonstrate the lifecycle of an order. In general, an order goes through the following phases:

* A customer adds items to the shopping cart.
* She clicks **Checkout** then specifies the shipping address.
* Magento calculates the subtotals and shipping charges.
* The customer selects the shipping method.
* She provides the billing address and payment information.
* Magento creates an order.
* When payment is received, Magento creates an invoice.
* When the ordered items are ready to ship, Magento creates a shipment. The order is complete when all the items have been shipped.
* If the customer requests a refund, issue a credit memo.


### Before you begin

To perform this tutorial, you must have the following tools and information:

* **A Magento CE 2.1.3 (or later) instance with sample data installed.**  You can use the [Magento DevBox]({{page.baseurl}}install-gde/docker/docker-over.html) to quickly install a Magento development system.

* **A REST client.** You can use any REST client to send calls to Magento. [Postman](https://www.getpostman.com/){:target="_blank"} is recommended.

* **Magento REST API documentation.** You can view the [static REST API documentation on devdocs](http://devdocs.magento.com/swagger/){:target="_blank"} or [generate a local API reference].

* **Magento Merchant documentation.** Refer to [Getting Started with Magento Community Edition 2.1](http://docs.magento.com/m2/ce/user_guide/getting-started.html) for information about the Luma store that is created when you install Magento with the sample data.

Next step: [Configure the store]({{page.baseurl}}/get-started/order/order-config-store.html)
