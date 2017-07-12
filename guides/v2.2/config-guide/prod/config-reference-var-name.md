---
layout: default
group: config-guide
subgroup: 07_conf
title: Use environment variables to override configuration settings
menu_title: Use environment variables to override configuration settings
menu_order: 5700
menu_node:
level3_menu_node: level3child
level3_subgroup: config-ref
version: 2.2
github_link: config-guide/prod/config-reference-var-name.md
---

{% include config/config-reference_conf-var-name1.md %}

### Find a website or store view scope in the database {#cloud-vars-db}
To get these values from the database:

1.	If you haven't done so already, log in to your development system as the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2.	Enter the following command:

		mysql -u <magento database user name> -p
3.	At the `mysql>` prompt, enter the following commands in the order shown:

		use <magento database name>;
4.	Use the following SQL queries to find the relevant values:

		SELECT * FROM STORES;
		SELECT * FROM STORE_WEBSITE;

	A sample follows:

		mysql> SELECT * FROM STORE_WEBSITE;
		+------------+-------+--------------+------------+------------------+------------+
		| website_id | code  | name         | sort_order | default_group_id | is_default |
		+------------+-------+--------------+------------+------------------+------------+
		|          0 | admin | Admin        |          0 |                0 |          0 |
		|          1 | base  | Main Website |          0 |                1 |          1 |
		|          2 | test1 | Test Website |          0 |                3 |          0 |
		+------------+-------+--------------+------------+------------------+------------+

5.	Use the value from the `code` column as the scope name, not the `name` value.

	For example, to set a configuration variable for Test Website, use the following format:

		CONFIG__WEBSITES__TEST1__<SYSTEM__VARIABLE__NAME>

	where `<SYSTEM__VARIABLE__NAME>` comes from the next section.

{% include config/config-reference_conf-var-name2.md %}

## How to use environment variables
Set configuration values as variables using PHP's [`$_ENV`](http://php.net/manual/en/reserved.variables.environment.php){:target="_blank"} associate array. You can set the values in any PHP script that runs when Magento runs, such as `index.php`.

An example of setting two values follows:

	$_ENV['CONFIG__DEFAULT__CATALOG__SEARCH__ELASTICSEARCH_SERVER_HOSTNAME'] = 'http://search.example.com';
	$_ENV['CONFIG__DEFAULT__GENERAL__STORE_INFORMATION__MERCHANT_VAT_NUMBER'] = '1234';

A step-by-step example is shown in [Set configuration values using environment variables]({{ page.baseurl }}config-guide/deployment/pipeline/example/environment-variables.html).

<div class="bs-callout bs-callout-warning" markdown="1">
To use values you set in the `$_ENV` array, you must set `variables_order = "EGPCS"` in your `php.ini` file. For details, see [PHP documentation](http://us.php.net/manual/en/ini.core.php#ini.variables-order){:target="_blank"}.
</div>

#### Related information
*	[Magento User Guide discussion of scope](http://docs.magento.com/m2/ce/user_guide/configuration/scope.html){:target="_blank"}
*	[Magento User Guide scope quick reference](http://docs.magento.com/m2/ce/user_guide/stores/store-scope-reference.html){:target="_blank"}
