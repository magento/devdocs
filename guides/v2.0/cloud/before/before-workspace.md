---
layout: default
group: cloud
subgroup: 080_setup
title: Set up a project and dev workspace
menu_title: Set up a project and dev workspace
menu_order: 5
menu_node:
level3_menu_node: level3child
level3_subgroup: workspace
version: 2.0
github_link: cloud/before/before-workspace.md
redirect from:
  -  /guides/v2.0/cloud/access-acct/set-up-env.html
  -  /guides/v2.1/cloud/access-acct/set-up-env.html
  -  /guides/v2.1/cloud/access-acct/set-up-env.html
  - /guides/v2.0/cloud/access-acct/first-time-setup_template.html
  - /guides/v2.1/cloud/access-acct/first-time-setup_template.html
  - /guides/v2.2/cloud/access-acct/first-time-setup_template.html
---

To develop, deploy, and test Magento Enterprise Cloud Edition and your custom code, extensions, and configurations, create a  project and setup your local workspace. The project is a Git repository with branches you develop and merge to the master for deployment across your cloud environments. A local workspace provides a system to clone branches from the master, develop code, and add extensions. This code is pushed for active testing in an Integration environment, merged to the master branch, then deployed to Staging and finally Production.

This section walks through the steps for first time merchants with Magento, Magento SIs, and existing Magento merchants moving to the cloud. If you have already completed some of these steps, make sure to review the expected results to continue to the next. Some configurations and workflows differ for Magento Enterprise Cloud Edition than a typical Enterprise Edition installation.

## Set up an account {#newaccount}
To begin working with a project and develop your store, you should have received an e-mail invitation to [create a Mangento Enterprise Cloud Edition account](https://accounts.magento.cloud){:target="_blank"}. The account provides access to your project for Magento development and deployment across all supported environments.

You should receive an e-mail invitation to verify and access the project. If you don't see the invitation, check your junk e-mail folder. Click the **Verify my account** option in the email to verify and access your project account.

When logged in, you should see a project named and ready to access.

If the project name is **[UntitledProject]**, a Super User admin or the account owner needs to create the project. Only one of these users can create the project. For instructions, the project administrator or account owner should see [Create the Project]({{ page.baseurl }}cloud/before/cloud/before/before-project-owner.html#create-project).

![Project owner needs to create the project]({{ site.baseurl }}common/images/cloud_project_new.png){:width="440px"}

## Magento specific tools
When working on your local, you will be accessing the [Magento Cloud CLI]({{ page.baseurl }}cloud/reference/cli-ref-topic.html) for issuing commands and the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}. We recommend specific tools for issuing commands.

You need to set up the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %} on your local so files and directories you created are owned by that user. For an overview of the file system owner, see [Overview of ownership and permissions]({{ page.baseurl }}install-gde/prereq/file-sys-perms-over.html).

## Recommended tools
This guide assumes you're working on a UNIX system or in a UNIX shell environment. Feel free to use any CLI tools of choice for issuing commands. For Windows users, we recommend a UNIX environment like [Cygwin](https://www.cygwin.com/){:target="_blank"}, [Putty](http://www.putty.org/), or Git Bash.

For development on your local, use any development environment or tools easiest to use. For recommendations, many Magento developers use tools including [WebStorm](https://www.jetbrains.com/webstorm/), [PHPStorm](https://www.jetbrains.com/phpstorm/), and Atom.

Developing code for Magento Enterprise Cloud Edition requires working in Git branches. Not everyone remembers [Git](https://git-scm.com/docs) commands with ease. If you want a Git client, use any client of your choice. Some developers use clients including [GitKraken](https://www.gitkraken.com/) and [SmartGit](https://www.syntevo.com/smartgit/).

## Prerequisites
You need a fully set up Magento Enterprise Cloud Edition account to begin developing and launch your store on the Magento cloud. Have the following prepared to complete your initial workspace and project setup:

 * Magento Enterprise Cloud Edition account with an added user account
 * [Magento authentication keys]({{ page.baseurl }}install-gde/prereq/connect-auth.html) from Magento Marketplace

## Get started
You should be ready to go! The following sections provide a link to the previous step, instructions, and a link to the next step to start developing:

* Install all prerequisite software and tools on your host system (laptop, desktop, etc) and local workspace (VM)
* Install Magento Cloud CLI
* Set up SSH keys
* Configure the Magento file system owner
* Clone the project, create a branch
* Set up Magento authentication keys (encryption keys)
* Install Magento
* Complete configurations and file/folder permissions
* Verify install, branches, and get to coding!


#### Next step
[Install Magento prerequisites]({{ page.baseurl }}cloud/before/before-workspace-magento-prereqs.html)

#### Related topics
[Deployment process]({{ page.baseurl }}cloud/reference/discover-deploy.html)
