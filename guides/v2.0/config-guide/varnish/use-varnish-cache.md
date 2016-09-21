---
layout: default
group: config-guide
subgroup: 09_Varnish
title: How Magento cache clearing works with Varnish
menu_title: How Magento cache clearing works with Varnish
menu_order: 100
menu_node: 
version: 2.0
github_link: config-guide/varnish/use-varnish-cache.md
redirect_from: 
  - guides/v2.0/config-guide/varnish/config-use-varnish.html
  - guides/v2.1/config-guide/varnish/config-use-varnish.html
---

#### Contents
*	<a href="#use-varnish-magento-purge">Varnish purging</a>
*	<a href="#use-varnish-magento-purge">Configure Magento to purge Varnish</a>

This topic discusses the basics of using Varnish as a web caching accelerator for Magento.

<h2 id="use-varnish-magento-purge">Varnish purging</h2>
According to <a href="https://www.varnish-cache.org/docs/trunk/users-guide/purging.html" target="_blank">Varnish documentation</a>, "A *purge* is what happens when you pick out an object from the cache and discard it along with its variants." A Varnish purge is very similar to a Magento cache clean command (or clicking **Flush Magento Cache** in the Magento Admin).

In fact, as discussed in this section, when you clean, flush, or refresh the Magento cache, Varnish purges as well.

After you've installed and configured Varnish to work with Magento, the following actions can result in a Varnish purge:

*	Maintaining a website.

	For example, anything you do in the Admin in:

	*	**STORES** > **Configuration** > GENERAL > **General**
	*	**STORES** > **Configuration** > GENERAL > **Currency Setup**
	*	**STORES** > **Configuration** > GENERAL > **Store Email Addresses**

	When Magento detects such a change, a message displays informing you to refresh the cache. To do this, see <a href="#use-varnish-cache">Refresh the Magento cache</a>.

*	Maintaining a store (for example, adding or editing categories, prices, products, and promotional pricing rules).

	Varnish is purged automatically when you perform any of these tasks.

*	Maintaining source code. 

	You should refresh the cache and also periodically delete everything in the `var/generation` and `var/di` directories. For information on refreshing the cache, see the next section.

<h2 id="use-varnish-magento-purge">Configure Magento to purge Varnish</h2>
Magento purges Varnish hosts after you configure Varnish hosts using the <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-deployment.html">`magento setup:config:set`</a> command. 

You can use the optional parameter `--http-cache-hosts` parameter to specify a comma-separated list of Varnish hosts and listen ports. Configure all Varnish hosts, whether you have one or many. (Do not separate hosts with a space character.)

The parameter format must be `<hostname or ip>:<listen port>`, where you can omit `<listen port>` if it's port 80. 

For example, 

	magento setup:config:set --http-cache-hosts=192.0.2.100,192.0.2.155:6081

You can then purge Varnish hosts when you refresh the Magento cache (also referred to as *cleaning* the cache) in the Magento Admin or using the command line.

To refresh the cache using the Admin, click **SYSTEM** > Tools > **Cache Management**, then click **Flush Magento Cache** at the top of the page. (You can also refresh individual cache types.)

To refresh the cache using the command line, you typically use the <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean">`magento cache:clean [type]`</a> command as the <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.


