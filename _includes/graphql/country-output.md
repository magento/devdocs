### Country attributes

Attribute | Data type | Description
--- | --- | ---
`available_regions` | [[Region]](#region) | An array of regions within a particular country
`full_name_english` | String | The name of the country in English
`full_name_locale` | String | The locale name of the country
`three_letter_abbreviation` | String | The three-letter abbreviation of the country, such as `USA`
`two_letter_abbreviation` | String | The two-letter abbreviation of the country, such as `US`

### Region attributes {#region}

The `Region` object provides the following attributes:

Attribute | Data type | Description
--- | --- | ---
`code` | String | The two-letter code for the region, such as `TX` for Texas
`id` | Int | A unique ID for the region
`name` | String | The name of the region, such as `Texas`