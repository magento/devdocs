---
layout: default
group: cloud
subgroup: 10_project
title: Manage your projects
menu_title: Manage your projects
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/project/projects.md
---

A Magento Enterprise Cloud Edition *project* is a container for your *applications*. Applications have *environments* and *services* that run on them. (Examples of services include database, web server, and caching server.)

The project's `master` branch corresponds to your live Magento store; that is, you work in Git branches (each branch corresponds on an environment) and, when you're done, you merge with the `master` branch, which is deployed to the live cloud.

## Quick tour
This section provides a quick tour of your project using the Web Interface. For more detailed information about the Web Interface, see:

*	[Manage environments (branches)]({{page.baseurl}}cloud/project/project-webint-branch.html)
*	[Project backup and restore (snapshot)]({{page.baseurl}}cloud/project/project-webint-snap.html)
*	[Basic project information]({{page.baseurl}}cloud/project/project-webint-basic.html)

### Login
Log in to your project using Bitbucket, GitHub, Google, or a e-mail address and password.

![Log in to a project]({{ site.baseurl }}common/images/cloud_project-login.png){:width="450px"}

### Access the project
Hovering the mouse pointer over **Access Site** shows how to access your site using a URL or SSH.

![Access your project]({{ site.baseurl }}common/images/cloud_project-access.png){:width="450px"}

### Configure environments
Click **Configure environment** to create and manage [*environments*]({{page.baseurl}}cloud/env/environments.html), each of which corresponds to a Git branch.

![Access your project]({{ site.baseurl }}common/images/cloud_project-env.png){:width="450px"}

This displays the following page, which enables you to configure settings, [variables]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html#cloud-yaml-platform-rel), [routes]({{page.baseurl}}cloud/project/project-conf-files_routes.html), and [users]({{page.baseurl}}cloud/admin/admin-user-admin.html).

![configure environments]({{ site.baseurl }}common/images/cloud_project-conf-env.png){:width="450px"}

### Configure the project
Click ![edit project]({{ site.baseurl }}common/images/cloud_edit-project.png) (edit) to display [users]({{page.baseurl}}cloud/admin/admin-user-admin.html), and [deploy keys]({{page.baseurl}}cloud/project/project-priv-repos.html) associated with the project.

![configure project]({{ site.baseurl }}common/images/cloud_project-config.png){:width="450px"}

### Manage users
The **Users** tab page enables you to add users to the project and to give them [privileges to access the project and environments]({{page.baseurl}}cloud/admin/admin-user-admin.html).

![Manage users]({{ site.baseurl }}common/images/cloud_project-config.png){:width="450px"}

<div class="bs-callout bs-callout-info" id="info">
  <p>Currently, permissions changes that grant or revoke SSH access to an environment take effect only after the next time that environment is deployed.</p>
</div>

Click **Add User**. The following page displays.

![Add users]({{ site.baseurl }}common/images/cloud_project-user-add.png){:width="450px"}

Selecting the **Super user** check box grants project administrator privileges to the user.

<div class="bs-callout bs-callout-info" id="info">
  <p>The Account owner is locked; you can't change its permissions.</p>
</div>

#### Related topics
*	[Get started with a project]({{page.baseurl}}cloud/project/project-start.html)
*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
