---
layout: default
group: graphql
title: Overview
landing-page: GraphQL Guide
github_link: graphql/graphql.md
---

[GraphQL](http://graphql.org/) is a data query language developed internally by Facebook in 2012 before being publicly released in 2015. Magento implements GraphQL to provide an alternative to REST and SOAP web APIs.

A primary benefit of GraphQL is that it allows you to define the structure of the data that you need, and the server returns only the data you request. This avoids two types of problems:

* The server returns too much data. For example, if you run a REST call such as `GET /V1/products/:sku` on a simple product, the response may contain well over 100 lines.
* The system requires multiple calls to return the information you need. [Need example]
