---
group: payments-integrations
subgroup: B_integration
title: Payment method configuration
menu_title: Payment method configuration
menu_order: 2
version: 2.1
github_link: payments-integrations/base-integration/payment-option-config.md
functional_areas:
  - Integration
---

In the `config.xml` file in your `%Vendor_Module%/etc` directory, configure the options of your {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %}. The following table contains the default options available for any payment method.

| Option                 | Description                                                                                                                                                                                                                    | Value type                            |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| `active`               | is payment active by default                                                                                                                                                                                                   | Boolean                               |
| `debug`                | enables debug mode by default, for example log for request/response                                                                                                                                                            | Boolean                               |
| `debugReplaceKeys`     | request/response fields that are masked in log                                                                                                                                                                                 | comma separtated list                 |
| `can_authorize`        | whether payment method supports {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %}                                                                                                | Boolean                               |
| `can_capture`          | whether payment method supports the capture operation                                                                                                                                                                          | Boolean                               |
| `can_void`             | whether payment method supports the void operation                                                                                                                                                                             | Boolean                               |
| `can_use_checkout`     | whether payment method is available in {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} | Boolean                               |
| `can_use_internal`     | whether payment method is available in {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} order creation                                                                                  | Boolean                               |
| `currency`             | supported currency                                                                                                                                                                                                             |                                       |
| `is_gateway`           | is an integration with gateway                                                                                                                                                                                                 | Boolean                               |
| `merchant_gateway_key` | encrypted merchant credential                                                                                                                                                                                                  | string                                |
| `model`                | [payment method facade]({{ page.baseurl }}/payments-integrations/base-integration/facade-configuration.html) used for integration with Sales and Checkout modules                                                                 | string                                |
| `order_status`         | default {% glossarytooltip ab517fb3-c9ff-4da8-b7f9-00337c57b3a5 %}order status{% endglossarytooltip %}                                                                                                                         |                                       |
| `paymentInfoKeys`      | transaction request/response fields displayed on payment information block (can be any fields from payment additional information)                                                                                             | list of comma separated values        |
| `privateInfoKeys`      | `paymentInfoKeys` fields which should not be displayed in customer payment information block (can be any fields from payment additional information)                                                                           |                                       |
| `payment_action`       | default action of payment for the payment method (authorize, sale)                                                                                                                                                             | `authorize`,`authorize_capture`       |
| `sort_order`           | payment method order position on checkout/system configuration pages                                                                                                                                                           | integer                               |
| `title`                | default title for a payment method                                                                                                                                                                                             | string                                |

Additionally to the default option, a payment method configuration can contain any other custom options. 

## Example

Following is the illustration of such configuration (`config.xml` of the Braintree module)

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
    <default>
        <payment>
            <braintree>
                <model>BraintreeFacade</model>
                <title>Credit Card (Braintree)</title>
                <payment_action>authorize</payment_action>
                <active>0</active>
                <is_gateway>1</is_gateway>
                <can_use_checkout>1</can_use_checkout>
                <can_authorize>1</can_authorize>
                <can_capture>1</can_capture>
                <can_refund>1</can_refund>
                <can_void>1</can_void>
                <can_cancel>1</can_cancel>
                <cctypes>AE,VI,MC,DI,JCB,CUP,DN,MI</cctypes>
                <useccv>1</useccv>
                <order_status>processing</order_status>
                <privateInfoKeys>avsPostalCodeResponseCode,avsStreetAddressResponseCode,cvvResponseCode,processorAuthorizationCode,processorResponseCode,processorResponseText,liabilityShifted,liabilityShiftPossible,riskDataId,riskDataDecision</privateInfoKeys>
                <paymentInfoKeys>cc_type,cc_number,avsPostalCodeResponseCode,avsStreetAddressResponseCode,cvvResponseCode,processorAuthorizationCode,processorResponseCode,processorResponseText,liabilityShifted,liabilityShiftPossible,riskDataId,riskDataDecision</paymentInfoKeys>
            </braintree>
        </payment>
    </default>
</config>
{% endhighlight %}

## What's next

- [Payment  method facade]({{ page.baseurl }}/payments-integrations/base-integration/facade-configuration.html)
- [Payment info rendering in Admin checkout]({{ page.baseurl }}/payments-integrations/base-integration/formblocktype.html)
