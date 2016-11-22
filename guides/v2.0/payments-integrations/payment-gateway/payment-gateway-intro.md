---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Payment Gateway in Magento2
menu_title: Payment Gateway components
menu_node: parent
menu_order: 5
version: 2.0
github_link: payments-integrations/payment-gateway/payment-gateway-intro.md
redirect_from: /guides/v1.0/payments-integrations/payment-gateway/payment-gateway-intro.html
---

_Magento Payment Gateway_ - it is a set of components, which allow to perform different payments actions (like authorize, sale, capture, void, etc.),
build requests for transactions, different kind of validators (like transaction status, response codes, etc), handle response details.

Simple interaction flow with Magento Sales Management and concrete payment processor via _Payment Gateway_ looks like this:
![Payment Gateway Interaction]({{site.baseurl}}common/images/payments-integrations/pg_interaction_flow.png)

In this section you can find main _Payment Gateway_ components available in Magento2 which allow to construct complex integration flows, having simple components.

The next diagram shows the basic structure of _Payment Gateway_ components:
![Payment Gateway Structure]({{site.baseurl}}common/images/payments-integrations/pg_structure.png)

<p class="q">How Command Manager is related to Payment Gateway? 
Is Command Manager related to CommandInterface from payments-integrations-whatis.html </p>