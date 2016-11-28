---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Payment Gateway in Magento2
menu_title: Payment Gateway components
menu_order: 1
menu_node: parent
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

As you can see, _Payment Gateway_ contains different components and structure of each component, also, can be complicated.
Next topics will describe each component more detail.