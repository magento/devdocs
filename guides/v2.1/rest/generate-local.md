---
layout: default
group: rest
subgroup: A_rest
title: Generate a local REST API reference
menu_title: Generate a local API reference
menu_order: 5
version: 2.1
github_link: rest/generate-local.md
functional_areas:
  - Integration
---

## Get more REST API documentation

The REST documentation on the Magento devdocs {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} is generated with [Swagger UI](http://swagger.io) using a schema derived from the latest build of Magento 2. However, the REST {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} documentation on devdocs is static in that the Magento Developers website is not running an instance of Magento, and there is no live data.

Magento provides two ways to get detailed information about the structure of the REST APIs, as described below.

## Generate a full REST API reference locally

The Swagger UI is installed automatically on your server. As a result, you can generate live REST API documentation that can include {{site.data.var.ee}} modules, third-party modules, and {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} attributes that have been installed on your system. To view this documentation, go to:

`http://<magento_host>/swagger`

By default, Magento returns documentation for resources available to anonymous users. If you specify a valid value in the api_key text box in the upper right corner, Swagger returns documentation for all the APIs the user has access to. To generate an API key, call the `POST /V1/integration/customer/token` or `POST /V1/integration/admin/token` as directed in [Token-based authentication]({{page.baseurl}}/get-started/authentication/gs-authentication-token.html).

The generated Swagger documentation provides the capability to test REST API requests. A user can enter a sample request, then press the **Try it out!** button, and Swagger returns information such as a `curl` command, a request URL, a response body, a response code, and the response header. The **Try it out!** button will not work unless a bearer {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %} token has been specified.

<div class="bs-callout bs-callout-info" id="info">
  <p>The <b>Try it out!</b> feature is not available on Swagger documentation published on the Magento devdocs website.</p>
</div>

## Return the JSON schema for one or more services

You can use a REST client to generate the JSON schema for one or more services. In the client, set the method to `GET` and the {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} to

`http://<magento_host>/rest/<store_code>/schema?services=<serviceName1,serviceName2,..>`

The value of `store_code` must be one of the following:

* `default`
* The assigned store code
* `all`. This value only applies to the {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} and Product modules. If this value is specified, the API call affects all the merchant's stores.

For example:

`http://<magento_host>/rest/default/schema?services=catalogProductRepositoryV1`

To return information about all services:

`http://<magento_host>/rest/<store_code>/schema`

<div class="bs-callout bs-callout-info" id="info">

<p>You must specify an authorization token for an {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}admin{% endglossarytooltip %} user to return information for most endpoints. See <a href="{{page.baseurl}}/get-started/authentication/gs-authentication-token.html">Token-based authentication</a> for more information. </p>
</div>

<h2>Related topics</h2>

[Token-based authentication]({{page.baseurl}}/get-started/authentication/gs-authentication-token.html)

[List of REST APIs by module]({{page.baseurl}}/rest/list.html)

[List of service names permodule]({{page.baseurl}}/rest/rest_endpoints.html)
