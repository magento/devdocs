---
group: inventory
title: Inventory CLI reference
redirect_from: /guides/v2.3/config-guide/cli/config-cli-inventory.html
functional_areas:
  - Configuration
  - System
  - Setup
---

Inventory Management provides CLI commands to manage inventory data and configuration settings.

These commands include:

- Checking and resolving reservation inconsistencies affecting salable quantity
- Adding geocodes for the Distance Priority algorithm

## Resolve reservations inconsistencies

[Reservations]({{ page.baseurl }}/rest/tutorials/inventory/reservations.html) place a salable quantity hold for product SKUs per stock. When you ship, add products, cancel, or refund an order, compensation reservations enter to place or clear these holds.

Inventory Management provides two CLI commands to check and resolve reservation inconsistencies.

Inconsistencies in reservations may occur in the following situations:

- Mass transfering inventory
- Removing sources from stocks
- Reassigning websites to different stocks

We also recommend using these commands if you are upgrading to Magento v2.3.x from v.2.1.x or v2.2.x. When upgrading, all of your products will be added to the Default Stock. If you have pending orders, the commands correctly update your salable quantity and reservations for sales and order fulfillment.

### List inconsistencies command

The `list-inconsistencies` command detects and lists all reservation inconsistencies. Use the options to check completed or incomplete orders, or all.

```bash
bin/magento inventory:reservation:list-inconsistencies
```

Command options:

- `-c`, `--complete-orders` - Returns inconsistencies for only completed orders. Incorrect reservations may still be on hold for completed orders.
- `-i`, `--incomplete-orders` - Returns inconsistencies for only incomplete orders (partially shipped, unshipped). Incorrect reservations may hold too much or not enough salable quantity for the orders.
- `-r`, `--raw` - Returns inconsistences for all orders in raw output.

If no issues are found, this message returns: No order inconsistencies were found.

Returned values are in `<ORDER_INCREMENT_ID>:<SKU>:<QUANTITY>:<STOCK-ID>` format:

- Order ID indicates the scope of the inconsistency.
- SKU indicates the product with the inconsistency.
- Quantity sets the amount to enter for the reservation compensation.
- Stock ID defines to scope for stock, which uses the reservations to calculate salable quantity.

Example responses:

```text
Inconsistencies found on following entries:
Order 172:
- Product bike-123 should be compensated by +2.000000 for stock 1
```

```text
172:bike-123:+2.000000:1
```

### Create compensations command

After running `inventory:reservation:list-inconsistencies`, the `create-compensations` command creates compensation reservations using the returned list of inconsistencies. Depending on the issue, new reservations are created to either place or release a hold on salable quantity.

```bash
bin/magento inventory:reservation:create-compensations
```

Command options:

- `-c`, `--complete-orders` - Creates reservations for only completed order inconsistencies.
- `-i`, `--incomplete-orders` - Creates reservations for only incomplete order inconsistencies.
- `-r`, `raw` - Raw output.

Requested compendations must be provided using this format:  `<ORDER_INCREMENT_ID>:<SKU>:<QUANTITY>:<STOCK-ID>`.

If the format of the request is incorrect, the following message displays: A list of compensations needs to be defined as argument or STDIN.

As reservations are entered, messages display indicating the updates by SKU, order, and stock.

### To check and resolve reservation inconsistencies

Check reservation inconsistencies for all orders:

```bash
bin/magento inventory:reservation:list-inconsistencies -r
```

Example response:

```text
172:bike-123:+2.000000:1
172:bikehat-456:+1.000000:1
```

Create reservation compensations to resolve inconsistencies:

```bash
bin/magento inventory:reservation:create-compensations
```

Example response:

```text
Following reservations were created:
- Product bike-123 was compensated by +2.000000 for stock 1
- Product bikehat-456 was compensated by +1.000000 for stock 1
```

After updates complete, run the list command to verify:

```bash
bin/magento inventory:reservation:list-inconsistencies -r
```

## Import geocodes

Inventory Management provides the [Distance Priority](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-configure-distance-priority.html) algorithm, which helps determine the best option for shipping a full or partial order. The algorithm uses GPS information or geocodes to calculate the distance between the source (a warehouse or other physical location) of each item in an order and the shipping address. Based on those results, the algorithm recommends which source should be used to ship out each item in the order.

The merchant selects the provider of the GPS or geocode data required to calculate distances:

* **Google MAP** uses [Google Maps Platform](https://cloud.google.com/maps-platform) services to calculate the distance and time between the shipping destination address and source locations. This option requires a Google billing plan and may incur charges through Google.

* **Offline calculation** calculates the distance using data downloaded from [geonames.org](https://www.geonames.org/) and imported into Magento with a command. This option is free of charge.


{% include config/cli-inventory.md %}
