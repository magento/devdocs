---
layout: default
group: payments-integrations
subgroup: integration
title: Payment method module configuration
menu_title: Payment method module configuration
menu_order: 1
version: 2.1
github_link: payments-integrations/base-integration/module-configuration.md
---

For the sake of compatibility, upgradability and easy maintenance, do not edit the default Magento code, add your customizations in a separate module.

You can use the [sample Magento_SamplePaymentGateway module](https://github.com/magento/magento2-samples/tree/master/sample-module-payment-gateway) files as basis for your custom module structure and files.

## Specify your module dependencies 

Your custom payment integration module must have at least the following dependencies:

- Magento_Sales module: to be able to get order details
- Magento_Payment module: to use the Magento payment provider gateway infrastructure
- Magento_Checkout module: to be able to add the new payment method to checkout. Though if you do not plan to use it on the storefront checkout, this dependency is not required. 


Specify these dependencies in your `composer.json` and `module.xml` files. 

### Composer.json

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

### module.xml

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





