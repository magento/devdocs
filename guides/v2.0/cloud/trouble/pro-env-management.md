---
layout: default
group: cloud
subgroup: 170_trouble
title: Add Staging and Production to Pro projects UI
menu_title: Add Staging and Production to Pro projects UI
menu_order: 45
menu_node:
version: 2.0
github_link: cloud/trouble/pro-env-management.md
---

For existing Pro plans, you previously had to access Staging and Production environments using SSH access or entering tickets. We have added additional features to the [Project Web Interface]({{page.baseurl}}cloud/project/project-webint-basic.html) to directly manage these environments without SSH for specific options. To add these environments to the Project Web Interface, you need to complete a few preparation steps and enter a ticket.

All new projects already include these features.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
**New projects provisioned October 23, 2017 and later** will already have Staging and Production in their Project Web Interface. Any existing projects created before this date will need to enter a ticket to be converted.
</div>

## New features {#features}
The new Project Web Interface provides the following features for Pro plan Staging and Production environments:

* Add and manage user access to the environments
* Sync code between Staging and Pro to Integration environments
* Add and manage environment variables
* Configure environment settings
* Access the environments by SSH and URL. These links and commands are provided through the Access Links.
* View builds logs and deployment history

### Restricted features {#restricted}
As an important note, while you can manage Staging and Production environments, you **cannot**:

* Branch from these environments. Staging and Production only have a single branch for syncing and receiving code from Integration.
* Create snapshots through the interface. You can use SSH access with CLI commands as needed.
* View deploy logs

You will need to enter support tickets to update and modify the following in Staging and Production:

* Configurations for .magento.app.yaml and services.yaml
* Cron jobs
* Redirects from routes.yaml

You will continue to use SSH for:

* Deploy code to Staging and Production

### Branch changes {#branches}
When converted, your branches will be updated. The current branhces include a repository for Integration, Staging, and Production. Each repository has a `master` branch with deployment targets configured for Staging and Production.

After the conversion, the three repositories are merged into a single repository. You will have the following branches and environments:

<table>
<thead>
<tr>
<th>Branch</th>
<th>Environment</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>master</code></td>
<td>Integration master</td>
<td><p>The master branch of the single repository. In the Project Web Interface, this is called Integration. You branch from <code>master</code> for your development on your local, generating an environment when you push code.</p>
<p>When you convert, all active and inactive branches continue as children to the <code>master</code> branch.</p></td>
</tr>
<tr>
<td><code>production</code></td>
<td>Production</td>
<td><p>This is a branch from <code>master</code> with a deployment target. You cannot branch from this branch. You merge code from <code>master</code> to this branch to go live with updated configurations and code.</p>
<p>When you convert, the Integration <code>master</code> is branched into a <code>production</code> branch with the users access and environment variables.</p></td>
</tr>
<tr>
<td><code>staging</code></td>
<td>Staging</td>
<td><p>This is a branch from <code>master</code> with a deployment target. You cannot branch from this branch. You merge code from <code>master</code> to this branch to go live with updated configurations and code.</p>
<p>When you convert, the Integration <code>master</code> is branched into a <code>staging</code> branch with the users access and environment variables.</p></td>
</tr>
</tbody>
</table>

## Prepare for adding Staging and Production {#prepare}
When we add Staging and Production access to the Project Web Interface, we will leverage the user accounts, branch user permissions, and environment variables from your Integration `master` environment.

To prepare, ensure you have all settings and environment variables set correctly.

* [Verify user account access](#prep-user)
* [Prepare variables](#prep-variables)

### Verify user account access {#prep-user}
We recommend verifying your user account access and permissions set in the Master Integration environment. When adding Staging and Production to the Project Web Interface, all user accounts and settings are used initially. You can modify the settings and values for these environments after they are added.

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud){:target="_blank"}.
2. Click the **Projects** tab and the name of your project.
3. Click Master to open the environment information and settings.
4. Click ![configure your project]({{ site.baseurl }}common/images/cloud_edit-project.png) **Configure environment**.
5. Click the **Users** tab to review the user accounts and permission configurations.
6. You can add users if needed. Click **Add User**, enter an email address, and select a permission. These include Admin (change settings, execute action, merge code), Contributor (push code), or Reader (view only).
7. To modify the environment permissions for a user, select Edit for the account and change the permissions. These include Admin (change settings, execute action, merge code), Contributor (push code), or Reader (view only). Select a permission and save.

### Prepare variables {#prep-variables}
When we convert your project to the new Project Web Interface, we add variables from Integration `master` to Staging and Production. You can review, modify, and add variables through the current Project Web Interface prior to conversion.

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud){:target="_blank"}.
2. Click the **Projects** tab and the name of your project.
3. Click the Integration Master branch to open the environment information and settings.
4. Click the **Variables** tab and review the environment variables.
5. If you need to update variables, click ![edit variable]({{ site.baseurl }}common/images/cloud_edit-variable.png) and modify the variable and value.
6. To create a new variable, click **Add Variable**, enter the variable name and value.

For environment specific variables, including sensitive data and values, you can add those variables after we update your Project Web Interface. If you have environment variables in an `env.php` file, the file continues working after converting. You can add and manage these variables via SSH and CLI commands directly into the Staging and Production environments.

## Enter a ticket for updating the Project Web Interface {#enable}
Enter a [Support ticket]({{page.baseurl}}cloud/bk-cloud.html#gethelp) with the suggested title "Connect Stg / Prod to Project's UI". In the ticket, request to have your project enabled with Staging and Production in the UI.

We will review the infrastructure and settings, create user and environment variables for Staging and Production environments, and update the ticket with results.

When done, you can access review your project through the [Project Web Interface]({{page.baseurl}}cloud/project/projects.html).

## Optional, move environment variables {#move-variables}
Optionally, after conversion you can also migrate specific environment variables manually into the Project Web Interface for Staging and Production. This is not required, but supported.

First, SSH into the Staging or Production environment to use CLI commands to list your variables:

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud){:target="_blank"}.
2. Click the **Projects** tab and the name of your project.
3. Click the Staging or Production environment and click Access Site for the SSH link.
4. Use a terminal application to SSH into Staging or Production.
5. Enter this CLI command to list all environment variables: `magento-cloud variable:list`

Second, add the variables from the CLI list through the Project Web Interface:

1. Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud){:target="_blank"}.
2. Click the **Projects** tab and the name of your project.
3. Click the Staging or Production environment to add variables.
4. Click the **Variables** tab.
5. If you need to update variables, click ![edit variable]({{ site.baseurl }}common/images/cloud_edit-variable.png) and modify the variable and value.
6. To add a variable from the CLI list, click **Add Variable**, enter the variable name and value, and select the Override checkbox. This uses the variables from the Project Web Interface over the local CLI or database values.

You can use CLI commands to remove the variables if you want while still accessing the environment using SSH.

When accessing the Project Web Interface, you should see a hierarchy of branches starting from Production to Staging to Integration Master and so on. Any branches you create display as children from Integration Master. For more information, see [Pro architecture]({{page.baseurl}}cloud/reference/discover-arch.html).

![Pro branch hierarchy]({{ site.baseurl }}common/images/cloud_project-pro.png)

#### Related topics
* [Manage your project]({{page.baseurl}}cloud/project/projects.html)
