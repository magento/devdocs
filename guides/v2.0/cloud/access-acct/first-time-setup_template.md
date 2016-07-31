---
layout: default
group: cloud
subgroup: 04_setup
title: Create a sample Magento project from a template
menu_title: Create a sample Magento project from a template
menu_order: 3
menu_node: 
version: 2.0
github_link: cloud/access-acct/first-time-setup_template.md
---

## Create a sample Magento project from a template {#cloud-first-clone}
This section discusses how to get started with a Magento cloud deployment by cloning an existing sample project. You can customize your project to your needs anytime, including before you deploy it.

<div class="bs-callout bs-callout-info" id="info">
  <p>Before you continue, make sure you completed the tasks discussed in <a href="{{page.baseurl}}cloud/before/before-workspace.html">Set up a Magento workspace</a>.</p>
</div>

To set up a Magento project using a template:

1.	Log in to [your Magento Enterprise Cloud Edition account](https://accounts.magento.cloud){:target="_blank"}.
2.	Click the **Projects** tab as the following figure shows.

	![Click the projects tab to access your Cloud project]({{ site.baseurl }}common/images/cloud_account_project.png){:width="550px"}
3.	Click the name of your project.
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
	
	You can now:

	*	Click **visit your site** to see your new Magento site.

	*	Click **configure project** to start configuring the project.

		<div class="bs-callout bs-callout-warning">
    		<p>For security reasons, we strongly recommend you change your Magento Admin URI, administrator user name, and administrator password. For step-by-step details, see <a href="{{page.baseurl}}cloud/howtos/environment-tutorial-set-mage-vars.html">Tutorial&mdash;Set Magento environment variables</a>.</p>
		</div>
	*	[Clone the project ]({{page.baseurl}}cloud/project/project-webint-basic.html#project-access)
	*	Set up configuration files:

		*	[`.magento.app.yml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
		*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
		*	[`service.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
	*	[Configure environments]({{page.baseurl}}cloud/env/environments.html)


