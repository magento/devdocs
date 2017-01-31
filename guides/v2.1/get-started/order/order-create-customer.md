---
layout: default
group: get-started
subgroup: 20_REST
title: Order Processing Tutorial
menu_title: Step 4. Create a customer
menu_order: 24
level3_menu_node: level3child
level3_subgroup: order
version: 2.1
github_link: get-started/order/order-create-customer.md
---
Previous Step: [Get the admin token]({{page.baseurl}}/get-started/order/order-admin-token.html) | Next Step: [Create a shopping cart token]({{page.baseurl}}/get-started/order/order-create-quote.html)

## Step 4. Create a customer {#create-customer}

Customers can make purchases in three ways:

* As a logged-in user
* As a guest user who logs in or creates an account when the order is placed
* As a guest user who does not create an account

This tutorial creates an order by a logged-in user. Magento provides additional REST endpoints for handling guest users.

### 1. Create a customer account

Creating a customer account requires admin permissions.

**Endpoint**

`POST /V1/customers`

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <admin token>`

**Payload**

It is recommended that you substitute the value of the `email` parameter with a real email address so that you receive all notifications.

{% collapsible Click to show/hide %}
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

{% collapsible Click to show/hide %}
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

You can log in to the Luma store using the user name `jdoe@example.com` and password `Password1`.

### 2. Get the customer's access token {#get-token}

To get a customer's access token, you must specify the customer's username and password in the payload. You do not need to specify an authorization token.

**Endpoint**

`POST /V1/integration/customer/token`

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

Magento returns the customer's access token. This token must be specified in the authorization header of every call the customer makes on his or her own behalf.

`q0u66k8h42yaevtchv09uyy3y9gaj2ap`

Previous Step: [Get the admin token]({{page.baseurl}}/get-started/order/order-admin-token.html) | Next Step: [Create a shopping cart token]({{page.baseurl}}/get-started/order/order-create-quote.html)
