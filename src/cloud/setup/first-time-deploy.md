---
group: cloud-guide
title: First time deployment
redirect_from:
  - /cloud/access-acct/first-time-deploy.html
functional_areas:
  - Cloud
  - Setup
  - Deploy
---

{:.ref-header}
Previous step

[Install Magento]({{ site.baseurl }}/cloud/before/before-setup-env-install.html)

 {:.bs-callout-info}
You only need to complete this step one time for a new **Pro project**. This code is already on `master` for the Starter project. As a best practice, you need to have the template {{site.data.var.ee}} project (or `master` branch) fully deployed across all environments to ensure all future code pushes correctly deploy.

After fully setting up your local workspace, for **Pro** you should have the cloned Integration `master` branch on your local. To finish your initial setup, we **strongly recommend fully deploying** `master` branch to Staging and Production environments. You only need to push this branch from Integration to Staging and Production once without any changes. This fully installs the base {{site.data.var.ee}} application into those environments.

This initial push provides the following benefits:

*  Fully installs Magento in each environment
*  Allows the build/deploy scripts to use the `setup:upgrade` command instead of `setup:install` (important for adding extensions)
*  Pushes the Magento encryption key across all environments
*  Protects against errors and failures when installing with added modules and extensions

  Not all extensions are correctly tested with the setup:install command and application modes. If you initially install Magento code with added 3rd party extensions or custom code, you may receive errors and build/deploy failures. By deploying the unmodified Magento template, all future deployments to Staging and Production typically do not encounter installation issues from 3rd party and custom code.

## Prerequisites {#prereqs}

To deploy, you need the following:

*  A project with an unmodified {{site.data.var.ee}} template `master` branch (projects created using the import option may encounter issues)
*  Staging and Production environments provisioned
*  SSH access to Staging and Production environments

## Enter a ticket {#ticket}

If you need environments provisioned and SSH access, enter a [Support ticket]({{ site.baseurl }}/cloud/trouble/trouble.html).

To request environment provisioning, you will need to have cleared a payment for the {{site.data.var.ece}} subscription and completed an on-boarding call with Magento.

To receive SSH access, provide public SSH keys in the ticket for the environments. You should receive the SSH URL for these environments in your project information from Magento.

## Deploy to Staging and Production {#deploy}

The Project Web Interface provides full features to create, manage, and deploy code branches in your Integration, Staging, and Production environments for Starter and Pro plans. You can also use SSH and CLI commands to complete these process. Previously for Pro plans, you could only use SSH and CLI commands for Staging and Production.

For the Pro plan, deploy the branch you created to Staging and Production.

1. [Log in](https://accounts.magento.cloud) to your project.
1. Select the branch you created.
1. Select the **Merge** option to deploy to Staging.
1. Select the Staging branch.
1. Select the **Merge** option to deploy to Production.

![Use the merge option to deploy]({{ site.baseurl }}/common/images/cloud/cloud_project-merge.png)

## Deploy using SSH {#ssh}

If you prefer to use CLI for deploying, you will need to configure additional SSH settings and Git remotes to use commands. You can SSH into the Staging and Production environments to push the `master` branch.

You'll need the SSH and Git with your project ID. The formats are as follows:

*  Git URL format:

   *  Staging: `git@git.ent.magento.cloud:<project ID>_stg.git`
   *  Production: `git@git.ent.magento.cloud:<project ID>.git`

*  SSH URL format:

   *  Staging: `<project ID>_stg@<project ID>.ent.magento.cloud`
   *  Production: `<project ID>@<project ID>.ent.magento.cloud`

As part of pushing the code, you may need to:

*  [Set up remote Git repos](#cloud-live-migrate-git)
*  [Set up the SSH agent](#cloud-live-migrate-agent) on environments

After that is set up, you can SSH into the environment and use Git commands to push the branches.

### Set up remote Git repositories {#cloud-live-migrate-git}

When you know your Git URLs, you must set them up as remote upstream repositories so you can push code to them.

Command syntax:

```bash
git remote add <remote repository name> <remote repository URL>
```

For example,

```bash
git remote add staging git@git.ent.magento.cloud:dr5q6no7mhqip_stg.git
```

```bash
git remote add prod git@git.ent.magento.cloud:dr5q6no7mhqip.git
```

### Set up your SSH agent {#cloud-live-migrate-agent}

You can use any SSH client you prefer or see our [Recommended tools]({{ site.baseurl }}/cloud/before/before-workspace.html#recommended-tools). For these examples, we use the OpenSSH client.

The SSH agent forwards authentication requests from Staging or Production to your working Magento system (that is, your local workspace). An SSH agent enables you to log in to remote servers from the staging or production host using a local private SSH key. With a working SSH agent, you can easily copy files directly between the staging or production host and integration, or from another remote server.

To set up an SSH agent:

1. Log in to local development machine.
1. Enter the following command:

   ```bash
   ssh-add -l
   ```

   One of the following messages displays:

   *  Working SSH agent: `2048 ab:de:56:94:e3:1e:71:c3:4f:df:e1:62:8d:29:a5:c0 /home/magento_user/.ssh/id_rsa (RSA)`

      Skip the next step and continue with step 4.

   *  SSH agent not started: `Could not open a connection to your authentication agent.`

      Continue with step 3.

1. To start the SSH agent, enter the following command:

   ```bash
   eval $(ssh-agent -s)
   ```

   The agent's process ID (PID) displays.

1. Add your SSH key to the agent:

   ```bash
   ssh-add ~/.ssh/id_rsa
   ```

   A message similar to the following displays:

   ```terminal
   Identity added: /home/magento_user/.ssh/id_rsa (/home/magento_user/.ssh/id_rsa)
   ```

For more information on setting up SSH, see [Enable SSH keys]({{ site.baseurl }}/cloud/before/before-workspace-ssh.html) as part of your local setup.

### SSH and pull the Git branch {#git}

1. Open an SSH connection to your Staging or Production environment:

   *  Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
   *  Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`

1. Pull the `master` branch to the server.

   ```bash
   git pull origin master
   ```

## You're ready to code! {#code}

When this code is fully deployed to those environments, you can begin development, add extensions, and more!
