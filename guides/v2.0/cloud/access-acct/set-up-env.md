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

### Enable SSH to the environment
This is a one-time setup that was covered previously in this guide; skip this section if you've already enabled SSH.

{% collapsible To enable SSH: %}

{% include cloud/enable-ssh.md %}

{% endcollapsible %}

### Clone a project and environment

{% collapsible To clone a project and environment: %}

1.	Log in to the server on which your SSH keys are located.
2.	Log in to your project:

		magento-cloud login
3.	List your projects:

		magento-cloud project:list
4.	Clone a project.

		magento-cloud project:get <project ID>
4.	Change to a project directory.

	For example if your project is named Magento 2, `cd magento-2`
4.	List environments in the project:

		magento-cloud environment:list

	<div class="bs-callout bs-callout-info" id="info">
  		<p><code>magento-cloud environment:list</code> displays environment hierarchies whereas <code>git branch</code> displays does not. If you have any nested environments, use <code>magento-cloud environment:list</code>.</p>
	</div>

5.	Fetch origin branches:

		git fetch origin
6.	Create a new environment:

		magento-cloud environment:branch <environment name> <parent environment ID>
8.	Pull updated code:

		git pull origin <environment ID>
7.  Create a [snapshot]({{page.baseurl}}cloud/admin/admin-snap.html) of the environment.

        magento-cloud snapshot:create -e <environment ID>

{% endcollapsible %}

### Set global Git variables
To set global Git variables required to commit or push to an environment (that is, Git branch), enter the following commands:

	git config --global user.name "<your name>"
	git config --global user.email <your e-mail address>

For more information, see [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup#_first_time){:target="_blank"}

#### Next step
[Set Magento Admin environment variables]({{ page.baseurl }}cloud/access-acct/admin-env-vars.html)


