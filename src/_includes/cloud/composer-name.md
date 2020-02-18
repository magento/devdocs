This section discusses how to get a module's Composer name and its version from Magento Marketplace. Alternatively, you can find the name and version of *any* module (whether or not you purchased it on Marketplace) in the module's `composer.json` file. Open `composer.json` in a text editor and write down the values of `"name"` and `"version"`.

{:.procedure}
To get the module's Composer name from Magento Marketplace:

1. Log in to [Magento Marketplace](https://marketplace.magento.com) with the username and password you used to purchase the component.
1. In the upper right corner, click **&lt;your username>** > **My Account** as the following figure shows.

   ![Access your Marketplace account]({{ site.baseurl }}/common/images/cloud_marketplace-account.png){:width="650px"}

1. On the My Account page, click **My Purchases** as the following figure shows.

   ![Marketplace purchase history]({{ site.baseurl }}/common/images/cloud_marketplace-purch-history.png){:width="650px"}

1. On the My Purchases page, click **Technical Details** for the module you purchased as the following figure shows.

   ![Technical details shows the module's Composer name]({{ site.baseurl }}/common/images/cloud_marketplace-download-invoice.png){:width="200px"}

1. Click **Copy** to copy the component name to the clipboard.
1. Open a text editor.
1. Paste the module name in the text editor.
1. Append a colon character (`:`) to the component name.
1. In **Technical Details** on the My Purchases page, click **Copy** to copy the version to the clipboard.
1. Append the version number to the component name after the colon.

   A sample follows:

   ```text
   pixlee/magento2:1.0.1
   ```
