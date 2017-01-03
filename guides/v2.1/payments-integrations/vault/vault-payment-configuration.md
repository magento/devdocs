---
layout: default
group: payments-integrations
subgroup: C_vault
title: Vault payment configuration
menu_title: Vault payment configuration
menu_order: 2
version: 2.1
github_link: payments-integrations/vault/vault-payment-configuration.md
---

You need to configure the main parameters of the vault implementation in the `config.xml` file of your payment method module:

* `model` - instance of the vault payment implementation, [configured in `di.xml`]({{page.baseurl}}payments-integrations/vault/vault-di.html).
* `title` - vault payment method title; can be overwritten in the store configuration.

These parameters are specified in the section defined by the unique vault implementation code. They are the minimum required to create cault payment. All other payment settings are inherited from the payment provider integration. 

Additional configuration might be required depending on your implementation.

The following example is the `config.xml` file of the Braintree payment method: 

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
    <default>
        <payment>
            <braintree>
                <model>BraintreeFacade</model>
                ...
            </braintree>
            <braintree_cc_vault>
                <model>BraintreeCreditCardVaultFacade</model>
                <title>Stored Cards (Braintree)</title>
            </braintree_cc_vault>
        </payment>
    </default>
</config>
{% endhighlight %}

In this example `braintree_cc_vault` is the unique payment code of the vault implementation for Braintree.

## What's next

[Add vault and payment methods entities using dependency injection configuration]({{page.baseurl}}payments-integrations/vault/vault-di.html).
