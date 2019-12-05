---
layout: tutorial
group: rest-api
title: Order Processing with Inventory Management
menu_title: Initial tasks
menu_order: 0
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

### Before you begin

This tutorial builds upon the workflow described in the [Order Processing with REST APIs tutorial]({{ page.baseurl }}/rest/tutorials/orders/order-intro.html). The Order Processing with Inventory Management tutorial provides additional steps that detail how to create stocks and sources, assign products to a custom source, and run the Source Selection Algorithms to recommend shipping options.

For more information about key inventory features, see [Inventory Management overview]({{ page.baseurl }}/inventory/index.html).

This **13-step tutorial** generally takes **1 hour**.

### Complete these prerequisites

*  Install Magento 2.3.0 or later.

*  Install a REST client. You can use any REST client to send calls to Magento. [Postman](https://www.getpostman.com/) is recommended.

*  Know how to construct a REST call in Magento. See [Construct a request]({{ page.baseurl }}/get-started/gs-web-api-request.html) for details.

*  Obtain an admin authorization token. Multiple calls in this tutorial require administrator privileges. See [Generate the admin token]({{ page.baseurl }}/rest/tutorials/prerequisite-tasks/create-admin-token.html) for more information.

### Other resources

*  Magento uses [Swagger](https://swagger.io) to provide REST API documentation on local instances of Magento. See [Generate a local API reference]({{ page.baseurl }}/rest/generate-local.html) for more information. You can view the [static REST API documentation]({{site.baseurl}}/redoc/{{page.guide_version}}/), which displays reference information using ReDoc.
