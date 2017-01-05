---
layout: default
group: cloud
subgroup: 08_setup
title: Set up an environment and install the Magento software locally
menu_title: Set up an environment and install the Magento software locally
menu_order: 60
menu_node: 
version: 2.0
github_link: cloud/access-acct/set-up-env.md
redirect_from: 
  - /guides/v2.0/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.0/cloud/env/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/env/environment-tutorial-set-mage-vars.html
  - /guides/v2.0/cloud/access-acct/admin-env-vars.html
  - /guides/v2.1/cloud/access-acct/admin-env-vars.html
---

{::options syntax_highlighter="rouge" /}

This topic discusses how to get started developing on Magento Enterprise Cloud Edition. All developers should perform the tasks discussed in this topic.

## Step 1: Clone the master environment {#setup-env-setup}
This section discusses how to clone the `master` environment, set up global Git environment variables, and to enable SSH if you haven't done so already.

If you have already performed these tasks, you can skip this step and the next step and continue with [Step 3: Set up cron](#setenv-cron).  

### Enable SSH to the environment
This is a one-time setup that was covered previously in this guide; skip this section if you've already enabled SSH.

{% collapsible To enable SSH: %}

{% include cloud/enable-ssh.md %}

{% endcollapsible %}

### Set global Git variables

{% collapsible To set global Git variables: %}

To set global Git variables required to commit or push to an environment (that is, Git branch), enter the following commands:

	git config --global user.name "<your name>"
	git config --global user.email <your e-mail address>

For more information, see [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup#_first_time){:target="_blank"}

{% endcollapsible %}

### Clone a project and environment {#setenv-clone}

{% collapsible To clone a project and environment: %}

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

		git fetch origin
6.	Pull updated code:

		git pull origin <environment ID>

{% endcollapsible %}

<p id="setup-env-adminurl">{% collapsibleh2 Step 2: Change the Admin URI, user name, and password in the master branch %}

This section discusses how to change Magento Admin parameters for security reasons. If you change the variables in the `master` branch, you have to do it only once because other environments inherit the variables from `master`.

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
7.  To set the Admin URI to `magento_A8v10`, enter:

		magento-cloud variable:set ADMIN_URL magento_A8v10 -e master
6.  Wait while the project redeploys.
7.  Log in to the Magento Admin using the values you just changed.

	The simplest way to do that is to use the environment routes that display when you redeploy the `master` branch. An example follows:

	<pre class="no-copy">
	Waiting for the activity ksvciptnzxfto (Steve Johnson added variable ADMIN_URL):
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

{% endcollapsibleh2 %}

<p id="setenv-cron">{% collapsibleh2 Step 3: Set up cron %}

{% include config/setup-cron.md %}

{% endcollapsibleh2 %}

<p id="setenv-new-env">{% collapsibleh2 Step 4: Clone or branch an environment %}

Now that you've change the Magento Admin variables, you should create a new environment for your development work; this new environment inherits the variable values from master.

After you create the branch, update project dependencies so you can install the Magento software locally.

1.	Do any of the following:

	*   To create a new environment, enter the following command:

			magento-cloud environment:branch <environment name> <parent environment ID>

	*   To check out an existing environment, enter the following command:

			magento-cloud environment:checkout

	For example, to create a new branch named `sprint1` from master, enter

		magento-cloud environment:branch sprint1 master

3.	After the command completes, update dependencies:

		composer --no-ansi --no-interaction install --no-progress --prefer-dist --optimize-autoloader
4.  Create a [snapshot]({{page.baseurl}}cloud/admin/admin-snap.html) of the environment.

		magento-cloud snapshot:create -e <environment ID>

{% endcollapsibleh2 %}

<p id="setenv-projvar">{% collapsibleh2 Step 5: Set up authentication keys in the project (project administrator) %}

This section discusses how to add authentication keys to the project, which means the keys don't have to be stored in the Git repository. (Developers who need to update Magento dependencies or to install extension need authentication keys locally; this is discussed in the next section.)

_Only a [project administrator]({{ page.baseurl }}cloud/admin/admin-user-admin.html#cloud-role-project) can perform this task._ The project administrator must have the public and private authentication keys for Magento Enterprise Cloud Edition. You should contact the Magento Enterprise Cloud Edition account owner to get the keys.

To set up authentication keys in the project:

1.	Log in to your Magento Enterprise Cloud Edition account at [https://accounts.magento.cloud](https://accounts.magento.cloud){:target="_blank"}.
2.	If necessary, click the **Projects** tab.
3.	Click the name of your project.
4.	In the upper left corner of the page, next to the project name, click ![Configure Project button]({{ site.baseurl }}common/images/cloud_configure-project-butt.png) (Configure Project) as the following figure shows.

	![Configure your project]({{ site.baseurl }}common/images/cloud_project-configure2.png)
5.	In the middle pane, click the **Variables** tab as the following figure shows.

	![Add a project variable]({{ site.baseurl }}common/images/cloud_project-vars1.png){:width="400px"}
6.	Click **Add Variable**.
7.	In the **Name** field, enter `env:COMPOSER_AUTH`.
8.	In the **Value** field, enter the following, replacing the sample values with your authentication keys.

		{
		   "http-basic": {
		      "repo.magento.com": {
		         "username": "<public key>",
		         "password": "<private key>"
		       }
		    }
		}
9.	Select the **Visible during build** check box. Clear the other check boxes.

	The following figure shows an example.

	![Set up authentication keys as project variables]({{ site.baseurl }}common/images/cloud_project-vars2.png)
10.	Click **Add Variable**.
11.	Remove `auth.json` from the Git repository from every environment currently configured for the project.

	Use the following command to list currently configured environments:

		magento-cloud environment:list

	For every environment ID, check out the environment and delete `auth.json` as follows:

		magento-cloud environment:checkout <environment ID>
		git rm auth.json
		git add -A && git commit -m "Remove auth.json" && git push origin <branch name>
12.	Wait for the project to build and deploy.

{% endcollapsibleh2 %}

<p id="setenv-keys">{% collapsibleh2 Step 6: Add your local authentication keys %}

Before you can upgrade the Magento software or install extensions, you must have authentication keys in the `auth.json` file in the Magento root directory. However, the authentication keys don't need to be in the Git repository so you can add `auth.json` to `.gitignore`.

<div class="bs-callout bs-callout-warning" markdown="1">
Make sure your project administrator has added authentication keys to the project as discussed in the preceding section. Typically, either the project administrator or the account owner has the authentication keys. Contact one of them before you continue.
</div>

To add your authentication keys:

1.	If you haven't done so already, log in to your Magento Enterprise Cloud Edition project, check out an environment, and pull updated code from the server.

	Use the following commands:

		magento-cloud login
		magento-cloud environment:list
		magento-cloud environment:checkout <env ID>
		git pull origin <branch name>

2.	Create a file named `auth.json` in the Magento project root directory and add your authentication keys to it.

	<div class="bs-callout bs-callout-info" markdown="1">
	If you have an `auth.json` file already, contact your project administrator to make sure a project variable has been defined. If there is no project variable that defines authentication keys, skip this step and continue with [Step 7: Set file system permissions and ownership](#setup-env-perms).
	</div>

	A sample `auth.json` follows. Replace the same values with your keys.

	``` json
	{
	   "http-basic": {
	      "repo.magento.com": {
	         "username": "<your public key>",
	         "password": "<your private key>"
	      }
	   }
	}
	```
3.	Save your changes to `auth.json` and exit the text editor.
2.	Open `.gitignore` in a text editor.
4.	Add `auth.json` to it anywhere.

	A snippet from `.gitignore` follows:

	<pre class="no-copy">
	/.buildpath
	/.cache
	/.metadata
	/.project
	/.settings
	atlassian*
	/nbproject
	/sitemap
	/.idea
	/.gitattributes
	auth.json
	</pre>
5.	Save your changes to `.gitignore` and exit the text editor.

{% endcollapsibleh2 %}

<p id="setup-env-perms">{% collapsibleh2 Step 7: Set file system permissions and ownership %}

1.  Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.  Enter the following commands in the order shown:

				cd <your Magento install dir>
				find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
				find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
				chown -R :<web server group> .
				chmod u+x bin/magento

{% include install/file-system-perms-twouser_cmds-only.md %}

{% endcollapsibleh2 %}

<p id="setup-env-install">{% collapsibleh2 Step 8: Install the Magento software %}

To be able to customize the Magento software on your local machine, you should install it using the following information:

*	Host name or IP address of your machine
*	Admin user name, password, and URI you created earlier

Before you begin, list the environment variables.

	magento-cloud variable:get -e <environment ID>

A sample result follows:

	+----------------+---------------+-----------+------+
	| ID             | Value         | Inherited | JSON |
	+----------------+---------------+-----------+------+
	| ADMIN_PASSWORD | admin_A456    | Yes       | No   |
	| ADMIN_URL      | magento_A8v10 | Yes       | No   |
	| ADMIN_USERNAME | meister_x2U8  | Yes       | No   |
	+----------------+---------------+-----------+------+

<h4>Related topics</h4>
<ul><li><a href="{{ page.baseurl }}install-gde/install/web/install-web.html">Install the Magento software using the Web Setup Wizard</a></li>
	<li><a href="{{ page.baseurl }}install-gde/install/cli/install-cli.html">Install the Magento software using the command line</a></li></ul>

{% endcollapsibleh2 %}


<h4>Next step</h4>
<a href="{{ page.baseurl }}cloud/access-acct/fastly.html">Set up Fastly</a>
