---
layout: default
group: rest
subgroup: A_rest
title: Generate local REST API reference
menu_title: Generate local API reference
menu_order: 5
github_link: rest/generate-local.md

---

The REST documentation is generated with [Swagger UI](http://swagger.io) using a schema derived from the latest build of Magento 2.0 Community Edition. However, the REST API documentation is static in that the Magento Developers website is not running an instance of Magento.

If you install Swagger UI on your server, then you can generate live REST API documentation. Use the following link to generate a JSON schema that includes third-party modules and extension attributes that have been installed on your system.

`http://<magento_host>/rest/default/schema`

Then save the schema file and load it into your Swagger UI instance.

To access REST API documentation, Magento requires the user to be authenticated and authorized, as follows:

* By default, Magento returns documentation for resources available to anonymous users.
* If a customer/admin session is active, Magento returns documentation as permitted by the user's role.
* To retrieve information for a particular user, the "Authorization" header with a bearer token value must be sent with the request.

The generated Swagger documentation provides the capability to test REST API requests. A user can enter a sample request, then press the **Try it out!** button, and Swagger returns a `curl` command, a request URL, a response body, a response code, and the response header.

<div class="bs-callout bs-callout-info" id="info">
  <p>**The Try it out!** feature is not available on Swagger documentation published on the Magento devdocs website.</p>
</div>
