---
group: graphql
title: Release Notes
---

*Release notes published June 2019.*

GraphQL is a flexible and performant API that allows you to build custom front-ends, including headless storefronts, [Progressive Web Apps](https://github.com/magento/pwa-studio) (PWA), and mobile apps for Magento.

The **[Magento GraphQL](https://github.com/magento/graphql-ce) project** is a Magento Community Engineering special project open to contributors.
To take part and contribute, see the [Magento GraphQL](https://github.com/magento/graphql-ce) repository and [wiki](https://github.com/magento/graphql-ce/wiki) to get started. Join us in our [Slack](https://magentocommeng.slack.com/messages/C8076E0KS) channel (or [self signup](https://tinyurl.com/engcom-slack)) to discuss the project.

These release notes can include:

-   {:.new}New features
-   {:.fix}Fixes and improvements

## {{site.data.var.ce}} 2.3.2

- {:.new} **Added mutations to support the following cart operations and checkout for logged-in and guest customers:**

  - Add [simple products]({{page.baseurl}}/graphql/reference/quote-add-simple-products.html) to a cart.
  - Add [virtual products]({{page.baseurl}}/graphql/reference/quote-add-virtual-products.html) to a cart.
  - Set the [shipping address]({{page.baseurl}}/graphql/reference/quote-set-shipping-address.html). Address books are supported.
  - Set the [billing address]({{page.baseurl}}/graphql/reference/quote-set-billing-address.html). Address books are supported.
  - Set the [shipping method]({{page.baseurl}}/graphql/reference/quote-shipping-method.html). Supported methods include DHL, FedEx, Flat Rate, Free Shipping, Table Rate, UPS, and USPS.
  - Set the [payment method]({{page.baseurl}}/graphql/reference/quote-payment-method.html). Supported methods include Bank Transfer, Cash on Delivery, Check/Money Order, Purchase Order, and Zero Subtotal Checkout.
  - [Apply]({{page.baseurl}}/graphql/reference/quote-apply-coupon.html) or [remove]({{page.baseurl}}/graphql/reference/quote-remove-coupon.html) cart coupons.
  - [Assign an email]({{page.baseurl}}/graphql/reference/quote-set-guest-email.html) to a guest cart.
  - [Place an order]({{page.baseurl}}/graphql/reference/quote-place-order.html).

- {:.new} **Added support for payment methods that implement [Magento Vault]({{page.baseurl}}/graphql/reference/vault.html)**
-
- {:.new} **Added new queries and extended the functionality of others.**

  - The [`isEmailAvailable` query]({{page.baseurl}}/graphql/reference/customer.html) checks whether the specified email address has already been used to create an account.
  - The [`cart` query]({{page.baseurl}}/graphql/reference/quote.html) can now return information set by mutations that perform cart operations, including product information, shipping and billing addresses, shipping and payment methods, and applied coupons. The query also returns calculated totals.
  - The `customerPaymentTokens` query returns the signed-in customer's payment tokens.

- {:.new} **Queries can now be performed as HTTP GET or POST operations.**

- {:.new} **Magento can use Varnish or full-page caching to [cache]({{page.baseurl}}/graphql/caching.html) pages rendered from the results of the following GraphQL queries:**

  - `category`
  - `cmsBlocks`
  - `cmsPage`
  - `products`
  - `urlResolver`

  You must send these queries as HTTP GET operations to cache the results.

## {{site.data.var.ce}} 2.3.1

- {:.new} **Added mutations and queries that allow customers to manage My Account information.** Specific capabilities include:
  - Create [customer]({{page.baseurl}}/graphql/reference/customer.html) account
  - Change account information
  - Manage billing and shipping addresses
  - Change customer password
  - Manage newsletter subscriptions
  - Create [wish lists]({{page.baseurl}}/graphql/reference/wishlist.html)
  - View [order history]({{page.baseurl}}/graphql/reference/sales.html)
  - View [downloadable products]({{page.baseurl}}/graphql/reference/downloadable-product.html)

- {:.new} **Added functionality to support complex Catalog features.** This version supports:
  - Specifying absolute image paths for [products]({{page.baseurl}}/graphql/reference/products.html) and including extended image information
  - Rendering fields that use WYSIWYG text
  - URL rewrites for products​

- {:.new} **GraphQL framework enhancements**, including:
  - Mutations that retrieve and revoke [customer tokens]({{page.baseurl}}/graphql/reference/customer.html)
  - Page Builder and WYSIWYG fields support complex structures for PWA scenarios
  - Magento now calculates the complexity of queries and mutations and returns an error message if a query or mutation is deemed too complex
  - Variable support in [queries]({{page.baseurl}}/graphql/queries.html) and [mutations]({{page.baseurl}}/graphql/mutations.html)
  - Queries in the [Store endpoint]({{page.baseurl}}/graphql/reference/store-config.html) return information about a store's theme and CMS configuration
  - GraphQL tests are integrated with Travis CI​
  - GraphQL browsers now display fields and objects alphabetically
