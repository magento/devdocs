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

For the 2.4 release, Magento teams are working towards completing GraphQL coverage for Business to Consumer (B2C) uses cases, with emphasis on the following:

*  Order history for logged in customers
*  Reorders
*  Replace product-specific mutations that add products to a card with a single mutation that can handle all product types
*  Gift wrapping and messages
*  Saved payment methods
*  Inventory Management store pickups


We also expect to begin adding coverage for B2B scenarios.

## How to access GraphQL

GraphiQL is an in-browser tool for writing, validating, and testing GraphQL queries. You can download an extension from your browser's app store. For the Google Chrome browser, the [ChromeiQL extension](https://chrome.google.com/webstore/detail/chromeiql/fkkiamalmpiidkljmicmjfbieiclmeij?hl=en) will do the job. The following image shows a sample query, its response, and the GraphQL browser

![GraphiQL browser]({{ page.baseurl }}/graphql/images/graphql-browser.png)

To begin using GraphiQL, set the GraphQL endpoint by entering `http://<magento2-3-server>/graphql` in the URL bar, then click **Set endpoint**. You can use the browser in the right column to determine how to set up a query. Additional examples are also available in [Queries]({{ page.baseurl }}/graphql/queries/index.html).
