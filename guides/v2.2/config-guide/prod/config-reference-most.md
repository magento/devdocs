---
layout: default
group: config-guide
subgroup: 999_prod
title: Other configuration paths reference
menu_title: Other configuration paths reference
menu_order: 301
menu_node: 
level3_menu_node: level3child
level3_subgroup: config-ref
version: 2.0
github_link: config-guide/prod/config-reference-most.md
---
 
This topic lists all configuration paths _except_ payment variables, sensitive values, and system-specific values. The [`magento app:config:dump` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-export.html) writes these values to the shared configuration file, `app/etc/config.php`, which should be in source control.

For those configuration paths, see:

*	[Payment configuration paths]({{ page.baseurl }}config-guide/prod/config-reference-payment.html)
*	[Sensitive and system-specific configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-sens.html)

To optionally override these settings in a particular system, see TBD.

{% include config/config-reference.md %}

