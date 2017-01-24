---
layout: default
group: cloud
subgroup: 40_live
title: System settings reference
menu_title: System settings reference
menu_order: 12
menu_node: 
level3_menu_node: level3child
level3_subgroup: sens-data
version: 2.1
github_link: cloud/live/sens-data-system-vars.md
---

This topic discusses how to find and set the system settings we include in `config.local.php` in version 2.1.4. You can set variable values per scope (global, website, or store view). For example, you could set the locale used in a particular website.

The general format of system variables follows:

<pre class="no-copy">&lt;SCOPE>__&lt;SYSTEM__VARIABLE></pre>

`<SCOPE>` can be either:

*	Global scope (that is, the global setting for _all_ scopes)

	Global scope variables have the following format:

	<pre class="no-copy">CONFIG__DEFAULT__&lt;SYSTEM__VARIABLE></pre>

*	A specific scope (that is, the setting affects only a specified store view or website)

	Store view scope variables, for example, have the following format:

	<pre class="no-copy">CONFIG__STORES__ &lt;STORE_VIEW_CODE>__&lt;SYSTEM__VARIABLE></pre>

	For more information about scopes, see:

	*	[Step 1: Find the scope value](#cloud-system-vars-scopes)
	*	[Magento User Guide](http://docs.magento.com/m2/ce/user_guide/configuration/scope.html){:target="_blank"}
	*	[Scope quick reference](http://docs.magento.com/m2/ce/user_guide/stores/store-scope-reference.html){:target="_blank"}

`<SYSTEM__VARIABLE__NAME>` is the variable you wish to specify. For more information, see [Step 2: Set system variables](#cloud-system-vars-sys).

<p id="cloud-system-vars-scopes"></p>{% collapsibleh2 Step 1: Find the website or store view scope value %}

This section discusses how you can find and set system configuration values per _scope_ (store view or website). To set global scope variables, see [Step 2:  Set global, website, or store view variables](#cloud-system-vars-sys).

Scope values come from the `store`, `store_group`, and `store_website` tables.

*	The `store` table specifies store view names and codes
*	The `store_website` table specifies website names and codes

You can also find the code values using the Magento Admin.

How to read the table:

*	`Path in Magento Admin` column

	Values before the comma are paths in the Admin navigation. Values after the comma are options in the right pane.
*	`Variable name` column is the name of the corresponding environment variable.

	You have the option of specifying system values for these configuration parameters as environment variables if you wish.

	*	The entire variable name is always ALL CAPS
	*	Start a variable name with `CONFIG__` (note two underscore characters)
	*	You can find the `<STORE_VIEW_CODE>` or `<WEBSITE_CODE>` portion of a variable name in either the Magento Admin or the Magento database, as indicated in the following sections.
	*	You can find `<SYSTEM__VARIABLE__NAME>` as discussed in [Step 2:  Set global, website, or store view variables](#cloud-system-vars-sys).

### Find a website or store view scope in the Magento Admin
The following table summarizes how to find website or store view value in the Admin. 

| Description  | Path in Magento Admin | Variable name | 
|--------------|--------------|----------------------|
| Create, edit, delete store views | **Stores** > **All Stores** | `CONFIG__STORES__<STORE_VIEW_CODE>__<SYSTEM__VARIABLE__NAME>`  |
| Create, edit, delete websites | **Stores** > **All Stores**  | `CONFIG__WEBSITE__<WEBSITE_CODE>__<SYSTEM__VARIABLE__NAME>` | 

For example, to find a website or store view scope value in the Admin:

1.	Log in to the Magento Admin as a user authorized to view websites.
2.	Click **Stores** > **All Stores**.
3.	Click the name of a website or store view.

	The right figure is displayed similar to the following.

	![Find a website code]({{ site.baseurl }}common/images/cloud_vars_website-code.png){:width="600px"}
3.	The scope name is displayed in the **Code** field.
4.	Continue with [Step 2:  Set global, website, or store view variables](#cloud-system-vars-sys).

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

{% endcollapsibleh2 %}

<p id="cloud-system-vars-sys"></p>{% collapsibleh2 Step 2: Set global, website, or store view variables %}

This section discusses how to set system variables. 

*	To set values for the global scope (that is, all websites, stores, and store views), start the variable name with `CONFIG__DEFAULT__`. 

*	To set a value for a particular store view or website, start the variable name as discussed in [Step 1: Find the scope value](#cloud-system-vars-scopes):

	*	`CONFIG__WEBSITES`
	*	`CONFIG__STORES`

[See some examples](#cloud-system-vars-ex)

Step 2: System variables from the `core_config_data` table.


| Description  | Path in Magento Admin (omitting **Stores** > **Configuration**) | Variable name | 
|--------------|--------------|----------------------|
| Store locale  | General > **General**, **Locale Options** > **Locale**  |  `<SCOPE>__GENERAL__LOCALE__CODE` | 
| Static asset signing |  Advanced > **Developer**, **Static Files Settings** > **Static Files Signing** | `<SCOPE>__DEV__STATIC__SIGN`  | 
| Server-side or client-side LESS compilation  | Advanced > **Developer**, **Frontend Developer Workflow** > **Workflow type** |  `<SCOPE>__DEV__FRONT_END_DEVELOPMENT_WORKFLOW__TYPE` | 
|  HTML minification | Advanced > **Developer**, **Template Settings** > **Minify Html**  | `<SCOPE>__DEV__TEMPLATE__MINIFY_HTML`  | 
| JavaScript minification  | Advanced > **Developer**, **JavaScript Settings** > (several options)  | `<SCOPE>__DEV__JS__MINIFY_FILES` |  
| CSS minification  | Advanced > **Developer**, **CSS Settings** > **Merge CSS Files** and **Minify CSS Files**  | `<SCOPE>__DEV__CSS__MINIFY_FILES` | 
| Disable modules output |  Advanced > **Advanced** > **Disable Modules Output** | `<SCOPE>__DEV__ADVANCED__DISABLE_MODULES_OUTPUT__<MODULE NAME>`  | 

{% endcollapsibleh2 %}

## Examples {#cloud-system-vars-ex}
This section shows how to find values of some sample variables.

### Global HTML minification
To find the variable name for global HTML minification:

1.	Determine the scope.

	It's the global scope so the variable name starts with `CONFIG__DEFAULT__`
2.	According to the [table in Step 2](#cloud-system-vars-sys), the rest of the variable name is `DEV__TEMPLATE__MINIFY_HTML`.

Result: The variable name is `CONFIG__DEFAULT__DEV__TEMPLATE__MINIFY_HTML`

### Store view HTML minification
To find the variable name for HTML minification for a store view:

1.	Determine the scope.

	Find the scope in the [database](#cloud-system-vars-scopes). (You can also find the value in the Admin as shown in the the [table in Step 2](#cloud-system-vars-sys).

	For example, the scope might be `CONFIG__STORES__MYVIEW`.
2.	According to the the [table in Step 2](#cloud-system-vars-sys), the rest of the variable name is `DEV__TEMPLATE__MINIFY_HTML`.

Result: The variable name is `CONFIG__STORES__MYVIEW__DEV__TEMPLATE__MINIFY_HTML`

### Global locale code
TBD

### Website locale code

**Global HTML template minification**

	CONFIG__DEFAULT__DEV__TEMPLATE__MINIFY_HTML

**HTML minification for a store view**

	CONFIG__STORES__FRENCH__DEV__TEMPLATE__MINIFY_HTML

**Global locale code**

	CONFIG__DEFAULT__GENERAL__LOCALE__CODE

**Locale code for a website**

	CONFIG__WEBSITES__BASE__DEV__TEMPLATE__MINIFY_HTML

#### Next step
[Manage system settings]({{ page.baseurl }}cloud/live/sens-data-initial.html)

#### Related information
*	[Magento User Guide discussion of scope](http://docs.magento.com/m2/ce/user_guide/configuration/scope.html){:target="_blank"}
*	[Scope quick reference](http://docs.magento.com/m2/ce/user_guide/stores/store-scope-reference.html){:target="_blank"}