Attribute |  Data Type | Description
--- | --- | ---
`applied_coupon` | [`AppliedCoupon`][AppliedCoupon] | The `AppliedCoupon` object contains the `code` text attribute, which specifies the coupon code
`available_payment_methods` | [AvailablePaymentMethod][AvailablePaymentMethod] | Available payment methods
`billing_address` | [BillingCartAddress][BillingCartAddress] | Contains the billing address specified in the customer's cart
`email` | String | The customer's email address
`items` | [CartItemInterface][CartItemInterface] | Contains the items in the customer's cart
`prices` | [CartPrices][CartPrices] | Contains subtotals and totals
`selected_payment_method` | [SelectedPaymentMethod][SelectedPaymentMethod] | Selected payment method
`shipping_addresses` | [ShippingCartAddress][ShippingCartAddress] | Contains one or more shipping addresses

[AppliedCoupon]: {{page.baseurl}}/graphql/reference/quote.html#AppliedCoupon
[AvailablePaymentMethod]: {{page.baseurl}}/graphql/reference/quote.html#AvailablePaymentMethod
[BillingCartAddress]: {{page.baseurl}}/graphql/reference/quote.html#BillingCartAddress
[CartItemInterface]: {{page.baseurl}}/graphql/reference/quote.html#CartItemInterface
[CartPrices]: {{page.baseurl}}/graphql/reference/quote.html#CartPrices
[SelectedPaymentMethod]: {{page.baseurl}}/graphql/reference/quote.html#SelectedPaymentMethod
[ShippingCartAddress]: {{page.baseurl}}/graphql/reference/quote.html#ShippingCartAddress
