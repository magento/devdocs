---
layout: default
group: config-guide
subgroup: 999_prod
title: Sensitive and system-specific configuration paths reference
menu_title: Sensitive and system-specific configuration paths reference
menu_order: 301
menu_node: 
level3_menu_node: level3child
level3_subgroup: config-ref
version: 2.0
github_link: config-guide/prod/config-reference-sens.md
---

This topic lists configuration paths for system-specific and sensitive settings:

*	The [`magento app:config:dump` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-mgmt-export.html) writes system-specific settings to the system-specific configuration file, `app/etc/env.php`, which should _not_ be in source control.
*	The [`magento config:sensitive:set` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-mgmt-set.html) writes sensitive settings to `app/etc/env.php`.

	You can also set sensitive values using configuration variables as discussed in TBD.

For a list of other configuration paths, see:

*	[All configuration paths except payments]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
*	[Payment configuration paths]({{ page.baseurl }}config-guide/prod/config-reference-payment.html).

{% include config/config-reference_sensitive.md %}
 