---
layout: default
group: cloud
subgroup: 40_live
title: Overview of configuration management 
menu_title: Overview of configuration management  
menu_order: 11
menu_node: 
level3_menu_node: level3child
level3_subgroup: sens-data
version: 2.1
github_link: cloud/live/sens-data-over.md
---

## Deployment and configuration in a nutshell
In version 2.1.4, Magento Enterprise Cloud Edition improves how you manage your configuration by providing:

*	A new method to manage sensitive data (such as payment gateway passwords).
*	An improved method to manage system-specific configuration data (such as store locale settings and file optimization settings) in a new configuration file, `app/etc/config.local.php`, which is in source control.

We help you protect sensitive data and make it easy to manage system-specific data as follows:

*	In your [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage) and [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod) systems, you manage sensitive data using environment variables. 

	You can change sensitive variables using the Magento Enterprise Cloud Edition [Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html). 
*	System-specific values related to static content deployment (for example, file optimization) are stored in a new configuration file, `app/etc/config.local.php`, which is managed in source control.

	Sensitive values are _not_ stored in `app/etc/config.local.php`.

	Managing `config.local.php` in source control means your settings for staging and production are always consistent. For example, you can disable file optimization in your [integration]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int) system but enable it in both staging and production. After initially setting up the configuration, you don't need to touch it again because it's in source control.

	(_File optimization_ means merging and minifying JavaScript and Cascading Style Sheets, and minifying HTML templates.)

	In addition, you can optionally manage `config.local.php` using scripting or automation tools. However, discussion of those tools is beyond the scope of this guide.

## Manage your configuration and protect sensitive data {#cloud-config-manage-sens-over}
Magento's store configuration is usually located in the database. This can make the configuration of multiple systems (such as staging and production) difficult.

Starting with version 2.1.4, we provide the following:

*	System-specific store configuration values are specified in a new configuration file, `app/etc/config.local.php`, which is in source control.

	Using `config.local.php`, you can, for example, disable file optimization in your integration system (where you are developing and testing) and enable file optimization in staging and production. 

	Settings in `config.local.php` cannot be changed in the Magento Admin. The next section provides an overview of how to change these settings.

*	Sensitive values, such as payment processor settings, are specified using environment variables. Viewing or changing environment variables is restricted to people who have at minimum a project reader role with [environment administrator]({{ page.baseurl }}cloud/admin/admin-user-admin.html#loud-role-env) privileges.

The following sections provide more detail.

### Manage system-specific settings {#cloud-config-specific-over}
System-specific settings refer to the configuration in the Magento Admin in **Stores** > Settings > **Configuration**. A list of settings can be found in [List of system-specific configuration settings](#cloud-config-specific-list).

#### How we set system-specific values
In each of your Magento Enterprise Cloud Edition systems (integration, staging, and production), you have the option of overriding certain configuration settings:

*	Some settings, such as the search engine and caching system, might be the same across all systems
*	Other settings, such as file optmization settings, can be unique to a particular system
*	Sensitive settings, such as payment processor settings, are set using environment variables

	<div class="bs-callout bs-callout-info" markdown="1">
	*	You can set _any_ value using environment variables but we emphasize sensitive values for obvious reasons. For a list of all variables you can set, see [List of system-specific configuration settings](#cloud-config-specific-list).
	*	We assume system-specific settings are the same in staging and production. Sensitive settings might be different.
	</div>

To enable you to set system-specific settings, we use the following override scheme.

![How configuration variable values are determined]({{ site.baseurl }}common/images/cloud_vars_flow-diagram.png){:width="550px"}

As the diagram shows, we get configuration values in the following order:

1.	From an environment variable.

	Environment variables, if they exist, override all other values.
2.	From `config.local.php`.

	Values in `config.local.php` override settings in the database.
3.	From the database.

If no value exists in any of those sources, we use either the default value or NULL.

For an example of how this works, see [Manage system-specific settings]({{ page.baseurl }}cloud/live/sens-data-initial.html).

#### Recommended procedure to manage your settings {#cloud-config-specific-recomm}
Managing store configuration is a complex task that's mostly up to you. What locales do you want to use? What custom themes do you need? Only you can determine the answers to those questions.

We can, however, help you manage those settings more easily. For example, suppose you want to change the default locale and also change a store's file optimization settings. Currently, the way you do that is to log in to the Admin on the integration server, save your settings, then (when testing is complete) migrate those settings to staging. 

What if someone changes a setting in the staging Admin? You'll have to go back and make the same change on integration; otherwise, next time you deploy to staging, the old settings are enabled.

Instead of doing that, we enable you to store your settings in `app/etc/config.local.php` which is managed in Git. (Because there's no Git user in integration, staging, or production, you must add the changes to `config.local.php` in your local system.) In addition, any setting in `config.local.php` is _not editable_ in the Admin. 

The following figure shows a high-level overview of this process.

![Overview of Cloud configuration management]({{ site.baseurl }}common/images/cloud_vars_simple.png){:width="650px"}

Our recommended method relies on the following important points:

*	Do all of your configuration in your integration system; it is your "source of truth" for configuration management.
*	Do everything in the `master` branch; that is, both in your local system and in your integration system.

**Step A**. Create and configure stores in your integration system.

**Step B**. Push `config.local.php` to your integration server's `master` branch.

The following procedure is required because there is no Git user on your integration server so you can't use Git commands there. Instead, you generate the configuration on the integration server and transfer it to your local machine where you can push it.

1.	Generate `config.local.php` on your integration server's `master` branch.
3.	Transfer `config.local.php` to your local system so you can add it to Git.
4.	Add `config.local.php` to Git (again, in the `master` branch).
5.	Push `config.local.php` to your integration server.

You generate `config.local.php` using the command `magento app:config:scd-dump`. This command populates `config.local.php` with the minimum values necessary for static content deployment. In version 2.1.4, we moved static file deployment from the deploy phase to the build phase to optimize deployment time.

<div class="bs-callout bs-callout-info" markdown="1">
There is a similar command, `magento app:config:dump`, that is not supported at this time. 
</div>

**Step C**. Magento Enterprise Cloud Edition automatically deploys the settings to your integration server.

**Step D**. To change settings:

1.	Delete `config.local.php` on your integration server.

	You must delete it to be able to change the same settings again. In other words, if you changed the store name, that setting isn't editable in the Admin. You must delete `config.local.php` on the integration server to be able to change the store name again.
2.	Make configuration changes in the Admin on the integration server.
3.	Repeat Step B.

After you've configured the integration server and tested it thoroughly, see [Overview of staging and production]({{ page.baseurl }}cloud/live/stage-prod-over.html) to start the process of migrating to a staging or production system.

<div class="bs-callout bs-callout-warning" markdown="1">
We assume system-specific settings are the same in staging and production. Only sensitive configuration values should change in those systems and you manage them using environment variables.

If you choose to use different system-specific settings in staging and production, you can manually edit `config.local.php`, but that is ` scope of this guide.
</div>

### List of system-specific configuration settings {#cloud-config-specific-list}
The tables in this section show the system-specific settings we include in `config.local.php` in version 2.1.4.

You can set variable values per scope (default, website, store, or store view). For example, you could set the default locale used in a particular website.

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

#### Scope values {#cloud-system-vars-scopes}
Setting variables per scope is optional; to set system-wide variables, see [System values](#cloud-system-vars-sys).

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

#### System values {#cloud-system-vars-sys}
This section discusses how to set system variables. To set values for the default scope (that is, all websites, stores, and store views), start the variable name with `CONFIG__DEFAULT__`. To set a value for a particular scope, start the variable name as discussed in [Scope values](#cloud-system-vars-scopes).

Examples are shown in TBD.

System values come from the `core_config_data` table.

| Description  | Path in Magento Admin (omitting **Stores** > **Configuration**) | Variable name | 
|--------------|--------------|----------------------|
| Store locale (Default Config scope)  | General > **General**, **Locale Options** > **Locale**  |  `CONFIG__DEFAULT__GENERAL__LOCALE__CODE` | 
| Static asset signing |  Advanced > **Developer**, **Static Files Settings** > **Static Files Signing** | `CONFIG__DEFAULT__DEV__STATIC__SIGN`  | 
| Server-side or client-side LESS compilation  | Advanced > **Developer**, **Frontend Developer Workflow** > **Workflow type** |  `CONFIG__DEFAULT__DEV__FRONT_END_DEVELOPMENT_WORKFLOW__TYPE` | 
|  HTML minification | Advanced > **Developer**, **Template Settings** > **Minify Html**  | `CONFIG__DEFAULT__DEV__TEMPLATE__MINIFY_HTML`  | 
| JavaScript minification  | Advanced > **Developer**, **JavaScript Settings** > (several options)  | `CONFIG__DEFAULT__DEV__JS__MINIFY_FILES` |  
| CSS minification  | Advanced > **Developer**, **CSS Settings** > **Merge CSS Files** and **Minify CSS Files**  | `CONFIG__DEFAULT__DEV__CSS__MINIFY_FILES` | 
| Disable modules output |  Advanced > **Advanced** > **Disable Modules Output** | `CONFIG__DEV__ADVANCED__DISABLE_MODULES_OUTPUT__<MODULE NAME>`  | 

### Manage sensitive settings
The Web Interface enables you to specify values of sensitive configuration settings for staging and production systems.

TBD, cannot show this now because the Web Interface doesn't support it yet