---
group: payments-integrations
subgroup: C_vault
title: Adding vault integration
menu_title: Adding vault integration
menu_order: 10
menu_node: parent
functional_areas:
  - Integration
---

Vault as a [payment method](https://glossary.magento.com/payment-method) provides store customers with ability to use the previously saved credit card information for [checkout](https://glossary.magento.com/checkout). This information is stored safely on the side of trusted payments gateways (Braintree, PayPal). Not storing the sensitive credit card information is one of the [PCI compliance](https://www.pcisecuritystandards.org/)  requirements.

The [Magento Vault]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Vault) is implemented using the Magento [payment gateway]({{ page.baseurl }}/payments-integrations/payment-gateway/payment-gateway-intro.html). It is used in the out-of-the-box vault implementation for the Braintree payment method. Third party developers can use it to add vault to their custom payment provider integration.

The following diagram shows a simplified interaction flow between Magento sales management, vault, payment integration and external payment service provider.

![Vault Interaction]({{ site.baseurl }}/common/images/payments-integrations/vault_interaction_flow1.png)

The flow is similar to usual Magento [payment gateway interaction flow]({{ page.baseurl }}/payments-integrations/payment-gateway/payment-gateway-intro.html).

The main difference is that when vault is used, it defines what command is required and when it must be called.

## Adding vault: general steps

Magento vault implementation provides that vault is available as a separate payment method during order creation (storefront or admin). But technically it is tightly related to the corresponding payment provider integration.
You do not need to create a new [module](https://glossary.magento.com/module) for vault implementation. All required configuration and entities are added to the module of the payment provider integration.

The topics of this chapter describe how to add the vault functionality to a payment method (the payment method must be implemented using Magento payment gateway):

1. [Add vault to module dependencies]({{ page.baseurl }}/payments-integrations/vault/module-configuration.html).
1. [Configure vault general parameters]({{ page.baseurl }}/payments-integrations/vault/vault-payment-configuration.html).
1. [Add vault and payment methods entities using dependency injection configuration]({{ page.baseurl }}/payments-integrations/vault/vault-di.html).
1. [Implement the ability for customers to choose whether to use vault]({{ page.baseurl }}/payments-integrations/vault/enabler.html).
1. [Storing and processing the payment related data]({{ page.baseurl }}/payments-integrations/vault/payment-token.html).
1. [Adding and using  UI_Vault component to place orders on the storefront]({{ page.baseurl }}/payments-integrations/vault/token-ui-component-provider.html).
1. [Display stored tokens for customer and process their deleting]({{ page.baseurl }}/payments-integrations/vault/customer-stored-payments.html).
1. [Using stored tokens to place an order from Admin panel]({{ page.baseurl }}/payments-integrations/vault/admin-integration.html).
