---
group: graphql
title: Release Notes
---

*Release notes published October 2019.*

GraphQL is a flexible and performant API that allows you to build custom front-ends, including headless storefronts, [Progressive Web Apps](https://github.com/magento/pwa-studio) (PWA), and mobile apps for Magento.

The **[Magento GraphQL](https://github.com/magento/graphql-ce) project** is a Magento Community Engineering special project open to contributors.
To take part and contribute, see the [Magento GraphQL](https://github.com/magento/graphql-ce) repository and [wiki](https://github.com/magento/graphql-ce/wiki) to get started. Join us in our [Slack](https://magentocommeng.slack.com/messages/C8076E0KS) channel (or [self signup](https://tinyurl.com/engcom-slack)) to discuss the project.

These release notes can include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## {{site.data.var.ee}} and {{site.data.var.ce}} 2.3.3

-  {:.new} **GraphQL supports PayPal, Braintree, and Authorize.Net payment methods.** You can use mutations to set the payment method, retrieve payment method-specific tokens, and place an order. For details, see the following topics:

   -  [Authorize.Net]({{page.baseurl}}/graphql/payment-methods/authorize-net.html)
   -  [Braintree]({{page.baseurl}}/graphql/payment-methods/braintree.html)
   -  [Braintree Vault]({{page.baseurl}}/graphql/payment-methods/braintree-vault.html)
   -  [PayPal Express Checkout]({{page.baseurl}}/graphql/payment-methods/paypal-express-checkout.html)
   -  [PayPal Payflow Link]({{page.baseurl}}/graphql/payment-methods/payflow-link.html)
   -  [PayPal Payflow Pro]({{page.baseurl}}/graphql/payment-methods/payflow-pro.html)
   -  [PayPal Payments Advanced]({{page.baseurl}}/graphql/payment-methods/payments-advanced.html)
   -  [PayPal Website Payments Pro Hosted Solution]({{page.baseurl}}/graphql/payment-methods/hosted-pro.html)
   -  [Express Checkout for other PayPal solutions]({{page.baseurl}}/graphql/payment-methods/payflow-express.html)

-  {:.new} **Added support for gift cards:** ({{site.data.var.ee}} only)
   -  [`giftCardAccount`]({{page.baseurl}}/graphql/queries/giftcard-account.html) query
   -  [`applyGiftCardToAccount`]({{page.baseurl}}/graphql/mutations/apply-giftcard.html) mutation
   -  [`removeGiftCardFromCart`]({{page.baseurl}}/graphql/mutations/remove-giftcard.html) mutation

-  {:.new} **Added the ability to manage store credit:** ({{site.data.var.ee}} only)
   -  [`applyStoreCreditToCart`]({{page.baseurl}}/graphql/mutations/apply-store-credit.html) mutation
   -  [`removeStoreCreditFromCart`]({{page.baseurl}}/graphql/mutations/remove-store-credit.html) mutation

-  {:.new} **Added the [addConfigurableProductsToCart]({{page.baseurl}}/graphql/mutations/add-configurable-products.html) mutation.**

## {{site.data.var.ce}} 2.3.2

-  {:.new} **Added mutations to support the following cart operations and checkout for logged-in and guest customers:**

   -  Add [simple products]({{page.baseurl}}/graphql/mutations/add-simple-products.html) to a cart.
   -  Add [virtual products]({{page.baseurl}}/graphql/mutations/add-virtual-products.html) to a cart.
   -  Set the [shipping address]({{page.baseurl}}/graphql/mutations/set-shipping-address.html). Address books are supported.
   -  Set the [billing address]({{page.baseurl}}/graphql/mutations/set-billing-address.html). Address books are supported.
   -  Set the [shipping method]({{page.baseurl}}/graphql/mutations/set-shipping-method.html). Supported methods include DHL, FedEx, Flat Rate, Free Shipping, Table Rate, UPS, and USPS.
   -  Set the [payment method]({{page.baseurl}}/graphql/mutations/set-payment-method.html). Supported methods include Bank Transfer, Cash on Delivery, Check/Money Order, Purchase Order, and Zero Subtotal Checkout.
   -  [Apply]({{page.baseurl}}/graphql/mutations/apply-coupon.html) or [remove]({{page.baseurl}}/graphql/mutations/remove-coupon.html) cart coupons.
   -  [Assign an email]({{page.baseurl}}/graphql/mutations/set-guest-email.html) to a guest cart.
   -  [Place an order]({{page.baseurl}}/graphql/mutations/place-order.html).

-  {:.new} **Added support for payment methods that implement Magento Vault. See [customerPaymentTokens query]({{page.baseurl}}/graphql/queries/customer-payment-tokens.html) and [deletePaymentToken mutation]({{page.baseurl}}/graphql/mutations/delete-payment-token.html)**

-  {:.new} **Added new queries and extended the functionality of others.**

   -  The [`isEmailAvailable` query]({{page.baseurl}}/graphql/queries/is-email-available.html) checks whether the specified email address has already been used to create an account.
   -  The [`cart` query]({{page.baseurl}}/graphql/queries/cart.html) can now return information set by mutations that perform cart operations, including product information, shipping and billing addresses, shipping and payment methods, and applied coupons. The query also returns calculated totals.
   -  The `customerPaymentTokens` query returns the signed-in customer's payment tokens.

-  {:.new} **Queries can now be performed as HTTP GET or POST operations.**

-  {:.new} **Magento can use Varnish or full-page caching to [cache]({{page.baseurl}}/graphql/caching.html) pages rendered from the results of the following GraphQL queries:**

   -  `category`
   -  `cmsBlocks`
   -  `cmsPage`
   -  `products`
   -  `urlResolver`

  You must send these queries as HTTP GET operations to cache the results.

## {{site.data.var.ce}} 2.3.1

-  {:.new} **Added mutations and queries that allow customers to manage My Account information.** Specific capabilities include:
   -  Create [customer]({{page.baseurl}}/graphql/mutations/create-customer.html) account
   -  Change account information
   -  Manage billing and shipping addresses
   -  Change customer password
   -  Manage newsletter subscriptions
   -  View [wish lists]({{page.baseurl}}/graphql/queries/wishlist.html)
   -  View [order history]({{page.baseurl}}/graphql/queries/customer-orders.html)
   -  View [downloadable products]({{page.baseurl}}/graphql/product/downloadable-product.html)

-  {:.new} **Added functionality to support complex Catalog features.** This version supports:
   -  Specifying absolute image paths for [products]({{page.baseurl}}/graphql/queries/products.html) and including extended image information
   -  Rendering fields that use WYSIWYG text
   -  URL rewrites for products​

-  {:.new} **GraphQL framework enhancements**, including:
   -  Mutations that [generate]({{page.baseurl}}/graphql/mutations/generate-customer-token.html) and [revoke]({{page.baseurl}}/graphql/mutations/revoke-customer-token.html) customer tokens
   -  Page Builder and WYSIWYG fields support complex structures for PWA scenarios
   -  Magento now calculates the complexity of queries and mutations and returns an error message if a query or mutation is deemed too complex
   -  Variable support in [queries]({{page.baseurl}}/graphql/queries/index.html) and [mutations]({{page.baseurl}}/graphql/mutations/index.html)
   -  A query that returns information about a store's [theme and CMS]({{page.baseurl}}/graphql/queries/store-config.html) configuration
   -  GraphQL tests are integrated with Travis CI​
   -  GraphQL browsers now display fields and objects alphabetically
