---
group: software-update-guide
title: Prerequisites
functional_areas:
  - Upgrade
---

Running the Safe Upgrade Tool ALPHA (SUT) helps you identify what you must do **before** upgrading Magento.

The minimum requirements to run the SUT are:

| **Requirements** | **Constraints** |
|----------------|-----------------|
| PHP version| >= 7.3 |
| Composer | none |
| Node.js | An optional requirement. Only required to check GraphQL compatibility. |
| Magento Access keys | none |
| MC or Magento Open Source | none |
{:style="table-layout:auto;"}

{:.bs-callout-info}
You can run the SUT in any operating system. There is no requirement to run the SUT where your Magento instance is located. It is necessary for SUT to have access to the source code of the Magento instance. For example, you can install SUT on one server and point it at your Magento installation on another server. Refer to the [install]({{site.baseurl}}/safe-upgrade-tool/install.html#install).
