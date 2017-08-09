---
layout: default
group: cloud
subgroup: 080_setup
title: First time deployment
menu_title: First time deployment
menu_order: 60
version: 2.0
github_link: cloud/access-acct/first-time-deploy.md
---

#### Previous step:
[Install Magento]({{ page.baseurl }}cloud/before/before-setup-env-install.html)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You only need to complete this step one time for a new project. As a best practice, you need to have the template Magento Commerce project (or `master` branch) fully deployed across all environments to ensure all future code pushes correctly deploy.
</div>

After fully setting up your local workspace, you should have the cloned Integration `master` branch on your local. To finish your initial setup, we **strongly recommend fully deploying** `master` branch to Staging and Production environments. You only need to push this branch from Integration to Staging and Production once without any changes. This fully installs the base Magento Commerce application into those environments.

This initial push provides the following benefits:

* Fully installs Magento in each environment
* Allows the build/deploy scripts to use the `setup:upgrade` command instead of `setup:install` (important for adding extensions)
* Protects against errors and failures when installing with added modules and extensions

  Not all extensions are correctly tested with the setup:install command and application modes. If you initially install Magento code with added 3rd party extensions or custom code, you may receive errors and build/deploy failures. By deploying the unmodified Magento template, all future deployments to Staging and Production typically do not encounter installation issues from 3rd party and custom code.

## Prerequisites {#prereqs}
To deploy, you need the following:

* A project with an unmodified Magento Commerce template `master` branch (projects created using the import option may encounter issues)
* Staging and Production environments provisioned
* SSH access to Staging and Production environments

## Enter a ticket {#ticket}
If you need environments provisioned and SSH access, enter a [Support ticket]({{ page.baseurl }}cloud/bk-cloud.html#gethelp).

To request environment provisioning, you will need to have cleared a payment for the Magento Commerce (Cloud) subscription and completed an on-boarding call with Magento.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you do not have these environments provisioned, create any code in a branch but do not merge it to `master`. Only merge after you have fully deployed across the provisioned environments.
</div>

To receive SSH access, provide public SSH keys in the ticket for the environments. You should receive the SSH URL for these environments in your project information from Magento.

## Deploy to Staging and Production
You can SSH into the Staging and Production environments to push the `master` branch. You'll need the SSH and Git with your project ID. The formats are as follows:

*	Git URL format:

	*	Staging: `git@git.ent.magento.cloud:<project ID>_stg.git`
	*	Production: `git@git.ent.magento.cloud:<project ID>.git`

*	SSH URL format:

	*	Staging: `<project ID>_stg@<project ID>.ent.magento.cloud`
	*	Production: `<project ID>@<project ID>.ent.magento.cloud`

As part of pushing the code, you may need to:

* [Set up remote Git repos](#cloud-live-migrate-git)
* [Set up the SSH agent](#cloud-live-migrate-agent) on environments

After that is set up, you can SSH into the environment and use Git commands to push the branches.

### Set up remote Git repositories {#cloud-live-migrate-git}
When you know your Git URLs, you must set them up as remote upstream repositories so you can push code to them.

Command syntax:

	git remote add <remote repository name> <remote repository URL>

For example,

	git remote add staging git@git.ent.magento.cloud:dr5q6no7mhqip_stg.git
	git remote add prod git@git.ent.magento.cloud:dr5q6no7mhqip.git

### Set up your SSH agent {#cloud-live-migrate-agent}
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

### SSH and pull the Git branch {#git}

1. Open an SSH connection to your Staging or Production environment:

    * Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
    * Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
2. Pull the `master` branch to the server.

        git pull origin master

## You're ready to code! {#code}
When this code is fully deployed to those environments, you can begin development, add extensions, and more!

#### Related topics

* [Cloud Architecture]({{ page.baseurl }}cloud/reference/discover-arch.html)
* [Deploy your store]({{ page.baseurl }}cloud/live/stage-prod-live.html)
* [Deployment workflow]({{ page.baseurl }}cloud/reference/discover-deploy.html)
