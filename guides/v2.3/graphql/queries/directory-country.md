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

## Input attributes {#inputAttributes}

The `country` object provides the following attributes:

Attribute | Data type | Description
--- | --- | ---
`available_regions` | [[Region]](#region) | An array of regions within a particular country
`full_name_english` | String | The name of the country in English
`full_name_locale` | String | The locale name of the country
`id` | String | A unique ID for the country
`three_letter_abbreviation` | String | The three-letter abbreviation of the country, such as `USA`
`two_letter_abbreviation` | String | The two-letter abbreviation of the country, such as `US`

## Region attributes {#region}

The `Region` object provides the following attributes:

Attribute | Data type | Description
--- | --- | ---
`code` | String | The two-letter code for the region, such as `TX` for Texas
`id` | Int | A unique ID for the region
`name` | String | The name of the region, such as `Texas`

## Related topics

* [countries query]({{page.baseurl}}/graphql/queries/directory-countries.html)
* [currency query]({{page.baseurl}}/graphql/queries/directory-currency.html)
