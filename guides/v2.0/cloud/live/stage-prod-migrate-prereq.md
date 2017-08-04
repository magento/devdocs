---
layout: default
group: cloud
subgroup: 160_deploy
title: Prepare to deploy to Staging and Production
menu_title: Prepare to deploy - Staging and Production
menu_order: 40
menu_node:
version: 2.0
github_link: cloud/live/stage-prod-migrate-prereq.md
---

When you are ready to deploy your store, you need to complete deployment and testing in Staging first, then deploy to Production. The Staging environment provides a near-production environment with full services (including Fastly, New Relic, and Blackfire), database, web server, and more.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Make sure to complete all development and merging of your code to the `master	` branch in the Integration environment. Only the `master` branch is deployed to Staging then Production.
</div>

Complete the following tasks before you migrate your database and deploy code to Staging or Production:

1.	Create a support ticket to [migrate deployment hooks](#cloud-live-migrate-yaml)
2.	Get your [access URLs](#cloud-live-migrate-urls) for Staging and Production
3.	Set up [remote Git repositories](#cloud-live-migrate-git)
4.	Set up your [SSH agent](#cloud-live-migrate-agent)
5.	If you haven't done so already, upload any [Fastly VCL snippets]({{ page.baseurl }}cloud/access-acct/fastly.html#cloud-live-migrate-fastly-snip)

After setting this up, your workflow is to code and test in your Integration environment, then push updates to the Staging environment by a ticket for directly using Git commands.

## Migrate deployment hooks in your `.magento.app.yaml` file {#cloud-live-migrate-yaml}

{% include cloud/hooks.md %}

## Get your access URLs  {#cloud-live-migrate-urls}
Your Magento Enterprise Cloud Edition OneDrive account includes an onboarding document that contains your Git, SSH, and project URLs for Staging and Production. You must know those URLs to continue.

*	Git {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} format:

	*	Staging: `git@git.ent.magento.cloud:<project ID>_stg.git`
	*	Production: `git@git.ent.magento.cloud:<project ID>.git`

*	SSH URL format:

	*	Staging: `<project ID>_stg@<project ID>.ent.magento.cloud`
	*	Production: `<project ID>@<project ID>.ent.magento.cloud`

*	Web URL format:

	*	Staging: `http[s]://staging.<your domain>.c.<project ID>.ent.magento.cloud`
	*	Production:

		*	Load balancer URL: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`
		*	Direct access to one of the three redundant servers: `http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

## Set up remote Git repositories {#cloud-live-migrate-git}
When you know your Git URLs, you must set them up as remote upstream repositories so you can push code to them.

Command syntax:

	git remote add <remote repository name> <remote repository URL>

For example,

	git remote add staging git@git.ent.magento.cloud:dr5q6no7mhqip_stg.git
	git remote add prod git@git.ent.magento.cloud:dr5q6no7mhqip.git

## Set up your SSH agent {#cloud-live-migrate-agent}
You can use any SSH client you prefer or see our [Recommendeds tools]({{ page.baseurl }}cloud/before/before-workspace.html#recommended-tools). For these examples, we use the OpenSSH client.

The SSH agent forwards authentication requests from Staging or Production to your working Magento system (that is, your local workspace). An SSH agent enables you to log in to remote servers from the staging or production host using a local private SSH key. With a working SSH agent, you can easily copy files directly between the staging or production host and integration, or from another remote server.

To set up an SSH agent:

1.	Log in to local development machine.
2.	Enter the following command:

		ssh-add -l

	One of the following messages displays:

	*	Working SSH agent: `2048 ab:de:56:94:e3:1e:71:c3:4f:df:e1:62:8d:29:a5:c0 /home/magento_user/.ssh/id_rsa (RSA)`

		Skip the next step and continue with step 4.
	*	SSH agent not started: `Could not open a connection to your authentication agent.`

		Continue with step 3.

3.	To start the SSH agent, enter the following command:

		eval $(ssh-agent -s)

	The agent's process ID (PID) displays.
4.	Add your SSH key to the agent:

		ssh-add ~/.ssh/id_rsa

	A message similar to the following displays:

		Identity added: /home/magento_user/.ssh/id_rsa (/home/magento_user/.ssh/id_rsa)

For more information on setting up SSH, see [Enable SSH keys]({{ page.baseurl }}cloud/before/before-workspace-ssh.html) as part of your local setup.

#### Next step
[Migrate data and static files]({{ page.baseurl }}cloud/live/stage-prod-migrate.html)
