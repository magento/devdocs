---
group: cloud
title: Upgrades and Patches
version: 2.1
github_link: cloud/project/project-upgrade-parent.md
functional_areas:
  - Cloud
  - Upgrade
---
We use [Composer]({{ page.baseurl }}/cloud/reference/cloud-composer.html) for upgrades and patches to {{site.data.var.ece}} and recommend running the `composer update` command.

{{site.data.var.ece}} checks for pending patches and updates when you push code changes to the remote environment. The upgrade instructions walk through preparing, updating, and verifying the upgrade.

**Prerequisite**—Before beginning the upgrade process, create a new, active branch from Integration and checkout to your local workstation. Dedicating a branch to the upgrade process helps to avoid interference with work in progress.

{% include note.html type="info" content="PCI compliance requires TLS protocol version 1.2 or later. On April 30, 2018, all Magento Cloud instances must convert to using TLS version 1.2 or later." %}

## Upgrade your application architecture
We combined the upgrade metapackages for tools and patches with the release of [ece-tools version 2002.0.8](http://devdocs.magento.com/guides/v2.2/cloud/composer-packages/ece-tools.html#v200208), which helps to provide an easier process for future updates. You need to upgrade to the new metapackage to use this process.

Some restrictions in the core {{site.data.var.ee}} code base prevent you from upgrading to the new application architecture directly, so use the following table to determine your upgrade path:

| Current Version | Upgrade Path |
| --- | --- |
| 2.1.3 and earlier | You must upgrade to version 2.1.4 or later before you continue. |
| 2.1.4 and later | You can begin the upgrade to [ece-tools 2002.0.9]({{ page.baseurl }}/cloud/composer-packages/ece-tools.html#v200209) and later. |
| 2.2.x | You can begin the upgrade to [ece-tools 2002.0.8]({{ page.baseurl }}/cloud/composer-packages/ece-tools.html#v200208) and later. |

### Update the metapackage {#metapackage}
We are deprecating the `magento/magento-cloud-configuration` and `magento/ece-patches` packages.

You must perform a one-time, manual step to update the package version constraint for `magento/magento-cloud-metapackage` in the `composer.json` file, located in the root directory. This constraint enables updates for Magento Cloud metapackages—including removing deprecated packages—without upgrading your current {{site.data.var.ee}} version.

Each {{site.data.var.ee}} version requires a different constraint based on the following:

```
>=current_version <next_version
```

You can always find the latest metapackage constraint in the [`magento-cloud` template](https://github.com/magento/magento-cloud/blob/master/composer.json).

The following example places a constraint for the Magento Cloud metapackage to any version greater than or equal to the current version 2.2.0 and lower than next version 2.2.1:

```json
"require": {
    "magento/magento-cloud-metapackage": ">=2.2.0 <2.2.1"
},
```
