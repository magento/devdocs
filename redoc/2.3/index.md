---
layout: default
group: rest-api
title: REST API reference
guide_version: '2.3'
---

Magento exposes different REST endpoints depending on the type of user making the requests.
You must request and include a security token to gain access to the Customer and Admin REST API endpoints.

See [Token-based authentication][] for instructions on requesting and using security tokens.

Each of the following links lead to a list of REST endpoints specific to a user type:

* [Admin REST API endpoints]({{site.baseurl}}/redoc/2.3/admin-rest-api.html) - Available using an admin security token.

   {: .bs-callout .bs-callout-warning}
   The list of Admin REST API endpoints contains a large number of endpoints and takes longer to load.

* [Customer REST API endpoints]({{site.baseurl}}/redoc/2.3/customer-rest-api.html) - Available using a customer security token
* [Guest REST API endpoints]({{site.baseurl}}/redoc/2.3/guest-rest-api.html) - Available for anonymous users

[Token-based authentication]: {{page.baseurl}}/get-started/authentication/gs-authentication-token.html