---
group: migration-guide
subgroup: _after
title: After Migration
menu_title: After Migration
menu_node: parent
menu_order: 7
functional_areas:
  - Tools
---

After you have completed your migration and thoroughly tested your new Magento 2 site, perform the following tasks:

*  Put Magento 1 in maintenance mode and permanently stop all [Admin](https://glossary.magento.com/admin) activities

*  Start Magento 2 cron jobs

*  [Flush all Magento 2 cache types]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean){:target="_blank"}

*  [Reindex all Magento 2 indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html#config-cli-subcommands-index-reindex){:target="_blank"}

*  Change DNS, load balancers, etc. to point to Magento 2 production hardware
