---
layout: tutorial
group: rest
title: Step 7. Create a customer and generate a customer token
subtitle: Order processing with MSI
menu_title: Step 7. Create a customer and generate a customer token
menu_order: 70
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

In this step, we will create a customer account that is tied to the `us` web view that we created in Step 1. We can use the same customer definition presented in [Create a customer and generate a customer token]({{ page.baseurl }}/rest/tutorials/prerequisite-tasks/create-customer.html), with the only difference being the scope of the call. In this case, the endpoint path contains `us` instead of `default`.

**Endpoint**

`POST http://<host>/rest/us/V1/customers`

**Scope**

`us` store view

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload**

``` json
{
   "customer" : {
      "lastname" : "Doe",
      "firstname" : "Jane",
      "email" : "jdoe@example.com",
      "addresses" : [
         {
            "defaultBilling" : true,
            "defaultShipping" : true,
            "firstname" : "Jane",
            "lastname" : "Doe",
            "region" : {
               "regionCode" : "NY",
               "regionId" : 43,
               "region" : "New York"
            },
            "countryId" : "US",
            "postcode" : "10755",
            "city" : "Purchase",
            "street" : [
               "123 Oak Ave"
            ],
            "telephone" : "512-555-1111"
         }
      ]
   },
   "password" : "Password1"
}
```

**Response**

The customer `id` is `2`.

``` json
{
    "id": 2,
    "group_id": 1,
    "default_billing": "2",
    "default_shipping": "2",
    "created_at": "2018-08-02 16:17:26",
    "updated_at": "2018-08-02 16:17:27",
    "created_in": "US Store View",
    "email": "jdoe@example.com",
    "firstname": "Jane",
    "lastname": "Doe",
    "store_id": 2,
    "website_id": 2,
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
    "disable_auto_group_change": 0,
    "extension_attributes": {
        "is_subscribed": false
    }
}
```

## Generate the customer's access token {#get-token}

To generate a customer's access token, you must specify the customer's username and password in the payload. You do not specify an admin {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %} token.

By default, a customer token is valid for 1 hour. To change this value, click **Configuration** > **Services** > **OAuth** > **Access Token Expiration**. Then enter a new value for **Customer Token Lifetime (hours)**.


**Endpoint**

`POST http://<host>/rest/us/V1/integration/customer/token`

**Scope**

`us` store view

**Headers**

`Content-Type`: `application/json`

**Payload**

``` json
{
"username": "jdoe@example.com",
"password": "Password1"
}
```
**Response**

Magento returns the customer's access token. Your integration must specify a customer token in the authorization header of every call customers make on their own behalf.

`fl0o0yr1xota4w88negpwfsle38807yb`

## Verify this step {#verify-step}

1. Log in to the Test website using the email `jdoe@example.com` and password `Password1`.
2. Click the account name (Jane) in the upper right corner and select **My Account**.
3. Click **Address Book** to view the default billing and shipping addresses.
