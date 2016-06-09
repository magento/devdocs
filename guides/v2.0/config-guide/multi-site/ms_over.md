---
layout: default
group: config-guide
subgroup: 06_sites
title: Multiple websites or stores
menu_title: Multiple websites or stores
menu_order: 1
menu_node: parent
version: 2.0
github_link: config-guide/multi-site/ms_over.md
redirect_from: guides/v2.0/config-guide/bootstrap/mage-run.html
---

#### Contents
*	[Introduction to multiple Magento stores and websites](#ms-over)
*	[Set up multiple websites with nginx]({{ site.gdeurl }}config-guide/multi-site/ms_nginx.html)
*	[Set up multiple websites with Apache]({{ site.gdeurl }}config-guide/multi-site/ms_apache.html)

## Introduction to multiple Magento stores and websites {#ms-over}
One instance of the Magento software can enable you to start multiple websites or store views that use different:

*   Default languages
*   Domain names
*   Categories

This flexible solution enables one Magento codebase and Magento Admin to administer and display different stores.

You configure the websites, stores, and store views in the Magento Admin. You use the `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` variables in entry point scripts or `.htaccess` files to start the Magento application using these websites or store views. 

A typical use of `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` is to set up stores with different options in different domains. For example, you could have one set of categories and products on one domain and another domain that has categories and products for a different language.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This topic discusses only the basics of configuring multiple sites using the Admin and variables. Details about deploying the Magento application in multiple domains is beyond the scope of this topic.</p></span>
</div>

<h2 id="magerun-conf">Configure Magento websites and stores</h2>
This section discusses the minimum tasks required to use the `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` variables. 

We use the following terms:

*	*Website* is the top-level container for sites, shipping methods, payment methods, and so on. To create completely separate sites that do not share cart, shipping methods, and so on,  you must create separate websites. 

*	*Store* is contained by a website. In turn, a store contains at least one *store view*. 

	Multiple stores can share cart, user sessions, payment gateways, and so on, but they have separate catalog structures. 

	Store views change the way pages are presented, and are typically used to display a store with different layouts or languages. 

Each website and each store view must have a unique identifier. This identifier is required to use `MAGE_RUN_TYPE` and `MAGE_RUN_CODE`.

To create websites and stores:

1.	Log in to the Magento Admin as a user authorized to create websites, stores, and store views.
2.	Click **Stores** > **All Stores**.
3.	To create a website, click **Create Website**.
4.	To create a store, click **Create Store**.
5.	To create a store view, click **Create Store View**.
5.	When you create your website or store view, make note of its unique identifier because you'll use it later.

#### Related topics
*	[Set up multiple websites with nginx]({{ site.gdeurl }}config-guide/multi-site/ms_nginx.html)
*	[Set up multiple websites with Apache]({{ site.gdeurl }}config-guide/multi-site/ms_apache.html)
