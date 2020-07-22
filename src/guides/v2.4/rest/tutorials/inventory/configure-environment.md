---
layout: tutorial
group: rest-api
title: Step 1. Configure your environment
subtitle: Order processing with Inventory Management
menu_title: Step 1. Configure your environment
menu_order: 10
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

This step guides you through the process of configuring your Magento instance so that you can perform the Order Processing with Inventory Management tutorial.

## Configure payment and delivery methods

For this tutorial, we'll assume that payment and delivery methods are configured globally. You can also make configuration changes at the website or store view level.

### Set the payment method {#set-payment}

{% include webapi/tutorials/set-payment-methods.md %}

### Configure supported delivery methods {#ship-method}

{% include webapi/tutorials/configure-shipping-methods-24.md %}

## Flush the cache

Run the following command to cache the changes in configuration.

```bash
bin/magento cache:flush
```

## Verify this step

Click **Stores** > Settings > **All Stores**. The websites, stores, and store views are displayed in the grid.
