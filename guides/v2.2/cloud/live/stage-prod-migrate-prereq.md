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

When you are ready to deploy your store, you must complete deployment and testing on Staging first, before you deploy to Production. The Staging environment provides a near-production environment with full services (including Fastly, New Relic, and Blackfire), database, web server, and more.

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
1. Select an environment.
1. Click **Access site** to display the URL and SSH information.

   ![Access your project]({{ site.baseurl }}/common/images/cloud/cloud-starter-project-access.png)
   {:width="550px"}

## Pro plan projects {#pro}

For Pro plan projects, you must merge your completed development code to the `Integration` branch. Only the Integration environment branch can deploy to Staging, then Production.

For **first time setup** to migrate your database and deploy code to Staging or Production, you will:

1. Create a support ticket to [migrate deployment hooks](#pro-yaml). In this ticket, include your public SSH keys to add to Staging and Production.
1. Get your [access URLs and SSH](#pro-urls) for Staging and Production.
1. Set up your [SSH agent](#ssh-agent) for Staging and Production.

If you have not done so already, upload any [Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets) in your Integration environment `master` Magento Admin panel. Fastly is available in Staging and Production.

### Migrate your `.magento.app.yaml` file {#pro-yaml}

{:.bs-callout-important}
If you have **not modified** the default deployment hooks or configurations, skip this step and continue with [Get your Pro access URLs](#pro-urls). Only migrate the file if you modified the deployment hooks or added configuration updates.

{% include cloud/hooks.md %}

### Get your Pro access URLs  {#pro-urls}

You can locate your URLs through the Project Web Interface. For each selected environment or branch, you will find an Access Site link.

![Access your project]({{ site.baseurl }}/common/images/cloud/cloud-pro-project-access.png)
 {:width="550px"}

- Git URL format:

  - Staging: `git@git.<region>.magento.cloud:<project ID>_staging.git`
  - Production: `git@git.<region>.magento.cloud:<project ID>.git`

- SSH access:

  - Staging: `ssh <node>.ent-<project ID>-staging-<system ID>@ssh.<region>.magento.cloud`
  - Production: `ssh <node>.ent-<project ID>-production-<system ID>@ssh.<region>.magento.cloud`

- Web URL format:

  - Staging: `http[s]://<your domain>.c.staging-<project ID>.ent.magento.cloud`
  - Production: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`

## Set up an SSH agent and add the SSH key {#ssh-agent}

You only need to set up the SSH agent on these servers once. The SSH agent is a background program that handles passwords for your SSH private keys.

**How it works!** After you configure the agent and settings, you can migrate files between servers using SSH and the `scp` (secure copy) command. The SSH agent forwards authentication requests from Staging or Production environments to your local with a working Magento system, so you can connect using your local private SSH key. After you use Git to push code, you can use SSH to connect to the Staging and Production environments to update code, data, and files.

You can use any terminal client you prefer for SSH access, or see our [Recommended tools]({{ page.baseurl }}/cloud/before/before-workspace.html#recommended-tools). For these examples, we use the OpenSSH client.

To set up an SSH agent:

1. In a terminal client, log in to your local system.

1. Enter the following command to check if the SSH agent is running and list fingerprints of all identities currently represented by the agent:

   ```terminal
   ssh-add -l
   ```

   One of the following messages displays:

   - Displays a working and running SSH agent: `2048 ab:de:56:94:e3:1e:71:c3:4f:df:e1:62:8d:29:a5:c0 /home/magento_user/.ssh/id_rsa (RSA)`

     Skip to step 4.

   - The SSH agent has not started: `Could not open a connection to your authentication agent.`

     Continue with step 3.

1. To start the SSH agent, enter the following command:
  
   ```terminal
   eval $(ssh-agent -s)
   ```

  The agent starts and displays the process ID (PID).

1. Add your public SSH key to the agent to SSH into environments and complete Git commands. This is the same SSH key you provided in a ticket for access to Staging and Production.

   ```terminal
   ssh-add ~/.ssh/id_rsa
   ```

   A message similar to the following displays:

   ```terminal
   Identity added: /home/magento_user/.ssh/id_rsa (/home/magento_user/.ssh/id_rsa)
   ```
   {: .no-copy}

For more information on setting up SSH, see [Enable SSH keys]({{ page.baseurl }}/cloud/before/before-workspace-ssh.html) as part of your local setup. For Starter and Pro projects, you can add your SSH public key to all Integration, Staging and Production environments.

#### Next step

[Migrate and deploy]({{ page.baseurl }}/cloud/live/stage-prod-migrate.html)
