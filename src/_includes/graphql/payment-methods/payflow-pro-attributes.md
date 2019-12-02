### payflowpro object

The `payflowpro` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cc_details` | CreditCardDetailsInput! | Required input for credit card related information

### CreditCardDetailsInput object

The `CreditCardDetailsInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cc_exp_month` | Int! | Credit card expiration month
`cc_exp_year` | Int! | Credit card expiration year
`cc_last_4` | Int! | Last four digits of the credit card
`cc_type` | String! | Credit card type