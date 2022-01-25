---
group: performance-best-practices
title: Performance pack
functional_areas:
  - Configuration
  - System
  - Setup
---

The Performance Pack offers high-throughput order processing by using a set of modules to optimize the Order Placement and Checkout experience.

Modules included in the Performance Pack:

-  [AsyncOrder](#asynchronous-order-placement)—An asynchronous order placement module that processes orders using a queue.
-  [Enable Inventory check](#inventory-check)—Enable or disable the inventory check on cart load.
-  [DeferredTotalCalculation](#sales-rule-optimization)—A sales rule optimization module that can defer calculations for order totals until checkout begins.

All features work independently. You can use all the features simultaneously or enable and disable features in any combination.

Use the command-line interface to enable these features, or edit the `app/etc/env.php` file according to the corresponding readme files defined in the [_Module Reference Guide_][mrg].

## Special installation for 2.4.3

For {{site.data.var.ee}} 2.4.4, the Performance pack modules are part of standard installation. For {{site.data.var.ee}} 2.4.3, the features in the Performance pack were released as separate composer packages and patches. Before you begin installing these separate modules, make sure to apply the latest available patches for 2.4.3. See [Apply patches][].

After applying the patches, add the following Performance pack modules to the `require` section of the `composer.json` file:

```bash
composer require magento/module-async-order:0.1.0
```

```bash
composer require magento/module-async-order-graph-ql:0.1.0
```

```bash
composer require magento/module-deferred-total-calculating:0.1.0
```

Add an extra module if installing for B2B:

```bash
composer require magento/module-negotiable-quote-async-order:0.1.0
```

{:.bs-callout-tip}
For more information on how to install and manage extensions for on-premises projects, see [Install extensions][], and for Cloud projects, see [Install, manage, and upgrade extensions][cloud-extensions].

## Asynchronous order placement

The _Async Order_ module enables asynchronous order placement, which marks the order as `received`, places the order in a queue, and processes orders from the queue on a first-in-first-out basis. AsyncOrder is **disabled** by default.

For example, a customer adds a product to their shopping cart and selects **Proceed to Checkout**. They fill out the **Shipping Address** form, select their preferred **Shipping Method**, select a payment method, and place the order. The shopping cart is cleared, the order is marked as **Received**, but the Product quantity is not adjusted yet, nor is a sales email sent to the customer. The order is received, but the order details are not yet available because the order has not been fully processed. It remains in the queue until the `placeOrderProcess` begins, verifies the inventory (the [inventory check](#inventory-check) feature is enabled by default), and updates the order as follows:

-  **Product available**—the order status changes to _Pending_, the product quantity is adjusted, an email with order details is sent to the customer, and the successful order details become available for viewing in the **Orders and Returns** list with actionable options, such as reorder.
-  **Product out of stock or low supply**—the order status changes to _Rejected_, the Product quantity is not adjusted, an email with order details about the issue is sent to the customer, and the rejected order details become available in the **Orders and Returns** list with no actionable options.

{:.procedure}
To enable AsyncOrder:

{: .bs-callout-warning}
Before enabling the AsyncOrder module, you must verify that there are no active quotes.

You can enable AsyncOrder using the command-line interface:

```bash
bin/magento setup:config:set --checkout-async 1
```

The `set` command writes the following to the `app/etc/env.php` file:

```php?start_inline=1
...
   'checkout' => [
       'async' => 1
   ]
```

See [AsyncOrder][] in the _Module Reference Guide_.

{:.procedure}
To disable AsyncOrder:

{: .bs-callout-warning}
Before disabling the AsyncOrder module, you must verify that _all_ asynchronous order processes are complete.

You can disable AsyncOrder using the command-line interface:

```bash
bin/magento setup:config:set --checkout-async 0
```

The `set` command writes the following to the `app/etc/env.php` file:

```php?start_inline=1
...
   'checkout' => [
       'async' => 0
   ]
```

See [AsyncOrder][] in the _Module Reference Guide_.

### AsyncOrder compatibility

AsyncOrder supports a limited set of Commerce features. For example, _Negotiable Quote Async Order_ enables you to save order items asynchronously for the `NegotiableQuote` functionality.

Category         | Supported Feature
---------------- | -----------------------
Checkout types   | OnePage Checkout<br>Standard Checkout<br>B2B Negotiable Quote
Payment methods  | Check/Money Order<br>Cash on Delivery<br>Braintree<br>PayPal PayFlow Pro
Shipping methods | All shipping methods are supported.

The following features are **not** supported by AsyncOrder, but continue to work synchronously:

-  Payment Methods not included in the supported feature list
-  Multi Address Checkout
-  Admin Order Creation

#### Web API support

When the AsyncOrder module is enabled, the following REST endpoints and GraphQL mutations run asynchronously:

**REST:**

-  `/V1/carts/mine/payment-information`
-  `/V1/guest-carts/:cartId/payment-information`
-  `/V1/negotiable-carts/:cartId/payment-information`

**GraphQL:**

-  [`placeOrder`]({{page.baseurl}}/graphql/mutations/place-order.html)
-  [`setPaymentMethodAndPlaceOrder`]({{page.baseurl}}/graphql/mutations/set-payment-place-order.html)

{:.bs-callout-info}
GraphQL does not support placing negotiable quote orders asynchronously.
#### Excluding payment methods

Developers can explicitly exclude certain payments methods from Asynchronous Order placement by adding them to the `Magento\AsyncOrder\Model\OrderManagement::paymentMethods` array. Orders that use excluded payment methods are processed synchronously.

## Inventory check

The _Enable Inventory On Cart Load_ global setting determines whether to perform an inventory check when loading a product in the cart. Disabling the inventory check process improves performance for all checkout steps, particularly when dealing with bulk products in the cart; however, customers would encounter out-of-stock errors later in the ordering process.

Enable Inventory On Cart Load is **enabled** by default.

To disable the inventory check when loading the cart, set **Enable Inventory Check On Cart Load** to `No` in the Admin UI. See [Configure Global Options][global] and [Catalog Inventory][inventory] in the _User Guide_.

## Sales rule optimization

The _Deferred Total Calculation_ module optimizes the checkout process by deferring the total calculation until it is requested for the shopping cart or during final checkout steps. When enabled, only the subtotal calculates as a customer adds products to the shopping cart. See [DeferredTotalCalculating][] in the _Module Reference Guide_.

DeferredTotalCalculation is **disabled** by default.

{:.procedure}
To enable DeferredTotalCalculation:

You can enable DeferredTotalCalculation using the command-line interface:

```bash
bin/magento setup:config:set --deferred-total-calculating 1
```

The `set` command writes the following to the `app/etc/env.php` file:

```php?start_inline=1
...
   'checkout' => [
       'deferred_total_calculating' => 1
   ]
```

{:.procedure}
To disable DeferredTotalCalculation:

You can disable DeferredTotalCalculation using the command-line interface:

```bash
bin/magento setup:config:set --deferred-total-calculating 0
```

The `set` command writes the following to the `app/etc/env.php` file:

```php?start_inline=1
...
   'checkout' => [
       'deferred_total_calculating' => 0
   ]
```

<!-- link definitions -->

[Apply patches]: {{site.baseurl}}/cloud/project/project-patch.html
[global]: https://docs.magento.com/user-guide/catalog/inventory-options-global.html
[inventory]: https://docs.magento.com/user-guide/configuration/catalog/inventory.html
[Install extensions]: {{site.baseurl}}/extensions/install/
[cloud-extensions]: {{site.baseurl}}/cloud/howtos/install-components.html

[mrg]: {{site.baseurl}}{{site.gdeurl}}/mrg/intro.html
[asyncorder]: {{site.baseurl}}/guides/v2.4/mrg/module-async-order.html
[DeferredTotalCalculating]: {{site.baseurl}}/guides/v2.4/mrg/module-deferred-total-calculating.html
