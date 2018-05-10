---
group: graphql
version: 2.3
title: urlResolver endpoint
github_link: graphql/reference/url-resolver.md
---

The `urlResolver` query returns the canonical URL for a specified product, category or CMS page. An external app can render a page by a url without any prior knowledge about the landing page.

## Query structure

`urlResolver(url: String!): EntityUrl`

where:

Attribute |  Data Type | Description
--- | --- | ---
`url` | String | The URL to resolve. Magento stores product and category URLs with the `.html` extension.  CMS URLs do not contain the extension.
`EntityUrl` | `EntityUrl` | An output object containing the `id`, `canonical_url`, and `type` attributes.
`id` | Int | The ID assigned to the object associated with the specified `url`. This could be a product ID, category ID, or page ID.
`canonical_url` | String | The internal relative URL. If the specified  `url` is a redirect, the query returns the redirected URL, not the original.
`type` | UrlRewriteEntityTypeEnum | The value of `UrlRewriteEntityTypeEnum` is one of PRODUCT, CATEGORY, or CMS_PAGE.

## Example usage

**Request**

{% highlight json %}
{
 urlResolver(url:"joust-duffle-bag.html") {
   id
   canonical_url
   type
 }
}
{% endhighlight %}

**Response**

{% highlight json %}
{
  "data": {
    "urlResolver": {
      "id": 1,
      "canonical_url": "catalog/product/view/id/1",
      "type": "PRODUCT"
    }
  }
}
{% endhighlight %}
