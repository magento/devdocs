---
layout: default
group: cloud
subgroup: 40_live
title: System-specific settings reference
menu_title: System-specific settings reference
menu_order: 12
menu_node: 
level3_menu_node: level3child
level3_subgroup: sens-data
version: 2.1
github_link: cloud/live/sens-data-system-vars.md
---

This topic discusses how to find and set the system-specific settings we include in `config.local.php` in version 2.1.4. You can set variable values per scope (default, website, store, or store view). For example, you could set the default locale used in a particular website.

The general format of system-specific variables follows:

<pre class="no-copy">&lt;SCOPE>__&lt;SYSTEM__VARIABLE></pre>

To set a value for the default scope (that is, for _all_ scopes), use the following format:

<pre class="no-copy">CONFIG__DEFAULT__&lt;SYSTEM__VARIABLE></pre>

First, determine the scope name as discussed in [Scope values](#cloud-system-vars-scopes), then append to it a system variable as discussed in [System values](#cloud-system-vars-sys).

How to read the tables:

*	`Path in Magento Admin` column

	*	Displays options in boldface and menu labels as plain text.
	*	Values before the comma are paths in the Admin navigation. Values after the comma are options in the right pane.
*	`Variable name` column is the name of the corresponding environment variable.

	You have the option of specifying system-specific values for these configuration parameters as environment variables if you wish.

	*	A variable name is always ALL CAPS
	*	Start a variable name with `CONFIG__` (note two underscore characters)
	*	Variable names are specified in different Magento database tables, as indicated in the following sections.

#### Part 1: Find the scope value {#cloud-system-vars-scopes}
This section discusses how you can optionally set system-specific configuration values per _scope_ (store, store view, or website). Setting variables per scope is optional; to set system-wide variables, see [System values](#cloud-system-vars-sys).

Scope values come from the `store`, `store_group`, and `store_website` tables.

*	The `stores` table specifies store view names and codes
*	The `store_group` table specifies store names and codes
*	The `store_website` table specifies website names and codes

| Description  | Path in Magento Admin | Variable name | 
|--------------|--------------|----------------------|
| Create, edit, delete store views | **Stores** > **All Stores**, **Add Store View** | `CONFIG__STORES__<STORE_VIEW_CODE>`  |
| Create, edit, delete stores | **Stores** > **All Stores**, **Add Store** | `CONFIG__STORE__GROUP__<STORE_CODE>`  | 
| Create, edit, delete websites | **Stores** > **All Stores**, **Add Website**  | `CONFIG__STORE__WEBSITE__<WEBSITE_CODE>` | 

To get these values from the database:

{% include cloud/log-in-db.md %}

After you connect to the database, use the following SQL queries to find the relevant values:

	SELECT * FROM STORES;
	SELECT * FROM STORE_GROUP;
	SELECT * FROM STORE_WEBSITE;

A sample follows:

	MariaDB [main]> select * from store_website;
	+------------+-------+--------------+------------+------------------+------------+
	| website_id | code  | name         | sort_order | default_group_id | is_default |
	+------------+-------+--------------+------------+------------------+------------+
	|          0 | admin | Admin        |          0 |                0 |          0 |
	|          1 | base  | Main Website |          0 |                1 |          1 |
	|          2 | test1 | Test Website |          0 |                3 |          0 |
	+------------+-------+--------------+------------+------------------+------------+

For example, to set a configuration variable for Test Website, use the following format:

	CONFIG__STORE__WEBSITE__TEST__<CONFIGURATION_VARIABLE_NAME>

where `<CONFIGURATION_VARIABLE_NAME>` comes from the next section.

#### Part 2: Set system values {#cloud-system-vars-sys}
This section discusses how to set system variables. 

*	To set values for the default scope (that is, all websites, stores, and store views), start the variable name with `CONFIG__DEFAULT__`. 

*	To set a value for a particular scope, start the variable name as discussed in [Scope values](#cloud-system-vars-scopes).

Examples are shown in TBD.

System values come from the `core_config_data` table.

| Description  | Path in Magento Admin (omitting **Stores** > **Configuration**) | Variable name | 
|--------------|--------------|----------------------|
| Store locale (Default Config scope)  | General > **General**, **Locale Options** > **Locale**  |  `<SCOPE>__GENERAL__LOCALE__CODE` | 
| Static asset signing |  Advanced > **Developer**, **Static Files Settings** > **Static Files Signing** | `<SCOPE>__DEV__STATIC__SIGN`  | 
| Server-side or client-side LESS compilation  | Advanced > **Developer**, **Frontend Developer Workflow** > **Workflow type** |  `<SCOPE>__DEV__FRONT_END_DEVELOPMENT_WORKFLOW__TYPE` | 
|  HTML minification | Advanced > **Developer**, **Template Settings** > **Minify Html**  | `<SCOPE>__DEV__TEMPLATE__MINIFY_HTML`  | 
| JavaScript minification  | Advanced > **Developer**, **JavaScript Settings** > (several options)  | `<SCOPE>__DEV__JS__MINIFY_FILES` |  
| CSS minification  | Advanced > **Developer**, **CSS Settings** > **Merge CSS Files** and **Minify CSS Files**  | `<SCOPE>__DEV__CSS__MINIFY_FILES` | 
| Disable modules output |  Advanced > **Advanced** > **Disable Modules Output** | `CONFIG__DEV__ADVANCED__DISABLE_MODULES_OUTPUT__<MODULE NAME>`  | 

#### Examples {#cloud-system-vars-ex}
TBD

### Manage sensitive settings
The Web Interface enables you to specify values of sensitive configuration settings for staging and production systems.

TBD, cannot show this now because the Web Interface doesn't support it yet