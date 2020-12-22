---
group: configuration-guide
title: Set up multiple websites, stores, and store views in the Admin
functional_areas:
  - Configuration
  - System
  - Setup
---

This task requires you to create a root [category](https://glossary.magento.com/category) (and additional categories if desired) for each store. The tasks discussed in this topic provide one way to set up multiple stores. For additional information, see the following resources in the Magento User Guide:

*  [Categories](http://docs.magento.com/m2/ce/user_guide/catalog/categories.html)
*  [Adding Websites](http://docs.magento.com/m2/ce/user_guide/stores/stores-all-create-website.html)
*  [Store URLs](http://docs.magento.com/m2/ce/user_guide/stores/store-urls.html)
*  [Content](http://docs.magento.com/m2/ce/user_guide/cms/content-menu.html)

 {:.bs-callout-info}
For example purposes only, we use a French [website](https://glossary.magento.com/website) with website code `french` in this topic. For step-by-step tutorials, see [Tutorial: Set up multiple websites with Apache]({{ page.baseurl }}/config-guide/multi-site/ms_apache.html) and [Tutorial: Set up multiple websites with nginx]({{ page.baseurl }}/config-guide/multi-site/ms_nginx.html)

## Step 1: Create root categories

Creating a root category is optional, but we show how to do it in this tutorial in the [event](https://glossary.magento.com/event) you want each website to have a unique root category. You can create additional categories if you choose.

{% collapsible To create a root category: %}

1. Log in to the Magento Admin as a user authorized to create categories.
1. Click **Catalog** > **Categories**.
1. Click **Add Root Category**.
1. In the **Category Name** field, enter a unique name to identify this category.
1. Make sure **Enable Category** is set to **Yes**.

   For information about the other options on this page, see [Root Categories](http://docs.magento.com/m2/ce/user_guide/catalog/category-root.html?Highlight=create%20root%20category).

   The following figure shows an example.

   ![Create and enable a root category]({{ site.baseurl }}/common/images/config_multi-site_root-cat.png){:width="500px"}

1. Click **Save**.
1. Repeat these tasks as many times as necessary to create root categories for your stores.

{% endcollapsible %}

## Step 2: Create websites

{% collapsible To create a website: %}

1. Log in to the Magento Admin as a user authorized to create websites, stores, and store views.
1. Click **Stores** > **Settings** > **All Stores**.
1. On the _Stores_ page, click **Create Website**.

   *  **Name**—Enter a name to identify the website.
   *  **Code**—Enter a unique code; for example, if you have a French store, you can enter `french`
   *  **Sort Order**—Enter an optional numerical sort order.

   The following figure shows an example.

   ![Add a website]({{ site.baseurl }}/common/images/config_multi-site-website.png){:width="500px"}

1. Click **Save Web Site**.
1. Repeat these tasks as many times as necessary to create your websites.

{% endcollapsible %}

## Step 3: Create stores

{% collapsible To create a store: %}

1. In the _Admin_ panel, click **Stores** > **Settings** > **All Stores**.
1. On the _Stores_ page, click **Create Store**.

   *  **Web Site**—Click the name of the website with which to associate this store.
   *  **Name**—Enter a name to identify the store.
   *  **Code**—Enter a unique code to identify the store.
   *  **Root Category**—Click the name of the root category for this store.

   The following figure shows an example.

   ![Add a store]({{ site.baseurl }}/common/images/config_multi-site-store.png)

1. Click **Save Store**.
1. Repeat these tasks as many times as necessary to create your stores.

{% endcollapsible %}

## Step 4: Create store views

{% collapsible To create a store view: %}

1. In the _Admin_ panel, click **Stores** > **Settings** > **All Stores**.
1. On the Stores page, click **Create Store View**.

   *  **Store**—Click the name of the store with which to associate this store view.
   *  **Name**—Enter a name to identify this store view.
   *  **Code**—Enter a unique name to identify this store view.
   *  **Status**—Select **Enabled**.

   The following figure shows an example.

   ![Add a store]({{ site.baseurl }}/common/images/config_multi-site-storeview.png){:width="500px"}

1. Click **Save Store View**.
1. Repeat these tasks as many times as necessary to create your store views.

{% endcollapsible %}

## Step 5: Change the website base URL

To access a website using a unique URL like `http://french.magento.mg`, you must change the base URL for each site in the [Magento Admin](https://glossary.magento.com/magento-admin).

{% collapsible To change the website base URL: %}

1. In the _Admin_ panel, click **Stores** > **Settings** > **Configuration** > **General** > **Web**.
1. From the **Store View** list at the top of the page, click the name of one of your websites as the following figure shows.

   ![Select a scope]({{ site.baseurl }}/common/images/config_multi-site-scope.png){:width="250px"}

1. In the right pane, expand **Base URLs**.
1. In the _Base URLs_ section, clear **Use system value**.
1. Enter the `http://french.magento.mg` URL in the **Base URL** and **Base Link URL** fields.

1. Repeat the previous step in the _Base URLs (Secure)_ section.

    {:.bs-callout-info}
   If you're setting up a base URL for deployment {{site.data.var.ece}}, you must replace the first period with three dashes. For example, if your base URL is `french.branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud`, enter **http://french---branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud**. If you're setting up a base URL for local testing, use a period.

1. Click **Save Config**.

1. Repeat these tasks for other websites.

{% endcollapsible %}

## Step 6: Add the store code to the base URL {#multi-storecode-baseurl}

Magento gives you the option to add the store code to the site base URL, which simplifies the process of setting up multiple stores. Using this option, you do not have to create directories on the Magento file system to store `index.php` and `.htaccess`.

This prevents `index.php` and `.htaccess` from getting out of sync with the Magento codebase in future upgrades.

For more information, see the [Magento User Guide](http://docs.magento.com/m2/ce/user_guide/stores/store-urls.html).

{% collapsible To add the store code to the base URL: %}

1. In the _Admin_ panel, click **Stores** > **Settings** > **Configuration** > **General** > **Web**.
1. From the **Store View** list at the top of the page, click **Default Config** as the following figure shows.

   ![Select the default config scope]({{ site.baseurl }}/common/images/config_multi-site-default.png){:width="250px"}

1. In the right pane, expand **Url Options**.
1. Clear the **Use system value** checkbox next to _Add Store Code to Urls_.
1. From the _Add Store Code to Urls_ list, click **Yes**.

   ![Add the store code to the store base URL]({{ site.baseurl }}/common/images/config_multi-site-add-store-url.png){:width="550px"}

1. Click **Save Config**.
1. If prompted, flush the Magento cache. (**System** > **Cache Management**).

{% endcollapsible %}

## Step 7: Change the default store view base URL

You must perform this step last because you will lose access to the Magento Admin; your access returns after you set up virtual hosts as discussed in the web-server-specific topics.

{% collapsible To change the default store view base URL: %}

1. In the _Admin_ panel, click **Stores** > **Settings** > **Configuration** > **General** > **Web**.

1. From the _Store View_ list at the top of the page, click **Default Config**.

   ![Select the default config scope]({{ site.baseurl }}/common/images/config_multi-site-default.png){:width="250px"}

1. In the right pane, expand **Base URLs**.
1. In the _Base URLs_ section, clear **Use system value**.
1. Enter the `http://magento.mg` URL in the **Base URL** and **Base Link URL** fields.

1. Repeat the previous step in the **Base URLs (Secure)** section.

   {:.bs-callout-info}
   If you're setting up a base URL for {{site.data.var.ece}}, you must replace the first period with three dashes. For example, if your base URL is `french.branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud`, enter **http://french---branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud**.

1. Click **Save Config**.

{% endcollapsible %}

{:.ref-header}
Related topics

*  [Add content to your websites](http://docs.magento.com/m2/ce/user_guide/cms/content-menu.html)
*  [Tutorial: Set up multiple websites or stores with NGINX]({{ page.baseurl }}/config-guide/multi-site/ms_nginx.html)
*  [Tutorial: Set up multiple websites with Apache]({{ page.baseurl }}/config-guide/multi-site/ms_apache.html)
