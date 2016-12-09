---
layout: default
group: payments-integrations
subgroup: vault
title: Vault implementation for Admin
menu_title: Vault implementation for Admin
menu_order: 25
version: 2.1
github_link: payments-integrations/vault/admin-integration.md
---


To be able to use vault in Admin order creation, you first need to implement `TokenUiComponentProviderInterface`, similar to [Token UI Component Provider]({{site.gdeurl21/payments-integrations/vault/token-ui-component-provider.html#vault_token_ui_component_provider}}). But in that case your JS component has no default Vault implementation and you need to implement all logic for validation and order placement.

In the most cases, it is enough to implement getting payment code and setting Public Hash. This implementation might look like following:

{% highlight javascript %}
define([
    'jquery',
    'uiComponent'
], function ($, Class) {
    'use strict';

    return Class.extend({
        defaults: {
            $selector: null,
            selector: 'edit_form'
        },

        initObservable: function () {
            var self = this;

            self.$selector = $('#' + self.selector);
            this._super();

            this.initEventHandlers();

            return this;
        },

        getCode: function () {
            return this.code;
        },

        initEventHandlers: function () {
            $('#' + this.container).find('[name="payment[token_switcher]"]')
                .on('click', this.setPaymentDetails.bind(this));
        },

        setPaymentDetails: function () {
            this.$selector.find('[name="payment[public_hash]"]').val(this.publicHash);
        }
    });
});
{% endhighlight %}

This component will set Public Hash to a hidden input when a user selects Payment Token as active.

Next you need create a template for displaying token details and specify it in the Config Provider:

{% highlight php startinline=1 %}
class TokenUiComponentProvider implements TokenUiComponentProviderInterface
{
    /**
     * @inheritdoc
     */
    public function getComponentForToken(PaymentTokenInterface $paymentToken)
    {
        $data = json_decode($paymentToken->getTokenDetails() ?: '{}', true);
        $component = $this->componentFactory->create(
            [
                'config' => [
                    'code' => ConfigProvider::CC_VAULT_CODE,
                    'nonceUrl' => $this->getNonceRetrieveUrl(),
                    TokenUiComponentProviderInterface::COMPONENT_DETAILS => $data,
                    TokenUiComponentProviderInterface::COMPONENT_PUBLIC_HASH => $paymentToken->getPublicHash(),
                    'template' => 'Magento_Braintree::form/vault.phtml'
                ],
                'name' => Template::class
            ]
        );

        return $component;
    }
}
{% endhighlight %}

The billing form block for Admin layout (`Module_Name/view/adminhtml/layout/sales_order_create_index.xml`) might be like following:

{% highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="order_create_billing_form">
            <action method="setMethodFormTemplate">
                <argument name="method" xsi:type="string">braintree_cc_vault</argument>
                <argument name="template" xsi:type="string">Magento_Vault::form/vault.phtml</argument>
            </action>
        </referenceBlock>
    </body>
</page>
{% endhighlight %}

You just need to specify the payment method code and path for the template. This configuration allow to render Vault payments by Vault module and create all depending JS components.

This way you vault can be used in Admin order creation as payment method.

If you have specific request builders, response handlers, and so on (for example, 3D Secure should not be available in the Admin panel),
you need to create corresponds virtual types for adminhtml area in `Module_Name/etc/adminhtml/di.xml`. For example:

{% highlight xml %}
<virtualType name="BraintreeVaultAuthorizeRequest" type="Magento\Payment\Gateway\Request\BuilderComposite">
    <arguments>
        <argument name="builders" xsi:type="array">
            <item name="customer" xsi:type="string">Magento\Braintree\Gateway\Request\CustomerDataBuilder</item>
            <item name="payment" xsi:type="string">Magento\Braintree\Gateway\Request\PaymentDataBuilder</item>
            <item name="channel" xsi:type="string">Magento\Braintree\Gateway\Request\ChannelDataBuilder</item>
            <item name="address" xsi:type="string">Magento\Braintree\Gateway\Request\AddressDataBuilder</item>
            <item name="dynamic_descriptor" xsi:type="string">Magento\Braintree\Gateway\Request\DescriptorDataBuilder</item>
        </argument>
    </arguments>
</virtualType>
{% endhighlight %}

This configuration will be applied only in Admin panel.