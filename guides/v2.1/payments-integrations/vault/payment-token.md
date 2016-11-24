---
layout: default
group: payments-integrations
subgroup: vault
title: Payment Token
menu_title: Payment Token
menu_order: 10
version: 2.1
github_link: payments-integrations/vault/payment-token.md
---

## Payment Token

As said in introduction topic, Magento does not store any private data from credit card details, only data which are provided
from a concrete payment provider. And Magento already has all needed infrastructure to store card data.

A _Payment Token_ represents entity which contains payment processor token and credit card details without sensitive data.

The common abstraction for _Payment Token_ is [PaymentTokenInterface]({{{{site.mage2100url}}}}/app/code/Magento/Vault/Api/Data/PaymentTokenInterface.php).

To retrieve and store token details you need to implement response handler in your payment integration, create _Payment Token_ entity and store it in the payment extension attributes,
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

The important thing for us it's `setGatewayToken()` method. This method retrieves _Gateway Token_ - a hashed value, based on some credit card details, different
payment providers use different algorithms to create this hash. In most cases, exactly this token will be used to perform place order actions.

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