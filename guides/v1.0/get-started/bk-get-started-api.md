---
layout: default
group: get-started
subgroup: A_Concepts
title: Getting Started with Magento Web APIs
menu_title: Introduction
menu_order: 1
menu_node: parent

github_link: get-started/bk-get-started-api.md
---
<h2>What are the Magento web APIs?</h2>

The Magento web API framework provides integrators and developers the means to use web services that communicate with the Magento system. Key features include:

* Support for <a href="{{ site.gdeurl }}/rest/bk-rest.html">REST</a> (Representational State Transfer) and <a href="{{ site.gdeurl }}/soap/bk-soap.html">SOAP</a> (Simple Object Access Protocol)

* Three types of <a href="{{ site.gdeurl }}get-started/authentication/gs-authentication.html">authentication</a>:
	* Third-party applications authenticate with <a href="{{ site.gdeurl }}/get-started/authentication/gs-authentication-oauth.html">OAuth 1.0a</a>.
	* Mobile applications authenticate using <a href="{{ site.gdeurl }}/get-started/authentication/gs-authentication-token.html">tokens</a>. 
	* Administrators and customers are authenticated with <a href="{{ site.gdeurl }}/get-started/authentication/gs-authentication-token.html">login credentials</a>. 
	
* Users and integrations are assigned resources that they have access to. The API framework checks that any call has authorization to perform the request.    

* Any Magento or third-party service can be <a href="{{ site.gdeurl }}/extension-dev-guide/service-contracts/service-to-web-service.html">configured as a web API</a>.

	 To configure a web API, you define XML elements and attributes in a `webapi.xml` configuration file. If a service is not defined in a configuration file, it will not be exposed at all. 
* The framework is based on the CRUD (create, read, update, delete) & search model. Searches are filterable to save on bandwidth on mobile. APIs must poll the system for changes. The system does not currently support web hooks.

* One API call can send or return many different types of information. For example, one call could be used to create a downloadable product with web images and a link. 


To access these services, use one of the following types of clients:

* Third-party applications, such as a mobile application.
* External batch jobs that run without user intervention.
* JavaScript widgets in the Magento storefront or Admin interface. The widget makes AJAX calls to access services.


<h2>What can I do with the Magento web APIs?</h2>


The APIs can used to perform a wide array of tasks. For example:

* Create a shopping app. This can be a traditional app that a user downloads on a mobile device. You could also create an app that an employee uses on a showroom floor to help customers make purchases.

* Integrate with CRM (Customer Relationship Management) or ERP (Enterprise Resource Planning) back-end systems, such as Salesforce or Xero.

* Integrate with a CMS (Content Management System). At present, content tagging is not supported.



<h2>How do I get started?</h2>

You must register a web service on Magento Admin. Use the following general steps to set up Magento to enable web services.

1. Create a web services user on Magento Admin.
2. Create a new integration on Magento Admin. Be sure to restrict which resources the integration can access.
3. Use a REST or SOAP client to configure authentication.

See the Merchant documentation for more information.







