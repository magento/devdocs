---
group: graphql
title: availableStores query
---

The `availableStores` query returns configuration information about all store views that have the same parent website. Use this query to implement a store switcher.

{:.bs-callout-tip}
Specify the [Store header]({{ page.baseurl }}/graphql/send-request.html) to determine the scope of the call.

## Syntax

`availableStores: [StoreConfig]`

## Example usage

The following query returns information about the store's basic catalog configuration.
**Request:**

```graphql
query {
  availableStores {
    id
    code
    website_id
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
    store_name
  }
}
```

**Response:**

```json
{
  "data": {
    "availableStores": [
      {
        "id": 1,
        "code": "default",
        "website_id": 1,
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
        "secure_base_media_url": "http://example.com/pub/media/",
        "store_name": "Default Store View"
      },
      {
        "id": 2,
        "code": "de",
        "website_id": 1,
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
        "secure_base_media_url": "http://example.com/pub/media/",
        "store_name": "Europe Store View"
      }
    ]
  }
}
```

## Output attributes

{% include graphql/store-config.md %}
