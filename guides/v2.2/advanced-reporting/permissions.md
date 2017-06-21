---
layout: default
group: analytics
subgroup: Advanced Reporting
title: Permissions
menu_title: Permissions
menu_order: 3
menu_node:
version: 2.2
github_link: advanced-reporting/permissions.md
---

There are two ACL resources introduced for MBIIM purposes:

* 'Analytics\API' - permission to download the data archive
* 'Stores\Settings\Configuration\Analytics' - permission to manage (enable/disable) subscription on the configuration page

## Download the data archive

The MBI service must use the Magento API for downloading the data archive.
To do that, a Magento instance creates a special admin user during the installation process.
The user has permissions to access the data archive via API only and cannot perform any other actions.

Note: it is strictly not recommended to remove users or edit their ACL.

## Manage the subscription

To be able to manage MBI subscription, an admin user must have the corresponding permissions.
For this case, the user can change the subscription status via the popup menu or in the corresponding configuration section.