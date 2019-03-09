---
group: payments-integrations
subgroup: D_Signifyd
title: Signifyd fraud protection
menu_title: Signifyd fraud protection
menu_node: parent
---

## About this document

This document provides additional technical details for integrating Magento with the [Signifyd fraud protection system](https://www.signifyd.com/). The integration is based on the *Magento_Signifyd* module that uses the [Signifyd API](https://www.signifyd.com/docs/api/).

## Magento_Signifyd module overview

The Magento-Signifyd {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} allows you to:

 - create a [Signifyd case](https://www.signifyd.com/docs/api/#/reference/cases) for a placed order
 - automatically receive a [Signifyd guarantee](https://www.signifyd.com/docs/api/#/reference/guarantees) for a created case
 - automatically cancel a guarantee when the order is canceled

## Processing supplementary payment information

To improve the accuracy of Signifyd's transaction estimation, external integrations (like payment methods) may provide the supplementary payment info.

### Provide AVS/CVV response codes

A custom {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %} can implement the `\Magento\Payment\Api\PaymentVerificationInterface` to provide AVS/CVV mapping from specific codes to [EMS standard](http://www.emsecommerce.net/avs_cvv2_response_codes.htm), then register these mappings in the `config.xml` file of a custom payment module.

Below is an example of mapping registration:

{%highlight xml startinline=1%}
<default>
    <payment>
        <custom_payment>
            <model>CustomPaymentFacade</model>
            <title>Custom Payment</title>
            ...
            <avs_ems_adapter>Magento\CustomPayment\Model\AvsEmsCodeMapper</avs_ems_adapter>
            <cvv_ems_adapter>Magento\CustomPayment\Model\CvvEmsCodeMapper</cvv_ems_adapter>
        </custom_payment>
    </payment>
</default>
{%endhighlight%}

These steps are enough to provide custom AVS/CVV mapping for payment integrations. Everything else, like mapper initialization, will be provided by the *Magento_Signifyd* infrastructure.

### Retrieve payment method for a placed order

The Signifyd service can retrieve the payment method of a placed order. The *Magento_Signifyd* module allows to map Magento and Signifyd payment codes using the predefined {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} list, located in:

    Magento\Signifyd\etc\signifyd_payment_mapping.xml

To apply your mappings for the [Signifyd payment codes](https://www.signifyd.com/docs/api/#/reference/cases/create-a-case), follow these steps:

1. Add `signifyd_payment_mapping.xml` to the custom payment method implementation

2. Specify the needed mapping

For example:

{%highlight xml startinline=1%}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Signifyd:etc/signifyd_payment_mapping.xsd">
    <payment_method_list>
        <payment_method>
            <magento_code>custom_payment_code</magento_code>
            <signifyd_code>PAYMENT_CARD</signifyd_code>
        </payment_method>
    </payment_method_list>
</config>
{%endhighlight%}

where:

* `magento_code` attribute value should be the code for a custom payment method (the same as in the payment's `config.xml`).

* `signifyd_code` attribute value should be one of the available Signifyd payment method codes.
