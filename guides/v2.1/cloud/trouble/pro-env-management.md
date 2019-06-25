---
group: cloud-guide
title: Add Staging and Production to Pro projects UI
---

Previously, you accessed Pro Staging and Production environments by using an SSH login or submitting a ticket. We added features to the [Project Web Interface]({{ page.baseurl }}/cloud/project/project-webint-basic.html) to directly manage these environments without using an SSH login for specific options.

To add these environments to the Project Web Interface, review this entire document, complete a few preparatory steps, and submit a ticket. Your ticket is added to a queue for updating _existing_ Pro projects. The process may take time to complete, so check your ticket for details, timing, and other important information.

{:.bs-callout .bs-callout-info}
The Staging and Production environments for **New projects provisioned October 23, 2017 and later** are in the Project Web UI. You must contact your Customer Success Manager to convert a project created before this date.
 
## New Features

The new Project Web Interface provides the following features for the Pro plan Staging and Production environments:

-  Add and manage user access to the environments
-  Sync code between Staging and Production to Integration environments
-  Merge code from Integration environment to Staging environment to Production environment
-  Add and manage environment variables
-  Manage build and deploy hooks with the `.magento.app.yaml` file
-  Manage PHP versions and variables with the `.magento.app.yaml` file
-  Configure environment settings
-  Access the environments using SSH and URL
-  View status, build logs, and deployment history

You must submit a support ticket to update and modify the following in the Staging and Production environments:

-  Cron jobs
-  Redirects from `routes.yaml` file
-  Managing PHP extensions
-  Managing mounts

You **cannot** perform the following:

-  Branch from the Staging and Production environments
-  Synchronize data from the Staging and Production environments
-  View deploy logs
-  Snapshot the Staging and Production environments

### Branching hierarchy

Before converting your project, the branches include a repository for Integration, Staging, and Production. Each repository has a `master` branch with deployment targets configured for Staging and Production.

After converting your project, the hierarchical relationships appear in your Project Web Interface with three, main environment branches for Integration, Staging, and Production:

![Pro branch hierarchy]({{ site.baseurl }}/common/images/cloud_project-pro.png)

For more information on each branch, see [Pro architecture]({{ page.baseurl }}/cloud/architecture/pro-architecture.html).

## Before you upgrade

When we add Staging and Production access to the Project Web Interface, we leverage the user accounts, branch user permissions, and environment variables from your Integration `master` environment.

To prepare, verify that your settings and environment variables are correct.

-  Verify code matches across environments
-  Verify user account access
-  Prepare variables

### Verify code

We strongly recommend working in your local development environment, deploying to Integration, deploying to Staging, and, finally, deploying to Production. All code should match 100% across each of these environments. You must sync your code before submitting a ticket. This process creates a new branch of code for Staging and Production environments.

If you have additional code, such as new extensions in your Production environment without following this workflow, then deployments from Integration or Staging **overwrite** your Production code.

### Verify user account access {#prep-user}

We recommend verifying your user account access and permissions set in the Integration environment. When adding Staging and Production to the Project Web Interface, the process includes all user accounts and settings. You can modify the settings and values for these environments after they are added.

1.  Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud).
1.  From your project, click **Master** to view the environment information and settings.
1.  Click ![configure your project]({{ site.baseurl }}/common/images/cloud_edit-project.png) **Configure environment**.
1.  Click the **Users** tab to review the user accounts and permission configurations.
1.  Add, delete, or update users, if needed.

### Prepare variables {#prep-variables}

When we convert your project to the new Project Web Interface, we add variables from Integration environment to the Staging and Production environments. You can review, modify, and add variables through the current Project Web Interface prior to conversion.

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud).
1. From your project, click the Integration `master` branch to view the environment information and settings.
1. Click **Configure environment**.
1. On the _Variables_ tab, review the environment variables.  
    To create a new variable, click **Add Variable**.  
    To update an existing variable, click **Edit** next to the variable.

For environment-specific variables, including sensitive data and values, you can add those variables after we update your Project Web Interface. If you have environment variables in an `env.php` file, the file continues working after converting. You can add and manage these variables via SSH and CLI commands directly into the Staging and Production environments.

## Enter a ticket for updating the Project Web Interface {#enable}

Enter a [Support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) with the suggested title "Connect Stg / Prod to Project's UI". In the ticket, request to have your project enabled with Staging and Production in the UI.

We will review the infrastructure and settings, create user and environment variables for Staging and Production environments, and update the ticket with results.

When done, you can access review your project through the [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html).

## (Optional) Migrate environment variables
After conversion, you can manually migrate specific environment variables for Staging and Production.

1.  Open a terminal and [checkout a branch]({{ page.baseurl }}/cloud/before/before-setup-env-2_clone.html#branch) in your local environment.
1.  List all environment variables:

    ```bash
    magento-cloud variable:list
    ```

1.  Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud).
1.  Click the **Projects** tab and the name of your project.
1.  Click the Staging or Production environment.
1.  On the _Variables_ tab, review the environment variables.
1.  Enter the variable name and value.
1.  Select the **Override** checkbox if you want variables in the Project Web Interface to override local CLI or database values.

When accessing the Project Web Interface, you should see a hierarchy of branches starting from Production to Staging to Integration. Any branches you create display as children from Integration `master. For more information, see [Pro architecture]({{ page.baseurl }}/cloud/architecture/pro-architecture.html).

You can add environment-specific variables, including sensitive data and values, after we update your Project Web Interface. If you have environment variables in an `env.php` file, the file continues working after converting. See [Configure environments]({{ page.baseurl }}/cloud/env/environments.html).

## Request an upgrade

Enter a [Support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) with the suggested title "Connect Stg / Prod to Project's UI", and request to enable your project with Staging and Production in the UI.

We review the infrastructure and settings, create user and environment variables for Staging and Production environments, and communicate updates in the ticket. When complete, access and review your project through the [Project Web Interface]({{ page.baseurl }}/cloud/project/projects.html).

## Move your environment variables

Optionally, after a successful conversion you can migrate specific environment variables into the Project Web Interface for Staging and Production. This is not required, but supported. See [Magento Help Center ](https://magento.zendesk.com/hc/en-us/articles/115002998873-Add-Staging-and-Production-to-Magento-Commerce-Cloud-Pro-projects-UI).
