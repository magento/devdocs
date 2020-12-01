### payflowpro object

The `payflowpro` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cc_details` | CreditCardDetailsInput! | Required input for credit card related information

### CreditCardDetailsInput object

Magento supports the following values for the `cc_type` attribute. The merchant's payment processor might support only a subset of these values.

*  `AE` - American Express
*  `AU` - Aura
*  `DI` - Discover
*  `DN` - Diners Club
*  `ELO` - Elo
*  `HC` - Hipercard
*  `JCB` - JCB
*  `MC` - MasterCard
*  `MD` - Maestro Domestic
*  `MI` - Maestro International
*  `UN` - UnionPay
*  `VI` - Visa

The `CreditCardDetailsInput` object must contain all of the attributes listed below.

Attribute |  Data Type | Description
--- | --- | ---
`cc_exp_month` | Int! | Credit card expiration month
`cc_exp_year` | Int! | Credit card expiration year
`cc_last_4` | Int! | Last four digits of the credit card
`cc_type` | String! | Credit card type