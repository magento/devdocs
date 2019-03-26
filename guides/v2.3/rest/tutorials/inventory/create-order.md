---
layout: tutorial
title: Step 9. Create an order
subtitle: Order processing with Inventory Management
menu_title: Step 9. Create an order
menu_order: 90
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
redirect_from: /guides/v2.3/rest/tutorials/msi-order-processing/create-order.html
functional_areas:
  - Integration
---

The {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %} contains 71 items totaling $2462. The shipping charges are $350, making the grand total $2812. We're now ready to convert the {% glossarytooltip 77e19d0d-e7b1-4d3d-9bad-e92fbb9fb59a %}quote{% endglossarytooltip %} to an order.

When you create an order, Magento enters reservations for the total amount of products. These reservations place a hold on that amount of inventory per stock, temporarily deducting the amount from the salable quantity. On the Products page of Admin, the **Salable Quantity** column accounts for reservations. When an order is shipped, Magento updates the quantities in the **Quantity per Source** column.

## Send payment information {#send-payment}

When you submit payment information, Magento creates an order and sends an order confirmation to the customer. Since we are using an offline {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %} in this tutorial, we do not need to provide detailed payment information. The endpoint used in this example requires only the payment method and billing address information.

**Endpoint**

`POST <host>/rest/us/V1/carts/mine/payment-information`

**Scope**

`us` store view

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer token>`

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

An `orderID`, such as `3`

## Verify this step {#verify-step}

1. Log in to the US store as the customer. The dashboard shows the order.
2. Log in to {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}. Click **Sales** > **Orders**. The order is displayed in the grid. Its status is Pending.
3. Click **Catalog** > **Products**. The **Salable Quantity** column shows that fewer items of the ordered products are available. The values in the **Quantity per Source** are not affected until shipment.
