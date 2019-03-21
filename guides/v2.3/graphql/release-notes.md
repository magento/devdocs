---
group: graphql
title: Release Notes
---

*Release notes published March 2019.*

GraphQL is a flexible and performant API that allows you to build custom front-ends, including headless storefronts, [Progressive Web Apps](https://github.com/magento-research/pwa-studio) (PWA), and mobile apps for Magento.

The **[Magento GraphQL](https://github.com/magento/graphql-ce) project** is a Magento Community Engineering special project open to contributors.
To take part and contribute, see the [Magento GraphQL](https://github.com/magento/graphql-ce) repository and [wiki](https://github.com/magento/graphql-ce/wiki) to get started. Join us in our [Slack](https://magentocommeng.slack.com/messages/C8076E0KS) channel (or [self signup](https://tinyurl.com/engcom-slack)) to discuss the project.

These release notes include:

-   {:.new}New features
-   {:.fix}Fixes and improvements

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
  - URL rewrites for products​ are now supported

- {:.new} **GraphQL framework enhancements**, including:
  - Mutations that retrieve and revoke  [customer tokens]({{page.baseurl}}/graphql/reference/customer.html).
  - Page Builder and WYSIWYG fields support complex structure for PWA scenarios.
  - Magento now calculates the complexity of queries and mutations and returns an error message if a query or mutation is deemed too complex.
  - Variable support in [queries]({{page.baseurl}}/graphql/queries.html) and [mutations]({{page.baseurl}}/graphql/mutations.html).
  - Queries in the [Store endpoint]({{page.baseurl}}/graphql/reference/store-config.html) return information about a store's theme and CMS configuration.
  - Introspection queries are allowed by default in production mode.
  - GraphQL tests are integrated with Travis CI​
  - GraphQL browsers now display fields and objects alphabetically.