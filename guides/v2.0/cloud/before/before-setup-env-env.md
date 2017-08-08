---
layout: default
group: cloud
subgroup: 080_setup
title: Branch an environment
menu_title: Branch an environment
menu_order: 45
menu_node:
version: 2.0
github_link: cloud/before/before-setup-env-env.md
---

#### Previous step:
[Set up authentication keys]({{ page.baseurl }}cloud/before/before-setup-env-keys.html)

With your workspace configured, the project cloned, and cron set up, you can create a branch for development work.

You can branch according to your own branching strategies. For example, you could create a branch to:

* Install and add Magento extensions and modules
* Create custom code and front end themes
* Modify and export configurations

After you create the branch, update project dependencies so you can install the Magento software locally. You should also [Add your local authentication keys to the project](#add-keys-project).

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
3.  Create a [snapshot]({{page.baseurl}}cloud/project/project-webint-snap.html) of the environment.

		magento-cloud snapshot:create -e <environment ID>

## Add your local authentication keys to the project {#add-keys-project}
Before you can upgrade the Magento software or install extensions, you must have authentication keys in the `auth.json` file in the Magento root directory. Contact the project administrator or the account owner for the authentication keys. You need these keys to add them locally.

These authentication keys don't need to be in the Git repository. You can add `auth.json` to `.gitignore`.

<div class="bs-callout bs-callout-warning" markdown="1">
Ensure your project administrator has added authentication keys to the project as discussed in the preceding section.
</div>

These instructions require having a cloned branch for development locally.

To add your local authentication keys:

1.	If you haven't done so already, log in to your Magento Commerce project, check out an environment, and pull updated code from the server. For additional information, see [Step 5, Clone or branch an environment]({{ page.baseurl }}cloud/before/before-setup-env-env.html)

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

#### Next step
[Install Magento]({{ page.baseurl }}cloud/before/before-setup-env-install.html)
