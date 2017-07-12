---
layout: default
group: cloud
subgroup: 080_setup
title: Step 2, Install the CLI
menu_title: Step 2, Install the CLI
menu_order: 54
menu_node:
level3_menu_node: level3child
level3_subgroup: workspace
version: 2.0
github_link: cloud/before/before-workspace-cli.md
---

## Install the command-line interface (CLI) {#cloud-ssh-cli-cli-install}
The Magento Enterprise Cloud Edition command-line interface (CLI) tool helps you manage your projects and code branches on Magento Enterprise Cloud Edition. For a list of available commands, see [List of Magento CLI commands](#cloud-cli-commands).

These instructions discuss installation using commands for a Unix environment. For Windows, you can use any CLI tool, for example [Cygwin](https://www.cygwin.com/){:target="_blank"}.

To install the Magento Enterprise Cloud Edition CLI:

1.	Log in to your local development machine, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).

2.	Change to a directory to which the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %} has write access (for example, the web server docroot).

3.	Enter the following command:

		curl -sS https://accounts.magento.cloud/cli/installer | php
4.	After the CLI downloads, an operating system-specific command displays.

	For example, on Ubuntu and CentOS, the command is similar to:

	<pre class="no-copy">source /home/magento_user/.bashrc</pre>

	For more information about the user shell profile, see [.bash_profile vs .bashrc](http://www.joshstaiger.org/archives/2005/07/bash_profile_vs.html){:target="_blank"}

	You can also add the `<magento user home dir>/.magento-cloud/bin` to the Magento user's `PATH`. 	If the user name is `magento_user`, the command is similar to the following:

		export PATH=$PATH:/home/magento_user/.magento-cloud/bin

	Consult operating system documentation for details.

5.	Verify the `magento-cloud` command is in your path by entering the following command:

		magento-cloud list

## List of Magento CLI commands {#cloud-cli-commands}
The following table provides a list of Magento CLI commands for ECE. To see a full list of commands, enter `magento-cloud list`.

<table>
    <tbody>
        <tr>
            <th>Variable name</th>
            <th>Description</th>
        </tr>
				<tr>
				<td>activity:list (activities)</td>
				<td>Gets a list of activities for an environment</td>
				</tr>
				<tr>
				<td>activities:log</td>
				<td>Displays the log for an environment activity</td>
				</tr>
				<tr>
				<td>app:config-get</td>
				<td>Views the configuration of an app</td>
				</tr>
				<tr>
				<td>app:list (apps)</td>
				<td>Gets a list of all apps in the local repository</td>
				</tr>
				<tr>
				<td>domain:add</td>
				<td>Adds a new domain to the project</td>
				</tr>
				<tr>
				<td>environment:activate</td>
				<td>Activates an environment</td>
				</tr>
				<tr>
				<td>environment:branch (branch)</td>
				<td>Branches an environment, or creates a Git branch</td>
				</tr>
				<tr>
				<td>environment:checkout (checkout)</td>
				<td>Checks out an environment, or Git branch</td>
				</tr>
				<tr>
				<td>environment:delete</td>
				<td>Deletes an environment</td>
				</tr>
				<tr>
				<td>environment:http-access (httpaccess)</td>
				<td>Updates HTTP access settings for an environment</td>
				</tr>
				<tr>
				<td>environment:info</td>
				<td>Reads or sets properties for an environment</td>
				</tr>
				<tr>
				<td>environment:list (environments)</td>
				<td>Gets a list of environments</td>
				</tr>
				<tr>
				<td>environment:logs (log)</td>
				<td>Reads an environment's logs</td>
				</tr>
				<tr>
				<td>environment:merge (merge)</td>
				<td>Merges an environment</td>
				</tr>
				<tr>
				<td>environment:relationships (relationships)</td>
				<td>Displays an environment's relationships</td>
				</tr>
				<tr>
				<td>environment:routes (routes)</td>
				<td>Lists an environment's routes</td>
				</tr>
				<tr>
				<td>environment:sql (sql)</td>
				<td>Runs SQL on the remote database</td>
				</tr>
				<tr>
				<td>environment:sql-dump (sql-dump)</td>
				<td>Creates a local dump of the remote database</td>
				</tr>
				<tr>
				<td>environment:ssh (ssh)</td>
				<td>Opens an SSH session to the current environment</td>
				</tr>
				<tr>
				<td>environment:synchronize (sync)</td>
				<td>Synchronizes an environment's code and or data from its parent</td>
				</tr>
				<tr>
				<td>environment:url (url)</td>
				<td>Gets the public URLs of an environment</td>
				</tr>
				<tr>
				<td>integration:add</td>
				<td>Add an integration to the project</td>
				</tr>
				<tr>
				<td>integration:delete</td>
				<td>Deletes an integration from a project</td>
				</tr>
				<tr>
				<td>integration:list (integrations)</td>
				<td>Views project integration(s)</td>
				</tr>
				<tr>
				<td>integration:update</td>
				<td>Updates an integration</td>
				</tr>
				<tr>
				<td>local:build (build)</td>
				<td>Builds the current project locally</td>
				</tr>
				<tr>
				<td>local:clean (clean)</td>
				<td>Removes old project builds</td>
				</tr>
				<tr>
				<td>project:delete</td>
				<td>Deletes a project</td>
				</tr>
				<tr>
				<td>prohect:get (get)</td>
				<td>Clones a project locally</td>
				</tr>
				<tr>
				<td>project:info</td>
				<td>Reads or sets properties for a project</td>
				</tr>
				<tr>
				<td>project:list (projects)</td>
				<td>Gets a list of all active projects</td>
				</tr>
				<tr>
				<td>self:install</td>
				<td>Installs or updates CLI configuration files</td>
				</tr>
				<tr>
				<td>self:update (self-update)</td>
				<td>Updates the CLI tot he latest version</td>
				</tr>
				<tr>
				<td>snapshot:create (backup)</td>
				<td>Makes a snapshot of an environment</td>
				</tr>
				<tr>
				<td>snapshot:list (snapshots)</td>
				<td>List available snapshots of an environment</td>
				</tr>
				<tr>
				<td>snapshot:restore</td>
				<td>Restores an environment snapshot</td>
				</tr>
				<tr>
				<td>ssh-key:add</td>
				<td>Adds a new SSH key</td>
				</tr>
				<tr>
				<td>ssh-key:delete</td>
				<td>Deletes an SSH key</td>
				</tr>
				<tr>
				<td>ssh-key:list (ssh-keys)</td>
				<td>Gets a list of SSH keys in your account</td>
				</tr>
				<tr>
				<td>tunnelclose</td>
				<td>Closes SSH tunnels</td>
				</tr>
				<tr>
				<td>tunnel:info</td>
				<td>Views relationships info for SSH tunnels</td>
				</tr>
				<tr>
				<td>tunnel:list (tunnels)</td>
				<td>Lists SSH tunnels</td>
				</tr>
				<tr>
				<td>tunnel:open</td>
				<td>Open SSH tunnels to an app's relationship</td>
				</tr>
				<tr>
				<td>user:add</td>
				<td>Adds a user to the project</td>
				</tr>
				<tr>
				<td>user:delete</td>
				<td>Deletes a user from the project</td>
				</tr>
				<tr>
				<td>user:list (users)</td>
				<td>Lists users for the project</td>
				</tr>
				<tr>
				<td>variable:delete</td>
				<td>Deletes an environment variable</td>
				</tr>
				<tr>
				<td>variable:get (variables, vget)</td>
				<td>Views variable(s) for an environment</td>
				</tr>
				<tr>
				<td>variable:set (vset)</td>
				<td>Sets an environment variable</td>
				</tr>
		</tbody>
</table>

#### Next step
[Step 3, Enable Secure Shell (SSH)]({{ page.baseurl }}cloud/before/before-workspace-ssh.html)
