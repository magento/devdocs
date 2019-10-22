---
group: web-api
subgroup: 01_Introduction
title: Getting Started with Magento Web APIs
landing-page: Getting Started with Web APIs
menu_title: Introduction
menu_order: 1
menu_node: parent
functional_areas:
  - Integration
---
## What are the Magento web APIs? {#whatare}

The Magento web [API](https://glossary.magento.com/api) framework provides integrators and developers the means to use web services that communicate with the Magento system. Key features include:

*  Support for both [REST]({{ page.baseurl }}/rest/bk-rest.html) (Representational State Transfer) and [SOAP]({{ page.baseurl }}/soap/bk-soap.html) (Simple Object Access Protocol). In Magento 2, the [web API](https://glossary.magento.com/web-api) coverage is the same for both REST and SOAP.

*  Three types of [authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication.html):
   *  Third-party applications authenticate with [OAuth 1.0a]({{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html).
   *  Mobile applications authenticate using [tokens]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html).
   *  Administrators and customers are authenticated with [login credentials]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html).

*  All accounts and integrations are assigned resources that they have access to. The API framework checks that any call has the [authorization](https://glossary.magento.com/authorization) to perform the request.

*  Any Magento or third-party service can be [configured as a web API]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html) with a few lines of [xml](https://glossary.magento.com/xml). To configure a web API, you define XML elements and attributes in a `webapi.xml` configuration file. If a service is not defined in a configuration file, it will not be exposed at all.

*  The framework is based on the CRUD (create, read, update, delete) & search model. The system does not currently support webhooks.

*  The framework supports field filtering of web API responses to conserve mobile bandwidth.

*  Integration style web APIs enable a single web API call to run multiple services at once for a more efficient integration.  An example of this behavior can be seen in the [Catalog](https://glossary.magento.com/catalog) where one web API call can create a product. If your payload includes the `stock_item` and `media_gallery_entries` objects, then the framework will also create the product’s inventory & media in that one API call.

## What can I do with the Magento web APIs? {#uses}

The APIs can be used to perform a wide array of tasks. For example:

*  Create a shopping app. This can be a traditional app that a user downloads on a mobile device. You could also create an app that an employee uses on a showroom floor to help customers make purchases.

*  Integrate with CRM (Customer Relationship Management) or ERP (Enterprise Resource Planning) backend systems, such as Salesforce or Xero.

*  Integrate with a [CMS](https://glossary.magento.com/cms) (Content Management System). At present, content tagging is not supported.

*  Create [JavaScript](https://glossary.magento.com/javascript) widgets in the Magento [storefront](https://glossary.magento.com/storefront) or on the [Admin](https://glossary.magento.com/admin) panel. The [widget](https://glossary.magento.com/widget) makes AJAX calls to access services.

## How do I get started? {#procedure}

You must register a web service on [Magento Admin](https://glossary.magento.com/magento-admin). Use the following general steps to set up Magento to enable web services.

1. If you are using token-based authentication, create a web services user on Magento Admin by selecting **System** > Permission > **All Users** > Add New User. (If you are using session-based or OAuth authentication, you do not need to create the new user in the Admin.)
1. Create a new integration on Magento Admin. To create an integration, click **System** > Extensions > **Integration** > Add New Integration**. Be sure to restrict which resources the integration can access.
1. Use a REST or SOAP client to configure authentication.

See the User Guide for more information.
