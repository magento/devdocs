---
layout: default
group: install_cli 
subgroup: 05_Command-line installation
title: Configure the store
menu_title: Configure the store
menu_node: 
menu_order: 20
version: 2.0
github_link: install-gde/install/cli/install-cli-subcommands-store.md
redirect_from:
  -  /guides/v1.0/install-gde/install/install-cli-subcommands-store.html
  -  /guides/v2.0/install-gde/install/install-cli-subcommands-store.html
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-subcommands-store-prereq">Prerequisites</a>
*	<a href="#instgde-cli-storeconfig">Configure the store</a>


<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-subcommands-store-prereq">Prerequisites</h2>
Before you run this command, you must do all of the following *or* you must <a href="{{page.baseurl}}install-gde/install/cli/install-cli-install.html">install the Magento software</a>:

*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>

<h2 id="instgde-cli-storeconfig">Configure the store</h2>
Command usage:

	magento setup:store-config:set [--<parameter_name>=<value>, ...]

where the following table defines parameters and values.

<table>
	<col width="30%">
	<col width="50%">
	<col width="20%">
	<tbody>
		<tr>
			<th>Name</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		<tr>
		<td>--base-url</td>
		<td>Base URL to use to access your Magento Admin and storefront in any of the following formats:
		<ul><li><code>http[s]://&lt;host or ip>/&lt;your Magento install dir>/</code>.
		<strong>Note</strong>: The scheme (<code>http://</code> or <code>https://</code>) and a trailing slash are <em>both</em> required.
		<code>&lt;your Magento install dir></code> is the docroot-relative path in which to install the Magento software. Depending on how you set up your web server and virtual hosts, the path might be <code>magento2</code> or it might be blank.
		To access Magento on localhost, you can use either <code>http://127.0.0.1/&lt;your Magento install dir>/</code> or <code>http://127.0.0.1/&lt;your Magento install dir>/</code>.</li>
		<li><code>&#123;&#123;base_url&#125;&#125;</code> which represents a base URL defined by a virtual host setting or by a virtualization environment like Docker. For example, if you set up a virtual host for Magento with the host name <code>magento.example.com</code>, you can install the Magento software with <code>--base-url=&#123;&#123;base_url&#125;&#125;</code> and access the Magento Admin with a URL like <code>http://magento.example.com/admin</code>.</li></ul>		</td>
		<td>No</td>
	</tr>
	<tr>
		<td>--language</td>
		<td><p>Language code to use in the Admin and storefront.</p>
			<p>(If you have not done so already, you can view the list of language codes by entering <code>magento info:language:list</code> from the <code>bin</code> directory.)</p></td>
		<td>No</td>
	</tr>
	<tr>
		<td>--currency</td>
		<td><p>Default currency to use in the storefront.</p> 
			<p>(If you have not done so already, you can view the list of currencies by entering <code>magento info:currency:list</code> from the <code>bin</code> directory.)</p></td>
		<td>No</td>
	</tr>
	<tr>
		<td>--timezone</td>
		<td>Default time zone to use in the Admin and storefront. (If you have not done so already, you can view the list of time zones by entering <code>magento info:timezone:list</code> from the <code>bin</code> directory.)</td>
		<td>No</td>
	</tr>
	<tr>
		<td>--use-rewrites</td>
		<td><p><code>1</code> means you use web server rewrites for generated links in the storefront and Admin.</p>
		<p><code>0</code> disables the use of web server rewrites. This is the default.</p></td>
		<td>No</td>
	</tr>
	<tr>
		<td>--use-secure</td>
		<td><p><code>1</code> enables the use of Secure Sockets Layer (SSL) in all URLs (both Admin and storefront). Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> disables the use of SSL with Magento. In this case, all other secure URL options are assumed to also be <code>0</code>. This is the default.</p></td>
		<td>No</td>
	</tr>
	<tr>
		<td>--base-url-secure</td>
		<td>Secure base URL to use to access your Magento Admin and storefront in the following format:
		<code>http[s]://&lt;host or ip>/&lt;your Magento install dir>/</code></td>
		<td>No</td>
	</tr>

	<tr>
		<td>--use-secure-admin</td>
		<td><p><code>1</code> means you use SSL to access the Magento Admin. Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> means you do not use SSL with the Admin. This is the default.</p></td>
		<td>No</td>
	</tr>
	</tbody>
</table>

#### Related topics

*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	[Remove or update sample data]({{ page.baseurl }}install-gde/install/cli/install-cli-sample-data-other.html)
*	[Enable or disable modules]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-enable.html)
*	[Display or change the Admin URI]({{ page.baseurl }}install-gde/install/cli/install-cli-adminurl.html)
*	[Uninstall modules]({{ page.baseurl }}install-gde/install/cli/install-cli-uninstall-mods.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	[Update the Magento database schema and data]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-admin.html">Create or unlock a Magento administrator</a>
*	[Back up and roll back the file system, media, and database]({{ page.baseurl }}install-gde/install/cli/install-cli-backup.html)
*	[Uninstall themes]({{ page.baseurl }}install-gde/install/cli/install-cli-theme-uninstall.html)
*	[Uninstall language packages]({{ page.baseurl }}install-gde/install/cli/install-cli-uninstall-langpk.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>