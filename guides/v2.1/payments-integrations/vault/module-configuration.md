---
group: payments-integrations
subgroup: C_vault
title: Add vault to module dependencies
menu_title: Add vault to module dependencies
menu_order: 1
functional_areas:
  - Integration
---

You need to add dependencies on the Magento_Vault module in the payment method's `composer.json` and `module.xml` files.

## Example: adding Vault module dependencies for the Braintree payment method

`app/code/Magento/Braintree/composer.json`:

```json
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
```

`app/code/Magento/Braintree/etc/module.xml`:
```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Magento_Braintree" setup_version="2.0.0">
        <sequence>
            ...
            <module name="Magento_Vault"/>
            ...
        </sequence>
    </module>
</config>
```

## What's next

[Configure vault general parameters]({{ page.baseurl }}/payments-integrations/vault/vault-payment-configuration.html).
