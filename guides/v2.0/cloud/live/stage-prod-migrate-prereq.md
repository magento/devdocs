---
layout: default
group: cloud
subgroup: 40_live
title: Prepare to migrate data
menu_title: Prepare to migrate data
menu_order: 8
menu_node: 
level3_menu_node: level3child
level3_subgroup: stage-prod
version: 2.0
github_link: cloud/live/stage-prod-migrate-prereq.md
---

## Prepare to migrate data {#cloud-live-migrate-prereq}
This topic discusses tasks you must perform before you migrate your database and code to staging or production:

1.	Create a support ticket to [migrate your `.yaml` files](#cloud-live-migrate-yaml)
2.	Get your [access URLs](#cloud-live-migrate-urls) for staging and production
3.	Set up [remote Git repositories](#cloud-live-migrate-git)
4.	Set up your [SSH agent](#cloud-live-migrate-agent)

After setting this up, your workflow is to code and test in your integration system, then push updates to your staging system using Git commands.

### Migrate deployment hooks in your `.magento.app.yaml` file {#cloud-live-migrate-yaml}

{% include cloud/hooks.md %}

### Get your access URLs  {#cloud-live-migrate-urls}
Your Magento Enterprise Cloud Edition OneDrive account includes an onboarding document that contains your Git, SSH, and project URLs for staging and production. You must know those URLs to continue.

*	Git URL format:

	*	Staging: `git@git.ent.magento.cloud:<project ID>_stg.git`
	*	Production: `git@git.ent.magento.cloud:<project ID>.git`

*	SSH URL format: 

	*	Staging: `<project ID>_stg@<project ID>.ent.magento.cloud` 
	*	Production: `<project ID>@<project ID>.ent.magento.cloud` 

*	Web URL format: 

	*	Staging: `http[s]://staging.<your domain>.<project ID>.ent.magento.cloud`
	*	Production: 

		*	Load balancer URL: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`
		*	Direct access to one of the three redundant servers: `http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

### Set up remote Git repositories {#cloud-live-migrate-git}
When you know your Git URLs, you must set them up as remote upstream repositories so you can push code to them.

Command syntax:

	git remote add <remote repository name> <remote repository URL>

For example,

	git remote add staging git@git.ent.magento.cloud:dr5q6no7mhqip_stg.git
	git remote add prod git@git.ent.magento.cloud:dr5q6no7mhqip.git

### Set up your SSH agent {#cloud-live-migrate-agent}
You can use any SSH client you wish; however, this topic discusses using the OpenSSH client only. To learn how to use Putty and Pageant on Windows, for example, consult a reference such as [How-To Geek](http://www.howtogeek.com/125364/how-to-ssh-hop-with-key-forwarding-from-windows/){:target="_blank"}.

The SSH agent forwards authentication requests from staging or production to your working Magento system. (That is, the machine on which you did your deployment and testing.) An SSH agent enables you to log in to remote servers from the staging or production host using a local private SSH key. With a working SSH agent, you can easily copy files directly between the staging or production host and integration, or from another remote server.

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

#### Next step
[Migrate data]({{ page.baseurl }}cloud/live/stage-prod-migrate.html)