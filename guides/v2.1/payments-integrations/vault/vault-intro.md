---
layout: default
group: payments-integrations
subgroup: C_vault
title: Adding vault integration
menu_title: Adding vault integration
menu_order: 10
menu_node: parent
version: 2.1
github_link: payments-integrations/vault/vault-intro.md
---

Vault as a payment method provides store customers with ability to use the previously saved credit card information for checkout. This information is stored safely on the side of trusted payments gateways (Braintree, PayPal).  

Magento is a [PCI compliant](https://www.pcisecuritystandards.org/) application, thus it does not store card details like: number,
CVV, expiration date or any other private data for Vault payments only data available from payment providers.

The [Magento Vault]({{site.mage2100url}}app/code/Magento/Vault) is implemented using the Magento [payment gateway]({{page.baseurl}}payments-integrations/payment-gateway/payment-gateway-intro.html). It is used in the out-of-the-box vault implementation for the Braintree payment method. Third party developers can use it to add vault to their custom payment provider integration.

The following diagram shows a simplified interaction flow between Magento sales management, vault, payment integration and external payment service provider.

![Vault Interaction]({{site.baseurl}}common/images/payments-integrations/vault_interaction_flow.png)

The flow is similar to usual Magento [payment gateway interaction flow]({{page.baseurl}}payment-integrations/payment-gateway/payment-gateway-intro.html). 

The main difference is that when vault is used, it defines what command is required and when it must be called.

## Adding vault: general steps

Magento vault implementation provides that vault is available as a separate payment method during order creation (storefront or admin). But technically it is tightly related to the corresponding payment provider integration.   
You do not need to create a new module for vault implementation. All required configuration and entities are added in the module of the payment provider integration. 

The topics of this chapter describe how to add the vault functionality to a payment method (the payment method must be implemented using Magento payment gateway):

1. [Add vault to module dependencies]({{page.baseurl}}payments-integrations/vault/module-configuration.html).
2. [Configure vault general parameters]({{page.baseurl}}payments-integrations/vault/vault-payment-configuration.html).
3. [Add vault and payment methods entities using dependency injection configuration]({{page.baseurl}}payments-integrations/vault/vault-di.html).
4. [Implement the ability for customers to choose whether to use vault]({{page.baseurl}}payments-integrations/vault/enabler.html).
5. [Storing and processing the payment related data]({{page.baseurl}}payments-integrations/vault/payment-token.html).
6. [Adding and using  UI _Vault component to place orders on the storefront]({{page.baseurl}}payments-integrations/vault/token-ui-component-provider.html).
7. [Display stored tokens for customer and process their deleting]({{page.baseurl}}payments-integrations/vault/customer-stored-payments.html).
8. [Using stored tokens to place order from Admin panel]({{page.baseurl}}payments-integrations/vault/admin-integration.html).

