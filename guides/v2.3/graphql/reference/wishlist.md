---
group: graphql
title: Wishlist endpoints
---

The Wish list endpoint returns the contents of a customer's wish list.

## Query structures

Return the contents of a CMS page:

`cmsPage(id: Int): CmsPage`

### Input attributes

Attribute | Data type | Description
--- | --- | ---
`items` | Array | An array of items in the customer's wish list
`items_count` | Int | The number of items in the wish list
`name` | String | When multiple wish lists are enabled, the name the customer assigns to the wish list
`sharing_code` | String | An encrypted code that Magento uses to link to the wish list
`updated_at` | String | The time of the last modification to the wish list


###  CmsBlocks output attributes

The `CmsBlocks` object contains an array of `items`, each of which can contain the following attributes:

Attribute | Data type | Description
--- | --- | ---
`content` | String | The content of the CMS block in raw HTML
`identifier` | String | The CMS block identifier
`title` | String | The title assigned to the CMS block
{:style="table-layout:auto;"}

## Example usage

### Query a CMS page

The following query returns information about the "404 Not Found" CMS page:

**Request** 

```
{
  wishlist {
    items_count
    name
    sharing_code
    updated_at
    items {
      id
      qty
      description
      added_at
      product {
        sku
        name
      }
    }
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