---
layout: default
group: cloud
subgroup: 120_env
title: Get started with an environment
menu_title: Get started with an environment
menu_order: 2
menu_node:
version: 2.0
github_link: cloud/env/environments-start.md
---

## Common Magento CLI commands {#env-start-comm}
The following Magento CLI commands can be run from any directory and run best from a project directory. When run from a project directory, you can omit the `-p <project ID>` parameter. These commands are meant to be used to manage integration environments. You may notice these commands are similar to Git commands. The `magento-cloud` versions directly connect with Magento Git, the Magento ECE project, and provide Git features.

All commands are shown with required options only. Get help for any `magento-cloud` command by appending `--help`.

`git commit --allow-empty -m "redeploy" && git push <branch name>`
:  Push an empty commit to force a redeployment. Some actions, like adding a user for example, don't result in deployment.

`magento-cloud login`
:	Log in to the project

`magento-cloud project:get <project ID> <directory> -e <environment ID>`
:	Clone a project to a directory. To clone the `master` environment, omit `-e <environment ID>`.

`magento-cloud environment:list -p <project ID>`
:	List the environments in the current project (that is, the project that corresponds to the directory in which you run the command).

`magento-cloud environment:branch <name> <parent branch>`
:	Create a new branch (that is, environment); the environment has both a name and an ID

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The environment _name_ is different from the environment _ID_ only if you use spaces or capital letters in the environment name. An environment ID consists of all lowercase letters, numbers, and allowed symbols. Capital letters in an environment name are converted to lowercase in the ID; spaces in an environment name are converted to dashes.

An environment name _cannot_ include characters reserved for your Linux shell or for regular expressions. Forbidden characters include curly braces (`{ }`), parentheses, asterisk (`*`), angle brackets (`< >`), ampersand (`&`), percent (`%`), and other characters.
</div>

`magento-cloud environment:checkout <environment ID>`
:	Check out an existing environment

`magento-cloud environment:merge -p <project ID> -e <environment ID>`
:	Merge changes in this environment with its parent.

`magento-cloud environment:synchronize -p <project ID> -e <environment ID> {code|data}`
:	Synchronize (that is, `git pull`) code and/or data from the parent to this environment

`magento-cloud variable:list`
:	List variables in this environment

`magento-cloud variable:set <name> <value>`
:	Set a value for an environment variable in this environment

### List of Magento CLI commands {#cloud-cli-commands}
The following table provides an extensive list of Magento CLI commands for ECE accessed with `magento-cloud` To see a full list of commands, enter `magento-cloud list`.

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

## SSH to an environment and run commands {#env-start-ssh}
This section discusses how to SSH to an environment so you can run commands as if you were logged in to the environment itself.

### Step 1: Get started

{% include cloud/cli-get-started.md %}

### Step 2: SSH to the environment
To SSH to the environment, see [SSH into your environment]({{ page.baseurl }}cloud/env/environments-ssh.html).

### Step 3: Enter commands
Now you can connect to services as if they were running locally.

{% include cloud/log-in-db.md %}

#### Related topics
*	[Manage your environments]({{page.baseurl}}cloud/env/environments.html)
*	[Overview of environment variables]({{page.baseurl}}cloud/env/environment-vars_over.html)
*	[Set Magento environment variables]({{page.baseurl}}cloud/howtos/environment-tutorial-set-mage-vars.html)
