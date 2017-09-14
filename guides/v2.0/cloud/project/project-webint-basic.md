---
layout: default
group: cloud
subgroup: 100_project
title: Basic project information
menu_title: Basic project information
menu_order: 5
menu_node:
version: 2.0
github_link: cloud/project/project-webint-basic.md
---

The {{site.data.var.ece}} [Project Web Interface](https://accounts.magento.cloud){:target="_blank"} enables you to:

* Create and manage projects
* Access active environments and branches using SSH, CLI, and URLs
* Configure environment settings, environment variables, and routes
* Manage users
* Manage Git branches

## Access your project and environments {#project-access}
The Project Web Interface provides several ways to access your project and environments:

*	Your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} URL for each active (up to eight)
*	Secure Shell (SSH), a way to interact with services using a command terminal
*	Clone the project using the Magento ECE CLI
*	Clone the project using Git

To access projects and environments through the Web Interface:

1.	[Log in to your project](#project-login).
2.	Click **Access Project** for a list of URLs and SSH.

	![Access your project by URL or SSH]({{ site.baseurl }}common/images/cloud_project-access.png){:width="600px"}

For more information about using SSH, see [SSH to an environment]({{page.baseurl}}cloud/env/environments-start.html#env-start-ssh). To clone the project using either the {{site.data.var.ece}} CLI or Git, use the links in the field under the branch name.

The following figure shows an example.

![Clone the project]({{ site.baseurl }}common/images/cloud_project-clone.png){:width="600px"}

Click either **CLI** or **Git** to display the appropriate clone command. Use the ![Copy to clipboard]({{ site.baseurl }}common/images/cloud_copy-to-clipboard.png) (Copy to clipboard) button to copy the command to the clipboard.


## Get started configuring your project {#project-conf}
Configuring a project means:

*	Managing users
*	Using a deploy key to pull code from a private repository

To configure your project:

1.	[Log in to your project](#project-login).
2.	Click ![configure your project]({{ site.baseurl }}common/images/cloud_edit-project.png) (Configure project) next to the project name.
3.	See one of the following for more information:

	*	[Manage users]({{page.baseurl}}cloud/project/user-admin.html)
	*	[Pull code from a private Git repository]({{page.baseurl}}cloud/project/project-priv-repos.html)


## Get started configuring an environment {#project-conf-env}
Configuring an environment means:

*	Environment settings
*	Configuring environment variables
*	Configuring routes
*	Managing users

To configure an environment:

1.	[Log in to your project](#project-login).
2.	Click **Configure environment** under the project name, as the following figure shows.

	![Configure environment]({{ site.baseurl }}common/images/cloud_project-conf-env.png){:width="500px"}
3.	See one of the following for more information:

	*	[Environment settings](#project-conf-env-set)
	*	[Set environment variables](#project-conf-env-var)
	*	[Configure routes](#project-conf-env-route)
	*	[Manage users]({{page.baseurl}}cloud/project/user-admin.html)

### Environment settings {#project-conf-env-set}
The following table shows available environment settings.

<table>
	<tbody>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>Environment status</td>
		<td>An environment can be either <em>active</em> or <em>inactive</em>. You'll do most of your work in an active environment. After merging an environment with its parent, you can optionally delete the environment, making it inactive. To delete an environment, click <strong>Delete</strong>. You can active an inactive environment later.</td>
	</tr>
	<tr>
		<td>Outgoing emails</td>
		<td>Setting to <strong>On</strong> means that code in your environment can send and receive e-mails (for example, using PHP <code>email()</code> function. </td>
	</tr>
	<tr><td>HTTP access control</td>
	<td>Setting to <strong>On</strong> enables you to configure security for the project's Web Interface using a login and also IP address access control.</td>
	</tr>
</tbody>
</table>

### Set environment variables {#project-conf-env-var}
As discussed in [Overview of environment variables]({{page.baseurl}}cloud/env/environment-vars_over.html), environment variables are settings specific to an environment. Variables can be either text or JSON format.

To view or edit environment variables, you must have at minimum the project reader role with [environment admin]({{ page.baseurl }}cloud/project/user-admin.html#cloud-role-env) privileges.

For example, you can change the Magento Admin administrative password using environment variables as follows:

1.	Click **Add Variable**.
2.	In the **Name** field, enter `ADMIN_PASSWORD`.
3.	In the **Value** field, enter the administrator's password.

	The following figure shows an example.

	![Set environment variables]({{ site.baseurl }}common/images/cloud_env-var.png)
4.	Click **Add Variable**.
5.	Wait while the environment deploys.

### Configure routes {#project-conf-env-route}
As discussed in [routes.yaml]({{page.baseurl}}cloud/project/project-conf-files_routes.html), routes (or URLs) used to access your Magento storefront. See that section for details about what the options mean.

The following figure shows an example.

![Configure a route]({{ site.baseurl }}common/images/cloud_routes.png)


## View environment history {#project-conf-hist}
An environment's history includes:

*	Initial creation
*	Snapshots
*	Syncs and merges
*	Code pushes

To view an environment's history:

1.	[Log in to your project](#project-login).
2.	In the left pane, click the name of an environment.

	The following figure shows a sample history.

	![Sample environment history]({{ site.baseurl }}common/images/cloud_environment-history.png){:width="600px"}

	The history shows, from oldest to newest:

	*	Environment branched from `FeatureX`
	*	Environment sync'd with the parent
	*	Environment snapshot created

		We recommend [creating a snapshot]({{page.baseurl}}cloud/project/project-webint-snap.html) before you make any code changes.

	*	Environment variable added
	*	Environment snapshot created

#### Related topics
* [Project structure]({{page.baseurl}}cloud/project/project-start.html)
* [Create and manage users]({{page.baseurl}}cloud/project/user-admin.html)
*	[Manage branches]({{page.baseurl}}cloud/project/project-webint-branch.html)
*	[Snapshots and backup management]({{page.baseurl}}cloud/project/project-webint-snap.html)
