---
group: software-update-guide
subgroup: 32_UseUpgrade
title: Run System Upgrade
menu_title: Run System Upgrade
menu_node: parent
menu_order: 1
functional_areas:
  - Upgrade
---

## Overview of System Upgrade {#compman-overview}

This section discusses how to start System Upgrade, which upgrades the version of Magento core components as well as any other installed components.

You can upgrade in any of the following ways:

*  Using the System Upgrade utility, a wizard that walks you through the upgrade step by step; continue with this topic.

   Use this method if you don't have a to the Magento server's file system or if you're a non-technical user.

*  Using the [command line]({{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html).

 This upgrade method is more advanced and it requires access to the Magento server's file system.

{:.bs-callout-info}
_System upgrade_ refers to updating the Magento 2.x core components and other installed components. To migrate from Magento 1.x to Magento 2, see the [Migration Guide]({{ page.baseurl }}/migration/bk-migration-guide.html).

{:.bs-callout-warning}

*  Authorization keys from a [shared account](http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html) _cannot_ be used for upgrade. You must get your authorization keys from `magento.com` account owner.
*  If you installed the Magento application by [cloning the GitHub repository]({{ page.baseurl }}/install-gde/prereq/dev_install.html), you *cannot* use the System Upgrade utility to upgrade the software. Instead, you must [update it manually]({{ page.baseurl }}/install-gde/install/cli/dev_options.html).

## System Upgrade checklist

{% include comp-man/checklist_2.2.md %}

{:.ref-header}
Related topics

[Start System Upgrade]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html)
