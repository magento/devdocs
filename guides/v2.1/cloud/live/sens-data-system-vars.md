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

`<SCOPE>` can be either:

*	Global scope (that is, the global setting for _all_ scopes)

	Global scope variables have the following format:

	<pre class="no-copy">CONFIG__DEFAULT__&lt;SYSTEM__VARIABLE></pre>

*	A specific scope (that is, the setting affects only a specified store, store view, or website)

	For more information, see:

	*	[Scope values](#cloud-system-vars-scopes)
	*	[Magento User Guide](http://docs.magento.com/m2/ce/user_guide/configuration/scope.html){:target="_blank"}
	*	[Scope quick reference](http://docs.magento.com/m2/ce/user_guide/stores/store-scope-reference.html){:target="_blank"}

`<SYSTEM__VARIABLE>` is the variable you wish to specify. For more information, see [System values](#cloud-system-vars-sys).

<p id="cloud-system-vars-scopes"></p>{% collapsibleh2 Step 1: Find the scope value %}

This section discusses how you can optionally set system-specific configuration values per _scope_ (store, store view, or website). To set default global scope variables, start the variable name with `CONFIG__DEFAULT__`. For more information, see [System values](#cloud-system-vars-sys).

Scope values come from the `store`, `store_group`, and `store_website` tables.

*	The `stores` table specifies store view names and codes
*	The `store_group` table specifies store names and codes
*	The `store_website` table specifies website names and codes

How to read the tables:

*	`Path in Magento Admin` column

	*	Displays options in boldface and menu labels as plain text.
	*	Values before the comma are paths in the Admin navigation. Values after the comma are options in the right pane.
*	`Variable name` column is the name of the corresponding environment variable.

	You have the option of specifying system-specific values for these configuration parameters as environment variables if you wish.

	*	A variable name is always ALL CAPS
	*	Start a variable name with `CONFIG__` (note two underscore characters)
	*	Variable names are specified in different Magento database tables, as indicated in the following sections.

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

{% endcollapsibleh2 %}

<p id="cloud-system-vars-sys"></p>{% collapsibleh2 Step 2: Set system variables %}

This section discusses how to set global variables. 

*	To set values for the global scope (that is, all websites, stores, and store views), start the variable name with `CONFIG__DEFAULT__`. 

*	To set a value for a particular store, store view, or website, start the variable name as discussed in [Scope values](#cloud-system-vars-scopes).

[See some examples](#cloud-system-vars-ex)

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

{% endcollapsibleh2 %}

## Examples {#cloud-system-vars-ex}
TBD

### Manage sensitive settings
The Web Interface enables you to specify values of sensitive configuration settings for staging and production systems.

TBD, cannot show this now because the Web Interface doesn't support it yet