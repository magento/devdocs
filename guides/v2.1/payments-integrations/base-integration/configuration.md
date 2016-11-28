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

## Configuration

At first, we need to create new module structure
(as said in [Introduction]({site.gdeurl21}}payments-integrations/base-integration/integration-intro.html) topic,
you can use _Payment Sample Module_ with initial structure). Let's start with `composer.json` dependencies:

{% highlight json %}
{
    "name": "magento/module-braintree",
    ...
    "require": {
        ...
        "magento/module-payment": "100.1.*",
        "magento/module-checkout": "100.1.*",
        "magento/module-sales": "100.1.*",
        ...
    },
    ...
    "autoload": {
        ...
        "psr-4": {
            "Magento\\Braintree\\": ""
        }
    }
}
{% endhighlight %}

We added dependencies to Magento `Sales`, `Checkout` and `Payment` modules, this modules are required for us, because,
we will use _Payment Gateway_ infrastructure from _Payment_ module, order details (customer shipping and billing addresses,
amount) from _Sales_ module, also, our payment should be available on the Checkout page and that's why _Checkout_ module
infrastructure is required for us.

Next, we need to add `etc/config.xml` with the same dependencies:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Magento_Braintree" setup_version="2.0.0">
        <sequence>
            ...
            <module name="Magento_Payment"/>
            <module name="Magento_Checkout"/>
            ...
        </sequence>
    </module>
</config>
{% endhighlight %}

In implementation process, when your code requires more Magento modules, you need to update your dependencies.

We have created, some initial configuration, now first interesting thing, we need to create configuration file for new
payment integration (`Module_Name/etc/config.xml`):

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
                ...
            </braintree>
    </default>
</config>
{% endhighlight %}

This configuration can contain a lof of specific details, even specific for your payment integration.
More options are described in [Payment Sample Module]({{https://github.com/magento/magento2-samples/tree/master/sample-module-payment-gateway#lets-look-into-configuration-attributes}}).

> You do not need to override methods from `\Magento\Payment\Model\MethodInterface` as in previous payment implementations, like
`canAuthorize()`, `canCapture()`, etc. Now, you can do all this thing in the `config.xml`.

### Payment method facade

Now, need to create DI configuration for payment method facade in `Module_Name/etc/di.xml`:

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

More details about `commandPool` and `validatorPool` you can find in [Gateway Command Pool]({{site.gdeurl}}payments-integrations/payment-gateway/command-pool.html)
and [Response Validator]({{site.gdeurl}}payments-integrations/payment-gateway/response-validator.html) topics, we are stop
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
