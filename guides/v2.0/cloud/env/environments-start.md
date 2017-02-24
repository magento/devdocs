---
layout: default
group: cloud
subgroup: 12_env
title: Get started with an environment
menu_title: Get started with an environment
menu_order: 2
menu_node: 
version: 2.0
github_link: cloud/env/environments-start.md
---


## Common commands {#env-start-comm}
The following commands can be run from any directory. However, it's simpler to run them from a project directory. If 
so, you can omit the `-p <project ID>` parameter. These commands are meant to be used to manage integration environments.

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

## SSH to an environment and run commands {#env-start-ssh}
This section discusses how to SSH to an environment so you can run commands as if you were logged in to the environment itself.

### Step 1: Get started

{% include cloud/cli-get-started.md %}

### Step 2: SSH to the environment
To SSH to the environment, see [SSH into your environment]({{ page.baseurl }}cloud/env/environments-ssh.html).

### Step 3: Enter commands
Now you can connect to services as if they were running locally.

For example, to connect to the database, use the following command:

Find the database login information:

	php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]))->database);'

Sample output follows:

	Array
	(
   		[0] => stdClass Object
       	(
           	[username] => user
           	[password] =>
           	[ip] => 192.0.2.60
           	[host] => database.internal
           	[query] => stdClass Object
               	(
             	     	[is_master] => 1
              		)

           	[path] => main
           	[scheme] => mysql
           	[port] => 3306
       	)
	)

Use the following command to connect to the database:

	mysql --host=<host> --user='<database user name>' --pass='<user password>' --database='<name>' --port='<port>'

Using the preceding example, the command is:

	mysql --host=database.internal --user='user' --pass='' --database='main' --port='3306'

#### Related topics
*	[Manage your environments]({{page.baseurl}}cloud/env/environments.html)
*	[Overview of environment variables]({{page.baseurl}}cloud/env/environment-vars_over.html)
*	[Set Magento environment variables]({{page.baseurl}}cloud/howtos/environment-tutorial-set-mage-vars.html)
