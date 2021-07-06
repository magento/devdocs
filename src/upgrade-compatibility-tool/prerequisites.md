---
group: software-update-guide
title: Prerequisites
ee_only: True
redirect_from:
  - /safe-upgrade-tool/prerequisites.html
functional_areas:
  - Upgrade
---

Running the Upgrade Compatibility Tool helps you identify what you must do **before** upgrading your Adobe Commerce version.

The minimum requirements to run the Upgrade Compatibility Tool are:

| **Requirements** | **Constraints** |
|----------------|-----------------|
| PHP version| >= 7.3 |
| Composer | none |
| Node.js | An optional requirement. Only required to check GraphQL compatibility. |
| Memory limitations | At least 2GB RAM |
| Adobe Commerce Access keys | none |
| Adobe Commerce Open Source | none |
{:style="table-layout:auto;"}

You can run the Upgrade Compatibility Tool in any operating system. There is no requirement to run the Upgrade Compatibility Tool where your Adobe Commerce instance is located.

It is necessary for the Upgrade Compatibility Tool to have access to the source code of the Adobe Commerce instance. For example, you can install it on one server and point it at your Adobe Commerce installation on another server. Refer to the [install]({{site.baseurl}}/upgrade-compatibility-tool/install.html#install) for more information.
