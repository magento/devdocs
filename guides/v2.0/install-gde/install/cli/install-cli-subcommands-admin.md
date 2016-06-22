---
layout: default
group: install_cli 
subgroup: 05_Command-line installation
title: Create or unlock a Magento administrator account
menu_title: Create or unlock a Magento administrator account
menu_node: 
menu_order: 50
version: 2.0
github_link: install-gde/install/cli/install-cli-subcommands-admin.md
redirect_from: /guides/v2.0/install-gde/install/install-cli-subcommands-admin.html
---

  
<h4>Contents</h4>
See one of the following sections:

*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-admin-prereq">Prerequisites</a>
*	<a href="#instgde-cli-admin">Create an administrator</a>
*	<a href="#instgde-cli-admin-unlock">Unlock an administrator account</a>


<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-admin-prereq">Prerequisites</h2>
Before you can use this command, you must do all of the following:

*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-deployment.html">Create the deployment configuration</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-enable.html">Enable at minimum the Magento_Authorization and Magento_User modules</a>
*	Create the Magento database schema

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  		<p>The simplest way to create the database is to use the command <code>magento setup:upgrade</code>.</span>
	</div>

<h2 id="instgde-cli-admin">Create an administrator</h2>
Command usage:

	magento admin:user:create [--<parameter_name>=<value>, ...]

where the following table defines parameters and values.

<table>
	<col width="25%">
	<col width="65%">
	<col width="10%">
	<tbody>
		<tr>
			<th>Name</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		<tr>
		<td><p>--admin-firstname</p></td>
		<td><p>Magento administrator user's first name.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--admin-lastname</p></td>
		<td><p>Magento administrator user's last name.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--admin-email</p></td>
		<td><p>Magento administrator user's e-mail address.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--admin-user</p></td>
		<td><p>Magento administrator user name.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--admin-password</p></td>
		<td><p>Magento administrator user password.</p>
		<p>The password must be at least 7 characters in length and must include at least one alphabetic and at least one numeric character.</p>
		<p>We recommend a longer, more complex password. Enclose the entire password string in single quotes. For example, <code>--admin-password=''A0b9%t_3`g'</code></p></td>
		<td><p>Yes</p></td>
	</tr>

	</tbody>
</table>

<h2 id="instgde-cli-admin-unlock">Unlock an administrator account</h2>
Use this command to unlock the account of an administrator that was locked, typically because of multiple incorrect login attempts.

	magento admin:user:unlock {user name}

You must specify the administrator's user name. Example:

	magento admin:user:unlock admin
	The user account "admin" has been unlocked

If the account is either not unlocked or if there was a problem, the following message displays:

	The user account "admin" was not locked or could not be unlocked

Verify the user is an administrator, the user is active, and that the account is currently locked. To view the list of locked users in the Admin, log in as an administrator and click **System** > Permissions > **Locked Users**.

If the account doesn't exist, the following message displays:

	Couldn't find the user account "bob"

#### Related topics

*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall-mods.html">Uninstall modules</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-deployment.html">Create the deployment configuration</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-backup.html">Back up the file system, media, and database</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-theme-uninstall.html">Uninstall themes</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall-langpk.html">Uninstall language packages</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
