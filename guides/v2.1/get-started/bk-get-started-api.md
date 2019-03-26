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

The Magento web {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} framework provides integrators and developers the means to use web services that communicate with the Magento system. Key features include:

* Support for both [REST]({{ page.baseurl }}/rest/bk-rest.html) (Representational State Transfer) and [SOAP]({{ page.baseurl }}/soap/bk-soap.html) (Simple Object Access Protocol). In Magento 2, the {% glossarytooltip 377dc0a3-b8a7-4dfa-808e-2de37e4c0029 %}web API{% endglossarytooltip %} coverage is the same for both REST and SOAP.

* Three types of [authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication.html):
	* Third-party applications authenticate with [OAuth 1.0a]({{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html).
	* Mobile applications authenticate using [tokens]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html).
	* Administrators and customers are authenticated with [login credentials]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html).

* All accounts and integrations are assigned resources that they have access to. The API framework checks that any call has the {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %} to perform the request.

* Any Magento or third-party service can be [configured as a web API]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-to-web-service.html) with a few lines of {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}xml{% endglossarytooltip %}. To configure a web API, you define XML elements and attributes in a `webapi.xml` configuration file. If a service is not defined in a configuration file, it will not be exposed at all.

* The framework is based on the CRUD (create, read, update, delete) & search model. The system does not currently support webhooks.

* The framework supports field filtering of web API responses to conserve mobile bandwidth.

* Integration style web APIs enable a single web API call to run multiple services at once for a more efficient integration.  An example of this behavior can be seen in the {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}Catalog{% endglossarytooltip %} where one web API call can create a product. If your payload includes the `stock_item` and `media_gallery_entries` objects, then the framework will also create the product’s inventory & media in that one API call.

## What can I do with the Magento web APIs? {#uses}

The APIs can be used to perform a wide array of tasks. For example:

* Create a shopping app. This can be a traditional app that a user downloads on a mobile device. You could also create an app that an employee uses on a showroom floor to help customers make purchases.

* Integrate with CRM (Customer Relationship Management) or ERP (Enterprise Resource Planning) backend systems, such as Salesforce or Xero.

* Integrate with a {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} (Content Management System). At present, content tagging is not supported.

* Create {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} widgets in the Magento {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} or on the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} panel. The {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} makes AJAX calls to access services.

## How do I get started? {#procedure}

You must register a web service on {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}. Use the following general steps to set up Magento to enable web services.

1. If you are using token-based authentication, create a web services user on Magento Admin by selecting **System > All Users > Add New User**. (If you are using session-based or OAuth authentication, you do not need to create the new user in the Admin.)
2. Create a new integration on Magento Admin. To create an integration, click **System** > Extensions > **Integration** > Add New Integration**. Be sure to restrict which resources the integration can access.
3. Use a REST or SOAP client to configure authentication.

See the User Guide for more information.
