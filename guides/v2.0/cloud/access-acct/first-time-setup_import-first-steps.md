---
layout: default
group: cloud
subgroup: 080_setup
title: Import existing code into a project
menu_title: Import existing code into a project
menu_order: 151
menu_node:
level3_menu_node: level3child
level3_subgroup: import
version: 2.0
github_link: cloud/access-acct/first-time-setup_import-first-steps.md
functional_areas:
  - Cloud
  - Setup
---

When first creating your {{site.data.var.ece}} project, you may have a choice of a blank template or importing existing code. We highly recommend always starting with a blank template to receive the {{site.data.var.ece}} codebase to build on. You can start adding custom code, extensions and modules, themes, and more in branches from this codebase.

For trial Starter and Pro projects, we automatically provision your project with the latest version of {{site.data.var.ece}}. You do not have an option of creating a project by importing. Not to worry, if you still want to fully import your existing codebase and overwrite the Git `master` branch for your project, these instructions will walk through the process.

All

QUESTION: Should we still document importing an existing if trials and will autoprovision will always put them into the blank template?


If you prefer fully importing your current codebase instead of building on the blank template, you must start with

## Prerequisites for importing code {#prereqs}
Before you continue, make sure you have done all of the following:

Your existing {{site.data.var.ee}} code must be in Git. You need to have a Git account with a repository and your code added to it. If you do not have this set up, we recommend using [GitHub]({{ page.baseurl }}cloud/project/project-integrate-github.html). You must have a Git branch with your code pushed to it before continuing with these instructions.

You should have a fully installed and configured local development environment. For details, follow the instructions for [Local environment setup]({{ page.baseurl }}cloud/access-acct/first-time-setup.html).

## Recommended workflow
Following is our recommended workflow:

1.  Create a new, empty {{site.data.var.ece}} [project from a template](#cloud-import-proj).

    This new project has files and directories specific to {{site.data.var.ece}}.
2.  [Replace the contents]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-import.html) of this project with your code using Git.
3.  [Import your Magento database]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-import.html#cloud-import-db) into your {{site.data.var.ece}} project.
4.  [Import your static files]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-import.html#cloud-import-media) into your {{site.data.var.ece}} project.
5.  Copy your {{site.data.var.ee}} [encryption key]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-import.html#cloud-import-key) to your {{site.data.var.ece}} project.
6.  Clear the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} and verify the project imported successfully.

## Create a new, empty Magento Enterprise Edition project {#cloud-import-proj}

{% include cloud/new-project-from-template.md %}

#### Next step
[Find the information you need for your import]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-prereq.html)
