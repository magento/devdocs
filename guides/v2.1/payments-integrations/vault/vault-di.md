---
group: payments-integrations
subgroup: C_vault
title: Vault DI configuration
menu_title: Vault DI configuration
menu_order: 3
version: 2.1
functional_areas:
  - Integration
---

This section describes how to configure vault {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %} and create payment actions, like authorize, sale (authorize & capture), capture and so on.

## Add vault payment facade

To add a payment facade for the vault payment, create a [virtual type]({{ page.baseurl }}/extension-dev-guide/build/di-xml-file.html#virtual-types). In the most cases, it will extend [`Magento\Vault\Model\Method\Vault`]({{ site.mage2100url }}app/code/Magento/Vault/Model/Method/Vault.php) that is the default implementation of [`Magento\Vault\Model\VaultPaymentInterface`]({{ site.mage2100url }}app/code/Magento/Vault/Model/VaultPaymentInterface.php):

Example of the vault payment facade configuration for Braintree:

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

This {% glossarytooltip 058b2be4-3247-4cb0-860d-6292ce75d1f0 %}virtual type{% endglossarytooltip %} is similar to the [payment method facade]({{ page.baseurl }}/payments-integrations/base-integration/facade-configuration.html). The main difference is the `vaultProvider` argument. As the Vault payment in the general case is a proxy, the specific payment provider must be specified.

## Extend payment method configuration

To enable vault usage for the payment method, set the `can_authorize_vault` option in the [method's configuration]({{ page.baseurl }}/payments-integrations/base-integration/payment-option-config.html). 

Following is an example from Braintree configuration:

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

## Add a gateway command for vault

For payment actions, you need to create gateway commands for vault, and update the payment provider [command pool]({{ page.baseurl }}/payments-integrations/payment-gateway/command-pool.html). 

All available commands you can find in the [VaultPaymentInterface]({{ site.mage2100url }}app/code/Magento/Vault/Model/VaultPaymentInterface.php)

Example: a gateway command for the authorize action is added for the Braintree vault 

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


This command is similar to the payment provider authorize command. But it uses own [request builders]({{ page.baseurl }}/payments-integrations/payment-gateway/request-builder.html) and [response handlers]({{ page.baseurl }}/payments-integrations/payment-gateway/response-handler.html).

The following sample from Braintree configuration illustrates how to add the `authorize` payment action to command pool:

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

## Add command manager

You also need to create a command manager for vault. It is configured with the payment integration command pool and allows performing payment commands in any place of code. 

Example of adding a command manager for Braintree vault:
 
{% highlight xml %}
<virtualType name="BraintreeCommandManager" type="Magento\Payment\Gateway\Command\CommandManager">
    <arguments>
        <argument name="commandPool" xsi:type="object">BraintreeCommandPool</argument>
    </arguments>
</virtualType>
{% endhighlight %}


Command manager must be added to the command manager pool. This pool is available for vault instance and enables performing payment provider actions.

There are two ways to add command manager to the pool: 

* Add to default `CommandManagerPool` implementation. Example:

{% highlight xml %}
<type name="Magento\Payment\Gateway\Command\CommandManagerPool">
    <arguments>
        <argument name="executors" xsi:type="array">
            <item name="braintree" xsi:type="string">BraintreeCommandManager</item>
        </argument>
    </arguments>
</type>
{% endhighlight %}

* Create custom command manager pool. Example:

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

In the first case, this pool can be used in any {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} to perform vault payment commands. In the second case, only specific vault payment integration can use this pool. 

You can use the samples as templates for your command manager configuration. You only need to change the Braintree-related names to your custom ones.
