---
layout: default
group:  migration
subgroup: Data migration tool
title: Data migration tool
menu_title: Data migration tool
menu_node: parent
menu_order: 3
github_link: migration/migration-tool.md
---

  
<h2>Data Migration Tool</h2>

To assist you with your migration, Magento is creating the Magento 2
Data Migration Tool, a data migration command-line interface (CLI) tool with auxiliary verification, progress tracking, logging, and testing functions that allows direct data copying from a Magento 1 database to a Magento 2 database. The tool is expected to be available by Q3 2015 and it efficiently and reliably migrates all core Magento data entities and any custom data entities that do not change between versions.

Data Migration Tool can transfer and adapt data from Magento 1 to Magento 2 stores. The migration in overall is split into three phase (or "modes"). Migration of settings, migration of main data and migration of delta. Each mode splits into steps. Every step responsible for transferring some particular data. (e.g. URL Rewrite step, EAV step, Settings step ...) At the beginning, when is run, step checks tables structure of Magento 1 and Magento 2 for their consistency. Then the actual data is transferred to Magento 2 and in the end this data is checked to ensure that everything was transferred properly.
