---
group: performance-best-practices
title: Performance pack
functional_areas:
  - Configuration
  - System
  - Setup
---

The Performance Pack contains modules for optimizing the Order Placement process and Checkout experience. With the Performance Pack, you can:

-  queue up the orders
-  defer calculations for order totals
-  control the inventory check

{: .bs-callout-info}
For {{site.data.var.ee}} 2.4.3, the features in the Performance pack were released as separate composer packages and patches.

You can use the command-line interface to enable these features, or you can edit the `app/etc/env.php` file according to the corresponding readme files in the [_Module Reference Guide_][mrg].

## Asynchronous order placement

The _Async Order_ module enables asynchronous order placement, which marks the order as `received`, places the order in a queue, and processes orders from the queue on a first-in-first-out basis. See AsyncOrder in the _Module Reference Guide_.

AsyncOrder is **disabled** by default. You can enable AsyncOrder using the command-line interface:

 ```bash
 bin/magento setup:config:set --checkout-async 1
 ```

Also, the Negotiable Quote Async Order module enables you to save order items asynchronously for the `NegotiableQuote` functionality.

## Inventory check

The _Enable Inventory On Cart Load_ global setting determines whether to perform an inventory check when loading a product in the cart. Disabling the inventory check process improves performance for all checkout steps, particularly when dealing with bulk products in the cart. If this setting is disabled, a customer might receive an error during the checkout process when a product becomes out of stock while placing the order.

Enable Inventory On Cart Load is **enabled** by default. To disable check inventory when loading a product in the cart, set **Enable Inventory Check On Cart Load** to `No` in the Admin UI. See [Configure Global Options][global] and [Catalog Inventory][inventory] in the _User Guide_.

## Sales rule optimization

The _Deferred Total Calculating_ module optimizes the checkout process by deferring the total calculation until it is requested for the shopping cart or during final checkout steps. See DeferredTotalCalculating in the _Module Reference Guide_.

DeferredTotalCalculating is **disabled** by default. You can enable DeferredTotalCalculating using the command-line interface:

```bash
 bin/magento setup:config:set --deferred-total-calculating 1
 ```

<!-- link definitions -->

[global]: https://docs.magento.com/user-guide/catalog/inventory-options-global.html
[inventory]: https://docs.magento.com/user-guide/configuration/catalog/inventory.html
[mrg]: {{site.baseurl}}{{site.gdeurl}}/mrg/intro.html