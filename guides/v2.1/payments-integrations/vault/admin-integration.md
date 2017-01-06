---
layout: default
group: payments-integrations
subgroup: C_vault
title: Vault implementation for Admin
menu_title: Vault implementation for Admin
menu_order: 25
version: 2.1
github_link: payments-integrations/vault/admin-integration.md
---

To be able to use vault in Admin order creation, you need to take at least the following steps:

1. Create a token component provider and specify it in the `<your_module_dir>/etc/di.xml`. 
2. Create a custom vault JS component and specify it in the component provider. 
3. Create a `.phtml` template, specify it in the component provider and the corresponding layout file.

There are more details about these steps in the following sections. 

## Component provider {#provider_admin}

[Similar to the store front vault implementation]({{page.baseurl}}payments-integrations/vault/token-ui-component-provider.html#token_provider), create a token component provider and specify it in the `di.xml`. The component provider must implement the [`TokenUiComponentProviderInterface`]({{site.mage2100url}}app/code/Magento/Vault/Model/Ui/TokenUiComponentProviderInterface.php) interface.


Following is an example of a component provider for Admin:

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

## Vault JS component

There is no default component implementation for the Admin, so your component must implement all logic for validation and order placing.  

In the most cases, it is enough to implement getting payment code and setting public hash. This implementation might look like following:

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

This component will set public hash to a hidden input, when a user sets payment token as active.

## Template

Create a `.phtml` template for displaying token details and specify it in the [component provider](#provider_admin). 

For reference, view the Magento default Vault template for Admin: [app/code/Magento/Vault/view/adminhtml/templates/form/vault.phtml]({{site.mage2100url}}app/code/Magento/Vault/view/adminhtml/templates/form/vault.phtml).

In the billing form block for Admin layout (`%module_dir%/view/adminhtml/layout/sales_order_create_index.xml`) 
specify the payment method code and path to the template. 

Following is an example of such layout:

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

According to this configuration the Magento_Vault module will render vault payments and all depending JS components will be created.

## Specific vault configuration for Admin
You might have specific request builders, response handlers or other entities for the Admin panel. For example, in your implementation 3D Secure might not be available in Admin. In this case, you need to create corresponding virtual types for the `adminhtml` [area]({{page.baseurl}}architecture/archi_perspectives/components/modules/mod_and_areas.html) in `%module_dir%/etc/adminhtml/di.xml`. 

Example from the `app/code/Magento/Braintree/etc/adminhtml/di.xml`:

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
For more information about area-specific configuration see the [Configure payment method by area]({{page.baseurl}}payments-integrations/base-integration/admin-integration.html) topic.