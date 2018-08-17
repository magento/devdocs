---
group: payments-integrations
subgroup: B_integration
title: Adding a new payment integration (payment method)
menu_title: Adding a new payment integration (payment method)
menu_order: 5
menu_node: parent
version: 2.1
functional_areas:
  - Integration
---

Out-of-the-box Magento implements integration with PayPal, Braintree, and Authorize.Net payment service providers. These integrations allow you to create and handle transactions based on order details.

You can create integration with other payment providers, using [Magento payment provider gateway]({{ page.baseurl }}/payments-integrations/payment-gateway/payment-gateway-intro.html). 

<div class="bs-callout bs-callout-info" id="info">
<p>The Magento payment provider gateway allows creating secure and PCI-compliant integrations with payment services. To keep PCI compliance, you must not store sensitive credit card information.</p>
</div>

The topics in this chapter explain how to add an integration with a custom payment service provider (in other words, add a new payment method) and implement the authorize payment action for this {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %}. For illustration, we use code 
samples from the [Braintree]({{ site.mage2100url }}app/code/Magento/Braintree) payment integration.

To simplify the development of a new payment integration, Magento developed the [Payment sample module](https://github.com/magento/magento2-samples/tree/master/sample-module-payment-gateway).
It contains all required infrastructure and you can use it as starting point.

To add a new payment method, take the following high-level steps:

1. Configure general payment method module options. Described in the [Payment method module configuration]({{ page.baseurl }}/payments-integrations/base-integration/module-configuration.html) topic.
2. Configure payment method options. Described in [Payment method configuration]({{ page.baseurl }}/payments-integrations/base-integration/payment-option-config.html).
3. Implement and configure payment method facade - the {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %} allowing to process payment actions between Magento sales management and payment processor. Described in [Payment  method facade]({{ page.baseurl }}/payments-integrations/base-integration/facade-configuration.html) and [Payment info rendering in Admin checkout]({{ page.baseurl }}/payments-integrations/base-integration/formblocktype.html)
4. Implement and configure payment actions (like authorize, void and so on). Described in [Add a gateway command]({{ page.baseurl }}/payments-integrations/base-integration/payment-action.html) 

Your payment method might be available from either {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} and Admin, or both. And also can have a different configuration for each area. The keynotes on how to configure where the method can be used, and how to implement different behavior, are described in the [Configure payment method by area]({{ page.baseurl }}/payments-integrations/base-integration/admin-integration.html) topic.

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
