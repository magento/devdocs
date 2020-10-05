---
group: graphql
title: availableStores query
---

The `availableStores` query returns configuration information about multiple store views. Use this query to implement a store switcher.

Specify the [Store header]({{ page.baseurl }}/graphql/send-request.html) to determine the scope of the call.

If the `useCurrentGroup` input argument is set to `true`, then the `availableStores` query returns configuration information about store views that have the same parent _store_. If the input argument is not specified or is set to `false`, the query returns values for all store views with the same parent _website_.

## Syntax

`availableStores(useCurrentGroup: Boolean): [StoreConfig]`

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

## Input attributes

Attribute | Data type | Description
--- | --- | ---
useCurrentGroup | Boolean | Filter store views by current store group

## Output attributes

{% include graphql/store-config.md %}
