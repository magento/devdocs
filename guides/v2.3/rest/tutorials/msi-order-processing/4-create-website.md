---
layout: tutorial
group: rest
title: Step 4. Create additional websites
menu_title: Step 4. Create additional websites
menu_order: 40
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/4-create-website.md
functional_areas:
  - Integration
---

This step creates two websites to demonstrate the concept of Sales Channels. Let's create websites, stores, and store views for the UK and the US.

## Create the UK website

1. Log in to Admin and select **Stores** > **All Stores** and click the **Create Website** button. Assign the following values:

   Field | Value
   --- | ---
   Name | UK Site
   Code | uk_site

   Click **Save Web Site**.

2. Click **Create Store** and assign the following values:

   Field | Value
   --- | ---
   Web Site | UK Site
   Name | UK Website Store
   Code | uk_website_store
   Root Category | Default Category

   Click **Save Store**.

3. Click **Create Store View** and assign the following values:

   Field | Value
   --- | ---
   Store | UK Website Store
   Name | UK Store View
   Code | uk
   Status | Enabled

   Click **Save Store View**.

   ## Create the US website

   1. Select **Stores** > **All Stores** and click the **Create Website** button. Assign the following values:

      Field | Value
      --- | ---
      Name | US Site
      Code | us_site

      Click **Save Web Site**.

   2. Click **Create Store** and assign the following values:

      Field | Value
      --- | ---
      Web Site | US Site
      Name | US Website Store
      Code | us_website_store
      Root Category | Default Category

      Click **Save Store**.

   3. Click **Create Store View** and assign the following values:

      Field | Value
      --- | ---
      Store | US Website Store View
      Name | US Store View
      Code | us
      Status | Enabled

      Click **Save Store View**.

## Configure website URLs

To make it easier to locate products and log in as a customer later in this tutorial, configure Magento to add the store code to the URL.

1. Click **Stores** > **Configuration** > **Web** and expand the **Url Options** section.
2. Change the value of **Add Store Code to Urls** to **Yes**.
3. Click **Save Config**.

## Reindex and flush the cache

Use the following command to perform a full reindex and flush the cache. This is required!

   ``` bash
   php bin/magento indexer:reindex && php bin/magento cache:flush
   ```

## Verify this step

Click **Stores** > **All Stores**. The UK and US websites, stores, and store views are displayed in the grid.
