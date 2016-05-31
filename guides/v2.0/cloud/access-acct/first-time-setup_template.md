---
layout: default
group: cloud
subgroup: 04_setup
title: Create a sample Magento project from a template
menu_title: Create a sample Magento project from a template
menu_order: 3
menu_node: 
github_link: cloud/access-acct/first-time-setup_template.md
---

## Create a sample Magento project from a template {#cloud-first-clone}
This section discusses how to get started with a Magento cloud deployment by cloning an existing sample project. You can customize your project to your needs anytime, including before you deploy it.

Before you continue, make sure you completed the tasks discussed in [Set up a Magento workspace]({{ site.gdeurl }}cloud/before/before-workspace.html).

To set up a Magento project using a template:

1.	If you followed the link from your [welcome e-mail]({{ site.gdeurl }}cloud/access-acct/first-time-setup.html#cloud-first-email), you might have to log in to your Magento Enterprise Cloud Edition project first.
2.	If necessary, click the **Projects** tab.
2.	When prompted, enter a name for your project and click **Next**.
3.	Click **Create a blank site from a template** as the following figure shows.

	![Import a sample Magento project]({{ site.baseurl }}common/images/cloud_project_template.png){:width="650px"}
4.	Click **Continue**.
5.	When prompted, enter your Magento EE [authentication keys]({{ site.gdeurl }}install-gde/prereq/connect-auth.html) in the provided fields and click **Finish**.
6.	Wait a few minutes while the project deploys.

	During this time, the Web Interface displays messages similar to the following:

	![Your sample Magento project]({{ site.baseurl }}common/images/cloud_project_template2.png){:width="650px"}
7.	After the project deploys, **Success** displays next to the name of your project.

	The following figure shows an example. 

	![You can now visit your site or configure your project]({{ site.baseurl }}common/images/cloud_project-options.png){:width="650px"}
	
	You can now:

	*	Click **visit your site** to see your new Magento site.

		To access the Magento Admin, add `/admin` to the end of the URL and log in as follows:

		*	Username: `admin`
		*	Password: `admin12`

		<div class="bs-callout bs-callout-warning">
    		<p>For security reasons, we strongly recommend you change your Magento Admin URI and administrator password. For step-by-step details, see <a href="{{ site.gdeurl }}cloud/env/environment-tutorial-set-mage-vars.html">Tutorial&mdash;Set Magento environment variables</a>.</p>
		</div>

	*	Click **configure project** to start configuring the project.

		See [Manage your projects]({{ site.gdeurl }}cloud/project/projects.html) for more information.
	*	Set up configuration files:

		*	[`.magento.app.yml`]({{ site.gdeurl }}cloud/project/project-conf-files_magento-app.html)
		*	[`routes.yaml`]({{ site.gdeurl }}cloud/project/project-conf-files_routes.html)
		*	[`service.yaml`]({{ site.gdeurl }}cloud/project/project-conf-files_services.html)
	*	[Configure environments]({{ site.gdeurl }}cloud/env/environments.html)


