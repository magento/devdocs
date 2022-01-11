---
group: software-update-guide
title: Prerequisites
ee_only: True
redirect_from:
  - /safe-upgrade-tool/prerequisites.html
functional_areas:
  - Upgrade
redirect_to: https://experienceleague.adobe.com/docs/commerce-operations/upgrade-guide/upgrade-compatibility-tool/prerequisites.html
---

Running the {{site.data.var.uct}} helps you identify what you must do **before** upgrading your {{site.data.var.ee}} version.

The minimum requirements to run the {{site.data.var.uct}} are:

| **Requirements** | **Constraints** |
|----------------|-----------------|
| PHP version| >= 7.3 |
| Composer | none |
| Node.js | [Node.js](https://nodejs.org/) (`^12.22.0`, `^14.17.0`, or `>=16.0.0`) |
| Memory limitations | At least 2GB RAM |
| {{site.data.var.ee}} Access keys | none |
| {{site.data.var.ee}} (Open Source or enterprise) | none |
{:style="table-layout:auto;"}

You can run the {{site.data.var.uct}} in any operating system. There is no requirement to run the {{site.data.var.uct}} where your {{site.data.var.ee}} instance is located.

It is necessary for the {{site.data.var.uct}} to have access to the source code of the {{site.data.var.ee}} instance. For example, you can install it on one server and point it at your {{site.data.var.ee}} installation on another server. Refer to the [install](https://experienceleague.adobe.com/docs/commerce-operations/upgrade-guide/upgrade-compatibility-tool/install.html#install) for more information.
