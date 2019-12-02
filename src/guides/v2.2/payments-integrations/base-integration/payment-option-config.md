---
group: payments-integrations
subgroup: B_integration
title: Payment method configuration
menu_title: Payment method configuration
menu_order: 2
functional_areas:
  - Integration
---

In the `config.xml` file in your `%Vendor_Module%/etc` directory, configure the options of your [payment method](https://glossary.magento.com/payment-method). The following table contains the default options available for any payment method.

| Option                 | Description                                                                                                                                                                                                                    | Value type                            |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| `active`               | is payment active by default                                                                                                                                                                                                   | Boolean                               |
| `debug`                | enables debug mode by default, for example log for request/response                                                                                                                                                            | Boolean                               |
| `debugReplaceKeys`     | request/response fields that are masked in log                                                                                                                                                                                 | comma separated list                 |
| `can_authorize`        | whether payment method supports authorization                                                                                                 | Boolean                               |
| `can_capture`          | whether payment method supports the capture operation                                                                                                                                                                          | Boolean                               |
| `can_void`             | whether payment method supports the void operation                                                                                                                                                                             | Boolean                               |
| `can_use_checkout`     | whether payment method is available in storefront  checkout | Boolean                               |
| `can_use_internal`     | whether payment method is available in Admin  order creation                                                                                  | Boolean                               |
| `currency`             | supported currency                                                                                                                                                                                                             |                                       |
| `is_gateway`           | is an integration with gateway                                                                                                                                                                                                 | Boolean                               |
| `merchant_gateway_key` | encrypted merchant credential                                                                                                                                                                                                  | string                                |
| `model`                | [payment method facade]({{ page.baseurl }}/payments-integrations/base-integration/facade-configuration.html) used for integration with Sales and Checkout modules                                                                 | string                                |
| `order_status`         | default [order status](https://glossary.magento.com/order-status)                                                                                                                         |                                       |
| `paymentInfoKeys`      | transaction request/response fields displayed on payment information block (can be any fields from payment additional information)                                                                                             | list of comma separated values        |
| `privateInfoKeys`      | `privateInfoKeys` fields which should not be displayed in customer payment information block (can be any fields from payment additional information)                                                                           |                                       |
| `payment_action`       | default action of payment for the payment method (authorize, sale)                                                                                                                                                             | `authorize`,`authorize_capture`       |
| `sort_order`           | payment method order position on checkout/system configuration pages                                                                                                                                                           | integer                               |
| `title`                | default title for a payment method                                                                                                                                                                                             | string                                |

Additionally to the default option, a payment method configuration can contain any other custom options.

## Example

Following is the illustration of such configuration (`config.xml` of the Braintree module)

```xml
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
                <can_edit>1</can_edit>
                <can_review_payment>1</can_review_payment>
                <can_deny_payment>1</can_deny_payment>
                <cctypes>AE,VI,MC,DI,JCB,CUP,DN,MI</cctypes>
                <useccv>1</useccv>
                <cctypes_braintree_mapper><![CDATA[{"american-express":"AE","discover":"DI","jcb":"JCB","mastercard":"MC","master-card":"MC","visa":"VI","maestro":"MI","diners-club":"DN","unionpay":"CUP"}]]></cctypes_braintree_mapper>
                <order_status>processing</order_status>
                <environment>sandbox</environment>
                <allowspecific>0</allowspecific>
                <sdk_url><![CDATA[https://js.braintreegateway.com/js/braintree-2.32.0.min.js]]></sdk_url>
                <public_key backend_model="Magento\Config\Model\Config\Backend\Encrypted" />
                <private_key backend_model="Magento\Config\Model\Config\Backend\Encrypted" />
                <masked_fields>cvv,number</masked_fields>
                <privateInfoKeys>avsPostalCodeResponseCode,avsStreetAddressResponseCode,cvvResponseCode,processorAuthorizationCode,processorResponseCode,processorResponseText,liabilityShifted,liabilityShiftPossible,riskDataId,riskDataDecision</privateInfoKeys>
                <paymentInfoKeys>cc_type,cc_number,avsPostalCodeResponseCode,avsStreetAddressResponseCode,cvvResponseCode,processorAuthorizationCode,processorResponseCode,processorResponseText,liabilityShifted,liabilityShiftPossible,riskDataId,riskDataDecision</paymentInfoKeys>
                <avs_ems_adapter>Magento\Braintree\Model\AvsEmsCodeMapper</avs_ems_adapter>
                <cvv_ems_adapter>Magento\Braintree\Model\CvvEmsCodeMapper</cvv_ems_adapter>
                <group>braintree_group</group>
            </braintree>
        </payment>
    </default>
</config>
```

## What's next

-  [Payment  method facade]({{ page.baseurl }}/payments-integrations/base-integration/facade-configuration.html)
-  [Payment info rendering in Admin checkout]({{ page.baseurl }}/payments-integrations/base-integration/formblocktype.html)
