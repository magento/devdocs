---
layout: default
group: payments-integrations
subgroup: integration
title: Payment Integration in Magento2
menu_title: Payment Integration
menu_order: 5
menu_node: parent
version: 2.1
github_link: payments-integrations/base-integration/integration-intro.md
---

In this section you can find information about how implement new payment integration based on
[Magento Payment Gateway]({{site.gdeurl}}payments-integrations/bk-payments-integrations.html).

In series of articles will be explained how to add new payment method and implement authorize payment action with code
samples from [Braintree]({{site.mage2100url}}app/code/Magento/Braintree) payment integration.

To simplify development of new payment integration, Magento has [Payment Sample Module](https://github.com/magento/magento2-samples/tree/master/sample-module-payment-gateway),
it contains all required infrastructure and you can use it as start prototype.

A short overview of next topics:

 - [Configuration]({{site.gdeurl21}}payments-integrations/base-integration/configuration.html)
 - [Process payment action]({{site.gdeurl21}}payments-integrations/base-integration/payment-action.html)
 - [Admin Integration]({{site.gdeurl21}}payments-integrations/base-integration/admin-integration.html)