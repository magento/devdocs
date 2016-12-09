---
layout: default
group: payments-integrations
subgroup: vault
title: Adding Vault module dependencies
menu_title:  Adding Vault module dependencies
menu_order: 1
version: 2.1
github_link: payments-integrations/vault/module-configuration.md
---

You need to add dependencies on the Magento_Vault module in the payment method's `composer.json` and `module.xml` file.

### Example: adding Vault module dependencies for the Braintree payment method

`app/code/Magento/Braintree/composer.json`:

{% highlight json %}
{
    "name": "magento/module-braintree",
    ...
    "require": {
        ...
        "magento/module-vault": "100.1.*"
        ...
    }
    ...
}
{% endhighlight %}

`app/code/Magento/Braintree/etc/module.xml`:
{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Magento_Braintree" setup_version="2.0.0">
        <sequence>
            ...
            <module name="Magento_Vault"/>
            ...
        </sequence>
    </module>
</config>
{% endhighlight %}



