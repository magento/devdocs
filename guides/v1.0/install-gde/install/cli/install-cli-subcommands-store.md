---
layout: default
group: install 
subgroup: T_Command-line installation
title: Configure the store
menu_title: Configure the store
menu_node: 
menu_order: 20
github_link: install-gde/install/cli/cli/install-cli-subcommands-store.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-subcommands-store-prereq">Prerequisites</a>
*	<a href="#instgde-cli-storeconfig">Configure the store</a>


<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-subcommands-store-prereq">Prerequisites</h2>
Before you run this command, you must do all of the following *or* you must <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">install the Magento software</a>:

*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>

<h2 id="instgde-cli-storeconfig">Configure the store</h2>
Command usage:

	magento setup:store-config:set [--<parameter_name>=<value>, ...]

where the following table defines parameters and values.

<table>
	<col width="35%">
	<col width="55">
	<col width="10%">
	<tbody>
		<tr>
			<th>Name</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		<tr>
		<td><p>--base-url</p></td>
		<td><p>Base URL to use to access your Magento Admin and storefront in the format <code>http[s]://&lt;host or ip>/&lt;your Magento install dir>/</code>.</p>
		<p><strong>Note</strong>: The scheme (<code>http://</code> or <code>https://</code>) and a trailing slash are <em>both</em> required.</p>
		<p><code>&lt;your Magento install dir></code> is the docroot-relative path in which to install the Magento software. Depending on how you set up your web server and virtual hosts, the path might be <code>magento2</code> or it might be blank.</p>
		<p>To access Magento on localhost, you can use either <code>http://127.0.0.1/&lt;your Magento install dir>/</code> or <code>http://127.0.0.1/&lt;your Magento install dir>/</code>.</p>
		</td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--language</p></td>
		<td><p>Language code to use in the Admin and storefront. (If you have not done so already, you can view the list of language codes by entering <code>magento info:language:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--currency</p></td>
		<td><p>Default currency to use in the storefront. (If you have not done so already, you can view the list of currencies by entering <code>magento info:currency:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--timezone</p></td>
		<td><p>Default time zone to use in the Admin and storefront. (If you have not done so already, you can view the list of time zones by entering <code>magento info:timezone:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--use-rewrites</p></td>
		<td><p><code>1</code> means you use web server rewrites for generated links in the storefront and Admin.</p>
		<p><code>0</code> disables the use of web server rewrites. This is the default</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--use-secure</p></td>
		<td><p><code>1</code> enables the use of Secure Sockets Layer (SSL) in all URLs (both Admin and storefront). Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> disables the use of SSL with Magento. In this case, all other secure URL options are assumed to also be <code>0</code>. This is the default</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--base-url-secure</p></td>
		<td><p><code>1</code> means SSL is preferred in Magento URLs designed to use it (for example, the checkout page). Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> means SSL is not used. This is the default</p></td>
		<td><p>No</p></td>
	</tr>

	<tr>
		<td><p>--use-secure-admin</p></td>
		<td><p><code>1</code> means you use SSL to access the Magento Admin. Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> means you do not use SSL with the Admin. This is the default</p></td>
		<td><p>No</p></td>
	</tr>
	</tbody>
</table>

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-uninstall-mods.html">Uninstall modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-deployment.html">Create the deployment configuration</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-admin.html">Create a Magento administrator</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-backup.html">Back up the file system, media, and database</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-theme-uninstall.html">Uninstall themes</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-uninstall-langpk.html">Uninstall language packages</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>