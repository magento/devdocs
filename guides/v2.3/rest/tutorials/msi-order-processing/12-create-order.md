---
layout: tutorial
group: rest
title: Step 12. Create an order
menu_title: Step 12. Create an order
menu_order: 120
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/12-create-order.md
functional_areas:
  - Integration
---

The {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %} contains two items totaling $170. The shipping charges are $5, making the grand total $175. We're now ready to convert the {% glossarytooltip 77e19d0d-e7b1-4d3d-9bad-e92fbb9fb59a %}quote{% endglossarytooltip %} to an order.

## Send payment information {#send-payment}

When you submit payment information, Magento creates an order and sends an order confirmation to the customer. Since we are using an offline {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %} in this tutorial, we do not need to provide detailed payment information. The endpoint used in this example requires only the payment method and billing address information.

**Endpoint**

`POST http://<host>/rest/uk/V1/carts/mine/payment-information`

**Scope**

`uk` store view

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <customer token>`

**Payload**

``` json
{
	"paymentMethod": {
    	    	"method": "banktransfer"
	 },
	"billing_address": {
    	    	"email": "jdoe@example.com",
  	      	"region": "New York",
          	"region_id": 43,
          	"region_code": "NY",
    	    	"country_id": "US",
    	    	"street": ["123 Oak Ave"],
    	    	"postcode": "10577",
    	    	"city": "Purchase",
    	    	"telephone": "512-555-1111",
    	    	"firstname": "Jane",
    	    	"lastname": "Doe"
	 }
}
```

**Response**

An `orderID`, such as `1

## Verify this step {#verify-step}

1. Log in to the Test store as the customer. The dashboard shows the order.
2. Log in to {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}. Click **Sales** > **Orders**. The order is displayed in the grid. Its status is Pending.`.
