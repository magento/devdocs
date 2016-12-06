---
layout: default
group: payments-integrations
subgroup: integration
title: Admin Integration
menu_title: Admin Integration
menu_order: 10
version: 2.1
github_link: payments-integrations/base-integration/admin-integration.md
---

## Payment integration for Admin panel

Payment integration for Admin panel is similar to Storefront integration and contain few additional steps:

 - Payment configuration
 - Blocks implementation
 - Block template
 - Specific DI settings
 
### Payment configuration

At, we need to update payment configuration file (`Braintree/etc/config.xml`):

{% highlight xml %}
<payment>
    <braintree>
        ...
        <can_use_internal>1</can_use_internal>
    </braintree>
</payment>
{% endhighlight %}

The `can_use_internal` option allows to display our payment method in Admin panel.

### formBlockType {#formBlockType}
As you can remember, we have specified [`formBlockType`]({{site.gdeurl21}}payments-integrations/base-integration/configuration.html#payment-method-facade)
argument for our payment facade. This block will be used to display payment form on billing form in Admin panel, in
most cases will be enough to use `\Magento\Payment\Block\Form\Cc`, but in our case we will use customized `\Magento\Braintree\Block\Form`:

Default \Magento\Payment\Block\Form\. You can specify it, or create a custom implementation extending it.

This method allows, to show only card types available for configured countries, in your payment methods you can use
it to any required customization.
{% highlight php startinline=1 %}
class Form extends Cc
{
    /**
     * Get list of available card types of order billing address country
     * @return array
     */
    public function getCcAvailableTypes()
    {
        $configuredCardTypes = $this->getConfiguredCardTypes();
        $countryId = $this->sessionQuote->getQuote()->getBillingAddress()->getCountryId();
        return $this->filterCardTypesForCountry($configuredCardTypes, $countryId);
    }

    /**
     * Get card types available for Braintree
     * @return array
     */
    private function getConfiguredCardTypes()
    {
        $types = $this->ccType->getCcTypeLabelMap();
        $configCardTypes = array_fill_keys($this->gatewayConfig->getAvailableCardTypes(), '');

        return array_intersect_key($types, $configCardTypes);
    }

    /**
     * Filter card types for specific country
     * @param array $configCardTypes
     * @param string $countryId
     * @return array
     */
    private function filterCardTypesForCountry(array $configCardTypes, $countryId)
    {
        $filtered = $configCardTypes;
        $countryCardTypes = $this->gatewayConfig->getCountryAvailableCardTypes($countryId);
        // filter card types only if specific card types are set for country
        ...

        return $filtered;
    }
}
{% endhighlight %}



Now, need to create template view (similar to [cc.phtml]({{site.mage2100url}}app/code/Magento/Braintree/view/adminhtml/templates/form/cc.phtml))
and add it to [billing form layout]({{site.mage2100url}}app/code/Magento/Braintree/view/adminhtml/layout/sales_order_create_index.xml):

<p class="q">do we need to name the file exactly like that?</p>
{% highlight xml %}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="order_create_billing_form">
            <action method="setMethodFormTemplate">
				<!-- your method code and template -->
                <argument name="method" xsi:type="string">braintree</argument>
                <argument name="template" xsi:type="string">Magento_Braintree::form/cc.phtml</argument>
            </action>
        </referenceBlock>
    </body>
</page>
{% endhighlight %}

All other customization depends on your payment integration, but some important thing. If your payment flow should be different for Storefront and Admin panel,
for example, on Storefront you integrated 3D Secure verification, but it should not be available in Admin panel,
you can use own DI configurations for different areas. As example, DI configuration for authorization request builder for 
[admin area]({{site.mage2100url}}app/code/Magento/Braintree/etc/adminhtml/di.xml):

{% highlight xml %}
<virtualType name="BraintreeAuthorizeRequest" type="Magento\Payment\Gateway\Request\BuilderComposite">
    <arguments>
        <argument name="builders" xsi:type="array">
            <item name="customer" xsi:type="string">Magento\Braintree\Gateway\Request\CustomerDataBuilder</item>
            <item name="payment" xsi:type="string">Magento\Braintree\Gateway\Request\PaymentDataBuilder</item>
            ...
        </argument>
    </arguments>
</virtualType>
{% endhighlight %}

With comparision to [payment global DI]({{site.mage2100url}}app/code/Magento/Braintree/etc/di.xml#L140), we do not
have 3D secure verification builder for Admin panel, but virtual type has the same name (object will be created according to context of area).
Similar to this example, you can specify any DI configuration for frontend area.