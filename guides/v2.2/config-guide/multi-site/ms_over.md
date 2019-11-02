---
group: configuration-guide
title: Multiple websites or stores
functional_areas:
  - Configuration
  - System
  - Setup
---

A single instance of the {{site.data.var.ee}} software enables you to start multiple websites or store views that use different attributes and content, such as:

-  Default languages
-  Domain names
-  Categories
-  Products
-  Currencies

This flexible solution enables one Magento codebase and [Magento Admin](https://glossary.magento.com/magento-admin) to administer and display different stores. You configure the websites, stores, and store views in the Magento Admin panel. Use certain variables in virtual hosts to start the Magento application using these websites or store views.

A typical use is to set up stores with different options in different domains. For example, you could have one set of categories and products on one domain and another set of categories and products on a separate domain in a different language.

You configure the websites, stores, and store views in the Magento [Admin](https://glossary.magento.com/admin). Use the `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` variables in virtual hosts to start the Magento application using these websites or store views.

Consider the following terms:

-  **Website**—is the top-level container for sites, shipping methods, payment methods, and more. To create completely separate sites that do not share cart, shipping methods, or other you must create separate websites.

   Website customer accounts can be shared between multiple websites within a single Magento instance. A website contains at least one store. Catalog prices should be managed at the website level.

-  **Store**—is contained by a website. In turn, a store contains at least one *store view*.

   Multiple stores can share cart, user sessions, payment gateways, and more, but they have separate catalog structures and Catalog price.

   Catalog Qty (inventory) can not be managed at the store level. Inventory is managed at Website or Global level only.

   Store views change the way pages are presented, and are typically used to display a store with different layouts or languages. You can manage different currencies per store view.

Each website and each store view must have a unique identifier. This identifier is required to use the `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` variables as follows:

-  `MAGE_RUN_TYPE` can be either `store` or `website`

   -  Use `website` to load a website in your storefront.
   -  Use `store` to load any store view in your storefront.

-  `MAGE_RUN_CODE` is the unique website or store view code that corresponds to `MAGE_RUN_TYPE`

The following is a summary of the tasks you must perform:

1. [Set up websites, stores, and store views in the Magento Admin.]({{page.baseurl}}/config-guide/multi-site/ms_websites.html)
1. Create a virtual host to load many websites or one virtual host per Magento website or store view to allow specific directives for each store.
1. Pass the values of `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` to the web server.
