---
layout: default
group: payments-integrations
subgroup: vault
title: Customer Stored Payments
menu_title: Customer Stored Payments
menu_order: 10
version: 2.1
github_link: payments-integrations/vault/customer-stored-payments.md
---

<h2 id="vault_customer_stored_payments">Customer Stored Payments</h2>

This topic provides information how to display stored tokens in the customer account. Also, customer should have
an ability to remove stored tokens.

At first, you need to create custom _Renderer_, which provides functionality for displaying token details like: credit card icon,
type of credit card, expiration date, etc., _Renderer_ implementation depends on type of token (card, account), but both renders
implement the common abstractions [TokenRendererInterface]({{site.mage2100url}}app/code/Magento/Vault/Block/TokenRendererInterface.php)
and [IconInterface]({{site.mage2100url}}app/code/Magento/Vault/BLock/Customer/IconInterface.php):

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

If you Vault integration uses card token type - you need to extend [AbstractCardRenderer]({{site.mage2100url}}app/code/Magento/Vault/Block/AbstractCardRenderer.php),
in other case - [AbstractTokenRenderer]({{site.mage2100url}}app/code/Magento/Vault/Block/AbstractTokenRenderer.php).

The `AbstractCardRenderer` implements [CardRendererInterface]({{site.mage2100url}}app/code/Magento/Vault/Block/CardRendererInterface.php) and
has additional method to get card details.

The simple implementation can look like this:

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

Now, need to create layout and specify custom token renderer for layout, which will provide token details displaying,
for example [vault_cards_listaction.xml]({{site.mage2100url}}app/code/Magento/Braintree/view/frontend/layout/vault_cards_listaction.xml):

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

As you can see, in this case default `credit_card.phtml` view is used from _Vault_ module, which already have markup to display token and
actions to remove stored token, but you always can specify your own view.

The next topic, will describe how to use stored tokens to place order from Admin panel.