---
layout: default
group: cloud
subgroup: 080_setup
title: Set up a project and dev workspace
menu_title: Set up a project and dev workspace
menu_order: 5
menu_node:
version: 2.0
github_link: cloud/before/before-workspace.md
---

To develop, deploy, and test Magento Magento Enterprise Cloud Edition (ECE) and your custom code, extensions, and configurations, create a  project and setup your local workspace. The project is a Git repository of code managed in GitHub, with branches you develop and merge to the master for deployment across your cloud environments. A local workspace provides a system to clone branches from the master, develop code, and add extensions. This code is pushed for active testing in an Integration environment, merged to the master branch, then deployed to Staging and finally Production.

This section walks through the steps for first time merchants with Magento, Magento SIs, and existing Mageneto merchants moving to the cloud. If you have already completed some of these steps, make sure to review the expected results to continue to the next. Some configurations and workflows differ for Magento Enterprise Cloud Edition than a typical Enterprise Edition installation.

## Magento specific tools

When working on your local, you will be accessing the [Magento ECE CLI]({{ page.baseurl }}cloud/reference/cli-ref-topic.html) for issuing commands and the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}. We recommend specific tools for issuing commands.

You need to set up the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %} on your local so files and directories you created are owned by that user. For an overview of the file system owner, see [Overview of ownership and permissions]({{ page.baseurl }}install-gde/prereq/file-sys-perms-over.html)

## Recommended tools
This guide assumes you're working on a UNIX system or in a UNIX shell environment. Feel free to use any CLI tools of choice for issuing commands. For Windows users, we recommend a UNIX environment like [Cygwin](https://www.cygwin.com/){:target="_blank"}, [Putty](http://www.putty.org/), or Git Bash.

For development on your local, use any development environment or tools easiest to use. For recommendations, many Magento developers use tools including [WebStorm](https://www.jetbrains.com/webstorm/), [PHPStorm](https://www.jetbrains.com/phpstorm/), and Atom.

Developing code for Magento ECE requires working in Git branches. Your source code repositores will be hosted through GitHub. Not everyone remembers Git commands with ease. If you want a Git client, use any client of your choice. Some developers use clients including [GitKraken](https://www.gitkraken.com/) and [SmartGit](https://www.syntevo.com/smartgit/).

## Prerequisites

You need a fully set up Magento Enterprise Cloud Edition account to begin developing and launch your store on the Magento cloud. Have the following prepared to complete your initial workspace and project setup:

 * Magento ECE account with an added user account (no need to have a project created yet)
 * Magento authentication keys

## Get started
You should be ready to go! The following sections provide a link to the previous step, instructions, and a link to the next step to start developing:

* Set up the Magento ECE account and initial project (generates your master branch)
* Install all prerequisite software and tools on your local workspace
* Install Magento ECE CLI
* Set up SSH keys
* Configure the Magento file system owner
* Clone the project, create a branch
* Set up Magento authentication keys (encryption keys)
* Install Magento
* Complete configurations and file/folder permissions
* Verify install, branches, and get to coding!


#### Next step
[Set up an account and create a project]({{ page.baseurl }}cloud/before/before-workspace-cloud-account.html)

#### Related topics
[Deployment process]({{ page.baseurl }}cloud/reference/discover-deploy.html)
