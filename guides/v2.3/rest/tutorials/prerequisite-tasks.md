---
layout: default
group: rest
title: Generate authorization tokens
version: 2.1
github_link: rest/tutorial/generate-auth-tokens.md
functional_areas:
  - Integration
  - Orders
---

Most REST calls to Magento require an {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %} token. The token allows Magento to verify that the caller is authorized to access the requested system resource.

Magento uses the following types of authorization tokens for REST calls:

Token type | Description | Default lifetime
--- | --- | ---
Admin | The merchant determines which Magento resources an admin user has access to. | 4 hours.
Customer | Magento grants access to resources with the anonymous or self permission. Merchants cannot edit these settings. | 1 hour
Integration | The merchant determines which Magento resources the integration has access to. | Indefinite. The token lasts until it is manually revoked.

To change the default lifetime of an admin or customer token, log in to Admin and go to **Configuration** > **Services** > **OAuth** > **Access Token Expiration**.

Magento generates an integration token and secret when a merchant adds a third-party integration. Integration tokens are beyond the scope of the tutorials.

See [Token-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html) for more information about authorization tokens.

## Generate the admin authorization token

To get an admin token, you must specify the administrator's username and password in the payload.

**Endpoint**

`POST http://<host>/rest/default/V1/integration/admin/token`

**Headers**

`Content-Type` `application/json`

**Payload**

{% highlight json %}
{
"username": "admin",
"password": "123123q"
}
{% endhighlight %}

**Response**

Magento returns the admin's access token.

`5r8cvmpr11j6gmau8990rcj2qk7unh8i`

This token must be specified in the authorization header of every call that requires admin permissions.

### Verify this step {#verify-step}

There are no additional verification steps. Tokens are not displayed in Admin.

## Create a customer account

Before you can generate an customer token, we must define a customer. You must have admin permissions to create a customer account.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
This example shows a simplified way of creating a customer account. Typically, you would not define a customer password using plain text. Instead, you would specify the payload without the `password` parameter. By default if the call is successful, Magento sends a "Welcome" email to the customer that includes a request to set the password. You could also initiate a password reset email by calling `PUT /V1/customers/password`.
</div>

**Endpoint**

`POST http://<host>/rest/default/V1/customers`

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <admin token>`

**Payload**

We recommend that you substitute the value of the `email` parameter with a real email address so that you receive all notifications.

{% collapsible Show code sample %}
{% highlight json %}
{
	"customer": {
		"email": "jdoe@example.com",
		"firstname": "Jane",
		"lastname": "Doe",
		"addresses": [{
			"defaultShipping": true,
			"defaultBilling": true,
			"firstname": "Jane",
			"lastname": "Doe",
			"region": {
				"regionCode": "NY",
				"region": "New York",
        "regionId":43
			},
			"postcode": "10755",
			"street": ["123 Oak Ave"],
			"city": "Purchase",
			"telephone": "512-555-1111",
			"countryId": "US"
		}]
	},
  "password": "Password1"
}
{% endhighlight %}
{% endcollapsible %}

**Response**

Magento assigned this user `id` value of `2`.

{% collapsible Show code sample %}
{% highlight json %}
{
  "id": 2,
  "group_id": 1,
  "default_billing": "2",
  "default_shipping": "2",
  "created_at": "2017-01-31 01:18:13",
  "updated_at": "2017-01-31 01:18:13",
  "created_in": "Default Store View",
  "email": "jdoe@example.com",
  "firstname": "Jane",
  "lastname": "Doe",
  "store_id": 1,
  "website_id": 1,
  "addresses": [
    {
      "id": 2,
      "customer_id": 2,
      "region": {
        "region_code": "NY",
        "region": "New York",
        "region_id": 43
      },
      "region_id": 43,
      "country_id": "US",
      "street": [
        "123 Oak Ave"
      ],
      "telephone": "512-555-1111",
      "postcode": "10755",
      "city": "Purchase",
      "firstname": "Jane",
      "lastname": "Doe",
      "default_shipping": true,
      "default_billing": true
    }
  ],
  "disable_auto_group_change": 0
}
{% endhighlight %}
{% endcollapsible %}

You can log in to the Luma store using the username `jdoe@example.com` and password `Password1`.

## Generate the customer's access token {#get-token}

To get a customer's access token, you must specify the customer's username and password in the payload. You do not need to specify an admin {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %} token.

**Endpoint**

`POST http://<host>/rest/default/V1/integration/customer/token`

**Headers**

`Content-Type` `application/json`

**Payload**

{% highlight json %}
{
"username": "jdoe@example.com",
"password": "Password1"
}
{% endhighlight %}

**Response**

Magento returns the customer's access token. This token must be specified in the authorization header of every customer-generated request.

`q0u66k8h42yaevtchv09uyy3y9gaj2ap`

### Verify this step {#verify-step}

1. Log in to the Luma {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} using the email `jdoe@example.com` and password `Password1`.
2. Click the account name (Jane) in the upper right corner and select **My Account**.
3. Click **Address Book** to view the default billing and shipping addresses.
