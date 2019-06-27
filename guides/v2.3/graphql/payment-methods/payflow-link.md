---
group: graphql
title: Paypal Payflow Link payment method
---

PayPal [PayFlow Link](https://developer.paypal.com/docs/classic/payflow/integration-guide/) is available for merchants in the United States and Canada only. Customers are not required to have a personal PayPal account. Instead, customers enter their credit card information in a form that is hosted by PayPal.

The Payflow gateway uses a secure token to send non-credit card transaction data to the Payflow server for storage in a way that cannot be intercepted and manipulated maliciously. This token secures the data for a one-time transaction and is valid for 30 minutes. When the AWS client runs the `placeOrder` mutation, Magento requests a secure token. The Payflow server returns the token as a string of up to 32 alphanumeric characters.

## Payflow Link workflow

The following diagram shows the workflow for placing an order when Payflow Link is the selected payment method.

![PayPal Payflow Link sequence diagram]({{page.baseurl}}/graphql/images/paypal-payflow-link.svg)

1. The PWA client uses the `setPaymentMethodOnCart` mutation to set the payment method to `payflow_link`.

2. The mutation returns a `Cart` object.

3. The client runs the `placeOrder` mutation, which creates an order in Magento and begins the authorization process.

4. Magento requests a secure token from the Payflow Link gateway.

5. The gateway response includes a secure token, a secure token ID, and the URL to use for requesting the Payflow form in step 9.

6. The `placeOrder` mutation returns an order ID. Magento does not return secure token information. The order has the status `payment pending`.

7. The client runs the  `getPayflowLinkToken` mutation to retrieve the secure token information.

8. Magento returns the token information.

9. The client displays a payment form in an iframe rendered from the URL specified by the `paypal_url` from  `getPayflowLinkToken` mutation response. When the customer completes the form, the client sends the payment information directly to the Payflow gateway, bypassing the Magento server.

10. After PayPal processes the payment, the gateway runs a silent post request against the Magento server. As a result, Magento sets the order status to pending, and the order is ready to be invoiced.

11. The Payflow gateway returns control of the customer's browser to the client. 

## Additional Payment  information

You must set the following attributes when setting the payment method to `payflow_link`:

Attribute |  Data Type | Description
--- | --- | ---
`cancel_url` |  String! | The URL PayPal will redirect back to upon payment cancellation
`error_url` | String! | The URL PayPal will redirect back to upon payment error
`return_url` | String! | The URL PayPal will redirect back to upon payment success

## Example setPaymentMethodOnCart mutation

The following example shows the [`setPaymentMethodOnCart`]({{page.baseurl}}/reference/quote-payment-method.html) mutation constructed for the Payflow Link payment method. 

**Request**

``` text
mutation {
    setPaymentMethodOnCart(input: {
        payment_method: {
            code: "payflow_link"
            additional_data: {
                payflow_link: {
                    return_url: "https://www.example.com/payflow/test/return",
                    error_url: "https://www.example.com/payflow/test/error",
                    cancel_url: "https://www.example.com/payflow/test/cancel"
                }
            }
        }
        cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
    }) {
        cart {
            selected_payment_method {
                code
                title
            }
        }
    }
}
```

**Response**

```json
{
  "data": {
    "setPaymentMethodOnCart": {
      "cart": {
        "selected_payment_method": {
          "code": "payflow_link",
          "title": "PayPal Payflow Link"
        }
      }
    }
  }
}
```
