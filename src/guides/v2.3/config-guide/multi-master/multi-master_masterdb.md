---
group: configuration-guide
title: Automatically configure master databases
ee_only: True
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of master databases {#config-ee-multidb-master-over}

This topic discusses how to get started with the split database solution by:

1. Installing {{site.data.var.ee}} with a single master database (named `magento`)
1. Creating two additional master databases for [checkout](https://glossary.magento.com/checkout) and OMS (named `magento_quote` and `magento_sales`)
1. Configuring {{site.data.var.ee}} to use the checkout and sales databases

{:.bs-callout-info}
This guide assumes all three databases are on the same host as the Magento application and that they're named `magento`, `magento_quote`, and `magento_sales`. However, the choice of where to locate the databases and what they're named is up to you. We hope our examples make the instructions easier to follow.

## Install the {{site.data.var.ee}} software {#config-ee-multidb-master-install}

You can enable split databases at any time after you install the {{site.data.var.ee}} software; in other words, you can add split databases to a {{site.data.var.ee}} system that already has checkout and order data. Use the instructions in the {{site.data.var.ee}} README or the [installation guide]({{ page.baseurl }}/install-gde/bk-install-guide.html) to install the {{site.data.var.ee}} software using a single master database.

{% include config/split-db.md %}

{:.ref-header}
Related topics

[Verify split databases]({{ page.baseurl }}/config-guide/multi-master/multi-master_verify.html)
