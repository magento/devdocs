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

The REST documentation on the Magento devdocs website is generated with [Swagger UI](http://swagger.io/swagger-ui) using a schema derived from the latest build of Magento 2.0 Community Edition. However, the REST API documentation on devdocs is static in that the Magento Developers website is not running an instance of Magento and there is no live data .

If you install Swagger UI on your server, then you can generate live REST API documentation. See [the Swagger UI documentation](http://swagger.io/swagger-ui/) for information about installing Swagger UI.


Once Swagger UI is installed, use the following link to generate a JSON schema that can include third-party modules and extension attributes that have been installed on your system.

`http://<magento_host>/rest/default/schema`

Then save the schema file and load it into your Swagger UI instance.

To access REST API documentation, Magento requires the user to be authenticated and authorized, as follows:

* By default, Magento returns documentation for resources available to anonymous users.
* If a customer or admin session is active, Magento returns documentation as permitted by the user's role.
* To retrieve information for a particular user, you must specify a token in the Authorization request header with the Bearer HTTP authorization scheme.

The generated Swagger documentation provides the capability to test REST API requests. A user can enter a sample request, then press the **Try it out!** button, and Swagger returns information such as a `curl` command, a request URL, a response body, a response code, and the response header. Using the **Try it out** button also requires a bearer authorization token.

<div class="bs-callout bs-callout-info" id="info">
  <p>The **Try it out!** feature is not available on Swagger documentation published on the Magento devdocs website.</p>
</div>
