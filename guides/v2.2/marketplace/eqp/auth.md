---
group: marketplace-api
title: Authentication
---

All API requests must be authenticated using [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). The REST APIs use a two-step process to authenticate a client application and authorize access to resources:

1. Obtain a session token using an application ID and secret.
2. Provide the session token as an HTTP Authorization Bearer header to access a resource.

First, you must create an application on the [Developer Portal](https://developer.magento.com) to obtain an application ID and secret for sandbox and production endpoints.

{: .bs-callout-info }
Information about how to create applications will be announced when the EQP REST API is publicly released.

## Session Token

You must use an application ID and secret to obtain a session token. See the following list for examples of an application ID and secret:

* **id**—AQ17NZ49WC
* **secret**—8820c99614d65f923df7660276f20e029d73e2ca

The following endpoint grants an application session token:

```
POST /rest/v1/apps/session/token
```

You must specify the grant type in the request body:

```json
{
   “grant_type”: “session”
}
```

{: .bs-callout-info }
The API supports the `session` grant type only.

The following example shows a request and expected response:

**Request**

```shell
curl -X POST \
     -u 'AQ17NZ49WC:8820c99614d65f923df7660276f20e029d73e2ca' \
     -H 'Content-Type: application/json' \
     -d '{ "grant_type" : "session" }' \
     https://developer-api.magento.com/rest/v1/apps/session/token
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

* The `mage_id` value will identify the user account associated with the client application.
* The `ust` value (user session token) must be used as the `Authorization Bearer` header for all subsequent API calls.
* The session token is valid only for the time specified in `expires_in` (seconds).
* When session token expires, a new token must be obtained as described above.

## Authorization Bearer

After obtaining a valid session token, you must use it as a bearer token in all subsequent API calls.

For example, to access a user profile with a session token:

```shell
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/users/MAG123456789
```
