The `NegotiableQuoteAddressInput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`city` | String! | The city specified for the billing or shipping address
`company` | String | The company name
`country_code` | String! | The country code and label for the billing or shipping address
`firstname` | String! | The first name of the company user
`lastname` | String! | The last name of the company user
`postcode` | String | The ZIP or postal code of the billing or shipping address
`region` | String | A string that defines the state or province of the billing or shipping address
`region_id` | Int | An integer that defines the state or province of the billing or shipping address
`save_in_address_book` | Boolean | Determines whether to save the address in the customer's address book. The default value is true
`street` | [String!]! | An array containing the street for the billing or shipping address
`telephone` | String | The telephone number for the billing or shipping address
