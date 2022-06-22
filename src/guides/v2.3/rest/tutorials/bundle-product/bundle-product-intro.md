---
layout: tutorial
group: rest-api
title: Create a bundle product tutorial
migrated_to: https://developer.adobe.com/commerce/webapi/rest/tutorials/bundle-product-intro/
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com/magento-optimization-service
---

This tutorial shows a way to use Magento REST APIs to create a _bundle product_. A bundle product is a "create your own" type of product.

In this tutorial, we will create a desktop computer by bundling a processor, monitor, video card and RAM. We will have to create a simple product for each of these and then attach them to the bundle _computer_ product.

This **3-step tutorial** generally takes **40 minutes**.

### Before you begin

*  Install a Magento 2.3 (or later) instance with sample data.

*  Install a REST client. We will use Postman in this tutorial.

*  Generate an admin authorization token. All calls in this tutorial require administrator privileges.
