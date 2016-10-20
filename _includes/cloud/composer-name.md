<div markdown="1">

This section discusses how to get a extension's Composer name and its version from Magento Marketplace. Alternatively, you can find the name and version of *any* extension (whether or not you purchased it on Marketplace) in the extension's `composer.json` file. Open `composer.json` in a text editor and write down the values of `"name"` and `"version"`. 

To get the extension's Composer name from Magento Marketplace:

1.	Log in to [Magento Marketplace](https://marketplace.magento.com){:target="_blank"} with the user name and password you used to purchase the component.
2.	In the upper right corner, click **&lt;your user name>** > **My Account** as the following figure shows.

	![Access your Marketplace account]({{ site.baseurl }}common/images/cloud_marketplace-account.png){:width="650px"}
3.	On the My Account page, click **My Purchases** as the following figure shows.

	![Marketplace purchase history]({{ site.baseurl }}common/images/cloud_marketplace-purch-history.png){:width="650px"}
4.	On the My Purchases page, click **Technical Details** for the extension you purchased as the following figure shows.

	![Technical details shows the extension's Composer name]({{ site.baseurl }}common/images/cloud_marketplace-download-invoice.png){:width="200px"}
5.	Click **Copy** to copy the component name to the clipboard.
5.	Open a text editor.
6.	Paste the extension name in the text editor.
6.	Append a colon character (`:`) to the component name.
7.	In **Technical Details** on the My Purchases page, click **Copy** to copy the version to the clipboard.
8.	Append the version number to the component name after the colon.

	A sample follows:

		pixlee/magento2:1.0.1