---
layout: default
group: cloud
subgroup: 10_project
title: Pull code from a private Git repository
menu_title: Pull code from a private Git repository
menu_order: 600
menu_node: 
version: 2.0
github_link: cloud/project/project-priv-repos.md
---

## Pull code from a private Git repository
Your Magento Enterprise Cloud Edition project can include code located in a private Git repository (for example, a module or theme). To do so, you must add your project's public SSH key to your private Git repository and update your project's `composer.json`.

<div class="bs-callout bs-callout-info" id="info">
  <p>To add a deployment key to your private GitHub or Bitbucket repository, you must be the administrator of that repository.</p>
</div>

GitHub and Bitbucket allow you to use a deploy key for one repository only. 

If your project needs to access multiple repositories, you can choose to
attach an SSH key to an automated user account. Because this account won't
be used by a human, it's referred to as a [*machine user*](https://developer.github.com/guides/managing-deploy-keys/){:target="_blank"}. You can then add the
machine account as collaborator or add the machine user to a team with
access to the repositories it needs to manipulate.

### Find your deploy key
To find your project SSH public key (also referred to as a *deploy key*):

1.	Log in to your project using the Web Interface.
2.	Click **Configure Project**.
3.	Click **Deploy Key**.

	The following figure shows an example.

	![Deploy Key]({{ site.baseurl}}common/images/cloud_deploy-key.png){:width="500px"}

4.	Copy the deploy key to the clipboard.
5.	See one of the following sections:

	*	[Enter your GitHub deploy key](#cloud-deploykey-github)
	*	[Enter your Bitbucket deployment key](#cloud-deploykey-bb)

### Enter your GitHub deploy key {#cloud-deploykey-github}
By default, on github, deploy keys are read-only,
so you do not need to worry about anything from your Magento project pushing code to the private
repository.

To enter your project's public key as a GitHub deploy key:

1.	Log in to your GitHub repository as its administrator.
2.	Click **Settings** as the following figure shows.

	![GitHub settings]({{ site.baseurl}}common/images/cloud_gh-settings.png){:width="650px"}

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If you don't see this option, you're not the repository administrator and you cannot complete this task. Ask your GitHub project administrator to do this.</p>
	</div>

3.	On the Settings page, in the left navigation bar, click **Deploy Keys** as the following figure shows.

	![GitHub deploy key]({{ site.baseurl}}common/images/cloud_gh-deploy-key.png){:width="200px"}

4.	Click **Add deploy key**.
5.	Follow the prompts on your screen to complete the task.

### Enter your Bitbucket deployment key {#cloud-deploykey-bb}
To enter your project's public key as a Bitbucket deploy key:

1.	Log in to your Bitbucket repository as its administrator.
2.	In the left navigation bar, click **Settings** as the following figure shows.

	![Bitbucket settings]({{ site.baseurl}}common/images/cloud_bb-settings.png)
3.	Click General > **Deployment Keys** as the following figure shows.

	![Bitbucket deploy key]({{ site.baseurl}}common/images/cloud_bb-deploy-key.png)
4.	Click **Add Key**.
5.	Follow the prompts on your screen to complete the task.

<!-- ## Update `composer.json`
TBD -->

<div class="bs-callout bs-callout-info" id="info">
  <p>In <code>composer.json</code>, use the <code>&lt;user>@&lt;host>:&lt;<path>.git</code> format, or <code>ssh://&lt;user>@&lt;host>:&lt;port>/&lt;path>.git</code> if using a non-standard port.</p>
</div>


