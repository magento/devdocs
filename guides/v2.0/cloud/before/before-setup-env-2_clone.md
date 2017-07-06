---
layout: default
group: cloud
subgroup: 080_setup
title: Step 2, Clone the project
menu_title: Step 2, Clone the project
menu_order: 162
menu_node: 
level3_menu_node: level3child
level3_subgroup: setupenv
version: 2.0
github_link: cloud/before/before-setup-env-2_clone.md
---

{::options syntax_highlighter="rouge" /}

To clone the project's `master` environment:

1.	Log in to your local development machine as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.  Change to the web server or virtual host docroot.
2.	Log in to your project:

		magento-cloud login
3.	List your projects:

		magento-cloud project:list
4.	Clone a project.

		magento-cloud project:get <project ID>

	When prompted for a directory name, enter `magento2`.
4.	Change to the project directory.

	 For example, `cd magento2`
4.	List environments in the project:

		magento-cloud environment:list

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	`magento-cloud environment:list` displays environment hierarchies whereas `git branch` displays does not. If you have any nested environments, use `magento-cloud environment:list`.
	</div>

5.	Fetch origin branches:

		git fetch magento
6.	Pull updated code:

		git pull magento <environment ID>

## Change the Magento Admin URL, user name, and password
This section discusses how to change {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} parameters for security reasons. If you change the variables in the `master` branch, you have to do it only once because other environments inherit the variables from `master`.

If your master branch is already configured, skip this section and continue with [Step 3: Clone or branch an environment](#setenv-new-env).

If you're not sure whether or not the master branch has been configured, enter the following command:

		magento-cloud variable:get -e <environment ID>

1.  Set the variable values.

		magento-cloud variable:set <name> <value> -e <environment ID>
2.  To set the administrator's user name to `meister_x2U8` in the `master` environment, enter:

		magento-cloud variable:set ADMIN_USERNAME meister_x2U8 -e master
3.  Wait for the project to redeploy.
2.  To set the administrator's password to `admin_A456`, enter:

		magento-cloud variable:set ADMIN_PASSWORD admin_A456 -e master
6.  Wait while the project redeploys.
7.  To set the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} URI to `magento_A8v10`, enter:

		magento-cloud variable:set ADMIN_URL magento_A8v10 -e master
6.  Wait while the project redeploys.
7.  Log in to the Magento Admin using the values you just changed.

	The simplest way to do that is to use the environment routes that display when you redeploy the `master` branch. An example follows:

	<pre class="no-copy">Waiting for the activity ksvciptnzxfto (Steve Johnson added variable ADMIN_URL):
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
			https://master-k4wtvm7ogzr5s.us.magentosite.cloud/ is served by application `mymagento`

	In the preceding example, go to `http://master-k4wtvm7ogzr5s.us.magentosite.cloud/magento_A8v10` and log in using the user name `meister_x2U8` and password `admin_A456`
	
8.	Take a snapshot of the master branch:

		magento-cloud snapshot:create -e master

#### Next step
[Step 3, Set up cron]({{ page.baseurl }}cloud/before/before-setup-env-cron.html)
