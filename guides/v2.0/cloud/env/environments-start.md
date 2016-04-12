---
layout: default
group: cloud
subgroup: 08_env
title: Get started with an environment
menu_title: Get started with an environment
menu_order: 2
menu_node: 
github_link: cloud/env/environments-start.md
---

## Get started with an environment {#cloud-env-start}
This topic shows how to get started working on an environment:

*	[Connect to the environment using Secure Shell (SSH)](#env-start-ssh)
*	[Common commands](#env-start-comm)
*	[SSH tunneling](#env-start-tunn)
*	[Delete an environment](#env-delete)

## Connect to the environment using Secure Shell (SSH) {#env-start-ssh}
Before you can use SSH to connect to an environment, you must add your [SSH public key]({{ site.gdeurl }}cloud/before/before-workspace.html#cloud-ssh-cli-ssh) to your account.

You can then connect using SSH in any of the following ways:

### SSH from the command line
To SSH to an environment using the `magento-cloud` command line:

1.	Log in to the project:

		magento-cloud login
2.	List the project IDs:

		magento-cloud project:list
3.	List the environments in that project:

		magento-cloud environment:list -p <project ID>
3.	SSH to the environment:

		magento-cloud ssh -p <platform ID> -e <environment ID>

### SSH using the Web Interface
To SSH to an environment using the Web Interface:

1.	Log in to the Web Interface.
2.	Hover the mouse pointer over **Access Site** in the desired environment as the following figure shows.

	![Find the SSH URL using the Web Interface]({{ site.baseurl }}common/images/cloud_ssh-access.png){:width="500px"}

3.	Click the clipboard button to copy the URL to the clipboard. Enter the SSH URL in a terminal window.

## Common commands {#env-start-comm}
The following commands can be run from any directory. However, it's simpler to run them from a project directory. If so, you can omit the `-p <project ID>` parameter.

All commands are shown with required options only. Get help for any command by appending `--help`.

`magento-cloud login`
:	Log in to the project

`magento-cloud project:get <project ID> <directory> -e <environment ID>`
:	Clone a project to a directory. To clone the `master` environment, omit `-e <environment ID>`.

`magento-cloud environment:list -p <project ID>`
:	List the environments in the current project (that is, the project that corresponds to the directory in which you run the command).

`magento-cloud environment:branch <name> <parent branch>`
:	Create a new branch (that is, environment)

`magento-cloud environment:checkout <environment ID>`
:	Check out an existing environment

`magento-cloud environment:merge -p <project ID> -e <environment ID>`
:	Merge changes in this environment with its parent.

`magento-cloud environment:synchronize -p <project ID> -e <environment ID> {code|data}`
:	Sycnronize (that is, `git pull`) code and/or data from the parent to this environment

`magento-cloud variable:list`
:	List variables in this environment

`magento-cloud variable:set <name> <value>`
:	Set a value for an environment variable in this environment

## SSH tunneling {#env-start-tunn}
Use SSH tunneling to connect to a service in your development site to Magento Enterprise Cloud Edition
as if the service were local.

### List existing tunnels
You might want to check to see if any tunnels are already open using the following command:

	magento-cloud tunnel:list

### List available apps in your project
To build a tunnel, you must know the name of the app to which to tunnel. Use the following commands:

	cd <project directory>
	magento-cloud project:list
	magento-cloud apps

### Set up the SSH tunnel
Use the following command:

	magento-cloud tunnel:open -e <environment ID> --app <app name>
	
For example, to open a tunnel to the `sprint5` branch in a project with an app named `mymagento`, enter

	magento-cloud tunnel:open -e sprint5 --app mymagento

Messages similar to the following display:

	SSH tunnel opened on port 30003 to relationship: solr
	SSH tunnel opened on port 30004 to relationship: redis
	SSH tunnel opened on port 30005 to relationship: database
	Logs are written to: /home/magento_user/.magento/tunnels.log

	List tunnels with: platform tunnels
	View tunnel details with: platform tunnel:info
	Close tunnels with: platform tunnel:close

### Get tunnel information
To display information about your tunnel, enter:

	magento-cloud tunnel:info -e <environment ID>

### Connect to services {#cloud-ssh-tunnel-service}
Now you can connect to services as if they were running locally.

For example, to connect to the database, use the following command:

	mysql --host=127.0.0.1 --user='<database user name>' --pass='<user password>' --database='<name>' --port='<port>'

Details about the service display if you use the `tunnel:info` command.

## Delete an environment {#env-delete}
Before you delete an environment, make sure you don't need it anymore. You cannot recover a deleted environment later.

<div class="bs-callout bs-callout-info" id="info">
  <p>You cannot delete the <code>master</code> environment of any project.</p>
</div>

You must be a [project administrator]({{ site.gdeurl }}cloud/admin/admin-user-admin.html#cloud-role-project), [environment administrator]({{ site.gdeurl }}cloud/admin/admin-user-admin.html#cloud-role-env), or [account owner]({{ site.gdeurl }}cloud/admin/admin-user-admin.html#cloud-role-acct-owner) to perform this task.

To delete an environment using the command line:

1.	List the projects:

		magento-cloud project:list
2.	List the environments in the specified project:

		magento-cloud environment:list -p <project ID>
2.	Delete the environment:

		magento-cloud environment:delete -p <project ID> -e <environment name>
3.	You are required to confirm the deletion.
4.	*Optional*. Delete the branch:

		git push origin <branch name>

#### Related topics
*	[Manage your environments]({{ site.gdeurl }}cloud/env/environments.html)
*	[Overview of environment variables]({{ site.gdeurl }}cloud/env/environment-vars_over.html)
*	[Tutorial&mdash;Set Magento environment variables]({{ site.gdeurl }}cloud/env/environment-tutorial-set-mage-vars.html)