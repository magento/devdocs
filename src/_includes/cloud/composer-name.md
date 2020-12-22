## Composer name of an extension

Although this section discusses how to get the Composer name and version of an extension or module from Magento Marketplace, you can find the name and version of *any* module (whether or not you purchased it on Marketplace) in the Composer file of the module. Open the `composer.json` file in a text editor and note the `"name"` and `"version"` values.

{:.procedure}
To get the Composer name of a module from the Magento Marketplace:

1. Log in to [Magento Marketplace](https://marketplace.magento.com) with the username and password you used to purchase the component.

1. In the upper right corner, click **Username** > **My Account**.

   ![Access your Marketplace account]({{ site.baseurl }}/common/images/cloud_marketplace-account.png){:width="650px"}

1. On the _My Account_ page, click **My Purchases**.

   ![Marketplace purchase history]({{ site.baseurl }}/common/images/cloud_marketplace-purch-history.png){:width="650px"}

1. On the _My Purchases_ page, click **Technical Details** for the module you purchased.

   ![Technical details shows the module's Composer name]({{ site.baseurl }}/common/images/cloud_marketplace-download-invoice.png){:width="200px"}

1. Click **Copy** to copy the component name to the clipboard.

1. Open a text editor and paste the module name.

1. Append a colon character (`:`) to the component name.

1. In **Technical Details** on the _My Purchases_ page, click **Copy** to copy the version to the clipboard.

1. Append the version number to the component name after the colon.

   A sample follows:

   ```text
   pixlee/magento2:1.0.1
   ```