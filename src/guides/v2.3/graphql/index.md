---
group: graphql
title: GraphQL Overview
landing-page: GraphQL Developer's Guide
---

[GraphQL](http://graphql.org/) is a data query language developed internally by Facebook in 2012 before being publicly released in 2015. Magento implements GraphQL to provide an alternative to REST and SOAP web APIs for frontend development.

## The current state of Magento GraphQL

As of Magento 2.3.4, GraphQL provides the following features:

*  Support for all product types, payment methods, and shipping methods
*  Achieved <.5 sec average response times with 500 concurrent requests
*  Redesigned a feature rich layered navigation

## Where we're going

The `graphql-ce` Community Engineering repository has been archived. Development for Magento 2.3.5 will be limited to bug fixes.

For the 2.4 release, Magento teams are working to implement a new microservice architecture with the following features that affect GraphQL:

*  All new GraphQL coverage will rely on newly-defined Storefront APIs. If there are no appropriate Storefront APIs for the particular business scenario being covered, these APIs will be introduced. Existing coverage will work with the Storefront APIs without changing the current schema.
*  Storefront API implementations must rely on the Magento Framework only.  No dependencies on entities defined in Magento modules will be allowed.
*  GraphQL resolvers will not contain business logic.

The Catalog, Customer, and Cart modules will be the first modules to be re-architected. Details about the new architecture and modules will be published as it becomes available, before the 2.4 release.

We also expect to begin adding coverage for B2B scenarios.

## How to access GraphQL

GraphiQL is an in-browser tool for writing, validating, and testing GraphQL queries. You can download an extension from your browser's app store. For the Google Chrome browser, the [ChromeiQL extension](https://chrome.google.com/webstore/detail/chromeiql/fkkiamalmpiidkljmicmjfbieiclmeij?hl=en) will do the job. The following image shows a sample query, its response, and the GraphQL browser

![GraphiQL browser]({{ page.baseurl }}/graphql/images/graphql-browser.png)

To begin using GraphiQL, set the GraphQL endpoint by entering `http://<magento2-3-server>/graphql` in the URL bar, then click **Set endpoint**. You can use the browser in the right column to determine how to set up a query. Additional examples are also available in [Queries]({{ page.baseurl }}/graphql/queries/index.html).
