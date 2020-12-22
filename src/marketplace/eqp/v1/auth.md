---
group: marketplace-api
title: Authentication
---

{:.bs-callout-info}
All API requests must be authenticated using [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).

The Marketplace EQP API uses a two-step process to authenticate a client application and authorize access to resources:

1. Using your [API access key](access-keys.html), obtain a session token.
1. Provide the session token as an HTTP Authorization Bearer header to access a resource.

## Base URLs

In code examples in this documentation, we use the Base URL of the [sandbox](sandbox.html).

Once you are confident your **sandbox** API calls are correct, and you wish to submit a package for full manual review on the **production** environment, do the following:

-  Use the **production** Base URL instead of the sandbox one
-  Use your **production** API access key: application ID and application secret

|Environment|Base Url|
|-----------|--------|
|sandbox    |`https://developer-stg-api.magento.com`|
|production |`https://developer-api.magento.com`    |

## Authentication and authorization flow

You must use your [API access key](access-keys.html) -- which is an application ID and secret -- to obtain your session token.
The following is an example:

-  **application ID** — `AQ17NZ49WC`
-  **application secret** — `8820c99614d65f923df7660276f20e029d73e2ca`

### How to obtain a session token {#session-token}

The following endpoint grants a session token:

```http
POST /rest/v1/app/session/token
```

**Parameters:**

You must specify the grant type in the request body:

```json
{
   "grant_type": "session",
   "expires_in": 7200
}
```

Field details:

|Field|Type|Required|Description|
|-----|----|----|-----------|
|grant_type|string|yes| The API only supports the `session` grant type; other values will give an error.|
|expires_in|int|no| Specifies the number of seconds that the session token will be valid. If the requested time exceeds the system's maximum allowed, the system's maximum limit will be used instead. |

**Request:**

The following example shows a request to the sandbox, using the application ID and secret from above:

```bash
curl -X POST \
     -u 'AQ17NZ49WC:8820c99614d65f923df7660276f20e029d73e2ca' \
     -H 'Content-Type: application/json' \
     -d '{ "grant_type" : "session" }' \
     https://developer-stg-api.magento.com/rest/v1/app/session/token
```

**Response:**

A successful HTTP 200 OK response will be sent for a valid application ID and secret:

```json
{
 "mage_id": "MAG123456789",
 "ust": "baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7",
 "expires_in": 7200
}
```

Field details:

|Field|Type|Description|
|-----|----|-----------|
|mage_id|string|Your user account.  This is your "Magento ID."|
|ust|string|User Session Token. It will be used in the **`Authorization: Bearer`** header for all subsequent API calls.|
|expires_in|int|Number of seconds the session token will be valid. Example: 7200 seconds is 2 hours.|

-  The session token has a relatively short duration.
-  You can get as many session tokens as you need.  You do **not** need to wait for a session token to expire before requesting another one.  Multiple session tokens can be active at the same time, so you can run multiple scripts at the same time.
-  Once the session token expires, a new token must be obtained as described above.
-  Session tokens are specific to each environment.  Session tokens generated for the **sandbox** cannot be used for **production**, and vice-versa.

## How to use a session token {#token-use}

After obtaining a valid session token, you must use it as an **authorization bearer token** in all subsequent API calls.
Using the example values from above, run the following command to access your user profile with a session token:

```bash
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789
```
