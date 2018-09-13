---
group: cloud-guide
title: GitHub integration
functional_areas:
  - Cloud
  - Setup
---

The GitHub integration enables you to manage your {{site.data.var.ece}} environments directly from your GitHub repository. The integration manages content already in GitHub and synchronizes it with {{site.data.var.ee}}. Before you begin, your project and environments must be in a GitHub repository.

We strongly recommend you use a *private* GitHub repository.

This integration enables you to:

-  Create a new environment when you create a branch
-  Redeploy the environment when you merge a pull request
-  Delete the environment when you delete the branch

You must obtain a GitHub token and a webhook to continue the process.

## Generate a GitHub token

You must be a member of a group with write-access to the GitHub repository, so that you can _push_ to the repository. See [GitHub: Create](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/){:target="_blank"}.

## Enable the GitHub integration

This section discusses how to enable the GitHub integration.

{% include cloud/cli-get-started.md %}

#### To enable the GitHub integration:

1.	Enable the integration:

		magento-cloud integration:add --type=github --project=<project ID> --token=<your GitHub token> {--repository=USER/REPOSITORY | --repository=ORGANIZATION/REPOSITORY} [--build-pull-requests={true|false} --fetch-branches={true|false}

	where

	`<project ID>` is your {{site.data.var.ece}} project ID

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

5.	Copy the Payload {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} displayed by the command and continue with the next section.

## Add the webhook {#cloud-int-gh-hook}

To add the webhook to your GitHub repository:

1.	In your GitHub repository, click **Settings** as the following figure shows.

	![Go to your GitHub's account settings]({{ site.baseurl }}/common/images/cloud_github-acct-settings.png){:width="650px"}
2.	In the left navigation bar, click **Webhooks & services**.
3.	In the right pane, click **Add webhook** as the following figure shows.

	![Add the webhook to your account]({{ site.baseurl }}/common/images/cloud_github-acct-webhook.png){:width="650px"}
4.	Enter the following information:

	*	**Payload URL**: Enter the URL displayed by the command in the preceding section.
	*	**Content type**: Click **application/json**
	*	**Secret**: Enter a verification secret.
	*	**Which events would you like to trigger this webhook?**: Click **Send me everything**
	*	Select the **Active** checkbox.

	The following figure shows an example:

	![Add the webhook to your account]({{ site.baseurl }}/common/images/cloud_github-acct-webhook2.png){:width="650px"}
5.	Click **Add webhook**

## Verify it works {#cloud-int-gh-verify}

To verify the integration works:

1.	Make a change in the GitHub repository with which you integrated.
2.	In the Magento Cloud CLI, pull the change to an environment.
