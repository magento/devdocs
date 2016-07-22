---
layout: default
group: payments-integrations
subgroup: p_whatis
title: What is an integration with Payment Gateway/Provider in Magento2
menu_title: Introduction
menu_node: parent
menu_order: 1
version: 2.0
github_link: payments-integrations/payments-integrations-whatis.md
redirect_from: /guides/v1.0/payments-integrations/payments-integrations-whatis.html
---

In this section you can find information about what Payment Gateway is from Magento perspective, it's consumers, and client customizations.

### Payment Gateway from Magento perspective
Basically integration provides an ability to put/create a transaction based on _Order_ details or perform available operations on existing _Transaction_.
Let's say we have a function _F_, which represents a Gateway operation, and transaction payload _p_, the operation can be represented as follows:
_F(p) = t_

Transaction payload in such case is specific to a concrete Gateway, and may encapsulate various data parts:

* Order items
* Shipping, Billing addresses
* Customer details
* Taxes
* Merchants Gateway API credentials
* Payment details

Following interface represents all requirements, defined above. Which allows us to define any domain-specific logic which may be executed before or after actual Gateway Command execution.
```php
<?php
namespace Magento\Payment\Gateway;

use Magento\Payment\Gateway\Command\CommandException;

/**
 * Interface CommandInterface
 * @package Magento\Payment\Gateway
 * @api
 */
interface CommandInterface
{
    /**
     * Executes command basing on business object
     *
     * @param array $commandSubject
     * @return null|Command\ResultInterface
     * @throws CommandException
     */
    public function execute(array $commandSubject);
}
```


### Integration service consumers
As Magento2 is a complex system containing various atomic modules, module bundles still exist to ease implementation of complex business processes.
One of such bundle contains next modules:

* Sales
    * Order Management System
    * Admin Checkout
* Checkout (Storefront)
* Quote
* Payment

Next topics will be focused on Payment module in scope of this bundle.


### Client customizations

Each module from the bundle above requires every Payment integration to provide components/interfaces/configuration for available extension points to build a fullstack e-commerce platform.


