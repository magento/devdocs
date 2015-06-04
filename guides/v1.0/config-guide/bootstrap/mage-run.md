---
layout: default
group: config-guide
subgroup: Bootstrap
title: MAGE_RUN_TYPE, MAGE_RUN_CODE
menu_title: MAGE_RUN_TYPE, MAGE_RUN_CODE
menu_order: 500
menu_node: 
github_link: config-guide/bootstrap/mage-run.md
---

#### Contents
*	<a href="#magerun-introduction">Introduction to multiple Magento stores and websites</a>
*	<a href="#magerun-conf">Configure Magento</a>
*	<a href="#magerun-set">Set values for MAGE_RUN_TYPE and MAGE_RUN_CODE</a>


<h2 id="magerun-introduction">Introduction to multiple Magento stores and websites</h2>
Use the `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` variables when you have multiple stores and websites using the same Magento installation. This allows multiple storefronts to share a common code base and Magento Admin, simplifying administration. 

In addition to sharing a codebase, stores can share customers, product catalogs, and configuration settings based on how you choose to configure your websites.

A typical use of `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` is to set up stores with different options in different domains. For example, you could have one set of categories and products on one domain and the other one will be on different language.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This topic discusses how to set the variables only. Details about deploying the Magento software in multiple domains is beyond the scope of this topic.</p></span>
</div>

<h2 id="magerun-conf">Configure Magento</h2>
This section discusses the minimum tasks required to use `MAGE_RUN_TYPE` and `MAGE_RUN_CODE`. For more details about websites and stores, see the Magento 2 Users Guide when it is available.

We use the following terms:

*	*Website* is the top-level container for sites, shipping methods, payment methods, and so on. To create completely separate sites that do not share cart, shipping methods, and so on,  create separate websites. 

*	*Store* is contained by a website. In turn, a store contains at least one *store view*. 

	Multiple Stores can share cart, user sessions, payment gateways, and so on, but they have separate catalog structures. 

	Store views change the way pages are presented, and are typically used to display a site different layouts or languages. 



<!-- https://www.properhost.com/support/kb/30/How-To-Setup-Magento-With-Multiple-Stores-And-Domains -->
<!-- http://inchoo.net/magento/how-to-set-multiple-stores-websites-with-one-magento-installation-on-different-domains/ -->




<h2 id="magerun-set">Set values for MAGE_RUN_TYPE and MAGE_RUN_CODE</h2>
We recommend you set values for `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` in an entry point script, rather than as system or web server environment variables. This is more flexible and makes more sense because you can use store-specific values in entry points.



<table>
	<tbody>
		<tr>
			<th>Mode name</th>
			<th>Description</th>
		</tr>
	<tr class="even">
		<td><a href="#mode-developer">developer</a></td>
		<td>Intended for development only, this mode disables static file caching, provides verbose logging, enhanced debugging, and results slowest performance (because of the preceding).</td>
	</tr>
	<tr class="odd">
		<td><a href="#mode-default">default</a></td>
		<td>As the name implies, Magento operates in this mode if no mode is explicitly set. Static file caching is enabled, exceptions are not displayed to the user; instead, exceptions are written to log files. Although you <em>can</em> run Magento in default mode in production, we don't recommend it.</td>
	</tr>
	<tr class="even">
		<td><a href="#mode-production">production</a></td>
		<td>Intended for deployment on a production system. Exceptions are not displayed to the user, exceptions are written to logs only, and static files are not cached. <!-- You can set the static file directory to read-only because files are read without going through the fallback mechanism. --></td>
	</tr>

</tbody>
</table>

