---
layout: default
group: payments-integrations
subgroup: D_Signifyd
title: Signifyd Fraud Detection
menu_title: Signifyd Fraud Detection
menu_node: parent
version: 2.2
github_link: payments-integrations/payments-integrations/signifyd/signifyd.md
---

## Overview

This topic is about the integration of Magento with the Signifyd Fraud Detection serice.
Integration is done with S API and M_S module.

The module does this...

Sections below are about...

## Provide custom AVS/CVV mapping

The Signifyd service collects a lot of information about an order (all fields described in [API](https://www.signifyd.com/docs/api/#/reference/cases/create-a-case)),
most of these fields are optional but some of them are required (like `avsResponseCode`, `cvvResponseCode`).
So, for more accurate calculations, external integrations, like payment methods, might provide some additional details, like CVV/AVS response codes.

The custom payment methods can implement `\Magento\Payment\Api\PaymentVerificationInterface` to provide AVS/CVV mapping
from specific codes to [EMS standard](http://www.emsecommerce.net/avs_cvv2_response_codes.htm) and register these mappers in the `condig.xml` file
of a custom payment module.
For example, the mappers registration might look like this:

```xml
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
```

These steps are enough to provide custom AVS/CVV mapping for payment integrations, everything else, like mapper initialization,
will be provided by the Magento Signifyd infrastructure.

## Retrieve payment method for a placed order

Also, Signifyd can retrieve payment method for a placed order (the Magento Signifyd module can map Magento and Signifyd
payment codes using the predefined XML list, located in `Magento\Signifyd\etc\signifyd_payment_mapping.xml` file).
The 3rd-party payment integrations can apply own mappings for the [Signifyd payment codes](https://www.signifyd.com/docs/api/#/reference/cases/create-a-case),
it's enough to add `signifyd_payment_mapping.xml` to custom payment method implementation and specify needed mapping.
For example:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Signifyd:etc/signifyd_payment_mapping.xsd">
    <payment_method_list>
        <payment_method>
            <magento_code>custom_payment_code</magento_code>
            <signifyd_code>PAYMENT_CARD</signifyd_code>
        </payment_method>
    </payment_method_list>
</config>
```

 - `magento_code` attribute value should be the code for a custom payment method (the same as in the payment's `config.xml`).
 - `signifyd_code` attribute value should be one of available the Signifyd payment method codes.
