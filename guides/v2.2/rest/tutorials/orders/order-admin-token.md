---
layout: tutorial
group: rest-api
title: Step 2. Get the admin token
subtitle: Order processing tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 2
level3_subgroup: order-tutorial
redirect_from:
  - /guides/v2.2/get-started/order-tutorial/order-admin-token.html
  - /guides/v2.3/get-started/order-tutorial/order-admin-token.html
functional_areas:
  - Integration
  - Orders
---

Each step in this tutorial provides the following information:

**Endpoint:**

This section lists the HTTP verb and full path to the endpoint. The basic structure of a REST call in Magento is

`<HTTP verb> http://<host>/rest/<scope>/<endpoint>`

where:

Element | Description
--- | ---
`HTTP verb` | One of `GET`, `POST`, `PUT`, or `DELETE`
`host` | The hostname or IP address (and optionally, port) of the Magento installation.
`scope` | Specifies which store the call affects. In this tutorial, this value is `default`.
`endpoint` | The full URI (Uniform Resource Identifier) to the endpoint. These values always start with `/V1`. For example, `/V1/orders/4`.

**HTTP headers:**

This section indicates which key/value pairs you must specify in the HTTP headers. All calls require one or more HTTP headers.

**Payload:**

This section lists the information that is sent to Magento. All payload samples are valid and can be copied and pasted into your calls, but you might need to change the `id` values that Magento returns.

**Response:**

This section lists the information that Magento sends to the REST client. These values are often referenced in other steps in the tutorial. The values Magento returns might be different than the values listed in the examples provided in this tutorial.

### Get the admin authorization token

Most REST calls to Magento require an [authorization](https://glossary.magento.com/authorization) token. The token allows Magento to verify that the caller is authorized to access a system resource. To get a token, you must specify the user's username and password in the payload.

By default, an admin token is valid for 4 hours. To change this value, log in to Admin and go to **Stores** > **Settings** > **Configuration** > **Services** > **OAuth** > **Access Token Expiration** > **Admin Token Lifetime (hours)**.

See [Token-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html) for more information about authorization tokens.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/integration/admin/token`

**Headers:**

`Content-Type` `application/json`

**Payload:**

```json
{
  "username": "admin",
  "password": "123123q"
}
```

**Response:**

Magento returns the admin's access token.

`5r8cvmpr11j6gmau8990rcj2qk7unh8i`

This token must be specified in the authorization header of every call that requires [admin](https://glossary.magento.com/admin) permissions.

### Verify this step {#verify-step}

There are no additional verification steps. Tokens are not displayed in Admin.
