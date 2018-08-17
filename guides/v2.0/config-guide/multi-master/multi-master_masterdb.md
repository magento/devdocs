---
group: config-guide
subgroup: 20_cqrs
title: Automatically configure master databases
menu_title: Automatically configure master databases
menu_order: 2
menu_node:
version: 2.0
ee_only: True
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of master databases   {#config-ee-multidb-master-over}

This topic discusses how to get started with the split database solution by:

1.	Installing {{site.data.var.ee}} with a single master database (named `magento`)
2.	Creating two additional master databases for {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} and OMS (named `magento_quote` and `magento_sales`)
2.	Configuring {{site.data.var.ee}} to use the checkout and sales databases

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This guide assumes all three databases are on the same host as the Magento application and that they're named <code>magento</code>, <code>magento_quote</code>, and <code>magento_sales</code>. However, the choice of where to locate the databases and what they're named is up to you. We hope our examples make the instructions easier to follow.</p></span>
</div>

## Install the \{\{site.data.var.ee}} software   {#config-ee-multidb-master-install}

You can enable split databases at any time after you install the {{site.data.var.ee}} software; in other words, you can add split databases to a {{site.data.var.ee}} system that already has checkout and order data. Use the instructions in the {{site.data.var.ee}} README or the <a href="{{ page.baseurl }}/install-gde/bk-install-guide.html">installation guide</a> to install the {{site.data.var.ee}} software using a single master database.

{% include config/split-db.md %}

#### Next step

<a href="{{ page.baseurl }}/config-guide/multi-master/multi-master_verify.html">Verify split databases</a>
