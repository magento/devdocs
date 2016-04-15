---
layout: default
group: cloud
subgroup: 07_project
title: GitHub integration
menu_title: GitHub integration
menu_order: 110
menu_node: 
level3_menu_node: level3child
level3_subgroup: integrate
github_link: cloud/project/project-integrate-github.md
---

<!-- https://docs.platform.sh/user_guide/using/integrations/github.html -->

#### Contents
*	[About the GitHub integration](#cloud-int-gh-about) 
*	[Generate a GitHub token](#cloud-int-gh-token)
*	[Enable the GitHub integration](#cloud-int-gh-enable)
*	[Add the webhook](#cloud-int-gh-hook)
*	[Verify it works](#cloud-int-gh-verify)

## About the GitHub integration {#cloud-int-gh-about}
The GitHub integration enables you to manage your Magento Enterprise Cloud Edition environments directly from your GitHub repository. We strongly recommend you use a *private* GitHub repository.

This integration enables you to:

*	Create a new environment when you create a branch or opening a pull request on GitHub.
*	Rebuild the environment when you push new code to GitHub.
*	Delete the environment when you merge a pull request.

To set up the integration, you must obtain a GitHub token and a webhook. The following sections walk you through the process.

## Generate a GitHub token {#cloud-int-gh-token}
To perform this task, you must be a member of a group that can write to the GitHub repository. (In other words, you must be able to push to the repository.)

To generate a token:

1.	Log in to GitHub.
2.	In your personal settings, on the **Personal access tokens** tab page, click [**Generate new token**](https://github.com/settings/tokens/new){:target="_blank"}.
4.	In the **Token description** field, enter a meaningful name.
5.	Select check boxes corresponding to how you intend to use the token:

	*	To integrate with public repositories, select **public_repo**
	*	To integrate with your own private repositories, select **repo**
	*	To integrate with your organization's private repositories, select **repo** and **read:org**

	The following figure shows an example of creating a token that can be used to integrate with a private repository to which you have write access:

	![Create a GitHub token for a private repository]({{ site.baseurl }}common/images/cloud_github-token.png){:width="600px"}
6.	Click **Generate token**.
7.	Copy the token to the clipboard.

	![Create a GitHub token for a private repository]({{ site.baseurl }}common/images/cloud_github-token-copy.png){:width="600px"}

## Enable the GitHub integration {#cloud-int-gh-enable}
TBD

## Add the webhook {#cloud-int-gh-hook}
TBD

## Verify it works {#cloud-int-gh-verify}
TBD


#### Related topics
*	[Get started with a project]({{ site.gdeurl }}cloud/project/project-start.html)
*	[`.magento.app.yaml`]({{ site.gdeurl }}cloud/project/project-conf-files_magento-app.html)
