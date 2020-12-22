---
group: payments-integrations
title: CardinalCommerce 3-D Secure
---

This document provides additional technical details for integrating Magento payment modules with the [CardinalCommerce][]. CardinalCommerce (a wholly owned subsidiary of Visa) offers a rules-based 3-D Secure (3DS) solution called [Cardinal Consumer Authentication][]. Protect your web store from fraud, reduce false declines, reduce manual review of orders, and improve your authorizations.

The integration is based on the *Magento_CardinalCommerce* module that implements the [Cardinal Cruise Standard][] integration approach.

The Cardinal Cruise Standard integration is purely a JavaScript approach that is all encompassing. When enabling this approach for [Cardinal Consumer Authentication][], this integration will handle the device data collection, initiating the transaction for [CCA][], presenting the authentication session if required, and returning the results of authentication once completed. This is recommended integration approach for CCA.

The following diagram shows a simplified 3-D Secure verification flow using Cardinal Cruise Standard integration approach provided by CardinalCommerce:

![CardinalCommerce Interaction]({{ site.baseurl }}/common/images/payments-integrations/cardinal_commerce.svg)

## Magento_CardinalCommerce module overview

The *Magento_CardinalCommerce* [module][] allows you to:

-  Start `Cardinal Consumer Authentication` for enabling card network programs including Verified by Visa®, MasterCard SecureCode® and Identity Check®, American Express SafeKey®, Discover ProtectBuy® and Diners International® and JCB J-Secure®.
-  Handle specific return values for `Cardinal Consumer Authentication` on backend and storefront

## Payment method module integration with Magento_CardinalCommerce

CardinalCommerce maintains a [list of compatible payment gateways][].

### CardinalCommerce configuration for payment method

You need to add configuration parameter that will enable `Cardinal Consumer Authentication` in the `config.xml` and `system.xml` files  of your [payment method][] module:

-  `enabled_{payment_method_code}` - enables CCA for custom payment method.

The following example is the `config.xml` file of the AuthorizenetAcceptjs payment method:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
    <default>
        <three_d_secure>
            <cardinal>
                <enabled_authorizenet>0</enabled_authorizenet>
            </cardinal>
        </three_d_secure>
    </default>
</config>
```

And the `system.xml` file of the AuthorizenetAcceptjs payment method:

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Config:etc/system_file.xsd">
    <system>
        <section id="three_d_secure">
            <group id="cardinal">
                <group id="config">
                    <field id="enabled_authorize" translate="label" type="select" sortOrder="10" showInDefault="1" showInWebsite="1" showInStore="0">
                        <label>Enable for Authorize.Net</label>
                        <source_model>Magento\Config\Model\Config\Source\Yesno</source_model>
                        <config_path>three_d_secure/cardinal/enabled_authorizenet</config_path>
                    </field>
                </group>
            </group>
        </section>
    </system>
</config>
```

You can pass this parameter on storefront via checkout config using `\Magento\Checkout\Model\ConfigProviderInterface`

See [app\code\AuthorizenetCardinal\Model\Checkout\ConfigProvider.php]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/AuthorizenetCardinal/Model/Checkout/ConfigProvider.php) as an example.

```php
namespace Magento\AuthorizenetCardinal\Model\Checkout;

use Magento\AuthorizenetCardinal\Model\Config;
use Magento\Checkout\Model\ConfigProviderInterface;

/**
 * Configuration provider.
 */
class ConfigProvider implements ConfigProviderInterface
{
    /**
     * @var Config
     */
    private $config;

    /**
     * @param Config $config
     */
    public function __construct(
        Config $config
    ) {
        $this->config = $config;
    }

    /**
     * @inheritdoc
     */
    public function getConfig(): array
    {
        $config['cardinal'] = [
            'isActiveFor' => [
                'authorizenet' => $this->config->isActive()
            ]
        ];

        return $config;
    }
}
```

and di.xml configuration

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\Checkout\Model\CompositeConfigProvider">
        <arguments>
            <argument name="configProviders" xsi:type="array">
                <item name="authorizenet_cardinal_config_provider" xsi:type="object">
                    Magento\AuthorizenetCardinal\Model\Checkout\ConfigProvider
                </item>
            </argument>
        </arguments>
    </type>
</config>
```

### Start Cardinal Consumer Authentication

CCA is initiated by the merchant, typically when the customer clicks `Place Order` button. Instead of getting a card authorization, you should use the `Magento_CardinalCommerce/view/frontend/web/js/cardinal-client` JS component and initiate the CCA process before authorization.

In the following example mixin, [app/code/Magento/AuthorizenetCardinal/view/frontend/web/js/authorizenet-accept-mixin.js]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/AuthorizenetCardinal/view/frontend/web/js/authorizenet-accept-mixin.js) is used to intercept the `placeOrder` method of the AuthorizenetAcceptjs payment method JS component and start consumer authentication:

```js
define([
     ...
    'Magento_CardinalCommerce/js/cardinal-client',
     ...
], function ($, cardinalClient, ...) {
    'use strict';

    return function (originalComponent) {
        return originalComponent.extend({
            defaults: {
                cardinalJWT: null
            },

            /**
             * Performs 3d-secure authentication.
             */
            beforePlaceOrder: function () {
                var original = this._super.bind(this),
                    client = cardinalClient,
                    isActive = window.checkoutConfig.cardinal.isActiveFor.authorizenet,
                    cardData;

                if (!isActive || !$(this.formElement).valid()) {
                    return original();
                }

                cardData = {
                    accountNumber: this.creditCardNumber(),
                    expMonth: this.creditCardExpMonth(),
                    expYear: this.creditCardExpYear()
                };

                if (this.hasVerification()) {
                    cardData.cardCode = this.creditCardVerificationNumber();
                }

                client.startAuthentication(cardData)
                    .done(function (jwt) {
                        this.cardinalJWT = jwt;
                        original();
                    }.bind(this))
                    .fail(function (errorMessage) {
                        globalMessageList.addErrorMessage({
                            message: errorMessage
                        });
                    });
                ...
            },

            /**
             * Adds cardinal response JWT to payment additional data.
             *
             * @returns {Object}
             */
            getData: function () {
                var originalData = this._super();

                originalData['additional_data'].cardinalJWT = this.cardinalJWT;

                return originalData;
            }
        });
    };
});
```

Once the response [JWT][] is received after consumer authentication, you will need to send it to your backend to verify and extract the results. In the example above response JWT is added to payment additional data and passed to backend along with them.

### CCA Results Extracting And Validation On Backend

Cardinal Consumer Authentication results can be extracted from CardinalCommerce response JWT with `\Magento\CardinalCommerce\Model\Response\JwtParserInterface`. Basic implementation of this interface includes response JWT signature validation, and validation of parameters such as `ActionCode`, `ErrorNumber`, `ECIFlag`. You can find detailed information about these parameters in [API Reference][].

You can customize CCA results validation by creating your own implementation of `\Magento\CardinalCommerce\Model\Response\JwtPayloadValidatorInterface`.

Below is an example of the extracting array content of a CardinalCommerce response JWT in [\Magento\AuthorizenetCardinal\Gateway\Request\Authorize3DSecureBuilder][]:

```php
use Magento\AuthorizenetAcceptjs\Gateway\SubjectReader;
use Magento\AuthorizenetCardinal\Model\Config;
use Magento\CardinalCommerce\Model\Response\JwtParserInterface;
use Magento\Payment\Gateway\Request\BuilderInterface;
use Magento\Sales\Model\Order\Payment;

/**
 * Adds the cardholder authentication information to the request
 */
class Authorize3DSecureBuilder implements BuilderInterface
{
    /**
     * @var SubjectReader
     */
    private $subjectReader;

    /**
     * @var Config
     */
    private $config;

    /**
     * @var JwtParserInterface
     */
    private $jwtParser;

    /**
     * @param SubjectReader $subjectReader
     * @param Config $config
     * @param JwtParserInterface $jwtParser
     */
    public function __construct(
        SubjectReader $subjectReader,
        Config $config,
        JwtParserInterface $jwtParser
    ) {
        $this->subjectReader = $subjectReader;
        $this->config = $config;
        $this->jwtParser = $jwtParser;
    }

    /**
     * @inheritdoc
     */
    public function build(array $buildSubject): array
    {
        if ($this->config->isActive() === false) {
            return [];
        }

        $paymentDO = $this->subjectReader->readPayment($buildSubject);
        $payment = $paymentDO->getPayment();
        $data = [];

        if ($payment instanceof Payment) {
            $cardinalJwt = (string)$payment->getAdditionalInformation('cardinalJWT');
            $jwtPayload = $this->jwtParser->execute($cardinalJwt);
            $eciFlag = $jwtPayload['Payload']['Payment']['ExtendedData']['ECIFlag'] ?? '';
            $cavv = $jwtPayload['Payload']['Payment']['ExtendedData']['CAVV'] ?? '';
            $data = [
                'transactionRequest' => [
                    'cardholderAuthentication' => [
                        'authenticationIndicator' => $eciFlag,
                        'cardholderAuthenticationValue' => $cavv
                    ],
                ]
            ];
        }

        return $data;
    }
}
```

Depending on the requirements of your payment gateway, you should include some of the response fields in the transaction request, or you should perform a separate request based on these values.

In our example, the `ECIFlag` and `CAVV` values were included in the transaction request to Authorize.Net.

Then you can expect to see an additional field with a cardholder authentication verification response code in the response from your payment gateway. This code lets you know whether the information got back to the issuer. If the issuer recognizes this data as matching whatever they recorded earlier in the transaction when the cardholder was authenticating, they will respond with a successful code in this field.

<!-- Link Definitions -->
[CardinalCommerce]: https://www.cardinalcommerce.com/
[Cardinal Consumer Authentication]: https://cardinaldocs.atlassian.net/wiki/spaces/CC/pages/196642/Consumer+Authentication#ConsumerAuthentication-CardinalConsumerAuthentication
[Cardinal Cruise Standard]: https://cardinaldocs.atlassian.net/wiki/spaces/CC/pages/7929857/Cardinal+Cruise+Standard
[list of compatible payment gateways]: https://www.cardinalcommerce.com/partners/gateways
[module]: https://glossary.magento.com/module
[payment method]: https://glossary.magento.com/payment-method
[app\code\AuthorizenetCardinal\Model\Checkout\ConfigProvider.php]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/AuthorizenetCardinal/Model/Checkout/ConfigProvider.php
[JWT]: https://en.wikipedia.org/wiki/JSON_Web_Token
[API Reference]: https://cardinaldocs.atlassian.net/wiki/spaces/CC/pages/98315/Response+Objects
[\Magento\AuthorizenetCardinal\Gateway\Request\Authorize3DSecureBuilder]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/AuthorizenetCardinal/Gateway/Request/Authorize3DSecureBuilder.php
