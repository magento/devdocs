---
group: configuration-guide
title: How Magento cache clearing works with Varnish
functional_areas:
  - Configuration
  - System
  - Setup
---

This topic discusses the basics of using Varnish as a web caching accelerator for Magento.

## Varnish purging {#use-varnish-magento-purge}

According to [Varnish documentation](https://www.varnish-cache.org/docs/trunk/users-guide/purging.html), "A *purge* is what happens when you pick out an object from the [cache](https://glossary.magento.com/cache) and discard it along with its variants." A Varnish purge is very similar to a Magento cache clean command (or clicking **Flush Magento Cache** in the Magento Admin).

In fact, as discussed in this section, when you clean, flush, or refresh the Magento cache, Varnish purges as well.

After you've installed and configured Varnish to work with Magento, the following actions can result in a Varnish purge:

*  Maintaining a [website](https://glossary.magento.com/website).

   For example, anything you do in the Admin in:

   *  **STORES** > **Settings** > **Configuration** > GENERAL > **General**
   *  **STORES** > **Settings** > **Configuration** > GENERAL > **Currency Setup**
   *  **STORES** > **Settings** > **Configuration** > GENERAL > **Store Email Addresses**

   When Magento detects such a change, a message displays informing you to refresh the cache. To do this, see [Refresh the Magento cache](#use-varnish-magento-purge).

*  Maintaining a store (for example, adding or editing categories, prices, products, and promotional pricing rules).

   Varnish is purged automatically when you perform any of these tasks.

*  Maintaining source code.

   You should refresh the cache and also periodically delete everything in the `generated/code` and `generated/metadata` directories. For information on refreshing the cache, see the next section.

## Configure Magento to purge Varnish

Magento purges Varnish hosts after you configure Varnish hosts using the [`magento setup:config:set`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html) command.

You can use the optional parameter `--http-cache-hosts` parameter to specify a comma-separated list of Varnish hosts and listen ports. Configure all Varnish hosts, whether you have one or many. (Do not separate hosts with a space character.)

The parameter format must be `<hostname or ip>:<listen port>`, where you can omit `<listen port>` if it's port 80.

For example,

```bash
bin/magento setup:config:set --http-cache-hosts=192.0.2.100,192.0.2.155:6081
```

You can then purge Varnish hosts when you refresh the Magento cache (also referred to as *cleaning* the cache) in the [Magento Admin](https://glossary.magento.com/magento-admin) or using the command line.

To refresh the cache using the Admin, click **SYSTEM** > Tools > **Cache Management**, then click **Flush Magento Cache** at the top of the page. (You can also refresh individual cache types.)

To refresh the cache using the command line, you typically use the [`magento cache:clean <type>`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean) command as the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
