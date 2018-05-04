---
layout: default
group: cloud
subgroup: 080_setup
title: Clone and branch the project
menu_title: Clone and branch the project
menu_order: 30
menu_node:
version: 2.1
github_link: cloud/before/before-setup-env-2_clone.md
redirect_from:
  - /guides/v2.0/cloud/before/before-setup-env-keys.html
  - /guides/v2.1/cloud/before/before-setup-env-keys.html
  - /guides/v2.2/cloud/before/before-setup-env-keys.html
  - /guides/v2.0/cloud/before/before-setup-env-env.html
  - /guides/v2.1/cloud/before/before-setup-env-env.html
  - /guides/v2.2/cloud/before/before-setup-env-env.html
functional_areas:
  - Cloud
  - Setup
---

#### Previous step:
[Set up the Magento file system owner]({{ page.baseurl}}/cloud/before/before-workspace-file-sys-owner.html)

The Magento Commerce project is a Git repository of Magento code with a master origin. Develop your custom code and add extensions in one of eight active Git branches in your local. Each active environment includes a database and services to fully access the Magento site and store in the Integration environment.

To begin, you need to clone the `master` environment to your local and add the Magento Admin URL, username, and password (to include with all branches). If you are new to Git workflow, processes, and commands, see Git [documentation](https://git-scm.com/documentation){:target="\_blank"}.

The commands in these instructions use Magento CLI commands and Git commands to access the `master` environment. For a full list of Magento Cloud CLI commands, enter `magento-cloud list` or see the [Magento CLI reference]({{ page.baseurl}}/cloud/reference/cli-ref-topic.html).

You should complete these instructions in the following order:

* [Clone the project master branch](#clonemaster)
* [Change the Magento Admin URL, user name, and password on master](#setvariables)
* [Branch an environment](#branch)

## Clone the project master branch {#clonemaster}

To clone the project's `master` environment to your local:

1.	Log in to your local development machine with a [Magento file system owner]({{ page.baseurl}}/cloud/before/before-workspace-file-sys-owner.html) account.

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

8.	Fetch remote branches:

		git fetch magento
9.	Pull updated code:

		git pull magento <environment ID>

## Change the Magento Admin URL, user name, and password on master {#setvariables}
We recommend changing the following variables for the Magento Admin URL and administrator account. You should configure these settings for security reasons prior to branching from the cloned `master`. If you change the variables in the `master` branch, you only have to make these changes once. All branches inherit the variables from `master`.

* `ADMIN_EMAIL`: Administrative user's e-mail address. This value is required for upgrading and patching Magento Commerce (Cloud) and is used to send password reset emails.
* `ADMIN_USERNAME`: User name for a Magento administrative user. This user is an administrator and can create other users, including other administrative users. The default hardcoded username is `admin`. You can use `admin` or change it to another secure username.
* `ADMIN_PASSWORD`: Administrative user's password. When the project is created, a random password is generated and an email is sent to the Project Owner. During project creation, the Project Owner should have already changed the password. You may need to contact the Project Owner for the updated password.
* `ADMIN_URL`: The relative URL by which to access the Magento Admin. For example: <domain>/admin. For security reasons, we recommend you choose a value other than `admin` or `backend` or another term that is easy to guess.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Make note of any changes you make. You may need them when installing Magento with the command line and when verifying the installation.
</div>

### List and review variables {#variablelist}
If you're not sure whether or not the `master` branch has all Magento Admin variables and settings configured, open a terminal, login to the Magento Cloud CLI, and enter the following command. This command lists any configured and available variables.

	magento-cloud variable:get -e <environment ID>

To set Admin variables, you will use this command format:

	magento-cloud variable:set <name> <value> -e <environment ID>

You can also [log into your project](https://accounts.magento.cloud){:target="\_blank"} in the Project Web Interface to review project variables entered there. Click the Configure environment gear icon ![Configure your environment]({{ site.baseurl}}/common/images/cloud_edit-project.png) next to the Project name. Click the **Variables** tab and review any configured variables there.

<div class="bs-callout bs-callout-warning" markdown="1">
Everytime you add or modify a variable using the web interface or the CLI, the branch will redeploy automatically.
</div>

### Add variables using the CLI {#cli}
To set variables using the CLI (with example values used):

1.  To set the administrator's user name to `admin_A456` in the `master` environment, enter:

		magento-cloud variable:set ADMIN_USERNAME admin_A456 -e master
2.  Wait for the project to redeploy.
3.  To set the administrator's password to `admin_A456`, enter:

		magento-cloud variable:set ADMIN_PASSWORD admin_A456 -e master
4.  Wait for the project to redeploy.
5.  To set the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} URI to `magento_A8v10`, enter:

		magento-cloud variable:set ADMIN_URL magento_A8v10 -e master
6.  Wait for the project to redeploy.
7.  Log in to the Magento Admin using the values you just changed.

	The simplest way to do that is to use the environment routes that display when you redeploy the `master` branch. The following example uses these values:


		<pre class="no-copy">Building application 'mymagento' (runtime type: php:7.0, tree: 07263ba)
		Slug already built for this tree id, skipping.

		Re-deploying environment k4wtvm7ogzr5s-master.
		Environment configuration:

			mymagento (type: php:7.0, size: S, disk: 2048)
			mysql (type: mysql:10.0, size: S, disk: 2048)
			redis (type: redis:3.0, size: S)
			solr (type: solr:4.10, size: S, disk: 1024)

		Environment routes:
			http://master-k4wtvm7ogzr5s.us.magentosite.cloud/ is served by application `mymagento`</pre>

	In the preceding example, go to `http://master-k4wtvm7ogzr5s.us.magentosite.cloud/magento_A8v10` and log in using the user name `admin_A456` and password `admin_A456`

8.	After the project redeploys, take a snapshot of the master branch:

			magento-cloud snapshot:create -e master

### Add variables using the Project Web Interface {#web}
To set variables using the Project Web Interface:

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud){:target="\_blank"}.
2. Click the Configure environment gear icon ![Configure your environment]({{ site.baseurl}}/common/images/cloud_edit-project.png) next to the Project name. If you are asked to create the project, click **Continue Later**.

	![Project without code]({{ site.baseurl}}/common/images/cloud_project_empty.png)

4. Select the **Variables** tab.
5. Click **Add Variable**.
6. For the **Name**, enter `ADMIN_EMAIL`. For the **Value**, enter your Project Owner email address or another accessible email for resetting the password for the default admin account.

	![Project variable]({{ site.baseurl}}/common/images/cloud_project_variable.png)

7. Click **Add variable**. After you add the variable, the environment will deploy. Wait until deployment completes.

Repeat to optionally add the following variables using the examples above:

* Name: `ADMIN_USERNAME`, Value: admin_A456
* Name: `ADMIN_PASSWORD`, Value: admin_A456
* Name: `ADMIN_URL`, Value: magento_A8v10

## Branch an environment {#branch}
With your project cloned and Magento administrator account configured, you can branch for development.

* For [Starter]({{ page.baseurl}}/cloud/basic-information/starter-develop-deploy-workflow.html#clone-branch), consider creating a branch for `staging`, than branch from `staging` for development.
* For [Pro]({{page.baseurl}}/cloud/architecture/pro-develop-deploy-workflow.html), create branches in the Integration environment for your development.

To branch from master:

1.	Do any of the following:

	*   To create a new environment, enter the following command:

			magento-cloud environment:branch <environment name> <parent environment ID>
	*   To check out an existing environment, enter the following command:

			magento-cloud environment:checkout

	For example, to create a new branch named `sprint1` from master, enter:

		magento-cloud environment:branch sprint1 master

2.	After the command completes, update dependencies:

		composer --no-ansi --no-interaction install --no-progress --prefer-dist --optimize-autoloader
3.  Create a [snapshot]({{ page.baseurl}}/cloud/project/project-webint-snap.html) of the environment.

		magento-cloud snapshot:create -e <environment ID>

#### Next step:
[Install Magento]({{ page.baseurl}}/cloud/before/before-setup-env-install.html)
