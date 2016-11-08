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
<h2 id="vault_configuration">Configuration</h2>

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
* `model` - instance of payment adapter, will be configured in the `di.xml`
* `title` - payment method title, can be overlapped in the store configuration

This configuration is enough to create Vault payment, all other payment settings will be inherited from payment provider and
the next section describes how do it.

<h2 id="vault_di">DI for Vault payment</h2>

This section describes how to configure Vault payment adapter and create payment actions, like authorize and sale.

At first, need to create virtual type for _Vault_ payment method, in the most cases it will extend default implementation of `VaultPaymentInterface`:

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

On the next step, need to create vault authorize command and update payment provider command pool:

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

To add `sale` payment action you just need to create and configure objects similar to `authorize`.

> All available payments are described in [VaultPaymentInterface]({{site.mage2100url}}app/code/Magento/Vault/Model/VaultPaymentInterface.php).

On the last step, need to create _Command Manager_ and add it to _Command Manager Pool_, this pool will be available
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

<h2 id="vault_create_payment_token">Payment Token Creation</h2>

A _Payment Token_ represents entity which contains payment processor token and credit card details without sensitive data.

The common abstraction for _Payment Token_ is [PaymentTokenInterface]({{{{site.mage2100url}}}}/app/code/Magento/Vault/Api/Data/PaymentTokenInterface.php).

To retrieve and store token details you need to implement response handler in your payment integration, create `Payment Token` entity and store it in the payment extension attributes,
follow sample shows how it might looks:

{% highlight php startinline=1 %}
class VaultDetailsHandler implements HandlerInterface
{
    /**
     * @inheritdoc
     */
    public function handle(array $handlingSubject, array $response)
    {
        $paymentDO = $this->subjectReader->readPayment($handlingSubject);
        $transaction = $this->subjectReader->readTransaction($response);
        $payment = $paymentDO->getPayment();

        // add vault payment token entity to extension attributes
        $paymentToken = $this->getVaultPaymentToken($transaction);
        if (null !== $paymentToken) {
            $extensionAttributes = $this->getExtensionAttributes($payment);
            $extensionAttributes->setVaultPaymentToken($paymentToken);
        }
    }

    /**
     * Get vault payment token entity
     *
     * @param \Braintree\Transaction $transaction
     * @return PaymentTokenInterface|null
     */
    private function getVaultPaymentToken(Transaction $transaction)
    {
        // Check token existing in gateway response
        $token = $transaction->creditCardDetails->token;
        if (empty($token)) {
            return null;
        }

        /** @var PaymentTokenInterface $paymentToken */
        $paymentToken = $this->paymentTokenFactory->create();
        $paymentToken->setGatewayToken($token);

        $paymentToken->setTokenDetails($this->convertDetailsToJSON([
            'type' => $this->getCreditCardType($transaction->creditCardDetails->cardType),
            'maskedCC' => $transaction->creditCardDetails->last4,
            'expirationDate' => $transaction->creditCardDetails->expirationDate
        ]));

        return $paymentToken;
    }
}
{% endhighlight %}

> There are two available types of `paymentTokenFactory`:

> * [CreditCardTokenFactory]({{site.mage2100url}}app/code/Magento/Vault/Model/CreditCardTokenFactory.php) - using for credit cards
> * [AccountPaymentTokenFactory]({{site.mage2100url}}app/code/Magento/Vault/Model/AccountPaymentTokenFactory.php) - using for payments accounts, like PayPal

And add created response handler to _Handler Chain_ to _Vault_ payment provider:

{% highlight xml %}
<virtualType name="BraintreeAuthorizationHandler" type="Magento\Payment\Gateway\Response\HandlerChain">
    <arguments>
        <argument name="handlers" xsi:type="array">
            ...
            <item name="vault_details" xsi:type="string">Magento\Braintree\Gateway\Response\VaultDetailsHandler</item>
            ...
        </argument>
    </arguments>
</virtualType>
{% endhighlight %}

The persistence layer for _Payment Token_ is implemented in the [Vault Module]({{site.mage2100url}}app/code/Magento/Vault) and
you don't need worry about saving tokens.

[Next topic]({{site.gdeurl21}}payments-integrations/vault/token-ui-component-provider.html) will describe how to add and use  UI _Vault_ component to place orders on the Storefront.