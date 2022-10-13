---
group: graphql
title: urlResolver query
---

{:.bs-callout-warning}
The `urlResolver` query has been deprecated. Use the [route]({{page.baseurl}}/graphql/queries/route.html) query instead.

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
    entity_uid
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
      "entity_uid": "MQ==",
      "relative_url": "joust-duffle-bag.html",
      "redirectCode": 0,
      "type": "PRODUCT"
    }
  }
}
```

## Input attributes

The `urlResolver` query contains the following attribute.

Attribute | Type | Description
--- | --- | ---
`url` | String! | The requested URL. To query for product and category pages, the `url` value must contain the URL key and suffix. For CMS page queries, the `url` value must contain the URL key only.

## Output attributes

The `EntityUrl` output object contains the `id`, `relative_url`, and `type` attributes.

Attribute |  Data Type | Description
--- | --- | ---
`canonical_url` | String | Deprecated. Use `relative_url` instead
`entity_uid` | ID! | The unique ID assigned to the object associated with the specified `url`, such as `ProductInterface`, `CategoryInterface`, or `CmsPage`. This could be a product, category, or CMS ID
`id` | Int | Deprecated. Use `entity_uid` instead. The ID assigned to the object associated with the specified `url`. This could be a product ID, category ID, or page ID
`redirectCode` | Int | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect
`relative_url` | String | The internal relative URL. If the specified  `url` is a redirect, the query returns the redirected URL, not the original
`type` | UrlRewriteEntityTypeEnum | The value of `UrlRewriteEntityTypeEnum` is one of PRODUCT, CATEGORY, or CMS_PAGE

## Related topics

[Products query]({{page.baseurl}}/graphql/queries/products.html)
