---
group: configuration-guide
title: Import geocodes for Inventory Management
functional_areas:
  - Configuration
  - System
  - Setup
---

Inventory Management provides the [Distance Priority](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-configure-distance-priority.html) algorithm, which helps determine the best option for shipping a full or partial order. The algorithm uses GPS information or geocodes to calculate the distance between the source (a warehouse or other physical location) of each item in an order and the shipping address. Based on those results, the algorithm recommends which source should be used to ship out each item in the order.

The merchant selects the provider of the GPS or geocode data required to calculate distances:

* **Google MAP** uses [Google Maps Platform](https://cloud.google.com/maps-platform) services to calculate the distance and time between the shipping destination address and source locations. This option requires a Google billing plan and may incur charges through Google.

* **Offline calculation** calculates the distance using data downloaded from [geonames.org](https://www.geonames.org/) and imported into Magento with a command. This option is free of charge. 
  

{% include config/cli-inventory.md %}

