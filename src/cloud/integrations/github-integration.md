---
group: cloud-guide
title: GitHub integration
functional_areas:
  - Cloud
  - Setup
---

The GitHub integration enables you to manage your {{site.data.var.ece}} environments directly from your GitHub repository. The integration manages content already in GitHub and synchronizes it with {{site.data.var.ee}}. Before you begin, your project and environments must be in a GitHub repository.

{% include cloud/note-private-repo.md %}

This integration enables you to:

-  Create a new environment when you create a branch
-  Redeploy the environment when you merge a pull request
-  Delete the environment when you delete the branch

You must obtain a GitHub token and a webhook to continue the process.

## Generate a GitHub token

You must be a member of a group with write-access to the GitHub repository, so that you can _push_ to the repository. See [GitHub: Create](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).

## Prepare your repository

You need to clone your {{site.data.var.ece}} project from an existing environment and migrate the project branches to a new, empty GitHub repository, preserving the same branch names. It is **critical** to retain an identical Git tree, so that you do not lose any existing environments or branches in your {{site.data.var.ece}} project.

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

1. Add your GitHub repository as a remote.

   ```bash
   git remote add origin git@github.com:<user-name>/<repo-name>.git
   ```

1. Delete the default `magento` remote.

   ```bash
   git remote remove magento
   ```

1. Verify that you added the GitHub remote correctly.

   ```bash
   git remote -v
   ```

   You should see the following:

   ```terminal
   origin git@github.com:<user-name>/<repo-name>.git (fetch)
   origin git@github.com:<user-name>/<repo-name>.git (push)
   ```
   {:.no-copy}

1. Push the project files to your new GitHub repository. Remember to keep all branch names the same.

   ```bash
   git push -u origin master
   ```

   If you are starting with a new GitHub repository, you may have to use the `-f` option, because the remote repository does not match your local copy.

1. Verify that your GitHub repository contains all of your project files.

## Enable the GitHub integration

The following enables the GitHub integration and provides a Payload URL to use when creating a webhook.

{:.bs-callout-warning}
The following command overwrites _all_ code in your {{site.data.var.ece}} project with code from your GitHub repository. This includes all branches, including the Production branch. This action happens instantly and cannot be undone. As a best practice, it is very important to clone all of your branches from your {{site.data.var.ece}} project and push them to your GitHub repository **before** adding the GitHub integration.

{:.procedure}
To enable the GitHub integration:

1. Enable the integration.

   ```bash
   magento-cloud integration:add --type=github --project=<project-ID> --token=<your-GitHub-token> {--repository=USER/REPOSITORY | --repository=ORGANIZATION/REPOSITORY} [--build-pull-requests={true|false} --fetch-branches={true|false}
   ```

   -  `<project-ID>`—Your {{site.data.var.ece}} project ID
   -  `<your-GitHub-token>`—The personal access token you generated for GitHub
   -  `--repository=USER/REPOSITORY`—Your personal GitHub repository name
   -  `--repository=ORGANIZATION/REPOSITORY`—The organization repository name
   -  `--build-pull-requests`—An _optional_ parameter that instructs {{site.data.var.ece}} to deploy after you merge a pull request (`true` by default)
   -  `--fetch-branches`—An _optional_ parameter that causes {{site.data.var.ece}} to track branches and deploy after you update a branch (`true` by default)

   **Example 1**: Enable the GitHub integration for a personal, private repository:

   ```bash
   magento-cloud integration:add --type=github --project=ov58dlacU2e --token=<token> --repository=myUserName/myrepo
   ```

   **Example 2**: Enable the GitHub integration for an organization repository:

   ```bash
   magento-cloud integration:add --type=github --project=ov58dlacU2e --token=<token> --repository=Magento/teamrepo
   ```

1. Enter the required information when prompted.

1. Copy the **Payload URL** displayed by the return output.

   ```terminal
   Created integration wp2f2thlmxwcg (type: github)
   Repository: myUserName/myrepo
   Build PRs: yes
   Fetch branches: yes
   Payload URL: https://us.magento.cloud/api/projects/ov58dlacU2e/integrations/wO8a0eoamxwcg/hook
   ```
   {:.no-copy}

## Add the webhook in GitHub

In order to communicate events—such as a push—with your Cloud Git server, you need to create a webhook for your GitHub repository:

1. In your GitHub repository, click the **Settings** tab.

1. In the left navigation bar, click **Webhooks**.

1. In the _Webhooks_ pane, click **Add webhook**.

1. In the _Webhooks/Add webhook_ form, edit the following fields:

   -  **Payload URL**: Enter the URL returned when you enabled the GitHub integration.
   -  **Content type**: Choose **application/json** from the list.
   -  **Secret**: Enter a verification secret.
   -  **Which events would you like to trigger this webhook?**: Select **Send me everything**.
   -  Select the **Active** checkbox.

1. Click **Add webhook**.

## Test the integration

To verify the integration works, make a change in the GitHub repository and use the magento-cloud CLI to pull the change into the local environment.
