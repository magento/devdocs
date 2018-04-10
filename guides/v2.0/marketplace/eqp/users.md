---
layout: default
group: marketplace-api
title: EQP API Users 
version: 2.0
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

### Retrieving profile information

The following curl example illustrates fetching a user profile info:

**Request:**

{% highlight shell %}
curl -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/users/MAG123456789
{% endhighlight %}

**Response:**

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

**Request:**

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
PUT     /rest/v1/users/:mage_id/keys
DELETE  /rest/v1/users/:mage_id/keys
~~~~~~

## Reports