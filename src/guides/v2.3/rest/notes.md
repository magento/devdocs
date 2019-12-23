---
group: rest-api
subgroup: A_rest
title: REST usage notes
menu_title: REST usage notes
menu_order: 7
functional_areas:
  - Integration
---

## Parameters in URLs

In a REST call, a user could potentially specify one ID in the [URL](https://glossary.magento.com/url) and another in the request body. Whenever this type of conflict occurs, Magento uses the value specified in the URL.

For example:

The REST URL to update a customer is `<route url="/V1/customers/:id" method="PUT">`.  If you specify an ID value of `1` in the URL (`http://<host>/rest/<store_code>/V1/customers/1`), and a body of `{ "customer": { "id": 2, "attr": "value" }}`, the customer with ID of `1` will be modified.

This applies to all REST APIs where a parameter is passed in the URL. Anything specified in the request body with the same parameter name as the URL will be ignored.

{:.ref-header}
Related topics

[Search using REST APIs]({{ page.baseurl }}/rest/performing-searches.html)
