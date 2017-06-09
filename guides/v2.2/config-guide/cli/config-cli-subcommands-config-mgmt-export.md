---
layout: default
group: config-guide 
subgroup: 04_CLI
title: Export the configuration
menu_title: Export the configuration
menu_node: 
level3_menu_node: level3child
level3_subgroup: cli-config-mgmt
menu_order: 251
version: 2.2
github_link: config-guide/cli/config-cli-subcommands-config-mgmt-export.md
---

In the Magento 2.2 and later [split deployment model]({{ page.baseurl }}config-guide/deployment/pipeline/), you can maintain a consistent configuration across systems. After you configure settings in the Magento Admin on your development system, export those settings to configuration files using the following command:

    magento app:config:dump

As a result of the command execution, the following configuration files are updated:

*	`app/etc/config.php`, the shared configuration file. This file should be included in source control so it can be shared between development, build, and production systems.
*	`app/etc/env.php`, the system-specific configuration file. This file should _not_ be included in source control. 

	Instead, set system-specific settings on production using the [`magento config:set` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-mgmt-set.html).

<div class="bs-callout bs-callout-warning" id="warning" markdown="1">
*	The `magento app:config:dump` command does not output the values of sensitive configuration settings. To set sensitive settings in the production system, use the [`magento config:sensitive:set` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-mgmt-set.html)
*	Configuration values are specified as either sensitive or system-specific by referencing [`Magento\Config\Model\Config\TypePool`]({{ site.mage2200url }}app/code/Magento/Config/Model/Config/TypePool.php){:target="_blank"} in the module's `di.xml` file.

	For information about using `Config\TypePool` in custom code, see [PHP developer tasks for split deployment]({{ page.baseurl }}config-guide/prod/prod_deploy-prog.html).
</div>

#### Related topics
*	[config.php reference]({{ page.baseurl }}config-guide/prod/config-reference-configphp.html)
*	[env.php reference]({{ page.baseurl }}config-guide/prod/config-reference-envphp.html)