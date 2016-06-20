---
layout: default
group: rest
subgroup: A_rest
title: Notes
menu_title: Notes
menu_order: 6
version: 2.0
github_link: rest/notes.md

---

## Parameters in URLs

In a REST call, a user could potentially specify one ID in the URL and another in the request body. Whenever this type of conflict occurs, Magento uses the value specified in the URL.

For example:

The REST URL to update a customer is `<route url="/V1/customers/:id" method="PUT">`.  If you specify a ID value of `1` in the URL (`http://magento.loc/customer/1`), and a body of `{ “id”: 2, “attr”: “value” }`, the customer with ID of `1` will be modified.

This applies to all REST APIs where a parameter is passed in the URL. Anything specified in the request body with the same parameter name as the URL will be ignored.

## Related topics
[Search using REST APIs]({{ site.gdeurl }}howdoi/webapi/search-criteria.html)
