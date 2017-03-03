---
layout: default
group: cloud
subgroup: 08_setup
title: Set up an environment and install the Magento software locally
menu_title: Set up an environment and install the Magento software locally
menu_order: 60
menu_node: 
level3_menu_node: level3parent
level3_subgroup: setupenv
version: 2.0
github_link: cloud/before/before-setup-env-parent.md
redirect_from: 
  - /guides/v2.0/cloud/access-acct/set-up-env.html
  - /guides/v2.0/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.0/cloud/env/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/env/environment-tutorial-set-mage-vars.html
  - /guides/v2.0/cloud/access-acct/admin-env-vars.html
  - /guides/v2.1/cloud/access-acct/admin-env-vars.html
---

{::options syntax_highlighter="rouge" /}


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
