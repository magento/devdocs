---
group: performance-best-practices
title: Performance pack
functional_areas:
  - Configuration
  - System
  - Setup
---

The Performance Pack contains a set of modules for optimizing the Order Placement process and Checkout experience.

{: .bs-callout-info}
For {{site.data.var.ee}} 2.4.3, the features in the Performance pack were released as separate composer packages and patches.

Modules included in the Performance Pack:

-  [AsyncOrder](#asynchronous-order-placement)—add orders to a queue
-  [Enable Inventory check](#inventory-check)—control the inventory check on cart load
-  [DeferredTotalCalculation](#sales-rule-optimization)—defer calculations for order totals until checkout begins

All features work independently. You can use all the features simultaneously or enable and disable in any combination.

You can use the command-line interface to enable these features, or you can edit the `app/etc/env.php` file according to the corresponding readme files in the [_Module Reference Guide_][mrg].

## Asynchronous order placement

The _Async Order_ module enables asynchronous order placement, which marks the order as `received`, places the order in a queue, and processes orders from the queue on a first-in-first-out basis. See [AsyncOrder][] in the _Module Reference Guide_.

AsyncOrder is **disabled** by default.

{: .bs-callout-warning}
Before enabling the AsyncOrder module, you must verify that there are no active quotes.

You can enable AsyncOrder using the command-line interface:

```bash
bin/magento setup:config:set --checkout-async 1
```

This writes the following to the `app/etc/env.php` file:

```php?start_inline=1
...
   'checkout' => [
       'async' => 1
   ]
```

{: .bs-callout-warning}
Before disabling the AsyncOrder module, you must verify that _all_ asynchronous order processes are complete.

### AsyncOrder compatibility

AsyncOrder supports a limited set of Commerce features. For example,  _Negotiable Quote Async Order_ enables you to save order items asynchronously for the `NegotiableQuote` functionality.

Category         | Supported Feature
---------------- | -----------------------
Checkout types   | OnePage Checkout<br>B2B Negotiable Quote<br>GraphQL
Payment methods  | Check/Money Order<br>Cash on Delivery<br>Braintree<br>PayPal PayFlow Pro
Shipping methods | All shipping methods are supported.

The following features are **not** supported by AsyncOrder, but continues to work synchronously:

-  Payment Methods not included in the supported feature list
-  Multi Address Checkout
-  Admin Order Creation

## Inventory check

The _Enable Inventory On Cart Load_ global setting determines whether to perform an inventory check when loading a product in the cart. Disabling the inventory check process improves performance for all checkout steps, particularly when dealing with bulk products in the cart. If this setting is disabled, a customer might receive an error during the checkout process when a product becomes out of stock while placing the order.

Enable Inventory On Cart Load is **enabled** by default.

To disable check inventory when loading a product in the cart, set **Enable Inventory Check On Cart Load** to `No` in the Admin UI. See [Configure Global Options][global] and [Catalog Inventory][inventory] in the _User Guide_.

## Sales rule optimization

The _Deferred Total Calculation_ module optimizes the checkout process by deferring the total calculation until it is requested for the shopping cart or during final checkout steps. When enabled, only the subtotal calculates as a customer adds products to the shopping cart. See [DeferredTotalCalculating][] in the _Module Reference Guide_.

DeferredTotalCalculation is **disabled** by default.

You can enable DeferredTotalCalculation using the command-line interface:

```bash
bin/magento setup:config:set --deferred-total-calculating 1
```

This writes the following to the `app/etc/env.php` file:

```php?start_inline=1
...
   'checkout' => [
       'deferred_total_calculating' => 1
   ]
```

<!-- link definitions -->

[global]: https://docs.magento.com/user-guide/catalog/inventory-options-global.html
[inventory]: https://docs.magento.com/user-guide/configuration/catalog/inventory.html

[mrg]: {{site.baseurl}}{{site.gdeurl}}/mrg/intro.html
[asyncorder]: {{site.baseurl}}/guides/v2.4/mrg/module-async-order.html
[DeferredTotalCalculating]: {{site.baseurl}}/guides/v2.4/mrg/module-deferred-total-calculating.html
