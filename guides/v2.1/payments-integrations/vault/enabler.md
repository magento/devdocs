---
layout: default
group: payments-integrations
subgroup: C_vault
title: Enable vault 
menu_title: Enable vault 
menu_order: 5
version: 2.1
github_link: payments-integrations/vault/enabler.md
---

Store customers must have the ability to enable and disable credit cards details storing.
Magento out-of-the-box provides mechanisms for adding this ability, but your still need to add modifications in your payment method implementation.

## Checkbox on the payment form

First, add the vault enabling controls to the payment form.

Example ([Magento/Braintree/view/frontend/web/template/payment/form.html]({{site.mage2100url}}app/code/Magento/Braintree/view/frontend/web/template/payment/form.html)):

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


[The payment UI component]({{site.mage2100url}}app/code/Magento/Braintree/view/frontend/web/js/view/payment/method-renderer/hosted-fields.js):

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

Magento has a default vault enabler UI component (`Magento_Vault/js/view/payment/vault-enabler`). In the payment component, you just need to call `visitAdditionalData` to update the `additional_data` property.

The rest is done by the `\Magento\Vault\Observer\VaultEnableAssigner` observer:

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

## Add request data builder

Now when we have information about enabling or disabling vault, the payment must send these details to the payment processor. This is done in the [request builder]({{page.baseurl}}payments-integrations/payment-gateway/request-builder.html). 

In the Braintree vault implementation in the request builder, to pass the data, we set `storeInVaultOnSuccess` in transaction request:

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

The builder must be added to the payment authorize request in the DI configuration. 
Example from the Braintree `di.xml`:

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

## What's next

[Storing and processing the payment related data]({{page.baseurl}}payments-integrations/vault/payment-token.html)


