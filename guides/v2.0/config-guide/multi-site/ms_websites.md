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

This task requires you to create a root category (and additional categories if desired) for each store, a website, a store, and a store view.

## Create a root category
You should create at least a root category per store; you can create additional categories if you choose.

{% collapsible To create a root category:}

1.	Log in to the Magento Admin as a user authorized to create categories.
2.	Click **Products** > **Categories**.
3.	Click **Add Root Category**.
4.	In the **Category Name** field, enter a unique name to identify this category.
5.	Make sure **Enable Category** is set to **Yes**.

	For information about the other options on this page, see [Root Categories](http://docs.magento.com/m2/ce/user_guide/catalog/category-root.html?Highlight=create%20root%20category){:target="_blank"}

	The following figure shows an example.

	![Create and enable a root category]({{ site.baseurl }}common/images/config_multi-site_root-cat.png)
6.	Click **Save**.
7.	Repeat these tasks as many times as necessary to create root categories for your stores.

{% endcollapsible %}

## Create a website

{%collapsible To create a website: %}

1.	Log in to the Magento Admin as a user authorized to create websites, stores, and store views.
2.	Click **Stores** > **All Stores**.
3.	To create a website, click **Create Website**.

	*	**Name** field: Enter a name to identify the website.
	*	**Code** field: Enter a unique code; for example, if you have a French store, you can enter `french`
	*	**Sort Order** field: Enter an optional numerical sort order.

	The following figure shows an example.

	![Add a website]({{ site.baseurl }}common/images/config_multi-site-website.png){:width="500px"}
4.	Click **Save Config**.
7.	Repeat these tasks as many times as necessary to create your websites.

{% endcollapsible %}

## Create a store

{% collapsible To create a store: %}

1.	In the Magento Admin, click **Stores** > **All Stores**.
1.	To create a store, click **Create Store**.

	*	**Name** field: Enter a name to identify the store.
	*	**Code** field: Enter a unique code to identify the store.
	*	**Category** list: Click the name of a category.

	The following figure shows an example.

	![Add a store]({{ site.baseurl }}common/images/config_multi-site-store.png){:width="500px"}
6.	Click **Save Config**.
7.	Repeat these tasks as many times as necessary to create your stores.

{% endcollapsible %}

## Create a store view

{% collapsible To create a store view: %}

1.	In the Magento Admin, click **Stores** > **All Stores**.
7.	To create a store view, click **Create Store View**.

	*	**Store** list: Click the name of the store with which to associate this store view.
	*	**Code** field: Enter a unique name to identify this store view.
	*	**Status** list: Click **Enabled**.
	The following figure shows an example.

	![Add a store]({{ site.baseurl }}common/images/config_multi-site-storeview.png){:width="500px"}
8.	Click **Save Config**.
7.	Repeat these tasks as many times as necessary to create your store views.

{% endcollapsible %}

## Change the website's base URL

{%collapsible To change the website's base URL: %}

1.	In the Admin, click **Stores** > Settings > **Configuration** > **Web**.
2.	From the **Store View** list at the top of the page, click the name of one of your sites as the following figure shows.

![Select a scope]({{ site.baseurl }}common/images/config_multi-site-scope.png){:width="250px"}

3.	In the right pane, in the Base URL section, clear the **Use Default** check box.
4.	Prefix the base URL with your website code as the following example shows.

	![Set a base URL]({{ site.baseurl }}common/images/config_multi-site_base-url.png){:width="650px"}

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If you're setting up a base URL for Magento Enterprise Cloud Edition, you must replace the first period with three dashes. For example, if your base URL is <code>french.branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud</code>, enter <strong>http://french--branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud</strong>.</p>
	</div>

5.	If prompted, flush the Magento cache. (**System** > **Cache Management**).


{% endcollapsible %}