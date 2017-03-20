---
layout: default
group: config-guide
subgroup: 999_prod
title: Sensitive and system-specific configuration paths reference
menu_title: Sensitive and system-specific configuration paths reference
menu_order: 303
menu_node: 
level3_menu_node: level3child
level3_subgroup: config-ref
version: 2.0
github_link: config-guide/prod/config-reference-sens.md
---

This topic lists only configuration paths for sensitive settings. The [`magento app:config:dump --lock` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-export.html) writes these values to the system-specific configuration file, `app/etc/env.php`, which should _not_ be in source control. 

For a list of other configuration paths, see:

*	[All configuration paths except payments]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
*	[Payment configuration paths]({{ page.baseurl }}config-guide/prod/config-reference-payment.html).

To optionally override these values, see TBD.

{% include config/config-reference_sensitive.md %}
 