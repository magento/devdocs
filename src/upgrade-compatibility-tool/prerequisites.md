---
group: software-update-guide
title: Prerequisites
ee_only: True
redirect_from:
  - /safe-upgrade-tool/prerequisites.html
functional_areas:
  - Upgrade
---

Running the {{site.data.var.uct}} helps you identify what you must do **before** upgrading your {{site.data.var.ee}} version.

The minimum requirements to run the {{site.data.var.uct}} are:

| **Requirements** | **Constraints** |
|----------------|-----------------|
| PHP version| >= 7.3 |
| Composer | none |
| Node.js | An optional requirement. Only required to check GraphQL compatibility. |
| Memory limitations | At least 2GB RAM |
| Adobe Commerce Access keys | none |
| Adobe Commerce (Open Source or enterprise) | none |
{:style="table-layout:auto;"}

You can run the {{site.data.var.uct}} in any operating system. There is no requirement to run the {{site.data.var.uct}} where your {{site.data.var.ee}} instance is located.

It is necessary for the {{site.data.var.uct}} to have access to the source code of the {{site.data.var.ee}} instance. For example, you can install it on one server and point it at your {{site.data.var.ee}} installation on another server. Refer to the [install]({{site.baseurl}}/upgrade-compatibility-tool/install.html#install) for more information.
