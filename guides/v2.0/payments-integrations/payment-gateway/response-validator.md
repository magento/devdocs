---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Response Validator
menu_title: Response Validator
menu_node: 
menu_order: 6
version: 2.0
github_link: payments-integrations/payment-gateway/response-validator.md
---

Response Validator is a component of the Magento payment provider gateway that performs gateway response verification. This may include low level data formatting, security verification, and even execution of some business logic required by the store configuration.

Response Validator returns a Result object, containing validation result as Boolean value and errors description as a list of [Phrase]({{site.mage2000url}}lib/internal/Magento/Framework/Phrase.php).

## Interfaces
Response Validator must implement [`Magento\Payment\Gateway\Validator\ValidatorInterface`]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/ValidatorInterface.php)

Result class must implement [`Magento\Payment\Gateway\Validator\ResultInterface`]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/ResultInterface.php)

A payment provider integration can have multiple response validators, that should be added to the provider's validators' pool using [dependency injection]({{page.baseurl}}extension-dev-guide/depend-inj.html).


## Useful implementations

* [\Magento\Payment\Gateway\Validator\AbstractValidator]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/AbstractValidator): an abstract class with ability to create a Result object. Can be inherited from by particular response validator implementations. 
* [\Magento\Payment\Gateway\Validator\ValidatorComposite]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/ValidatorComposite): a chain of Validator objects, which are executed one by one and the result gets aggregated into one Result object.
* [\Magento\Payment\Gateway\Validator\Result]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/Result): base class for Result object. You still have an ability to create a Result of your own, but the default one covers the most amount of cases.

## Example

In the following example the a response validator is implemented and added to the pool of the Braintree payment provider request validators.  

{% highlight php startinline=1 %}
class AcceptValidator extends AbstractValidator
{
    /**
     * Performs domain-related validation for business object
     *
     * @param array $validationSubject
     * @return ResultInterface
     */
    public function validate(array $validationSubject)
    {
        $response = SubjectReader::readResponse($validationSubject);
        $paymentDO = SubjectReader::readPayment($validationSubject);

        $isValid = true;
        $fails = [];

        $statements = [
            [
                $paymentDO->getOrder()->getCurrencyCode() === $response['authCurrency'],
                __('Currency doesn\'t match.')
            ],
            [
                sprintf(
                    '%.2F',
                    $paymentDO->getOrder()->getGrandTotalAmount()) === $response['authCost'],
                    __('Amount doesn\'t match.'
                )
            ],
            [
                in_array($response['authMode'], ['A', 'E']),
                __('Not supported response.')
            ]
        ];

        foreach ($statements as $statementResult) {
            if (!$statementResult[0]) {
                $isValid = false;
                $fails[] = $statementResult[1];
            }
        }

        return $this->createResult($isValid, $fails);
    }
}
{% endhighlight %}

## Pool of validators {#validators_pool} 
The following sample demonstrates defining a validator's pool and adding validators to this pool for the Braintree payment provider in `di.xml`:
 
{% highlight xml %}
...
<virtualType name="BraintreeValidatorPool" type="Magento\Payment\Gateway\Validator\ValidatorPool">
    <arguments>
        <argument name="validators" xsi:type="array">
            <item name="country" xsi:type="object">Magento\Payment\Gateway\Validator\CountryValidator</item>
            <item name="accept" xsi:type="string">AcceptValidator</item>
        </argument>
    </arguments>
</virtualType>
...
{% endhighlight %}

(This code sample was created for demonstration only, the real Braintree configuration is different).


