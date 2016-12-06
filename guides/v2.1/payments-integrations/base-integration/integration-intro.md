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

Out of the box Magento implements integration with PayPal, Braintree and Authorize.Net payment service providers, allowing you to create and handle transactions based on order details.

You can create integration with other payment providers, using [Magento payment provider gateway]({{page.baseurl}}...). 

The topics of this chapter explain how to add an integration with a custom payment service provider(in other words, add a new payment method) and implement authorize payment action. For illustration we use code 
samples from [Braintree]({{site.mage2100url}}app/code/Magento/Braintree) payment integration.


To simplify the development of a new payment integration, Magento developed the [Payment sample module](https://github.com/magento/magento2-samples/tree/master/sample-module-payment-gateway).
It contains all required infrastructure and you can use it as starting point.

Topics of this chapter:

 - [Configuration]({{site.gdeurl21}}payments-integrations/base-integration/configuration.html)
 - [Process payment action]({{site.gdeurl21}}payments-integrations/base-integration/payment-action.html)
 - [Admin Integration]({{site.gdeurl21}}payments-integrations/base-integration/admin-integration.html)