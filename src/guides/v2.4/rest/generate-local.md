---
group: rest-api
title: Generate a local REST reference
functional_areas:
  - Integration
---

The REST documentation on the Magento devdocs [website](https://glossary.magento.com/website) is generated with [Swagger UI](http://swagger.io) using a schema derived from the latest build of Magento 2. However, the REST [API](https://glossary.magento.com/api) documentation on devdocs is static in that the Magento Developers website is not running an instance of Magento, and there is no live data.

Magento provides two ways to get detailed information about the structure of the REST endpoints, as described below.

## Generate a full REST reference locally

The Swagger UI is installed automatically on your server. As a result, you can generate live REST API documentation that can include {{site.data.var.ee}} modules, third-party modules, and [extension](https://glossary.magento.com/extension) attributes that have been installed on your system. To view this documentation, go to:

`http://<magento_host>/swagger`

To view the Swagger documentation for a specific store view, use this URL:

 `http://<magento_host>/swagger?store=<store_code>`

 The value of `store_code` must be one of the following:

-  `default`
-  The assigned store code
-  `all`. This value only applies to the [CMS](https://glossary.magento.com/cms) and Product modules. If this value is specified, the API call affects all the merchant's stores.

By default, Magento returns documentation for resources available to anonymous users across all stores. If you specify a valid customer or admin token in the `api_key` text box in the upper right corner, Swagger returns documentation for all the endpoints the user has access to. To generate an API key, call the `POST /V1/integration/customer/token` endpoint or a 2FA endpoint such as `POST /V1/tfa/provider/google/authenticate` with the appropriate payload, as directed in [Token-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html).

The generated Swagger documentation provides the capability to test REST requests. A user can enter a sample request, then press the **Try it out!** button, and Swagger returns information such as a `curl` command, a request URL, a response body, a response code, and the response header. The **Try it out!** button will not work unless a bearer [authorization](https://glossary.magento.com/authorization) token has been specified.

### REST reference for Asynchronous API

You can also use Swagger to generate live asynchronous API REST documentation. To create this documentation, add the `?type=async` parameter to the standard Swagger URL:

`http://<magento_host>/swagger?type=async`

Swagger returns information about all resources available for asynchronous REST APIs.

## Return the JSON schema for one or more services

You can use a REST client to generate the JSON schema for one or more services. In the client, set the method to `GET` and the [URL](https://glossary.magento.com/url) to

`http://<magento_host>/rest/<store_code>/schema?services=<serviceName1,serviceName2,..>`

For example:

`http://<magento_host>/rest/default/schema?services=catalogProductRepositoryV1`

To return information about all services:

`http://<magento_host>/rest/<store_code>/schema`

{:.bs-callout-info}
You must specify an authorization token for an [admin](https://glossary.magento.com/admin) user to return information for most endpoints. See [Token-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html) for more information.

## Return the complete JSON schema

To return the complete JSON schema, specify the `?services=all` parameter in the URL. The default `store_code` is `all`, but you can also specify `default` or a store code defined on the system. For example: `http://<magento_host>/rest/default/schema?services=all`

The base URL for returning the asynchronous schema is `http://<magento_host>/rest/<store_code>/async/schema`.

## Security

By default, the `/swagger` endpoint is open on Magento instances. Leaving it open on a public instance could potentially expose system information that should not be readable.

To close off the `/swagger` endpoint, disable the following modules:

-  Swagger
-  SwaggerWebapi
-  SwaggerWebapiAsync

To ensure proper functionality, always test Magento instances after disabling modules.

You may also use web server rewrite rules to redirect users trying to access the endpoint:

-  [nginx rewrite module](http://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite)
-  [apache mod_rewrite](https://httpd.apache.org/docs/2.4/rewrite/)

{:.ref-header}
Related topics

[Restricting access to anonymous web APIs]({{ page.baseurl }}/rest/anonymous-api-security.html)
[Token-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html)
