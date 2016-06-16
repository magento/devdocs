---
layout: default
group: howdoi
subgroup: Migration
title: Migrate from Magento 1 to Magento 2
menu_title: Migrate from Magento 1 to Magento 2
menu_node: parent
menu_order: 1
version: 2.0
github_link: howdoi/migrate/migrate.md
---

## Migrate from Magento 1 to Magento 2
Migration to Magento 2 involves four components: data, extensions, themes, and customizations. 

To have a successful migration, use the following guidelines:

<h4>Build and test Magento 2</h4>

To prepare for the migration, make sure you do all of the following:

* Set up a Magento 2.0 system using a topology and design that at least matches your existing Magento 1 system
* To provide redundancy in the event of unexpected issues, we advise you to replicate your Magento 1.x database and use this Magento 1.x data for your migration
* <a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">Install Magento 2</a> on a system that meets our <a href="{{ site.gdeurl }}install-gde/system-requirements.html">system requirements</a>

<h4>Next steps</h4>

Follow the links below to learn more about each of the four components.

* <a href="{{ site.gdeurl }}howdoi/migrate/migrate-themes.html">Theme Migration</a>
* <a href="{{ site.gdeurl }}howdoi/migrate/migrate-extensions.html">Extension Migration</a>
* <a href="{{ site.gdeurl }}howdoi/migrate/migrate-code.html">Customizations Migration</a>
* <a href="{{ site.gdeurl }}howdoi/migrate/migrate-data.html">Data Migration</a>
