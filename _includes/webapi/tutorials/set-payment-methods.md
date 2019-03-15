Since the Luma store is for demonstration purposes only, it is not set up to handle credit card payments. However, it can simulate any of the following offline payment methods:

Payment type | Configuration name | Enabled by default?
--- | --- | ---
Check/Money Order | `checkmo` | Yes
Bank Transfer Payment | `banktransfer` | No
Cash on Delivery | `cashondelivery` | No
Purchase Order | `purchaseorder` | No
Zero Subtotal Checkout | `free` | Yes

In this tutorial, configure Magento to accept bank transfer payments. To allow bank transfer payments (or any other offline payment method) as a payment method:

1. Log in to {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} and select **Stores** > **Settings** > **Configuration** > **Sales** > **Payment Methods**.
2. Enable the {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %}.
3. Click **Save Config**.
