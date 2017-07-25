---
layout: default
group: cloud
subgroup: 100_project
title: Manage branches
menu_title: Manage branches
menu_order: 23
menu_node:
version: 2.0
github_link: cloud/project/project-webint-branch.md
---

A Magento Enterprise Cloud Edition *environment* is a Git *branch*. You can manage your environments using either the Web Interface, the Magento Enterprise Cloud Edition CLI, or Git commands. Managing branches/environments uses [Git](https://git-scm.com/doc).

For more information about managing environments using the CLI, see [Get started with an environment]({{page.baseurl}}cloud/env/environments-start.html).

This topic discusses how to use the Web Interface to:

*	Add or delete an environment
*	Sync (`git pull`) from the environment's parent
*	Merge (`git push`) to the environment's parent

## Add or delete an environment {#project-branch-add}
To best manage your code development, work in branches created from the project master. Complete development of code and added extensions in a branch and, when complete, merge (`git push`) the branch with its parent or master. Select and use a branching strategy best for your development efforts. For example, you may create a branch for a specific feature (Feature ABC). Multiple developers could create branches from parent branch Feature ABC, merging their work into the parent when complete. This branch can then merge with the project master branch for deployment.

Your account supports up to eight active branches with full environment access for testing and an unlimited number of inactive branches. You manage active and inactive branches by deleting a branch. When deleted, it is deactivated and available from the project branches list. You can either activate the branch later or you can [delete it entirely]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html#tut-env-delete) using the CLI.

To add a branch:

1.	[Log in to your project]({{page.baseurl}}cloud/project/project-webint-basic.html#project-login).
2.	In the left navigation bar, click the name of the parent environment.

	Your new branch is cloned from this environment. Choose a parent environment that is similar to the environment you're about to create.
3.	Click ![Create a branch]({{ site.baseurl }}common/images/cloud_branch-icon.png){:width="30px"}.
4.	In the provided field, enter a branch name. In many cases, the environment name is the same as its ID.

	<div class="bs-callout bs-callout-info" id="info">
   		<p>The environment <em>name</em> is different from the environment <em>ID</em> only if you use spaces or capital letters in the environment name. An environment ID consists of all lowercase letters, numbers, and allowed symbols. Capital letters in an environment name are converted to lowercase in the ID; spaces in an environment name are converted to dashes.</p>
   		<p>An environment name <em>cannot</em> include characters reserved for your Linux shell or for regular expressions. Forbidden characters include curly braces (<code>{ }</code>), parentheses, asterisk (<code>*</code>), angle brackets (<code>&lt; ></code>), ampersand (<code>&</code>), percent (<code>%</code>), and other characters.</p>
 	</div>
5.	Click **Branch**.
6.	Wait while the environment deploys.

	During deployment, its status is **In process**, as the following figure shows.

	![Branch is deploying]({{ site.baseurl }}common/images/cloud_branch-deploy.png)

	After a successful deployment, the status changes to **Success**:

	![Branch is deploying]({{ site.baseurl }}common/images/cloud_branch-success.png)
7.	Continue with one of the following:

	*	[Get started with an environment]({{page.baseurl}}cloud/env/environments-start.html)
	*	[How tos and tutorials]({{ page.baseurl }}cloud/howtos/how-to.html)

To delete an environment and make it inactive:

1.	[Log in to your project]({{page.baseurl}}cloud/project/project-webint-basic.html#project-login).
2.	In the left pane, click the name of the branch to delete.
3.	Click **Configure environment** as the following figure shows.

	![Configure environment]({{ site.baseurl }}common/images/cloud_project-env.png)
4.	Click the **Settings** tab.
5.	Click **Delete** next to the environment's status, as the following figure shows.

	![Delete an environment]({{ site.baseurl }}common/images/cloud_env-delete.png)

	A deleted (that is, inactive) environment displays with its name stricken out as the following figure shows.

	![Delete an environment]({{ site.baseurl }}common/images/cloud_environment-deleted.png)

## Sync from the environment's parent {#project-branch-sync}
Syncing an environment (or branch) is the same as `git pull origin <parent>`. You sync to get updated code from a parent environment.

To sync an environment with its parent:

1.	[Log in to your project]({{page.baseurl}}cloud/project/project-webint-basic.html#project-login).
2.	In the left pane, click the name of the branch you want to sync.
3.	Click ![Sync an environment]({{ site.baseurl }}common/images/cloud_environment-sync.png){:width="30px"} (sync).

	The following prompt displays:

	![Choose what to sync]({{ site.baseurl }}common/images/cloud_environment-sync2.png)
4.	Select the check box next to each item to sync and click **Sync**.


## Merge with the environment's parent {#project-branch-merge}
Merging an environment is the same as `git push origin`. You merge to push updated code from an environment to its parent environment (that is, a Git branch).

To merge an environment with its parent:

1.	[Log in to your project]({{page.baseurl}}cloud/project/project-webint-basic.html#project-login).
2.	In the left pane, click the name of the branch you want to merge.
3.	Click ![Merge an environment]({{ site.baseurl }}common/images/cloud_environment-merge.png){:width="30px"} (merge).
4.	Click **Merge** to confirm the action.

#### Related topics
*	[Basic project information]({{page.baseurl}}cloud/project/project-webint-basic.html)
*	[Project backup and restore (snapshot)]({{page.baseurl}}cloud/project/project-webint-snap.html)
*	[Get started with a project]({{page.baseurl}}cloud/project/project-start.html)
