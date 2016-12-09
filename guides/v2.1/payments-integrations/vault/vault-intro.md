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

The [Magento Vault]({{site.mage2100url}}app/code/Magento/Vault) is implemented using the Magento [payment gateway]({{page.baseurl}}payments-integrations/payment-gateway/payment-gateway-intro.html). It is used in the out of the box vault implementations (for the Braintree payment method) and can be used by third party developers for adding vaults to other default or custom payment methods.

The following diagram shows a simplified interaction flow between Magento sales management, vault, payment integration and external payment service provider.

![Vault Interaction]({{site.baseurl}}common/images/payments-integrations/vault_interaction_flow.png)

The flow is similar to usual Magento [payment gateway interaction flow]({{page.baseurl}}payment-integrations/payment-gateway/payment-gateway-intro.html). 

The main difference is that when Vault is used, it "decides" what command is required and when this command must be called.

The topics of this chapter describe how to add new Vault implementation to existing payment integration based on _Payment Gateway_:

 - [Vault Payment Configuration]({{site.gdeurl21}}payments-integrations/vault/configuration.html)
 - [Vault Enabler]({{site.gdeurl21}}payments-integrations/vault/enabler.html)
 - [Payment Token]({{site.gdeurl21}}payments-integrations/vault/payment-token.html)
 - [Token UI Component Provider]({{site.gdeurl21}}payments-integrations/vault/token-ui-component-provider.html)
 - [Customer Stored Payments]({{site.gdeurl21}}payments-integrations/vault/customer-stored-payments.html)
 - [Admin Integration]({{site.gdeurl21}}payments-integrations/vault/admin-integration.html)