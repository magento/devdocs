---
group: graphql
title: availableStores query
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/store/queries/available-stores/
layout: migrated
---

The `availableStores` query returns configuration information about multiple store views. Use this query to implement a store switcher.

If the `useCurrentGroup` input argument is set to `true`, then the `availableStores` query returns configuration information about store views that have the same parent _store_. If the input argument is not specified or is set to `false`, the query returns values for all store views with the same parent _website_.

Specify the [Store header]({{ page.baseurl }}/graphql/send-request.html) to determine the scope of the call. Without this header, the query returns values for the default store view and other store views with the same parent _store_.

## Syntax

`availableStores(useCurrentGroup: Boolean): [StoreConfig]`

## Example usage

The following query returns information about the store's basic catalog configuration.
**Request:**

```graphql
query {
  availableStores(useCurrentGroup: true) {
    store_code
    store_name
    is_default_store
    store_group_code
    is_default_store_group
    locale
    base_currency_code
    default_display_currency_code
    timezone
    weight_unit
    base_url
    base_link_url
    base_static_url
    base_media_url
    secure_base_url
    secure_base_link_url
    secure_base_static_url
    secure_base_media_url
  }
}
```

**Response:**

```json
{
  "data": {
    "availableStores": [
      {
        "store_code": "default",
        "store_name": "Default Store View",
        "is_default_store": true,
        "store_group_code": "main_website_store",
        "is_default_store_group": true,
        "locale": "en_US",
        "base_currency_code": "USD",
        "default_display_currency_code": "USD",
        "timezone": "America/Chicago",
        "weight_unit": "lbs",
        "base_url": "http://example.com/",
        "base_link_url": "http://example.com/",
        "base_static_url": "http://example.com/pub/static/version1606976517/",
        "base_media_url": "http://example.com/pub/media/",
        "secure_base_url": "http://example.com/",
        "secure_base_link_url": "http://example.com/",
        "secure_base_static_url": "http://example.com/pub/static/version1606976517/",
        "secure_base_media_url": "http://example.com/pub/media/"
      },
      {
        "store_code": "de",
        "store_name": "Europe Store View",
        "is_default_store": false,
        "store_group_code": "main_website_store",
        "is_default_store_group": true,
        "locale": "de_DE",
        "base_currency_code": "USD",
        "default_display_currency_code": "EUR",
        "timezone": "Europe/Berlin",
        "weight_unit": "lbs",
        "base_url": "http://example.com/",
        "base_link_url": "http://example.com/",
        "base_static_url": "http://example.com/pub/static/version1606976517/",
        "base_media_url": "http://example.com/pub/media/",
        "secure_base_url": "http://example.com/",
        "secure_base_link_url": "http://example.com/",
        "secure_base_static_url": "http://example.com/pub/static/version1606976517/",
        "secure_base_media_url": "http://example.com/pub/media/"
      }
    ]
  }
}
```

## Input attributes

Attribute | Data type | Description
--- | --- | ---
`useCurrentGroup` | Boolean | Filter store views by current store group

## Output attributes

{% include graphql/store-config.md %}
