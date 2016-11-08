---
layout: default
group: payments-integrations
subgroup: vault
title: Admin Integration
menu_title: Admin Integration
menu_order: 15
version: 2.1
github_link: payments-integrations/vault/admin-integration.md
---

<h2 id="vault_admin_integration">Integration for Admin panel</h2>

The Vault integration for Admin panel is similar to Storefront.

At first, need to implement `TokenUiComponentProviderInterface` similar to [Token UI Component Provider]({{site.gdeurl21/payments-integrations/vault/token-ui-component-provider.html#vault_token_ui_component_provider}}),
but in that case your js component hasn't default Vault implementation and you need to implement all logic for validation and place order.

In the most cases, will be enough to implement methods to get payment code and set _Public Hash_ and this component might looks like:

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

This component will set _Public Hash_ to hidden input when user select _Payment Token_ as active.

Also, you need create view for displaying token details and specify the created view in the _Config Provider_ as template:

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

The billing form block for admin layout (`Module_Name/view/adminhtml/layout/sales_order_create_index.xml`) can look like this:

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

You just need to specify payment method code and path for template, this configuration allow to render Vault payments by Vault module and create all depending js components.

Now, you can use Vault in Admin panel as payment method.

> If you have specific request builders, response handlers, etc (for example, 3D Secure should not be available in the Admin panel),
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

> This configuration will works only for admin area.