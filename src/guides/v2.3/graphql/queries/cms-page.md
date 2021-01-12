---
group: graphql
title: cmsPage query
redirect_from:
  - /guides/v2.3/graphql/reference/cms.html
---

The `cmsPage` query returns information about content pages that were developed with the Magento Content Management System (CMS).

## Syntax

Return the contents of a CMS page:

`cmsPage(identifier: String): CmsPage`

## Example usage

You must include the CMS page identifier value to retrieve the content of a specific CMS page. The following query returns information about the "404 Not Found" CMS page:

**Request:**

```graphql
{
  cmsPage(identifier: "no-route") {
    identifier
    url_key
    title
    content
    content_heading
    page_layout
    meta_title
    meta_description
    meta_keywords
  }
}
```

**Response:**

```json
{
  "data": {
    "cmsPage": {
      "identifier": "no-route"
      "url_key": "no-route",
      "title": "404 Not Found",
      "content": "<dl>\r\n<dt>The page you requested was not found, and we have a fine guess why.</dt>\r\n<dd>\r\n<ul class=\"disc\">\r\n<li>If you typed the URL directly, please make sure the spelling is correct.</li>\r\n<li>If you clicked on a link to get here, the link is outdated.</li>\r\n</ul></dd>\r\n</dl>\r\n<dl>\r\n<dt>What can you do?</dt>\r\n<dd>Have no fear, help is near! There are many ways you can get back on track with Magento Store.</dd>\r\n<dd>\r\n<ul class=\"disc\">\r\n<li><a href=\"#\" onclick=\"history.go(-1); return false;\">Go back</a> to the previous page.</li>\r\n<li>Use the search bar at the top of the page to search for your products.</li>\r\n<li>Follow these links to get you back on track!<br /><a href=\"http://magento2.vagrant193/\">Store Home</a> <span class=\"separator\">|</span> <a href=\"http://magento2.vagrant193/customer/account/\">My Account</a></li></ul></dd></dl>\r\n",
      "content_heading": "Whoops, our bad...",
      "page_layout": "2columns-right",
      "meta_title": null,
      "meta_description": "Page description",
      "meta_keywords": "Page keywords"
    }
  }
}
```

## Input attributes

Attribute | Data type | Description
--- | --- | ---
`id` | Int | Deprecated. Use `identifier` instead.
`identifier` | String | The identifier of a CMS page

## Output attributes

The `CmsPage` object can contain the following attributes:

Attribute | Data type | Description
--- | --- | ---
`content` | String | The content of the CMS page in raw HTML
`content_heading` | String | The heading that displays at the top of the CMS page
`identifier` | String | The identifier of the CMS page
`meta_description` | String | A brief description of the page for search results listings
`meta_keywords` | String | A set of keywords that search engines can use to index the page
`meta_title` | String | A page title that is indexed by search engines and appears in search results listings
`page_layout` | String | The design layout of the page, indicating the number of columns and navigation features used on the page
`title` | String | The name that appears in the breadcrumb trail navigation and in the browser title bar and tab
`url_key` |String | The URL key of the CMS page, which is often based on the `content_heading`

## Related topics

[cmsBlocks query]({{page.baseurl}}/graphql/queries/cms-blocks.html)
