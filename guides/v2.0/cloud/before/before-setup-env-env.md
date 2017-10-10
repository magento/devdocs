---
layout: default
group:
subgroup:
title: Branch an environment
menu_title: Branch an environment
menu_order: 
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

After you [create the branch](#branch), update project dependencies so you can install the Magento software locally. You should also [Add your local authentication keys to the project](#add-keys-project).

## Branch an environment {#branch}
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

## Add authentication keys to auth.json {#add-keys-project}
Contact the Project Owner or Tech Admin for a set of authentication keys. You will add the keys to `auth.json` locally and update the branch. You need `auth.json` updated before you can upgrade Magento software or install extensions.

<div class="bs-callout bs-callout-warning" markdown="1">
Ensure your Project Owner or Tech Admin has [added authentication keys to the project]({{ page.baseurl }}cloud/before/before-setup-env-keys.html).
</div>

These instructions require having a cloned branch for development locally.

To add your local authentication keys:

1.	Use the Git branch you created.

2.	Locate or create a file named `auth.json` in the Magento project root directory and add your authentication keys to it.

	If you have an `auth.json` file already, contact your project administrator to make sure a project variable has been defined.

	A sample `auth.json` follows. Replace the same values with your keys.

			{% highlight json %}
			{
			   "http-basic": {
			      "repo.magento.com": {
			         "username": "<your public key>",
			         "password": "<your private key>"
			      }
			   }
			}
			{% endhighlight %}
3.	Save your changes to `auth.json` and exit the text editor.

For Starter plans, you can also add auth.json to your Git ignore list.

1.	Open `.gitignore` in a text editor.
2.	Add `auth.json` to it anywhere.

	A snippet from `.gitignore` follows:

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

3.	Save your changes to `.gitignore` and exit the text editor.

Commit and push your changes to the Git branch.

#### Next step
[Install Magento]({{ page.baseurl }}cloud/before/before-setup-env-install.html)
