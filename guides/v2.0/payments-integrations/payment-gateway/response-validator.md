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

Response validator performs gateway response verification. This may include low level data formatting, security verification, and even execution of some business logic required by the store configuration.

As a result, _Validator_ returns a _Result_ object, which has `isValid()` method returning _Boolean_ and `getFailsDescription()` which returns a list of [Phrase](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Phrase.php)s. 

<p class="q">what are phrases?</p>

_Validator_, by its sense is not intended to modify anything, but perform validation and return validation result accordingly.

##### ValidatorInterface:

{% highlight php startinline=1 %}
interface ValidatorInterface
{
    /**
     * Performs domain-related validation for business object
     *
     * @param array $validationSubject
     * @return ResultInterface
     */
    public function validate(array $validationSubject);
}
{% endhighlight %}

##### ResultInterface

{% highlight php startinline=1 %}
interface ResultInterface
{
    /**
     * Returns validation result
     *
     * @return bool
     */
    public function isValid();

    /**
     * Returns list of fails description
     *
     * @return Phrase[]
     */
    public function getFailsDescription();
}
{% endhighlight %}


### Useful implementations

* [\Magento\Payment\Gateway\Validator\AbstractValidator]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/AbstractValidator) - may be used as a base class for your validators, as it already has an ability to create Result object
* [\Magento\Payment\Gateway\Validator\ValidatorComposite]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/ValidatorComposite) - a chain of Validator objects, which are executed one by one and the result gets aggregated into one _Result_ object.
* [\Magento\Payment\Gateway\Validator\Result]({{site.mage2000url}}app/code/Magento/Payment/Gateway/Validator/Result) - base class for Result object. You still have an ability to create a _Result_ of your own, but the default one covers the most amount of cases.

### Example

<p class="q">Is it an example of response validator implementation? A: yes</p>
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

Each payment method can have multiple validators and they should be added to a _Validator Pool_:

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