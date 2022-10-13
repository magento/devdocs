---
layout: tutorial
group: rest-api
title: Step 6. Create a customer and generate a customer token
subtitle: Order processing with Inventory Management
menu_title: Step 6. Create a customer and generate a customer token
menu_order: 60
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

In this step, we will create a customer account that is tied to the `us` web view that we created in [Step 1. Configure your environment]({{ page.baseurl }}/rest/tutorials/inventory/configure-environment.html). Before we can do this, we need to know the website and store view IDs.

## Get the website and store view IDs

The `GET /V1/store/storeViews` endpoint returns an array of store view IDs, along with the corresponding website and store group IDs. When you create a customer, change the `id` parameter to the `store_id` parameter

**Endpoint:**

`GET <host>/rest/all/V1/store/storeViews`

**Scope:**

`all` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

Not applicable

**Response:**

The value of the `id` and `website_id` parameters for the US Store View is `2`.

```json
[
    {
        "id": 1,
        "code": "default",
        "name": "Default Store View",
        "website_id": 1,
        "store_group_id": 1,
        "is_active": 1
    },
    {
        "id": 0,
        "code": "admin",
        "name": "Admin",
        "website_id": 0,
        "store_group_id": 0,
        "is_active": 1
    },
    {
        "id": 2,
        "code": "us",
        "name": "US Store View",
        "website_id": 2,
        "store_group_id": 2,
        "is_active": 1
    },
    {
        "id": 3,
        "code": "de",
        "name": "Germany Store View",
        "website_id": 3,
        "store_group_id": 3,
        "is_active": 1
    }
]
```

## Create a customer

We can use the same customer definition presented in [Step 3. Create a customer]({{ page.baseurl }}/rest/tutorials/orders/order-create-customer.html), with the only differences being the scope of the call (`us` instead of `default`) and inserting the `store_id` and `website_id` parameters into the payload.

**Endpoint:**

`POST <host>/rest/us/V1/customers`

**Scope:**

`us` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

```json
{
   "customer" : {
      "lastname" : "Doe",
      "firstname" : "Jane",
      "email" : "jdoe@example.com",
      "store_id": 2,
      "website_id": 2,
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

**Response:**

The customer `id` is `3`.

```json
{
    "id": 3,
    "group_id": 1,
    "default_billing": "3",
    "default_shipping": "3",
    "created_at": "2019-01-28 20:53:45",
    "updated_at": "2019-01-28 20:53:46",
    "created_in": "US Store View",
    "email": "jdoe@example.com",
    "firstname": "Jane",
    "lastname": "Doe",
    "store_id": 2,
    "website_id": 2,
    "addresses": [
        {
            "id": 3,
            "customer_id": 3,
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

To generate a customer's access token, you must specify the customer's username and password in the payload. You do not specify an admin [authorization](https://glossary.magento.com/authorization) token.

By default, a customer token is valid for 1 hour. To change this value, click **Stores** > Settings > **Configuration** > **Services** > **OAuth** > **Access Token Expiration**. Then enter a new value for **Customer Token Lifetime (hours)**.

**Endpoint:**

`POST <host>/rest/us/V1/integration/customer/token`

**Scope:**

`us` store view

**Headers:**

`Content-Type`: `application/json`

**Payload:**

```json
{
"username": "jdoe@example.com",
"password": "Password1"
}
```

**Response:**

Magento returns the customer's access token. Your integration must specify a customer token in the authorization header of every call customers make on their own behalf.

`fl0o0yr1xota4w88negpwfsle38807yb`

## Verify this step {#verify-step}

1. Log in to the Test website using the email `jdoe@example.com` and password `Password1`.
1. Click the account name (Jane) in the upper right corner and select **My Account**.
1. Click **Address Book** to view the default billing and shipping addresses.
