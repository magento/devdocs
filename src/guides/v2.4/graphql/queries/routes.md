---
group: graphql
title: routes query
---

A merchant can reconfigure (rewrite) the URL to any product, category, or CMS page. When the rewrite goes into effect, any links that point to the previous URL are redirected to the new address.

The `routes` query returns the canonical URL for a specified product, category, or CMS page. An external app can render a page by a URL without any prior knowledge about the landing page.

## Syntax

`{routes(url: String!): RoutableInterface}`

## Example usage

### Query the URL's information

The following query returns information about the URL containing `joust-duffle-bag.html`.

**Request:**

```graphql

```

**Response:**

```json

```

## Input attributes

The `routes` query requires the following attribute.

Attribute | Type | Description
--- | --- | ---
`url` | String! | The requested URL. To query for product and category pages, the `url` value must contain the URL key and suffix. For CMS page queries, the `url` value must contain the URL key only.

## Output attributes

The `EntityUrl` output object contains the `id`, `relative_url`, and `type` attributes.

Attribute |  Data Type | Description
--- | --- | ---


## Related topics

[Products query]({{page.baseurl}}/graphql/queries/products.html)
