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

This step creates a customer that lives close to several stores that serve as in-store pickup locations. Although this tutorial ships the order using a traditional shipping method, the GraphQL tutorial shows how in-store pickup can be implemented.

## Create a customer

If you prefer to use a customer that is already defined on your installation, scroll down to [Generate the customer's access token](#get-token).

The response of the `POST /V1/customers` endpoint includes an address ID. This value will be used in a later step.

**Endpoint:**

`POST <host>/rest/default/V1/customers`

**Scope:**

`default` store view

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
            "postcode" : "11501",
            "city" : "Mineola",
            "street" : [
               "160 1st St."
            ],
            "telephone" : "516-555-1111"
         }
      ]
   },
   "password" : "Password1"
}
```

**Response:**

The customer `id` is `2`.

```json
{
    "id": 2,
    "group_id": 1,
    "default_billing": "2",
    "default_shipping": "2",
    "created_at": "2020-07-22 23:12:47",
    "updated_at": "2020-07-22 23:13:15",
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
                "160 1st St."
            ],
            "telephone": "516-555-1111",
            "postcode": "11501",
            "city": "Mineola",
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

`POST <host>/rest/default/V1/integration/customer/token`

**Scope:**

`default` store view

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
