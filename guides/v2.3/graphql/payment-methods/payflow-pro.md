---
group: graphql
title: PayPal Payflow Pro payment method
---

Payflow Pro is a payment gateway that processes debit and credit card payments. It is available for customers of the United States, Canada, Australia, and New Zealand.

## Payflow Pro workflow

The following diagram shows the workflow for placing an order when Payflow Pro is the selected payment method.

(Graphic to be added later.)

1. On the checkout page, the customer selects **Credit Card** as the payment method and enters the credit card information as well as the billing and shipping addresses. When the customer clicks **Place Order**, the PWA client uses the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/reference/quote-payment-method.html) mutation to set the payment method to `payflowpro`.

2. The mutation returns a `Cart` object.

3. The client runs the [`createPayflowProToken`]({{page.baseurl}}/graphql/reference/paypal-create-payflow-pro-token.html) mutation to initiate a PayFlow Pro transaction.

4. Magento requests a secure token from the PayFlow Pro gateway. The request also contains billing and shipping information, which Magento extracts from the `Cart` object.

5. The gateway response includes a secure token, a secure token ID, and result codes and descriptions. 

6. Magento returns the secure token, a secure token ID, and result codes and descriptions in response to the `createPayflowProToken` mutation.

7. The client uses a hidden iframe to send a silent post request directly to the PayFlow Pro gateway for account verification. For live requests, send the silent post to `https://payflowlink.paypal.com`. Send test requests to `https://pilot-payflowlink.paypal.com`.

8. The gateway responds directly to the client. The response contains a payload that includes secure token information and billing and shipping information. 

9. The client uses the [`handlePayflowProResponse`]({{page.baseurl}}/graphql/reference/paypal-handle-payflow-pro-response.html) mutation to send the payload to Magento. Magento stores this information without modifying the cart.

10. The mutation returns a `Cart` object.

11. The client runs the [`placeOrder`]({{page.baseurl}}/graphql/reference/quote-place-order.html) mutation, which creates an order in Magento and begins the authorization process.

12. Magento sends an authorization request to the gateway.

13. The gateway sends the response to Magento.

14. Magento creates an order and sends an order ID in response to the `placeOrder` mutation.

## Additional Payment information

When you set the payment method to Payflow Pro in the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/reference/quote-payment-method.html) mutation, the `additional_data` object must contain a `payflowpro` object and a `CreditCardDetailsInput` object.

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

## Example setPaymentMethodOnCart mutation

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Payflow Link payment method.

**Request**

```text
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
    payment_method: {
      code: "payflowpro"
      additional_data: {
        payflowpro: {
          cc_details: {
            cc_exp_month: 12
            cc_exp_year: 2021
            cc_last_4: 1111
            cc_type: "VI"
          }
        }
      }
    }
  })
  {
    cart {
      selected_payment_method {
        code
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
          "code": "payflowpro",
        }
      }
    }
  }
}
```
