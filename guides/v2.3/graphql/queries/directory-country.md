---
group: graphql
title: country query
redirect_from:
  - /guides/v2.3/graphql/reference/directory.html
---

Use the `country` query to retrieve information about a specific country.

## Syntax

`{country(id: String) {Country}}`

## Example usage

The following query returns information about Australia.

**Request:**

```graphql
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

**Response:**

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

## Input attributes

The `country` query requires the following input:

Attribute | Data type | Description
--- | --- | ---
`id` | String | A unique ID for the country

## Output attributes

The query returns a single `Country` object.

{% include graphql/country-output.md %}

## Related topics

*  [countries query]({{page.baseurl}}/graphql/queries/directory-countries.html)
*  [currency query]({{page.baseurl}}/graphql/queries/directory-currency.html)
