---
group: graphql
title: GraphQL Overview
landing-page: GraphQL Developer's Guide
---

[GraphQL](http://graphql.org/) is a data query language developed internally by Facebook in 2012 before being publicly released in 2015. Magento implements GraphQL to provide an alternative to REST and SOAP web APIs for frontend development.

## The current state of Magento GraphQL

Most of the development team's work thus far has been devoted to building the GraphQL infrastructure and enhancing the ability to query products. The complexity of the Catalog module made it the ideal candidate for early development. It supports all product types as well as extension, custom, and EAV attributes.

GraphQL allows you to define the structure of the data that you need, and the server returns only the data you request. Each GraphQL-capable module contains a declarative schema that defines the syntax for queries that the module supports, as well as the attributes that can be returned. If you run a REST call such as `GET /V1/products/:sku` on a simple product, the system might fetch more than 100 lines of data. If all you need is the current price, the call has returned significantly more information than you need. With GraphQL, a query against the same SKU could return just the price.

A GraphQL-enabled module handles externally-defined attributes differently than other Magento modules. We used the following techniques to manage product-related attributes, but you are free to use alternate methods:

*  **EAV attributes** are explicitly declared in the `schema.graphqls` files. For example, the Catalog [`schema.graphqls`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogGraphQl/etc/schema.graphqls) file declares multiple EAV attributes.

*  **Custom attributes** are treated as dynamic attributes that might or might not be present. Therefore, they are not declared in the schema. Instead, we've implemented a reader that queries the database and gets any declared custom attributes. These attributes can be declared in the schema if you know they'll always be present.

*  **Extension attributes** can be declared in a `schema.graphqls` file or by a custom reader, but they should be declared in a separate `*GraphQl` module. The attributes should extend from the resolver that fetches that model's data.

You can explicitly define EAV attributes in the schema, while a module's attribute reader adds custom attributes to the configuration of the module. The reader queries the database to find attributes and processes them so that they can be read by the XML reader. The custom attributes become available to the frontend.

The current GraphQL codebase also supports the following features:

*  You can perform full text searches on products in a similar manner as REST and SOAP calls. You can also simultaneously perform a full text search and filter the results. This is new functionality available only with GraphQL.
*  All product types are supported. Previous versions support only simple and configurable products.
*  A product query returns complex price objects that include the amount, the currency code, and any adjustments.
*  You can query attributes of a logged-in customer. A session token provides authorization.
*  The REST and SOAP APIs had separate endpoints for searching across all products and individual products. In GraphQL, all product searches use the `products` query.
*  Developers who have URLs being rewritten using the rewrites table can send these generated URLs to the `urlResolver` query and receive back the canonical URL in the response.
*  GraphQL supports multiple stores. The context is specified in the HTTP header.  Your GraphQL client must support HTTP headers to query the non-default store.
*  Attribute-level descriptions are displayed in the GraphQL browser.

## Where we're going

In the near future, we'll roll out the following features:

*  A more performant data retrieval mechanism
*  Queries for other storefront entities like carts and orders
*  Support mutations to enable payments, checkout, and other operations

## How to access GraphQL

GraphiQL is an in-browser tool for writing, validating, and testing GraphQL queries. You can download an extension from your browser's app store. For the Google Chrome browser, the [ChromeiQL extension](https://chrome.google.com/webstore/detail/chromeiql/fkkiamalmpiidkljmicmjfbieiclmeij?hl=en) will do the job. The following image shows a sample query, its response, and the GraphQL browser

![GraphiQL browser]({{ page.baseurl }}/graphql/images/graphql-browser.png)

To begin using GraphiQL, set the GraphQL endpoint by entering `http://<magento2-3-server>/graphql` in the URL bar, then click **Set endpoint**. You can use the browser in the right column to determine how to set up a query. Additional examples are also available in [Queries]({{ page.baseurl }}/graphql/queries/index.html).
