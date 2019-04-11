---
group: extensions
title: Amazon Sales Channel Release Notes
---

*Release notes published January 2019.*

**Amazon Sales Channel** is now available with Magento 2.2.x and 2.3.x. Merchants can use Amazon Sales Channel to integrate with an Amazon Seller account to post and sell Magento products on Amazon.

See the following documentation:

- [Amazon Sales Channel](https://docs.magento.com/m2/ce/user_guide/sales-channels/amazon/amazon-sales-channel.html) for merchant information and instructions
- [Amazon Sales Channel install]({{site.baseurl}}/extensions/amazon-sales/) for installation and API key information

The release notes include:

-   {:.new}New features
-   {:.fix}Fixes and improvements

### v1.0.0

Amazon Sales Channel 1.0.0 is compatible with version 2.2.x and 2.3.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}. 

- {:.new} **Distance Priority Algorithm**—The Distance Priority Algorithm is a new, out-of-the-box Source Selection Algorithm for distance-based shipping recommendations. This algorithm compares the location of the shipping destination address with source locations to determine the closest source to fulfill shipments. The distance may be determined by either physical distance or the time spent traveling from one location to another, using imported geocode location data or Google directions (driving, walking, or bicycling). See [Configuring Distance Priority Algorithm](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-configure-distance-priority.html) in the _Magento Admin User Guide_.