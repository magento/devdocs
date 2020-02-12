---
group: graphql
title: Extend an existing GraphQL schema
contributor_name: Adarsh Manickam
contributor_link: https://github.com/drpayyne
---

The Magento GraphQL system is built in a way so that you can extend existing GraphQL schemas to add more fields, and modify existing resolver behavior, among other extension points. This works similar to the XML merging mechanism present. All `schema.graphqls` files are merged together to a single schema file. In this process, all nodes with the same type name are merged together and recursively added/replaced, just like how XML merging works.
