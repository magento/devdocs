---
group: cloud
title: Bitbucket integration
version: 2.1
functional_areas:
  - Cloud
  - Setup
---

You can configure your Bitbucket repository to automatically build and deploy an environment when you push code changes. This integration synchronizes your Bitbucket repository with your {{site.data.var.ece}} account.

For Pro projects **created before October 23, 2017**, this integration works on Integration environments _only_. You must [request an upgrade]({{ page.baseurl }}/cloud/trouble/pro-env-management.html) before you can use this integration on Staging and Production environments.

{: .bs-callout .bs-callout-info}
We _strongly_ recommend using a private Bitbucket repository for your {{site.data.var.ece}} project.

Before you enable the integration, you must have the following:

-  Administrator access to the {{site.data.var.ece}} project
-  [`magento-cloud` CLI]({{ page.baseurl }}/cloud/before/before-workspace-magento-prereqs.html#cloud-ssh-cli-cli-install) tool in your local environment
-  A Bitbucket account
-  Administrator access to the Bitbucket repository
-  An SSH access key for the Bitbucket repository

## Prepare your repository

You need to clone your {{site.data.var.ece}} project from an existing environment and migrate the project branches to a new, empty Bitbucket repository, preserving the same branch names.

1.  From the terminal, log in to your {{site.data.var.ece}} project.

    ```bash
    magento-cloud login
    ```

1.  List your projects and copy the project ID.

    ```bash
    magento-cloud project:list
    ```

1.  Clone the project to your local environment.

    ```bash
    magento-cloud project:get <project-ID>
    ```

1.  Add your Bitbucket repository as a remote.

    ```bash
    git remote add origin git@bitbucket.org:<user-name>/<repo-name>.git
    ```

1.  Delete the default `magento` remote.

    ```bash
    git remote remove magento
    ```

1.  Verify that you added the Bitbucket remote correctly.

    ```bash
    git remote -v
    ```

    You should see the following:

    ```terminal
    origin git@bitbucket.org:<user-name>/<repo-name>.git (fetch)
    origin git@bitbucket.org:<user-name>/<repo-name>.git (push)
    ```{: .no-copy}

1.  Push the project files to your new Bitbucket repository. Remember to keep all branch names the same.

    ```bash
    git push -u origin master
    ```

    If you are starting with a new Bitbucket repository, you may have to use the `-f` option, because the remote repository does not match your local copy.

1.  Verify that your Bitbucket repository contains all of your project files.

## Create an OAuth consumer

The Bitbucket integration requires an [OAuth consumer](https://confluence.atlassian.com/x/pwIwDg){:target="\_blank"}. You need the OAuth `key` and `secret` from this consumer to complete the next section.

#### To create an OAuth consumer in Bitbucket:

1.  Log in to your [Bitbucket](https://bitbucket.org/account/signin/){:target="\_blank"} account.

1.  Click **Settings** > **Access Management** > **OAuth**.

1.  Click **Add consumer** and configure it as follows:

    ![Bitbucket OAuth consumer configuration]({{ site.baseurl }}/common/images/cloud_oauth_consumer_config.png)

    {: .bs-callout .bs-callout-warning}
    A valid **Callback URL** is not required, but you must enter a value in this field to successfully complete the integration.

1.  Click **Save**.

1.  Click the consumer **Name** to reveal your OAuth `key` and `secret`.

1.  Copy your OAuth `key` and `secret` for configuring the integration.

## Configure the integration

1.  From the terminal, navigate to your {{site.data.var.ece}} project.

1.  Create a temporary file called `bitbucket.json` and add the following, replacing the variables in angle brackets with your values:

    ```json
    {
      "type": "bitbucket",
      "repository": "<bitbucket-user-name/bitbucket-repo-name>",
      "app_credentials": {
        "key": "<oauth-consumer-key>",
        "secret": "<oauth-consumer-secret>"
      },
      "prune_branches": true,
      "fetch_branches": true,
      "build_pull_requests": true,
      "resync_pull_requests": true
    }
    ```

    {: .bs-callout .bs-callout-tip}
    Be sure to use the name of your Bitbucket repository and not the URL. The integration will fail if you use a URL.

1.  Add the integration to your project using the `magento-cloud` CLI tool.

    {: .bs-callout .bs-callout-warning}
    The following command overwrites _all_ code in your {{site.data.var.ece}} project with code from your Bitbucket repository. This includes all branches, including the Production branch. This action happens instantly and cannot be undone.

    ```bash
    magento-cloud project:curl -p '<project-ID>' /integrations -i -X POST -d "$(< bitbucket.json)"
    ```

    This returns a long HTTP response with headers. A successful integration returns a 200 or 201 status code. A status of 400 or above indicates that an error occurred.

1.  Delete the temporary `bitbucket.json` file.

1.  Verify the project integration.

    ```bash
    magento-cloud integrations -p '<project-ID>'
    ```

## Test the integration

After configuring the Bitbucket integration, test it by pushing a simple change to your Bitbucket repository.

1.  Create a test file.

    ```bash
    touch test.md
    ```

1.  Commit and push the change to your Bitbucket repository.

    ```
    git add . && git commit -m "Testing Bitbucket integration" && git push
    ```

1.  Log in to the [Project Web Interface]({{ page.baseurl }}/cloud/project/project-webint-basic.html) and verify that your commit message is displayed and your project deploying.

    ![Testing the Bitbucket integration]({{ site.baseurl }}/common/images/cloud_test_bitbucket_integration.png)

## Create a new Cloud branch

The Bitbucket integration cannot activate new environments in your {{site.data.var.ece}} project. If you create an environment with Bitbucket, you must activate the environment manually. To avoid this extra step, it is best practice to create environments using the `magento-cloud` CLI tool or the Project Web UI.

#### To activate a branch created with Bitbucket:

1.  Use the magento-cloud CLI to push the branch.

    ```bash
    magento-cloud environment:push from-bitbucket
    ```

    ```terminal
    Pushing from-bitbucket to the new environment from-bitbucket
    Activate from-bitbucket after pushing? [Y/n] y
    Parent environment [master]: integration
    --- (Validation and activation messages)
    ```

1.  Verify the environment is active.

    ```bash
    magento-cloud environment:list
    ```

    ```
    Your environments are: 
    +---------------------+----------------+--------+
    | ID                  | Name           | Status |
    +---------------------+----------------+--------+
    | master              | Master         | Active |
    |  integration        | integration    | Active |
    |    from-bitbucket * | from-bitbucket | Active |
    +---------------------+----------------+--------+
    * - Indicates the current environment
    ```

After you create a new environment, you can push the corresponding branch to your remote Bitbucket repository using regular git commands. Subsequent changes to your branch in Bitbucket automatically build and deploy the environment.

## Remove the integration

You can safely remove the Bitbucket integration from your project without affecting your code.

#### To remove the Bitbucket integration:

1.  From the terminal, log in to your {{site.data.var.ece}} project.

1.  List your integrations. You need the Bitbucket integration ID to complete the next step.

    ```bash
    magento-cloud integration:list
    ```

1.  Delete the integration.

    ```bash
    magento-cloud integration:delete <project-ID>
    ```

Also, you can remove the Bitbucket integration by logging in to your Bitbucket account and revoking the OAuth grant on the _Settings_ page.
