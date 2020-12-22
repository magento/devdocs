### CustomerAddressInput attributes {#customerAddressInput}

The `CustomerAddressInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`city` | String | The city or town
`company` | String | The customer's company
`country_code` | String | The customer's country
`country_id` | String | Deprecated. Use `country_code` instead. The customer's country
`custom_attributes` | [CustomerAddressAttributeInput](#customerAddressAttributeInput) | Deprecated. Not applicable for GraphQL
`default_billing` | Boolean | Indicates whether the address is the default billing address
`default_shipping` | Boolean | Indicates whether the address is the default shipping address
`fax` | String | The fax number
`firstname` | String | The first name of the person associated with the shipping/billing address
`lastname` | String | The family name of the person associated with the shipping/billing address
`middlename` | String | The middle name of the person associated with the shipping/billing address
`postcode` | String | The customer's ZIP or postal code
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`region` | [CustomerAddressRegionInput](#customerAddressRegionInput) | An object that defines the customer's state or province
`street` | [String] | An array of strings that define the street number and name
`suffix` | String | A value such as Sr., Jr., or III
`telephone` | String | The telephone number
`vat_id` | String | The customer's Tax/VAT number (for corporate customers)

### CustomerAddressAttributeInput attributes {#customerAddressAttributeInput}

The `CustomerAddressAttributeInput` data type has been deprecated because the contents are not applicable for GraphQL. It can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String | Attribute code
`value` | String | Attribute value

### CustomerAddressRegionInput attributes {#customerAddressRegionInput}

The `customerAddressRegionInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`region` | String | The state or province name
`region_code` | String | The address region code
`region_id` | Int | The unique ID for a pre-defined region
