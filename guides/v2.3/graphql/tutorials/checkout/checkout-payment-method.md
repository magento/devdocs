---
layout: tutorial
group: graphql
title: Step 7. Set payment method
subtitle: GraphQl checkout tutorial
return_to:
  title: GraphQl checkout tutorial
  url: graphql/tutorials/index.html
menu_order: 7
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

Use the following `cart` query to get payment methods which are available for your order.

**Request**

```text
query {
  cart(cart_id: "{{ CART_ID }}") {
    available_payment_methods {
      code
      title
    }
  }
}
```

where 
`{{ CART_ID }}` - shopping cart unique ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Response**

```json
{
  "data": {
    "cart": {
      "available_payment_methods": [
        {
          "code": "checkmo",
          "title": "Check / Money order"
        }
      ]
    }
  }
}
```

Use `setPaymentMethodOnCart` mutation query to set a payment method for your order.

**Request**

```text
mutation {
  setPaymentMethodOnCart(input: {
      cart_id: "{{ CART_ID }}"
      payment_method: {
          code: "checkmo"
      }
  }) {    
    cart {
      selected_payment_method {
        code
      }
    }
  }
}
```

where 
`{{ CART_ID }}` - shopping cart unique ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).
`checkmo` - code of "Check / Money order" payment method

**Response**

If operation has been successfully executed you will get the code of selected payment method in the response. 

```json
{
  "data": {
    "setPaymentMethodOnCart": {
      "cart": {
        "selected_payment_method": {
          "code": "checkmo"
        }
      }
    }
  }
}
```

{:.bs-callout .bs-callout-info}
Send customer's authorization token in the `Authorization` parameter of the header if you set payment method to quote of a registered customer. See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) to get more details.
