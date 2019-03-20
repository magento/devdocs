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

- {:.new} **Added queries and mutations.** {{site.data.var.ce}} Contributions include:
    - Mutations in the [Customer endpoint]({{page.baseurl}}/graphql/reference/customer.html) for creating and updating customers, managing customer addresses, managing customer tokens, and changing customer passwords.
    - Queries to return information about the countries and currency assigned to the store in the [Directory endpoint]({{ page.baseurl}}/graphql/reference/directory.html)
    - Mutations in the [DownloadableProduct]({{ page.baseurl}}/graphql/reference/downloadable-product.html) endpoint that allows you to add downloadable products to a cart.
    - A query in the [Sales endpoint]({{page.baseurl}}/graphql/reference/sales.html) that returns a list of customer orders.
    - The [Wishlist endpoint]({{page.baseurl}}/graphql/reference/wishlist.html), which includes a query that returns a list of items in the customer's wish list.
    - Queries in the [Store endpoint]({{page.baseurl}}/graphql/reference/store-config.html) for returning information about a store's theme and CMS configuration.
   
- {:.new} **Added variable support in queries and mutations.** See [Queries]({{page.baseurl}}/graphql/queries.html) and [Mutations]({{page.baseurl}}/graphql/mutations.html) for examples that work with the Luma sample data. 

- {:.new} **Introspection is now allowed in production mode.**. Previously, introspection was only available in developer mode.

- {:.new} **The system now calculates the complexity of queries and mutations.** Magento returns an error message if a query or mutation is deemed too complex. This feature helps reduce vulnerabilities that may occur from issuing highly complex queries.

- {:.new} **GraphQL browsers now display fields and objects alphabetically.**