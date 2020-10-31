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

The following query returns information about the store's catalog configuration.

**Request:**

```graphql
query {
  availableStores {
    id
    code
    locale
    base_currency_code
    base_url
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
        "locale": "en_US",
        "base_currency_code": "USD",
        "base_url": "http://example.com/"
      },
      {
        "id": 2,
        "code": "de",
        "locale": "de_DE",
        "base_currency_code": "EUR",
        "base_url": "http://example.com/"
      }
    ]
  }
}
```

## Output attributes

{% include graphql/store-config.md %}
