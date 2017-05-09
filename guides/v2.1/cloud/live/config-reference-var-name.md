---
layout: default
group: 
subgroup: Live
title: How to name configuration variables
menu_title: How to name configuration variables
menu_order: 86
menu_node: 
level3_menu_node: level3child
level3_subgroup: config-ref
version: 2.1
github_link: cloud/live/config-reference-var-name.md
---

{% include config/config-reference_conf-var-name1.md %}

### Find a website or store view scope in the database {#cloud-vars-db}
To get these values from the database:

{% include cloud/log-in-db.md %}

After you connect to the database, use the following SQL queries to find the relevant values:

	SELECT * FROM STORES;
	SELECT * FROM STORE_WEBSITE;

A sample follows:

	MariaDB [main]> SELECT * FROM STORE_WEBSITE;
	+------------+-------+--------------+------------+------------------+------------+
	| website_id | code  | name         | sort_order | default_group_id | is_default |
	+------------+-------+--------------+------------+------------------+------------+
	|          0 | admin | Admin        |          0 |                0 |          0 |
	|          1 | base  | Main Website |          0 |                1 |          1 |
	|          2 | test1 | Test Website |          0 |                3 |          0 |
	+------------+-------+--------------+------------+------------------+------------+

Use the value from the `code` column as the scope name, not the `name` value.

For example, to set a configuration variable for Test Website, use the following format:

	CONFIG__WEBSITES__TEST1__<SYSTEM__VARIABLE__NAME>

where `<SYSTEM__VARIABLE__NAME>` comes from the next section.

{% include config/config-reference_conf-var-name2.md %}

#### Next step
[Example of managing system-specific settings]({{ page.baseurl }}cloud/live/sens-data-initial.html)

#### Related information
*	[Magento User Guide discussion of scope](http://docs.magento.com/m2/ce/user_guide/configuration/scope.html){:target="_blank"}
*	[Scope quick reference](http://docs.magento.com/m2/ce/user_guide/stores/store-scope-reference.html){:target="_blank"}
