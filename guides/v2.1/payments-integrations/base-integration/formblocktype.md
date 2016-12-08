layout: default
group: payments-integrations
subgroup: integration
title: Payment info rendering in Admin checkout
menu_title: Payment info rendering in Admin checkout
menu_order: 10
version: 2.1
github_link: payments-integrations/base-integration/formblocktype.md
---

The payment information form rendering in Admin order creation is defined by the block class, its template and layout. 

`formBlockType` is one of the arguments you must [configure for the payment method facade]({{page.baseurl}}payments-integrations/base-integration/facade-configuration.md). 

This block is used to display payment form on billing form in Admin panel. In
most cases it is enough to use the `\Magento\Payment\Block\Form\Cc`.

## Example of custom formBlockType: Braintree payment method implementation

In the integration with the Braintree payment provider, we use the `\Magento\Braintree\Block\Form` class as `formBlockType`. It allows displaying only card types available for configured countries:
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


## Template

For creating a template for the payment information rendering class, you can use the default [cc.phtml]({{site.mage2100url}}app/code/Magento/Payment/view/adminhtml/templates/form/cc.phtml) as example.

Then add the the template to the billing form layout `sales_order_create_index.xml`.

The following example adds the Braintree-specific template [`app/code/Magento/Payment/view/adminhtml/templates/form/cc.phtml`]({{site.mage2100url}}app/code/Magento/Payment/view/adminhtml/templates/form/cc.phtml) to the [billing form layout in the Braintree module]({{site.mage2100url}}app/code/Magento/Braintree/view/adminhtml/layout/sales_order_create_index.xml).

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