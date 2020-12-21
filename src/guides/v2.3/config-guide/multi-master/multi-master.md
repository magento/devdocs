---
group: configuration-guide
title: Split database performance solution (Magento Commerce only)
ee_only: True
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of the split database solution {#config-ee-multidb-over}

*This feature is available in {{site.data.var.ee}} only.*

{{site.data.var.ee}} offers number of scalability advantages, including the ability to use three separate master databases for different functional areas of the Magento application.

Checkout, orders, and product data can all each use a separate master databases that you can optionally replicate. This separation independently scales load from [website](https://glossary.magento.com/website) checkouts, order management activities, website browsing, and merchandising activities, depending on your needs.  These changes provide considerable flexibility in how the database tier can be scaled.

{:.bs-callout-info}
{{site.data.var.ece}} does _not_ support this feature at this time.

The `ResourceConnections` class provides the unified MySQL database connection to the Magento application. For queries to the master databases, we implement the [Command Query Responsibility Segregation (CQRS)](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation) database pattern. This pattern handles the logic for routing the read and write queries to the appropriate databases. Developers do not need to know which configuration is being used and there are no separate read and write database connections.

If you set up optional database replication, you get the following advantages:

*  Data backup
*  Data analysis without affecting the master database
*  Scalability

MySQL databases replicate asynchronously, which means slaves do not need to be connected permanently to receive updates from the master.

The following figure shows how this feature works.

![{{site.data.var.ee}} uses different databases to store tables]({{ site.baseurl }}/common/images/ee_split-db-diagram.png)

In {{site.data.var.ce}}, only one master database is used.

{{site.data.var.ee}} uses three master databases and a configurable number of slave databases for replication. {{site.data.var.ee}} has a single interface for database connections, resulting in faster performance and better scalability.

## Configuration options {#config-ee-multidb-opts}

Because of the way the split database performance solution is designed, your custom code and installed components *cannot* do any of the following:

*  Write directly to the database (instead, you must use the {{site.data.var.ee}} database interface)
*  Use JOINs that affect the sales or [quote](https://glossary.magento.com/quote) databases
*  Use foreign keys to tables in the checkout, sales, or main databases

{%
include note.html
type='warning'
content='Contact component developers to verify whether or not their components do any of the preceding. If so, you must choose only one of the following:

*  Ask the component developers to update their components.
*  Use the components as-is _without_ the split database solution.
*  Remove the components so you can use the split database solution.'

%}

This also means you can either:

*  Configure the split database solution *before* putting Magento into production.

   We recommend configuring split databases as soon as possible after you install the Magento software.

*  [Manually configure]({{ page.baseurl }}/config-guide/multi-master/multi-master_manual.html) the split database solution.

   You must perform this task if you've already installed components or if Magento is already in production. (*Do not* update a production system; make the updates in a development system and synchronize the changes after you've tested them.)

   {:.bs-callout-warning}
   You must back up the two additional database instances manually. Magento backs up only the main database instance. The [<code>'magento setup:backup --db</code>]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html) command and Magento Admin options do not back up the additional tables.

## Prerequisites {#config-ee-multidb-prereq}

The split database requires you to set up three MySQL master databases on any host (all three on the Magento server, each database on a separate server, and so on). These are the *master* databases and they're used as follows:

*  One master database for [checkout](https://glossary.magento.com/checkout) tables
*  One master database for sales tables (also referred to as *Order Management System*, or *OMS*, tables)
*  One master database for the remainder of the Magento 2 application tables

In addition, you can optionally set up any number of *slave* databases that serve as load balancers and backups.

This guide discusses how to set up the master databases only. We provide sample configurations and references for you to set up slave databases if you wish.

In this guide, the three master databases are named:

*  `magento_quote`
*  `magento_sales`
*  `magento`

(You can name your databases anything you wish.)

{:.ref-header}
Related topics

*  If you have not installed components or put Magento into production: [Automatically configure master databases]({{ page.baseurl }}/config-guide/multi-master/multi-master_masterdb.html)
*  If Magento is already in production or if you've already installed components: [Manually configure master databases]({{ page.baseurl }}/config-guide/multi-master/multi-master_manual.html)
