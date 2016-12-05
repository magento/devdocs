---
layout: default
group: payments-integrations
subgroup: vault
title: Vault Integration in Magento2
menu_title: Vault Integration
menu_order: 10
menu_node: parent
version: 2.1
github_link: payments-integrations/vault/vault-intro.md
---

A vault for payment methods is a mechanism providing ability to store customer credit cards information on the trusted payments gateways (Braintree, PayPal) instead of storing them on your server.

Magento is a [PCI compliant](https://www.pcisecuritystandards.org/) application, thus it does not store card details like: number,
CVV, expiration date or any other private data for Vault payments only data available from payment providers.

<p class="q">what does it mean "for vault payments"?</p>

This chapter describes how to add Vault functionality to an existing payment method.

The main features are:

* Configurable
* Easy to add Vault implementation for existing payment method
* Customizable
* Allow to store credit card details without sensitive data
* Each payment method can have own Vault (if payment processor supports cards storing)

The [Magento Vault]({{site.mage2100url}}app/code/Magento/Vault) is implemented using the [Payment Gateway]({{site.gdeurl}}payments-integrations/bk-payments-integrations.html) and
can be easily configured or extended in the same way as payment method based on the _Payment Gateway_.
If you already have worked with _Magento Payment Gateway_, you would easily understand common principles and how to use
it in your custom payment integrations.

Next diagram shows main Vault interaction flow and how it interacts with _Magento Sales Management_ and existing payment integration:
![Vault Interaction]({{site.baseurl}}common/images/payments-integrations/vault_interaction_flow.png)

As you can see, this diagram very similar to [Payment Gateway interaction flow]({{site.gdeurl21}}payment-integrations/payment-gateway/payment-gateway-intro.html), the main difference
is now Vault chooses needed command and when calls this command from _Payment Gateway_ implementation.

The next topics will be focused on the Vault payment configuration, usage, customization and will describe how to add new Vault 
implementation to existing payment integration based on _Payment Gateway_:

 - [Vault Payment Configuration]({{site.gdeurl21}}payments-integrations/vault/configuration.html)
 - [Vault Enabler]({{site.gdeurl21}}payments-integrations/vault/enabler.html)
 - [Payment Token]({{site.gdeurl21}}payments-integrations/vault/payment-token.html)
 - [Token UI Component Provider]({{site.gdeurl21}}payments-integrations/vault/token-ui-component-provider.html)
 - [Customer Stored Payments]({{site.gdeurl21}}payments-integrations/vault/customer-stored-payments.html)
 - [Admin Integration]({{site.gdeurl21}}payments-integrations/vault/admin-integration.html)