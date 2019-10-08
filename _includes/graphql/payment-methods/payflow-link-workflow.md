1. The PWA client uses the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/mutations/set-payment-method.html) mutation to set the payment method.

1. The mutation returns a `Cart` object.

1. The client runs the [`placeOrder`]({{page.baseurl}}/graphql/mutations/place-order.html) mutation, which creates an order in Magento and begins the authorization process.

1. Magento requests a secure token from the Paypal gateway.

1. The gateway response includes a secure token, a secure token ID, and the URL to use for requesting the form in step 9. This token secures the data for a one-time transaction and is valid for 30 minutes.

1. The `placeOrder` mutation returns an order ID. Magento does not return secure token information. The order has the status `payment pending`.

1. The client runs the [`getPayflowLinkToken`]({{page.baseurl}}/graphql/queries/get-payflow-link-token.html) mutation to retrieve the secure token information.

1. Magento returns the token information.

1. The client displays a payment form in an iframe rendered from the URL specified by the `paypal_url` from the `getPayflowLinkToken` mutation response. When the customer completes the form, the client sends the payment information directly to the PayPal gateway, bypassing the Magento server.

1. After PayPal processes the payment, the gateway runs a silent post request against the Magento server. As a result, Magento sets the order status to processing, and the order is ready to be invoiced.

1. The PayPal gateway returns control of the customer's browser to the client.