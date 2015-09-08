---
layout: default
group: config-guide
subgroup: Varnish
title: Use Varnish with Magento
menu_title: Use Varnish with Magento
menu_order: 500
menu_node: 
github_link: config-guide/varnish/config-use-varnish.md
---

#### Contents
*	<a href="#use-varnish-magento-purge">Varnish purging</a>
*	<a href="#use-varnish-cache">Refresh the Magento cache</a>
*	<a href="#use-varnish-magento-purge">Purge multiple Varnish hosts</a>

This topic discusses the basics of using Varnish as a web caching accelerator for Magento.

<h2 id="use-varnish-magento-purge">Varnish purging</h2>
According to <a href="https://www.varnish-cache.org/docs/trunk/users-guide/purging.html" target="_blank">Varnish documentation</a>, "A *purge* is what happens when you pick out an object from the cache and discard it along with its variants." A Varnish purge is very similar to a Magento cache clean command (or clicking **Flush Magento Cache** in the Magento Admin).

In fact, as discussed in this section, when you manually refresh the Magento cache, Varnish purges as well.

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

	You should refresh the cache and periodically delete everything in the `var/generation` and `var/di` directories. For information on refreshing the cache, see <a href="#use-varnish-cache">Refresh the Magento cache</a>.

<h2 id="use-varnish-cache">Refresh the Magento cache</h2>
You can refresh the Magento cache (also referred to as *cleaning* the cache) in the Magento Admin or using the command line.

To refresh the cache using the Admin, click **SYSTEM** > Tools > **Cache Management**, then click **Flush Magento Cache** at the top of the page. (You can also refresh individual cache types.)

To refresh the cache using the command line, you typically use the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean">`magento cache:clean [type]`</a> command as the Magento file system owner.

<h2 id="use-varnish-magento-purge">Purge multiple Varnish hosts</h2>
If you use more than one Varnish server to accelerate Magento web caching, you can purge all Varnish hosts in the same request using the <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.">`magento setup:config:set`</a> command. 

You can use the optional parameter `--http-cache-hosts` parameter to specify a comma-separated list of Varnish hosts and listen ports. (Do not separate hosts with a space character.)

The parameter format must be `<hostname or ip>:<listen port>`, where you can omit `<listen port>` if it's port 80. 

For example, 

	--http-cache-hosts=192.0.2.100,192.0.2.155:6081
