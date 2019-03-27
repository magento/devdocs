---
group: graphql
title: Store endpoint
---

The `Store` endpoint defines information about a store's configuration. You can query a non-default store by [changing the header]({{ page.baseurl }}/graphql/send-request.html) in your GraphQL request.

## Query structure

`storeConfig: StoreConfig`

### Supported storeConfig attributes

Use the `storeConfig` attributes to retrieve information about the store's configuration; such as, locale, currency codes, and secure and unsecure URLs.

Attribute |  Data Type | Description
--- | --- | ---
`base_currency_code` | String | The code representing the currency in which Magento processes all payment transactions, such as `USD`
`base_link_url` | String | A fully-qualified URL that is used to create relative links to the `base_url`
`base_static_url` | String | The fully-qualified URL that specifies the location of static view files, such as `http://magentohost.example.com/pub/static/`
`base_media_url` | String | The fully-qualified URL that specifies the location of user media files, such as `http://magentohost.example.com/pub/media/`
`base_url` | String | The store's fully-qualified base URL, such as `http://magentohost.example.com/`
`code` | String | A unique identifier for the store
`default_display_currency_code` | String | The code representing the currency displayed on the store, such as `USD`
`id` | Integer | The ID number assigned to the store
`locale` | String | The store's locale, such as `en_US`
`secure_base_link_url` | String | A secure fully-qualified URL that is used to create relative links to the `base_url`
`secure_base_media_url` | String | The secure fully-qualified URL that specifies the location of user media files, such as `https://magentohost.example.com/pub/media/`
`secure_base_static_url` | String | The secure fully-qualified URL that specifies the location of static view files, such as `https://magentohost.example.com/pub/static/`
`secure_base_url` | String | The store's fully-qualified secure base URL, such as `https://magentohost.example.com/`
`timezone` | String | The store's time zone, such as `America/Chicago`
`website_id` | Integer | The ID number assigned to the parent website  
`weight_unit` | String | The weight unit for products, such as `lbs` or `kgs`
{:style="table-layout:auto;"}

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
{:style="table-layout:auto;"}

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
{:style="table-layout:auto;"}


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