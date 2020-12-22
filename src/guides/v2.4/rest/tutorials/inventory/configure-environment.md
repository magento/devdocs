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

### Configure distance calculations {#instore-pickup}

This tutorial uses an offline method to calculate distances for shipping and in-store pickup.

1. Set the **Stores** > Settings > **Catalog** > **Inventory** > **Distance Provider for Distance Based SSA** > **Provider** field to **Offline calculation**.

1. Run the following command to import US geocodes:

   `bin/magento inventory-geonames:import us`

   [Inventory CLI reference]({{page.baseurl}}/inventory/inventory-cli-reference.html#import-geocodes) provides additional information about this command.

## Deactivate a cart price rule

By default, the Luma store includes a promotion where shipping is free if you spend at least $50. Since this tutorial shows shipping calculations, we need to deactivate this promotion. The promotion is defined in a cart price rule, which is also known as a sales rule. When you deactivate the cart price rule, shipping is charged at a flat rate of $5 per item.

To disable this cart price rule, select **Marketing** > Promotions > **Cart Price Rules**. Then edit rule ID 2 (Spend $50 or more - shipping is free!), and toggle the Active switch to No. Be sure to save the change.

## Flush the cache

Run the following command to cache the changes in configuration.

```bash
bin/magento cache:flush
```

## Verify this step

Click **Stores** > Settings > **All Stores**. The websites, stores, and store views are displayed in the grid.
