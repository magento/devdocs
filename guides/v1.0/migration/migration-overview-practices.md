---
layout: default
group:  migration
subgroup: A_Overview
title: Best practices
menu_title: Best practices
menu_node: 
menu_order: 1
github_link: migration/migration-overview-practices.md
---

<h2 id="migrate-overview-benchmarking">Best practices and benchmarking</h2>
This section provides our best information about how to speed up and simplify your migration, and provides guidance about how much time you can expect migration to require.

Best practices and recommendations

* Migrate data from a replicated Magento 1.x database instance.
* Remove outdated and redundant data from your Magento 1.x database (for example, you could remove logs, order quotes, recently viewed or compared products, visitors, event-specific categories, promotional rules, and so on).
* Stop all administrative activity on both Magento 1.x and Magento 2.0 during your migration test runs and the actual migration (including configuration changes; and maintaining customers, orders, and inventory).
* For Magento Enterprise Edition, archive unarchived orders.


Benchmarking estimates

We tested migration on the following system:

* Environment: Virtual Box VM, CentOS 6, 2.5Gb RAM, CPU 1 core 2.6GHz
* Database had 177k products, 355k orders, 214k customers

Performance Results:

* Settings migration time: ~10 mins
* Data migration time: ~9 hrs (all data except URL Rewrites, ~85% of total data)
* Site downtime estimate: A few minutes to reindex and change DNS settings. Additional time required to “warm up” the page cache.
