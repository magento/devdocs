---
layout: tutorial
group: rest
title: Order Processing with MSI
menu_title: Initial tasks
menu_order: 0
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.2
github_link: rest/tutorials/msi-order-processing/index.md
functional_areas:
  - Integration
---

### Before you begin
{:.tutorial-before}

This tutorial builds upon the workflow described in the [Order Processing with REST APIs tutorial]({{ site.baseurl }}/get-started/order-tutorial/order-intro.html). The Order Processing with MSI tutorial contains additional steps that show how to create stocks and sources and assign products to a non-default source. Also, the endpoint for shipping an order differs for MSI.

This **12-step tutorial** generally takes **1 hour**.

### Complete these prerequisites

* Install a Magento 2.3 (or later) instance with sample data. The sample data defines a functional store, called Luma, that sells fitness clothing and accessories.

* Install a REST client. You can use any REST client to send calls to Magento. [Postman](https://www.getpostman.com/){:target="_blank"} is recommended.

* Know how to construct a REST call in Magento. See [Construct a request]({{ page.baseurl }}/get-started/gs-web-api-request.html) for details.

* Obtain an admin authorization token. Multiple calls in this tutorial require administrator privileges. See [Generate the admin token]({{ page.baseurl }}/rest/tutorials/prerequisite-tasks/create-admin-token.html) for more information.

* [Create a customer and generate a customer token]({{ page.baseurl }}/rest/tutorials/prerequisite-tasks/create-customers.html)

### Other resources

* Magento uses [Swagger](https://swagger.io/){:target="_blank"} to provide REST API documentation. You can view the [static REST API documentation on devdocs]({{ site.baseurl }}/swagger/){:target="_blank"} or [generate a local API reference]({{ page.baseurl }}/rest/generate-local.html).

* Refer to [Getting Started with {{site.data.var.ce}}](http://docs.magento.com/m2/ce/user_guide/getting-started.html) for information about the Luma store that is created when you install Magento with the sample data.
