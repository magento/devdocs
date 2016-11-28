---
layout: default
group: payments-integrations
subgroup: vault
title: Vault Enabler
menu_title: Vault Enabler
menu_order: 5
version: 2.1
github_link: payments-integrations/vault/enabler.md
---

## Vault Enabler

Now, our customers should have an ability to enable credit cards details storing.
Magento already has some mechanisms to provide this ability but we need to perform some modifications in our payment.

### Checkbox on the payment form

At, first we need to update our payment form and Vault enabler to it, for example, we already have form with credit card details
([Magento/Braintree/view/frontend/web/template/payment/form.html]({{{{site.mage2100url}}}}app/code/Magento/Braintree/view/frontend/web/template/payment/form.html)):

{% highlight html %}
<form id="co-transparent-form-braintree" class="form" data-bind="" method="post" action="#" novalidate="novalidate">
    <fieldset data-bind="attr: {class: 'fieldset payment items' + getCode(), id: 'payment_form_' + getCode()}">
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
{% endhighlight %}

As you can see, where are specified few methods and properties `isVaultEnabled()` and `vaultEnabler.isActivePaymentTokenEnabler`.
What how looks [payment UI component]({{{{site.mage2100url}}}}app/code/Magento/Braintree/view/frontend/web/js/payment/method-renderer/hosted-fields.js):

{% highlight javascript %}
define([
    ...
    'Magento_Braintree/js/view/payment/method-renderer/cc-form',
    'Magento_Vault/js/view/payment/vault-enabler'
], function (... Component, VaultEnabler) {
    'use strict';

    return Component.extend({

        /**
         * @returns {exports.initialize}
         */
        initialize: function () {
            this._super();

            ...
            this.vaultEnabler = new VaultEnabler();
            this.vaultEnabler.setPaymentCode(this.getVaultCode());

            return this;
        },

        /**
         * @returns {Object}
         */
        getData: function () {
            var data = this._super();

            this.vaultEnabler.visitAdditionalData(data);

            return data;
        },

        /**
         * @returns {Bool}
         */
        isVaultEnabled: function () {
            return this.vaultEnabler.isVaultEnabled();
        },

        /**
         * @returns {String}
         */
        getVaultCode: function () {
            return window.checkoutConfig.payment[this.getCode()].vaultCode;
        }
    });
});
{% endhighlight %}

Magento has Vault enabler UI component (`Magento_Vault/js/view/payment/vault-enabler`) and in the payment component just need to call `visitAdditionalData` to update additional_data property.

All rest will do `\Magento\Vault\Observer\VaultEnableAssigner` observer:

{% highlight php startinline=1 %}
public function execute(\Magento\Framework\Event\Observer $observer)
{
    $data = $this->readDataArgument($observer);
    
    $additionalData = $data->getData(PaymentInterface::KEY_ADDITIONAL_DATA);

    if (!is_array($additionalData)) {
        return;
    }

    if (isset($additionalData[VaultConfigProvider::IS_ACTIVE_CODE])) {
        $payment = $this->readPaymentModelArgument($observer);
        $payment->setAdditionalInformation(
            VaultConfigProvider::IS_ACTIVE_CODE,
            filter_var($additionalData[VaultConfigProvider::IS_ACTIVE_CODE], FILTER_VALIDATE_BOOLEAN)
        );
    }
}
{% endhighlight %}

### Request data builder

Now, customers are allowed to enable _Vault_, but also payment should send this details to a payment processor.
In our case we just set `storeInVaultOnSuccess` in transaction request:

{% highlight php startinline=1 %}
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
{% endhighlight %}

And add this builder to payment authorize request:

{% highlight xml %}
<virtualType name="BraintreeAuthorizeRequest" type="Magento\Payment\Gateway\Request\BuilderComposite">
    <arguments>
        <argument name="builders" xsi:type="array">
            ...
            <item name="vault" xsi:type="string">Magento\Braintree\Gateway\Request\VaultDataBuilder</item>
        </argument>
    </arguments>
</virtualType>
{% endhighlight %}

Now, payment allows enabling _Vault_ and send specific options to a payment processor,
the next topic describes how payment implementation should process a response from payment processor and store available card details.