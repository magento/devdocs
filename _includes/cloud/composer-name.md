<div markdown="1">

To get the component's Composer name:

1.	Log in to Magento Marketplace with the user name and password you used to purchase the component.
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
7.	Insert a colon between the name and the version before the version (in this example, `celebros/module-autocomplete:1.0.0`).