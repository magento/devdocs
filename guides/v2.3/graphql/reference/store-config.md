---
group: graphql
title: storeConfig endpoint
---

The `storeConfig` endpoint defines information about a store's configuration; such as, locale, currency codes, secure and unsecure URLs, and the store's thematic elements; such as, footer and header information, copyright text, and logo information.

## Query structure

`storeConfig: StoreConfig`

## Supported attributes

Attribute |  Data Type | Description | Implementation
--- | --- | --- | ---
`absolute_footer` | String | Footer Miscellaneous HTML | Theme
`base_currency_code` | String | The code representing the currency in which Magento processes all payment transactions, such as `USD` | storeConfig
`base_link_url` | String | A fully-qualified URL that is used to create relative links to the `base_url` | storeConfig
`base_static_url` | String | The fully-qualified URL that specifies the location of static view files, such as `http://magentohost.example.com/pub/static/` | storeConfig
`base_media_url` | String | The fully-qualified URL that specifies the location of user media files, such as `http://magentohost.example.com/pub/media/` | storeConfig
`base_url` | String | The store's fully-qualified base URL, such as `http://magentohost.example.com/` | storeConfig
`code` | String | A unique identifier for the store | storeConfig
`copyright` | String | Copyright | Theme
`default_display_currency_code` | String | The code representing the currency displayed on the store, such as `USD` | storeConfig
`default_description` | String | Default Meta Description | Theme
`default_keywords` | String | Default Meta Keywords | Theme
`default_title` | String | Default Page Title | Theme
`demonotice` | Int | Display Demo Store Notice | Theme
`head_includes` | String | Scripts and Style Sheets | Theme
`header_logo_src` | String | Logo Image | Theme
`head_shortcut_icon` | String | Favicon Icon | Theme
`id` | Integer | The ID number assigned to the store | storeConfig
`locale` | String | The store's locale, such as `en_US` | storeConfig
`logo_alt` | String | Logo Image Alt | Theme
`logo_height` | Int | Logo Attribute Height | Theme
`logo_width` | Int | Logo Attribute Width | Theme
`secure_base_link_url` | String | A fully-qualified URL that is used to create relative links to the `base_url` | storeConfig
`secure_base_media_url` | String | The secure fully-qualified URL that specifies the location of user media files, such as `https://magentohost.example.com/pub/media/` | storeConfig
`secure_base_static_url` | String | The secure fully-qualified URL that specifies the location of static view files, such as `https://magentohost.example.com/pub/static/` | storeConfig
`secure_base_url` | String | The store's fully-qualified secure base URL, such as `https://magentohost.example.com/` | storeConfig
`timezone` | String | The store's time zone, such as `America/Chicago` | storeConfig
`title_prefix` | String | Page Title Prefix | Theme
`title_suffix` | String | Page Title Suffix | Theme
`website_id` | Integer | The ID number assigned to the parent website  | storeConfig 
`weight_unit` | String | The weight unit for products, such as `lbs` or `kgs` | storeConfig
`welcome` | String | Welcome Text | Theme
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
