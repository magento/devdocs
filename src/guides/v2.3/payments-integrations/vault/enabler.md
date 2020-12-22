---
group: payments-integrations
subgroup: C_vault
title: Enable vault
menu_title: Enable vault
menu_order: 5
functional_areas:
  - Integration
---

Store customers must have the ability to enable and disable credit cards details storing.
Magento out-of-the-box provides mechanisms for adding this ability, but you still need to add modifications in your [payment method](https://glossary.magento.com/payment-method) implementation.

These modifications are the following:

1. Adding vault enabling controls.
1. Modifying the payment component (updating of the `additional_data` property must be added).
1. Creating a request data builder.

The following paragraphs describe these points in details.

## Add vault enabling controls

Add the vault enabling controls to the payment form. In the following example, a checkbox bound to the Vault enabler is added.

Example ([Magento/Braintree/view/frontend/web/template/payment/form.html]({{ site.mage2bloburl }}/2.3/app/code/Magento/Braintree/view/frontend/web/template/payment/form.html)):

```html
<form id="co-transparent-form-braintree" class="form" data-bind="" method="post" action="#" novalidate="novalidate">
    <fieldset data-bind="attr: {class: 'fieldset payment items ccard' + getCode(), id: 'payment_form_' + getCode()}">
        <legend class="legend">
            <span><!-- ko i18n: 'Credit Card Information'--><!-- /ko --></span>
        </legend>
        ...
        <!-- ko if: (isVaultEnabled())-->
        <div class="field choice">
            <input type="checkbox"
                name="vault[is_enabled]"
                class="checkbox"
                data-bind="attr: {'id': getCode() + '_enable_vault'}, checked: vaultEnabler.isActivePaymentTokenEnabler"/>
            <label class="label" data-bind="attr: {'for': getCode() + '_enable_vault'}">
                <span><!-- ko i18n: 'Save for later use.'--><!-- /ko --></span>
            </label>
        </div>
        <!-- /ko -->
        ...
    </fieldset>
    ...
</form>
```

## Modifying the payment component

The payment component must process the state of the vault-enabling control and update payment `additional_data` before it is sent to the [backend](https://glossary.magento.com/backend).

Magento has a default vault enabler [UI component](https://glossary.magento.com/ui-component) (`Magento_Vault/js/view/payment/vault-enabler`). In the payment component, you just need to call its `visitAdditionalData` to update the `additional_data` property. The rest is done by the [`\Magento\Vault\Observer\VaultEnableAssigner`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Vault/Observer/VaultEnableAssigner.php) observer.

Example: [the Braintree payment UI component]({{ site.mage2bloburl }}/2.3/app/code/Magento/Braintree/view/frontend/web/js/view/payment/method-renderer/cc-form.js)

```javascript
define([
    ...
    'Magento_Payment/js/view/payment/cc-form',
    'Magento_Vault/js/view/payment/vault-enabler'
], function (... Component, VaultEnabler) {
    'use strict';

    return Component.extend({

        /**
         * @returns {exports.initialize}
         */
        initialize: function () {
            var self = this;

            self._super();
            this.vaultEnabler = new VaultEnabler();
            this.vaultEnabler.setPaymentCode(this.getVaultCode());
            ...
            return self;
        },

        /**
         * @returns {Object}
         */
        getData: function () {
            var data = {
                'method': this.getCode(),
                'additional_data': {
                    'payment_method_nonce': this.paymentPayload.nonce
                }
            };

            data['additional_data'] = _.extend(data['additional_data'], this.additionalData);
            this.vaultEnabler.visitAdditionalData(data);

            return data;
        },

        /**
         * @returns {Boolean}
         */
        isVaultEnabled: function () {
            return this.vaultEnabler.isVaultEnabled();
        },


        /**
         * Returns vault code.
         *
         * @returns {String}
         */
        getVaultCode: function () {
            return window.checkoutConfig.payment[this.getCode()].ccVaultCode;
        },
    });
});
```

## Add request data builder

Now when we have information about enabling or disabling vault, the payment must send it to the payment processor. This is done in the [request builder]({{ page.baseurl }}/payments-integrations/payment-gateway/request-builder.html).

You can create a new request builder, or update the existing request builder of the payment method.

In the Braintree request builder, to pass the data, we set `storeInVaultOnSuccess` in transaction request:

```php
class VaultDataBuilder implements BuilderInterface
{
    /**
     * Additional options in request to gateway
     */
    const OPTIONS = 'options';

    /**
     * The option that determines whether the payment method associated with
     * the successful transaction should be stored in the Vault.
     */
    const STORE_IN_VAULT_ON_SUCCESS = 'storeInVaultOnSuccess';

    /**
     * @inheritdoc
     */
    public function build(array $buildSubject)
    {
        return [
            self::OPTIONS => [
                self::STORE_IN_VAULT_ON_SUCCESS => true
            ]
        ];
    }
}
```

The builder must be added to the payment authorize request in the DI configuration.
Example from the Braintree `di.xml`:

```xml
<virtualType name="BraintreeAuthorizeRequest" type="Magento\Payment\Gateway\Request\BuilderComposite">
    <arguments>
        <argument name="builders" xsi:type="array">
            ...
            <item name="vault" xsi:type="string">Magento\Braintree\Gateway\Request\VaultDataBuilder</item>
        </argument>
    </arguments>
</virtualType>
```

## What's next

[Storing and processing the payment related data]({{ page.baseurl }}/payments-integrations/vault/payment-token.html)
