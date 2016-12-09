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

You can create integration with other payment providers, using [Magento payment provider gateway]({{page.baseurl}}payments-integrations/payment-gateway/payment-gateway-intro.html). 

<div class="bs-callout bs-callout-info" id="info">
<p>Magento payment provider gateway allows creating secure and PCI compliant integrations with payment services. To keep the PCI compliance, you must not store sensitive credit card information.</p>
</div>

The topics of this chapter explain how to add an integration with a custom payment service provider(in other words, add a new payment method) and implement the authorize payment action for this payment method. For illustration we use code 
samples from [Braintree]({{site.mage2100url}}app/code/Magento/Braintree) payment integration.

To simplify the development of a new payment integration, Magento developed the [Payment sample module](https://github.com/magento/magento2-samples/tree/master/sample-module-payment-gateway).
It contains all required infrastructure and you can use it as starting point.

To add a new payment method, you need to take the following high-level steps:

1. Configure general payment method module options. Described in the [Payment method module configuration]({{page.baseurl}}payments-integrations/base-integration/module-configuration.md) topic.
2. Configure payment method options. Described in [Payment method configuration]({{page.baseurl}}payments-integrations/base-integration/payment-options-config.md)
3. Implement and configure payment method facade - the entity allowing to process payment actions between Magento sales management and payment processor. Described in [Payment  method facade]({{page.baseurl}}payments-integrations/base-integration/facade-configuration.html) and [Payment info rendering in Admin checkout]({{page.baseurl}}payments-integrations/base-integration/formblocktype.html)
4. Implement and configure payment actions (like authorize, void and so on). Described in [Add a gateway command]({{page.baseurl}}payments-integrations/base-integration/payment-action.html) 

Your payment method might be available from either storefront and Admin, or both. And also can have different configuration for each area. The key notes on how to configure where the method can be used, and how to implement different behavior, are described in the [Configure payment method by area]({{page.baseulr}}payments-integrations/base-integration/admin-integration.html) topic.

## Terms Used

<table>
<tr>
<th>
Term
</th>
<th>
Description
</th>
</tr>
<tr>
<td>
Payment additional information
</td>
<td>
Array of data where you can store any payment-related information 
</td>
</tr>
</table>