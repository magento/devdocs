---
layout: default
group: cloud
subgroup: 100_project
title: Manage your project
menu_title: Manage your project
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/project/projects.md
---

The {{site.data.var.ece}} *project* includes all code in Git branches, associated  environments, and *applications*. Applications have *environments* and *services* that run on them including a database, web server, and caching server.

We provide a Project Web Interface and CLI commands to fully manage all aspects of your project. For Starter, you have access to all environments and branches. For Pro, you have access to Integration environments, but use CLI to manage Staging and Production environments.

{% include cloud/wings-management.md %}

To manage your project, environment, and branches, see:

* [Basic project information]({{page.baseurl}}cloud/project/project-webint-basic.html)
* [Project structure]({{page.baseurl}}cloud/project/project-start.html)
* [Create and manage users]({{page.baseurl}}cloud/project/user-admin.html)
*	Manage branches with the [Project Web Interface]({{page.baseurl}}cloud/project/project-webint-branch.html) or [CLI commands]({{page.baseurl}}cloud/env/environments-start.html)
*	[Snapshots and backup management]({{page.baseurl}}cloud/project/project-webint-snap.html)

### Project and environment variables {#variables}
The following sections detail more about project and environment variables:

*	[Overview of environment variables]({{page.baseurl}}cloud/env/environment-vars_over.html)
*	[Magento Commerce (Cloud) environment variables]({{page.baseurl}}cloud/env/environment-vars_cloud.html)
*	[Magento application environment variables]({{page.baseurl}}cloud/env/environment-vars_magento.html)
*	[Example setting variables]({{page.baseurl}}cloud/env/set-variables.html)
*	[Configuration management]({{page.baseurl}}cloud/live/sens-data-over.html)
*	[Example of configuration management]({{page.baseurl}}cloud/live/sens-data-initial.html)

### Upgrade and patch {#upgrade}
To upgrade and patch Magento, see:

*	[Upgrade and test Magento Commerce]({{page.baseurl}}cloud/project/project-upgrade.html)
*	[Patch and test Magento Commerce]({{page.baseurl}}cloud/project/project-patch.html)

## Access the Project Web Interface {#login}
With your {{site.data.var.ece}} account created, you can log into the Project Web Interface at [https://accounts.magento.cloud](https://accounts.magento.cloud){:target="_blank"}.

![Log in to a project]({{ site.baseurl }}common/images/cloud_project-login.png){:width="450px"}

## Access the project and environments {#project}
When you first login, a list of projects you have access to displays. As a Project Owner, you may only see your company's project. A Magento Solution Partner may see multiple projects for all of the clients they support.

Click on a project to access branches and more. On the page, you will see a hierarchy of environments named by the Git branch.

For **Starter**, you will see a hierarchy of branches starting from Master (Production). Any branches you create display as children from Master. We recommend creating a Staging branch, then branching from that for your Integration development. For more information, see [Starter architecture]({{page.baseurl}}cloud/basic-information/starter-architecture.html).

![Starter branch hierarchy]({{ site.baseurl }}common/images/cloud_project-starter.png)

For **Pro**, you will see a hierarchy of branches starting from Production to Staging to Integration Master. Any branches you create display as children from Integration Master. For more information, see [Pro architecture]({{page.baseurl}}cloud/reference/discover-arch.html).

![Pro branch hierarchy]({{ site.baseurl }}common/images/cloud_project-pro.png)

To access an environment store and admin, select a branch and click **Access Site**. A list of store URLs and SSH command display. Select the URL to view the store in that environment.

![Access your project]({{ site.baseurl }}common/images/cloud_project-access.png)

The Pro plan Production environment includes three nodes that you can access using the following links:

* Load balancer URL: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`
* Direct access to one of the three redundant servers: `http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

  The production URL is used by the content delivery network (CDN).

If you have inactive Git branches of code, you can toggle displaying the branches in the hierarchy.

![Show or hide inactive branches]({{ site.baseurl }}common/images/cloud_show-inactive.png)

## Configure environments
You can manage variables and settings for Production, Staging, and Integration environments through this interface, or with CLI commands. Click **Configure environment** to create and manage [*environments*]({{page.baseurl}}cloud/env/environments.html), each of which corresponds to a Git branch.

![Access your project]({{ site.baseurl }}common/images/cloud_project-env.png)

This displays the following page, which enables you to configure settings, [variables]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html#cloud-yaml-platform-rel), [routes]({{page.baseurl}}cloud/project/project-conf-files_routes.html), and [users]({{page.baseurl}}cloud/project/user-admin.html).

![configure environments]({{ site.baseurl }}common/images/cloud_project-conf-env.png)

## Configure the project
Click ![edit project]({{ site.baseurl }}common/images/cloud_edit-project.png) (edit) to display [users]({{page.baseurl}}cloud/project/user-admin.html), and [deploy keys]({{page.baseurl}}cloud/project/project-priv-repos.html) associated with the project. You can modify access and permissions across the entire project and per environment (or branch).

![configure project]({{ site.baseurl }}common/images/cloud_project-config.png)

#### Related topics
*	[Configure Magento Commerce]({{page.baseurl}}cloud/configure/configuration-overview.html)
*	[Manage your environments]({{page.baseurl}}cloud/env/environments.html)
*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
