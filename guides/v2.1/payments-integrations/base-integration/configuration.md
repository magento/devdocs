---
layout: default
group: payments-integrations
subgroup: integration
title: Payment Configuration
menu_title: Payment Configuration
menu_order: 1
version: 2.1
github_link: payments-integrations/base-integration/configuration.md
---

For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code, add your customizations in a separate module.

You can use the [sample Magento_SamplePaymentGateway module](https://github.com/magento/magento2-samples/tree/master/sample-module-payment-gateway) files as basis for your custom module structure and files (do not forget to change the module-specific info):

- composer.json

## Specify your module dependencies 

Your custom payment integration module must have at least the following dependencies:

- Magento_Sales: to be able to get order details
- Magento_Payment: to use the Magento payment provider gateway infrastructure
- Magento_Checkout: to be able to add the new payment method to checkout. Though if you do not plan to use it on the storefront checkout, this dependency is not required. 


Specify these dependencies in your `composer.json` and `module.xml` files. 

### Composer.json

In your `%Vendor_Module%/composer.json` file, specify the dependencies like in the following example:

{% highlight json %}
{
    ...
    "require": {
        ...
        "magento/module-payment": "100.1.*",
        "magento/module-checkout": "100.1.*",
        "magento/module-sales": "100.1.*",
        ...
    },
    ...

}
{% endhighlight %}

### module.xml
Add the same dependencies in `%Vendor_Module%/etc/module.xml`

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Vendor_Module" setup_version="2.0.0">
        <sequence>
            ...
            <module name="Magento_Sales"/>
            <module name="Magento_Payment"/>
            <module name="Magento_Checkout"/>
            ...
        </sequence>
    </module>
</config>
{% endhighlight %}

Your payment method implementation might require adding more dependencies.

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

These are default settings available for any payment method. Particular payment method configuration can contain any other custom options. 
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


### Payment method facade {#facade}

Add the [dependency injection (DI)]({{page.baseurl}}extension-dev-guide/depend-inj.html) configuration for payment method facade in your `%Vendor_Module/etc/di.xml`.

Payment facade it is an instance of [Payment Adapter]({{site.mage2100url}}app/code/Magento/Payment/Model/Method/Adapter.php) configured with virtual types and allows to
process payment actions between Magento Sales Management and payment processor.

The following sample is an illustration of such configuration ([app/code/Magento/Braintree/etc/di.xml#L10]({{site.mage2100url}}app/code/Magento/Braintree/etc/di.xml#L10)):

{% highlight xml %}
<virtualType name="BraintreeFacade" type="Magento\Payment\Model\Method\Adapter">
    <arguments>
        <argument name="code" xsi:type="const">Magento\Braintree\Model\Ui\ConfigProvider::CODE</argument>
        <argument name="formBlockType" xsi:type="string">Magento\Braintree\Block\Form</argument>
        <argument name="infoBlockType" xsi:type="string">Magento\Braintree\Block\Info</argument>
        <argument name="valueHandlerPool" xsi:type="object">BraintreeValueHandlerPool</argument>
        <argument name="validatorPool" xsi:type="object">BraintreeValidatorPool</argument>
        <argument name="commandPool" xsi:type="object">BraintreeCommandPool</argument>
    </arguments>
</virtualType>
{% endhighlight %}

The following arguments must be configured:

- `code`: payment method's code
- `formBlockType`: name of the block class responsible for Payment Gateway Form rendering on a checkout. Since Opepage Checkout uses knockout.js for rendering, this renderer is used only during Checkout process from Admin panel.
- `infoBlockType`: name of the block class responsible for Transaction/Payment Information details rendering in Order block (for Admin panel or customer account on Storefront).
In most cases it will be enough to set default implementation of [Configurable Info]({{site.mage2100url}}app/code/Magento/Payment/Block/ConfigurableInfo.php), but for customizations you
always can specify your own implementation.
- `valueHandlerPool`: pool of value handlers used for queries to configuration (for details see the following paragraph).
- `validatorPool`: [pool of response validators]({{page.baseurl}}payment-gateway/response-validator.html#validators_pool)
- `commandPool`: [pool of gateway commands]({{page.baseurl}}payment-gateway/command-pool.html)

#### Value handlers pool
Let's look closer at a value handlers pool of a payment method. This pool enables you to create payment configuration base on conditions. 

For example, the `can_void` configuration option might depend on payment transaction status or paid amount. The following sample shows how to set the corresponding configuration ([app/code/Magento/Braintree/etc/di.xml#L296]({{site.mage2100url}}app/code/Magento/Braintree/etc/di.xml#L296)):

{% highlight xml %}
<virtualType name="BraintreeValueHandlerPool" type="Magento\Payment\Gateway\Config\ValueHandlerPool">
    <arguments>
        <argument name="handlers" xsi:type="array">
            <item name="default" xsi:type="string">BraintreeConfigValueHandler</item>
            <item name="can_void" xsi:type="string">Magento\Braintree\Gateway\Config\CanVoidHandler</item>
            <item name="can_cancel" xsi:type="string">Magento\Braintree\Gateway\Config\CanVoidHandler</item>
        </argument>
    </arguments>
</virtualType>
{% endhighlight %}

Pay attention, that you must always specify the default handler. In the example it is config reader for Braintree:

{% highlight xml %}
<virtualType name="BraintreeConfigValueHandler" type="Magento\Payment\Gateway\Config\ConfigValueHandler">
    <arguments>
        <argument name="configInterface" xsi:type="object">Magento\Braintree\Gateway\Config\Config</argument>
    </arguments>
</virtualType>
{% endhighlight %}

In your implementations you can use [Payment Gateway Config]({{site.mage2100url}}app/code/Magento/Payment/Gateway/Config/Config.php) or implement `Magento\Payment\Gateway\ConfigInterface` interface.

> _Payment Gateway Config_ can read configuration by payment method code, so is useful to use it or extend it for your own purposes.


And [Magento\Braintree\Gateway\Config\Config]({{site.mage2100url}}app/code/Magento/Braintree/Gateway/Config/Config.php) reads
configuration from database or payment config file.

Other handlers contain some logic, for example, `can_cancel` option the same as `can_void` and depends if order has paid amount (invoiced),
your handler can check transaction status or do anything else what you need you just need to implement [Value Handler Interface]({{site.mage2100url}}app/code/Magento/Payment/Gateway/Config/ValueHandlerInterface.php);