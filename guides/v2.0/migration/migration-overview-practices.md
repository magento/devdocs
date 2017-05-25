---
layout: default
group:  migration
subgroup: A_Overview
title: Best practices and benchmarking
menu_title: Best practices and benchmarking
menu_node:
menu_order: 1
version: 2.0
github_link: migration/migration-overview-practices.md
redirect_from: /guides/v1.0/migration/migration-overview-practices.html
---

## Overview

This section provides our best information about how to speed up and simplify your migration, and provides guidance about how much time you can expect migration to require.

## Test your migration activities

We recommend to test as much migration steps as possible; ideally -- make a test run of the entire migration process.

Surely, you can perform migration without any testing. The Data Migration Tool works fine out-of-the-box, and if you follow instructions in this Guide, migration should go smoothly.

Although, testing helps to find out areas where manual interference is required, and saves you from the nervousness of experiencing issues on your production environment.

### Example: migrate incremental changes after applying customizations

Let's suppose you have migrated all your data from Magento 1 to Magento 2.

Then, you have applied the customizations you've had in your Magento 1 instance (examples?). Now, you're running the Data Migration Tool in the Delta mode to transfer incremental changes.

This is where you may encounter problems: your customizations may break the database mappings that the Data Migration Tool uses to transfer data.

In this case, you must to provide mappings manually, and it will be safer if you test those mappings before making changes on production environment.

## Best practices and recommendations

* When you perform migration testing, **use a copy of Magento 1 database instance**; do not involve the main instance of your Magento 1 store database. By migration testing we mean any migration activities or steps that you may run for testing purposes; the activities that do not affect your production environment.

* **Remove outdated and redundant data** from your Magento 1 database (for example, logs, order quotes, recently viewed or compared products, visitors, event-specific categories, promotional rules, and so on)

* To avoid any unexpected issues or conflicts, please follow the steps described in <a href="{{page.baseurl}}migration/migration-migrate.html">General Rules for Successful Migration</a>

* To boost performance, you may **enable the `direct_document_copy` option** in your `config.xml`:

{%highlight xml%}
<direct_document_copy>1</direct_document_copy>
{%endhighlight%}

 In this case, Magento 1 and Magento 2 databases should be located in one MySQL instance, and the database account must access each database

## Benchmarking estimates

We tested migration on the following system:

* Environment: Virtual Box VM, CentOS 6, 2.5Gb RAM, CPU 1 core 2.6GHz

* Database had 177k products, 355k orders, 214k customers

## Performance results

* Settings migration time: ~10 mins

* Data migration time: ~9 hrs (all data except {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} Rewrites, ~85% of total data)

* Site downtime estimate: a few minutes to reindex and change DNS settings. Additional time required to "warm up" the page {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}
