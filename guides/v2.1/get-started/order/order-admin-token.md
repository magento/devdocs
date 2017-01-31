---
layout: default
group: get-started
subgroup: 20_REST
title: Order Processing Tutorial
menu_title: Step 3. Get the admin token
menu_order: 23
level3_menu_node: level3child
level3_subgroup: order
version: 2.1
github_link: get-started/order/order-admin-token.md
---

Previous Step: [Configure the Store]({{page.baseurl}}/get-started/order/order-config-store.html) | Next Step: [Create a customer]({{page.baseurl}}/get-started/order/order-create-customer.html)


## Step 3. Get the admin token
Most REST calls to Magento require an authorization token. The token allows Magento to verify that the caller is authorized to access a system resource. To get a token, you must specify the user's username and password in the payload.

See [Token-based authentication]({{page.baseurl}}get-started/authentication/gs-authentication-token.md) for more information about authorization tokens.

**Endpoint**

To retrieve the authorization token for the admin user:

`POST /V1/integration/admin/token`

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

Previous Step: [Configure the Store]({{page.baseurl}}/get-started/order/order-config-store.html) | Next Step: [Create a customer]({{page.baseurl}}/get-started/order/order-create-customer.html)
