---
layout: default
group: payments-integrations
subgroup: p_whatis
title: What is an integration with Payment Gateway/Provider in Magento
menu_title: Introduction
menu_node: parent
menu_order: 1
version: 2.0
github_link: payments-integrations/payments-integrations-whatis.md
redirect_from: /guides/v1.0/payments-integrations/payments-integrations-whatis.html
---

##  {{page.menu_title}}
{:.no_toc}

## What's in this topic
This topic describes what a payment gateway is from Magento perspective, its consumers, and client customizations.


### Payment Gateway from Magento perspective

In general the _Payment Gateway_ it is a set of components (commands, builders, validators, handlers, etc.) which provide an ability to put/create transactions
based on _Order_ details or perform available operations on existing _Transaction_.

Transaction payload in such case is specific to a concrete Gateway, and may encapsulate various data parts:

<p class="q">Do we need this info about payload at all?</p>

* Order items
* Shipping, Billing addresses
* Customer details
* Taxes
* Merchants Gateway API credentials
* Payment details

Following interface represents all requirements, defined above. Which allows us to define any domain-specific logic which may be executed before or after actual _Gateway Command_ execution.

<p class="q">What is the nature of Gateway Command? Is it a php method? A cli command</p>

{% highlight php startinline=1 %}
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
{% endhighlight %}


<p class="q">Do we need this code here?
</p>
<p class="q">So to sum up, what is a payment gateway from magento perspective?</p>

<p class="q">Is a "payment gateway" a synonym of "integration"?</p>

### Integration service consumers
As Magento2 is a complex system containing various atomic modules, module bundles still exist to ease implementation of complex business processes.
One of such bundle contains next modules:

* Sales
    * Order Management System
    * Admin Checkout
* Checkout (Storefront)
* Quote
* Payment

<p class="q'>What business process does this bundle implement?</p>

Next topics will be focused on Payment module in scope of this bundle.


### Client customizations

Every payment integration must provide components/interfaces/configuration for available extension points in the modules of the bundle.

<p class="q">Can we change the wording to:<p>

Every payment integration must provide components/interfaces/configuration for available extension points in the modules of the bundle. 

