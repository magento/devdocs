---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Response Validator
menu_title: 
menu_node: 
menu_order: 15
version: 2.0
github_link: payments-integrations/payment-gateway/response-validator.md
---

## Response Validator

*Response Validator* is a component of the Magento payment provider gateway that performs gateway response verification. This may include low level data formatting, security verification, and even execution of some business logic required by the store configuration.

*Response Validator* returns a *Result* object, containing validation result as Boolean value and fails description as list of [Phrase]({{site.mage2000url}}lib/internal/Magento/Framework/Phrase.php)'s.

*Response Validator* must implement [`Magento\Payment\Gateway\Validator\ValidatorInterface`]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/ValidatorInterface.php)

*Result* class must implement [`Magento\Payment\Gateway\Validator\ResultInterface`]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/ResultInterface.php)

A particular payment provider integration method can have multiple Response Validators, that should be added to the Response Validators' pool.

### Example

Following is an example of a particular Response Validator implementation, and adding it to REap 

app/code/Magento/Worldpay/Gateway/Validator/AcceptValidator.php 

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


{% highlight xml %}
<virtualType name="BraintreeValidatorPool" type="Magento\Payment\Gateway\Validator\ValidatorPool">
    <arguments>
        <argument name="validators" xsi:type="array">
            <item name="country" xsi:type="object">Magento\Payment\Gateway\Validator\CountryValidator</item>
            <item name="accept" xsi:type="string">AcceptValidator</item>
        </argument>
    </arguments>
</virtualType>
{% endhighlight %}

### Useful implementations

* [\Magento\Payment\Gateway\Validator\AbstractValidator]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/AbstractValidator): an abstract class with ability to create a Result object. Can be inherited from by particular Response Validator implementations. 
* [\Magento\Payment\Gateway\Validator\ValidatorComposite]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/ValidatorComposite) - a chain of Validator objects, which are executed one by one and the result gets aggregated into one _Result_ object.
* [\Magento\Payment\Gateway\Validator\Result]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/Result) - base class for Result object. You still have an ability to create a _Result_ of your own, but the default one covers the most amount of cases.


