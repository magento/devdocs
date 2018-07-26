---
layout: tutorial
group: rest
title: Step 1000. Configure the store
menu_title: Step 1000. Configure the store
menu_order: 1000
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/configure-store.md
functional_areas:
  - Integration
---

## Create another website, store, and store view

This tutorial creates a second website to demonstrate the concept of Sales Channels. If you haven't already created an additional website, then go ahead and create one. Later we will show you how to turn things back and work with only one website.

1. Log in to Admin and select **Stores** > **All Stores** and click the **Create Website** button. Assign the following values:

   Field | Value
   --- | ---
   Name | Test
   Code | test

   Click **Save Web Site**.

2. Click **Create Store** and assign the following values:

   Field | Value
   --- | ---
   Web Site | Test
   Name | Test Website Store
   Code | test_website_store
   Root Category | Default Category

   Click **Save Store**.

3. Click **Create Store View** and assign the following values:

   Field | Value
   --- | ---
   Store | Test Website Store
   Name | Test Store View
   Code | test
   Status | Enabled

   Click **Save Store View**.

4. Use the following command to perform a full reindex and flush the cache. This is required!

   ``` bash
   php bin/magento indexer:reindex && php bin/magento cache:flush
   ```

## Set the payment method {#set-payment}

{% include webapi/tutorials/set-payment-methods.md %}

## Configure supported shipping methods (optional) {#ship-method}

{% include webapi/tutorials/configure-shipping-methods.md %}
