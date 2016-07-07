---
layout: default
group:  migration
subgroup: n_after
title: After Migration
menu_title: After Migration
menu_node: parent
menu_order: 6
github_link: migration/migration-migrate-after.md
redirect_from: /guides/v1.0/migration/migration-migrate-after.html
---

  
<h2 id="migrate-command-after">After Migration</h2>
After you have completed your migration and thoroughly tested your new Magento 2 site, perform the following tasks:

*	Put Magento 1 in maintenance mode and permanently stop all Admin activities
*	Start Magento 2 cron jobs
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean" target="_blank">Flush all Magento 2 cache types</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-index.html#config-cli-subcommands-index-reindex" target="_blank">Reindex all Magento 2 indexers</a>
*	Change DNS, load balancers, and so on to point to Magento 2 production hardware
