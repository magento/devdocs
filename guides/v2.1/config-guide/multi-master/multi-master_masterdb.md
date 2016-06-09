---
layout: default
group: config-guide
subgroup: 20_cqrs
title: Automatically configure master databases
menu_title: Automatically configure master databases
menu_order: 2
menu_node: 
version: 2.1
github_link21: config-guide/multi-master/multi-master_masterdb.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png">

#### Contents
*	<a href="#config-ee-multidb-master-over">Overview of master databases</a>
*	<a href="#config-ee-multidb-master-install">Install the Magento EE software</a>
*	<a href="#config-ee-multidb-master-masters">Set up additional master databases</a>

<h2 id="config-ee-multidb-master-over">Overview of master databases</h2>
This topic discusses how to get started with the split database solution by:

1.	Installing Magento 2 EE with a single master database (named `magento`)
2.	Creating two additional master databases for checkout and OMS (named `magento_quote` and `magento_sales`)
2.	Configuring EE to use the checkout and sales databases 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This guide assumes all three databases are on the same host as the Magento application and that they're named <code>magento</code>, <code>magento_quote</code>, and <code>magento_sales</code>. However, the choice of where to locate the databases and what they're named is up to you. We hope our examples make the instructions easier to follow.</p></span>
</div>

<h2 id="config-ee-multidb-master-install">Install the Magento EE software</h2>
You can enable split databases at any time after you install the Magento EE software; in other words, you can add split databases to an EE system that already has checkout and order data. Use the instructions in the Magento 2 EE README or the <a href="{{ site.gdeurl21 }}install-gde/bk-install-guide.html">installation guide</a> to install the Magento 2 EE software using a single master database.

{% include config/split-db.md %}

#### Next step
<a href="{{ site.gdeurl21 }}config-guide/multi-master/multi-master_verify.html">Verify split databases</a>
