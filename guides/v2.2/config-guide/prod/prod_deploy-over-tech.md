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

This topic discusses technical implementaiton details about split deployment in Magento 2.2 and later.

## Configuration management
To enable you to synchronize and maintain the configuration of your development and production systems, we use the following override scheme.

![How configuration variable values are determined]({{ site.baseurl }}common/images/cloud_vars_flow-diagram.png){:width="550px"}

As the diagram shows, we get configuration values in the following order:

1.	From an environment variable.

	Environment variables, if they exist, override all other values.
2.	From the shared configuration file, `config.php`.
3.	From the system-specific configuration file, `env.php`.

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
Any configuration settings in `config.php` or `env.php` are locked in the Magento Admin; that is, those settings cannot be changed in the Admin. The only way to change the settings is to change `config.php` or `env.php` using the commands discussed previously.

## Recommended workflow
The following diagram shows how we recommend you use split deployment to manage the configuration.

![Recommended split deployment workflow]({{ site.baseurl }}common/images/config_split-deploy_workflow.png){:width="700px"}

### Development system
On your development system, you make configuration changes in the Magento Admin and generate the shared configuration, `app/etc/config.php` and the system-specific configuration, `app/etc/env.php`. Check Magento code and the shared configuration into source control and push it to the build server.

On your development system:

1.  Set the configuration in the Magento Admin.

    You should also install extensions and customize Magento code on the development system.
2.  Use the `magento app:config:dump` command to write the configuration to the file system.

    *   `app/etc/config.php` is the shared configuration, which contains all settings _except_ sensitive and system-specific settings. This file should be in source control.

    *   `app/etc/env.php` is the system-specific configuration, which contains settings that are unique to a particular system (for example, host names and port numbers). This file should _not_ be in source control.
3.  Add your modified code and the shared configuration to source control.

### Build system
The build system compiles code and generates static view files for themes registered in Magento. It doesn't need a connection to the Magento database; it needs only the Magento codebase.

On your build system:

1.  Pull the shared configuration file from source control.
2.  Use the `magento setup:di:compile` command to compile code.
3.  Use the `magento setup:static-content:deploy -f` command to create static file view files.
4.  Check the updates into source control.

### Production system
On your production system (that is, your live store) you pull generated assets and code updates from source control and set system-specific and sensitive configuration settings using the command line or environment variables.

On your production system:

1.  Start maintenance mode.
2.  Pull code and configuration updates from source control.
3.  If you use Magento EE, stop queue workers.
4.  Use the `magento app:config:import` command to import configuration changes in the production system.
5.  To set system-specific settings, use either the `magento config:set` command or environment variables.
6.  To set sensitive settings, use either the `magento config:sensitive:set` command or environment variables.

## Configuration management examples
This section shows examples of managing the configuration so you can see how changes are made to `config.php` and `env.php`.

### Change the default locale
This section shows the change made to `config.php` when you change the default weight unit using the Magento Admin (**Stores** > Settings > **Configuration** > General > **General**> **Locale Options**).

After you make the change in the Admin, run `php bin/magento app:config:dump` to write the value to `config.php`. The value is written to the `general` array under `locale` as the following snippet from `config.php` shows:

``` php
      'general' =>
      array (
        'locale' =>
        array (
          'code' => 'en_US',
          'timezone' => 'America/Chicago',
          'weight_unit' => 'kgs',
        ),
```

### Several configuration changes
This section discusses making the following configuration changes:

*	Adding a website, store, and store view (**Stores** > **All Stores**)
*	Changing the Elasticsearch host and port (**Stores** > Settings > **Configuration** > Catalog > **Catalog** > **Catalog Search**)
*	Setting the PayPal API Username and API password (**Stores** > Settings > **Configuration** > Sales > **Payment Methods** > **PayPal** > **Required PayPal Settings**)

After you make the change in the Admin, run `php bin/magento app:config:dump`. This time, not all of your changes are written to `config.php`; in fact, only the website, store, and store view are written to that file as the following snippets show.

#### config.php

{% collapsible Show config.php snippets: %}

`websites` array:

``` php
      'new' =>
      array (
        'website_id' => '2',
        'code' => 'new',
        'name' => 'New website',
        'sort_order' => '0',
        'default_group_id' => '2',
        'is_default' => '0',
      ),
```

`groups` array:

``` php
      2 =>
      array (
        'group_id' => '2',
        'website_id' => '2',
        'code' => 'newstore',
        'name' => 'New store',
        'root_category_id' => '2',
        'default_store_id' => '2',
      ),
```

`stores` array:

``` php
     'newview' =>
      array (
        'store_id' => '2',
        'code' => 'newview',
        'website_id' => '2',
        'group_id' => '2',
        'name' => 'New store view',
        'sort_order' => '0',
        'is_active' => '1',
      ),
```
{% endcollapsible %}

#### env.php

The Elasticsearch changes are written to `app/etc/env.php` as follows:

{% collapsible Show env.php snippets: %}

TBD

{% endcollapsible %}

#### PayPal settings
The PayPal settings are written to neither file because the `magento app:config:dump` command does not write sensitive settings. You must set the PayPal settings on the production system using the following commands:

    php bin/magento config:sensitive:set paypal/wpp/api_username <username>
    php bin/magento config:sensitive:set paypal/wpp/api_password <password>

#### For more information
*   For a complete list of system-specific and sensitive settings and corresponding configuration paths, see [Sensitive and system-specific configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-sens.html).
*   [config.php reference]({{ page.baseurl }}config-guide/prod/config-reference-configphp.html) for detailed information about the shared configuration file
*   [env.php reference]({{ page.baseurl }}config-guide/prod/config-reference-envphp.html) for detailed information about the system-specific configuration file

## Other changes in the Magento Admin
We also changed the following in the Magento Admin in production mode:

*	You cannot enable or disable cache types in the Admin
*	You can change the Admin locale only to languages used by deployed themes
*	Developer settings are unavailable (**Stores** > Settings > **Configuration** > **Advanced** > **Developer**), including:

	*	Minify CSS, JavaScript, and HTML 
	*	Merge CSS and JavaScript
	*	Server-side or client-side LESS compilation
	*	Inline translations

## Prerequisite for your development, build, and production systems
File permissions and ownership must be consistent across development, build, and production systems. To make this work, you must either:

*   Set up the same Magento file system owner user name on all systems _and_ make sure the web server runs as the same user on all systems
*   Change permissions on each system as necessary using the following guidelines:

    *   Development and build: [Set pre-installation ownership and permissions (two users)]({{ page.baseurl }}install-gde/prereq/file-system-perms.html#perms-private)
    *   Production: [Magento ownership and permissions in development and production]({{ page.baseurl }}config-guide/prod/prod_file-sys-perms.html)

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
    If you choose this approach, you must set file system permissions and ownership every time you pull code from your build system (if the Magento file system owner or web server user are different on your build system).
    </div>

## cron installation and removal
In version 2.2 for the first time, we help you set up your Magento cron job by providing the [`magento cron:install` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-cron.html). This command sets up a Magento crontab as the user who runs the command.

We also enable you to remove the Magento crontab using the `magento cron:remove` command.

#### Next steps
*	[Set up your development systems]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-dev.html)
*	[Set up your build system]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-build.html)
*	[Set up your production system]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-prod.html)

