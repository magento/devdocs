---
group: cloud
subgroup: 020_tech
title: Magento Cloud CLI reference
menu_title: Magento Cloud CLI
menu_order: 30
menu_node:
version: 2.0
github_link: cloud/reference/cli-ref-topic.md
functional_areas:
  - Cloud
redirect_from:
  - /guides/v2.0/cloud/cli-ref/cli-ref-topic.html
  - /guides/v2.1/cloud/cli-ref/cli-ref-topic.html
---

The Magento Cloud CLI is a cloud-specific version of the Magento CLI we provide supporting commands including Magento management and Git interactions. You can install and use these commands for all Starter environments and Pro Integration environments. You cannot use these commands on Pro plan Staging and Production environments.

This reference lists all available commands, and a list of commonly used commands, for {{site.data.var.ece}}. You can also use Magento CLI commands as needed, using `bin/magento` for entering commands.

You will [install]({{ page.baseurl }}/cloud/before/before-workspace-magento-prereqs.html) the Magento Cloud CLI on your local when setting up your local environment for development.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You must install the Magento Cloud CLI to your local workspace to issue commands. For details, see:

* [Install Magento prerequisites]({{ page.baseurl }}/cloud/before/before-workspace-magento-prereqs.html)
* [Enable SSH keys]({{ page.baseurl }}/cloud/before/before-workspace-ssh.html)
</div>

The following Magento Cloud CLI commands can be run from any directory and run best from a project directory. When run from a project directory, you can omit the `-p <project ID>` parameter. These commands are meant to be used to manage Integration environments.

You may notice these commands are similar to Git commands. The `magento-cloud` Git commands directly connect with Magento Git, the Magento ECE project, with additional features. For example, when you push a Git branch, it is not activated until you access GitHub. The Magento CLI command includes activation.

All listed commands include only the required information and options. These commands may include additional options. To see all options and help, append `--help` with any `magento-cloud` command .

`git commit --allow-empty -m "redeploy" && git push <branch name>`
:  Push an empty commit to force a redeployment. Some actions, like adding a user for example, don't result in deployment.

`magento-cloud login`
:	Log in to the project.

`magento-cloud project:get <project ID> <directory> -e <environment ID>`
:	Clone a project to a directory. To clone the `master` environment, omit `-e <environment ID>`.

`magento-cloud environment:list -p <project ID>`
:	List the environments in the current project (that is, the project that corresponds to the directory in which you run the command).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
`magento-cloud environment:list` displays environment hierarchies whereas `git branch` does not. If you have any nested environments, use `magento-cloud environment:list`.
</div>

`magento-cloud environment:branch <name> <parent branch>`
:	Create a new branch; the environment has both a name and an ID.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The environment _name_ is different from the environment _ID_ only if you use spaces or capital letters in the environment name. An environment ID consists of all lowercase letters, numbers, and allowed symbols. Capital letters in an environment name are converted to lowercase in the ID; spaces in an environment name are converted to dashes.

An environment name _cannot_ include characters reserved for your Linux shell or for regular expressions. Forbidden characters include curly braces (`{ }`), parentheses, asterisk (`*`), angle brackets (`< >`), ampersand (`&`), percent (`%`), and other characters.
</div>

`magento-cloud environment:checkout <environment ID>`
:	Check out an existing environment.

`magento-cloud environment:merge -p <project ID> -e <environment ID>`
:	Merge changes in this environment with its parent.

`magento-cloud environment:synchronize -p <project ID> -e <environment ID> {code|data}`
:	Synchronize (that is, `git pull`) code and/or data from the parent to this environment.

`magento-cloud variable:list`
:	List variables in this environment.

`magento-cloud variable:set <name> <value>`
:	Set a value for an environment variable in this environment.

## Display all commands {#all}

The `magento-cloud list` displays all available commands.

## Help for a command {#help}
You can preface or append any command with `help` or `--help` to see more information on how to use that command.

	$ magento-cloud domain:add --help
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

## List of Magento CLI commands {#cloud-cli-commands}
The following table provides an extensive list of Magento CLI commands for ECE accessed with `magento-cloud` To see a full list of commands, enter `magento-cloud list`. The listed commands are for Magento Cloud CLI version 1.11.1 and later.

The following table lists general commands.

<table>
	<thead>
				   <tr>
	             <th style="width: 250px;">Command</th>
	             <th>Description</th>
	         </tr>
	</thead>
			<tbody>
	 				<tr>
	 				<td>clear-cache</td>
	 				<td>Clears the cache for only the CLI.</td>
	 				</tr>
					<tr>
	 				<td>docs</td>
	 				<td>Provides a link for documentation. </td>
	 				</tr>
					<tr>
	 				<td>help</td>
	 				<td>Displays help information for the command.</td>
	 				</tr>
					<tr>
	 				<td>list</td>
	 				<td>Displays a list of all available commands in the Magento Cloud CLI.</td>
	 				</tr>
					<tr>
	 				<td>multi</td>
	 				<td>Executes a command on multiple projects entered as a command separated list for the <code>-p</code> parameter.</td>
	 				</tr>
					<tr>
	 				<td>web</td>
	 				<td>Opens a web UI based on the parameters you enter.</td>
	 				</tr>
			</tbody>
</table>


The following table lists all commands for interacting with your environments and projects.

<table>
			<thead>
	         <tr>
	             <th>Command</th>
	             <th>Description</th>
	         </tr>
			</thead>
	     <tbody>
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
					<td>auth-info</td>
					<td>Display your account information</td>
					</tr>
					<tr>
					<td>auth:login (login)</td>
					<td>Log in to the Magento Cloud CLI</td>
					</tr>
					<tr>
					<td>auth:logout (logout)</td>
					<td>Log out of Magento Cloud CLI</td>
					</tr>
					<tr>
					<td>certificate:add</td>
					<td>Adds an SSL certificate to the project</td>
					</tr>
					<tr>
					<td>certificate:delete</td>
					<td>Deletes a certificate from the project</td>
					</tr>
					<tr>
					<td>certificate:get</td>
					<td>View a certificate added to the project</td>
					</tr>
					<tr>
					<td>certificate:list (certificates)</td>
					<td>Lists project certificates</td>
					</tr>
					<tr>
					<tr>
	 				<td>clean</td>
	 				<td>Removes old project builds. When using local:build in a separate location from your code, use this command to clear those builds. By default, your latest five builds are not deleted.</td>
	 				</tr>
					<td>db:dump</td>
					<td>Creates a local dump of the remote database data. You can push the dump to another remote database. For example, you could pull data from the Production environment (products, catalogs, etc) and push it into Staging for testing.</td>
					</tr>
					<tr>
					<td>db:size</td>
					<td>Estimates the disk usage of the database.</td>
					</tr>
					<tr>
					<td>db:sql (sql)</td>
					<td>Opens an SQL console on the remote database. You can view tables and dump data from a local to the remote database. For example, you could push a data dump from Production into Staging for testing.</td>
					</tr>
	 				<tr>
	 				<td>domain:add</td>
	 				<td>Adds a new domain to the project</td>
	 				</tr>
					<tr>
					<td>domain:delete</td>
					<td>Deletes a domain from the project</td>
					</tr>
					<tr>
					<td>domain:get</td>
					<td>Shows detailed information for a domain including the project ID, hostname, and so on</td>
					</tr>
					<tr>
					<td>domain:list (domains)</td>
					<td>Gets a list of all domains</td>
					</tr>
					<tr>
					<td>domain:update</td>
					<td>Updates data for a domain</td>
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
	 				<td>environment:push (push)</td>
	 				<td>Pushes code to an environment</td>
	 				</tr>
	 				<tr>
	 				<td>environment:relationships (relationships)</td>
	 				<td>Displays an environment's relationships</td>
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
					<td>integration:get</td>
					<td>Shows details for an integration</td>
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
	 				<td><p>Builds the current project locally strictly to test the build without the full patch and commit process. This command allows you to build locally without patches just to check the build. We recommend you run this command separately in a different location. You should not commit the files from this build to Git.</p>
          <p>You should only use this command to <a href="{{ page.baseurl }}/cloud/live/live-sanity-check.html">test a local build</a>, not to build and deploy.</p></td>
	 				</tr>
	 				<tr>
	 				<td>local:dir (dir)</td>
	 				<td>Locates the root directory. Use the command with a subdirectory argument of <code>local</code>, <code>web</code>, or <code>shared</code> to locate those directories.</td>
	 				</tr>
					<tr>
	 				<td>project:get (get)</td>
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
					<td>project:set-remote</td>
					<td>Set the remote project for the current Git repository</td>
					</tr>
					<tr>
					<td>project:variable:delete</td>
					<td>Delete a variable from a project</td>
					</tr>
					<tr>
					<td>project:variable:get (project-variables, pvget)</td>
					<td>View variable(s) for a project</td>
					</tr>
					<tr>
					<td>project:variable:set (pvset)</td>
					<td>Set a variable for a project</td>
					</tr>
					<tr>
					<td>route:get</td>
					<td>View a resolved route</td>
					</tr>
					<tr>
					<td>route:list (routes)</td>
					<td>List all routes for an environment</td>
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
	 				<td>tunnel:close</td>
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
					<td>user:role</td>
					<td>View to change a user's role </td>
					</tr>
	 				<tr>
	 				<td>variable:delete</td>
	 				<td>Deletes an environment variable for a specific environment/Git branch</td>
	 				</tr>
	 				<tr>
	 				<td>variable:get (variables, vget)</td>
	 				<td>Views variable(s) for a specific environment/Git branch</td>
	 				</tr>
	 				<tr>
	 				<td>variable:set (vset)</td>
	 				<td>Sets an environment variable for a specific environment/Git branch</td>
	 				</tr>
	 		</tbody>
</table>

## Upgrade Magento Cloud CLI {#upgrade}
When you login to the Magento Cloud CLI, it checks for available updates. You can enter `y` for yes to upgrade. After upgrading, you can login and use the `magento-cloud list` command to see a list of all commands.