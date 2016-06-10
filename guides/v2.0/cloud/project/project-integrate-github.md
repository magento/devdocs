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
version: 2.0
github_link: cloud/project/project-integrate-github.md
---

#### Contents
*	[About the GitHub integration](#cloud-int-gh-about) 
*	[Generate a GitHub token](#cloud-int-gh-token)
*	[Enable the GitHub integration](#cloud-int-gh-enable)
*	[Add the webhook](#cloud-int-gh-hook)
*	[Verify it works](#cloud-int-gh-verify)

## About the GitHub integration {#cloud-int-gh-about}
The GitHub integration enables you to manage your Magento Enterprise Cloud Edition environments directly from your GitHub repository. The integration manages content already in GitHub and synchronizes it with Magento Enterprise Cloud Edition. Therefore, before you begin, make sure your project and environments are in a GitHub repository.

We strongly recommend you use a *private* GitHub repository.

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
	*	To integrate with your personal, private repositories, select **repo**
	*	To integrate with your organization's private repositories, select **repo** and **read:org**

	The following figure shows an example of creating a token that can be used to integrate with a private repository to which you have write access:

	![Create a GitHub token for a private repository]({{ site.baseurl }}common/images/cloud_github-token.png){:width="600px"}
6.	Click **Generate token**.
7.	Copy the token to the clipboard.

	![Create a GitHub token for a private repository]({{ site.baseurl }}common/images/cloud_github-token-copy.png){:width="600px"}

## Enable the GitHub integration {#cloud-int-gh-enable}
This section discusses how to enable the GitHub integration.

### Get started
To get started:

{% include cloud/cli-get-started.md %}

### Enable the integration
To enable the GitHub integration for your environment:

1.	Enable the integration:

		magento-cloud integration:add --type=github --project=<project ID> --token=<your GitHub token> {--repository=USER/REPOSITORY | --repository=ORGANIZATION/REPOSITORY} [--build-pull-requests={true|false} --fetch-branches={true|false}

	where

	`<project ID>` is your Magento Enterprise Cloud Edition project ID

	`<your GitHub token>` is the token you got in the preceding section

	`--repository=USER/REPOSITORY` is how you specify your personal, private GitHub repository

	`--repository=ORGANIZATION/REPOSITORY` is how you specify an organization repository

	`--build-pull-requests` is an optional parameter that instructs Magento Cloud to deploy after you merge a pull request (`true` by default)

	`--fetch-branches` is an optional parameter that causes Magento Cloud to track branches and deploy after you update a branch (`true` by default)

	**Example 1**: Enable the GitHub integration for a personal, private repository:

		magento-cloud integration:add --type=github --project=ov58dlacU2e --token=<token> --repository=myUserName/myrepo

	**Example 2**: Enable the GitHub integration for an organization repository:

		magento-cloud integration:add --type=github --project=ov58dlacU2e --token=<token> --repository=Magento/teamrepo
6.	Enter the required information when prompted.

	Sample output:

		Created integration wp2f2thlmxwcg (type: github)
		Repository: myUserName/myrepo
		Build PRs: yes
		Fetch branches: yes
		Payload URL: https://us.magento.cloud/api/projects/ov58dlacU2e/integrations/wO8a0eoamxwcg/hook

5.	Copy the Payload URL displayed by the command and continue with the next section.

## Add the webhook {#cloud-int-gh-hook}
To add the webhook to your GitHub repository:

1.	In your GitHub repository, click **Settings** as the following figure shows.

	![Go to your GitHub's account settings]({{ site.baseurl }}common/images/cloud_github-acct-settings.png){:width="650px"}
2.	In the left navigation bar, click **Webhooks & services**.
3.	In the right pane, click **Add webhook** as the following figure shows.

	![Add the webhook to your account]({{ site.baseurl }}common/images/cloud_github-acct-webhook.png){:width="650px"}
4.	Enter the following information:

	*	**Payload URL**: Enter the URL displayed by the command in the preceding section.
	*	**Content type**: Click **application/json**
	*	**Secret**: Enter a verification secret.
	*	**Which events would you like to trigger this webhook?**: Click **Send me everything**
	*	Select the **Active** check box.

	The following figure shows an example:

	![Add the webhook to your account]({{ site.baseurl }}common/images/cloud_github-acct-webhook2.png){:width="650px"}
5.	Click **Add webhook**

## Verify it works {#cloud-int-gh-verify}
To verify the integration works:

1.	Make a change in the GitHub repository with which you integrated.
2.	In the Magento Cloud CLI, pull the change to an environment.


#### Related topics
*	[Get started with a project]({{ site.gdeurl }}cloud/project/project-start.html)
*	[`.magento.app.yaml`]({{ site.gdeurl }}cloud/project/project-conf-files_magento-app.html)
