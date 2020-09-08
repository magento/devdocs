---
group: cloud-guide
title: Clone and branch the project
redirect_from:
  - /cloud/before/before-setup-env-keys.html
functional_areas:
  - Cloud
  - Setup
---

{:.ref-header}
Previous step

[Set up the Magento file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html)

The {{site.data.var.ece}} project is a Git repository of Magento code. Each **active** branch in the Integration environment includes a database and services to fully access the Magento site and store. You can clone the project and create an **active** branch from the Integration environment to develop code and add extensions using your local workstation.

## Clone the project

The following instructions use a combination of Magento Cloud CLI commands and Git commands to clone a `master` environment from your project to your local workstation. To see a full list of Magento Cloud CLI commands, use the `magento-cloud list` command.

 {:.bs-callout-info}
Some Git commands cannot complete an action in your {{site.data.var.ece}} project. For example, you can create a new branch using a Git command, but you cannot create and activate a new environment using the `git checkout -b <branch-name>` command. You must create an environment using the `magento-cloud environment:branch <branch-name>` command for the environment to become _active_. Alternatively, you can use the Project Web UI to create active environments. See [Magento CLI reference]({{ site.baseurl }}/cloud/reference/cli-ref-topic.html).

{:.procedure}
To clone a project master environment:

1. Log in to your local workstation with a [Magento file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html) account.

1. Change to the web server or virtual host _docroot_ directory.

1. Log in to the Magento Cloud CLI.

   ```bash
   magento-cloud login
   ```

1. List your projects.

   ```bash
   magento-cloud project:list
   ```

1. Clone a project.

   ```bash
   magento-cloud project:get <project-ID>
   ```

   When prompted for a directory name, enter `magento2`.

1. Change to the `magento2` directory.

1. List available environments for the project.

   ```bash
   magento-cloud environment:list
   ```

    {:.bs-callout-info}
   The `magento-cloud environment:list` command displays environment hierarchies, whereas the `git branch` command does not.

1. Fetch the remote branches.

   ```bash
   git fetch magento
   ```

1. Pull updated code.

   ```bash
   git pull magento <environment-ID>
   ```

## Change the Magento ADMIN variables

We recommend changing the environment-level variables for the Magento Admin URL and administrator account. It is a best practice to configure these settings for security reasons prior to branching from the cloned `master` environment. All branches created from the `master` branch inherit the environment-level variables and their values.

-  **ADMIN_EMAIL**—An email address for the administrative user. This address is used to send password reset notifications.
-  **ADMIN_USERNAME**—A username for the administrative user with the ability to create other users, including administrative users. This username defaults to the License Owner email address. You can use the default value, or change it to a secure username.
-  **ADMIN_PASSWORD**—A password for the administrative user. When the project was created, the License Owner received a default password in email.
-  **ADMIN_URL**— The relative URL to access the Admin panel, such as `<domain>/admin`. For security reasons, we recommend you choose a value other than `admin` or `backend` or another term that is easy to guess.

 {:.bs-callout-info}
Make note of any updated values so that you can use them to install Magento from the command line and to verify the installation. The values for the `ADMIN_EMAIL`, `ADMIN_USERNAME`, and `ADMIN_PASSWORD` variables are used only for installation.

If you are not sure that the `master` branch has all Magento Admin variables and settings configured, you can view a list of existing variables:

```bash
magento-cloud variables
```

```terminal
Variables on the project Project-Name (<project-id>), environment <environment-name>:
+----------------------------+-------------+-------------------------------------------+
| Name                       | Level       | Value                                     |
+----------------------------+-------------+-------------------------------------------+
| env:COMPOSER_AUTH          | project     | {                                         |
|                            |             |    "http-basic": {                        |
|                            |             |       "repo.magento.com": {               |
|                            |             |       "username":                         |
|                            |             | "<public-key>",                           |
|                            |             |       "password":                         |
|                            |             | "<private-key>"                           |
|                            |             |     }                                     |
|                            |             |   }                                       |
|                            |             | }                                         |
| ADMIN_EMAIL                | project     | admin@123.com                             |
| ADMIN_EMAIL                | environment | admin@123.com                             |
| ADMIN_PASSWORD             | environment | password                                  |
| ADMIN_URL                  | environment | admin123                                  |
| ADMIN_USERNAME             | environment | admin                                     |
| php:newrelic.license       | environment | xxxx71fb030366182117f955a22e4baf8exxxxxx  |
+----------------------------+-------------+-------------------------------------------+
```
{:.no-copy}

You can use the `magento-cloud` CLI to set a variable:

```bash
magento-cloud vset <variable-name> <variable-value>
```

{:.bs-callout-warning}
Every time you add or modify a variable using the web interface or the CLI, the branch automatically redeploys.

{:.procedure}
To add variables using the Project Web Interface:

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud).

1. Click the **Configure environment** gear icon ![Configure your environment]({{ site.baseurl }}/common/images/cloud/cloud_edit-project.png) next to the Project name.

   ![Project without code]({{ site.baseurl }}/common/images/cloud/cloud_project_empty.png)

1. Select the **Variables** tab.

1. Click **Add Variable**.

1. Enter the **Name** and **Value** for the variable. For example, enter `ADMIN_EMAIL` and your License Owner email address or another accessible email for resetting the password for the default admin account.

   ![Project variable]({{ site.baseurl }}/common/images/cloud/cloud_project_variable.png)

1. Click **Add variable**. After you add the variable, wait until deployment completes.

## Create a branch for development {#branch}

After cloning your project and updating the Magento administrator account configuration, you can branch for development. As stated earlier, you must create an environment using the `magento-cloud environment:branch <branch-name>` command or the Project Web Interface for the environment to become _active_.

-  For [Starter]({{ site.baseurl }}/cloud/architecture/starter-develop-deploy-workflow.html#clone-branch), consider creating a branch for `staging`, then create a development branch based on the `staging` branch.
-  For [Pro]({{ site.baseurl }}/cloud/architecture/pro-develop-deploy-workflow.html), create development branches based on the Integration environment.

{:.procedure}
To branch from master:

1. Create a new environment from the master branch.

   ```bash
   magento-cloud branch <new-environment-name> master
   ```

1. Update dependencies.

   ```bash
   composer --no-ansi --no-interaction install --no-progress --prefer-dist --optimize-autoloader
   ```

1. Create a [snapshot]({{ site.baseurl }}/cloud/project/project-webint-snap.html) of the environment.

   ```bash
   magento-cloud snapshot:create -e <environment-ID>
   ```

{:.ref-header}
Next step

[Install Magento]({{ site.baseurl }}/cloud/before/before-setup-env-install.html)
