---
layout: default
group: cloud
subgroup: 15_howto
title: Merge and delete an environment
menu_title: Merge and delete an environment
menu_order: 12
menu_node: 
level3_menu_node: level3child
level3_subgroup: env-tut
version: 2.0
github_link: cloud/howtos/environment-tutorial-env-merge.md
redirect_from: 
  - guides/v2.0/cloud/env/environment-tutorial-env-merge.html
  - guides/v2.1/cloud/env/environment-tutorial-env-merge.html
---

#### Contents
*	[Merge an environment](#tut-env-merge)
*	[Optionally delete the environment](#tut-env-delete)

## Merge an environment {#tut-env-merge}
This tutorial shows how to merge changes from an environment to its parent, which in this case is the master branch. You can, for example, merge code updates, new components, changes to themes, and so on.

You can then optionally delete the environment.

This tutorial shows how to create a sample file and merge it. This tutorial assumes you're already working in an environment; if not, see [Get started with an environment]({{page.baseurl}}cloud/env/environments-start.html#env-start-comm) to create one.

<div class="bs-callout bs-callout-info" id="info">
  <p>You <em>cannot</em> merge environment variables because they are not code. You must set the value of environment variables in an environment.</p>
</div>

### Get started
To get started:

{% include cloud/cli-get-started.md %}

### Merge an environment
To merge an environment:

1.	Add a file named `test.txt` to the environment root directory.

	You can put whatever contents you want; for example, the number `1`
7.	Save your changes and exit the text editor.
8.	Add, commit, and push your change to the environment:

		git add -A
		git commit -m "<commit message>"
		git push origin <branch name>

	Where `<branch name>` is the Git name of the environment (that is, the environment ID).

9.	Merge with the parent environment:

		magento-cloud environment:merge <environment ID>

	For example,

		magento-cloud environment:merge master

## Optionally delete the environment {#tut-env-delete}
Before you delete an environment, make sure you don't need it anymore. You cannot recover a deleted environment later.

<div class="bs-callout bs-callout-info" id="info">
  <p>You cannot delete the <code>master</code> environment of any project.</p>
</div>

You must be a [project administrator]({{page.baseurl}}cloud/admin/admin-user-admin.html#cloud-role-project), [environment administrator]({{page.baseurl}}cloud/admin/admin-user-admin.html#cloud-role-env), or [account owner]({{page.baseurl}}cloud/admin/admin-user-admin.html#cloud-role-acct-owner) to perform this task.

This section discusses how to optionally delete an environment in the following ways:

*	Make the environment *inactive* but let it remain in the project
*	Delete the environment entirely and remove it from the project

To delete a environment:

1.	Log in to your project if you haven't already done so.
2.	Fetch branches from the origin server.

		git fetch origin
2.	To delete the branch entirely (removing it from the project), check out the branch.

		magento-cloud environment:checkout <environment ID>
2.	Delete the environment:

		magento-cloud environment:delete <environment ID>

	For example, to delete the `deleteme` environment:

		magento-cloud environment:delete deleteme

	To delete more than one environment:

		magento-cloud environment:delete <environment ID> <environmentID>

	For additional options, see the command-line help:

		magento-cloud environment:delete --help

3.	Answer the prompt:

		Are you sure you want to delete the remote Git branch deleteme? [Y/n]

	A `Y` answer makes the branch inactive but leaves it in the project.
5.	Answer the prompt:

		Delete the remote Git branch too? [Y/n]

	A `Y` answer completely removes the branch from the project.
		
Wait for the environment to delete.

<div class="bs-callout bs-callout-info" id="info">
  <p>To activate the environment later, use the <code>magento-cloud environment:activate</code> command.</p>
</div>

#### Related topic
[Set Magento environment variables]({{page.baseurl}}cloud/howtos/environment-tutorial-set-mage-vars.html)
