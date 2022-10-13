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

The value of `store_code` can be one of the following:

*  `default`
*  The assigned store code
*  `all`. This value only applies to the [CMS](https://glossary.magento.com/cms) and Product modules. If this value is specified, the [API](https://glossary.magento.com/api) call affects all the merchant's stores.

## List of Service Names per Module

The entire list can be retrieved here: `http://<magento_host>/soap/default?wsdl_list=1`

{% include webapi/services23.md%}
