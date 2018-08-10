---
group: payments-integrations
subgroup: C_vault
title: Token UI component provider
menu_title: Token UI component provider
menu_order: 15
version: 2.1
functional_areas:
  - Integration
---

This topic describes how to create custom vault payments UI components, that are used to  display stored tokens on {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} page and order placing using vault. 

## Token component provider {#token_provider}

The main logic for displaying tokens on checkout page is located in
[Vault TokensConfigProvider]({{ site.mage2100url }}app/code/Magento/Vault/Model/Ui/TokensConfigProvider.php). You just need to create a token component provider. It should implement the 
[TokenUiComponentProviderInterface]({{ site.mage2100url }}app/code/Magento/Vault/Model/Ui/TokenUiComponentProviderInterface.php) interface:

``` php?start_inline=1
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
```

The basic implementation of the token {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI component{% endglossarytooltip %} provider can be like following:

``` php?start_inline=1
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
```

This implementation allows to retrieve all available payment token details and specify the JS component for {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}.

Having created the component provider, you need to add it to the list of available vault config providers in `di.xml` - the DI configuration file. 

In the following example the `Magento\Braintree\Model\Ui\TokenUiComponentProvider` component provider is added to this list:

{% highlight xml %}
<type name="Magento\Vault\Model\Ui\TokensConfigProvider">
    <arguments>
        <argument name="tokenUiComponentProviders" xsi:type="array">
            <item name="braintree" xsi:type="object">Magento\Braintree\Model\Ui\TokenUiComponentProvider</item>
        </argument>
    </arguments>
</type>
{% endhighlight %}

## JavaScript component for vault 

In your custom module directory, create the component’s `.js` file. It must be located under the `<your_module_dir>/view/frontend/web/js/view/` directory.

The component should extend [vault.js]({{ site.mage2100url }}app/code/Magento/Vault/view/frontend/web/js/view/payment/method-renderer/vault.js):

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

## What's next

[Display stored tokens for customer and process their deleting]({{ page.baseurl }}/payments-integrations/vault/customer-stored-payments.html).
