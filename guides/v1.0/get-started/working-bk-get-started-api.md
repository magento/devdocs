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

The Magento web API framework provides integrators and developers the means to create REST and SOAP applications that  with the means to 

* Supports REST and SOAP
* Any service can be exapanded with XML
* Authentication and authorization is available for 
	* AJAX
	* Mobile
	* System-to-system



<h2>Who uses the Magento web APIs?</h2>

The Magento web API framework makes it easy to call Magento services through REST or SOAP.

You use a client to access these services. These clients include:

* Third-party applications. For example, a mobile application.
* External batch jobs that run without user intervention.
* JavaScript widgets in the Magento storefront or Admin interface. The widget makes AJAX calls to access services.




<h2>What can I do with the Magento web APIs?</h2>


The APIs can perform a wide array of tasks

* Create a shopping app.
* Create an admin shopping app. Store employees could walk around and help customers make purchases
* Inventory management
* Inventory audit
* Shipping
* Integrate to ERP (RM accounting, marketing automation (coupons only))
* Integrate to a CMS (we don't have content tagging)





Extensions allow integration with other systems, with little knowledge of Magento code required.

These files are the minimum need to extend a module:

config.xml
module.xml
composer.json

The framework is based on the CRUD & search model. Searches are filterable to save on bandwidth on mobile. APIs must poll the system for changes. There are no web hooks.

The framework features integration style APIs for Catalogs and Quotes. (Sales to be ready post 2.0)

One API call can return many different types of information. If a user wanted to create a downloadable product with web imagesand a link, one call can create all that. 

From a product information management perspective, the framework can create an attribute set and push data to EAVs.













