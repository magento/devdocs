---
group: cloud-guide
title: Manage branches with the Project Web Interface
redirect_from:
  - /cloud/project/project-priv-repos.html
functional_areas:
  - Cloud
  - Configuration
---

Every {{site.data.var.ece}} *environment* has an associated active Git *branch*. You can manage your environments using either the Project Web Interface, the Magento Cloud CLI, or Git commands. For more information on Git branches, see [Git documentation](https://git-scm.com/doc).

For more information about managing environments using the CLI, see [Manage branches with the CLI]({{ site.baseurl }}/cloud/env/environments-start.html).

This topic discusses how to use the Project Web Interface to:

-  Add or delete an environment. You cannot add or delete the `master` branch for Pro plan Staging and Production. You can branch from Start plan Master.
-  Sync (`git pull`) from the environment's parent
-  Merge (`git push`) to the environment's parent

{:.bs-callout-info}
You cannot create branches from Pro plan Staging and Production `master`. These environments include `master` branches that you deploy updated Git code to from Integration `master`.

## Add or delete an environment {#project-branch-add}

Complete development of code and added extensions in a branch and, when complete, merge (`git push`) the branch with its parent or master.

-  For Starter, we recommend you create a `staging` branch from Master, then branch from `staging` for development.
-  For Pro, create a development branch from the Integration environment.

For branching strategies, review [Starter]({{ site.baseurl }}/cloud/architecture/starter-architecture.html) and [Pro]({{ site.baseurl }}/cloud/architecture/starter-develop-deploy-workflow.html) architecture overviews.

Your account supports a limited number of active Git branches and an unlimited number of inactive branches. Manage active and inactive branches by deleting a branch. When deleted, it is deactivated and still listed in the project branches list. You can either activate the branch later or you can [delete it entirely]({{ site.baseurl }}/cloud/env/environments-start.html#env-delete) using the CLI.

If you need additional environments for development, enter a [Support ticket]({{ site.baseurl }}/cloud/trouble/trouble.html) for more information.

## Add a branch {#add}

To add a branch:

1. [Log in to your project]({{ site.baseurl }}/cloud/project/project-webint-basic.html#project-access).
1. In the left navigation bar, click the name of the parent environment.

   Your new branch is cloned from this environment. Choose a parent environment that is similar to the environment you're about to create.

1. Click ![Create a branch]({{ site.baseurl }}/common/images/cloud/cloud_branch-icon.png){:width="30px"}.
1. In the provided field, enter a branch name. In many cases, the environment name is the same as its ID.

   The environment _name_ is different from the environment _ID_ only if you use spaces or capital letters in the environment name. An environment ID consists of all lowercase letters, numbers, and allowed symbols. Capital letters in an environment name are converted to lowercase in the ID; spaces in an environment name are converted to dashes.

   An environment name **cannot** include characters reserved for your Linux shell or for regular expressions. Forbidden characters include curly braces (`{ }`), parentheses, asterisk (`*`), angle brackets (`>`), ampersand (`&`), percent (<code>%</code>), and other characters.

1. Click **Branch**.
1. Wait while the environment deploys.

   During deployment, its status is **In process**, as the following figure shows.

   ![Branch is deploying]({{ site.baseurl }}/common/images/cloud/cloud_branch-deploy.png)

   After a successful deployment, the status changes to **Success**:

   ![Branch is deploying]({{ site.baseurl }}/common/images/cloud/cloud_branch-success.png)

1. Continue with one of the following:

   -  [Get started with an environment]({{ site.baseurl }}/cloud/env/environments-start.html)
   -  [How tos and tutorials]({{ site.baseurl }}/cloud/howtos/how-to.html)

## Delete to make a branch inactive {#inactive}

To delete an environment and make it inactive:

1. [Log in to your project]({{ site.baseurl }}/cloud/project/project-webint-basic.html#project-access).
1. In the left pane, click the name of the branch to delete.
1. Click **Configure environment** as the following figure shows.

   ![Configure environment]({{ site.baseurl }}/common/images/cloud/cloud_project-env.png)

1. Click the **Settings** tab.
1. Click **Delete** next to the environment's status, as the following figure shows.

   ![Delete an environment]({{ site.baseurl }}/common/images/cloud/cloud_env-delete.png)

   A deleted (that is, inactive) environment displays with its name stricken out as the following figure shows.

   ![Delete an environment]({{ site.baseurl }}/common/images/cloud/cloud_environment-deleted.png)

## Sync from the environment's parent {#project-branch-sync}

Syncing an environment (or branch) is the same as `git pull origin <parent>`. You sync to get updated code from a parent environment. You can use this feature through the interface for all Starter and Pro environments.

For Pro plan, you can also sync from Staging and Production to your Integration `master` branch. This sync only pulls and pushes code, not data. To sync data, you will need to dump the database data and push it to another environment's database. For more information, see [Migrate and deploy static files and data]({{ site.baseurl }}/cloud/live/stage-prod-migrate.html).

To sync an environment with its parent:

1. [Log in to your project]({{ site.baseurl }}/cloud/project/project-webint-basic.html#project-access).
1. In the left pane, click the name of the branch you want to sync.
1. Click ![Sync an environment]({{ site.baseurl }}/common/images/cloud/cloud_environment-sync.png){:width="30px"} (sync).

  The following prompt displays:

  ![Choose what to sync]({{ site.baseurl }}/common/images/cloud/cloud_environment-sync2.png)

1. Select the checkbox next to each item to sync and click **Sync**.

## Merge with the environment's parent {#project-branch-merge}

Merging an environment is the same as `git push origin`. You merge to push updated code from an environment to its parent environment (that is, a Git branch). You can merge this code up through the parent-child relationships to `master`. You can also deploy to Staging and Production using the merge command.

To merge an environment with its parent:

1. [Log in to your project]({{ site.baseurl }}/cloud/project/project-webint-basic.html#project-access).
1. In the left pane, click the name of the branch you want to merge.
1. Click ![Merge an environment]({{ site.baseurl }}/common/images/cloud/cloud_environment-merge.png){:width="30px"} (merge).
1. Click **Merge** to confirm the action.

## View logs {#logs}

Through the Project Web Interface, you can review various logs for environments including build, deploy, and deployment history.

For **Starter** environments, you can review build and deploy logs and the deployment history. These environments include Master (Production) and all branches created from it.

For **Pro** environments, you can review the following logs per environment:

-  Integration–Build and deploy and deployment history
-  Staging–Build logs and deployment history. You need to SSH into the server to view deploy logs.
-  Production–Build logs and deployment history. You need to SSH into the server to view deploy logs.

1. [Log in to your project]({{ site.baseurl }}/cloud/project/project-webint-basic.html#project-access).
1. In the left pane, click an environment to review logs for.
1. The right pane provides a deployment history of one entry per action attempted including syncs, merges, branches, snapshots, and more.
1. To view the build log, select the Success or Failure link per deployment record on the account.

## Pull code from a private Git repository {#private}

Your {{site.data.var.ece}} project can include code located in a private Git repository. For example, you may have code for a custom module or theme in a private repo. To do so, you must add your project's public SSH key to your private Git repository and update your project's `composer.json`.

To add a deployment key to your private GitHub repository, you must be the administrator of that repository. GitHub allows you to use a deploy key for one repository only.

If your project needs to access multiple repositories, you can choose to
attach an SSH key to an automated user account. Because this account won't
be used by a human, it's referred to as a [*machine user*](https://developer.github.com/guides/managing-deploy-keys/). You can then add the
machine account as collaborator or add the machine user to a team with
access to the repositories it needs to manipulate.

{:.bs-callout-info}
We highly recommend adding and merging this code to your project Git repositories. If you do not configure the connection, you will have build issues.

### Find your deploy key {#ssh}

To find your project SSH public key (also referred to as a *deploy key*):

1. Log in to your project using the Web Interface.
1. Click **Configure Project**.
1. Click **Deploy Key**.

   The following figure shows an example.

   ![Deploy Key]({{ site.baseurl }}/common/images/cloud/cloud_deploy-key.png){:width="500px"}

1. Copy the deploy key to the clipboard.
1. See [Enter your GitHub deploy key](#cloud-deploykey-github).

### Enter your GitHub deploy key {#cloud-deploykey-github}

On GitHub, deploy keys are read-only by default. Your Magento project won't push code to the private repository.

To enter your project's public key as a GitHub deploy key:

1. Log in to your GitHub repository as its administrator.
1. Click **Settings** as the following figure shows.

   ![GitHub settings]({{ site.baseurl }}/common/images/cloud/cloud_gh-settings.png){:width="650px"}

    {:.bs-callout-info}
    If you do not see this option, you are not the repository administrator and you cannot complete this task. Ask your GitHub project administrator to do this.

1. On the Settings page, in the left navigation bar, click **Deploy Keys** as the following figure shows.

   ![GitHub deploy key]({{ site.baseurl }}/common/images/cloud/cloud_gh-deploy-key.png){:width="200px"}

1. Click **Add deploy key**.
1. Follow the prompts on your screen to complete the task.

In `composer.json`, use the `<user>@<host>:<.git</code>` format, or `ssh://<user>@<host>:<port>/<path>.git` if using a non-standard port.

### Enter your Bitbucket deployment key {#cloud-deploykey-bb}

To enter your project's public key as a Bitbucket deploy key:

1. Log in to your Bitbucket repository as its administrator.
1. In the left navigation bar, click **Settings** as the following figure shows.

   ![Bitbucket settings]({{ site.baseurl }}/common/images/cloud/cloud_bb-settings.png)

1. Click General > **Deployment Keys** as the following figure shows.

   ![Bitbucket deploy key]({{ site.baseurl }}/common/images/cloud/cloud_bb-deploy-key.png)

1. Click **Add Key**.
1. Follow the prompts on your screen to complete the task.

### Enter your GitLab deploy key {#cloud-deploykey-gitlab}

To add the public SSH key for your project as a [GitLab deploy key](https://docs.gitlab.com/ee/ssh/README.html#deploy-keys):

1. Log in to your GitLab repository as its owner.

1. Verify that the _Pipelines_ option is enabled for your project.

   -  In the project settings, expand the *Visibility, project, features, permissions* section.

      ![GitLab main settings]({{ site.baseurl }}/common/images/cloud/cloud_gitlab-settings-main.png)

   -  If necessary, click **Pipelines** to enable the option.

      ![GitLab pipelines]({{ site.baseurl }}/common/images/cloud/cloud_gitlab-pipelines.png)

1. Add your public SSH key to the CI/CD settings.

   -  In the left navigation bar, click Settings > **CI / CD**.

      ![GitLab settings]({{ site.baseurl }}/common/images/cloud/cloud_gitlab-settings.png){:width="400px"}

   -  Click Deploy Keys > **Expand** to configure the key.

      ![GitLab deploy key]({{ site.baseurl }}/common/images/cloud/cloud_gitlab-deploy-key.png)

   -  In the _Deploy Key_ form, add a deploy key name to the _Title_ field, and paste your public SSH key in the _Key_ field.

      ![GitLab deploy key form]({{ site.baseurl }}/common/images/cloud/cloud_gitlab-deploy-key-form.png)

   -  Click **Add Key** to save the configuration.

## Secure your environments and branches {#security}

You can access your project and environments from any location through a web browser using the Project Web Interface. You may have security set for your Production environment, stores, and sites. This section helps you secure your Integration and Staging environments for strictly your developers, DBAs, and more.

To secure your Starter and Pro environments:

1. Log into your [Project Web Interface](https://accounts.magento.cloud).
1. Select an environment branch.
1. Click **Configure Environment**.
1. On the **Settings** tab, click **ON** for **HTTP access control** to enable secure access. You can choose between credentials or IP addresses to filter for access.
1. To filter by credentials, click **Add Login**, enter a username and password, and click again **Add Login** to add.
1. To filter by IP address, enter the IP addresses in a list with `deny` or `allow`. For example:

   ```text
   123.456.789.111/29 allow
   123.456.789.112/29 allow
   234.123.567.111/29 allow
   0.0.0.0/0 deny
   ```

1. Click **Save**.

The branch redeploys to update the environment security and settings.

We recommend testing your environments after completing security settings.
