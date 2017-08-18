---
layout: default
group: cloud
subgroup: 080_setup
title: Set up Magento authentication keys
menu_title: Set up Magento authentication keys
menu_order: 35
version: 2.0
github_link: cloud/before/before-setup-env-keys.md
---

#### Previous step:
[Clone the project]({{ page.baseurl }}cloud/before/before-setup-env-2_clone.html)

Magento authentication keys provide authentication between Git and Magento for your branches and your local workspace. The project administrator or account owner should add the authentication keys to the project directly to ensure you don't need to store the keys in the Git repository. To generate a key, see [Get your authentication keys]({{ page.baseurl }}install-gde/prereq/connect-auth.html).

_Only a [project administrator]({{ page.baseurl }}cloud/project/user-admin.html#cloud-role-project) with Super User access can perform this task._ If you do not have Super User access to the project, have the project administrator add the keys using these instructions.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
All developers working in code branches will need to add [Magento authentication keys]({{ page.baseurl }}install-gde/prereq/connect-auth.html) locally to update Magento dependencies and install {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extensions{% endglossarytooltip %}. We recommend you add the authentication keys locally after you branch from the master branch. Those instructions are included in a [later step]({{ page.baseurl }}cloud/before/before-setup-env-env.html).
</div>

## Add authentication keys to the project
To set up authentication keys in the project:

1.	Log in to your Magento Commerce account at [https://accounts.magento.cloud](https://accounts.magento.cloud){:target="_blank"}.
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

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Save these authentication keys. You will need to add them to your branch in a [later step]({{ page.baseurl }}cloud/before/before-setup-env-env.html).
</div>

#### Next step:
[Branch an environment]({{ page.baseurl }}cloud/before/before-setup-env-env.html)
