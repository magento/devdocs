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

## Best practices and recommendations

* Migrate data from a replicated Magento 1 database instance

* Remove outdated and redundant data from your Magento 1 database (for example, you could remove logs, order quotes, recently viewed or compared products, visitors, event-specific categories, promotional rules, and so on)

* To avoid any unexpected issues or conflicts please follow steps described in <a href="{{page.baseurl}}migration/migration-migrate.html">General Rules for Successful Migration</a>

* To boost performance you can set `<direct_document_copy>1</direct_document_copy>` option in your `config.xml`. In this case, Magento 1 and Magento 2 databases should be located in one MySQL instance, and the database account must access each database

## Benchmarking estimates

We tested migration on the following system:

* Environment: Virtual Box VM, CentOS 6, 2.5Gb RAM, CPU 1 core 2.6GHz

* Database had 177k products, 355k orders, 214k customers

## Performance results

* Settings migration time: ~10 mins

* Data migration time: ~9 hrs (all data except URL Rewrites, ~85% of total data)

* Site downtime estimate: a few minutes to reindex and change DNS settings. Additional time required to “warm up” the page cache
