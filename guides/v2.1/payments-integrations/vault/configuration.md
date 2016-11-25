---
layout: default
group: payments-integrations
subgroup: vault
title: Vault Payment Configuration
menu_title: Vault Payment Configuration
menu_order: 1
version: 2.1
github_link: payments-integrations/vault/configuration.md
---
## Configuration

At first need to add _Vault_ module dependencies for payment method, which will provide vaulting transactions.

Update your payment integration `Module_Name/composer.json` file with vault dependencies:

{% highlight json %}
{
    "name": "magento/module-braintree",
    ...
    "require": {
        ...
        "magento/module-vault": "100.1.*"
        ...
    }
    ...
}
{% endhighlight %}

Update `Module_Name/etc/module.xml` configuration:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Magento_Braintree" setup_version="2.0.0">
        <sequence>
            ...
            <module name="Magento_Vault"/>
            ...
        </sequence>
    </module>
</config>
{% endhighlight %}

Next step - configuration in the `Module_Name/etc/config.xml`:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
    <default>
        <payment>
            <braintree>
                <model>BraintreeFacade</model>
                ...
            </braintree>
            <braintree_cc_vault>
                <model>BraintreeCreditCardVaultFacade</model>
                <title>Stored Cards (Braintree)</title>
            </braintree_cc_vault>
        </payment>
    </default>
</config>
{% endhighlight %}

In this short example new Vault integration added as payment method, let's look more detail about specified config:

* `braintree_cc_vault` section - it's unique payment code, similar to other payments
* `model` - instance of Vault payment implementation, similar to existing payment implementation and will be configured in the `di.xml`
* `title` - payment method title, can be overlapped in the store configuration

This configuration is enough to create Vault payment (but, again, it can be more complicated and can contain other settings like in payments methods),
all other payment settings will be inherited from payment provider and the next section describes how do it.

<h2 id="vault_di">DI for Vault payment</h2>

This section describes how to configure Vault payment method and create payment actions, like authorize, sale (authorize & capture), capture.

### Vault payment facade

At first, need to create [virtual type]({{site.gdeurl}}extension-dev-guide/build/di-xml-file.html#virtual-types) for _Vault_ payment method,
in the most cases it will extend default implementation of `VaultPaymentInterface`:

{% highlight xml %}
<virtualType name="BraintreeCreditCardVaultFacade" type="Magento\Vault\Model\Method\Vault">
    <arguments>
        <argument name="config" xsi:type="object">BraintreeVaultPaymentConfig</argument>
        <argument name="valueHandlerPool" xsi:type="object">BraintreeVaultPaymentValueHandlerPool</argument>
        <argument name="vaultProvider" xsi:type="object">BraintreeFacade</argument>
        <argument name="code" xsi:type="const">Magento\Braintree\Model\Ui\ConfigProvider::CC_VAULT_CODE</argument>
    </arguments>
</virtualType>
{% endhighlight %}

As you can see, this virtual type is similar to payment based on the _Payment Gateway_, the main difference is `vaultProvider` argument - 
as Vault payment in the common case is proxy, need to specify specific payment provider.

### Commands

Now, we have Vault payment but haven't an ability to do something useful. Let to fix it.

At first, we need to extend our payment and allow it to work with our Vault:

{% highlight xml %}
<payment>
    <braintree>
        <model>BraintreeFacade</model>
        <title>Credit Card (Braintree)</title>
        ...
        <can_authorize_vault>1</can_authorize_vault>
        ...
    </braintree>
</payment>
{% endhighlight %}

On the next step, need to create vault command (in our example it will be authorize) and update payment provider command pool:

{% highlight xml %}
<virtualType name="BraintreeVaultAuthorizeCommand" type="Magento\Payment\Gateway\Command\GatewayCommand">
    <arguments>
        <argument name="requestBuilder" xsi:type="object">BraintreeVaultAuthorizeRequest</argument>
        <argument name="transferFactory" xsi:type="object">Magento\Braintree\Gateway\Http\TransferFactory</argument>
        <argument name="client" xsi:type="object">Magento\Braintree\Gateway\Http\Client\TransactionSale</argument>
        <argument name="handler" xsi:type="object">BraintreeVaultResponseHandler</argument>
        <argument name="validator" xsi:type="object">Magento\Braintree\Gateway\Validator\ResponseValidator</argument>
    </arguments>
</virtualType>
{% endhighlight %}

> All available commands you can find in the [VaultPaymentInterface]({{site.mage2100url}}app/code/Magento/Vault/Model/VaultPaymentInterface.php),
this guide describes only an authorize command, other commands are similar and should not cause any troubles.

As you can see, this command similar to payment provider authorize command and uses own request builders and response handlers.
Now, need to add `authorize` payment action to command pool:

{% highlight xml %}
<virtualType name="BraintreeCommandPool" type="Magento\Payment\Gateway\Command\CommandPool">
    <arguments>
        <argument name="commands" xsi:type="array">
            <item name="authorize" xsi:type="string">BraintreeAuthorizeCommand</item>
            ...
            <item name="vault_authorize" xsi:type="string">BraintreeVaultAuthorizeCommand</item>
        </argument>
    </arguments>
</virtualType>
{% endhighlight %}


Vault does not have _Command Pool_ like payment implementation, but it has _Command Manager Pool_ and to work with it need to create
_Command Manager_ and add it to _Command Manager Pool_, this pool will be available
for Vault instance and will allow to perform payment provider actions.

{% highlight xml %}
<virtualType name="BraintreeCommandManager" type="Magento\Payment\Gateway\Command\CommandManager">
    <arguments>
        <argument name="commandPool" xsi:type="object">BraintreeCommandPool</argument>
    </arguments>
</virtualType>
{% endhighlight %}


Now, need to add a created _Command Manager_ to _Command Manager Pool_, it can be done by two ways:

* Add to default `CommandManagerPool` implementation:

{% highlight xml %}
<type name="Magento\Payment\Gateway\Command\CommandManagerPool">
    <arguments>
        <argument name="executors" xsi:type="array">
            <item name="braintree" xsi:type="string">BraintreeCommandManager</item>
        </argument>
    </arguments>
</type>
{% endhighlight %}

* Create own _Command Manager Pool_ for Vault payment:

{% highlight xml %}
<virtualType name="BraintreeCcVaultCommandManagerPool" type="Magento\Payment\Gateway\Command\CommandManagerPool">
    <arguments>
        <argument name="executors" xsi:type="array">
            <item name="braintree" xsi:type="string">BraintreeCommandManager</item>
        </argument>
    </arguments>
</virtualType>

<virtualType name="BraintreeCreditCardVaultFacade" type="Magento\Vault\Model\Method\Vault">
    <arguments>
        ...        
        <argument name="commandManagerPool" xsi:type="object">BraintreeCcVaultCommandManagerPool</argument>
    </arguments>
</virtualType>
{% endhighlight %}

In the first case, payment provider will be available for all configured Vault payments, in the second case -
only for Vault payment related to their payment provider.

Our Vault implementation has commands to process authorization for transactions, but customers have not an ability
to choose it they want to store card details or not. [This topic]({{site.gdeurl21}}payments-integrations/vault/enabler.html) describes how to do it.