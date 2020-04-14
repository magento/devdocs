---
group: rest-api
title: REST usage notes
functional_areas:
  - Integration
---

You might encounter the following issue when using REST endpoints

## Duplicate parameters in an REST call

In a REST call, it is possible that a route variable contains one value while the request body contains a different value.
Whenever this type of conflict occurs, Magento uses the value specified in the request body.

For example:

The REST URL to update a customer is `PUT /V1/customers/:id`. If you specify an ID value of `1` in the URL (`http://<host>/rest/<store_code>/V1/customers/1`), and a body of `{ "customer": { "id": 2, "attr": "value" }}`, the customer with ID of `2` will be modified.

This applies to all REST APIs where a parameter is passed in the URL. Any value specified in the URL with the same parameter name as in the request body is ignored.

{:.ref-header}
Related topics

[Search using REST APIs]({{ page.baseurl }}/rest/performing-searches.html)
