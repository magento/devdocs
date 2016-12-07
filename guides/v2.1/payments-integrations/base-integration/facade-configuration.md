---
layout: default
group: payments-integrations
subgroup: integration
title: Payment facade configuration
menu_title: Payment facade configuration
menu_order: 1
version: 2.1
github_link: payments-integrations/base-integration/facade-configuration.md
---

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
- `formBlockType`: name of the block class responsible for Payment Gateway Form rendering on a checkout. Since store front checkout uses knockout.js for form rendering, this renderer is used only during checkout process in the Admin panel. See the [Admin integration]({{page.baseurl}}payments-integrations/base-integration/admin-integration.html#formBlockType) topic for details.
- `infoBlockType`: name of the block class responsible for Transaction/Payment Information details rendering in Order block.
-`valueHandlerPool`: pool of value handlers used for queries to configuration (for details see the following paragraph).
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

And [Magento\Braintree\Gateway\Config\Config]({{site.mage2100url}}app/code/Magento/Braintree/Gateway/Config/Config.php) reads
configuration from database or payment config file.

Other handlers contain some logic, for example, `can_cancel` option the same as `can_void` and depends if order has paid amount (invoiced),
your handler can check transaction status or do anything else what you need.