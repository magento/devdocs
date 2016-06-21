---
layout: default
group: rest
subgroup: A_rest
title: Generate local REST API reference
menu_title: Generate local API reference
menu_order: 5
version: 2.1
github_link: rest/generate-local.md

---


The REST documentation is generated with [Swagger UI](http://swagger.io) using a schema derived from the latest build of Magento 2 Community Edition. However, the REST API documentation is static in that the Magento Developers website is not running an instance of Magento.

The REST documentation on the Magento devdocs website is generated with Swagger UI using a schema derived from the latest build of Magento 2 Community Edition. However, the REST API documentation on devdocs is static in that the Magento Developers website is not running an instance of Magento and there is no live data.

The Swagger UI is installed automatically on your server. As a result, you can generate live REST API documentation that can include third-party modules and extension attributes that have been installed on your system. To view this documentation, go to:

`http://<magento_host>/swagger`

You can also use the following link to generate a JSON schema:

`http://<magento_host>/rest/default/schema`

To access REST API documentation, Magento requires the user to be authenticated and authorized, as follows:

* By default, Magento returns documentation for resources available to anonymous users.
* If a customer or admin session is active, Magento returns documentation as permitted by the user's role.
* To retrieve information for a particular user, you must specify a token in the Authorization request header with the Bearer HTTP authorization scheme.

The generated Swagger documentation provides the capability to test REST API requests. A user can enter a sample request, then press the **Try it out!** button, and Swagger returns information such as a `curl` command, a request URL, a response body, a response code, and the response header. Using the **Try it out!** button also requires a bearer authorization token.

The **Try it out!** feature is not available on Swagger documentation published on the Magento devdocs website.

<div class="bs-callout bs-callout-info" id="info">
  <p>The <b>Try it out!</b> feature is not available on Swagger documentation published on the Magento devdocs website.</p>
</div>
