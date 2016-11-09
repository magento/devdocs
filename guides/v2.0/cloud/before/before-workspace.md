---
layout: default
group: cloud
subgroup: 08_setup
title: Overview of a Magento workspace
menu_title: Overview of a Magento workspace
menu_order: 6
menu_node: 
level3_menu_node: level3child
level3_subgroup: workspace
version: 2.0
github_link: cloud/before/before-workspace.md
---

#### Contents
*	[Overview of a Magento workspace](#cloud-first-workspace)
*	[Step 1, Set up an account]({{ page.baseurl }}cloud/before/before-workspace-cloud-account.html)
*	[Step 2, Set up the Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html)
*	[Step 3, Install the CLI]({{ page.baseurl }}cloud/before/before-workspace-cli.html)
*	[Step 4, Set up SSH]({{ page.baseurl }}cloud/before/before-workspace-ssh.html)
*	[Step 5, Set up PHP and MySQL]({{ page.baseurl }}cloud/before/before-workspace-php.html)

## Overview of a Magento workspace {#cloud-first-workspace}
The following sections discuss your options for setting up a Magento Enterprise Cloud Edition project.

We assume you'll install the Magento software so you can use the command line and the Magento Admin on your laptop. That means you must set up the [Magento file system owner]({{ page.baseurl }}install-gde/prereq/file-sys-perms-over.html) on your laptop so files and directories you created are owned by that user.

To be able to manage your projects, environments, and services, you must set up the Magento Enterprise Cloud Edition command-line interface (CLI) and Secure Shell (SSH). These tools enable you to perform tasks like:

*	Work on a local branch
*	Branch and merge in your project
*	Push changes to the parent branch
*	Pull changes from the parent branch

This guide assumes you're working on a UNIX system or in a UNIX shell environment. On Windows, you can use a UNIX environment like Cygwin or you can use Putty. The tool you use is up to you.

#### Next step
[Set up the Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html)


