Attribute |  Data Type | Description
--- | --- | ---
`date_of_birth` | String | The customer’s date of birth. In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers’ full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data.
`dob` | String | Deprecated. Use `date_of_birth` instead. The customer’s date of birth
`email` | String | The customer’s email address. Required to create a customer
`firstname` | String | The customer’s first name. Required to create a customer
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`is_subscribed` | Boolean | The customer's new password
`lastname` | String | The customer’s last name. Required to create a customer
`middlename` | String | The customer’s middle name
`password` | String | The customer's password. Required to create a customer
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer’s Tax/VAT number (for corporate customers)