Attribute |  Data Type | Description
--- | --- | ---
`addresses` | [CustomerAddress](#customerAddressInput) | An array containing the customer's shipping and billing addresses
`created_at` | String | Timestamp indicating when the account was created
`default_billing` | String | The ID assigned to the billing address
`default_shipping` | String | The ID assigned to the shipping address
`dob` | String | The customer's date of birth
`email` | String | The customer's email address
`firstname` | String | The customer's first name
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`group_id` | Int | The group assigned to the user. Default values are 0 (Not logged in), 1 (General), 2 (Wholesale), and 3 (Retailer)
`id` | Int | The ID assigned to the customer
`is_subscribed` | Boolean | Indicates whether the customer is subscribed to the company's newsletter
`lastname` | String | The customer's family name
`middlename` |String | The customer's middle name
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer's Tax/VAT number (for corporate customers)

{% include graphql/customer-address-input.md %}