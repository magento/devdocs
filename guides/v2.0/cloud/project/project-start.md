---
layout: default
group: cloud
subgroup: 10_project
title: Get started with a project
menu_title: Get started with a project
menu_order: 2
menu_node: 
version: 2.0
github_link: cloud/project/project-start.md
---

## Get started with a project {#cloud-proj-start}
This topic shows how to get started working on a project.

## Command summary {#cloud-proj-start-summ}
The following commands can be run from any directory. However, it's simpler to run them from a project directory. If so, you can omit the `-p <project ID>` parameter.

All commands are shown with required options only. Get help for any `magento-cloud` command by appending `--help`.

`git commit --allow-empty -m "redeploy" && git push <branch name>`
:  Push an empty commit to force a redeployment. Some actions, like adding a user for example, don't result in deployment.

`magento-cloud login`
:	Log in to the project

`magento-cloud project:list`
:	List project IDs

`magento-cloud environment:list -p <project ID>`
:	List the environments in the current project (that is, the project that corresponds to the directory in which you run the command).

`magento-cloud project:get <project ID> <directory> -e <environment ID>`
:	Clone a project to a directory. To clone the `master` environment, omit `-e <environment ID>`.

`magento-cloud project:info -p <project ID>`
:	List information about the project, including ID, name, region, URL, and Git URL.

#### Related topics
*	[Get started with an environment]({{page.baseurl}}cloud/env/environments-start.html)
*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)

