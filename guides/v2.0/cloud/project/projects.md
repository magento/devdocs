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

The {{site.data.var.ece}} *project* includes all code in Git branches, associated environments, and *applications*. Applications have *environments* and *services* that run on them including a database, web server, and caching server.

We provide a Project Web Interface to fully manage all aspects of your project. For Starter, you have access to all environments and branches. For Pro, you have access to Integration environments, but use CLI to manage Staging and Production environments.

For more detailed information about actions and the Project Web Interface, see:

* [Configure your project]({{page.baseurl}}cloud/project/project-webint-basic.html)
* [Project structure]({{page.baseurl}}cloud/project/project-start.html)
* [Create and manage users]({{page.baseurl}}cloud/project/user-admin.html)
*	[Manage branches]({{page.baseurl}}cloud/project/project-webint-branch.html)
*	[Snapshots and backup management]({{page.baseurl}}cloud/project/project-webint-snap.html)
*	[Upgrade and test Magento Commerce]({{page.baseurl}}cloud/project/project-upgrade.html)
*	[Patch and test Magento Commerce]({{page.baseurl}}cloud/project/project-patch.html)

## Access the Project Web Interface {#login}
With your {{site.data.var.ece}} account created, you can log into the Project Web Interface at [https://accounts.magento.cloud](https://accounts.magento.cloud){:target="_blank"}.

![Log in to a project]({{ site.baseurl }}common/images/cloud_project-login.png){:width="450px"}

## Access the project and environments {#project}
When you first login, a list of projects you have access to displays. As a Project Owner, you may only see your company's project. A Magento Solution Partner may see multiple projects for all of the clients they support.

Click on a project to access branches and more. On the page, you will see a series of branches of Git code and associated branches.

To access an environment store and admin, select a branch and click **Access Site**. A list of store URL and SSH command display. Select the URL to view the store in that environment.

![Access your project]({{ site.baseurl }}common/images/cloud_project-access.png){:width="450px"}

For Pro, to view Staging and Production, you need to use a URL or SSH commands:

* Staging: `http[s]://staging.<domain>.<project ID>.ent.magento.cloud`
* Production:

  * Load balancer URL: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`
  * Direct access to one of the three redundant servers: `http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

  The production URL is used by the content delivery network (CDN).

## Configure environments
Click **Configure environment** to create and manage [*environments*]({{page.baseurl}}cloud/env/environments.html), each of which corresponds to a Git branch.

![Access your project]({{ site.baseurl }}common/images/cloud_project-env.png){:width="450px"}

This displays the following page, which enables you to configure settings, [variables]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html#cloud-yaml-platform-rel), [routes]({{page.baseurl}}cloud/project/project-conf-files_routes.html), and [users]({{page.baseurl}}cloud/project/user-admin.html).

![configure environments]({{ site.baseurl }}common/images/cloud_project-conf-env.png){:width="450px"}

## Configure the project
Click ![edit project]({{ site.baseurl }}common/images/cloud_edit-project.png) (edit) to display [users]({{page.baseurl}}cloud/project/user-admin.html), and [deploy keys]({{page.baseurl}}cloud/project/project-priv-repos.html) associated with the project.

![configure project]({{ site.baseurl }}common/images/cloud_project-config.png){:width="450px"}

#### Related topics
*	[Configure Magento Commerce]({{page.baseurl}}cloud/configure/configuration-overview.html)
*	[Manage your environments]({{page.baseurl}}cloud/env/environments.html)
*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
