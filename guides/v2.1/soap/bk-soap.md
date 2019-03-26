---
group: soap
subgroup: A_soap
title: SOAP Reference
landing-page: SOAP API
menu_title: Overview
menu_order: 1
menu_node: parent
functional_areas:
  - Integration
---
## Soap WSDL Endpoint Format

`http://<magento_host>/soap/<store_code>?wsdl&services=<serviceName1,serviceName2,..>`

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The value of `store_code` can be one of the following:

* `default`
* The assigned store code
* `all`. This value only applies to the {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} and Product modules. If this value is specified, the {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} call affects all the merchant's stores.
</div>

## List of Service Names per Module

The entire list can be retrieved here: `http://<magento_host>/soap/default?wsdl_list=1`

{% include webapi/services21.md%}
