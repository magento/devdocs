---
group: inventory
title: Inventory CLI reference
functional_areas:
  - Configuration
  - System
  - Setup
---

{{site.data.var.im}} provides commands to manage inventory data and configuration settings.

These commands include:

-  Checking and resolving reservation inconsistencies affecting salable quantity
-  Adding geocodes for the Distance Priority algorithm

## Resolve reservations inconsistencies

[Reservations]({{ page.baseurl }}/inventory/reservations.html) place a salable quantity hold for product SKUs per stock. When you ship, add products, cancel, or refund an order, compensation reservations enter to place or clear these holds.

{{site.data.var.im}} provides two commands to check and resolve reservation inconsistencies:

-  [`inventory:reservation:list-inconsistencies`](#list-inconsistencies-command)
-  [`inventory:reservation:create-compensations`](#create-compensations-command)

### What causes reservation inconsistencies?

{{site.data.var.im}} generates reservations for key events:

-  Order placement (initial reservation)
-  Order shipment (compensation reservation)
-  Refund order or issue a credit memo (compensation reservation)
-  Order cancellation (compensation reservation)

Reservation inconsistencies may occur when {{site.data.var.im}} loses the initial reservation and enters too many reservation compensations (overcompensating and leading to inconsistent amounts), or correctly places the initial reservation but loses compensational reservations.

The following configurations and events can cause reservation inconsistencies:

-  **Upgrade Magento to 2.3.x with orders not in a final state (Complete, Canceled, or Closed).** {{site.data.var.im}} will create compensational reservations for these orders, but it will not enter or have the initial reservation that deducts from the salable quantity. We recommend using these commands after upgrading to Magento v2.3.x from 2.1.x or 2.2.x. If you have pending orders, the commands correctly update your salable quantity and reservations for sales and order fulfillment.
-  **You do not manage stock then later change this configuration.** You may start using 2.3.x with **Manage Stock** set to "No" in the Magento configuration. Magento does not place reservations at order placement and shipment events. If you later enable the **Manage Stock** configuration and some orders were created at that time, the Salable Qty would be corrupted with compensation reservation when you handle and fulfill that order.
-  **You re-assign the Stock for a Website while orders submit to that website**. The initial reservation enters for the initial stock and all compensational reservation enter to the new stock.
-  **The sum total of all reservations may not resolve to `0`.** All reservations in the scope of an Order in a final state (Complete, Canceled, Closed) should resolve to `0`, clearing all salable quantity holds.

### List inconsistencies command

The `list-inconsistencies` command detects and lists all reservation inconsistencies. Use the command options to check only completed or incomplete orders, or all.

```bash
bin/magento inventory:reservation:list-inconsistencies
```

Command options:

-  `-c`, `--complete-orders` - Returns inconsistencies for completed orders. Incorrect reservations may still be on hold for completed orders.
-  `-i`, `--incomplete-orders` - Returns inconsistencies for incomplete orders (partially shipped, unshipped). Incorrect reservations may hold too much or not enough salable quantity for the orders.
-  `-b`, `--bunch-size` - Defines how many orders to load at once.
-  `-r`, `--raw` - Raw output.

Responses using `-r` return in `<ORDER_INCREMENT_ID>:<SKU>:<QUANTITY>:<STOCK-ID>` format:

-  Order ID indicates the scope of the inconsistency.
-  SKU indicates the product with the inconsistency.
-  Quantity sets the amount to enter for the reservation compensation.
-  Stock ID defines to scope for stock, which uses the reservations to calculate salable quantity.

Examples:

```terminal
bin/magento inventory:reservation:list-inconsistencies

Inconsistencies found on following entries:
Order 172:
- Product bike-123 should be compensated by +2.000000 for stock 1
```

```terminal
bin/magento inventory:reservation:list-inconsistencies -r

172:bike-123:+2.000000:1
```

If no issues are found, this message returns: No order inconsistencies were found.

### Create compensations command

The `create-compensations` command creates compensation reservations. Depending on the issue, new reservations are created to either place or release a hold on salable quantity.

To create reservations, provide compensations using the format `<ORDER_INCREMENT_ID>:<SKU>:<QUANTITY>:<STOCK-ID>` such as `172:bike-123:+2.000000:1`.

```bash
bin/magento inventory:reservation:create-compensations
```

Command option:

-  `-r`, `--raw` - Returns raw output.

If the format of the request is incorrect, the following message displays:

```terminal
Error while parsing argument "your_incorrect_format_argument". Given argument does not match pattern "/(?P<increment_id>.*):(?P<sku>.*):(?P<quantity>.*):(?P<stock_id>.*)/".
```

As the command creates reservations, it displays messages indicating the updates by SKU, order, and stock.

```terminal
bin/magento inventory:reservation:create-compensations 172:bike-123:+2.000000:1

Following reservations were created:
- Product bike-123 was compensated by +2.000000 for stock 1
```

### Detect inconsistencies and create compensations

You can detect inconsistences and immediately create compensations by using a pipe to run both the `list-inconsistencies` and `create-compensations`. Use the `-r` command option to generate and submit the raw data to `create-compensations`.

```bash
bin/magento inventory:reservation:list-inconsistencies -r | bin/magento inventory:reservation:create-compensations
```

Example response:

```bash
bin/magento inventory:reservation:list-inconsistencies -r | bin/magento inventory:reservation:create-compensations
```

```terminal
Following reservations were created:
- Product bike-123 was compensated by +2.000000 for stock 1
- Product bikehat-456 was compensated by +1.000000 for stock 1
```

After updates complete, run the list command to verify:

```bash
bin/magento inventory:reservation:list-inconsistencies -r
```

```terminal
No order inconsistencies were found.
```

You can also pipe the commands to detect inconsistencies and create compensations for only incomplete (`-i`) or complete (`-c`) orders.

```bash
bin/magento inventory:reservation:list-inconsistencies -r -i | bin/magento inventory:reservation:create-compensations
```

```bash
bin/magento inventory:reservation:list-inconsistencies -r -c | bin/magento inventory:reservation:create-compensations
```

## Import geocodes

{{site.data.var.im}} provides the [Distance Priority](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-configure-distance-priority.html) algorithm, which helps determine the best option for shipping a full or partial order. The algorithm uses GPS information or geocodes to calculate the distance between the source (a warehouse or other physical location) of each item in an order and the shipping address. Based on those results, the algorithm recommends which source should be used to ship out each item in the order.

The merchant selects the provider of the GPS or geocode data required to calculate distances:

-  **Google MAP** uses [Google Maps Platform](https://cloud.google.com/maps-platform) services to calculate the distance and time between the shipping destination address and source locations. This option requires a Google billing plan and may incur charges through Google.

-  **Offline calculation** calculates the distance using data downloaded from [geonames.org](https://www.geonames.org/) and imported into Magento with a command. This option is free of charge.

{% include config/cli-inventory.md %}
