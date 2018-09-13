---
layout: tutorial
group: rest-api
title: Order Processing with Multi Source Inventory
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
{:.tutorial-before}

This tutorial builds upon the workflow described in the [Order Processing with REST APIs tutorial]({{ page.baseurl }}/rest/tutorials/orders/order-intro.html). The Order Processing with Multi Source Inventory (MSI) tutorial provides additional steps that detail how to create stocks and sources, assign products to a custom source, and run the Source Selection Algorithm to recommend shipping options.

For more information about MSI, see the [MSI wiki](https://github.com/magento-engcom/msi/wiki/Overview).

This **13-step tutorial** generally takes **1 hour**.

{:.bs-callout .bs-callout-info}
The Order Processing with MSI tutorial is a draft. It will be expanded to include more steps that show MSI functionality. This tutorial does not currently use the Luma sample store, but later versions will.

### Complete these prerequisites

* Install the latest version of Magento 2.3 Alpha from the [MSI repository](https://github.com/magento-engcom/msi). Additional information is available at [How to get the Magento software](https://devdocs.magento.com/guides/v2.3/install-gde/bk-install-guide.html).

* Install a REST client. You can use any REST client to send calls to Magento. [Postman](https://www.getpostman.com/) is recommended.

* Know how to construct a REST call in Magento. See [Construct a request]({{ page.baseurl }}/get-started/gs-web-api-request.html) for details.

* Obtain an admin authorization token. Multiple calls in this tutorial require administrator privileges. See [Generate the admin token]({{ page.baseurl }}/rest/tutorials/prerequisite-tasks/create-admin-token.html) for more information.

### Other resources

* Magento uses [Swagger](https://swagger.io) to provide REST API documentation. You can view the [static REST API documentation]({{ site.baseurl }}/swagger/) or [generate a local API reference]({{ page.baseurl }}/rest/generate-local.html).
