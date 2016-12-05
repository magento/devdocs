---
layout: default
group:  migration
subgroup: C_Data migration tool
title: Preconditions
menu_title: Preconditions
menu_node:
menu_order: 1
version: 2.0
github_link: migration/migration-tool-preconditions.md
redirect_from: /guides/v1.0/migration/migration-tool-preconditions.html
---

## Preconditions

Before starting migration, you must do the following:

*	Set up your Magento 2 system so that it meets the <a href="{{page.baseurl}}/install-gde/system-requirements.html">system requirements</a>

	Use a topology and design that at least matches your existing Magento 1 system.

*	<a href="{{page.baseurl}}install-gde/bk-install-guide.html">Install Magento 2</a>

*	Do not start Magento 2 cron jobs

*	After installation, back up or <a href="https://dev.mysql.com/doc/refman/5.1/en/mysqldump.html" target="_blank">dump</a> your Magento 2 database as soon as possible. This will allow you to restore the initial database state if migration is not successful.

*	Verify if the Data Migration Tool has network access to connect the Magento 1 and Magento 2 databases

	Open ports in your firewall so that the Migration Tool can communicate with the databases

*	To provide redundancy in the event of unexpected issues, we advise you to replicate your Magento 1 database

*	Migrate Magento 1 extension code to Magento 2

	To find the latest extensions versions, visit [Magento Marketplace](https://marketplace.magento.com/){:target:"_blank"} or contact your extension provider.
	You can also use the Magento [Code Migration Tool](https://github.com/magento/code-migration/blob/develop/README.md){:target="_blank"}

## Related topics

* <a href="{{page.baseurl}}migration/migration-tool-install.html">Install the Data Migration Tool</a>
