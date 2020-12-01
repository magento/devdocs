---
group: graphql
title: currency query
---

Use the `currency` query to return information about the store's currency configuration.

## Syntax

`{currency {Currency}}`

## Example usage

The following query returns the currency for the current instance of Magento:

**Request:**

```graphql
query {
    currency {
        base_currency_code
        base_currency_symbol
        default_display_currency_code
        default_display_currency_symbol
        available_currency_codes
        exchange_rates {
            currency_to
            rate
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "currency": {
      "base_currency_code": "USD",
      "base_currency_symbol": "$",
      "default_display_currency_code": "USD",
      "default_display_currency_symbol": "$",
      "available_currency_codes": [
        "USD"
      ],
      "exchange_rates": [
        {
          "currency_to": "USD",
          "rate": 1
        }
      ]
    }
  }
}
```

## Output attributes

The `currency` object provides the following attributes:

Attribute | Data type | Description
--- | --- | ---
`available_currency_codes` | [String] | An array of three-letter currency codes accepted by the store, such as `USD` and `EUR`
`base_currency_code` | String | The base currency set for the store, such as USD
`base_currency_symbol` | String | The symbol for the specified base currency, such as $
`default_display_currency_code` | String | Specifies if the currency code is set as the store's default
`default_display_currency_symbol` | String | Specifies if the currency symbol is set as the store's default
`exchange_rates` | [[ExchangeRate]](#exchangeRateAttributes) | An array of exchange rates specified in the store

## Exchange rate attributes {#exchangeRateAttributes}

The `ExchangeRate` object provides the following attributes:

Attribute | Data type | Description
--- | --- | ---
`currency_to` | String | Specifies the store's default currency to exchange to
`rate` | Float | The exchange rate for the store's default currency

## Related topics

*  [countries query]({{page.baseurl}}/graphql/queries/directory-countries.html)
*  [country query]({{page.baseurl}}/graphql/queries/directory-country.html)
