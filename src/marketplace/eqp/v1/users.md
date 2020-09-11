---
group: marketplace-api
title: Users
---

The `users` resource accesses and updates your user profile. You can also access your sales reports.

 {:.bs-callout-info}
You cannot use this resource to create a new profile.
You must create a new profile on the [Marketplace Developer Portal][1].
If you use the [sandbox](sandbox.html) environment, you must also create a new profile on the [Sandbox Marketplace Developer Portal][2].

## Profile

You must use your `mage_id` for these endpoints.
One way you can get your `mage_id` is when you obtain a [session token](auth.html#session-token).

```http
GET /rest/v1/users/:mage_id
GET /rest/v1/users/:mage_id?style=summary
```

### Get profile data

By default, requests for profile data return all fields.
You can limit the amount of data that the request returns by using the `style=summary` option.

The following example shows the request/response body for retrieving all profile data:

**Request:**

```bash
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789
```

**Response:**

```json
{
        "mage_id": "MAG123456789",
        "first_name": "John",
        "last_name": "Smith",
        "email": "jsmith@example.com",
        "screen_name": "Agent Smith",
        "has_completed_profile": true,
        "has_accepted_tos": true,
        "profile_image_artifact": {
            "file_upload_id": "5c119a03b4ddf6.75124444.0",
            "filename": "portrait.png",
            "content_type": "image/png",
            "url": "https://mp-stg-static.magento.com/user/68/f3/68f360d3516f594fc957c4179ed4a7a872911f07/pub/d9/c2/d9c23dd795a5faaab603b6b5965eca8a6d9430f2/portrait.png",
            "size": 1234,
            "file_hash": "d5db29cd03a2ed055086cef9c31c252b4587ffff",
            "malware_status": "pass"
        },

        "tos_accepted_version": "1.0",
        "tos_accepted_date": "2018-11-16 01:23:45",
        "is_company": false,
        "vendor_name": "johnsmith",
        "partner_level": 4,
        "locale": "en-US",
        "timezone": "UTC",
        "payment_type": 1,
        "payment_info": "{\"paypal_email\" : \"jsmith@example.com\"}",
        "taxpayer_type": 2,
        "tax_review_status": 3,
        "tax_withhold_percent": 25,
        "extension_share_percent": 70,
        "theme_share_percent": 70,
        "install_share_percent": 100,
        "support_share_percent": 100,
        "privacy_policy_url": "https://www.example.com/privacy",
        "api_callbacks": [
            {
                "name": "My 1st EQP Callback",
                "url": "https://developer.example.com/rest/v1/callback",
                "username": "key"
            }
        ],
        "personal_profile": {
            "bio": "Writes extensions that pass review first time. Blindfolded.",
            "last_logged_in": "2020-07-21 8:09:10",
            "created_at": "2018-10-01 14:04:59",
            "modified_at": "2020-03-14 01:23:45",
            "social_media_info": {
                "twitter": "@johnsmith",
                "stackexchange_url": "",
                "facebook_url": "",
                "linkedin_url": "",
                "github_username": ""
            },
            "addresses": [
                {
                    "address_key": 1,
                    "address_line_1": "123 Magento Way",
                    "state": "Texas",
                    "country": "USA",
                    "postal_code": "77777",
                    "phone": "555-123-4567",
                    "country_code": "+1",
                    "is_primary": true
                }
            ]
        },

        "company_profile": {
            "name": "Agent Smith Inc.",
            "bio": "Vendors of bespoke Magento Extensions.",
            "website_url": "https://www.example.com/",
            "primary_email": "jsmith@example.com",
            "support_email": "support@example.com",
            "created_at": "2018-10-01 14:04:59",
            "modified_at": "2019-12-25 01:23:45",
            "social_media_info": {
                "twitter": "@johnsmithinc",
                "stackexchange_url": "",
                "facebook_url": "",
                "linkedin_url": "",
                "github_username": ""
            },
            "addresses": [
                {
                    "address_key": 1,
                    "address_line_1": "123 Magento Way",
                    "state": "Texas",
                    "country": "USA",
                    "postal_code": "77777",
                    "phone": "555-123-4567",
                    "country_code": "+1",
                    "is_primary": true
                }
            ]
        }
}
```

The following example shows the request/response body for retrieving a subset of profile data:

**Request:**

```bash
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789?style=summary
```

**Response:**

```json
{
        "mage_id": "MAG123456789",
        "first_name": "John",
        "last_name": "Smith",
        "email": "jsmith@example.com",
        "screen_name": "Agent Smith",
        "has_completed_profile": true,
        "has_accepted_tos": true,
        "profile_image_artifact": {
            "file_upload_id": "5c119a03b4ddf6.75124444.0",
            "filename": "portrait.png",
            "content_type": "image.png",
            "url": "https://mp-stg-static.magento.com/user/68/f3/68f360d3516f594fc957c4179ed4a7a872911f07/pub/d9/c2/d9c23dd795a5faaab603b6b5965eca8a6d9430f2/portrait.png",
            "size": 1234,
            "file_hash": "d5db29cd03a2ed055086cef9c31c252b4587ffff",
            "malware_status": "pass"
        }
}
```

### Update profile data

You can update most of your profile data fields, but you only need to include the fields you want to modify in the request body.

```http
PUT /rest/v1/users/:mage_id
```

The following example shows a request to update the personal profile bio field:

```json
{
  "action" : "submit",
  "personal_profile" : {
     "bio" : "My extensions have won Nobel Prizes in both literature and physics."
  }
}
```

The `action` field specifies which update operation to perform:

*  `submit` --- Once your profile is complete, publishes the profile to the Magento Marketplace [partners page](https://marketplace.magento.com/partners.html).
*  `draft` --- The update is saved on the Marketplace Developer Portal, but not published to the Magento Marketplace.

**Request:**

```bash
curl -X PUT \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H 'Content-Type: application/json' \
     -d '{ "action" : "submit", "personal_profile" : { "bio" : "My extensions have won Nobel Prizes in both literature and physics." } }' \
     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789
```

A 200 OK HTTP response code indicates a successful update.

## Magento 2 package access keys

Use these endpoints to manage your Magento 2 package access keys.  (These keys are **not** your [API access keys](access-keys.html).)

```http
GET     /rest/v1/users/:mage_id/keys
POST    /rest/v1/users/:mage_id/keys
PUT     /rest/v1/users/:mage_id/keys/:url_encoded_label_of_m2_key
DELETE  /rest/v1/users/:mage_id/keys/:url_encoded_label_of_m2_key
```

### Get keys

Use this endpoint to return the keys associated with the specified `mage_id`.

```http
GET /rest/v1/users/:mage_id/keys
```

The following table lists available query parameters, all of which are optional:

| Parameter |  Type  | Required | Description                            |
|-----------|--------|----------|----------------------------------------|
| type      | string |   no     | Type of keys requested:<br>`m1` --- Magento 1 product keys<br>`m2` --- Magento 2 composer repo keys<br>`all` --- Both M1 and M2 keys (default)
| label     | string |   no     | The url encoded value of the key label; only valid for `m2` type.|

The following example shows the request/response body for retrieving keys without any query parameters:

**Request:**

```bash
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789/keys
```

**Response:**

```json
{
    "m2": [
            {
                "label": "main_key",
                "user_key": "d41d8cd98f00b204e9800998ecf8427e",
                "password_key": "12cbdcd3332eb8f166f62ee1a9bd33d0",
                "is_enabled": true
            },
            {
                "label": "key_for_bob",
                "user_key": "4b335b25f8eb3449e7e222e8f9e052b0",
                "password_key": "9ca8abe7376f451bde40513474c13c3c",
                "is_enabled": false
            }
        ],

    "m1": [
            {
                "product_name" : "acme/one-click-checkout-1.0.0",
                "product_key" : "https://connect20.magentocommerce.com/e8c258702e443c509b42fc44a49b83b0/acme+one-click-checkout-1.0.0"
            }
        ]
}
```

#### Magento 2 keys

*  Each Composer key-pair has unique `label` and `is_enabled` flags to indicate whether the key is enabled.
*  A Composer key-pair is identified by `user_key` (username) and
   `password_key` (password) when prompted for Composer credentials.

### Create keys

Use this endpoint to create new Magento 2 Composer key-pairs. You must specify a unique label for each key.
You can create multiple key-pairs in a single request.

```http
POST /rest/v1/users/:mage_id/keys
```

```json
{
    "m2": [
        {
            "label": "key_for_alice"
        },
        {
            "label": "key_for_charlie"
        }
    ]
}
```

**Request:**

```bash
curl -X POST \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H 'Content-Type: application/json' \
     -d '{ "m2": [ { "label" : "key_for_alice" }, { "label" : "key_for_charlie" } ] }' \
     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789/keys
```

**Response:**

```json
{
    "m2": [
            {
                "label": "key_for_alice",
                "user_key": "5c75f32248bdd335dc8d8d5a3e5cb52e",
                "password_key": "44db283cbb5fdf2c25cbc9352c2a75eb",
                "is_enabled": true,
                "code" : 200,
                "message" : "Success"
            },
            {
                "label": "key_for_charlie",
                "user_key": "19ba9488ff99a9346bdeb39ad4ab1a26",
                "password_key": "82167d38238911d212cc02a96f3f66f9",
                "is_enabled": true,
                "code" : 200,
                "message" : "Success"
            }
        ]
}
```

*  The API returns a batch response for each label.
*  A 200 OK HTTP response code indicates a successful update.
*  Any non-200 HTTP response code indicates an error. See the `message` field for details.

### Update keys

Use this endpoint to enable or disable a Magento 2 Composer key-pair.
You must specify the key-pair in the request using a URL-encoded string.

```http
PUT /rest/v1/users/:mage_id/keys/:url_encoded_label_of_m2_key
```

**Request:**

```bash
curl -X PUT \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H 'Content-Type: application/json' \
     -d '{ "m2" : [ { "is_enabled" :  true } ] }' \
     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789/keys/key_for_bob
```

**Response:**

```json
{
    "m2": [
            {
                "label": "key_for_bob",
                "user_key": "4b335b25f8eb3449e7e222e8f9e052b0",
                "password_key": "9ca8abe7376f451bde40513474c13c3c",
                "is_enabled": true
            }
     ]
}
```

### Delete keys

This endpoint can be used to remove a Magento 2 composer key-pair identified by the given url-encoded label.

```http
DELETE /rest/v1/users/:mage_id/keys/:url_encoded_label_of_m2_key
```

The following curl example illustrates the call to be made:

**Request:**

```bash
curl -X DELETE \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789/keys/key_for_charlie
```

A 204 No Content HTTP response code indicates a successful update.

## Reports {#user-reports}

Use these endpoints to retrieve reports owned by a specific user.
Reports contain information about extension sales, payout status, aggregate sales, refund data, and more.

```http
GET /rest/v1/users/:mage_id/reports/pageviews
GET /rest/v1/users/:mage_id/reports/totals
GET /rest/v1/users/:mage_id/reports/sales
GET /rest/v1/users/:mage_id/reports/refunds
```

[1]: https://developer.magento.com
[2]: https://developer-stg.magento.com