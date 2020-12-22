If an order contains one or more physical products, then the customer must either specify a delivery method or select a location for in-store pickup. Downloadable items cannot be shipped, and Magento does not calculate shipping charges for downloadable items.

Since we are not actually shipping any products in this tutorial, we do not need to set up an account with a shipping company such as UPS or Federal Express. Instead, we can use the offline delivery methods that are configured by default.

Shipping type | Configuration name | Enabled by default?
--- | --- | ---
Flat rate | `flatrate` | Yes
Table rate | `tablerate` | Yes
Free shipping | `freeshipping` | No
In-store pickup | `pickup`| No

To change which offline delivery methods are available:

1. Select **Stores** > **Settings** > **Configuration** > **Sales** > **Delivery Methods** in Admin.
1. Enable the In-store pickup delivery method and adjust the status of any other delivery method, as desired.
1. Click **Save Config**.
