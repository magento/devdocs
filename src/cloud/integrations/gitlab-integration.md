---
group: cloud-guide
title: GitLab integration
functional_areas:
  - Cloud
  - Setup
---

You can configure a GitLab repository to automatically build and deploy an environment when you push code changes. This integration synchronizes your GitLab repository with your {{ site.data.var.ece }} account.

{% include cloud/note-private-repo.md %}

This integration enables you to:

-  Create a new environment when you create a branch
-  Redeploy the environment when you merge a pull request
-  Delete the environment when you delete the branch

You must obtain a GitLab token and a webhook to continue the process.

## Prerequisites

-  Administrator access to the {{site.data.var.ece}} project
-  [`magento-cloud` CLI]({{ site.baseurl }}/cloud/before/before-workspace-magento-prereqs.html#cloud-ssh-cli-cli-install) tool in your local environment
-  A GitLab account
-  A [GitLab personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) with write-access to the GitLab repository, selected scopes must be at least: `api` and `read_repository`.

## Prepare your repository

You need to clone your {{site.data.var.ece}} project from an existing environment and migrate the project branches to a new, empty GitLab repository, preserving the same branch names. It is **critical** to retain an identical Git tree, so that you do not lose any existing environments or branches in your {{site.data.var.ece}} project.

1. From the terminal, log in to your {{site.data.var.ece}} project.

   ```bash
   magento-cloud login
   ```

1. List your projects and copy the project ID.

   ```bash
   magento-cloud project:list
   ```

1. Clone the project to your local environment.

   ```bash
   magento-cloud project:get <project-ID>
   ```

1. Add your GitLab repository as a remote (assuming GitLab is used in its SaaS version).

   ```bash
   git remote add origin git@gitlab.com:<user-name>/<repo-name>.git
   ```

1. Delete the default `magento` remote.

   ```bash
   git remote remove magento
   ```

1. Verify that you added the GitLab remote correctly.

   ```bash
   git remote -v
   ```

   You should see the following:

   ```terminal
   origin git@gitlab.com:<user-name>/<repo-name>.git (fetch)
   origin git@gitlab.com:<user-name>/<repo-name>.git (push)
   ```
   {:.no-copy}

1. Push the project files to your new GitLab repository. Remember to keep all branch names the same.

   ```bash
   git push -u origin master
   ```

   If you are starting with a new GitLab repository, you may have to use the `-f` option, because the remote repository does not match your local copy.

1. Verify that your GitLab repository contains all of your project files.

## Enable the GitLab integration

Use the `magento-cloud integration` command to enable the GitLab integration, and get the Payload URL for the GitLab webhook to send updates from GitLab to your {{site.data.var.ece}} project.

```bash
magento-cloud integration:add --type=gitlab --project=<project-ID> --token=<your-GitLab-token> [--base-url=<GitLab-url> --server-project=<GitLab-project> --build-merge-requests={true|false} --merge-requests-clone-parent-data={true|false} --fetch-branches={true|false} --prune-branches={true|false}]
```

-  `<project-ID>`—Your {{site.data.var.ece}} project ID
-  `<your-GitLab-token>`—The personal access token you generated for GitLab
-  `--base-url`-URL of GitLab (https://gitlab.com/ if GitLab is used in its SaaS version)
-  `--server-project`-Project name in GitLab (part after the base url)
-  `--build-merge-requests`-—An _optional_ parameter that instructs {{site.data.var.ece}} to build a new environment for each and every merge requests (`true` by default)
-  `--merge-requests-clone-parent-data`-—An _optional_ parameter that instructs {{site.data.var.ece}} to clone the parent environment's data for merge requests (`true` by default)
-  `--fetch-branches`—An _optional_ parameter that causes {{site.data.var.ece}} to fetch all branches from the remote (as inactive environments) (`true` by default)
-  `--prune-branches`—An _optional_ parameter that instructs {{site.data.var.ece}} to delete branches that do not exist on the remote (`true` by default)

{:.bs-callout-warning}
The `magento-cloud integration` command overwrites *_all_* code in your {{site.data.var.ece}} project with the code from your GitLab repository. This includes all branches, including the Production branch. This action happens instantly and cannot be undone. As a best practice, it is very important to clone all of your branches from your {{site.data.var.ece}} project and push them to your GitLab repository before adding the GitLab integration.

{:.procedure}
To enable the GitLab integration:

1. From the terminal, add the GitLab integration to your {{site.data.var.ece}} project:

   ```bash
   magento-cloud integration:add --type gitlab --project=3txxjf32gtryos --token=qVUfeEn4ouze7A7JH --base-url=https://gitlab.com/ --server-project=my-agency/project-name --build-merge-requests=false --merge-requests-clone-parent-data=false --fetch-branches=true --prune-branches=true
   ```

1. When prompted, enter "Y" to add the integration.

   ```terminal
   Warning: adding a 'gitlab' integration will automatically synchronize code from the external Git repository.
   This means it can overwrite all the code in your project.
   Are you sure you want to continue? [y/N] y
   ```
   {:.no-copy}

1. Copy the **Hook URL** displayed by the return output.

   ```terminal
   Hook URL: https://eu-3.magento.cloud/api/projects/3txxjf32gtryos/integrations/eolmpfizzg9lu/hook
   Created integration eolmpfizzg9lu (type: gitlab)
   +----------------------------------+---------------------------------------------------------------------------------------+
   | Property                         | Value                                                                                 |
   +----------------------------------+---------------------------------------------------------------------------------------+
   | id                               | eolmpfizzg9lu                                                                         |
   | type                             | gitlab                                                                                |
   | token                            | ******                                                                                |
   | base_url                         | https://gitlab.com/                                                                   |
   | project                          | my-agency/project-name                                                            |
   | fetch_branches                   | true                                                                                  |
   | prune_branches                   | true                                                                                 |
   | build_merge_requests             | false                                                                                  |
   | merge_requests_clone_parent_data | false                                                                                  |
   | hook_url                         | https://eu-3.magento.cloud/api/projects/3txxjf32gtryos/integrations/eolmpfizzg9lu/hook |
   +----------------------------------+---------------------------------------------------------------------------------------+
   ```
   {:.no-copy}

### Add the webhook in GitLab

In order to communicate events —such as a push or merge requests— with your Cloud Git server, you need to [create a webhook](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#overview) for your GitLab repository

1. In your GitLab repository, click the **Settings** tab.

1. In the left navigation bar, click **Webhooks**.

1. In the _Webhooks_ form, edit the following fields:

   -  **URL**: Enter the `Hook URL` returned when you enabled the GitLab integration.
   -  **Secret Token**: Enter a verification secret if needed.
   -  **Trigger**: Check `Merge request events` and/or `Push events` depending on your needs
   -  **Enable SSL verification**:  You must select this option

1. Click **Add webhook**.

### Test the integration

To verify that the integration works, make a change in the GitLab repository and use the magento-cloud CLI to pull the change into the local environment or just merge a request in GitLab. See [Test the integration]({{ site.baseurl }}/cloud/integrations/bitbucket-integration.html#test-the-integration).

If the integration succeeds, the [Project Web Interface]({{ site.baseurl }}/cloud/project/project-webint-basic.html) shows the GitLab commit message and the status of the Cloud deployment:

![GitLab integration successfull]({{ site.baseurl }}/common/images/cloud/cloud_gitlab-integration-success.png)

## Create a new Cloud branch

Use the Magento Cloud CLI `environment:push` command to create and activate a new environment. See [Create a new Cloud branch]({{site.baseurl}}/cloud/integrations/bitbucket-integration.html#create-a-new-cloud-branch).

## Remove the integration

Use the Magento Cloud CLI `integration:delete` command to remove the integration. See [Remove the integration]({{site.baseurl}}/cloud/integrations/bitbucket-integration.html#remove-the-integration).
