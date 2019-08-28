---
group: graphql
title: CMS endpoints
---

The `cmsPage` and `cmsBlock` endpoints return information about content pages and blocks that were developed with the Magento Content Management System (CMS).

## Query structures

Return the contents of a CMS page:

`cmsPage(id: Int): CmsPage`

Return the contents of one or more CMS blocks:

`cmsBlocks(identifiers: [String]): CmsBlocks`

### Input attributes

Attribute | Data type | Description
--- | --- | ---
`id` | Int | The ID of a CMS page
`identifiers` | [String] | An array containing a comma-separated list of block identifiers

### CmsPage output attributes

The `CmsPage` object can contain the following attributes:

Attribute | Data type | Description
--- | --- | ---
`content_heading` | String | The heading that displays at the top of the CMS page
`content` | String | The content of the CMS page in raw HTML
`meta_description` | String | A brief description of the page for search results listings
`meta_keywords` | String | A set of keywords that search engines can use to index the page
`meta_title` | String | A page title that is indexed by search engines and appears in search results listings
`page_layout` | String | The design layout of the page, indicating the number of columns and navigation features used on the page
`title` | String | The name that appears in the breadcrumb trail navigation and in the browser title bar and tab
`url_key` |String | The URL key of the CMS page, which is often based on the `content_heading`

### CmsBlocks output attributes

The `CmsBlocks` object contains an array of `items`, each of which can contain the following attributes:

Attribute | Data type | Description
--- | --- | ---
`content` | String | The content of the CMS block in raw HTML
`identifier` | String | The CMS block identifier
`title` | String | The title assigned to the CMS block

## Example usage

### Query a CMS page

The following query returns information about the "404 Not Found" CMS page:

**Request**

```
{
  cmsPage(id: 1) {
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

**Response**

```json
{
  "data": {
    "cmsPage": {
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

### Query a CMS block

The following query returns information about the `login-data` block:

**Request**

```
{
  cmsBlocks(identifiers: "login-data") {
    items {
      identifier
      title
      content
    }
  }
}
```

**Response**

```json
{
  "data": {
    "cmsBlocks": {
      "items": [
        {
          "identifier": "login-data",
          "title": "Login Info Block",
          "content": "<div class=\"message info\" style=\"margin-top: 50px;\">\n    <p><strong>Try Demo Customer Access</strong></p>\n    <p><span style=\"display:inline-block; width: 80px; padding-right: 10px;\">Email:</span>roni_cost@example.com</p>\n    <p><span style=\"display:inline-block; width: 80px; padding-right: 10px;\">Password:</span>roni_cost3@example.com</p>\n</div>"
        }
      ]
    }
  }
}
```
