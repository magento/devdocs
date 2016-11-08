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

In this section you can find information about what is Vault and how to integrate it to existing payments methods.

The Vault provides mechanism to store customer credit cards on the trusted payments gateways (Braintree, PayPal) instead own servers.
This way is more secure and allow to save by store credit card details without any customer sensitive data.

The main features are:

* Configurable
* Easy to add Vaulting for existing payment method
* Customizable
* Allow to store credit card details without sensitive data

The [Magento Vault]({{site.mage2100url}}app/code/Magento/Vault) is implemented using the [Payment Gateway]({{site.gdeurl}}payments-integrations/bk-payments-integrations.html) and
can be easily configured or extended in the same way as payment method based on the _Payment Gateway_.

The next topics will be focused on the Vault payment configuration, usage and customization:

 - [Vault Payment Configuration]({{site.gdeurl21}}payments-integrations/vault/configuration.html)
 - [Token UI Component Provider]({{site.gdeurl21}}payments-integrations/vault/token-ui-component-provider.html)
 - [Customer Stored Payments]({{site.gdeurl21}}payments-integrations/vault/customer-stored-payments.html)
 - [Admin Integration]({{site.gdeurl21}}payments-integrations/vault/admin-integration.html)