---
layout: default
group: cloud
subgroup: 080_setup
title: Clone the project
menu_title: Clone the project
menu_order: 30
menu_node:
version: 2.0
github_link: cloud/before/before-setup-env-2_clone.md
---

#### Previous step:
[Set up the Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html)

The Magento Commerce project is a Git repository of Magento code with a master origin. Develop your custom code and add extensions in one of eight active Git branches in your local. Each active environment includes a database and services to fully access the Magento site and store in the Integration environment.

To begin, you need to clone the `master` environment to your local and add the Magento Admin URL, username, and password (to include with all branches). If you are new to Git workflow, processes, and commands, see Git [documentation](https://git-scm.com/documentation).

The commands in these instructions use Magento CLI commands and Git commands to access the `master` environment. For a full list of Magento Cloud CLI commands, enter `magento-cloud list` or see the [Magento CLI reference]({{ page.baseurl }}cloud/reference/cli-ref-topic.html).

## Clone the project master Branch {#clonemaster}

To clone the project's `master` environment to your local:

1.	Log in to your local development machine with a [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html) account.

2.  Change to the web server or virtual host docroot.

3.	Log in to the Magento Cloud CLI:

		magento-cloud login
4.	List your projects:

		magento-cloud project:list
5.	Clone a project.

		magento-cloud project:get <project ID>

	When prompted for a directory name, enter `magento2`.
6.	Change to the project directory: `cd magento2`.
7.	List environments in the project:

		magento-cloud environment:list

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	`magento-cloud environment:list` displays environment hierarchies whereas `git branch` does not. If you have any nested environments, use `magento-cloud environment:list`.
	</div>

8.	Fetch origin branches:

		git fetch origin
9.	Pull updated code:

		git pull origin <environment ID>

## Change the Magento Admin URL, user name, and password on master {#setvariables}
Change the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} parameters for security reasons prior to branching from master. If you change the variables in the `master` branch, you only have to make these changes once. All branches inherit the variables from `master`.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Make note of any changes you make. You may need them when installing Magento with the command line and when verifying the installation.
</div>

If you're not sure whether or not the master branch has been configured, enter the following command:

		magento-cloud variable:get -e <environment ID>

To set Admin variables, you will use this command format:

		magento-cloud variable:set <name> <value> -e <environment ID>

<div class="bs-callout bs-callout-warning" markdown="1">
Everytime you add or modify a variable using the web interface or the CLI, the branch will redeploy automatically.
</div>

To set variables (with example values used):

1.  To set the administrator's user name to `meister_x2U8` in the `master` environment, enter:

		magento-cloud variable:set ADMIN_USERNAME meister_x2U8 -e master
2.  Wait for the project to redeploy.
3.  To set the administrator's password to `admin_A456`, enter:

		magento-cloud variable:set ADMIN_PASSWORD admin_A456 -e master
4.  Wait for the project to redeploy.
5.  To set the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} URI to `magento_A8v10`, enter:

		magento-cloud variable:set ADMIN_URL magento_A8v10 -e master
6.  Wait for the project to redeploy.
7.  Log in to the Magento Admin using the values you just changed.

	The simplest way to do that is to use the environment routes that display when you redeploy the `master` branch. The following example uses these values:

	<pre class="no-copy">Waiting for the activity ksvciptnzxfto (John Smith added variable ADMIN_URL):

		Building application 'mymagento' (runtime type: php:7.0, tree: 07263ba)
		Slug already built for this tree id, skipping.

		Re-deploying environment k4wtvm7ogzr5s-master.
		Environment configuration:

			mymagento (type: php:7.0, size: S, disk: 2048)
			mysql (type: mysql:10.0, size: S, disk: 2048)
			redis (type: redis:3.0, size: S)
			solr (type: solr:4.10, size: S, disk: 1024)

		Environment routes:
			http://master-k4wtvm7ogzr5s.us.magentosite.cloud/ is served by application `mymagento`
			https://master-k4wtvm7ogzr5s.us.magentosite.cloud/ is served by application `mymagento`</pre>

	In the preceding example, go to `http://master-k4wtvm7ogzr5s.us.magentosite.cloud/magento_A8v10` and log in using the user name `meister_x2U8` and password `admin_A456`

8.	After the project redeploys, take a snapshot of the master branch:

			magento-cloud snapshot:create -e master

#### Next step:
[Set up authentication keys]({{ page.baseurl }}cloud/before/before-setup-env-keys.html)
