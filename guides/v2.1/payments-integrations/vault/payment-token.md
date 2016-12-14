---
layout: default
group: payments-integrations
subgroup: C_vault
title: Payment Token
menu_title: Payment Token
menu_order: 10
version: 2.1
github_link: payments-integrations/vault/payment-token.md
---

Magento does not store any private credit card details. It only stores the data received from the payment provider (payment processor token and credit card details without sensitive data). 

This information is stored in the Payment Token.

The basic interface for Payment Token is [PaymentTokenInterface]({{site.mage2100url}}/app/code/Magento/Vault/Api/Data/PaymentTokenInterface.php).

To retrieve and store token details you need to implement response handler in your payment integration, create a Payment Token entity, and store it in the payment extension attributes.

Following sample shows how it might look:

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

 There are two types of `paymentTokenFactory`:

 * CreditCardTokenFactory: used for credit cards
 * AccountPaymentTokenFactory: used for payment accounts, like PayPal

The important thing is `setGatewayToken()` method. This method retrieves Gateway Token,  a hashed value based on some credit card details. Different
payment providers use different algorithms to create this hash. In most cases, exactly this token will be used to perform place order actions.

The created response handler must be added to Handler Chain:

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

The persistence layer for Payment Token is implemented in the [Vault Module]({{site.mage2100url}}app/code/Magento/Vault).

[Next topic]({{site.gdeurl21}}payments-integrations/vault/token-ui-component-provider.html) will describe how to add and use  UI _Vault_ component to place orders on the Storefront.