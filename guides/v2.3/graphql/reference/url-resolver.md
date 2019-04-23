---
group: graphql
title: UrlRewrite endpoint
---

A merchant can reconfigure (rewrite) the URL to any product, category, or CMS page. When the rewrite goes into effect, any links that point to the previous URL are redirected to the new address.

## Query

The `urlResolver` query returns the canonical URL for a specified product, category or CMS page. An external app can render a page by a URL without any prior knowledge about the landing page.

### Syntax

`{urlResolver(url: String!): EntityUrl}`

### EntityUrl attributes

The `EntityUrl` output object contains the `id`, `relative_url`, and `type` attributes.

Attribute |  Data Type | Description
--- | --- | ---
`canonical_url` | String | Deprecated. Use `relative_url` instead.
`id` | Int | The ID assigned to the object associated with the specified `url`. This could be a product ID, category ID, or page ID.
`relative_url` | String | The internal relative URL. If the specified  `url` is a redirect, the query returns the redirected URL, not the original.
`type` | UrlRewriteEntityTypeEnum | The value of `UrlRewriteEntityTypeEnum` is one of PRODUCT, CATEGORY, or CMS_PAGE.
`url` | String | The URL to resolve. Magento stores product and category URLs with the `.html` extension.  CMS URLs do not contain the extension.

### UrlRewrite object {#UrlRewrite}

The `products` query can request details about the `UrlRewrite` object.

Attribute | Type | Description
--- | --- | ---
`parameters` | [[`HttpQueryParameter`]](#HttpQueryParameter) | An array of target path parameters
`url` | String | The request URL

### HttpQueryParameter object {#HttpQueryParameter}

The `HttpQueryParameter` object provides details about target path parameters.

Attribute | Type | Description
--- | --- | ---
`name` | String | The parameter name, such as `id`
`value` | String | The value assigned to the parameter

## Example usage

The following query returns information about the URL containing `joust-duffle-bag.html`.

**Request**

```text
{
  urlResolver(url: "joust-duffle-bag.html") {
    id
    relative_url
    type
  }
}
```

**Response**

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

The following product query returns URL rewrite information about the Joust Duffle Bag.

**Request**

```text
{
  products(search: "Joust") {
    items {
      name
      sku
      url_rewrites {
        url
        parameters {
          name
          value
        }
      }
    }
  }
}
```

**Response**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Joust Duffle Bag",
          "sku": "24-MB01",
          "url_rewrites": [
            {
              "url": "no-route",
              "parameters": [
                {
                  "name": "page_id",
                  "value": "1"
                }
              ]
            },
            {
              "url": "joust-duffle-bag.html",
              "parameters": [
                {
                  "name": "id",
                  "value": "1"
                }
              ]
            },
            {
              "url": "gear/joust-duffle-bag.html",
              "parameters": [
                {
                  "name": "id",
                  "value": "1"
                },
                {
                  "name": "category",
                  "value": "3"
                }
              ]
            },
            {
              "url": "gear/bags/joust-duffle-bag.html",
              "parameters": [
                {
                  "name": "id",
                  "value": "1"
                },
                {
                  "name": "category",
                  "value": "4"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```
