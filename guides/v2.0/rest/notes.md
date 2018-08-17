---
group: rest
subgroup: Notes
title: REST usage notes
menu_title: REST usage notes
menu_order: 1
version: 2.0
functional_areas:
  - Integration
---

## Parameters in URLs

In a REST call, a user could potentially specify one ID in the {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} and another in the request body. Whenever this type of conflict occurs, Magento uses the value specified in the URL.

For example:

The REST URL to update a customer is `<route url="/V1/customers/:id" method="PUT">`.  If you specify a ID value of `1` in the URL (`http://magento.loc/customer/1`), and a body of `{ "id": 2, "attr": "value" }`, the customer with ID of `1` will be modified.

This applies to all REST APIs where a parameter is passed in the URL. Anything specified in the request body with the same parameter name as the URL will be ignored.

## Related topics
[Search using REST APIs]({{ page.baseurl }}/rest/performing-searches.html)
