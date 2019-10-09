1. When the buyer clicks a PayPal button, the frontend executes the [`createPaypalExpressToken`]({{page.baseurl}}/graphql/mutations/create-paypal-express-token.html) mutation.

1. Magento requests a secure token from PayPal. Magento gathers information in the specified cart and sends this information to PayPal as part of a request for a secure token.

1. If the token request succeeds, PayPal returns a token. You must include this token in subsequent steps.

1. Magento sends the token to the client. The `createPaypalExpressToken` response includes the token and the PayPal URLs to be used in the next step.

1. Redirect the customer to PayPal for approval. Depending on your implementation, the customer is either redirected to the PayPal login screen, or the customer enters their credentials in-context.

1. If the customer approves the payment, PayPal redirects the customer back to the payment confirmation page. The response includes the secure token and payer ID as GET parameters.

1. Set the payment method. The frontend runs the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/mutations/set-payment-method.html) mutation. The payload includes the PayPal token, the payer ID, and the cart ID. The cart may have been updated since the token was requested, as shipping costs, taxes, and other adjustments might have been applied to the cart. Magento submits the updated cart to PayPal.

1. Magento returns a `Cart` object.

1. Place the order with the [`placeOrder`]({{page.baseurl}}/graphql/mutations/place-order.html) mutation.

1. Magento sends the secure token, payer ID, and final cart information to PayPal.

1. PayPal captures the payment by transferring the funds from the customer account to the appropriate merchant account.

1. Magento creates an order, ready for fulfillment.