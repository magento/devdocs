If an order contains one or more simple, configurable, bundle, or group products, then you must specify how the order will be shipped. Downloadable items cannot be shipped, and Magento does not calculate shipping charges for downloadable items.

Since we are not actually shipping any products in this tutorial, we do not need to set up an account with a shipping company such as UPS or Federal Express. Instead, we can use the offline shipping methods that are configured by default.

Shipping type | Configuration name | Enabled by default?
--- | --- | ---
Flat rate | `flatrate` | Yes
Table rate | `tablerate` | Yes
Free shipping | `freeshipping` | No

To change which offline shipping methods are available:

1. Select **Stores** > **Settings** > **Configuration** > **Sales** > **Shipping Methods** in Admin.
1. Enable or disable the shipping methods as desired.
1. Click **Save Config**.
