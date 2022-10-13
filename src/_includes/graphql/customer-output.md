Attribute |  Data Type | Description
--- | --- | ---
`addresses` | [CustomerAddress](#customerAddressOutput)  | An array containing the customer's shipping and billing addresses
`created_at` | String | Timestamp indicating when the account was created
`date_of_birth` | String | The customer's date of birth. In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers’ full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data.
`default_billing` | String | The ID assigned to the billing address
`default_shipping` | String | The ID assigned to the shipping address
`dob` | String | Deprecated. Use `date_of_birth` instead. The customer's date of birth
`email` | String | The customer's email address
`firstname` | String | The customer's first name
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`group_id` | Int | Deprecated. This attribute is not applicable for GraphQL. The group assigned to the user. Default values are 0 (Not logged in), 1 (General), 2 (Wholesale), and 3 (Retailer)
`id` | Int | Deprecated. This attribute is not applicable for GraphQL.The ID assigned to the customer
`is_subscribed` | Boolean | Indicates whether the customer is subscribed to the company's newsletter
`lastname` | String | The customer's family name
`middlename` |String | The customer's middle name
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer's Tax/VAT number (for corporate customers)
`wishlist` | Wishlist! | Contains the contents of the customer's wish lists

{% include graphql/customer-address-output.md %}
