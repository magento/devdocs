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
This section discusses the minimum tasks required to use `MAGE_RUN_TYPE` and `MAGE_RUN_CODE`. For more details, see the Magento 2 Users Guide when it is available.



<h2 id="magerun-set">Set values for MAGE_RUN_TYPE and MAGE_RUN_CODE</h2>
We recommend you set values for `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` in an entry point script, rather than using them as system or web server environment variables. This is more flexible and makes more sense because you can use store-specific values that are used depending on the entry point.



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

