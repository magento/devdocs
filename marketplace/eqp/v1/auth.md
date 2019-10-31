---
group: marketplace-api
title: Authentication
---
{: .bs-callout-info }
This authentication process is only for those in the Early Adopter Program for this API.
It **WILL** be changing completely before these APIs are opened to the public, as will the base URLs.
Please send all feedback to <magento-marketplace-eqp-apis@adobe.com>.

All API requests must be authenticated using [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).
The REST APIs use a two-step process to authenticate a client application and authorize access to resources:

1. Obtain a session token using an application ID and secret.
1. Provide the session token as an HTTP Authorization Bearer header to access a resource.

First, you must create a user profile on either the [Developer Portal](https://developer.magento.com) or the [Sandbox Developer Portal](https://developer-stg.magento.com/).
Then contact the feedback address to request an application ID and secret.

## Base URLs

In code examples in the documentation, we use the Base URL of the sandbox.

Once you are confident that your API calls are correct and you wish to submit a package for full manual review,
simply use the production Base URL instead of the sandbox one, and your Production application ID and secret.

|Server|Base Url|
|------|--------|
|sandbox|`https://developer-stg-api.magento.com`|
|production|`https://developer-api.magento.com`|

## Application ID and secret

You must use an application ID and secret to obtain a session token.
See the following list for examples of an application ID and secret:

*  **id** — `AQ17NZ49WC`
*  **secret** — `8820c99614d65f923df7660276f20e029d73e2ca`

## Session token

The following endpoint grants an application session token:

```http
POST /rest/v1/app/session/token
```

**Parameters**

You must specify the grant type in the request body:

```json
{
   "grant_type": "session"
}
```

Field details:

|Field|Type|Description|
|-----|----|-----------|
|grant_type|string|The API supports the `session` grant type only: other values will give an error.|

Other parameters are accepted but ignored.

**Request**

The following example shows a request to the sandbox, using the application ID and secret from above:

```bash
curl -X POST \
     -u 'AQ17NZ49WC:8820c99614d65f923df7660276f20e029d73e2ca' \
     -H 'Content-Type: application/json' \
     -d '{ "grant_type" : "session" }' \
     https://developer-stg-api.magento.com/rest/v1/app/session/token
```

**Response**

A successful HTTP 200 OK response will be sent for a valid application ID and secret:

```json
{
 "mage_id": "MAG123456789",
 "ust": "baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7",
 "expires_in": 3600
}
```

Field details:

|Field|Type|Description|
|-----|----|-----------|
|mage_id|string|User account associated with the client application.|
|ust|string|User Session Token, must be used as the `Authorization: Bearer` header for all subsequent API calls.|
|expires_in|int|Number of seconds the session token will be valid.|

Once the User Session Token expires, a new token must be obtained as described above.
Multiple User Session Tokens may be valid at the same time, so you can run multiple scripts at the same time.

## Authorization bearer

After obtaining a valid User Session Token, you must use it as a bearer token in all subsequent API calls.
For example, to access a user profile with a User Session Token:

```bash
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/users/MAG123456789
```
