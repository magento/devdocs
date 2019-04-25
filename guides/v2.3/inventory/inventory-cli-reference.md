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

- Checking and resolving reservations for product SKUs
- Adding geocodes for the Distance Priority algorithm

## Resolve inconsistent reservations

Reservations place a salable quantity hold for product SKUs per stock. When you ship, add products, cancel, or refund an order, compensation reservations enter to place or clear these holds. Inconsistencies in reservations may occur if you are upgrading to Magento v2.3.x from v.2.1.x or v2.2.x, mass transfering inventory with pending orders, removing sources from stocks with pending orders, etc.

Inventory Management includes two CLI commands to check for inconsistent reservation and add compensation reservations to resolve the issues.

#### To check for reservation inconsistencies

Enter the following command to list all reservation inconsistencies. Using an option returns a list of reservations to update or create for completed or incomplete orders. Using the `raw` option checks for all inconsistencies.

```bash
bin/magento inventory:reservation:list-inconsistencies
```

Options
- `-c`, `-complete-orders` : Shows inconsistencies for only completed orders. Incorrect reservations may be on hold for completed reservations.
- `-i`, `-incomplete-orders` : Shows inconsistencies for only incomplete orders (partially shipped, unshipped). Incorrect reservations may hold too much or not enough salable quantity for the order.
- `-r`, `-raw` : Raw output of all inconsistences.

If no issues are found, this message returns: No order inconsistencies were found.

#### To resolve reservation inconsistencies

After receiving a list of reservation issues, enter the following command to create compensation reservations using the returned list. Depending on the issue, new reservations are created to either place or release a hold on salable quantity.

```bash
bin/magento inventory:reservation:create-compensations
```

Options
- `compensations` : List of compensation arguments in format `<ORDER_INCREMENT_ID>:<SKU>:<QUANTITY>:<STOCK-ID>`. This data is provided from the `inventory:reservation:list-inconsistencies` command.
- `-r`, `raw` : Raw output.

If the format of the request is incorrect, the following message displays: A list of compensations needs to be defined as argument or STDIN.

As reservations are entered, messages display indicating the product by SKU was compensated for an amount for a stock ID.

## Import geocodes

Inventory Management provides the [Distance Priority](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-configure-distance-priority.html) algorithm, which helps determine the best option for shipping a full or partial order. The algorithm uses GPS information or geocodes to calculate the distance between the source (a warehouse or other physical location) of each item in an order and the shipping address. Based on those results, the algorithm recommends which source should be used to ship out each item in the order.

The merchant selects the provider of the GPS or geocode data required to calculate distances:

* **Google MAP** uses [Google Maps Platform](https://cloud.google.com/maps-platform) services to calculate the distance and time between the shipping destination address and source locations. This option requires a Google billing plan and may incur charges through Google.

* **Offline calculation** calculates the distance using data downloaded from [geonames.org](https://www.geonames.org/) and imported into Magento with a command. This option is free of charge.


{% include config/cli-inventory.md %}
