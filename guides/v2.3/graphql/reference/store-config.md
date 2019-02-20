---
group: graphql
title: storeConfig endpoint
---

The `storeConfig` endpoint defines information about a store's configuration; such as, locale, currency codes, secure and unsecure URLs, and the store's thematic elements; such as, footer and header information, copyright text, and logo information.

## Query structure

`storeConfig: StoreConfig`

## Supported storeConfig attributes

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
`secure_base_link_url` | String | A fully-qualified URL that is used to create relative links to the `base_url`
`secure_base_media_url` | String | The secure fully-qualified URL that specifies the location of user media files, such as `https://magentohost.example.com/pub/media/`
`secure_base_static_url` | String | The secure fully-qualified URL that specifies the location of static view files, such as `https://magentohost.example.com/pub/static/`
`secure_base_url` | String | The store's fully-qualified secure base URL, such as `https://magentohost.example.com/`
`timezone` | String | The store's time zone, such as `America/Chicago`
`website_id` | Integer | The ID number assigned to the parent website  
`weight_unit` | String | The weight unit for products, such as `lbs` or `kgs`
{:style="table-layout:auto;"}

## Supported theme attributes

Attribute |  Data Type | Description
--- | --- | ---
`absolute_footer` | String | Footer Miscellaneous HTML
`copyright` | String | Copyright
`default_description` | String | Default Meta Description
`default_keywords` | String | A comma-separated list of keywords
`default_title` | String | Default page title
`demonotice` | Int | Display Demo Store Notice
`head_includes` | String | Scripts and Style Sheets
`header_logo_src` | String | Logo Image
`head_shortcut_icon` | String | Favicon Icon
`logo_alt` | String | Logo Image Alt
`logo_height` | Int | Logo Attribute Height
`logo_width` | Int | Logo Attribute Width
`title_prefix` | String | Page Title Prefix
`title_suffix` | String | Page Title Suffix
`welcome` | String | Welcome Text
{:style="table-layout:auto;"}

## Supported cms attributes

Attribute |  Data Type | Description
--- | --- | ---
`cms_home_page` | String | CMS Home Page
`cms_no_cookies` | String | CMS No Cookies Page
`cms_no_route` | String | CMS No Route Page
`front` | String | Default Web URL
`no_route` | String | Default No-route URL
`show_cms_breadcrumbs` | Int | Show Breadcrumbs for CMS Pages
{:style="table-layout:auto;"}


## Example usage

The following call returns all details of a store's configuration.

**Request**

``` text
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

``` json
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
