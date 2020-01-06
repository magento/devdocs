---
layout: tutorial
group: rest-api
title: Create a configurable product using bulk APIs
menu_title: Initial tasks
menu_order: 0
level3_subgroup: bulk-configurable-product-tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
---

A system integrator can use Magento REST bulk APIs to perform actions on a large scale; such as, creating multiple customers and products, changing prices across an inventory, and assigning large groups of products to a specific warehouse, all within a single call.

 To demonstrate how to use the REST bulk APIs, this tutorial will start with a _configurable product_. A configurable product is a parent product of multiple simple products. You define a configurable product so that the buyer must make one or more choices to select a product. For example, most clothing comes in a variety of colors and sizes. If you are offering a skirt in black, red, and blue colorways in sizes small, medium, and large, then you would create a configurable product with nine simple products, one for each combination of color and size.

 In this tutorial, we will create a gray t-shirt that comes in three sizes (small, medium, and large). The configurable product defines basic characteristics of the t-shirt. Then, we will create a simple product for each size and link each of them to the configurable product. Finally, we will add an option that allows the customer to specify text that can be added to the shirt.

 This **4-step tutorial** generally takes **45 minutes**.

### Before you begin

*  Install a Magento 2.3 (or later) instance with sample data. The sample data defines a functional store, called Luma, that sells fitness clothing and accessories.
*  Install a REST client. You can use any REST client to send calls to Magento. [Postman](https://www.getpostman.com/) is recommended.
*  Obtain an admin authorization token. All calls in this tutorial require administrator privileges. See [Generate the admin token]({{ page.baseurl }}/rest/tutorials/prerequisite-tasks/create-admin-token.html) for more information.
*  Use the `bin/magento queue:consumers:start async.operations.all` command to enable bulk endpoint processing.

### Other resources

*  [REST Tutorials]({{ page.baseurl }}/rest/tutorials/index.html) provides additional information about completing any Magento REST tutorial.
*  [Asynchronous web endpoints]({{ page.baseurl }}/rest/asynchronous-web-endpoints.html) provides information about how to use Magento Asynchronous API
*  [Bulk endpoints]({{ page.baseurl }}/rest/bulk-endpoints.html) provides information about how to use Magento Bulk API