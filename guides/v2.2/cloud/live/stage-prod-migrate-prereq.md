---
group: cloud-guide
subgroup: 160_deploy
title: Prepare to deploy to Staging and Production
menu_title: Prepare to deploy to Staging and Production
menu_order: 40
menu_node:
functional_areas:
  - Cloud
  - Configuration
  - Deploy
---

#### Previous step:
[Build and deploy on local]({{ page.baseurl }}/cloud/live/live-sanity-check.html)

When you are ready to deploy your store, you need to complete deployment and testing in Staging first, then deploy to Production. The Staging environment provides a near-production environment with full services (including Fastly, New Relic, and Blackfire), database, web server, and more.

This information is broken down into prerequisite steps for [Starter](#starter) and [Pro](#pro) projects.

## Starter plan projects {#starter}

For Starter, merge all code into one "staging" branch for testing prior to deploying to Production. All active branches and environments are part of the PaaS infrastructure and have access to information, such as store URLs and SSH link.

You can deploy to your environments, including all YAML configuration files, migrate files and data, all through CLI commands using SSH.

To prepare your environments for full deployment, you need:

1. Get your [access URLs and SSH](#starter-urls) information.
2. Set up your [SSH agent](#ssh-agent) for easier file and data migration.

### Get your Starter access URLs and SSH information {#starter-urls}

You can locate your URLs through the Project Web Interface. For each selected environment or branch, you have an Access Site link. Your environments begin with Master, which is Production, and any additional branches you create, including Staging (recommended) and development branches for custom code.

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud).
2. Select an environment.
3. Click **Access site** to display the URL and SSH information.

	![Access your project]({{ site.baseurl }}/common/images/cloud_project-access-starter.png)

## Pro plan projects {#pro}

For Pro plan projects, you must merge your completed development code to the `integration` branch. Only the Integration environment branch can deploy to Staging, then Production.

{% include cloud/wings-management.md %}

For **first time setup** to migrate your database and deploy code to Staging or Production, you will:

1.	Create a support ticket to [migrate deployment hooks](#pro-yaml). In this ticket, include your public SSH keys to add to Staging and Production.
2.	Get your [access URLs and SSH](#pro-urls) for Staging and Production.
4.	Set up your [SSH agent](#ssh-agent) for Staging and Production.

If your project was created before October 23, 2017, you also need to set up [remote Git repositories](#pro-remote) on Staging and Production. Deployment targets are already set up on Staging and Production for projects created after October 23, 2017.

If you have not done so already, upload any [Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets) in your Integration environment `master` Magento Admin panel. Fastly is available in Staging and Production.

### Migrate your `.magento.app.yaml` file {#pro-yaml}

**Important:** If you have **not modified** the default deployment hooks or configurations, skip this step and continue with [Get your Pro access URLs](#pro-urls). Only migrate the file if you modified the deployment hooks or added configuration updates.

{% include cloud/hooks.md %}

### Get your Pro access URLs  {#pro-urls}

For Pro projects created **after October 23, 2017**, you can locate your URLs through the Project Web Interface. For each selected environment or branch, you will find an Access Site link.

![Access your project]({{ site.baseurl }}/common/images/cloud_project-access.png)

For Pro projects created **before October 23, 2017**, you would need to access the information we provided when creating your account. This information is typically provided in a OneDrive onboarding document that contains your Git, SSH, and project URLs for Staging and Production. You'll use this information for accessing the environments.

*	Git URL format:

	*	Staging: `git@git.ent.magento.cloud:<project ID>_stg.git`
	*	Production: `git@git.ent.magento.cloud:<project ID>.git`

*	SSH URL format:

	*	Staging: `<project ID>_stg@<project ID>.ent.magento.cloud`
	*	Production: `<project ID>@<project ID>.ent.magento.cloud`

*	Web URL format:

	*	Staging: `http[s]://staging.<your domain>.c.<project ID>.ent.magento.cloud`
	*	Production: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`

### Set up Pro remote Git repositories {#pro-remote}

For Pro projects created **after October 23, 2017**, you do not need to complete this step. Your Staging and Production environments are branches of `master` with configured deployment targets. You can simply merge code to these environments from Integration `master`. You can also use the Project Web Interface to merge your code without SSH or Git commands.

For Pro projects created **before October 23, 2017**, you need to initially set up remote Git repositories for Staging and Production. For these classic Pro accounts, your Staging and Production environments have dedicated Git repositories. You only need to set these up once.

When you know your Git URLs, you need to set them up as remote upstream repositories so you can push code to them. Basically, you configure these remote repositories using these instructions to SSH into the environments and push code and migrate data and files using Git commands.

Using a terminal connection, enter Git commands to add the remote repositories.

The Git command syntax is:

	git remote add <remote repository name> <remote repository URL>

The following commands are examples for setting up remotes on Staging and Production:

	git remote add staging git@git.ent.magento.cloud:dr5q6no7mhqip_stg.git
	git remote add prod git@git.ent.magento.cloud:dr5q6no7mhqip.git

## Set up your SSH agent and add the SSH key {#ssh-agent}

You only need to set up your SSH agent on these servers once. SSH agent helps contain is a background program that handles passwords for your SSH private keys.

**How it works!** After you configure the agent and settings, you can migrate files easier using SSH or `scp` between servers. The SSH agent forwards authentication requests from Staging or Production environments to your local with a working Magento system, helping you connect using your local private SSH key. After you push your Git code, you can SSH into Staging and Production and update code, data, and files with this set up.

You can use any terminal client you prefer for SSH access, or see our [Recommended tools]({{ page.baseurl }}/cloud/before/before-workspace.html#recommended-tools). For these examples, we use the OpenSSH client.

To set up an SSH agent:

1.	In a terminal client, log in to your local system.
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

For more information on setting up SSH, see [Enable SSH keys]({{ page.baseurl }}/cloud/before/before-workspace-ssh.html) as part of your local setup. For Starter and Pro projects, you can add your SSH public key to all Integration, Staging and Production environments.

If you have a Pro project created **before October 23, 2017**, you need to enter a ticket with your public key to have it added to Staging and Production.

#### Next step
[Migrate and deploy]({{ page.baseurl }}/cloud/live/stage-prod-migrate.html)
