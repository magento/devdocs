---
layout: default
group: cloud
subgroup: 120_env
title: Magento Cloud CLI reference
menu_title: Magento Cloud CLI
menu_order: 10
menu_node:
version: 2.0
github_link: cloud/reference/cli-ref-topic.md
---

## CLI command reference {#cloud-cli-ref}
The Magento CLI is a cloud-specific verion of the Magento CLI we provide supporting commands including Magento management and Git interactions. This reference lists all available commands, and a list of commonly used commands, for Magento cloud.


<div class="bs-callout bs-callout-info" id="info" markdown="1">
You must install the Magento CLI to your local workspace to issue commands. For details, see:

* [Install Magento prerequisites]({{ page.baseurl }}cloud/before/before-workspace-magento-prereqs.html)
* [Enable SSH keys]({{ page.baseurl }}cloud/before/before-workspace-php.html)
</div>

The following Magento CLI commands can be run from any directory and run best from a project directory. When run from a project directory, you can omit the `-p <project ID>` parameter. These commands are meant to be used to manage Integration environments.

You may notice these commands are similar to Git commands. The `magento-cloud` Git commands directly connect with Magento Git, the Magento ECE project, with additional features. For example, when you push a Git branch, it is not activated until you access GitHub. The Magento CLI command includes activation.

All listed commands include only the required information and options. These commands may include additional options. To see all options and help, append `--help` with any `magento-cloud` command .

`git commit --allow-empty -m "redeploy" && git push <branch name>`
:  Push an empty commit to force a redeployment. Some actions, like adding a user for example, don't result in deployment.

`magento-cloud login`
:	Log in to the project

`magento-cloud project:get <project ID> <directory> -e <environment ID>`
:	Clone a project to a directory. To clone the `master` environment, omit `-e <environment ID>`.

`magento-cloud environment:list -p <project ID>`
:	List the environments in the current project (that is, the project that corresponds to the directory in which you run the command).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
`magento-cloud environment:list` displays environment hierarchies whereas `git branch` does not. If you have any nested environments, use `magento-cloud environment:list`.
</div>

`magento-cloud environment:branch <name> <parent branch>`
:	Create a new branch; the environment has both a name and an ID

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

### Display all commands

The `magento-cloud list` displays all available commands.

### Help for a command
You can preface or append any command with `help` to see more information on how to use that command.

	$ magento-cloud help domain:add
	Command: domain:add
	Description: Add a new domain to the project

	Usage:
	 domain:add [--project[="..."]] [--cert="..."] [--key="..."] [--chain="..."] [name]

	Arguments:
	 name                  The name of the domain

	Options:
	 --project             The project ID
	 --cert                The path to the certificate file for this domain.
	 --key                 The path to the private key file for the provided certificate.
	 --chain               The path to the certificate chain file or files for the provided certificate. (multiple values allowed)
 	 --help (-h)           Display this help message
	 --quiet (-q)          Do not output any message
	 --verbose (-v|vv|vvv) Increase the verbosity of messages
	 --version (-V)        Display this application version
	 --yes (-y)            Answer "yes" to all prompts
	 --no (-n)             Answer "no" to all prompts
	 --shell (-s)          Launch the shell

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
