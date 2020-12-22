---
group: configuration-guide
title: How Magento cache works with multiple Varnish instances
functional_areas:
  - Configuration
  - System
  - Setup
---
Magento supports multiple Varnish instances out of the box.

This topic shows the basics of configuring multiple Varnish instances with Magento.

## Configuration to purge multiple Varnish instances {#configure-multiple-varnish-magento-purge}

Magento purges Varnish hosts after you configure Varnish hosts using the [`magento setup:config:set`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html) command.

You should use the `--http-cache-hosts` parameter to specify a comma-separated list of Varnish hosts and listen ports. (Do not separate hosts with a space character.)

The parameter format must be `<hostname or ip>:<listen port>`, where you can omit `<listen port>` if it's port 80.

For example,

```bash
bin/magento setup:config:set --http-cache-hosts=192.0.2.100,192.0.2.155:6081
```

You can then purge all Varnish hosts when you refresh the Magento cache (also referred to as *cleaning* the cache) in the Magento Admin or using the command line.

To refresh the cache using the Admin, click **SYSTEM** > Tools > **Cache Management**, then click **Flush Magento Cache** at the top of the page. (You can also refresh individual cache types.)

To refresh the cache of multiple Varnish instances from cli use the [`magento cache:clean <type>`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean) command as the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
