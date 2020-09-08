---
group: rest-api
title: Generate the admin token
functional_areas:
  - Integration
  - Orders
---

In a production environment, you would typically [create an integration]({{page.baseurl}}/get-started/create-integration.html) and supply the integration token with any REST call that requires admin privileges. The token allows Magento to verify that the caller is authorized to access the affected system resource.

In this tutorial, we will supply an admin token instead. To get a token, you must have 2FA configured. This tutorial assumes that you are using Google Authenticator as your 2FA solution. The endpoint and payload will be different for other 2FA solutions. See [Two-Factor Authentication]({{page.baseurl}}/security/two-factor-authentication.html) for more information.

Your request must specify the admin user's `username`, `password` and `otp` (one time password). The `otp` value is the six-digit authorization code that Google Authenticator generates.

By default, an admin token is valid for 4 hours. To change this value, log in to Admin and go to **Stores** > **Settings** > **Configuration** > **Services** > **OAuth** > **Access Token Expiration** > **Admin Token Lifetime (hours)**.

See [Token-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html) for more information about authorization tokens.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/tfa/provider/google/authenticate`

**Headers:**

`Content-Type` `application/json`

**Payload:**

```json
{
  "username": "admin",
  "password": "<admin-password>",
  "otp": "<otp-value>"
}
```

**Response:**

Magento generates the admin's access token

`5r8cvmpr11j6gmau8990rcj2qk7unh8i`

This token must be specified in the authorization header of every call that requires [admin](https://glossary.magento.com/admin) permissions.

### Verify this step {#verify-step}

There are no additional verification steps. Tokens are not displayed in Admin.
