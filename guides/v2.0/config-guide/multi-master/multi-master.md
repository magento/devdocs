---
layout: default
group: config-guide
subgroup: Z_cqrs
title: Split database performance solution (Enterprise Edition only)
menu_title: Split database performance solution (Enterprise Edition only)
menu_order: 1
menu_node: parent
github_link: config-guide/mult-master/multi-master.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png">

#### Contents
*	TBD
*	TBD

<h2 id="config-ee-multidb-over">Overview of the split database solution</h2>
*This feature is available in Magento Enterprise Edition (EE) only.*

TBD

<h2 id="config-ee-multidb-prereq">Prerequisites</h2>
The split database requires you to set up three MySQL master databases on any host (all three on the Magento server, each database on a separate server, and so on). These are the *master* databases and they're used as follows:

*	One master database for checkout tables
*	One master database for order management system (OMS) tables
*	One master database for the remainder of the Magento 2 application tables

In addition, you can optionally set up any number of *slave* databases that serve as load balancers. 

This guide discusses how to set up the master databases only. We provide sample configurations and references for you to set up slave databases if you wish.

In this guide, the three master databases are named:

*	`magento_checkout`
*	`magento_oms`
*	`magento`

#### Next step
TBD