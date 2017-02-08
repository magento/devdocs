---
layout: default
group: cloud
subgroup: 08_setup
title: Step 5, set up authentication keys
menu_title: Step 5, set up authentication keys
menu_node: 65
level3_menu_node: level3child
level3_subgroup: setupenv
version: 2.0
github_link: cloud/before/before-setup-env-keys.md
---

{::options syntax_highlighter="rouge" /}

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

#### Next step
[]()

