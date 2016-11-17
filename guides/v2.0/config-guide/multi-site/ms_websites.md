---
layout: default
group: config-guide
subgroup: 500_sites
title: Set up multiple websites, stores, and store views in the Admin
menu_title: Set up multiple websites, stores, and store views in the Admin
menu_order: 2
menu_node: 
version: 2.0
github_link: config-guide/multi-site/ms_websites.md
---

## Set up multiple websites, stores, and store views in the Admin
This task requires you to create a root category (and additional categories if desired) for each store, a website, a store, and a store view.

The tasks discussed in this topic provide one way to set up multiple stores. For additional information, see the following resources in the Magento User Guide:

*	[Categories](http://docs.magento.com/m2/ce/user_guide/catalog/categories.html){:target="_blank"}
*	[Adding Websites](http://docs.magento.com/m2/ce/user_guide/stores/stores-all-create-website.html){:target="_blank"}
*	[Store URLs](http://docs.magento.com/m2/ce/user_guide/stores/store-urls.html){:target="_blank"}
*	[Content](http://docs.magento.com/m2/ce/user_guide/cms/content-menu.html){:target="_blank"}

## Step 1: Create root categories
Creating a root category is optional but we show how to do it in this tutorial in the event you want each website to have a unique root category. You can create additional categories if you choose.

{% collapsible To create a root category: %}

1.	Log in to the Magento Admin as a user authorized to create categories.
2.	Click **Products** > **Categories**.
3.	Click **Add Root Category**.
4.	In the **Category Name** field, enter a unique name to identify this category.
5.	Make sure **Enable Category** is set to **Yes**.

	For information about the other options on this page, see [Root Categories](http://docs.magento.com/m2/ce/user_guide/catalog/category-root.html?Highlight=create%20root%20category){:target="_blank"}.

	The following figure shows an example.

	![Create and enable a root category]({{ site.baseurl }}common/images/config_multi-site_root-cat.png){:width="500px"}
6.	Click **Save**.
7.	Repeat these tasks as many times as necessary to create root categories for your stores.

{% endcollapsible %}

## Step 2: Create websites

{% collapsible To create a website: %}

1.	Log in to the Magento Admin as a user authorized to create websites, stores, and store views.
2.	Click **Stores** > Settings > **All Stores**.
3.	On the Stores page, click **Create Website**.

	*	**Name** field: Enter a name to identify the website.
	*	**Code** field: Enter a unique code; for example, if you have a French store, you can enter `french`
	*	**Sort Order** field: Enter an optional numerical sort order.

	The following figure shows an example.

	![Add a website]({{ site.baseurl }}common/images/config_multi-site-website.png){:width="500px"}
4.	Click **Save Web Site**.
7.	Repeat these tasks as many times as necessary to create your websites.

{% endcollapsible %}

## Step 3: Create stores

{% collapsible To create a store: %}

1.	In the Magento Admin, click **Stores** > Settings > **All Stores**.
1.	On the Stores page, click **Create Store**.

	*	**Web Site** list: Click the name of the website with which to associate this store.
	*	**Name** field: Enter a name to identify the store.
	*	**Code** field: Enter a unique code to identify the store.
	*	**Root Category** list: Click the name of the root category for this store.

	The following figure shows an example.

	![Add a store]({{ site.baseurl }}common/images/config_multi-site-store.png){:width="500px"}
6.	Click **Save Store**.
7.	Repeat these tasks as many times as necessary to create your stores.

{% endcollapsible %}

## Step 4: Create store views

{% collapsible To create a store view: %}

1.	In the Magento Admin, click **Stores** > Settings > **All Stores**.
2.	On the Stores page, click **Create Store View**.

	*	**Store** list: Click the name of the store with which to associate this store view.
	*	**Name** field: Enter a name to identify this store view.
	*	**Code** field: Enter a unique name to identify this store view.
	*	**Status** list: Click **Enabled**.
	The following figure shows an example.

	![Add a store]({{ site.baseurl }}common/images/config_multi-site-storeview.png){:width="500px"}
3.	Click **Save Store View**.
4.	Repeat these tasks as many times as necessary to create your store views.

{% endcollapsible %}

## Step 5: Change a website's base URL

{% collapsible To change the website's base URL: %}

1.	In the Admin, click **Stores** > Settings > **Configuration** > General > **Web**.
2.	From the **Store View** list at the top of the page, click the name of one of your websites as the following figure shows.

	![Select a scope]({{ site.baseurl }}common/images/config_multi-site-scope.png){:width="250px"}

3.	In the right pane, expand **Base URLs**.
4.	In the Base URL section, clear the **Use Default** check box.
4.	Enter `http://french.mysite.mg` as the following example shows.

	![Set a base URL]({{ site.baseurl }}common/images/config_multi-site_base-url.png){:width="650px"}

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If you're setting up a base URL for Magento Enterprise Cloud Edition, you must replace the first period with three dashes. For example, if your base URL is <code>french.branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud</code>, enter <strong>http://french--branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud</strong>.</p>
	</div>
5.	Click **Save Config**.
6.	Repeat these tasks for your German website.

{% endcollapsible %}

## Step 6: Add the store code to the base URL
The Magento application gives you the option to add the store code to the site's base URL, which simplifies the process of setting up multiple stores. Using this option, you don't have to create directories on the Magento file system to store `index.php` and `.htaccess`. These files might get out of sync when you upgrade the Magento application in the future.

For more information, see the [Magento User Guide](http://docs.magento.com/m2/ce/user_guide/stores/store-urls.html){:target="_blank"}.

{% collapsible To add the store code to the website's base URL: %}

1.	In the Admin, click **Stores** > Settings > **Configuration** > General > **Web**.
2.	From the **Store View** list at the top of the page, click **Default Config** as the following figure shows.

	![Select a scope]({{ site.baseurl }}common/images/config_multi-site-default.png){:width="250px"} 
3.	In the right pane, expand **Url Options**.
4.	Clear the **Use system value** check box next to **Add Store Code to Urls**.
5.	From the **Add Store Code to Urls** list, click **Yes** as the following figure shows.

	![Add the store code to the store's base URL]({{ site.baseurl }}common/images/config_multi-site-add-store-url.png){:width="550px"}
6.	Click **Save Config**.
7.	If prompted, flush the Magento cache. (**System** > **Cache Management**).

{% endcollapsible %}

## Step 7: Change the default store view's base URL
You must perform this step last because after it's done, you'll lose access to the Magento Admin; your access returns after you set up virtual hosts as discussed in the web-server-specific topics.

{% collapsible To change the default store view's base URL: %}

1.	In the Admin, click **Stores** > Settings > **Configuration** > General > **Web**.
2.	From the **Store View** list at the top of the page, click the name of one of your websites as the following figure shows.

	![Select a scope]({{ site.baseurl }}common/images/config_multi-site_base-url-default.png){:width="250px"}

3.	In the right pane, expand **Base URLs**.
4.	In the Base URL section, clear the **Use Default** check box.
4.	Enter `http://mysite.mg` as the following example shows.

	![Set a base URL]({{ site.baseurl }}common/images/config_multi-site_base-url-default2.png){:width="650px"}

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If you're setting up a base URL for Magento Enterprise Cloud Edition, you must replace the first period with three dashes. For example, if your base URL is <code>french.branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud</code>, enter <strong>http://french--branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud</strong>.</p>
	</div>
5.	Click **Save Config**.

{% endcollapsible %}

#### Next step
*	[Set up multiple websites or stores with nginx (tutorial)]({{ page.baseurl }}config-guide/multi-site/ms_nginx.html)
*	[Set up multiple websites with Apache]({{ page.baseurl }}config-guide/multi-site/ms_apache.html)

#### Related information
[Add content to your websites](http://docs.magento.com/m2/ce/user_guide/cms/content-menu.html){:target="_blank"}