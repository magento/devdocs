1. The PWA client uses the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/mutations/set-payment-method.html) mutation to set the payment method.

1. The mutation returns a `Cart` object.

1. The client runs the [`placeOrder`]({{page.baseurl}}/graphql/mutations/place-order.html) mutation, which creates an order in Magento and begins the authorization process.

1. Magento sends information about the order to PayPal and requests a secure URL that the PWA client will later use to connect to PayPal.

1. PayPal's response includes the secure URL.

1. The `placeOrder` mutation returns an order ID. The order has the status `payment pending`.

1. The client runs the [`getHostedProUrl`]({{page.baseurl}}/graphql/queries/get-hosted-pro-url.html) query to retrieve the secure URL.

1. Magento returns the secure URL in the `secure_form_url` attribute.

1. The PWA client displays a payment form in an iframe rendered from the secure URL. When the customer completes the form, the client sends the payment information directly to the PayPal gateway, bypassing the Magento server.

1. After PayPal processes the payment, the gateway runs a silent post request against the Magento server. As a result, Magento sets the order status to processing, and the order is ready to be invoiced.

1. The PayPal gateway returns control of the customer's browser to the client.
