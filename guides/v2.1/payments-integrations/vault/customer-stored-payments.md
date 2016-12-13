---
layout: default
group: payments-integrations
subgroup: C_vault
title: Customer Stored Payments
menu_title: Customer Stored Payments
menu_order: 20
version: 2.1
github_link: payments-integrations/vault/customer-stored-payments.md
---

This topic describes how to display stored tokens in the customer account and give customers ability to remove stored tokens. 

First, you need to create a custom Renderer that provides functionality for displaying token details.
The Renderer implementation depends on token type (card or account), but both renders
implement the common interfaces [TokenRendererInterface]({{site.mage2100url}}app/code/Magento/Vault/Block/TokenRendererInterface.php)
and `IconInterface`.

{% highlight php startinline=1 %}
interface TokenRendererInterface
{
    /**
     * Can render specified token
     *
     * @param PaymentTokenInterface $token
     * @return boolean
     */
    public function canRender(PaymentTokenInterface $token);

    /**
     * Renders specified token
     *
     * @param PaymentTokenInterface $token
     * @return string
     */
    public function render(PaymentTokenInterface $token);

    /**
     * Get payment token
     * @return PaymentTokenInterface|null
     */
    public function getToken();
}

interface IconInterface
{
    /**
     * Get url to icon
     * @return string
     */
    public function getIconUrl();

    /**
     * Get width of icon
     * @return int
     */
    public function getIconHeight();

    /**
     * Get height of icon
     * @return int
     */
    public function getIconWidth();
}
{% endhighlight %}

If you Vault integration uses card token type, then you need to extend [AbstractCardRenderer]({{site.mage2100url}}app/code/Magento/Vault/Block/AbstractCardRenderer.php). In other case extend `AbstractTokenRenderer`.

`AbstractCardRenderer` implements [CardRendererInterface]({{site.mage2100url}}app/code/Magento/Vault/Block/CardRendererInterface.php) and
has additional method to get card details.

The simple implementation might be like following:

{% highlight php startinline=1 %}
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
{% endhighlight %}

Next, you need to create the layout to be used for displaying token details. You have to specify the token renderer in this layout.

Example ([vault_cards_listaction.xml]({{site.mage2100url}}app/code/Magento/Braintree/view/frontend/layout/vault_cards_listaction.xml)):

{% highlight xml %}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            <referenceBlock name="vault.cards.list">
                <block class="Magento\Braintree\Block\Customer\CardRenderer" name="braintree.card.renderer" template="Magento_Vault::customer_account/credit_card.phtml"/>
            </referenceBlock>
        </referenceContainer>
    </body>
</page>
{% endhighlight %}

In this example the default vault template, `credit_card.phtml`, is used. But you can create and specify a custom template. 

