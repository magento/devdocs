---
group: payments-integrations
subgroup: A_gateway
title: Payment provider gateway structure
menu_title: Payment provider gateway structure
menu_order: 1
---

The following diagram shows the basic components of the Magento payment provider gateway:

![Payment Gateway Structure]({{ site.baseurl }}/common/images/payments-integrations/pg_structure.png)

The interaction between the [payment gateway](https://glossary.magento.com/payment-gateway) components looks like following:

![Payment Gateway Structure]({{ site.baseurl }}/common/images/pg_internal_flow.png)

Each component from this scheme is described in the corresponding topic:

*  [Gateway Command]({{ page.baseurl }}/payments-integrations/payment-gateway/gateway-command.html)
*  [Gateway Command Pool]({{ page.baseurl }}/payments-integrations/payment-gateway/command-pool.html)
*  [Request Builder]({{ page.baseurl }}/payments-integrations/payment-gateway/request-builder.html)
*  [Gateway Client]({{ page.baseurl }}/payments-integrations/payment-gateway/gateway-client.html)
*  [Response Validator]({{ page.baseurl }}/payments-integrations/payment-gateway/response-validator.html)
*  [Response Handler]({{ page.baseurl }}/payments-integrations/payment-gateway/response-handler.html)
