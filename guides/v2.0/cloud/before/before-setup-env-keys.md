---
layout: default
group: cloud
subgroup: 080_setup
title: Set up Magento authentication keys
menu_title: Set up Magento authentication keys
menu_order: 35
level3_menu_node: level3child
level3_subgroup: workspace
version: 2.0
github_link: cloud/before/before-setup-env-keys.md
---

#### Previous step:
[Clone the project]({{ page.baseurl }}cloud/before/before-setup-env-2_clone.html)

Add authentication keys to the project to ensure you don't need to store the keys in the Git repository. These keys provide authentication between Git and Magento for your branches and local.

Developers who need to update Magento dependencies or to install {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} also need to add authentication keys locally. You will add keys locally after your branch from the master. Those instructions are included in a [later step]({{ page.baseurl }}cloud/before/before-setup-env-env.html).

## Add authentication keys to the project
_Only a [project administrator]({{ page.baseurl }}cloud/project/user-admin.html#cloud-role-project) with Super User access can perform this task._ The project administrator must have the public and private authentication keys for Magento Enterprise Cloud Edition. Contact your Magento Enterprise Cloud Edition account owner to get the keys for these instructions.

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

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Save these authentication keys. You will need to add them to your branch in a [later step]({{ page.baseurl }}cloud/before/before-setup-env-env.html).
</div>

#### Next step
[Set up Magento cron]({{ page.baseurl }}cloud/before/before-setup-env-cron.html)
