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

- Magento_Sales:: to be able to get order details
- Magento_Checkout: to be able to add the new payment method to checkout
- Magento_Payment: to use the Magento payment provider gateway infrastructure


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

In the `config.xml `file in your `%Vendor_Module%` directory, configure the following options of your payment method:

- `active`: is payment active by default
- `debug`: enables debug mode by default, e.g log for request/response
- `debugReplaceKeys`: request/response fields, which will be masked in log
- `can_authorize`: whether payment method supports authorization
- `can_capture`: whether payment method supports the capture operation
- `can_void`: whether payment method supports the void operation 
- `can_use_checkout`: whether payment method is available in checkout
<p class="q">if not available, no need to add dependency for Checkout module?</p>
- `currency`: supported currency
- `is_gateway` is an integration with gateway
<p class="q">??</p>
- `merchant_gateway_key`: encrypted merchant credential
- `model`: [payment method facade](#facade) used for integration with Sales and Checkout modules
<p class="q">What is Payment Method Facade</p>
- `order_status`: default order status
- `paymentInfoKeys`: transaction request/response fields displayed on payment information block
- `privateInfoKeys`: paymentInfoKeys fields which should not be displayed in customer payment information block
- `payment_action`: default action of payment
- `sort_order`: payment method order position on checkout/system configuration pages
- `title`: default title for a payment method
<p class="q">Please add possible values info</p>

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

<p class="q">There's a number of settings in this config, which are not present in our list</p>
### Payment method facade {#facade}

Add the [dependency injection (DI)]({{page.baseurl}}extension-dev-guide/depend-inj.html) configuration for payment method facade in your `%Vendor_Module/etc/di.xml`.

The following sample is an illustration of such configuration:

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
- `infoBlockType`: name of the block class responsible for Transaction/Payment Information details rendering in Order block.
-`valueHandlerPool`: Value handler pool used for queries to configuration.
- `validatorPool`: pool 
- `commandPool`: [pool of gateway commands]({{page.baseurl}}payment-gateway/command-pool.html)

More details about `commandPool` and `validatorPool` you can find in [Gateway Command Pool]({{page.baseurl}}payments-integrations/payment-gateway/command-pool.html)
and [Response Validator]({{page.baseurl}}payments-integrations/payment-gateway/response-validator.html) topics, we are stop
our attention on `valueHandlerPool` argument.

> More details about `code`, `formBlockType`, `infoBlockType` you can find in [Payment Sample Module](https://github.com/magento/magento2-samples/tree/master/sample-module-payment-gateway#dependency-injection-configuration) description.

The _Value Handler Pool_ provides and ability to specify payment configuration, which can depends on some logic.
For example, a `can_void` configuration option can depends on payment transaction status or paid amount. Let's look how
it can be configured:

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

In that case, the _Value Handler Pool_ it's a list of different handlers, but we always need to specify `default` handler,
in our example it's config reader for Braintree:

{% highlight xml %}
<virtualType name="BraintreeConfigValueHandler" type="Magento\Payment\Gateway\Config\ConfigValueHandler">
    <arguments>
        <argument name="configInterface" xsi:type="object">Magento\Braintree\Gateway\Config\Config</argument>
    </arguments>
</virtualType>
{% endhighlight %}

And [Magento\Braintree\Gateway\Config\Config]({{site.mage2100url}}app/code/Magento/Braintree/Gateway/Config/Config.php) reads
configuration from database or payment config file.

Other handlers contain some logic, for example, `can_cancel` option the same as `can_void` and depends if order has paid amount (invoiced),
your handler can check transaction status or do anything else what you need.

[Next topic]({{site.gdeurl21}}payments-integrations/base-integration/payment-action.html)
describes how process `authorization` transaction, required infrastructure and customization.
