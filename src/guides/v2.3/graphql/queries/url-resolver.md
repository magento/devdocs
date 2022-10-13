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

### URL resolver for a product

The following query returns information about the URL containing `joust-duffle-bag.html` for a product.

**Request:**

```graphql
{
  urlResolver(url: "joust-duffle-bag.html") {
    id
    relative_url
    redirectCode
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
      "redirectCode": 0,
      "type": "PRODUCT"
    }
  }
}
```

### URL resolver for a category

The following query returns information about the URL containing `gear/bags.html` for category page.

**Request:**

```graphql
{
  urlResolver(url: "gear/bags.html") {
    id
    relative_url
    redirectCode
    type
  }
}
```

**Response:**

```json
{
  "data": {
    "urlResolver": {
      "id": 4,
      "relative_url": "gear/bags.html",
      "redirectCode": 0,
      "type": "CATEGORY"
    }
  }
}
```

### URL resolver for a CMS page

The following query returns information about the URL containing `no-route` for a CMS page.

**Request:**

```graphql
{
  urlResolver(url: "no-route") {
    id
    relative_url
    redirectCode
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
      "relative_url": "no-route",
      "redirectCode": 0,
      "type": "CMS_PAGE"
    }
  }
}
```

## Input attributes

The `urlResolver` query contains the following attribute.

Attribute | Type | Description
--- | --- | ---
`url` | String | The requested URL. To query for product and category pages, the `url` value must contain the URL key and suffix. For category page queries, the `url` value must contain the full path of the URL key. For CMS page queries, the `url` value must contain the URL key only.

## Output attributes

The `EntityUrl` output object contains the `id`, `relative_url`, and `type` attributes.

Attribute |  Data Type | Description
--- | --- | ---
`canonical_url` | String | Deprecated. Use `relative_url` instead
`id` | Int | The ID assigned to the object associated with the specified `url`. This could be a product ID, category ID, or page ID
`redirectCode` | Int | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect
`relative_url` | String | The internal relative URL. If the specified  `url` is a redirect, the query returns the redirected URL, not the original
`type` | UrlRewriteEntityTypeEnum | The value of `UrlRewriteEntityTypeEnum` is one of PRODUCT, CATEGORY, or CMS_PAGE

## Related topics

[Products endpoint]({{page.baseurl}}/graphql/queries/products.html)

## Errors

Error | Description
--- | ---
`Field urlResolver.url of type String! is required but not provided.` | The value specified in the `urlResolver.url` argument is empty.