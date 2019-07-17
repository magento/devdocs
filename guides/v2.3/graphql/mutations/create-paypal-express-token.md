---
group: graphql
title: createPaypalExpressToken mutation
---


### Request a PayPal token

The PayPal `token` will be used in the other mutations. The raw response from PayPal also includes the payer ID in the URL. Extract the payer ID so that it used in the mutation that sets the payment method.

**Request**

```text
mutation {
    createPaypalExpressToken(
        input: {
            cart_id: "rMQdWEecBZr4SVWZwj2AF6y0dNCKQ8uH"
            code: "paypal_express"
            express_button: true
            urls: {
                return_url: "http://magento.test/paypal/express/return/"
                cancel_url: "http://magento.test/paypal/express/cancel/"
            }
        }
    )
    {
        token
        paypal_urls{
            start
            edit
        }
    }
}
```

**Response**

```json
{
  "data": {
    "createPaypalExpressToken": {
      "token": "<PayPal_Token>"
      "paypal_urls": {
        "start": "https://www.sandbox.paypal.com/checkoutnow?token=<PayPal_Token>"
        "edit": "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&useraction=continue&token=<PayPal_Token>"
      }
    }
  }
}
```
