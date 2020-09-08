---
group: graphql
title: Release Notes
---

*Release notes published January 2020.*

GraphQL is a flexible and performant API that allows you to build custom front-ends, including headless storefronts, [Progressive Web Apps](https://github.com/magento/pwa-studio) (PWA), and mobile apps for Magento.

The **[Magento GraphQL](https://github.com/magento/graphql-ce) project** is a Magento Community Engineering special project open to contributors.
To take part and contribute, see the [Magento GraphQL](https://github.com/magento/graphql-ce) repository and [wiki](https://github.com/magento/graphql-ce/wiki) to get started. Join us in our [Slack](https://magentocommeng.slack.com/messages/C8076E0KS) channel (or [self signup](https://tinyurl.com/engcom-slack)) to discuss the project.

These release notes can include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## {{site.data.var.ee}} and {{site.data.var.ce}} 2.3.5

-  {:.new} **The `products` and `categoryList` queries can now be used to retrieve information about products and categories that have been added to a staged campaign.** These queries require an admin authorization token. See [Using queries](https://devdocs.magento.com/guides/v2.3/graphql/queries/index.html#staging) for details.
-  {:.fix} Custom attributes used in layered navigation no longer require the **Use in Search**, **Visible in Advanced Search**, and **Use in Search Results Layered Navigation** fields be set to Yes.
-  {:.fix} Added the `position` and `disabled` attributes to the `MediaGalleryInterface`.
-  {:.fix} When you apply a gift card to a cart, an exception is no longer thrown when the last product is removed from the cart.
-  {:.fix} In a category search, the `image` attribute returns the full path to an image, rather than a truncated path.
-  {:.fix} Flat rate shipping amounts are calculated correctly when you add a configurable product to a cart.

## {{site.data.var.ee}} and {{site.data.var.ce}} 2.3.4

-  {:.new} **Guest carts can now be merged with customer carts.** The [`mergeCarts`]({{page.baseurl}}/graphql/mutations/merge-carts.html) mutation transfers the contents of a guest cart into the cart of a logged-in customer.
-  {:.new} **A customer can start an order on one device and complete it on another.** Use the [`customerCart`]({{page.baseurl}}/graphql/queries/customer-cart.html) query to obtain the cart ID for a logged-in customer.
-  {:.new} **Layered navigation can use custom filters.** The `filter` attribute of the [`products`]({{page.baseurl}}/graphql/queries/products.html) query now requires the `ProductAttributeFilterInput` object. You can specify a pre-defined filter in this object, or [define a custom filter]({{page.baseurl}}/graphql/custom-filters.html). As a result, layered navigation on your website filters on the attributes you need.
-  {:.new} **You can search categories by ID, name, and/or URL key.** The [`categoryList`]({{page.baseurl}}/graphql/queries/category-list.html) query replaces the deprecated `category` query.
-  {:.new} **A customer can add bundle and downloadable products to the cart with the [`addBundleProductsToCart`]({{page.baseurl}}/graphql/mutations/add-bundle-products.html) and [`addDownloadableProductsToCart`]({{page.baseurl}}/graphql/mutations/add-downloadable-products.html) mutations.**
-  {:.new} **The [`ProductInterface`]({{page.baseurl}}/graphql/interfaces/product-interface.html) supports fixed product taxes (such as WEEE).** Use the [`storeConfig`]({{page.baseurl}}/graphql/queries/store-config.html) query to determine whether the store supports these taxes.
-  {:.new} **The [`cart`]({{page.baseurl}}/graphql/queries/cart.html) object has been enhanced to include information about promotions and applied discounts at the line and cart levels.**
-  {:.new} **Added test coverage in multiple GraphQL modules.**

The following queries and mutations have been deprecated:

Deprecated entity | Use this instead
--- | ---
`category` query | `categoryList` query
`setPaymentMethodOnCartAndPlaceOrder` mutation | Run the `setPaymentMethodOnCart` and `placeOrder` mutations in the same request
`wishlist` query | `customer` query

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
   -  View [downloadable products]({{page.baseurl}}/graphql/interfaces/downloadable-product.html)

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
