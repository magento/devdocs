---
layout: default
group: config-guide
subgroup: 999_prod
title: Deployment technical overview
menu_title: Deployment technical overview
menu_node: 
level3_menu_node: level3child
level3_subgroup: deploy-over
menu_order: 12
version: 2.2
github_link: config-guide/prod/prod_deploy-over-tech.md
---

This topic discusses technical details about implementing split deployment in Magento 2.2.

## Configuration management
To enable you to maintain the configuration of your development and production systems, we use the following override scheme.

NOTE: THIS DIAGRAM WILL CHANGE

![How configuration variable values are determined]({{ site.baseurl }}common/images/cloud_vars_flow-diagram.png){:width="550px"}

As the diagram shows, we get configuration values in the following order:

1.	From an environment variable.

	Environment variables, if they exist, override all other values.
2.	From `config.php`.
3.	From `env.php`.

	Values in `config.php` and `env.php` override settings in the database.
3.	From the database.

If no value exists in any of those sources, we use either the default value or NULL.

### Manage the shared configuration
The shared configuration is stored in `app/etc/config.php`, which should be in source control.

Set the shared configuration in the Magento Admin in your development (or Magento Enterprise Cloud Edition _integration_) system and write the configuration to `config.php` using the [`magento app:config:dump` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-export.html).

### Manage the system-specific configuration
The system-specific configuration is stored in `app/config/env.php`, which should _not_ be in source control.

Set the system-specific configuration in the Magento Admin in your development (or Cloud integration) system and write the configuration to `env.php` using the [`magento app:config:dump` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-export.html).

### Manage the sensitive configuration
The sensitive configuration is also stored in `app/etc/env.php`.

You can manage the sensitive configuration in any of the following ways:

*	Environment variables
*	Save the sensitive configuration in `env.php` on your production system using the [`magento config:set:sensitive` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config.html)

### Configuration settings locked in the Magento Admin
Any configuration settings in `config.php` or `env.php` are locked in the Magento Admin; that is, those settings cannot be changed in the Admin. The only way to change the settings is to change `config.php` or `env.php`.

### Configuration management examples
This section shows examples of managing the configuration so you can see how changes are made to `config.php` and `env.php`.

#### Change the default locale
TBD

#### Several changes
This section discusses making the following configuration changes:

*	Adding a website, store, and store view
*	Changing the Elasticsearch host and port
*	Setting the PayPal TBD

TBD

## Other changes in the Magento Admin
We also changed the following in the Magento Admin in production mode:

*	You cannot enable or disable cache types in the Admin
*	You can change the Admin locale only to languages used by deployed themes
*	Developer settings are unavailable (**Stores** > Settings > **Configuration** > **Advanced** > **Developer**), including:

	*	Minify CSS, JavaScript, and HTML 
	*	Merge CSS and JavaScript
	*	Server-side or client-side LESS compilation
	*	Inline translations

#### Next steps
*	[Set up your development systems]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-dev.html)
*	[Set up your build system]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-build.html)
*	[Set up your production system]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-prod.html)

