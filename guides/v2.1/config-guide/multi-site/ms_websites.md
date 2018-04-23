---
layout: default
group: config-guide
subgroup: 11_sites
title: Set up multiple websites, stores, and store views in the Admin
menu_title: Set up multiple websites, stores, and store views in the Admin
menu_order: 2
menu_node:
version: 2.1
github_link: config-guide/multi-site/ms_websites.md
functional_areas:
  - Configuration
  - System
  - Setup
---

## Set up multiple websites, stores, and store views in the Admin
This task requires you to create a root {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} (and additional categories if desired) for each store.

The tasks discussed in this topic provide one way to set up multiple stores. For additional information, see the following resources in the Magento User Guide:

*	[Categories](http://docs.magento.com/m2/ce/user_guide/catalog/categories.html){:target="_blank"}
*	[Adding Websites](http://docs.magento.com/m2/ce/user_guide/stores/stores-all-create-website.html){:target="_blank"}
*	[Store URLs](http://docs.magento.com/m2/ce/user_guide/stores/store-urls.html){:target="_blank"}
*	[Content](http://docs.magento.com/m2/ce/user_guide/cms/content-menu.html){:target="_blank"}

<div class="bs-callout bs-callout-info" id="info" markdown="1">
For example purposes only, we use a French {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} with website code `french` in this topic. For step-by-step tutorials, see:

*	[Tutorial&mdash;Set up multiple websites with Apache]({{ page.baseurl}}/config-guide/multi-site/ms_apache.html)
*	[Tutorial&mdash;Set up multiple websites with nginx]({{ page.baseurl}}/config-guide/multi-site/ms_nginx.html)

</div>

## Step 1: Create root categories
Creating a root category is optional, but we show how to do it in this tutorial in the {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} you want each website to have a unique root category. You can create additional categories if you choose.

{% collapsible To create a root category: %}

1.	Log in to the Magento Admin as a user authorized to create categories.
2.	Click **Products** > **Categories**.
3.	Click **Add Root Category**.
4.	In the **Category Name** field, enter a unique name to identify this category.
5.	Make sure **Enable Category** is set to **Yes**.

	For information about the other options on this page, see [Root Categories](http://docs.magento.com/m2/ce/user_guide/catalog/category-root.html?Highlight=create%20root%20category){:target="_blank"}.

	The following figure shows an example.

	![Create and enable a root category]({{ site.baseurl}}/common/images/config_multi-site_root-cat.png){:width="500px"}
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

	![Add a website]({{ site.baseurl}}/common/images/config_multi-site-website.png){:width="500px"}
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

	![Add a store]({{ site.baseurl}}/common/images/config_multi-site-store.png){:width="500px"}
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

	![Add a store]({{ site.baseurl}}/common/images/config_multi-site-storeview.png){:width="500px"}
3.	Click **Save Store View**.
4.	Repeat these tasks as many times as necessary to create your store views.

{% endcollapsible %}

## Step 5: Change a website's base URL
To access a website using a unique {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} like `http://french.magento.mg`, you must change the base URL for each site in the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}.

{% collapsible To change the website's base URL: %}

1.	In the Admin, click **Stores** > Settings > **Configuration** > General > **Web**.
2.	From the **Store View** list at the top of the page, click the name of one of your websites as the following figure shows.

	![Select a scope]({{ site.baseurl}}/common/images/config_multi-site-scope.png){:width="250px"}

3.	In the right pane, expand **Base URLs**.
4.	In the Base URL section, clear the **Use Default** check box.
4.	Enter `http://french.magento.mg` as the following example shows.

	![Set a base URL]({{ site.baseurl}}/common/images/config_multi-site_base-url.png){:width="650px"}

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If you're setting up a base URL for deployment {{site.data.var.ece}}, you must replace the first period with three dashes. For example, if your base URL is <code>french.branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud</code>, enter <strong>http://french---branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud</strong>.</p>
  		<p>If you're setting up a base URL for local testing, use a period.</p>
	</div>
5.	Click **Save Config**.
6.	Repeat these tasks for other websites.

{% endcollapsible %}

## Step 6: Add the store code to the base URL {#multi-storecode-baseurl}
Magento gives you the option to add the store code to the site's base URL, which simplifies the process of setting up multiple stores. Using this option, you don't have to create directories on the Magento file system to store `index.php` and `.htaccess`.

This prevents `index.php` and `.htaccess` from getting out of sync with the Magento codebase in future upgrades.

For more information, see the [Magento User Guide](http://docs.magento.com/m2/ce/user_guide/stores/store-urls.html){:target="_blank"}.

{% collapsible To add the store code to the website's base URL: %}

1.	In the Admin, click **Stores** > Settings > **Configuration** > General > **Web**.
2.	From the **Store View** list at the top of the page, click **Default Config** as the following figure shows.

	![Select the default config scope]({{ site.baseurl}}/common/images/config_multi-site-default.png){:width="250px"}
3.	In the right pane, expand **Url Options**.
4.	Clear the **Use system value** check box next to **Add Store Code to Urls**.
5.	From the **Add Store Code to Urls** list, click **Yes** as the following figure shows.

	![Add the store code to the store's base URL]({{ site.baseurl}}/common/images/config_multi-site-add-store-url.png){:width="550px"}
6.	Click **Save Config**.
7.	If prompted, flush the Magento cache. (**System** > **Cache Management**).

{% endcollapsible %}

## Step 7: Change the default store view's base URL
You must perform this step last because after it's done, you'll lose access to the Magento Admin; your access returns after you set up virtual hosts as discussed in the web-server-specific topics.

{% collapsible To change the default store view's base URL: %}

1.	In the Admin, click **Stores** > Settings > **Configuration** > General > **Web**.
2.	From the **Store View** list at the top of the page, click **Default Config** as the following figure shows.


	![Select the default config scope]({{ site.baseurl}}/common/images/config_multi-site-default.png){:width="250px"}

3.	In the right pane, expand **Base URLs**.
4.	Enter `http://mysite.mg` as the following example shows.

	![Set a base URL]({{ site.baseurl}}/common/images/config_multi-site_base-url-default2.png){:width="650px"}

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If you're setting up a base URL for {{site.data.var.ece}}, you must replace the first period with three dashes. For example, if your base URL is <code>french.branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud</code>, enter <strong>http://french---branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud</strong>.</p>
	</div>
5.	Click **Save Config**.

{% endcollapsible %}

#### Next step
*	{{site.data.var.ece}}: [Set up multiple {{site.data.var.ece}} websites or stores]({{ page.baseurl}}/cloud/project/project-multi-sites.html)
*	[Tutorial&mdash;Set up multiple websites or stores with nginx]({{ page.baseurl}}/config-guide/multi-site/ms_nginx.html)
*	[Tutorial&mdash;Set up multiple websites with Apache]({{ page.baseurl}}/config-guide/multi-site/ms_apache.html)

#### Related information
[Add content to your websites](http://docs.magento.com/m2/ce/user_guide/cms/content-menu.html){:target="_blank"}
