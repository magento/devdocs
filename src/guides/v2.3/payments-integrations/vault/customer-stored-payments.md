---
group: payments-integrations
subgroup: C_vault
title: Display the stored information
menu_title: Display the stored information
menu_order: 20
functional_areas:
  - Integration
---

This topic describes how to display stored tokens in the customer account and give customers ability to remove the tokens.

## Token renderer

To implement the displaying functionality, create a token renderer. Its
implementation depends on token type (card or account). But both  types of renderers
implement the common [`TokenRendererInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Vault/Block/TokenRendererInterface.php)
and [`IconInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Vault/Block/Customer/IconInterface.php) interfaces.

If your vault integration uses card token type, then you need to extend [AbstractCardRenderer]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Vault/Block/AbstractCardRenderer.php). In other case extend [`AbstractTokenRenderer`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Vault/Block/AbstractTokenRenderer.php).

`AbstractCardRenderer` implements [CardRendererInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Vault/Block/CardRendererInterface.php) and
has additional method to get card details.

The simple card renderer implementation might be like following:

```php
class CardRenderer extends AbstractCardRenderer
{
    /**
     * Can render specified token
     *
     * @param PaymentTokenInterface $token
     * @return boolean
     */
    public function canRender(PaymentTokenInterface $token)
    {
        return $token->getPaymentMethodCode() === ConfigProvider::CODE;
    }

    /**
     * @return string
     */
    public function getNumberLast4Digits()
    {
        return $this->getTokenDetails()['maskedCC'];
    }

    /**
     * @return string
     */
    public function getExpDate()
    {
        return $this->getTokenDetails()['expirationDate'];
    }

    /**
     * @return string
     */
    public function getIconUrl()
    {
        return $this->getIconForType($this->getTokenDetails()['type'])['url'];
    }

    /**
     * @return int
     */
    public function getIconHeight()
    {
        return $this->getIconForType($this->getTokenDetails()['type'])['height'];
    }

    /**
     * @return int
     */
    public function getIconWidth()
    {
        return $this->getIconForType($this->getTokenDetails()['type'])['width'];
    }
}
```

## Layout and template

Next, you need to create the [layout](https://glossary.magento.com/layout) to be used for displaying token details. In this layout, specify the previously created token renderer.

Example ([vault_cards_listaction.xml]({{ site.mage2bloburl }}/2.3/app/code/Magento/Braintree/view/frontend/layout/vault_cards_listaction.xml)):

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            <referenceBlock name="vault.cards.list">
                <block class="Magento\Braintree\Block\Customer\CardRenderer" name="braintree.card.renderer" template="Magento_Vault::customer_account/credit_card.phtml"/>
            </referenceBlock>
        </referenceContainer>
    </body>
</page>
```

In this example the default `credit_card.phtml` vault template is used. But you can create and specify a custom template. Add the template in the [payment method](https://glossary.magento.com/payment-method) [module](https://glossary.magento.com/module).

## What's next
 [Using stored tokens to place order from Admin panel]({{ page.baseurl }}/payments-integrations/vault/admin-integration.html).