---
layout: default
group: cloud
subgroup: 080_setup
title: First steps for importing Magento EE
menu_title: First steps for importing Magento EE
menu_order: 151
menu_node: 
level3_menu_node: level3child
level3_subgroup: import
version: 2.0
github_link: cloud/access-acct/first-time-setup_import-first-steps.md
---
 
This topic discusses the workflow and initial tasks to perform before importing your existing Magento Enterprise Edition (EE) system into Magento Enterprise Cloud Edition project.

## Prerequisites
Before you continue, make sure you have done all of the following:

*   Your existing Magento EE code must be in Git. 

    If not, you must add it to Git before continuing.
*   Complete all of the tasks in your Magento EE system:

    1.  [Install the CLI]({{ page.baseurl }}cloud/before/before-workspace-cli.html)
    2.  [Set up SSH]({{ page.baseurl }}cloud/before/before-workspace-ssh.html)

## Recommended workflow
Following is our recommended workflow:

1.  Create a new, empty Magento Enterprise Cloud Edition [project from a template](#cloud-import-proj).

    This new project has files and directories specific to Magento Enterprise Cloud Edition.
2.  [Replace the contents]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-import.html) of this project with your code using Git.
3.  [Import your Magento database]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-import.html#cloud-import-db) into your Magento Enterprise Cloud Edition project.
4.  [Import your static files]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-import.html#cloud-import-media) into your Magento Enterprise Cloud Edition project.
5.  Copy your Magento EE [encryption key]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-import.html#cloud-import-key) to your Magento Enterprise Cloud Edition project.
6.  Clear the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} and verify the project imported successfully.

## Create a new, empty Magento Enterprise Edition project {#cloud-import-proj}

{% include cloud/new-project-from-template.md %}

#### Next step
[Find the information you need for your import]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-prereq.html)