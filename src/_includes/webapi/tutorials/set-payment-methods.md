Since the Luma store is for demonstration purposes only, it is not set up to handle credit card payments. However, it can simulate any of the following offline payment methods:

Payment type | Configuration name | Enabled by default?
--- | --- | ---
Check/Money Order | `checkmo` | Yes
Bank Transfer Payment | `banktransfer` | No
Cash on Delivery | `cashondelivery` | No
Purchase Order | `purchaseorder` | No
Zero Subtotal Checkout | `free` | Yes

In this tutorial, configure Magento to accept bank transfer payments. To allow bank transfer payments (or any other offline payment method) as a payment method:

1. Log in to [Admin](https://glossary.magento.com/admin) and select **Stores** > **Settings** > **Configuration** > **Sales** > **Payment Methods**.
1. Enable the [payment method](https://glossary.magento.com/payment-method).
1. Click **Save Config**.
