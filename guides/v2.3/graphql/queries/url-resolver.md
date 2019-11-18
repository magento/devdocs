---
group: graphql
title: urlResolver query
redirect_from:
  - /guides/v2.3/graphql/reference/url-resolver.html
---

A merchant can reconfigure (rewrite) the URL to any product, category, or CMS page. When the rewrite goes into effect, any links that point to the previous URL are redirected to the new address.

The `urlResolver` query returns the canonical URL for a specified product, category, or CMS page. An external app can render a page by a URL without any prior knowledge about the landing page.

## Syntax

`{urlResolver(url: String!): EntityUrl}`

## Example usage

### Query the URL's information

The following query returns information about the URL containing `joust-duffle-bag.html`.

**Request:**

```graphql
{
  urlResolver(url: "joust-duffle-bag.html") {
    id
    relative_url
    type
  }
}
```

**Response:**

```json
{
  "data": {
    "urlResolver": {
      "id": 1,
      "relative_url": "catalog/product/view/id/1",
      "type": "PRODUCT"
    }
  }
}
```

## Input attributes

The `urlResolver` query contains the following attribute.

Attribute | Type | Description
--- | --- | ---
`url` | String | The requested URL

## Output attributes

The `EntityUrl` output object contains the `id`, `relative_url`, and `type` attributes.

Attribute |  Data Type | Description
--- | --- | ---
`canonical_url` | String | Deprecated. Use `relative_url` instead.
`id` | Int | The ID assigned to the object associated with the specified `url`. This could be a product ID, category ID, or page ID.
`relative_url` | String | The internal relative URL. If the specified  `url` is a redirect, the query returns the redirected URL, not the original.
`type` | UrlRewriteEntityTypeEnum | The value of `UrlRewriteEntityTypeEnum` is one of PRODUCT, CATEGORY, or CMS_PAGE.
`url` | String | The URL to resolve. Magento stores product and category URLs with the `.html` extension.  CMS URLs do not contain the extension.

## Related topics

[Products endpoint]({{page.baseurl}}/graphql/queries/products.html)
