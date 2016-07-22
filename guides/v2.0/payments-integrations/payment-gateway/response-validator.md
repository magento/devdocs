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

Response validator performs gateway response verification, which may vary from low level data formatting/security verification to some business logic, required by store configuration.
As a result, Validator returns a Result object, which has _isValid()_ method returning Boolean and _getFailsDescription()_ which returns a list of _Phrases_. 
Validator, by its sense is not intended to modify anything, but perform validation and return validation result accordingly.

##### ValidatorInterface:
```php
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
```

##### ResultInterface
```php
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
```


### Useful implementations

* \Magento\Payment\Gateway\Validator\AbstractValidator - may be used as a base class for your validators, as it already has an ability to create Result object
* \Magento\Payment\Gateway\Validator\ValidatorComposite - a chain of Validator objects, which are executed one by one and the result gets aggregated into one Result object.
* \Magento\Payment\Gateway\Validator\Result - base class for Result object. You still have an ability to create a Result of your own, but the default one covers the most amount of cases.

### Example

```php
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
                sprintf('%.2F', $paymentDO->getOrder()->getGrandTotalAmount())
                === $response['authCost'],
                __('Amount doesn\'t match.')
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
```
