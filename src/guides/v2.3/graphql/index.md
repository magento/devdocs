---
group: graphql
title: GraphQL Overview
landing-page: GraphQL Developer's Guide
---

[GraphQL](http://graphql.org/) is a data query language developed internally by Facebook in 2012 before being publicly released in 2015. Magento implements GraphQL to provide an alternative to REST and SOAP web APIs for frontend development.

## The current state of Magento GraphQL

As of Magento 2.3.4, GraphQL provides the following features:

-  Support for all product types, payment methods, and shipping methods
-  Achieved <.5 sec average response times with 500 concurrent requests
-  Redesigned a feature rich layered navigation

## Where we're going

The `graphql-ce` Community Engineering repository has been archived. Development for Magento 2.3.5 will be limited to bug fixes.

For the 2.4.0 and 2.4.1 releases, Magento teams are working toward completing GraphQL coverage for Business to Consumer (B2C) uses cases, with emphasis on the following:

-  Reorders
-  Inventory Management store pickups
-  Order history for logged in customers
-  Replace product-specific mutations that add products to a cart with a single mutation that can handle all product types
-  Gift wrapping and messages
-  Saved payment methods

We also expect to begin adding coverage for B2B scenarios.

## How to access GraphQL

Use a GraphQL IDE such as [GraphiQL](https://github.com/graphql/graphiql) or a browser extension to run the code samples and tutorials. If you install a browser extension, make sure it has the ability to set request headers. On Google Chrome, [Altair GraphQL Client](https://chrome.google.com/webstore/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja) is one extension that can do the job.

To begin exploring GraphQL, set the GraphQL endpoint by entering `http://<magento2-server>/graphql` in the URL bar of your IDE or extension. You can use the browser in the right column to determine how to set up a query or mutation. Examples are also available throughout the Magento GraphQL documentation.

The following image shows a sample query, its response, and the GraphQL browser:

![GraphiQL browser]({{ page.baseurl }}/graphql/images/graphql-browser.png)
