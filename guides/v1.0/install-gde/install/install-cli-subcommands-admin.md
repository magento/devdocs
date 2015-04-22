---
layout: default
group: install 
subgroup: T_Command-line installation
title: Create a Magento administrator
menu_title: Create a Magento administrator
menu_node: 
menu_order: 19
github_link: install-gde/install/install-cli-subcommands-admin.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-admin">Create an administrator</a>


<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="instgde-cli-admin-prereq">Prerequisites</h2>
Before you can use this command, you must do all of the following:

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable some modules</a>
*	Create the Magento database schema

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  		<p>The simplest way to create the database is to use the command <code>php magento setup:upgrade</code>.</span>
	</div>

<h2 id="instgde-cli-admin">Create an administrator</h2>
Command usage:

	magento admin:user:create [--<parameter_name>=<value>, ...]



where the following table defines parameters and values.

<table>
	<tbody>
		<tr>
			<th>Name</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		<tr>
		<td><p>admin_firstname</p></td>
		<td><p>Magento administrator user's first name.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>admin_lastname</p></td>
		<td><p>Magento administrator user's last name.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>admin_email</p></td>
		<td><p>Magento administrator user's e-mail address.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>admin_user</p></td>
		<td><p>Magento administrator user name.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>admin_password</p></td>
		<td><p>Magento administrator user password.</p></td>
		<td><p>Yes</p></td>
	</tr>

	</tbody>
</table>

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration, config.php</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-db.html">Create the Magento database</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>