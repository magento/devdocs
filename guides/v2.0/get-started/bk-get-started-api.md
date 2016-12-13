---
layout: default
group: get-started
subgroup: A_Introduction
title: Getting Started with Magento Web APIs
menu_title: Introduction
menu_order: 1
menu_node: parent
version: 2.0
github_link: get-started/bk-get-started-api.md
redirect_from: /guides/v1.0/get-started/bk-get-started-api.html
---
<h2 id="whatare">What are the Magento web APIs?</h2>

The Magento web API framework provides integrators and developers the means to use web services that communicate with the Magento system. Key features include:

* Support for both <a href="{{page.baseurl}}/rest/bk-rest.html">REST</a> (Representational State Transfer) and <a href="{{page.baseurl}}/soap/bk-soap.html">SOAP</a> (Simple Object Access Protocol). In Magento 2, the web API coverage is the same for both REST and SOAP.

* Three types of <a href="{{page.baseurl}}get-started/authentication/gs-authentication.html">authentication</a>:
	* Third-party applications authenticate with <a href="{{page.baseurl}}/get-started/authentication/gs-authentication-oauth.html">OAuth 1.0a</a>.
	* Mobile applications authenticate using <a href="{{page.baseurl}}/get-started/authentication/gs-authentication-token.html">tokens</a>.
	* Administrators and customers are authenticated with <a href="{{page.baseurl}}/get-started/authentication/gs-authentication-token.html">login credentials</a>.

* All accounts and integrations are assigned resources that they have access to. The API framework checks that any call has authorization to perform the request.

* Any Magento or third-party service can be <a href="{{page.baseurl}}/extension-dev-guide/service-contracts/service-to-web-service.html">configured as a web API</a> with a few lines of xml.

	 To configure a web API, you define XML elements and attributes in a `webapi.xml` configuration file. If a service is not defined in a configuration file, it will not be exposed at all.
* The framework is based on the CRUD (create, read, update, delete) & search model. The system does not currently support web hooks.

* The framework supports field filtering of web api responses to conserve mobile bandwidth.

* Integration style web API’s enable a single web API call to run multiple services at once for a more efficient integration.  An example of this behavior can be see in the Catalog where one web API call can create a product; if your payload includes the inventory object and media object then the framework will also create the product’s inventory & media in that one API call.


<h2 id="uses">What can I do with the Magento web APIs?</h2>


The APIs can used to perform a wide array of tasks. For example:

* Create a shopping app. This can be a traditional app that a user downloads on a mobile device. You could also create an app that an employee uses on a showroom floor to help customers make purchases.

* Integrate with CRM (Customer Relationship Management) or ERP (Enterprise Resource Planning) back-end systems, such as Salesforce or Xero.

* Integrate with a CMS (Content Management System). At present, content tagging is not supported.

* Create JavaScript widgets in the Magento storefront or on the Admin panel. The widget makes AJAX calls to access services.


<h2 id="procedure">How do I get started?</h2>

You must register a web service on Magento Admin. Use the following general steps to set up Magento to enable web services.

1. If you are using token-based authentication, create a web services user on Magento Admin by selecting **System > All Users > Add New User**. (If you are using session-based or OAuth authentication, you do not need to create the new user in the Admin.)
2. Create a new integration on Magento Admin. To create an integration, click System > Integration > Add New Integration. Be sure to restrict which resources the integration can access.
3. Use a REST or SOAP client to configure authentication.

See the User Guide for more information.
