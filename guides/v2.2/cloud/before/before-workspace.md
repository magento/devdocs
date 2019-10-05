---
group: cloud-guide
title: Prepare for local environment setup
redirect_from:
  - /guides/v2.2/cloud/access-acct/first-time-setup_template.html
functional_areas:
  - Cloud
  - Setup
---

To develop, deploy, and test {{site.data.var.ece}}, you need to setup your local environment and clone your project's master Git branch. This local environment provides a development system for your custom code, extensions, and configurations to push for active testing in one of the Integration environments.

This section walks through the steps for first time merchants with Magento, Magento SIs, and existing Magento merchants moving to the cloud. If you already completed some of these steps or have an existing Magento developer environment, review the following for expected results and continue to the next step. Some configurations and workflows differ for {{site.data.var.ee}} than a typical Enterprise Edition installation.

## Set up an account {#newaccount}

To begin working with a project and develop your store, you should have received an e-mail invitation to [create a {{site.data.var.ece}} account](https://accounts.magento.cloud). The account provides access to your project for Magento development and deployment across all supported environments.

You should receive an e-mail invitation to verify and access the project. If you do not see the invitation, check your junk e-mail folder. Click the **Verify my account** option in the email to verify and access your project account.

When logged in, your project should open with a `master` branch to work with.

If your Cloud account has access to multiple projects, you should see a list of projects. Select the specific project you are preparing to access and work on.

## Magento specific tools

When working on your local, you will be accessing the [Magento Cloud CLI]({{ page.baseurl }}/cloud/reference/cli-ref-topic.html) to issue commands and programmatically complete tasks and the [Magento Admin](https://glossary.magento.com/magento-admin) for the store UI and configurations.

You need to set up the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner) on your local to assign that user as the owner for all created files and directories. For more information, see [Overview of ownership and permissions]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

## Recommended tools

This guide assumes you're working on a UNIX system or in a UNIX shell environment. For MAC OS and Linux-based systems, feel free to use any CLI tools of choice for issuing commands. For Windows users, we recommend a UNIX environment like [Cygwin](https://www.cygwin.com/), [Putty](http://www.putty.org/), or Git Bash.

For development on your local, use any development environment or tools you prefer. For recommendations, many Magento developers use tools including [WebStorm](https://www.jetbrains.com/webstorm/), [PhpStorm](https://www.jetbrains.com/phpstorm/), and [Atom](https://atom.io/).

Developing code for {{site.data.var.ee}} requires working in Git branches. Not everyone remembers [Git](https://git-scm.com/docs) commands with ease. If you want a Git client, use any client of your choice. Some developers use clients including [GitKraken](https://www.gitkraken.com/) and [SmartGit](https://www.syntevo.com/smartgit/).

## Prerequisites

Have the following prepared to complete your initial workspace and project setup:

 * {{site.data.var.ece}} account with an added user account
 * Magento authentication keys from Magento Marketplace. If the Project Owner or Technical Lead created the project according to these instructions, the [Magento authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html) should already be installed and available in the auth.json file in the code repository.

## Get started

You should be ready to go! The following sections provide a link to the previous step, instructions, and a link to the next step to start developing:

* Install all prerequisite software and tools on your host system (laptop, desktop, etc) and local workspace (VM)
* Install Magento Cloud CLI
* Set up SSH keys
* Configure the Magento file system owner (optional)
* Clone and branch the project
* Install Magento
* Complete configurations and file/folder permissions
* Verify install, branches, and get to coding!

For Pro projects, you also should deploy across to Staging and Production as part of your set up.

**Next step:**
[Install Magento prerequisites]({{ page.baseurl }}/cloud/before/before-workspace-magento-prereqs.html)
