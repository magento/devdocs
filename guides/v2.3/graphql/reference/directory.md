---
group: graphql
title: Directory endpoint
---

To retrieve country and regional directory information, use the `country`, `countries`, and `currency` queries.

### Country attributes {#countryAttributes}

The `country` object provides the following attributes:

Attribute | Data type | Description
--- | --- | ---
`available_regions` | [[Region]](#region) | An array of regions within a particular country
`full_name_english` | String | The name of the country in English
`full_name_locale` | String | The locale name of the country
`id` | String | A unique ID for the country
`three_letter_abbreviation` | String | The three-letter abbreviation of the country, such as `USA`
`two_letter_abbreviation` | String | The two-letter abbreviation of the country, such as `US`

### Region attributes {#region}

The `Region` object provides the following attributes:

Attribute | Data type | Description
--- | --- | ---
`code` | String | The two-letter code for the region, such as `TX` for Texas
`id` | Int | A unique ID for the region
`name` | String | The name of the region, such as `Texas`

### Countries attributes

The `countries` object provides the following attributes:

Attribute | Data type | Description
--- | --- | ---
`Country` | [[Country]](#countryAttributes)| Provides information for all countries specified in the store

### Currency attributes

The `currency` object provides the following attributes:

Attribute | Data type | Description
--- | --- | ---
`available_currency_codes` | [String] | An array of currencies accepted by the store
`base_currency_code` | String | The base currency set for the store, such as USD
`base_currency_symbol` | String | The symbol for the specified base currency, such as $
`default_display_currency_code` | String | Specifies if the currency code is set as the store's default
`default_display_currency_symbol` | String | Specifies if the currency symbol is set as the store's default
`exchange_rates` | [[ExchangeRate]](#exchangeRateAttributes) | An array of exchange rates specified in the store

### Exchange rate attributes {#exchangeRateAttributes}

The `ExchangeRate` object provides the following attributes:

Attribute | Data type | Description
--- | --- | ---
`currency_to` | String | Specifies the store's default currency to exchange to
`rate` | Float | The exchange rate for the store's default currency

## Country
Use the `country` query to retrieve information about a specific country.

#### Syntax

`{country(id: String) {Country}}`

### Example usage

The following query returns information about Australia.

**Request**

```text
query {
    country(id: "AU") {
        id
        two_letter_abbreviation
        three_letter_abbreviation
        full_name_locale
        full_name_english
        available_regions {
            id
            code
            name
        }
    }
}
```

**Response**

```json
{
  "data": {
    "country": {
      "id": "AU",
      "two_letter_abbreviation": "AU",
      "three_letter_abbreviation": "AUS",
      "full_name_locale": "Australia",
      "full_name_english": "Australia",
      "available_regions": [
        {
          "id": 569,
          "code": "ACT",
          "name": "Australian Capital Territory"
        },
        {
          "id": 570,
          "code": "NSW",
          "name": "New South Wales"
        },
        {
          "id": 576,
          "code": "NT",
          "name": "Northern Territory"
        },
        {
          "id": 572,
          "code": "QLD",
          "name": "Queensland"
        },
        {
          "id": 573,
          "code": "SA",
          "name": "South Australia"
        },
        {
          "id": 574,
          "code": "TAS",
          "name": "Tasmania"
        },
        {
          "id": 571,
          "code": "VIC",
          "name": "Victoria"
        },
        {
          "id": 575,
          "code": "WA",
          "name": "Western Australia"
        }
      ]
    }
  }
}
```

## Countries
Use the `countries` query to return all countries in which the entity can do business.

#### Syntax

`{countries[country] {Countries}}`

### Example usage

The following query returns all countries listed for the current instance of Magento:

**Request**

```text
query {
    countries {
        id
        two_letter_abbreviation
        three_letter_abbreviation
        full_name_locale
        full_name_english
        available_regions {
            id
            code
            name
        }
    }
}
```

**Response**

In this example, the response is intentionally truncated.

```json
{
  "data": {
    "countries": [
      {
        "id": "AD",
        "two_letter_abbreviation": "AD",
        "three_letter_abbreviation": "AND",
        "full_name_locale": "Andorra",
        "full_name_english": "Andorra",
        "available_regions": null
      },
      {
        "id": "AE",
        "two_letter_abbreviation": "AE",
        "three_letter_abbreviation": "ARE",
        "full_name_locale": "United Arab Emirates",
        "full_name_english": "United Arab Emirates",
        "available_regions": null
      },
      {
        "id": "AF",
        "two_letter_abbreviation": "AF",
        "three_letter_abbreviation": "AFG",
        "full_name_locale": "Afghanistan",
        "full_name_english": "Afghanistan",
        "available_regions": null
      },
      {
        "id": "AG",
        "two_letter_abbreviation": "AG",
        "three_letter_abbreviation": "ATG",
        "full_name_locale": "Antigua and Barbuda",
        "full_name_english": "Antigua and Barbuda",
        "available_regions": null
      },
      {
        "id": "AT",
        "two_letter_abbreviation": "AT",
        "three_letter_abbreviation": "AUT",
        "full_name_locale": "Austria",
        "full_name_english": "Austria",
        "available_regions": [
          {
            "id": 102,
            "code": "BL",
            "name": "Burgenland"
          },
          {
            "id": 99,
            "code": "KN",
            "name": "Kärnten"
          },
          {
            "id": 96,
            "code": "NO",
            "name": "Niederösterreich"
          },
          {
            "id": 97,
            "code": "OO",
            "name": "Oberösterreich"
          },
          {
            "id": 98,
            "code": "SB",
            "name": "Salzburg"
          },
          {
            "id": 100,
            "code": "ST",
            "name": "Steiermark"
          },
          {
            "id": 101,
            "code": "TI",
            "name": "Tirol"
          },
          {
            "id": 103,
            "code": "VB",
            "name": "Vorarlberg"
          },
          {
            "id": 95,
            "code": "WI",
            "name": "Wien"
          }
        ]
      }
    ]
  }
}
```

## Currency
Use the `currency` query to return information about the store's currency configuration.

#### Syntax

`{currency {Currency}}`

### Example usage

The following query returns the currency for the current instance of Magento:

**Request**

```text
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

**Response**

```json
{
  "data": {
    "currency": {
      "base_currency_code": "USD",
      "base_currency_symbol": "$",
      "default_display_currency_code": null,
      "default_display_currency_symbol": null,
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
