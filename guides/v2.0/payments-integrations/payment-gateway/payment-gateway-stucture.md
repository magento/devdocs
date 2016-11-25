---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Payment provider gateway structure
menu_title: Payment provider gateway structure
menu_order: 1
version: 2.0
github_link: payments-integrations/payment-gateway/payment-gateway-structure.md
---

Structurally Magento payment provider gateway is a set of components, that allow performing different payment actions (like authorize, sale, capture, void),
building requests for transactions, validating (like transaction status, response codes, and so on), and handling response details.

The following diagram shows the basic components of the Magento payment provider gateway:

![Payment Gateway Structure]({{site.baseurl}}common/images/payments-integrations/pg_structure.png)

Each component from this scheme is described in the corresponding topic:

* [Gateway Command]({{page.baseurl}}payments-integrations/payment-gateway/gateway-command.html)
* [Gateway Command Pool]({{page.baseurl}}payments-integrations/payment-gateway/command-pool.html)
* [Request Builder]({{page.baseurl}}payments-integrations/payment-gateway/request-builder.html)
* [Gateway Client]({{page.baseurl}}payments-integrations/payment-gateway/gateway-client.html)
* [Response Validator]({{page.baseurl}}payments-integrations/payment-gateway/response-validator.html)
* [Response Handler]({{page.baseurl}}payments-integrations/payment-gateway/response-handler.html)




