---
group: rest-api
title: REST tutorials
migrated_to: https://developer.adobe.com/commerce/webapi/rest/tutorials/
layout: migrated
functional_areas:
  - Integration
  - Orders
  - Sales
---

The REST tutorials provide an introduction to Magento web APIs. In general, the tutorials guide you through commonly-performed complex tasks:

*  The [**order processing** tutorial](https://developer.adobe.com/commerce/webapi/rest/tutorials/orders/) demonstrates the lifecycle of an order. Major steps include creating a quote, converting it to an order, issuing an invoice, and shipping the order.

*  The [**order processing with Inventory Management**](https://developer.adobe.com/commerce/webapi/rest/tutorials/inventory/index) tutorial builds upon the original order processing tutorial. It also configures sources and stocks and other Inventory Management features.

*  The [**configurable product** tutorial](https://developer.adobe.com/commerce/webapi/rest/tutorials/configurable-product/) helps you plan then create a configurable product and its component simple products.

*  The [**bulk API configurable product** tutorial](https://developer.adobe.com/commerce/webapi/rest/tutorials/bulk-configurable-product/) demonstrates how to create configurable products using bulk APIs.

*  The [**grouped products** tutorial](https://developer.adobe.com/commerce/webapi/rest/tutorials/grouped-product/) demonstrates how to create and manage grouped products.

## Complete these prerequisites

Before you begin any tutorial, make sure you know the basics about {{site.data.var.ce}}

*  Install a Magento 2.3 (or later) instance with sample data.

  The sample data defines a functional store, called Luma, that sells fitness clothing and accessories. The store does not provide any sandbox accounts for testing credit card payments, so transactions will be simulated using an offline [payment method](https://glossary.magento.com/payment-method).

*  Install a REST client. You can use any REST client to send calls to Magento. [Postman](https://www.getpostman.com/) is recommended.

*  Know how to construct a REST call in Magento. See [Construct a request](https://developer.adobe.com/commerce/webapi/get-started/gs-web-api-request) for details.

*  Find the Magento REST API documentation. You can view the [static REST API documentation on devdocs](https://magento.redoc.ly/) or [generate a local API reference](https://developer.adobe.com/commerce/webapi/rest/quick-reference/generate-local).

*  Find the Magento Merchant documentation. Refer to [Getting Started with {{site.data.var.ce}}]({{ site.user_guide_url }}/getting-started.html) for information about the Luma store that is created when you install Magento with the sample data.

## Performing steps

Although some steps require that you configure Magento in some way, you perform most steps by sending one or more REST calls to Magento. Each step that makes a REST call provides the following information:

**Endpoint:**

This section lists the HTTP verb and full path to the endpoint. The basic structure of a REST call in Magento is

`<HTTP verb> http://<host>/rest/<scope>/<endpoint>`

where:

Element | Description
--- | ---
`HTTP verb` | One of `GET`, `POST`, `PUT`, or `DELETE`
`host` | The hostname or IP address (and optionally, port) of the Magento installation.
`scope` | Specifies which store the call affects. In this tutorial, this value is `default`.
`endpoint` | The full URI (Uniform Resource Identifier) to the endpoint. These values always start with `/V1`. For example, `/V1/orders/4`.

**Scope:**

The **Scope:** section is included when the tutorial requires that you send requests to different stores.

**HTTP headers:**

This section indicates which key/value pairs you must specify in the HTTP headers. All calls require one or more HTTP headers.

**Payload:**

This section lists the information that is sent to Magento. All payload samples are valid and can be copied and pasted into your calls, but you might need to change the `id` values that Magento returns.

**Response:**

This section lists the information that Magento sends to the REST client. These values are often referenced in other steps in the tutorial. The values Magento returns might be different than the values listed in the examples provided in this tutorial.
