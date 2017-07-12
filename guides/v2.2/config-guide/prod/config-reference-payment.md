---
layout: default
group: config-guide
subgroup: 07_conf
title: Payment configuration paths reference
menu_title: Payment configuration paths reference
menu_order: 5200
menu_node:
level3_menu_node: level3child
level3_subgroup: config-ref
version: 2.2
github_link: config-guide/prod/config-reference-payment.md
---

This topic lists payment-related configuration paths that are neither sensitive nor system-specific. The [`magento app:config:dump` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-mgmt-export.html) writes these values to the shared configuration file, `app/etc/config.php`, which should be in source control.

For a list of other configuration paths, see:

*	[All configuration paths except payments]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
*	[Sensitive and system-specific configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-sens.html)

To optionally override any configuration settings or to set sensitive settings, see [Use environment variables to override configuration settings]({{ page.baseurl }}config-guide/prod/config-reference-var-name.html).



{% include config/config-reference_payment.md %}
