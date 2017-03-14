---
layout: default
group: get-started
subgroup: 20_REST
title: Order Processing Tutorial
menu_title: Overview
menu_order: 21
level3_menu_node: level3child
level3_subgroup: order
version: 2.1
github_link: get-started/order/order-intro.md
---

## Overview {#tutorial-overview}

This tutorial uses REST APIs to demonstrate the lifecycle of an order. You will create a customer, add items to her cart, go through checkout, create an order and invoice, then ship the order. In addition, you will issue a refund on one of the items.

To complete this tutorial, you must install Magento CE 2.1.3 or later with sample data. The sample data defines a functional store, called Luma, that sells fitness clothing and accessories. The store does not provide any sandbox accounts for testing credit card payments, so transactions will be simulated using an offline payment method.

The tutorial should take no more than 30 minutes to complete.

## Before you begin {#before-begin}

To perform this tutorial, you must have the following tools and information:

* **A Magento CE 2.1.3 (or later) instance with sample data installed.**  You can use the [Magento DevBox]({{page.baseurl}}install-gde/docker/docker-over.html) to quickly install a Magento development system.

* **A REST client.** You can use any REST client to send calls to Magento. [Postman](https://www.getpostman.com/){:target="_blank"} is recommended.

* **Know how to construct a REST call in Magento.** See [Construct a request]({{page.baseurl}}get-started/gs-web-api-request.html) for details.

* **Magento REST API documentation.** You can view the [static REST API documentation on devdocs](http://devdocs.magento.com/swagger/){:target="_blank"} or [generate a local API reference].

* **Magento Merchant documentation.** Refer to [Getting Started with Magento Community Edition 2.1](http://docs.magento.com/m2/ce/user_guide/getting-started.html) for information about the Luma store that is created when you install Magento with the sample data.

Next step: [Configure the store]({{page.baseurl}}/get-started/order/order-config-store.html)
