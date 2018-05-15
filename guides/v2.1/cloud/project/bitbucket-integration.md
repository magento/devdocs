---
group: cloud
title: Bitbucket integration
version: 2.1
github_link: cloud/project/bitbucket-integration.md
functional_areas:
  - Cloud
  - Setup
---

Use the Bitbucket integration to automatically build and deploy an environment when you push new code to Bitbucket. This integration synchronizes your Bitbucket repository with your {{site.data.var.ece}} account.

For Pro projects **created before October 23, 2017**, this integration works on Integration environments _only_. You must [request an upgrade]({{ page.baseurl }}/cloud/trouble/pro-env-management.html) before you can use this integration on Staging and Production environments.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
We _strongly_ recommend using a private Bitbucket repository for your {{site.data.var.ece}} project.
</div>

## Before you begin
-   You must have a {{site.data.var.ece}} project and you must be an administrator of the project.
-   You must have a Bitbucket account and administrative access to the Bitbucket repository you want to integrate.
-   You must install the [`magento-cloud` CLI]({{ page.baseurl }}/cloud/before/before-workspace-magento-prereqs.html#cloud-ssh-cli-cli-install) tool in your local environment.

## Prepare your repository
This section shows you how to clone your {{site.data.var.ece}} project from and existing environment and add that code to a new, empty Bitbucket repository. If you don't already have an empty Bitbucket repository, [create one](https://confluence.atlassian.com/bitbucket/create-a-git-repository-759857290.html){:target="\_blank"} before proceeding.

1.  Open a terminal and log in to your {{site.data.var.ece}} project:

        magento-cloud login

1.  List your projects. With the project ID, you can complete additional commands:

        magento-cloud project:list

1.  Clone a project to your local environment:

        magento-cloud project:get <project ID>

1.  Add your Bitbucket repository as a remote. Replace `<user-name>/<repo-name>` with your Bitbucket information.

        git remote add origin git@bitbucket.org:<user-name>/<repo-name>.git

1.  Delete the default `magento` remote.

        git remote remove magento

1.  Verify that you added the Bitbucket remote correctly:

        git remote -v show

    You should see the following:

        origin git@bitbucket.org:<user-name>/<repo-name>.git (fetch)
        origin git@bitbucket.org:<user-name>/<repo-name>.git (push)

1.  Push files to your new Bitbucket repository:

        git push -u origin master

1.  Verify that your Bitbucket repository contains all of your project files.

## Create an OAuth consumer
The Bitbucket integration requires an [OAuth consumer](https://confluence.atlassian.com/x/pwIwDg){:target="\_blank"}. This section shows you how to create one in Bitbucket. You'll need the OAuth `key` and `secret` from this consumer to complete the next section.

1.  Log in to your [Bitbucket](https://bitbucket.org/account/signin/){:target="\_blank"} account.
1.  Click **Settings** > **Access Management** > **OAuth**.
1.  Click **Add consumer** and configure it as follows:

    ![Bitbucket OAuth consumer configuration]({{ site.baseurl }}/common/images/cloud_oauth_consumer_config.png)

    <div class="bs-callout bs-callout-warning" markdown="1">
    A valid **Callback URL** isn't required, but you must enter a value in this field to successfully complete the integration.
    </div>

1.  Click **Save**.
1.  Click the consumer **Name** to reveal your OAuth `key` and `secret`.
1.  Copy your OAuth `key` and `secret`. You'll need it to complete the next section.

## Configure the integration

1.  Open a terminal and navigate to your local {{site.data.var.ece}} project directory.
1.  Create a temporary new file called `bitbucket.json` and add the following:

    ```json
    {
      "type": "bitbucket",
      "repository": "bitbucket-user-name/bitbucket-repo-name",
      "app_credentials": {
        "key": "YOUR OAUTH CONSUMER KEY",
        "secret": "YOUR OAUTH CONSUMER SECRET"
      },
      "prune_branches": true,
      "fetch_branches": true,
      "build_pull_requests": true,
      "resync_pull_requests": true
    }
    ```

    Replace the following values with your information:

    -   `bitbucket-user-name/bitbucket-repo-name`
    -   `YOUR OAUTH CONSUMER KEY`
    -   `YOUR OAUTH CONSUMER SECRET`

    <div class="bs-callout bs-callout-tip" markdown="1">
    Be sure to use the name of your Bitbucket repository and not the URL. The integration will fail if you use the URL.
    </div>

1.  Add the integration to your project using the `magento-cloud` CLI tool. Replace `PROJECT ID` with your {{site.data.var.ece}} project ID.

    <div class="bs-callout bs-callout-warning" markdown="1">
    Running the following command overwrites _all_ code in your {{site.data.var.ece}} project with code from your Bitbucket repository. This includes all branches, including the master (production) branch. This action happens instantly and cannot be undone.
    </div>

        magento-cloud project:curl -p 'PROJECT ID' /integrations -i -X POST -d "$(< bitbucket.json)"

    This command returns a long HTTP response, including headers. The first line of the output should contain a 200 or 201 status code indicating successfull integration. A status of 400 or above indicates that an error occurred.

1.  Delete the temporary `bitbucket.json` file.

        rm bitbucket.json

1.  Your {{site.data.var.ece}} project, including all branches, is now synchronized with your Bitbucket repository. List the project's integration with the following command:

        magento-cloud integrations -p 'PROJECT ID'

## Verify that it works
After configuring the Bitbucket integration, test it by pushing a simple change to your Bitbucket repository.

1.  Create a test file:

        touch test.md

1.  Commit and push it to your Bitbucket repository:

        git add . && git commit -m "Testing Bitbucket integration" && git push

1.  Log in to the [Project Web Interface]({{ page.baseurl }}/cloud/project/project-webint-basic.html) and verify that your commit message is displayed and your project is being deployed.

    ![Testing the Bitbucket integration]({{ site.baseurl }}/common/images/cloud_test_bitbucket_integration.png)


## Branching
The Bitbucket integration cannot create new environments in your project, so you must use the `magento-cloud` CLI tool to [create branches]({{ page.baseurl }}/cloud/env/environments-start.html#getstarted).

After creating a new environment, you can push the corresponding branch up to your remote Bitbucket repository using regular git commands. For example, `git push -u origin <your-branch>`. Subsequent changes to your branch in Bitbucket will automatically build and deploy the environment.

## Remove the integration
You can safely remove the Bitbucket integration from your project without affecting your code.

To remove the integration using the `magento-cloud` CLI tool:

1.  Log in to your project.

        magento-cloud login

1.  List your integrations. You need the Bitbucket integration ID to complete the next step.

        magento-cloud integration:list

1.  Delete the integration.

        magento-cloud integration:delete <ID>

You can also remove the Bitbucket integration by logging in to your Bitbucket account and revoking the OAuth grant on the _Settings_ page.
