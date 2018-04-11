---
layout: default
group: marketplace-api
title: Users
version: 2.1
github_link: marketplace/eqp/users.md
---

A valid HTTP  ‘Authorization: Bearer <session token>’ must be supplied to all user resources described below as explained in the Authentication and
Authorization section.

The following HTTP REST APIs are available for the users resource:

## Profile

~~~~~~
GET /rest/v1/users/:mage_id
GET /rest/v1/users/:mage_id?style=summary
PUT /rest/v1/users/:mage_id
~~~~~~

As seen above, the ‘mage_id’ value must be supplied associated with the developer user’s account.  The Mage Id value associated  with the client application is returned when retrieving a session token as described in the Authentication and Authorization section.

By default, a full profile information of the user will be returned.  A limited set of profile fields can also be obtained by specifying the ‘style=summary’ option (currently the only one available).

Any number of fields can be modified by the PUT action, and only the modified fields needs to be presented during this action.

### Retrieving a profile information

The following curl example illustrates fetching a user profile info:

**Request**

{% highlight shell %}
curl -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/users/MAG123456789
{% endhighlight %}

**Response**

{% highlight json %}
{
        "mage_id": "MAG123456789",
        "first_name": “Chuck”,
        "last_name": “Norris”,
        "email": “gmail@chucknorris.com",
        "screen_name": “ninjachuck”,
        "has_completed_profile": true,
        "has_accepted_tos": true,
        "profile_image_artifact": {
            "file_upload_id": "uuid-001-234567-123.461",
            "filename": “chuck.png",
            "content_type": "image.png",
            "url": “https://static-mp.magento.com/user/68/f3/68f360d3516f594fc957c4179ed4a7a872911f07/pub/d9/c2/d9c23dd795a5faaab603b6b5965eca8a6d9430f2/chuck.png”,
            "size": 1234,
            "file_hash": "d5db29cd03a2ed055086cef9c31c252b4587ffff",
            "malware_status": "pass"
        },
 
        "tos_accepted_version": "1.0",
        "tos_accepted_date": "2017-11-16 01:23:45",
        "is_company": false,
        "vendor_name": “chucknorris”,
        "partner_level": 4,
        "locale": "en-US",
        "timezone": "UTC",
        "payment_type": 1,
        "payment_info": {"paypal_email“ : “gmail@chucknorris.com"},
        "taxpayer_type": 2,
        "tax_review_status": 3;
        "tax_withhold_percent": 0.00,
        "extension_share_percent": 0.7,
        "theme_share_percent": 0.7,
        "install_share_percent": 0,
        "support_share_percent": 0,
         
        "personal_profile": {
            "bio", “Sets ants on fire using a magnifying glass. At night.”,
            "last_logged_in": "2017-09-30 8:09:10",
            "created_at": "2016-02-29 14:04:59",
            "modified_at": "2017-11-16 01:23:45",
            "social_media_info": {
                "twitter": “@chucknorris”,
                "stackexchange_url": "",
                "facebook_url": "",
                "linkedin_url": "",
                "github_username": ""
            },
            "addresses": [
                {
                    "address_key": 1,
                    "address_line_1": "123 Lonestar Way”,
                    "state": “Texas”,
                    "country": “USA”,
                    "postal_code": “77777”,
                    "phone": “555-1234-5678”,
                    "country_code": "+1",
                    "is_primary": true
                }
            ]
        },
 
        "company_profile": {
            "name": “Ninja Norris Inc.”,
            "bio": “Ninja Extension Builder.”,
            "website_url": "https://www.chucknorris.com/”,
            "primary_email": "gmail@chucknorris.com",
            "support_email": "support@chucknorris.com”,
            "created_at": "2016-02-29 14:04:59",
            "modified_at": "2017-09-30 01:23:45",
            "social_media_info": {
                "twitter": “@chucknorris”,
                "stackexchange_url": "",
                "facebook_url": "",
                "linkedin_url": "",
                "github_username": ""
            },
            "addresses": [
                {
                    "address_key": 1,
                    "address_line_1": "123 Lonestar Way”,
                    "state": “Texas”,
                    "country": “USA”,
                    "postal_code": “77777”,
                    "phone": “555-1234-5678”,
                    "country_code": "+1",
                    "is_primary": true
                }
            ]
        }
}
{% endhighlight %}

Response highlights:

* The aforesaid fields should be self-explantory. 
* The summary style contains the fields from ‘mage_id’ till ‘profile_image_artifact’

### Updating profile data

Only the fields that needs to be modified needs to be supplied in a PUT request. 

A sample JSON request payload to update the personal profile bio field:

{% highlight json %}
{
  “action” : “publish”,
  “personal_profile” : {
     “bio” : “I can make a fire by rubbing two ice cubes.”
  }
}
{% endhighlight %}

The ‘action’ field specifies update operation to perform - it can be:

* publish - the default if not specified. It publishes the profile to the relevant [Marketplace Store Partners page](https://marketplace.magento.com/partners.html).
* draft - the update is saved at the Developer Portal side but not published.

Sample curl calls:

**Request**

{% highlight shell %}
curl -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -X PUT \
     -d ‘{ “action: “publish”, “personal_profile” : { “bio” : “I can make a fire by rubbing two ice cubes.“ } }’ \
     https://developer-api.magento.com/rest/v1/users/MAG123456789
{% endhighlight %}

A successful update is indicated via a 200 OK HTTP Response code.

## Keys

~~~~~~
GET     /rest/v1/users/:mage_id/keys
POST    /rest/v1/users/:mage_id/keys
PUT     /rest/v1/users/:mage_id/keys/:url_encoded_label_of_m2_key
DELETE  /rest/v1/users/:mage_id/keys/:url_encoded_label_of_m2_key
~~~~~~

The aforesaid APIs provide a mechanism to manage Magento 1 and Magento 2 package access keys. 

Only GET is available for Magento 1 product keys. 

For Magento 2 composer key-pairs, all the aforesaid APIs are available.

### GET /rest/v1/users/:mage_id/keys

The following table lists all the query parameters available, all of which are optional:

| Parameter |  Type  | Required | Description                            |
|-----------|--------|----------|----------------------------------------|
| type      | string |   no     | Type of keys requested: 'm1'  - Magento 1 product keys, 'm2'  - Magento 2 composer repo keys, 'all' - Both M1 and M2 keys (default) |
| label     | string |   no     | The url encoded value of the key label; only valid for 'm2' type.| 


A curl example of the API without any of the parameters supplied:

**Request**

{% highlight shell %}
curl -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/users/MAG123456789/keys
{% endhighlight %}

**Response**

{% highlight json %}
{
    "m2": [
            {
                "label": “main_key”,
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
                “product_name” : “acme/one-click-checkout-1.0.0”,
                “product_key” : “https://connect20.magentocommerce.com/e8c258702e443c509b42fc44a49b83b0/acme+one-click-checkout-1.0.0”                         
            }
        ]
}
{% endhighlight %}

Notes:

1. For Magento 2 keys: 
    1. Each composer key pair has a unique 'label', and 'is_enabled' flag to indicate if the key is enabled or not.
    2. A composer key pair is identified by 'user_key' (username), and 'password_key' (password) when prompted for composer credentials.
2. For Magento 1 keys:
    1. It provides a list of product names and its associated product key which can be used in the Magento Connect Manager to install extensions.
    2. There are no provisions to create, update or delete these keys.

### POST /rest/v1/users/:mage_id/keys

This API can be used to create a new Magento 2 composer key-pairs. A unique label must be supplied, and more than
one set of key-pairs can be requested. 

Here is a sample batch request payload, requesting two new composer key-pairs:

{% highlight json %}
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
{% endhighlight %}

Here is a curl example using the aforesaid payload, and its respective response:

**Request**
{% highlight shell %}
curl -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -d ‘{ “m2”: [ { “label” : “key_for_alice” }, { “label” : “key_for_charlie” } ] }’ \
     https://developer-api.magento.com/rest/v1/users/MAG123456789/keys
{% endhighlight %}


**Response**
{% highlight json %}
{
    "m2": [
            {
                "label": “key_for_alice”,
                "user_key": "5c75f32248bdd335dc8d8d5a3e5cb52e",
                "password_key": "44db283cbb5fdf2c25cbc9352c2a75eb",
                "is_enabled": true,
                “code” : 200,
                “message” : “Success”
            },
            {
                "label": "key_for_charlie”,
                "user_key": "19ba9488ff99a9346bdeb39ad4ab1a26",
                "password_key": "82167d38238911d212cc02a96f3f66f9",
                "is_enabled": true,
                “code” : 200,
                “message” : “Success”
            }
        ]
}
{% endhighlight %}

Notes:

1. As seen above, a batch response is returned for each of the labels requested.
2. A success is indicated by ‘code’ value of 200. 
3. Any non-200 code values indicates some error, and the ‘message’ field provides more details on the issue.

### PUT /rest/v1/users/:mage_id/keys/:url_encoded_label_of_m2_key

This API can be used to  enable or disable a Magento 2 composer key-pair identified by the given url-encoded label.

The following curl example illustrates a request and its respective response:

**Request**

{% highlight shell %}
curl -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -X PUT \
     -d ‘{ “m2” : [ { “is_enabled” :  true } ] }’ \
     https://developer-api.magento.com/rest/v1/users/MAG123456789/keys/key_for_bob
{% endhighlight %}


**Response**

{% highlight json %}
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
{% endhighlight %}

### DELETE /rest/v1/users/:mage_id/keys/:url_encoded_label_of_m2_key

This API can be used to remove a Magento 2 composer key-pair identified by the given url-encoded label.

The following curl example illustrates the call to be made:

**Request**

{% highlight shell %}
curl -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -X DELETE \
     https://developer-api.magento.com/rest/v1/users/MAG123456789/keys/key_for_charlie
{% endhighlight %}
  
An HTTP 204 response will indicate if the request was successfully processed.

## Reports

~~~~~~
GET /rest/v1/users/:mage_id/reports
~~~~~~

Reports owned by the user, related to sale of extensions, payout status, aggregate sales and refund data, and much more will be available through this resource endpoint.

<div class="bs-callout bs-callout-info">
  <p>The  Reports API specification is under design review, so the details will be released when finalized.</p>
</div>


