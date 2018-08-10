---
group: config-guide
subgroup: 11_sites
title: Multiple websites or stores
menu_title: Multiple websites or stores
menu_order: 1
menu_node: parent
version: 2.1
redirect_from:
 - /guides/v2.0/config-guide/bootstrap/mage-run.html
 - /guides/v2.1/config-guide/bootstrap/mage-run.html
functional_areas:
  - Configuration
  - System
  - Setup
---

## Introduction to multiple Magento stores and websites {#ms-over}

One instance of the Magento software can enable you to start multiple websites or store views that use different:

*   Default languages
*   {% glossarytooltip 41aee03b-a5d5-49c2-8839-894090ef4e86 %}Domain{% endglossarytooltip %} names
*   Categories
*   Products
*   Currency

This flexible solution enables one Magento codebase and {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} to administer and display different stores.

You configure the websites, stores, and store views in the Magento {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}. Use the `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` variables in virtual hosts to start the Magento application using these websites or store views. 

A typical use of `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` is to set up stores with different options in different domains. For example, you could have one set of categories and products on one domain and another domain that has categories and products for a different language.

## Configure Magento websites and stores {#magerun-conf}

This section discusses the tasks required to use the `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` variables. 

We use the following terms:

* *Website* is the top-level container for sites, shipping methods, payment methods, and so on. To create completely separate sites that do not share cart, shipping methods, and so on,  you must create separate websites.

  Website customer accounts can be shared between multiple websites within a single Magento instance. A website contains at least one store. Catalog prices should be managed at the website level.

* *Store* is contained by a {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %}. In turn, a store contains at least one *store view*. 

  Multiple stores can share cart, user sessions, payment gateways, and so on, but they have separate catalog structures and Catalog price.

  Catalog Qty (inventory) can't be managed at the store level. Inventory is managed at Website or Global level only.

  Store views change the way pages are presented, and are typically used to display a store with different layouts or languages. You can manage different currencies per store view.

Each website and each {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %} must have a unique identifier. This identifier is required to use `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` as follows:

* `MAGE_RUN_TYPE` can be either `store` or `website`

  * Use `website` to load a website in your storefront.
  * Use `store` to load any store view in your storefront.

* `MAGE_RUN_CODE` is the unique website or store view code that corresponds to `MAGE_RUN_TYPE`

Following is a summary of the tasks you must perform. More details are provided in the sections that follow.

1.  Define websites, stores, and store views in the Magento Admin.
2.  Create a virtual host to load many websites or one virtual host per Magento website or store view to allow specific directives for each store.
3.  Pass the values of `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` to the web server.

#### Related topics

* [Set up multiple websites, stores, and store views in the Admin]({{ page.baseurl }}/config-guide/multi-site/ms_websites.html)
* [Set up multiple websites with nginx]({{ page.baseurl }}/config-guide/multi-site/ms_nginx.html)
* [Set up multiple websites with Apache]({{ page.baseurl }}/config-guide/multi-site/ms_apache.html)
