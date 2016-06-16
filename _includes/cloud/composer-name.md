<div markdown="1">

This section discusses how to get a component's Composer name and its version from Magento Marketplace. Alternatively, you can find the name and version of *any* component (whether or not you purchased it on Marketplace) in the component's `composer.json` file. Open `composer.json` in a text editor and write down the values of `"name"` and `"version"`. 

To get the component's Composer name from Magento Marketplace:

1.	Log in to [Magento Marketplace](https://marketplace.magento.com){:target="_blank"} with the user name and password you used to purchase the component.
2.	In the upper right corner, click **&lt;your user name>** > **My Account** as the following figure shows.

	![Access your Marketplace account]({{ site.baseurl }}common/images/cloud_marketplace-account.png){:width="650px"}
3.	On the My Account page, click **Purchase History** as the following figure shows.

	![Marketplace purchase history]({{ site.baseurl }}common/images/cloud_marketplace-purch-history.png){:width="650px"}
4.	On the Purchase History page, click **Download Invoice** for the component you purchased as the following figure shows.

	![Download an invoice]({{ site.baseurl }}common/images/cloud_marketplace-download-invoice.png){:width="650px"}
5.	Copy the SKU to the clipboard and paste it in a text editor.

	A sample SKU follows:

		celebros/module-autocomplete1.0.0-ee_edition
6.	Remove `-ee_edition` from the value.
7.	Replace the dash character between the name and version with a colon character (in this example, `celebros/module-autocomplete:1.0.0`).