---
layout: default
group: eqp
subgroup: 10_Auth
title: EQP API Authentication and Authorization
landing-page: EQP 
menu_title: EQP API Authentication and Authorization
menu_order: 1
menu_node: parent
version: 2.0
github_link: marketplace/eqp/auth.md
functional_areas:
  - Marketplace
  - EQP
---

## Authentication and Authorization

Every REST API client must create an application at the [Developer Portal](https://developer.magento.com) which will provide an application id and
secret pairs for the sandbox and production endpoints respectively.

<div class="bs-callout bs-callout-info">
  <p>The information around how to register these applications will be announced when the EQP REST API will be publicly released.</p>
</div>

The REST APIs use a 2-step process in order to authenticate the client application, and then authorizing every resource access:

1. Use [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication) with the application id and secret to obtain a session token.
2. Provide the session token as a HTTP Authorization Bearer header to every resource access.


## Session Token

An application session token must be obtained first using the application id and secret via the [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication) mechanism. 

Assuming the following application id and secret for all the examples:

* id: AQ17NZ49WC
* secret: 8820c99614d65f923df7660276f20e029d73e2ca

The following REST API endpoint will grant a session token for a given app:

~~~~~
POST /rest/v1/apps/session/token
~~~~~

A POST body specifying the grant type must be supplied:

{% highlight json %}
{
   “grant_type” : “session”
}
{% endhighlight %}

Currently only the ‘session’ grant type is supported.

The following curl example illustrates the request and the expected response:

**Request**

{% highlight shell %}
curl -u 'AQ17NZ49WC:8820c99614d65f923df7660276f20e029d73e2ca' \ 
     -d '{ "grant_type" : "session" }' \
     https://developer-api.magento.com/rest/v1/apps/session/token 

{% endhighlight %}

**Response**

A successful HTTP 200 OK response will be sent for a valid application id and secret:

{% highlight json %}
{
 "mage_id": "MAG123456789",
 "ust": "baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7",
 "expires_in": 3600
}
{% endhighlight %}

Points to note:

* The 'mage_id' value will identify the user account associated with the client application.
* The 'ust' value (user session token) should be used as 'Authorization Bearer' header to all subsequent API calls.
* The session token is valid only for the time specified in 'expires_in' in seconds.
* On expiry of a session token, a new one must be obtained as described above.


## Authorization Bearer

Once a valid session token is obtained as described above, it must be presented as a bearer token to all subsequent API calls. 

For example, accessing a user profile with the aforesaid session token will look like:

{% highlight shell %}
curl -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/users/MAG123456789  
{% endhighlight %}



