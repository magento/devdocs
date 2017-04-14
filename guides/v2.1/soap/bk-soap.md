---
layout: default
group: soap
subgroup: A_soap
title: SOAP Reference
landing-page: SOAP API
menu_title: Overview
menu_order: 1
menu_node: parent
version: 2.1
github_link: soap/bk-soap.md
---
## Soap WSDL Endpoint Format

`http://<magento_host>/soap/<store_code>?wsdl&services=<serviceName1,serviceName2,..>`

<div class="bs-callout bs-callout-info" id="info">
  <p>The value of <code>store_code</code> can be one of the following:</p>
  <ul>
  <li><code>default</code></li>
  <li>The assigned store code</li>
  <li><code>all</code>. This value only applies to the CMS and Product modules. If this value is specified, the API call affects all the merchant's stores.</li>
  </ul>
</div>

## List of Service Names per Module

The entire list can be retrieved here: `http://<magento_host>/soap/default?wsdl_list=1`

{% include webapi/services21.md%}
