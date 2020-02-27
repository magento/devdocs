Attribute |  Data Type | Description
--- | --- | ---
`address_region` | CartAddressRegionInput | An object containing the region label and code
`city` | String! | The city specified for the billing or shipping address
`company` | String | The company specified for the billing or shipping address
`country_code` | String! | The country code and label for the billing or shipping address
`firstname` | String! | The customer's first name
`lastname` | String! | The customer's last name
`postcode` | String | The postal code for the billing or shipping address
`region` | String | Deprecated. Use `address_region` instead. The region code and label for the billing or shipping address
`save_in_address_book` | Boolean! | Specifies whether to save the address (`True`/`False`)
`street` | [String]! | An array containing the street for the billing or shipping address
`telephone` | String | The telephone number for the billing or shipping address

### CartAddressRegionInput

Attribute |  Data Type | Description
--- | --- | ---
`code` | String | A code representing the state or province
`label` | String | The state or province name