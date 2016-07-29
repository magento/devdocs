---
layout: default
group: rest
subgroup: A_rest
title: Generate local REST API reference
menu_title: Generate local API reference
menu_order: 5
version: 2.0
github_link: rest/generate-local.md

---

The REST documentation on the Magento devdocs website is generated with [Swagger UI](http://swagger.io) using a schema derived from the latest build of Magento 2 Community Edition. However, the REST API documentation on devdocs is static in that the Magento Developers website is not running an instance of Magento and there is no live data.

The Swagger UI is installed automatically on your server. As a result, you can generate live REST API documentation that can include Magento Enterprise Edition (EE) modules, third-party modules, and extension attributes that have been installed on your system. To view this documentation, go to:

`http://<magento_host>/swagger`

By default, Magento returns documentation for resources available to anonymous users. If you specify a valid value in the api_key text box in the upper right corner, Swagger returns documentation for all the APIs the user has access to. To generate an API key, call the `POST /V1/integration/customer/token` or `POST /V1/integration/admin/token` as directed in [Token-based authentication]({{page.baseurl}}get-started/authentication/gs-authentication-token.html).

The generated Swagger documentation provides the capability to test REST API requests. A user can enter a sample request, then press the **Try it out!** button, and Swagger returns information such as a `curl` command, a request URL, a response body, a response code, and the response header. The **Try it out!** button will not work unless a bearer authorization token has been specified.

<div class="bs-callout bs-callout-info" id="info">
  <p>The <b>Try it out!</b> feature is not available on Swagger documentation published on the Magento devdocs website.</p>
</div>

You can also use a REST client to generate the JSON schema. In the client, set the method to `GET` and the URL to `http://<magento_host>/rest/default/schema`. You must specify a bearer authorization token in the header.
