---
layout: default
group: payments-integrations
subgroup: integration
title: Payment method configuration
menu_title: Payment method configuration
menu_order: 1
version: 2.1
github_link: payments-integrations/base-integration/payment-options-config.md
---

## Set your payment method options (`config.xml`)

In the `config.xml` file in your `%Vendor_Module%` directory, configure the options of your payment method. The following table contains the default options available for any payment method.
Custom options can be added
<p class="q">How they can be added, in general?</p>

| Option               | Description                                                                                                                                          | Value type                            |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| `active`               | is payment active by default                                                                                                                         | Boolean                               |
| `debug`                | enables debug mode by default, for example log for request/response                                                                                  | Boolean                               |
| `debugReplaceKeys`     | request/response fields that are masked in log                                                                                                       | comma separtated list                 |
| `can_authorize`        | whether payment method supports authorization                                                                                                        | Boolean                               |
| `can_capture`          | whether payment method supports the capture operation                                                                                                | Boolean                               |
| `can_void`             | whether payment method supports the void operation                                                                                                   | Boolean                               |
| `can_use_checkout`     | whether payment method is available in checkout                                                                                                      | Boolean                               |
| `currency`             | supported currency                                                                                                                                   | comma separated list of what values?  |
| `is_gateway`           | is an integration with gateway                                                                                                                       | Boolean                               |
| `merchant_gateway_key` | encrypted merchant credential                                                                                                                        | string                                |
| `model`                | [payment method facade](#facade) used for integration with Sales and Checkout modules                                                                | string                                |
| `order_status`         | default order status                                                                                                                                 | what are possible values?             |
| `paymentInfoKeys`      | transaction request/response fields displayed on payment information block (can be any fields from payment additional information)                   | what is the list of fields?           |
| `privateInfoKeys`      | `paymentInfoKeys` fields which should not be displayed in customer payment information block (can be any fields from payment additional information) | what is the list of fields?           |
| `payment_action`       | default action of payment for the payment method (authorize, sale)                                                                                   | what is the list of available actions |
| `sort_order`           | payment method order position on checkout/system configuration pages                                                                                 | integer                               |
| `title`                | default title for a payment method                                                                                                                   | string                                |

<p class="q">can_use_internal<p>
These are default settings available for any payment method. Particular payment method configuration can contain any other custom options. 
Following is the illustration of such configuration (`config.xml` of the SamplePaymentGateway module)

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
                <can_capture_partial>1</can_capture_partial>
                <can_authorize_vault>1</can_authorize_vault>
                <can_capture_vault>1</can_capture_vault>
                <can_use_internal>1</can_use_internal>
                <can_refund_partial_per_invoice>1</can_refund_partial_per_invoice>
                <can_refund>1</can_refund>
                <can_void>1</can_void>
                <can_cancel>1</can_cancel>
                <cctypes>AE,VI,MC,DI,JCB,CUP,DN,MI</cctypes>
                <useccv>1</useccv>
                <cctypes_braintree_mapper><![CDATA[{"american-express":"AE","discover":"DI","jcb":"JCB","mastercard":"MC","master-card":"MC","visa":"VI","maestro":"MI","diners-club":"DN","unionpay":"CUP"}]]></cctypes_braintree_mapper>
                <order_status>processing</order_status>
                <environment>sandbox</environment>
                <allowspecific>0</allowspecific>
                <sdk_url><![CDATA[https://js.braintreegateway.com/js/braintree-2.17.6.min.js]]></sdk_url>
                <public_key backend_model="Magento\Config\Model\Config\Backend\Encrypted" />
                <private_key backend_model="Magento\Config\Model\Config\Backend\Encrypted" />
                <masked_fields>cvv,number</masked_fields>
                <privateInfoKeys>avsPostalCodeResponseCode,avsStreetAddressResponseCode,cvvResponseCode,processorAuthorizationCode,processorResponseCode,processorResponseText,liabilityShifted,liabilityShiftPossible,riskDataId,riskDataDecision</privateInfoKeys>
                <paymentInfoKeys>cc_type,cc_number,avsPostalCodeResponseCode,avsStreetAddressResponseCode,cvvResponseCode,processorAuthorizationCode,processorResponseCode,processorResponseText,liabilityShifted,liabilityShiftPossible,riskDataId,riskDataDecision</paymentInfoKeys>
            </braintree>
{% endhighlight %}
