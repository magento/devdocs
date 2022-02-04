---
group: performance-best-practices
title: High-throughput order processing
functional_areas:
  - Configuration
  - System
  - Setup
---

You can configure **high-throughput order processing** by using the following set of modules to optimize the Order Placement and Checkout experience:

-  [AsyncOrder](#asynchronous-order-placement)—Asynchronously processes orders using a queue.
-  [NegotiableQuoteAsyncOrder](#negotiable-quote-asyn-order)—Asynchronously processes NegotiableQuote save order items.
-  [DeferredTotalCalculation](#deferred-total-calculation)—Defers calculations for order totals until checkout begins.

All features work independently. You can use all the features simultaneously or enable and disable features in any combination.

Use the command-line interface to enable these features, or edit the `app/etc/env.php` file according to the corresponding readme files defined in the [_Module Reference Guide_][mrg].

## Asynchronous order placement

The _Async Order_ module enables asynchronous order placement, which marks the order as `received`, places the order in a queue, and processes orders from the queue on a first-in-first-out basis. AsyncOrder is **disabled** by default.

For example, a customer adds a product to their shopping cart and selects **Proceed to Checkout**. They fill out the **Shipping Address** form, select their preferred **Shipping Method**, select a payment method, and place the order. The shopping cart is cleared, the order is marked as **Received**, but the Product quantity is not adjusted yet, nor is a sales email sent to the customer. The order is received, but the order details are not yet available because the order has not been fully processed. It remains in the queue until the `placeOrderProcess` consumer begins, verifies the order with the [inventory check](#inventory-check) feature (enabled by default), and updates the order as follows:

-  **Product available**—the order status changes to _Pending_, the product quantity is adjusted, an email with order details is sent to the customer, and the successful order details become available for viewing in the **Orders and Returns** list with actionable options, such as reorder.
-  **Product out of stock or low supply**—the order status changes to _Rejected_, the Product quantity is not adjusted, an email with order details about the issue is sent to the customer, and the rejected order details become available in the **Orders and Returns** list with no actionable options.

{:.procedure}
To enable AsyncOrder:

You can enable AsyncOrder using the command-line interface:

```bash
bin/magento setup:config:set --checkout-async 1
```

The `set` command writes the following to the `app/etc/env.php` file:

```conf
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

```conf
...
   'checkout' => [
       'async' => 0
   ]
```

### AsyncOrder compatibility

AsyncOrder supports a limited set of Commerce features.

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

-  `POST /V1/carts/mine/payment-information`
-  `POST /V1/guest-carts/:cartId/payment-information`
-  `POST /V1/negotiable-carts/:cartId/payment-information`

**GraphQL:**

-  [`placeOrder`]({{page.baseurl}}/graphql/mutations/place-order.html)
-  [`setPaymentMethodAndPlaceOrder`]({{page.baseurl}}/graphql/mutations/set-payment-place-order.html)

{:.bs-callout-info}
GraphQL does not support placing negotiable quote orders asynchronously.

#### Excluding payment methods

Developers can explicitly exclude certain payments methods from Asynchronous Order placement by adding them to the `Magento\AsyncOrder\Model\OrderManagement::paymentMethods` array. Orders that use excluded payment methods are processed synchronously.

## Negotiable Quote Async Order

The _Negotiable Quote Async Order_ B2B module enables you to save order items asynchronously for the `NegotiableQuote` functionality.

## Deferred Total Calculation

The _Deferred Total Calculation_ module optimizes the checkout process by deferring the total calculation until it is requested for the shopping cart or during final checkout steps. When enabled, only the subtotal calculates as a customer adds products to the shopping cart.

DeferredTotalCalculation is **disabled** by default.

{:.procedure}
To enable DeferredTotalCalculation:

You can enable DeferredTotalCalculation using the command-line interface:

```bash
bin/magento setup:config:set --deferred-total-calculating 1
```

The `set` command writes the following to the `app/etc/env.php` file:

```conf
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

```conf
...
   'checkout' => [
       'deferred_total_calculating' => 0
   ]
```

See [DeferredTotalCalculating][] in the _Module Reference Guide_.

### Fixed Product Tax

When DeferredTotalCalculation is enabled, the Fixed Product Tax (FPT) is not included in the product price and cart subtotal of the mini cart after adding the product to the shopping cart. The FPT calculation is deferred when adding a product to the mini cart. The FPT displays correctly in the shopping cart after proceeding to final checkout.

## Disable Inventory check

The _Enable Inventory On Cart Load_ global setting determines whether to perform an inventory check when loading a product in the cart. Disabling the inventory check process improves performance for all checkout steps, particularly when dealing with bulk products in the cart.

When disabled, inventory check does not occur when adding a product to the shopping cart. If this inventory check is skipped, some out-of-stock scenarios could throw other types of errors. An inventory check _always_ occurs at the order placement step, even when disabled.

Enable Inventory On Cart Load is **enabled** by default.

To disable the inventory check when loading the cart, set **Enable Inventory Check On Cart Load** to `No` in the Admin UI. See [Configure Global Options][global] and [Catalog Inventory][inventory] in the _User Guide_.

<!-- link definitions -->

[Apply patches]: {{site.baseurl}}/cloud/project/project-patch.html
[global]: https://docs.magento.com/user-guide/catalog/inventory-options-global.html
[inventory]: https://docs.magento.com/user-guide/configuration/catalog/inventory.html
[Install extensions]: {{site.baseurl}}/extensions/install/
[cloud-extensions]: {{site.baseurl}}/cloud/howtos/install-components.html

[mrg]: {{site.baseurl}}{{site.gdeurl}}/mrg/intro.html
[AsyncOrder]: {{site.baseurl}}/guides/v2.4/mrg/module-async-order.html
[DeferredTotalCalculating]: {{site.baseurl}}/guides/v2.4/mrg/module-deferred-total-calculating.html
[NegotiableQuoteAsyncOrder]: {{site.baseurl}}/guides/v2.4/mrg/module-negotiable-quote-async-order.html
