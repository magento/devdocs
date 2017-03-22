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
TBD

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

### Settings not editable in the Magento Admin
TBD

### Configuration management examples
TBD

## Other changes to the Magento Admin
TBD

#### Next steps
*	[Set up your development systems]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-dev.html)
*	[Set up your build system]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-build.html)
*	[Set up your production system]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-prod.html)

