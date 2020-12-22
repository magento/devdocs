---
group: migration-guide
subgroup: A_Overview
title: Best practices and benchmarking
menu_title: Best practices and benchmarking
menu_node:
menu_order: 1
functional_areas:
  - Tools
---

## Overview

This section provides our best information about how to speed up and simplify your migration, and provides guidance about how much time you can expect migration to require.

## Best practices and recommendations

*  **Use a copy of the database from Magento 1 instance** when performing migration testing. Do not involve the main instance of your Magento 1 store database so that your production environment is not affected.

*  **Remove outdated and redundant data** from your Magento 1 database before migration.

  Such data may include logs, order quotes, recently viewed or compared products, visitors, event-specific categories, promotional rules, etc.

*  **Follow our [General Rules for Successful Migration]({{ page.baseurl }}/migration/migration-migrate.html)** to avoid issues or conflicts.

*  To boost performance, you may **enable the `direct_document_copy` option** in your `config.xml`:

   ```xml
   <direct_document_copy>1</direct_document_copy>
   ```

   In this case, Magento 1 and Magento 2 databases must be located in the same MySQL instance, and the database account must have access to each database.

## Benchmarking estimates

We tested migration on the following system:

*  Environment: Virtual Box VM, CentOS 6, 2.5Gb RAM, CPU 1 core 2.6GHz

*  Database had 177k products, 355k orders, 214k customers

## Performance results

*  Settings migration time: ~10 mins

*  Data migration time: ~9 hrs (all data except [URL](https://glossary.magento.com/url) Rewrites, ~85% of total data)

*  Site downtime estimate: a few minutes to reindex and change DNS settings. Additional time required to "warm up" the page [cache](https://glossary.magento.com/cache)
