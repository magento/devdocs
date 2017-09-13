---
layout: default
group: cloud
subgroup: 170_trouble
title: Add Staging and Production to Pro projects
menu_title: Add Staging and Production to Pro projects
menu_order: 45
menu_node:
version: 2.0
github_link: cloud/trouble/pro-env-management.md
---

For existing Pro plans, you had to use SSH access to enter CLI commands for deploying and managing your Staging and Production dedicated environments. We provide new functionality to provide direct environment management through the [Project Web Interface].

To access environment settings through the Project Web Interface, you need to complete a few steps to convert.

## Wings features {#features}
Wings provides the following features for Staging and Production for Pro plans:

* Add and manage user access to the environments
* Merge / deploy Integration `master` to Staging and Production
* Add and manage environment variables
* Access the environments by SSH and URL. These links and commands are provided through the Access Links.

This access does not provide the following options:

* You cannot branch from these environments. Staging and Production only have a single `master` branch for syncing and receiving code from Integration.
* You cannot create snapshots through the interface. You can use SSH access with CLI commands as needed.

You will need to enter support tickets to update and modify the following in Staging and Production:

* Specific deploy hook changes (.magento.app.yaml...? then mention .platform.app.yaml in doc)
* Cron jobs via .magento.app.yaml/.platform.app.yaml in doc?
* Redirects from routes.yaml

## Prepare for Staging and Production {#prepare}
When we add Staging and Production access to the Project Web Interface, we will leverage the user accounts and permissions and environment variables from your Integration Master environment.

To prepare, ensure you have all settings and environment variables set correctly.

### Verify user account access {#prep-user}
We recommend verifying your user account access and permissions set in the Master Integration environment.

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud){:target="_blank"}.
2. Click the **Projects** tab and the name of your project.
3. Click Master to open the environment information and settings.
4. Click ![configure your project]({{ site.baseurl }}common/images/cloud_edit-project.png) **Configure environment**.
5. Click the **Users** tab to review the user accounts and permission configurations.
6. You can add users if needed. Click **Add User**, enter an email address, and select a permission. These include Admin (change settings, execute action, merge code), Contributor (push code), or Reader (view only).
7. To modify the environment permissions for a user, select Edit for the account and change the permissions. These include Admin (change settings, execute action, merge code), Contributor (push code), or Reader (view only). Select a permission and save.

These user accounts and settings are included with Staging and Production. You can modify these account settings for these environments after they are created.

### Verify environment variables {#prep-variables}
Check over your environment variables. Modify or add environment variables as needed
(will this overwrite variables? will it ignore env variables on the server directly/env.php file?)

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud){:target="_blank"}.
2. Click the **Projects** tab and the name of your project.
3. Click Master to open the environment information and settings.
4. Click the **Variables** tab and review the environment variables.
5. If you need to update variables, click ![edit variable]({{ site.baseurl }}common/images/cloud_edit-variable.png) and modify the variable and value.
6. To create a new variable, click **Add Variable**, enter the variable name and value.

### Save environment settings {#prep-save-variables}
If you have specific variable settings for Staging and Production, we recommend saving that information.

(will they need to enter env variables through the UI? will it recognize env.php?)

## Enter a ticket for enabling "Wings" {#enable}
Enter a Support ticket requesting to have your project enabled with Wings. We will review the infrastructure and settings, create user and environment variables for Staging and Production environments.

## Verify the managable environments {#verify}
When accessing the Project Web Interface, you should see a hierarchy of branches starting from Production to Staging to Integration Master and so on. Any branches you create display as children from Integration Master. For more information, see [Pro architecture]({{page.baseurl}}cloud/reference/discover-arch.html).

![Pro branch hierarchy]({{ site.baseurl }}common/images/cloud_project-pro.png)

#### Related topics
* [Manage your project]({{page.baseurl}}cloud/project/projects.html)
