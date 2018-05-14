---
layout: tutorial
group: rest
title: Create a configurable product Tutorial
menu_title: Initial tasks
menu_order: 0
level3_subgroup: configurable-product-tutorial
version: 2.2
github_link: rest/tutorials/configurable-product/config-product-intro.md
functional_areas:
  - Integration
---

### Before you begin
{:.tutorial-before}

This tutorial shows a system integrator how to use Magento REST APIs to create a _configurable product_. A configurable product is a parent product of multiple simple products. You define a configurable product so that the buyer must make one or more choices to select a product. For example, most clothing comes in a variety of colors and sizes. If you are offering a skirt in black, red, and blue colorways in sizes small, medium, and large, then you would create a configurable product with 9 simple products, one for each combination of color and size.

In this tutorial, we'll create a gray t-shirt that comes in three sizes (small, medium, and large).  The configurable product defines basic characteristics of the t-shirt. Then we'll create a simple product for each size and link each of them to the configurable product. Finally, we'll add an option that allows the customer to specify text that can be added to the shirt.

This **5-step tutorial** generally takes **45 minutes**.

### Complete these prerequisites

* Install a Magento 2.2 (or later) instance with sample data. The sample data defines a functional store, called Luma, that sells fitness clothing and accessories.

* Install a REST client. You can use any REST client to send calls to Magento. [Postman](https://www.getpostman.com/){:target="_blank"} is recommended.

* Know how to construct a REST call in Magento. See [Construct a request]({{ page.baseurl }}/get-started/gs-web-api-request.html) for details.

* Obtain an admin authorization token. All calls in this tutorial require administrator privileges. See [Step 2 of the Order Processing with REST APIs Tutorial]({{ page.baseurl }}/get-started/order-tutorial/order-admin-token.html) for more information.

### Other resources

* Magento uses [Swagger](https://swagger.io/){:target="_blank"} to provide REST API documentation. You can view the [static REST API documentation on devdocs](http://devdocs.magento.com/swagger/){:target="_blank"} or [generate a local API reference]({{ page.baseurl }}/rest/generate-local.html).

* Refer to [Getting Started with {{site.data.var.ce}}](http://docs.magento.com/m2/ce/user_guide/getting-started.html) for information about the Luma store that is created when you install Magento with the sample data.
