---
layout: default
group: cloud
subgroup: 07_project
title: Get started with a project
menu_title: Get started with a project
menu_order: 2
menu_node: 
github_link21: cloud/project/project-start.md
---

## Get started with a project {#cloud-proj-start}
This topic shows how to get started working on a project.

## Command summary {#cloud-proj-start-summ}
The following commands can be run from any directory. However, it's simpler to run them from a project directory. If so, you can omit the `-p <project ID>` parameter.

All commands are shown with required options only. Get help for any command by appending `--help`.

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

## Delete a project {#project-delete}
Before you delete a project, make sure you don't need it anymore. You cannot recover a deleted project later.

You must be a [project administrator]({{ site.gdeurl21 }}cloud/admin/admin-user-admin.html#cloud-role-project) or [account owner]({{ site.gdeurl21 }}cloud/admin/admin-user-admin.html#cloud-role-acct-owner) to perform this task.

To delete a project using the command line:

1.	List the projects:

		magento-cloud project:list
2.	Delete the project using its project ID:

		magento-cloud project:delete -p <project ID>
3.	You are required to confirm the deletion.
	
#### Related topics
*	[Get started with an environment]({{ site.gdeurl21 }}cloud/env/environments-start.html)
*	[`.magento.app.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_services.html)

