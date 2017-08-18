---
layout: default
group: cloud
subgroup: 160_deploy
title: Prepare to deploy to Staging and Production
menu_title: Prepare to deploy to Staging and Production
menu_order: 40
menu_node:
version: 2.0
github_link: cloud/live/stage-prod-migrate-prereq.md
---

#### Previous step:
[Build and deploy on local]({{ page.baseurl }}cloud/live/live-sanity-check.html)

When you are ready to deploy your store, you need to complete deployment and testing in Staging first, then deploy to Production. The Staging environment provides a near-production environment with full services (including Fastly, New Relic, and Blackfire), database, web server, and more.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Make sure to complete all development and merging of your code to the `master` branch in the Integration environment. Only the `master` branch is deployed to Staging then Production.
</div>

For **first time setup** to migrate your database and deploy code to Staging or Production, you will:

1.	Create a support ticket to [migrate deployment hooks](#cloud-live-migrate-yaml). If you haven't already, also include your public SSH keys to add to Staging and Production.
2.	Get your [access URLs](#cloud-live-migrate-urls) for Staging and Production. You will use these often for SSH access.
3.	Set up [remote Git repositories](#cloud-live-migrate-git) on Staging and Production.
4.	Just once, set up your [SSH agent](#cloud-live-migrate-agent) for Staging and Production.

For **continuous integration** after first time setup, you will:
* Code and test in your Integration environment
* SSH into Staging and use Git commands for pushing code, files, etc
* Test in Staging
* SSH into Production and use Git commands for pushing code, files, etc

If you haven't done so already, upload any [Fastly VCL snippets]({{ page.baseurl }}cloud/access-acct/fastly.html#cloud-live-migrate-fastly-snip) in your Integration environment `master` Magento Admin panel. Fastly is available in Staging and Production.

## Migrate deployment hooks in your `.magento.app.yaml` file {#cloud-live-migrate-yaml}

{% include cloud/hooks.md %}

## Get your access URLs  {#cloud-live-migrate-urls}
Your Magento Commerce (Cloud) OneDrive account includes an onboarding document that contains your Git, SSH, and project URLs for Staging and Production. You'll use this information for accessing the environments.

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
You only need to set these up once. When you know your Git URLs, you need to set them up as remote upstream repositories so you can push code to them.

Basically, you configure these remote repositories using these instructions to SSH into the environements and push code and migrate data and files using Git commands.

Using a terminal connection, enter Git commands to add the remote repositories.

The Git command syntax is:

	git remote add <remote repository name> <remote repository URL>

The following commands are examples for setting up remotes on Staging and Production:

	git remote add staging git@git.ent.magento.cloud:dr5q6no7mhqip_stg.git
	git remote add prod git@git.ent.magento.cloud:dr5q6no7mhqip.git

## Set up your SSH agent and add the SSH key {#cloud-live-migrate-agent}
You only need to set these up once. You can use any terminal client you prefer for SSH access, or see our [Recommendeds tools]({{ page.baseurl }}cloud/before/before-workspace.html#recommended-tools). For these examples, we use the OpenSSH client.

The SSH agent forwards authentication requests from Staging or Production environments to your local with a working Magento system. An SSH agent helps you log in to the remote servers from the Staging or Production host using a local private SSH key.

**What does that mean?** This agent helps you migrate files between Integration, Staging, and Production environments just through SSH access. After you push your Git code, you can SSH into Staging and Production and update code, data, and files with this set up.

To set up an SSH agent:

1.	Log in to your local system.
2.	Enter the following command to check if the SSH agent is running and list fingerprints of all identities currently represented by the agent:

		ssh-add -l

	One of the following messages displays:

	*	Displays a working and running SSH agent: `2048 ab:de:56:94:e3:1e:71:c3:4f:df:e1:62:8d:29:a5:c0 /home/magento_user/.ssh/id_rsa (RSA)`

		Skip to step 4.
	*	The SSH agent has not started: `Could not open a connection to your authentication agent.`

		Continue with step 3.

3.	To start the SSH agent, enter the following command:

		eval $(ssh-agent -s)

	The agent starts and displays the process ID (PID).
4.	Add your public SSH key to the agent to SSH into environments and complete Git commands. This is the same SSH key you provided in a ticket for access to Staging and Production.

		ssh-add ~/.ssh/id_rsa

	A message similar to the following displays:

		Identity added: /home/magento_user/.ssh/id_rsa (/home/magento_user/.ssh/id_rsa)

For more information on setting up SSH, see [Enable SSH keys]({{ page.baseurl }}cloud/before/before-workspace-ssh.html) as part of your local setup.

#### Next step
[Migrate and deploy]({{ page.baseurl }}cloud/live/stage-prod-migrate.html)
