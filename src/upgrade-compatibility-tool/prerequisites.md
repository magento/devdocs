---
group: software-update-guide
title: Prerequisites
ee_only: True
redirect from:
  - /safe-upgrade-tool/prerequisites.html
functional_areas:
  - Upgrade
---

Running the Upgrade Compatibility Tool ALPHA helps you identify what you must do **before** upgrading Magento.

The minimum requirements to run the Upgrade Compatibility Tool are:

| **Requirements** | **Constraints** |
|----------------|-----------------|
| PHP version| >= 7.3 |
| Composer | none |
| Node.js | An optional requirement. Only required to check GraphQL compatibility. |
| Memory limitations | At least 2GB RAM |
| Magento Access keys | none |
| MC or Magento Open Source | none |
{:style="table-layout:auto;"}

You can run the Upgrade Compatibility Tool in any operating system. There is no requirement to run the Upgrade Compatibility Tool where your Magento instance is located.

It is necessary for the Upgrade Compatibility Tool to have access to the source code of the Magento instance. For example, you can install it on one server and point it at your Magento installation on another server. Refer to the [install]({{site.baseurl}}/upgrade-compatibility-tool/install.html#install) for more information.
