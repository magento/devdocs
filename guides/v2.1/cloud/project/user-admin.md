---
group: cloud-guide
subgroup: 100_project
title: Create and manage users
menu_title: Create and manage users
menu_order: 15
menu_node:
functional_areas:
  - Cloud
  - Configuration
redirect_from: /guides/v2.1/cloud/admin/admin-user-admin.html
---

{{site.data.var.ece}} enables you to administer users by assigning them one or more roles. A *role* provides access and improves security in your project. Different roles are authorized to do different things with your applications, environments, and users. You can add and manage user accounts for the entire project and permissions per available environment.

{% include cloud/wings-management.md %}

## Account owner role {#cloud-role-acct-owner}

The Account Owner is the only user with the Account Owner role. This user can perform any task in any project or environment, including deleting it. The account is associated with the email address, name, and information for the person who registered the {{site.data.var.ece}} account through the account creation process.

The account has super user access and additional capabilities for managing all aspects of your project and environments.

## Project-level roles {#cloud-role-project}

You can assign users to the following roles per project:

* Project administrator (also referred to as *super user*) can change settings and execute actions on any environment, including creating and restoring snapshots.
*  Project reader can view all environments in a project but cannot execute any actions on them.

## Environment-level roles {#cloud-role-env}

A project reader can have one of the following roles per environment:

* Environment administrator can change settings and execute actions on this environment, including merging with the parent environment.
* Environment contributor can push code to this environment and branch the environment.
* Environment reader can view this environment only.

{:.bs-callout .bs-callout-info}
We recommend you limit the environment administrator role to as few users as possible.

## Role management best practices

When a development team works on a project, the team leader can be the project administrator and decide which roles to give his team members. One team member can contribute to one environment, another member can administer a different environment, and the customer can be a reader of the `master` environment.

For your users to be able to see everything but only commit to a specific branch, change their permission level on that environment to "Contributor".

{:.bs-callout .bs-callout-warning}
An environment contributor can push code to the environment, but that user role does not have SSH access to the environment. By default, only environment administrators have SSH access. You can change the behavior in `.magento.app.yaml` by specifying `ssh: contributor`.

## Create and manage users

You can create and manage users using the Magento Cloud CLI or the Web Interface.

### Manage users with the CLI {#cloud-user-mg-cli}

You can use the {{site.data.var.ece}} command line client to fully manage your users and integrate this with any other automated system.

Available commands:

* `magento-cloud user:add` adds a user to the project
* `magento-cloud user:delete` deletes a user
* `magento-cloud user:list [users]` lists project users
* `magento-cloud user:role` views or change a user's role

For example, the following command adds the project administrator (`admin`) role to `alice@example.com` and gives her `contributor` privileges to the `development` environment:

The following prompts are displayed:

<pre class="no-copy">magento-cloud user:add

Email address: alice@example.com
The user's project role can be 'viewer' ('v') or 'admin' ('a').
Project role [V/a]: a
The user's environment-level roles can be 'viewer', 'contributor', or 'admin'.
development environment role [V/c/a]: c
Summary:
  Email address: alice@example.com
  Project role: contributor
Adding users can result in additional charges.
Are you sure you want to add this user? [Y/n]
User alice@example.com created</pre>

After this has been done, the user will receive an e-mail asking her to confirm
her details and register an account name and a password.

To change Alice's role on the environment `development` to `admin`, use the following command:

	magento-cloud user:role alice@example.com --level environment --environment development --role admin

Use `magento-cloud list` to get the full list of commands.

### Manage users with the Web Interface {#cloud-user-webinterface}

To create user accounts using the Web Interface:

1.  Log in to [your {{site.data.var.ece}} account](https://accounts.magento.cloud).
2.  Click the **Projects** tab as the following figure shows.

	![Click the projects tab to access your Cloud project]({{ site.baseurl }}/common/images/cloud_account_project.png){:width="550px"}
3.	Click the name of your project.
4.	Click the configure project button next to project name in the top navigation bar as the following figure shows.

	![Configure the project]({{ site.baseurl }}/common/images/cloud_project_gear.png){:width="184px"}
5.	In the right pane, click **Add Users**.

	![Start creating users]({{ site.baseurl }}/common/images/cloud_project-config.png){:width="500px"}
6.	Click **Add User**.

	![Add users]({{ site.baseurl }}/common/images/cloud_project-add-superuser.png){:width="500px"}
7.	Enter the user's e-mail address.
8.	Select the access for the account:

	*	For a project administrator account, select the **Super User** checkbox. This provides Admin rights for all settings and environments. If not selected, the account has only view options for all environments on a project.
	*	Select permissions per specific environment (or branch) in the Integration environment: No access, Admin (change settings, execute action, merge code), Contributor (push code), or Reader (view only). As you add active environments, you can modify permissions per user.
8.	Click **Add User**.

The users you add receive an e-mail inviting them to join the {{site.data.var.ece}} project. The user must follow the prompts to register an account and verify their e-mail address. They receive access based on the set project and environment permissions.

## Rebuild the environment {#rebuild}

After a new user is added to an environment, the environment must be rebuilt. Rebuilds are triggered when you push a new commit to an environment. To be able to rebuild without new code changes, use the command `git commit --allow-empty -m "redeploy" && git push <branch name>` to create an empty commit and "force" rebuilding the environment.

When the environment rebuild is complete, allow a short time for the routes to update fully and for the new user to be able to use SSH access.
