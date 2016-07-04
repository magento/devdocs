---
layout: default
group: cloud
subgroup: 08_env
title: Get started with an environment
menu_title: Get started with an environment
menu_order: 2
menu_node: 
version: 2.0
github_link: cloud/env/environments-start.md
---

## Get started with an environment {#cloud-env-start}
This topic shows how to get started working on an environment:

*	[Connect to the environment using Secure Shell (SSH)](#env-start-ssh)
*	[Common commands](#env-start-comm)
*	[SSH to an environment](#env-start-ssh)

## Connect to the environment using Secure Shell (SSH) {#env-start-ssh}
Before you can use SSH to connect to an environment, you must add your [SSH public key]({{page.baseurl}}cloud/before/before-workspace.html#cloud-ssh-cli-ssh) to your account.

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
:	Create a new branch (that is, environment); the environment has both a name and an ID

<div class="bs-callout bs-callout-info" id="info">
   <p>The environment <em>name</em> is different from the environment <em>ID</em> only if you use spaces or capital letters in the environment name. An environment ID consists of all lowercase letters, numbers, and allowed symbols. Capital letters in an environment name are converted to lowercase in the ID; spaces in an environment name are converted to dashes.</p>
   <p>An environment name <em>cannot</em> include characters reserved for your Linux shell or for regular expressions. Forbidden characters include curly braces (<code>{ }</code>), parentheses, asterisk (<code>*</code>), angle brackets (<code>&lt; ></code>), ampersand (<code>&</code>), percent (<code>%</code>), and other characters.</p>
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


[SSH to an environment](#env-start-ssh)
This section discusses how to SSH to an environment so you can run commands as if you were logged in to the environment itself.

### Step 1: Get started

{% include cloud/cli-get-started.md %}

### Step 2: Find the SSH URL
To find the SSH URL, enter the following command:

	magento-cloud environment:ssh --pipe -e <environment ID>

### Step 3: SSH to the environment
To SSH to the environment, use the SSH URL you found in the preceding step:

	ssh <ssh url>

### Step 4: Enter commands
Now you can connect to services as if they were running locally.

For example, to connect to the database, use the following command:

	mysql --host=127.0.0.1 --user='<database user name>' --pass='<user password>' --database='<name>' --port='<port>'

You can find information like `<database user name>` in `<your Magento install dir>/app/etc/env.php`.


#### Related topics
*	[Manage your environments]({{page.baseurl}}cloud/env/environments.html)
*	[Overview of environment variables]({{page.baseurl}}cloud/env/environment-vars_over.html)
*	[Set Magento environment variables]({{page.baseurl}}cloud/howtos/environment-tutorial-set-mage-vars.html)
