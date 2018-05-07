---
layout: default
group: payments-integrations
subgroup: B_integration
title: Payment method module configuration
menu_title: Payment method module configuration
menu_order: 1
version: 2.1
github_link: payments-integrations/base-integration/module-configuration.md
functional_areas:
  - Integration
---

For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code; add your customizations in a separate {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}.

You can use the [sample Magento_SamplePaymentGateway module](https://github.com/magento/magento2-samples/tree/master/sample-module-payment-gateway) files as basis for your custom module structure and files.

## Specify your module dependencies 

Your custom payment integration module must have at least the following dependencies:

- Magento_Sales module: to be able to get order details
- Magento_Payment module: to use the Magento payment provider gateway infrastructure
- Magento_Checkout module: to be able to add the new {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %} to {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %}. If you do not plan to use it on the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} checkout, this dependency is not required. 


Specify these dependencies in your `composer.json` and `module.xml` files. 

### `composer.json`

In your `%Vendor_Module%/composer.json` file, specify the dependencies like in the following example:

{% highlight json %}
{
    ...
    "require": {
        ...
        "magento/module-payment": "100.1.*",
        "magento/module-checkout": "100.1.*",
        "magento/module-sales": "100.1.*",
        ...
    },
    ...

}
{% endhighlight %}

For details about composer.json see [The composer.json]({{page.baseurl}}/extension-dev-guide/build/composer-integration.html) file topic.

### `module.xml`

Add the same dependencies in `%Vendor_Module%/etc/module.xml` like in the following example:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Vendor_Module" setup_version="2.0.0">
        <sequence>
            ...
            <module name="Magento_Sales"/>
            <module name="Magento_Payment"/>
            <module name="Magento_Checkout"/>
            ...
        </sequence>
    </module>
</config>
{% endhighlight %}

Your payment method implementation might require adding more dependencies.

## What's next

[Payment method configuration]({{page.baseurl}}/payments-integrations/base-integration/payment-option-config.html).


