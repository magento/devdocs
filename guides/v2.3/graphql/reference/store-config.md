---
group: graphql
title: Store endpoint
---

The `Store` endpoint defines information about a store's configuration. You can query a non-default store by [changing the header]({{ page.baseurl }}/graphql/send-request.html) in your GraphQL request.

## Query structure

`storeConfig: StoreConfig`

### Supported storeConfig attributes

Use the `storeConfig` attributes to retrieve information about the store's configuration; such as, locale, currency codes, and secure and unsecure URLs.

Attribute |  Data Type | Description | Example
--- | --- | --- | ---
`base_currency_code` | String | Base currency code | `USD`
`base_link_url` | String | Base link URL for the store | `http://magentohost.example.com/`
`base_static_url` | String | Base static URL for the store | `http://magentohost.example.com/pub/static/`
`base_media_url` | String | Base media URL for the store | `http://magentohost.example.com/pub/media/`
`base_url` | String | Base URL for the store | `http://magentohost.example.com/`
`code` | String | A code assigned to the store to identify it | `default`
`default_display_currency_code` | String | Default display currency code | `USD`
`id` | Integer | The ID number assigned to the store | `1`
`locale` | String | Store locale | `en_US`
`secure_base_link_url` | String | Secure base link URL for the store | `https://magentohost.example.com/`
`secure_base_media_url` | String | Secure base media URL for the store | `https://magentohost.example.com/pub/media/`
`secure_base_static_url` | String | Secure base static URL for the store | `https://magentohost.example.com/pub/static/`
`secure_base_url` | String | Secure base URL for the store | `https://magentohost.example.com/`
`timezone` | String | Timezone of the store | `America/Chicago`
`website_id` | Integer | The ID number assigned to the website store belongs | `1` 
`weight_unit` | String | The unit of weight | `lbs`, `kgs`, etc

### Supported theme attributes

Use the `theme` attributes to retrieve information about the store's thematic elements; such as, footer and header information, copyright text, and logo information. These attributes are defined in the `ThemeGraphQl` module.

Attribute |  Data Type | Description
--- | --- | ---
`absolute_footer` | String | Contains scripts that must be included in the HTML before the closing `<body>` tag
`copyright` | String | The copyright statement that appears at the bottom of each page
`default_description` | String | The description that provides a summary of your site for search engine listings and should not be more than 160 characters in length
`default_keywords` | String | A series of keywords that describe your store, each separated by a comma
`default_title` | String | The title that appears at the title bar of each page when viewed in a browser
`demonotice` | Int | Controls the display of the demo store notice at the top of the page. Options: `0` (No) or `1` (Yes)
`head_includes` | String | Contains scripts that must be included in the HTML before the closing `<head>` tag
`header_logo_src` | String | The path to the logo that appears in the header
`head_shortcut_icon` | String | Uploads the small graphic image that appears in the address bar and tab of the browser
`logo_alt` | String | The Alt text that is associated with the logo
`logo_height` | Int | The height of your logo image in pixels
`logo_width` | Int | The width of your logo image in pixels
`title_prefix` | String | A prefix that appears before the title to create a two- or three-part title
`title_suffix` | String | A suffix that appears after the title to create a two-or three part title
`welcome` | String | Text that appears in the header of the page and includes the name of customers who are logged in

### Supported CMS attributes

Use the `cms` attributes to retrieve information about the store's default pages. These attributes are defined in the `CmsGraphQl` module.

Attribute |  Data Type | Description
--- | --- | ---
`cms_home_page` | String | Returns the name of the CMS page that identifies the home page for the store
`cms_no_cookies` | String | Identifies a specific CMS page that appears when cookies are not enabled for the browser
`cms_no_route` | String | Identifies a specific CMS page that you want to appear when a 404 “Page Not Found” error occurs
`front` | String | Indicates the landing page that is associated with the base URL
`no_route` | String | Contains the URL of the default page that you want to appear when if a 404 “Page not Found” error occurs
`show_cms_breadcrumbs` | Int | Determines if a breadcrumb trail appears on all CMS pages in the catalog. Options: `0` (No) or `1` (Yes)

### Supported website attributes

Retrieves information about a website.

Attribute |  Data Type | Description
--- | --- | ---
`code` | String | A code assigned to the website to identify it
`default_group_id` | String | The default group ID that the website has
`id` | Int | The ID number assigned to the website
`is_default` | Boolean | Specifies if this is the default website
`name` | String | The website name. Websites use this name to identify it easier
`sort_order` | Int | The attribute to use for sorting websites

## Example usage

### Query a store's configuation

The following call returns all details of a store's configuration.

**Request**

```text
{
  storeConfig {
    id,
    code,
    website_id,
    locale,
    base_currency_code,
    default_display_currency_code,
    timezone,
    weight_unit,
    base_url,
    base_link_url,
    base_static_url,
    base_media_url,
    secure_base_url,
    secure_base_link_url,
    secure_base_static_url,
    secure_base_media_url
  }
}
```

**Response**

```json
{
  "data": {
    "storeConfig": {
      "id": 1,
      "code": "default",
      "website_id": 1,
      "locale": "en_US",
      "base_currency_code": "USD",
      "default_display_currency_code": "USD",
      "timezone": "America/Chicago",
      "weight_unit": "lbs",
      "base_url": "http://magento2.vagrant193/",
      "base_link_url": "http://magento2.vagrant193/",
      "base_static_url": "http://magento2.vagrant193/pub/static/version1536249714/",
      "base_media_url": "http://magento2.vagrant193/pub/media/",
      "secure_base_url": "http://magento2.vagrant193/",
      "secure_base_link_url": "http://magento2.vagrant193/",
      "secure_base_static_url": "http://magento2.vagrant193/pub/static/version1536249714/",
      "secure_base_media_url": "http://magento2.vagrant193/pub/media/"
    }
  }
}
```

### Query a store's theme

The following query returns information about the store's default title, keywords, and welcome text.

**Request**

```text
{
  storeConfig {
    default_title,
    default_keywords,
    welcome	
  }
}
```

**Response**

```json
{
  "data": {
    "storeConfig": {
      "default_title": "Magento Enterprise Edition",
      "default_keywords": "Magento, Varien, E-commerce",
      "welcome": "Default welcome msg!"
    }
  }
}
```

### Query a store's CMS configuration

The following query returns information about the store's content pages.

**Request**

```text
{
  storeConfig {
    front,
    cms_home_page,
    no_route,
    cms_no_route,
    cms_no_cookies,
    show_cms_breadcrumbs
  }
}
```

**Response**

```json
{
  "data": {
    "storeConfig": {
      "front": "cms",
      "cms_home_page": "home",
      "no_route": "cms/noroute/index",
      "cms_no_route": "no-route",
      "cms_no_cookies": "enable-cookies",
      "show_cms_breadcrumbs": 1
    }
  }
}
```

### Query of website

We can retrieve `Website` object from the [ProductInterface]({{ page.baseurl }}/graphql/reference/products.html#ProductInterface) only.

**Request**

```text
{
    products(filter: {sku: {eq: "simple"}})
    {
        items{
            websites { 
              id 
              name 
              code 
              sort_order 
              default_group_id
              is_default 
            }
        }
    }
}
```

**Response**

```text
{
  "data": {
    "products": {
      "items": [
        {
          "websites": [
            {
              "id": 1,
              "name": "Main Website",
              "code": "base",
              "sort_order": 0,
              "default_group_id": "1",
              "is_default": true
            }
          ]
        }
      ]
    }
  }
}
```