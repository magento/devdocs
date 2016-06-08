---
layout: default
group:  migration
subgroup: C_Data migration tool
title: Preconditions
menu_title: Preconditions
menu_node: 
menu_order: 1
github_link21: migration/migration-tool-preconditions.md
---

##Preconditions

Before you start your migration, you must do all of the following:

*	Set up a Magento 2 system that meets our <a href="{{ site.gdeurl21 }}/install-gde/system-requirements.html">system requirements</a>

	Set up your system using a topology and design that at least matches your existing Magento 1 system.

*	<a href="{{ site.gdeurl21 }}install-gde/bk-install-guide.html">Install Magento 2</a>

*	Do not start Magento 2 cron jobs

*	After installation back up or <a href="https://dev.mysql.com/doc/refman/5.1/en/mysqldump.html" target="_blank">dump</a> your Magento 2 database as soon as possible

*	Check that the Data Migration tool has a network access to connect the Magento 1 and Magento 2 databases

	Open ports in your firewall so the migration tool can communicate with the databases

*	To provide redundancy in the event of unexpected issues, we advise you to replicate your Magento 1 database

*	Migrate Magento 1 extension code to Magento 2

	Reach out to your extension providers to see if they have been ported yet. For assistance, you can also use the <a href="https://github.com/magento/code-migration/blob/develop/README.md" target="_blank">Magento code migration tool</a>.

###Related topics

* <a href="{{ site.gdeurl21 }}migration/migration-tool-install.html">Install the Data Migration Tool</a>