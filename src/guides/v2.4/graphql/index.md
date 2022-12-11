---
group: graphql
title: GraphQL Overview
landing-page: GraphQL Developer's Guide
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/
layout: migrated
---

[GraphQL](https://graphql.org/) is a data query language developed internally by Facebook in 2012 before being publicly released in 2015. Magento implements GraphQL to provide an alternative to REST and SOAP web APIs for frontend development.

## How to access GraphQL

Use a GraphQL IDE such as [GraphiQL](https://github.com/graphql/graphiql) or a browser extension to run the code samples and tutorials. If you install a browser extension, make sure it has the ability to set request headers. On Google Chrome, [Altair GraphQL Client](https://chrome.google.com/webstore/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja) is one extension that can do the job.

To begin exploring GraphQL, set the GraphQL endpoint by entering `http://<magento2-server>/graphql` in the URL bar of your IDE or extension. You can use the browser in the right column to determine how to set up a query or mutation. Examples are also available throughout the Magento GraphQL documentation.

The following image shows a sample query, its response, and the GraphQL browser:

![GraphiQL browser]({{ page.baseurl }}/graphql/images/graphql-browser.png)
