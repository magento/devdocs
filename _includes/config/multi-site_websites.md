<div markdown="1">

1.	Log in to the Magento Admin as a user authorized to create websites, stores, and store views.
2.	Click **Stores** > **All Stores**.
3.	To create a website, click **Create Website**.

	*	**Name** field: Enter a name to identify the website.
	*	**Code** field: Enter `french`
	*	**Sort Order** field: Enter an optional numerical sort order.

	The following figure shows an example.

	![Add a website]({{ site.baseurl }}common/images/config_multi-site-website.png){:width="500px"}
4.	Click **Save Config**.
5.	To create a store, click **Create Store**.

	*	**Name** field: Enter a name to identify the store.
	*	**Code** field: Enter a unique code to identify the store.
	*	**Category** list: Click the name of a category.

	The following figure shows an example.

	![Add a store]({{ site.baseurl }}common/images/config_multi-site-store.png){:width="500px"}
6.	Click **Save Config**.
7.	To create a store view, click **Create Store View**.

	*	**Store** list: Click the name of the store with which to associate this store view.
	*	**Code** field: Enter a unique name to identify this store view.
	*	**Status** list: Click **Enabled**.
	The following figure shows an example.

	![Add a store]({{ site.baseurl }}common/images/config_multi-site-storeview.png){:width="500px"}
8.	Click **Save Config**.
9.	Change the site's base URL:

	1.	Click **Stores** > Settings > **Configuration** > **Web**.
	2.	From the **Store View** list at the top of the page, click the name of one of your sites as the following figure shows.

	![Select a scope]({{ site.baseurl }}common/images/config_multi-site-scope.png)

	3.	In the right pane, in the Base URL section, clear the **Use Default** check box.
	4.	Prefix the base URL with your website code as the following example shows.

		![Set a base URL]({{ site.baseurl }}common/images/config_multi-site_base-url.png)
10.	If prompted, flush the Magento cache. (**System** > **Cache Management**).
11.	Repeat these tasks as many times as necessary to create your websites, stores, and store views.