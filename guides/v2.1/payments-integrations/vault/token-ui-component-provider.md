---
layout: default
group: payments-integrations
subgroup: vault
title: Token UI Component Provider
menu_title: Token UI Component Provider
menu_order: 5
version: 2.1
github_link: payments-integrations/vault/token-ui-component-provider.md
---

<h2 id="vault_token_ui_component_provider">Token UI Component Provider</h2>

This topic describes how to display stored tokens on the payment step on checkout page, how create
UI components for custom Vault payments and use it to place order from Storefront via Vault payment.

The main logic to display tokens on checkout page located in the
[Vault TokensConfigProvider]({{site.mage2100url}}app/code/Magento/Vault/Model/Ui/TokensConfigProvider.php) and you
just need to specify token component providers, which should implement 
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

The basic implementation of _Token Ui Component Provider_ can look like this:

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

This implementation allow to retrieve all available _Payment Token_ details and specify js component for Storefront.
Also, as you can see, where are no any details with _Gateway Token_, only _Public Hash_ is used and you can be sure what customer
_Gateway Token_ won't be shared.

After component provider creation need to add it to list of available _Vault_ config providers:

{% highlight xml %}
<type name="Magento\Vault\Model\Ui\TokensConfigProvider">
    <arguments>
        <argument name="tokenUiComponentProviders" xsi:type="array">
            <item name="braintree" xsi:type="object">Magento\Braintree\Model\Ui\TokenUiComponentProvider</item>
        </argument>
    </arguments>
</type>
{% endhighlight %}

Custom Vault js component should extend [vault.js]({{site.mage2100url}}app/code/Magento/Vault/view/frontend/web/js/view/payment/method-renderer/vault.js):

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

As you can remember, we already have implemented [`vault_authorize`]({{site.guideurl21}}payments-integrations/vault/configuration.html#commands)
command and Vault implementation is ready to process payment transactions.

A next topic will describe how to display stored tokens for customer and process their deleting.