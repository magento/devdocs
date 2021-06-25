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

{:.ref-header}
Previous step

[Build and deploy on local]({{ site.baseurl }}/cloud/live/live-sanity-check.html)

When you are ready to deploy your store, you must complete deployment and testing on the Staging environment before deploying to Production. The Staging environment provides a near-production environment that includes a database, web server, and all services including Fastly and New Relic.

The following information provides the prerequisites to deploy {{ site.data.var.ee }} [Starter](#starter) and [Pro](#pro) projects to the Cloud platform.

## Starter plan projects {#starter}

For Starter, merge all code into a "staging" branch for testing prior to deploying to Production. All active branches and environments are part of the PaaS infrastructure and have access to information, such as store URLs and SSH link.

You can deploy to Starter environments from the Project Web Interface or using CLI commands.

**Prerequisites:**

1. Get your [access URLs and SSH](#starter-urls) information.
1. [Add your public SSH key](#add-public-ssh-key) to your project.

### Get your Starter access URLs and SSH information {#starter-urls}

You can find URLs and SSH connection information from the Project Web Interface. For each selected environment or branch, you have an Access Site link. Your initial project is provisioned with a `Master` environment, which is Production, and any additional branches you create, including Staging (recommended) and development branches for custom code.

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud).

1. Select an environment.

1. Click **Access site** to display the URL and SSH information.

    ![Access your project]({{ site.baseurl }}/common/images/cloud/cloud-starter-project-access.png)
   {:width="500px"}

## Pro plan projects {#pro}

For Pro plan projects, you must merge your completed development code to the `Integration` branch. Only the Integration environment branch can deploy to Staging, then Production.

For **first time setup** to migrate your database and deploy code to Staging or Production, complete the following steps:

1. Create a support ticket to [migrate deployment hooks](#pro-yaml). In this ticket, include your public SSH keys to add to Staging and Production.

1. Get your [access URLs and SSH](#pro-urls) for Staging and Production.

1. [Add your public SSH key](#add-public-ssh-key) to your {{ site.data.var.ece }} project environments.

If you have not done so already, set up [Fastly CDN services]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html) on your Staging and Production environments. See [Fastly set up]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets).

### Migrate your `.magento.app.yaml` file {#pro-yaml}

{:.bs-callout-warning}
If you have **not modified** the default deployment hooks or configurations, skip this step and continue with [Get your Pro access URLs](#pro-urls). Only migrate the file if you modified the deployment hooks or added configuration updates.

{% include cloud/hooks.md %}

### Get your Pro access URLs  {#pro-urls}

You can locate your URLs through the Project Web Interface. There is an _Access Site_ link for each active environment.

![Access your project]({{ site.baseurl }}/common/images/cloud/cloud-pro-project-access.png)
 {:width="550px"}

-  Git URL format:

   -  Staging: `git@git.<region>.magento.cloud:<project ID>_staging.git`
   -  Production: `git@git.<region>.magento.cloud:<project ID>.git`

-  SSH access:

   -  Staging: `ssh <node>.ent-<project ID>-staging-<system ID>@ssh.<region>.magento.cloud`
   -  Production: `ssh <node>.ent-<project ID>-production-<system ID>@ssh.<region>.magento.cloud`

-  Web URL format:

   -  Staging: `http[s]://<your domain>.c.staging-<project ID>.ent.magento.cloud`
   -  Production: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`

{%include cloud/cloud-fastly-prereqs-custom-vcl.md%}

### Add SSH key to project environments {#add-public-ssh-key}

Add your SSH public key to {{ site.data.var.ece }} environments:

-  Starter–Add to Master (Production) and any environments you create by branching from Master
-  Pro–Add to the Master Integration, Staging, and Production environments

{:.procedure}
To add an SSH key using the Project Web Interface:

1. Copy your SSH public key to the clipboard.

    If you do not already have SSH keys on that machine, see the [GitHub documentation](https://help.github.com/articles/generating-an-ssh-key) to create them.

1. Login and access your project through the [Project Web Interface](https://accounts.magento.cloud).

1. In your selected branch, an icon displays if you do not have an SSH key added.

    ![No SSH key]({{ site.baseurl }}/common/images/cloud/cloud_ssh-key-install.png)

1. Copy and paste the content of your public SSH key in the screen.

    ![Add SSH key]({{ site.baseurl }}/common/images/cloud/cloud_ssh-key-add.png)

1. Follow the prompts on your screen to complete the task.

You can also add an SSH key using the {{site.data.var.ece}} CLI. See [Add an SSH key using the CLI]({{ site.baseurl }}/cloud/before/before-workspace-ssh.html#add-key-cli).

{:.ref-header}
Next step

[Migrate and deploy]({{ site.baseurl }}/cloud/live/stage-prod-migrate.html)
