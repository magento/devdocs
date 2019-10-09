---
group: payments-integrations
title: Payment Token
functional_areas:
  - Integration
---

Magento does not store any private credit card details. It only stores the data received from the payment provider: payment processor token and credit card details without sensitive data.

This information is stored in Payment Token.

The basic interface for Payment Token is [PaymentTokenInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Vault/Api/Data/PaymentTokenInterface.php).

To retrieve and store token details, you need to implement a [response handler]({{ page.baseurl }}/payments-integrations/payment-gateway/response-handler.html). In the response handler a Payment Token [entity](https://glossary.magento.com/entity) is created and stored in the payment [extension](https://glossary.magento.com/extension) attributes.

Following sample is an example of the response handler implementation:

```php

use Magento\Vault\Api\Data\PaymentTokenFactoryInterface;
use Magento\Vault\Api\Data\PaymentTokenInterface;

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
    protected function getVaultPaymentToken(Transaction $transaction)
    {
        // Check token existing in gateway response
        $token = $transaction->creditCardDetails->token;
        if (empty($token)) {
            return null;
        }

        /** @var PaymentTokenInterface $paymentToken */
        $paymentToken = $this->paymentTokenFactory->create(PaymentTokenFactoryInterface::TOKEN_TYPE_CREDIT_CARD);
        $paymentToken->setGatewayToken($token);
        $paymentToken->setExpiresAt($this->getExpirationDate($transaction));

        $paymentToken->setTokenDetails($this->convertDetailsToJSON([
            'type' => $this->getCreditCardType($transaction->creditCardDetails->cardType),
            'maskedCC' => $transaction->creditCardDetails->last4,
            'expirationDate' => $transaction->creditCardDetails->expirationDate
        ]));

        return $paymentToken;
    }
}
```

There are two available types of payment tokens:

*  `\Magento\Vault\Api\Data\PaymentTokenFactoryInterface::TOKEN_TYPE_CREDIT_CARD` is used for credit cards
*  `\Magento\Vault\Api\Data\PaymentTokenFactoryInterface::TOKEN_TYPE_ACCOUNT` is used for payment accounts like PayPal

Depending on your payment integration, you need to specify one of them to create a payment token.

Also, you can create own type of payment token.
But in that case you must re-define the `tokenTypes` argument for `\Magento\Vault\Model\PaymentTokenFactory` in `di.xml` (not just replacing with argument but appending your token type to existing to avoid breaking existing functionality) or provide own preference for `\Magento\Vault\Api\Data\PaymentTokenFactoryInterface`.

The important thing is the `setGatewayToken()` method. This method gets the gateway token: a hashed value based on some credit card details.
Different payment providers use different algorithms to create this hash. In most cases, exactly this token is used to perform place order actions.

The created response handler must be added to the handler chain in the DI configuration file `di.xml`.

Example of the Braintree `di.xml`:

```xml
<virtualType name="BraintreeAuthorizationHandler" type="Magento\Payment\Gateway\Response\HandlerChain">
    <arguments>
        <argument name="handlers" xsi:type="array">
            ...
            <item name="vault_details" xsi:type="string">Magento\Braintree\Gateway\Response\VaultDetailsHandler</item>
            ...
        </argument>
    </arguments>
</virtualType>
```

The persistence layer for Payment Token is implemented in the [Vault Module]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Vault).

## What's next
[Adding and using  UI_Vault component to place orders on the storefront]({{ page.baseurl }}/payments-integrations/vault/token-ui-component-provider.html).
