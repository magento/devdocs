---
layout: default
group: get-started
subgroup: 20_REST
title: Order Processing Tutorial
menu_title: Step 2. Configure the store
menu_order: 22
level3_menu_node: level3child
level3_subgroup: order
version: 2.1
github_link: get-started/order/order-config-store.md
---

Previous Step: [Get Started]({{page.baseurl}}/get-started/order/order-intro.html) | Next Step: [Get the admin token]({{page.baseurl}}/get-started/order/order-admin-token.html)

## Step 2. Configure the store

The default Luma store needs additional configuration to run the REST calls mentioned in this tutorial.

### 1. Set the payment method

Since the Luma store is for demonstration purposes only, it is not set up to handle credit card payments. However, it can simulate any of the following offline payment methods:

Payment type | Configuration name | Enabled by default?
--- | --- | ---
Check/Money Order | `checkmo` | Yes
Bank Transfer Payment | `banktransfer` | No
Cash on Delivery | `cashondelivery` | No
Purchase Order | `purchaseorder` | No
Zero Subtotal Checkout | `free` | Yes

In this tutorial, configure Magento to accept bank transfer payments. To enable bank transfer payments, or any other offline payment method, log in to Admin and select **Stores > Configuration > Sales > Payment Methods**.

### 2. Deactivate a cart price rule {#price-rule}

By default, the Luma store includes a promotion where shipping is free if you spend at least $50. Since this tutorial shows shipping calculations, we need to deactivate this promotion. The promotion is defined in a cart price rule, which is also known as a sales rule. When you deactivate the cart price rule, shipping is charged at a flat rate of $5 per item.

To desable this cart price rule, select **Marketing > Cart Price Rules**. Then edit rule ID 2 (Spend $50 or more - shipping is free!), and toggle the **Active** switch to **No**. Be sure to save the change.

### 3. Configure supported shipping methods (optional)

If an order contains one or more simple, configurable, bundle, or group products, then you must specify how the order will be shipped. Downloadable items cannot be shipped, and Magento does not calculate shipping charges for downloadable items.

Since we are not actually shipping any products in this tutorial, we do not need to set up an account with a shipping company such as UPS or Federal Express. Instead, we can use the offline shipping methods that are configured by default.

Shipping type | Configuration name | Enabled by default?
--- | --- | ---
Flat rate | `flatrate` | Yes
Table rate | `tablerate` | Yes
Free shipping | `freeshipping` | No

If you want to change which offline shipping methods are available, select **Stores > Configuration > Sales > Shipping Methods** in Admin.


Previous Step: [Get Started]({{page.baseurl}}/get-started/order/order-intro.html) | Next Step: [Get the admin token]({{page.baseurl}}/get-started/order/order-admin-token.html)
