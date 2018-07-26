---
layout: default
group: rest
title: Create a customer and generate a customer token
version: 2.3
github_link: rest/tutorials/prerequisite-tasks/create-customers.md
redirect_from:  guides/v2.1/get-started/order-tutorial/order-create-customer.html
functional_areas:
  - Integration
  - Orders
  - Customers
---

Customers can make purchases in three ways:

* As a logged-in user
* As a guest user who logs in or creates an account when the order is placed
* As a guest user who does not create an account


The REST tutorials that show a workflow from a customer's perspective assume that the customer is logged in.
If you want to recreate a tutorial using guest customers, review the [List of REST endpoints by module]({{ site.baseurl }}/rest/list.html) and select an endpoint that contains `guest-carts`in the route.

## Create a customer account

Creating an account on behalf of a customer requires {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}admin{% endglossarytooltip %} permissions.

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

``` json
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
```

**Response**

Magento assigned this user `id` value of `2`.

``` json
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
```
You can log in to the Luma store using the username `jdoe@example.com` and password `Password1`.

## Generate the customer's access token {#get-token}

To generate a customer's access token, you must specify the customer's username and password in the payload. You do not specify an admin {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %} token.

By default, a customer token is valid for 1 hour. To change this value, log in to Admin and go to **Configuration** > **Services** > **OAuth** > **Access Token Expiration**.


**Endpoint**

`POST http://<host>/rest/default/V1/integration/customer/token`

**Headers**

`Content-Type` `application/json`

**Payload**

``` json
{
"username": "jdoe@example.com",
"password": "Password1"
}
```
**Response**

Magento returns the customer's access token. Your integration must specify a customer token in the authorization header of every call  customers make on their own behalf.

`q0u66k8h42yaevtchv09uyy3y9gaj2ap`

## Verify this step {#verify-step}

1. Log in to the Luma {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} using the email `jdoe@example.com` and password `Password1`.
2. Click the account name (Jane) in the upper right corner and select **My Account**.
3. Click **Address Book** to view the default billing and shipping addresses.
