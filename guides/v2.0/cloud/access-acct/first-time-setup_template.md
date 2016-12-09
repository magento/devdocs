---
layout: default
group: cloud
subgroup: 08_setup
title: Create a sample Magento project from a template
menu_title: Create a sample Magento project from a template
menu_order: 51
menu_node: 
level3_menu_node: level3child
level3_subgroup: newproj
version: 2.0
github_link: cloud/access-acct/first-time-setup_template.md
---

## Create a sample Magento project from a template {#cloud-first-clone}
This section discusses how to get started with a Magento cloud deployment by cloning an existing sample project. You can customize your project to your needs anytime, including before you deploy it.

When you initially set up a project from a template, we retrieve the code from the [`magento-cloud-configuration` repository](https://github.com/magento-cloud/magento-cloud-configuration){:target="_blank"}.

<div class="bs-callout bs-callout-info" id="info">
  <p>Before you continue, make sure you completed the tasks discussed in <a href="{{page.baseurl}}cloud/before/before-workspace.html">Set up a Magento workspace</a>.</p>
</div>

To set up a Magento project using a template:

1.	Log in to [your Magento Enterprise Cloud Edition account](https://accounts.magento.cloud){:target="_blank"}.
2.	Click the **Projects** tab as the following figure shows.

	![Click the projects tab to access your Cloud project]({{ site.baseurl }}common/images/cloud_account_project.png){:width="550px"}
3.	Click the name of your project (initially, it's named **[Untitled Project]**).
2.	When prompted, enter a name for your project and click **Next**.

	![Enter a name for your project]({{ site.baseurl }}common/images/cloud_project_name.png){:width="550px"}
3.	Click **Create a blank site from a template** as the following figure shows.

	![Import a sample Magento project]({{ site.baseurl }}common/images/cloud_project_template.png){:width="650px"}
4.	Click **Continue**.
5.	When prompted, enter your Magento EE [authentication keys]({{page.baseurl}}install-gde/prereq/connect-auth.html) in the provided fields and click **Finish**.
6.	Wait a few minutes while the project deploys.

	During this time, the Web Interface displays messages similar to the following:

	![Your sample Magento project]({{ site.baseurl }}common/images/cloud_project_template2.png){:width="650px"}
7.	After the project deploys, **Success** displays next to the name of your project.

	The following figure shows an example. 

	![You can now visit your site or configure your project]({{ site.baseurl }}common/images/cloud_project-options.png){:width="650px"}
	
#### Next steps
*	[Set up an environment]({{ page.baseurl }}cloud/access-acct/set-up-env.html)
*	[Set Magento Admin environment variables]({{ page.baseurl }}cloud/access-acct/admin-env-vars.html)


