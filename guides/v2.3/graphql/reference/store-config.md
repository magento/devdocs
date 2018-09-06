---
group: graphql
title: storeConfig endpoint
---

The `storeConfig` endpoint returns information about a store's configuration, including its locale, currency codes, and the secure and unsecure URLs.

## Query structure

`storeConfig: StoreConfig`

## Supported attributes

Attribute |  Data Type | Description
--- | --- | ---
`id` | Integer | The ID number assigned to the store
`code` | String | A unique identifier for the store
`website_id` | Integer | The ID number assigned to the parent website  
`locale` | String | The store's locale, such as `en_US`
`base_currency_code` | String | The code representing the currency in which Magento processes all payment transactions, such as `USD`
`default_display_currency_code` | String | The code representing the currency displayed on the store, such as `USD`
`timezone` | String | The store's time zone, such as `America/Chicago`
`weight_unit` | String | The weight unit for products, such as `lbs` or `kgs`
`base_url` | String | The store's fully-qualified base URL, such as `http://magentohost.example.com/`
`base_link_url` | String | A fully-qualified URL that is used to create relative links to the `base_url`
`base_static_url` | String | The fully-qualified URL that specifies the location of static view files, such as `http://magentohost.example.com/pub/static/`
`base_media_url` | String | The fully-qualified URL that specifies the location of user media files, such as `http://magentohost.example.com/pub/media/`
`secure_base_url` | String | The store's fully-qualified secure base URL, such as `https://magentohost.example.com/`
`secure_base_link_url` | String | A fully-qualified URL that is used to create relative links to the `base_url`
`secure_base_static_url` | String | The secure fully-qualified URL that specifies the location of static view files, such as `https://magentohost.example.com/pub/static/`
`secure_base_media_url` | String | The secure fully-qualified URL that specifies the location of user media files, such as `https://magentohost.example.com/pub/media/`
{:style="table-layout:auto;"}

## Example usage

The following call returns all details of a store's configuration

**Request**

```
{
  storeConfig{
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
