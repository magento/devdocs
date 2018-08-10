---
group: cloud
subgroup: 100_project
title: Manage your project
menu_title: Manage your project
menu_order: 1
menu_node: parent
version: 2.1
functional_areas:
  - Cloud
redirect_from:
  - /guides/v2.0/cloud/admin/administer.html
  - /guides/v2.1/cloud/admin/administer.html
---

The {{site.data.var.ece}} *project* includes all code in Git branches, associated environments, and *applications*. Applications have *environments* and *services* that run on them including a database, web server, and caching server.

We provide a Project Web Interface and CLI commands to fully manage all aspects of your project. You have full access to all environments for Starter and Pro environments. You may need to continue to use SSH and CLI commands for some aspects of Pro plan Staging and Production environments.

{% include cloud/wings-management.md %}

To manage your project, environment, and branches, see:

* [Configure your project]({{ page.baseurl }}/cloud/project/project-webint-basic.html)
* [Project structure]({{ page.baseurl }}/cloud/project/project-start.html)
* [Create and manage users]({{ page.baseurl }}/cloud/project/user-admin.html)
*	Manage branches with the [Project Web Interface]({{ page.baseurl }}/cloud/project/project-webint-branch.html) or [CLI commands]({{ page.baseurl }}/cloud/env/environments-start.html)
*	[Snapshots and backup management]({{ page.baseurl }}/cloud/project/project-webint-snap.html)

### Project and environment variables {#variables}

The following sections detail more about project and environment variables:

*	[Overview of environment variables]({{ page.baseurl }}/cloud/env/variables-intro.html)
*	[Magento Commerce (Cloud) environment variables]({{ page.baseurl }}/cloud/env/environment-vars_cloud.html)
*	[Magento application environment variables]({{ page.baseurl }}/cloud/env/environment-vars_magento.html)
*	[Configuration management]({{ page.baseurl }}/cloud/live/sens-data-over.html)
*	[Example of configuration management]({{ page.baseurl }}/cloud/live/sens-data-initial.html)

### Upgrade and patch {#upgrade}

To upgrade and patch Magento, see:

*	[Upgrade and test Magento Commerce]({{ page.baseurl }}/cloud/project/project-upgrade.html)
*	[Patch and test Magento Commerce]({{ page.baseurl }}/cloud/project/project-patch.html)

## Access the Project Web Interface {#login}

With your {{site.data.var.ece}} account created, you can log into the Project Web Interface at [https://accounts.magento.cloud](https://accounts.magento.cloud){:target="\_blank"}.

![Log in to a project]({{ site.baseurl }}/common/images/cloud_project-login.png){:width="450px"}

## Blackfire and New Relic credentials {#integrations}

Your project includes [Blackfire]({{ page.baseurl }}/cloud/project/project-integrate-blackfire.html) and [New Relic]({{ page.baseurl }}/cloud/project/new-relic.html) services. The project details display information for your project plan and important licenses and tokens for these integrations. Only the Account Owner has initial access to the credentials and services. You should provide these credentials to technical and developer resources as needed.

* [Blackfire.io Profiler](https://blackfire.io/magento) provides tools for reviewing and optimizing Magento and your store in your environments. The profiler checks every method and call, determining what occurs with performance metrics per step.
* [New Relic APM](https://newrelic.com) provides application metrics and performance information for Staging and Production environments.  This service is not the module or extension and does not provide infrastructure (hardware) monitoring. _Do not install_ the New Relic module with this service in {{site.data.var.ece}}.

To review your integration tokens, IDs, and more:

1. As the {{site.data.var.ece}} Account Owner, log in to your Magento Commerce project.
2. In the upper right corner, click **&lt;your name>** > **Account Settings**.

	![Go to account settings]({{ site.baseurl }}/common/images/cloud_acct-settings-option.png)
3. On your account page, click **View Details** for your project to open general settings and plan details.

	![View your project details]({{ site.baseurl }}/common/images/cloud_blackfire-edit-details.png)
4. On your project details page, scroll to and expand **Blackfire** and **New Relic** to review your credentials.

	![Your Blackfire credentials]({{ site.baseurl }}/common/images/cloud_blackfire-account-info.png)

## Access the project and environments {#project}

When you first login, a list of projects you have access to displays. As a Project Owner, you may only see your company's project. A Magento Solution Partner may see multiple projects for all of the clients they support.

Click on a project to access branches and more. On the page, you will see a hierarchy of environments named by the Git branch.

For **Starter**, you will see a hierarchy of branches starting from Master (Production). Any branches you create display as children from Master. We recommend creating a Staging branch, then branching from that for your Integration development. For more information, see [Starter architecture]({{ page.baseurl }}/cloud/basic-information/starter-architecture.html).

![Starter branch hierarchy]({{ site.baseurl }}/common/images/cloud_project-starter.png)

For **Pro**, you will see a hierarchy of branches starting from Production to Staging to Integration. The ![Enterprise icon]({{ site.baseurl }}/common/images/cloud_icon-enterprise.png) icon indicates these branches deploy to a dedicated server, used by Staging and Production. Any branches you create display as children from Integration. For more information, see [Pro architecture]({{ page.baseurl }}/cloud/architecture/pro-architecture.html).

![Pro branch hierarchy]({{ site.baseurl }}/common/images/cloud_project-pro.png)

The following table details the branches for Pro:

<table>
<thead>
<tr>
<th style="width: 125px;">Branch</th>
<th style="width: 100px;">Environment</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td>(no branch)</td>
<td>Global Master</td>
<td>This "branch" captures global project changes including adding user accounts and variables. <b>Important:</b> Do not create branches from or merge to Global Master.
</td>
</tr>
<tr>
<td><code>production</code></td>
<td>Production</td>
<td>This is a child branch from <code>master</code> with a deployment target. You cannot branch from this branch. You merge code from <code>master</code> to this branch to go live with updated configurations and code.</td>
</tr>
<tr>
<td><code>staging</code></td>
<td>Staging</td>
<td>This is a child branch from <code>master</code> with a deployment target. You cannot branch from this branch. You merge code from <code>master</code> to this branch to test in a pre-production environment.</td>
</tr>
<tr>
<td><code>master</code></td>
<td>Integration master</td>
<td>The master branch of the single repository. In the Project Web Interface, this is called Integration. You branch from <code>master</code> for your development on your local, generating an environment when you push code. When this code is complete, you merge to <code>staging</code> and <code>production</code>.</td>
</tr>
</tbody>
</table>

If you are an existing Pro merchant, and have not ticketed to [add Staging and Production]({{ page.baseurl }}/cloud/trouble/pro-env-management.html) to your UI, you will see only Integration `master` and any created branches.

![Pro branch hierarchy (original)]({{ site.baseurl }}/common/images/cloud_project-pro-old.png)

To access an environment store and admin, select a branch and click **Access Site**. A list of store URLs and SSH command display. Select the URL to view the store in that environment.

![Access your project]({{ site.baseurl }}/common/images/cloud_project-access.png)

The Pro plan Production environment includes three nodes that you can access using the following links:

* Load balancer URL: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`
* Direct access to one of the three redundant servers: `http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

  The production URL is used by the content delivery network (CDN).

If you have inactive Git branches of code, you can toggle displaying the branches in the hierarchy.

![Show or hide inactive branches]({{ site.baseurl }}/common/images/cloud_show-inactive.png)

## Configure environments {#configure}

You can manage variables and settings for Production, Staging, and Integration environments through this interface, or with CLI commands. Click **Configure environment** to create and manage [*environments*]({{ page.baseurl }}/cloud/env/environments.html), each of which corresponds to a Git branch.

![Access your project]({{ site.baseurl }}/common/images/cloud_project-env.png)

This displays the following page, which enables you to configure settings, [variables]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html, [routes]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html), and [users]({{ page.baseurl }}/cloud/project/user-admin.html).

![configure environments]({{ site.baseurl }}/common/images/cloud_project-conf-env.png)

## Configure the project

Click ![edit project]({{ site.baseurl }}/common/images/cloud_edit-project.png) (edit) to display users and deploy keys associated with the project. You can modify access and permissions across the entire project and per environment (or branch).

![configure project]({{ site.baseurl }}/common/images/cloud_project-config.png)
