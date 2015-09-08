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
*	TBD
*	TBD
*	TBD

This topic discusses the basics of using Varnish as a web caching accelerator for Magento.

<h2 id="use-varnish-magento-purge">Varnish purging</h2>
According to Varnish documentation, "A *purge* is what happens when you pick out an object from the cache and discard it along with its variants." A Varnish purge is very similar to a Magento cache clean command (or clicking **Flush Magento Cache** in the Magento Admin).

After you've installed and configured Varnish to work with Magento, the following actions cause a Varnish purge:

*	Maintaining a website

	For example, anything you do in the Admin in:

	*	**STORES** > **Configuration** > GENERAL > **General**
	*	**STORES** > **Configuration** > GENERAL > **Currency Setup**
	*	**STORES** > **Configuration** > GENERAL > **Store Email Addresses**

	When Magento detects such a change, a message displays informing you to refresh the cache. To do this, see TBD.

*	Maintaining a store (for example, adding or editing categories, prices, products, and promotional pricing rules)

	Varnish is purged automatically when you perform any of these tasks.

*	Maintaining source code. 

	You should refresh the cache and periodically delete everything in the `var/generation` and `var/di` directories. For information on refreshing the cache, see TBD.

<h2 id="use-varnish-cache">Refresh the Magento cache</h2>
TBD



<h2 id="use-varnish-magento-purge">Purge multiple Varnish hosts</h2>
TBD
