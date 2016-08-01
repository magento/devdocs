---
layout: default
group: cloud
subgroup: 04_setup
title: Set up an environment
menu_title: Set up an environment
menu_order: 10
menu_node: 
version: 2.0
github_link: cloud/access-acct/set-up-env.md
---

## Set up an environment
This topic discusses how to clone an environment locally, set up global Git environment variables, and to enable SSH if you haven't done so already.

### Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Set global Git varibles
To set global Git variables required to commit or push to an environment (that is, Git branch), enter the following commands:

	git config --global user.name "<your name>"
	git config --global user.email <your e-mail address>

For more information, see [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup#_first_time){:target="_blank"}

### Enable SSH to the environment
This is a one-time setup that was covered previously in this guide; skip this section if you've already enabled SSH.

{% collapsible To enable SSH: %}

{% include cloud/enable-ssh.md %}

{% endcollapsible %}


#### Next steps
	
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


