---
group: payments-integrations
title: Error Code Mapping
---

A payment gateway has error codes or messages that need to be transformed to user-friendly messages. When an error occurs, Magento  delivers the message to the appropriate audience so that the customer or merchant can resolve any problems. You can set up each payment integration to map the native error codes and messages into sets of text strings. As a result, you can ensure that only the proper audience (merchants only, customers only, or all) sees each error message. By default, the standard error message (`An error occurred on the server. Please try to place the order again.`) displays if a payment operation fails and a specific mapped message cannot be found.

Magento provides the [`\Magento\Payment\Gateway\ErrorMapper\ErrorMessageMapperInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Payment/Gateway/ErrorMapper/ErrorMessageMapperInterface.php) interface and default mapper implementation at [`\Magento\Payment\Gateway\ErrorMapper\ErrorMessageMapper`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Payment/Gateway/ErrorMapper/ErrorMessageMapper.php) to enable customizations.

This topic uses examples based on the Magento Braintree payment integration to illustrate how to enable error code mapping.

## Implement mapping files

In most cases, you must define one or more mapping files and configure the default implementation of `ErrorMessageMapperInterface` using the module's `di.xml` file. Alternatively, you can implement a programmatic solution described in [Retrieve error codes from the response validator](#retrieve-errors).

### Map the messages

The first step is to create one or more XML files that map message codes to messages. Magento recommends naming these files `<gateway_name>_error_mapping.xml`, but you can use any name you like. If you create more than one mapping file, each file must have the same file name. Use the following table to determine where to place mapping files:

Audience | location
--- | ---
All users | `<module>/etc`
Merchants | `<module>/adminhtml`
Customers | `<module>/frontend`

The files placed in the `adminhtml` and `frontend` directories ensure that customers and store administrators see only audience-specific messages. For example, a customer should see error messages when a credit card fails verification due to mis-entered data and similar reasons. The store's administrator should have more detailed descriptions of why an attempt to create an invoice or refund failed.

The  [braintree_error_mapping.xml]({{ site.mage2bloburl }}/2.3/app/code/Magento/Braintree/etc/braintree_error_mapping.xml) file provides an example  collection:

```xml
<mapping xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Payment:etc/error_mapping.xsd">
    <message_list>
        <message code="81703" translate="true">Credit card type is not accepted by this merchant account.</message>
        <message code="81706" translate="true">CVV is required.</message>
        <message code="81707" translate="true">CVV must be 4 digits for American Express and 3 digits for other card types.</message>
        ...
    </message_list>
</mapping>
```

The message definitions are based on the [error_mapping.xsd]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Payment/etc/error_mapping.xsd) schema. Messages must comply with the following structure:

-  `message_list` --- the root node. It can contain a list of specific messages
-  `message` --- the node, which contains the customized message and two attributes
   -  `code` --- the error code returned from the payment gateway. The value can be numeric or string
   -  `translate` --- a boolean attribute that determines whether to collect all message translations

### Configure dependency injection

After you map the messages, you must specify the location of the error mapping file or files for the config reader. To do this, create a `virtualType` definition for `\Magento\Payment\Gateway\ErrorMapper\VirtualConfigReader` in the module's `di.xml` file:

```xml
<virtualType name="Magento\Braintree\Gateway\ErrorMapper\VirtualConfigReader" type="Magento\Payment\Gateway\ErrorMapper\VirtualConfigReader">
    <arguments>
        <argument name="fileName" xsi:type="string">braintree_error_mapping.xml</argument>
    </arguments>
</virtualType>
```

Also, specify a config instance for the data reader. You can also provide your own `cacheId`, which allows you to store all parsed messages in a cache.

```xml
<virtualType name="Magento\Braintree\Gateway\ErrorMapper\VirtualMappingData" type="Magento\Payment\Gateway\ErrorMapper\MappingData">
    <arguments>
        <argument name="reader" xsi:type="object">Magento\Braintree\Gateway\ErrorMapper\VirtualConfigReader</argument>
        <argument name="cacheId" xsi:type="string">braintree_error_mapper</argument>
    </arguments>
</virtualType>
```

Then customize the default `ErrorMessageMapper` via virtual type and specify the data reader:

```xml
<virtualType name="Magento\Braintree\Gateway\ErrorMapper\VirtualErrorMessageMapper" type="Magento\Payment\Gateway\ErrorMapper\ErrorMessageMapper">
    <arguments>
        <argument name="messageMapping" xsi:type="object">Magento\Braintree\Gateway\ErrorMapper\VirtualMappingData</argument>
    </arguments>
</virtualType>
```

Because Braintree integration uses the default [`Magento\Payment\Gateway\Command\GatewayCommand`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Payment/Gateway/Command/GatewayCommand.php),
inject the created mapper pool to the required [gateway command]({{ page.baseurl }}/payments-integrations/payment-gateway/gateway-command.html) as an argument:

```xml
<virtualType name="BraintreeAuthorizeCommand" type="Magento\Payment\Gateway\Command\GatewayCommand">
    <arguments>
        ...
        <argument name="errorMessageMapper" xsi:type="object">Magento\Braintree\Gateway\ErrorMapper\VirtualErrorMessageMapper</argument>
    </arguments>
</virtualType>
```

The `Magento\Payment\Gateway\Command\GatewayCommand` allows you to retrieve multiple error messages, but if your integration
does not use this feature, you can inject `ErrorMessageMapperInterface` to it as an argument. Then implement your own logic to the mapper error codes.

The payment integration should now retrieve error codes from the payment gateway response.

## Retrieve error codes from the response validator {#retrieve-errors}

You can retrieve errors codes using a [response validator]({{ page.baseurl }}/payments-integrations/payment-gateway/response-validator.html).
A response validator verifies response codes from the payment gateway.
It has different responsibilities and should not map messages, because it works on the lower layer of communication between Magento and the payment gateway.
It is the responsibility of a gateway command to call an appropriate service.

For example, Magento provides a response validator for Braintree: [`\Magento\Braintree\Gateway\Validator\GeneralResponseValidator`]({{ site.mage2bloburl }}/2.3/app/code/Magento/Braintree/Gateway/Validator/GeneralResponseValidator.php).
Its implementation allows to retrieve errors codes from a response.

First, create a new code provider. It can be a simple class with a public method that should return a list of error codes by the provided response:

```php
class ErrorCodeProvider
{
    /**
     * Retrieves list of error codes from Braintree response.
     *
     * @param Successful|Error $response
     * @return array
     */
    public function getErrorCodes($response): array
    {
        $result = [];
        if (!$response instanceof Error) {
            return $result;
        }

        /** @var ErrorCollection $collection */
        $collection = $response->errors;

        /** @var Validation $error */
        foreach ($collection->deepAll() as $error) {
            $result[] = $error->code;
        }

        return $result;
    }
}
```

Then add the created provider as a dependency to the `GeneralResponseValidator` class:

```php
class GeneralResponseValidator extends AbstractValidator
{
    public function __construct(
        ResultInterfaceFactory $resultFactory,
        SubjectReader $subjectReader,
        ErrorCodeProvider $errorCodeProvider
    ) {
        parent::__construct($resultFactory);
        $this->subjectReader = $subjectReader;
        $this->errorCodeProvider = $errorCodeProvider;
    }

    public function validate(array $validationSubject)
    {
        /** @var Successful|Error $response */
        $response = $this->subjectReader->readResponseObject($validationSubject);

        $isValid = true;
        $errorMessages = [];

        foreach ($this->getResponseValidators() as $validator) {
            $validationResult = $validator($response);

            if (!$validationResult[0]) {
                $isValid = $validationResult[0];
                $errorMessages = array_merge($errorMessages, $validationResult[1]);
            }
        }
        $errorCodes = $this->errorCodeProvider->getErrorCodes($response);

        return $this->createResult($isValid, $errorMessages, $errorCodes);
    }
}
```

The `GeneralResponseValidator` returns an implementation of [`\Magento\Payment\Gateway\Validator\ResultInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Payment/Gateway/Validator/ResultInterface.php)
and the `\Magento\Payment\Gateway\Command\GatewayCommand` uses method `ResultInterface::getErrorCodes()` method to map error codes to user-friendly messages.
