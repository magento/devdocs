---
group: config-guide
subgroup: 09_Varnish
title: How Magento cache works with multiple Varnish instances
menu_title: How Magento cache clearing works with multiple Varnish instances
menu_order: 82
menu_node:
version: 2.2
github_link: config-guide/varnish/use-multiple-varnish-cache.md
redirect_from:
  - guides/v2.0/config-guide/varnish/config-use-multiple-varnish.html
  - guides/v2.1/config-guide/varnish/config-use-multiple-varnish.html
functional_areas:
  - Configuration
  - System
  - Setup
---
Magento supports multiple Varnish instances out of the box.

This topic shows the basics of configuring multiple Varnish instances with Magento.

## Configuration to purge multiple Varnish instances {#configure-multiple-varnish-magento-purge}

Magento purges Varnish hosts after you configure Varnish hosts using the <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html">`magento setup:config:set`</a> command. 

You should use the `--http-cache-hosts` parameter to specify a comma-separated list of Varnish hosts and listen ports. (Do not separate hosts with a space character.)

The parameter format must be `<hostname or ip>:<listen port>`, where you can omit `<listen port>` if it's port 80. 

For example, 

	magento setup:config:set --http-cache-hosts=192.0.2.100,192.0.2.155:6081

You can then purge all Varnish hosts when you refresh the Magento cache (also referred to as *cleaning* the cache) in the Magento Admin or using the command line.

To refresh the cache using the Admin, click **SYSTEM** > Tools > **Cache Management**, then click **Flush Magento Cache** at the top of the page. (You can also refresh individual cache types.)

To refresh the cache of multiple Varnish instances from cli use the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean">`magento cache:clean [type]`</a> command as the <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.


