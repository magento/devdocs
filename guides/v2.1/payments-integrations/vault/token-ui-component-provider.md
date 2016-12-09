---
layout: default
group: payments-integrations
subgroup: vault
title: Token UI Component Provider
menu_title: Token UI Component Provider
menu_order: 15
version: 2.1
github_link: payments-integrations/vault/token-ui-component-provider.md
---


This topic describes how to display stored tokens on the payment step on checkout page, how to create UI components for custom Vault payments, and how to use it to place order from storefront using Vault.

The main logic for displaying tokens on checkout page is located in
[Vault TokensConfigProvider]({{site.mage2100url}}app/code/Magento/Vault/Model/Ui/TokensConfigProvider.php). You just need to specify token component providers. They should implement the 
[TokenUiComponentProviderInterface]({{site.mage2100url}}app/code/Magento/Vault/Model/Ui/TokenUiComponentProviderInterface.php) interface:

{% highlight php startinline=1 %}
interface TokenUiComponentProviderInterface
{
    const COMPONENT_DETAILS = 'details';
    const COMPONENT_PUBLIC_HASH = 'publicHash';

    /**
     * @param PaymentTokenInterface $paymentToken
     * @return TokenUiComponentInterface
     */
    public function getComponentForToken(PaymentTokenInterface $paymentToken);
}
{% endhighlight %}

The basic implementation of Token UI component provider can be like following:

{% highlight php startinline=1 %}
class TokenUiComponentProvider implements TokenUiComponentProviderInterface
{
    /**
     * Get UI component for token
     * @param PaymentTokenInterface $paymentToken
     * @return TokenUiComponentInterface
     */
    public function getComponentForToken(PaymentTokenInterface $paymentToken)
    {
        $jsonDetails = json_decode($paymentToken->getTokenDetails() ?: '{}', true);
        $component = $this->componentFactory->create(
            [
                'config' => [
                    'code' => ConfigProvider::CC_VAULT_CODE,
                    TokenUiComponentProviderInterface::COMPONENT_DETAILS => $jsonDetails,
                    TokenUiComponentProviderInterface::COMPONENT_PUBLIC_HASH => $paymentToken->getPublicHash()
                ],
                'name' => 'Magento_Braintree/js/view/payment/method-renderer/vault'
            ]
        );

        return $component;
    }
}
{% endhighlight %}

This implementation allows to retrieve all available Payment Token details and specify the JS component for Storefront.

Having created the component provider, you need to add it to the list of available Vault config providers:

{% highlight xml %}
<type name="Magento\Vault\Model\Ui\TokensConfigProvider">
    <arguments>
        <argument name="tokenUiComponentProviders" xsi:type="array">
            <item name="braintree" xsi:type="object">Magento\Braintree\Model\Ui\TokenUiComponentProvider</item>
        </argument>
    </arguments>
</type>
{% endhighlight %}

Custom Vault JS component should extend [vault.js]({{site.mage2100url}}app/code/Magento/Vault/view/frontend/web/js/view/payment/method-renderer/vault.js):

{% highlight javascript %}
define([
    'Magento_Vault/js/view/payment/method-renderer/vault',
], function (VaultComponent) {
    'use strict';

    return VaultComponent.extend({
        defaults: {
            template: 'Magento_Vault/payment/form'
        }
        ...
    });
});
{% endhighlight %}


